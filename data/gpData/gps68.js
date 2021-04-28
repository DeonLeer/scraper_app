const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 47,
  "time_alive": 259,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 13,
  "time_alive": 1458,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 50,
  "time_alive": 123,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 39,
  "time_alive": 587,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 44,
  "time_alive": 421,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 26,
  "time_alive": 1259,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 39,
  "time_alive": 878,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 33,
  "time_alive": 1053,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 30,
  "time_alive": 1083,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 11,
  "time_alive": 1466,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 16,
  "time_alive": 1402,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 31,
  "time_alive": 1096,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 9,
  "time_alive": 1433,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 16,
  "time_alive": 1388,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 48,
  "time_alive": 88,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 46,
  "time_alive": 290,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 28,
  "time_alive": 1161,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 26,
  "time_alive": 1237,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 6,
  "time_alive": 1507,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 16,
  "time_alive": 1410,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 20,
  "time_alive": 1370,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "1b2859ae793d4c8293b1bd593571a860:45ce4565b6db452c9419119b12e7eac3",
  "placement": 48,
  "time_alive": 162,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 13,
  "time_alive": 1381,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 36,
  "time_alive": 890,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 42,
  "time_alive": 507,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 47,
  "time_alive": 202,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 11,
  "time_alive": 1474,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 49,
  "time_alive": 99,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 45,
  "time_alive": 301,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 47,
  "time_alive": 167,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 26,
  "time_alive": 1214,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 40,
  "time_alive": 823,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 27,
  "time_alive": 1208,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 19,
  "time_alive": 1351,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1512,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 27,
  "time_alive": 1194,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 37,
  "time_alive": 922,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "57d89f18a34a4358b701e9f84dcbfcb2:c3b1898a728844808067252350e5288a",
  "placement": 15,
  "time_alive": 1393,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 15,
  "time_alive": 1377,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 41,
  "time_alive": 600,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 44,
  "time_alive": 451,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 34,
  "time_alive": 1056,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 10,
  "time_alive": 1475,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 29,
  "time_alive": 1157,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 39,
  "time_alive": 607,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 12,
  "time_alive": 1400,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 36,
  "time_alive": 997,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 44,
  "time_alive": 333,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 17,
  "time_alive": 1357,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 18,
  "time_alive": 1378,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 34,
  "time_alive": 889,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 38,
  "time_alive": 631,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 27,
  "time_alive": 1244,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 11,
  "time_alive": 1407,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 12,
  "time_alive": 1397,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 24,
  "time_alive": 1352,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 15,
  "time_alive": 1376,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 28,
  "time_alive": 1192,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 42,
  "time_alive": 374,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 43,
  "time_alive": 285,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 38,
  "time_alive": 877,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "4acefca3bb174edabf72988632827191:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 24,
  "time_alive": 1310,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 47,
  "time_alive": 149,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 38,
  "time_alive": 840,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 10,
  "time_alive": 1419,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 35,
  "time_alive": 932,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 30,
  "time_alive": 1152,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 32,
  "time_alive": 1014,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 26,
  "time_alive": 1266,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "7abcbf346948458280f12e381a8e1832:7d24989de6264de09b332b204e1319ec",
  "placement": 4,
  "time_alive": 1476,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 35,
  "time_alive": 1070,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 13,
  "time_alive": 1416,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 8,
  "time_alive": 1430,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 29,
  "time_alive": 1177,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 29,
  "time_alive": 1208,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 23,
  "time_alive": 1356,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 28,
  "time_alive": 1218,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 37,
  "time_alive": 827,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 32,
  "time_alive": 1147,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 23,
  "time_alive": 1354,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 45,
  "time_alive": 357,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 46,
  "time_alive": 273,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 46,
  "time_alive": 263,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 44,
  "time_alive": 276,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 43,
  "time_alive": 448,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 7,
  "time_alive": 1453,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 44,
  "time_alive": 382,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 45,
  "time_alive": 318,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 24,
  "time_alive": 1288,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 16,
  "time_alive": 1414,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 36,
  "time_alive": 858,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 30,
  "time_alive": 1154,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 18,
  "time_alive": 1395,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "08126bda4ec047faad395b794ed45fc9:350ca401553c436caa03a14fe67a55fc",
  "placement": 23,
  "time_alive": 1331,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 21,
  "time_alive": 1370,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 48,
  "time_alive": 201,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 23,
  "time_alive": 1345,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 22,
  "time_alive": 1330,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 40,
  "time_alive": 462,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 48,
  "time_alive": 233,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 43,
  "time_alive": 281,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 29,
  "time_alive": 1152,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 41,
  "time_alive": 628,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 44,
  "time_alive": 347,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 47,
  "time_alive": 252,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 42,
  "time_alive": 305,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 3,
  "time_alive": 1510,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "314f0887173d4030a659573a6a020bc1:5dd3674a930d4538bdf998759b95c0cc",
  "placement": 33,
  "time_alive": 959,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 40,
  "time_alive": 876,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 31,
  "time_alive": 1113,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 11,
  "time_alive": 1403,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 48,
  "time_alive": 179,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 49,
  "time_alive": 124,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 48,
  "time_alive": 182,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 41,
  "time_alive": 476,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:df3e149d42dd440d92029f03b183a4c5",
  "placement": 35,
  "time_alive": 941,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 27,
  "time_alive": 1209,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 25,
  "time_alive": 1268,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 33,
  "time_alive": 1045,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 41,
  "time_alive": 591,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 41,
  "time_alive": 381,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 25,
  "time_alive": 1317,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 49,
  "time_alive": 227,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39:dc4cbe5f34b74a528636c0392004f516",
  "placement": 45,
  "time_alive": 183,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:efd4b17204c346aaa1672add49529a6c",
  "placement": 46,
  "time_alive": 223,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1413,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:efd4b17204c346aaa1672add49529a6c",
  "placement": 39,
  "time_alive": 722,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:efd4b17204c346aaa1672add49529a6c",
  "placement": 38,
  "time_alive": 794,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:efd4b17204c346aaa1672add49529a6c",
  "placement": 50,
  "time_alive": 96,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 38,
  "time_alive": 956,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 35,
  "time_alive": 1001,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 35,
  "time_alive": 840,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 49,
  "time_alive": 97,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 43,
  "time_alive": 371,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 36,
  "time_alive": 732,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 33,
  "time_alive": 964,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 36,
  "time_alive": 843,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "13d58fb9-a253-4957-ace4-542d35a163b9",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 30,
  "time_alive": 1149,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "f1de05c9-665c-402e-90c1-8e6c30f5902b",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 28,
  "time_alive": 1157,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01f717b0-0c80-42b1-8368-f283aeff7324",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 49,
  "time_alive": 172,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3d9ae12b-4909-48d4-812a-f288015f17c9",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 50,
  "time_alive": 96,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "0f681bc0-87f3-4740-a201-67ad5ace1219",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 37,
  "time_alive": 847,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "54d433a8-867b-423a-9a5a-85d563cbfc4b",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 47,
  "time_alive": 205,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1509c576-2760-4026-aae9-81b31e894c8d",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 30,
  "time_alive": 997,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "f59651ee-395f-4f0c-b6d7-aa29e53d45e5",
  "team_id": "7004cd495bd34662945c508d118f65a7:b2efa308e20b467c8b13c510677d77e7",
  "placement": 30,
  "time_alive": 1164,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1509,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 3,
  "time_alive": 1506,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1526,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 6,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1543,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 14,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 5,
  "time_alive": 1485,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 2,
  "time_alive": 1526,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 9,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 1,
  "time_alive": 1553,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "3fb44adba289439b84d40b5bc8964122:57d89f18a34a4358b701e9f84dcbfcb2:cc383e693def4c0e831b285f97dbf299",
  "placement": 16,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 16,
  "time_alive": 1330,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 4,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 3,
  "time_alive": 1512,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 3,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 15,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 4,
  "time_alive": 1507,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 21,
  "time_alive": 1208,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 2,
  "time_alive": 1517,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 20,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 14,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 12,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 2,
  "time_alive": 1543,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 12,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 7,
  "time_alive": 1457,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 28,
  "time_alive": 817,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 20,
  "time_alive": 1157,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 2,
  "time_alive": 1553,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 11,
  "time_alive": 1449,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 19,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 16,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 1,
  "time_alive": 1478,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 4,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 27,
  "time_alive": 501,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 4,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 26,
  "time_alive": 868,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 26,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 13,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 6,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "8a6cf3823da34ca9a446e5807dace6b4:92074c2207244530acd285ed7f4b34a6:b7cc38d8f28f4600a085629349e78830",
  "placement": 6,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 5,
  "time_alive": 1473,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 27,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 7,
  "time_alive": 1456,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 5,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:b49902cbd1b44fb48907a2586bc8280b:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 27,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 11,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1517,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 9,
  "time_alive": 1433,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 9,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 6,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 31,
  "time_alive": 588,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 8,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 29,
  "time_alive": 275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "08126bda4ec047faad395b794ed45fc9:1f8478d659a24107b0c693d279d81b95:b8d5325bcc564b19af93e5a73f08dec3",
  "placement": 14,
  "time_alive": 1361,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 22,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 24,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 8,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 23,
  "time_alive": 1011,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 7,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 20,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 13,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 5,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 27,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1469,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 13,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 11,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 2,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 25,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 15,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 27,
  "time_alive": 385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 11,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 24,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 29,
  "time_alive": 502,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 3,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 7,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 2,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 19,
  "time_alive": 1228,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 30,
  "time_alive": 686,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 30,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 22,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "31e8cbce65e94d5085105592eff7f6e7:e0c64840d01147e0808edce694ae9dbb:e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 9,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 6,
  "time_alive": 1470,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 21,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 25,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 4,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 17,
  "time_alive": 1340,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 12,
  "time_alive": 1424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 7,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 15,
  "time_alive": 1366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 21,
  "time_alive": 1181,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 22,
  "time_alive": 1015,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 5,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:dd3acde2f2b644f98ccb062dbe48bb44:df3e149d42dd440d92029f03b183a4c5",
  "placement": 17,
  "time_alive": 1252,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 17,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 25,
  "time_alive": 944,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 4,
  "time_alive": 1478,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 24,
  "time_alive": 1006,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 16,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 10,
  "time_alive": 1460,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 18,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 10,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 7,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 13,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 18,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 24,
  "time_alive": 715,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 16,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 6,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 19,
  "time_alive": 1237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 10,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 24,
  "time_alive": 988,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 3,
  "time_alive": 1509,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 9,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 15,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 23,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 20,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 15,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 20,
  "time_alive": 1220,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 23,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 16,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 21,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 13,
  "time_alive": 1369,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 32,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 30,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 10,
  "time_alive": 1421,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 21,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 9,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 30,
  "time_alive": 292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 26,
  "time_alive": 389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 23,
  "time_alive": 1030,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 19,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 10,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 28,
  "time_alive": 420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 23,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 8,
  "time_alive": 1444,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 29,
  "time_alive": 777,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 17,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 26,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 5,
  "time_alive": 1502,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 10,
  "time_alive": 1429,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 18,
  "time_alive": 1276,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 23,
  "time_alive": 991,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 28,
  "time_alive": 350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 28,
  "time_alive": 428,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 13,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 11,
  "time_alive": 1414,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 28,
  "time_alive": 530,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 31,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 8,
  "time_alive": 1448,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 12,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 15,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 18,
  "time_alive": 1250,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 20,
  "time_alive": 1247,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 19,
  "time_alive": 1136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 25,
  "time_alive": 406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 29,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 12,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 26,
  "time_alive": 777,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 18,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 22,
  "time_alive": 1051,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 29,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 14,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 33,
  "time_alive": 325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 25,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 11,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "455af85bbbd044ec96f7f1eea519e372:aaa6130de0704dbead7ef18acd48dd84:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 26,
  "time_alive": 701,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 30,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 18,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 32,
  "time_alive": 464,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 12,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 19,
  "time_alive": 1250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 25,
  "time_alive": 744,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 33,
  "time_alive": 197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 31,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 17,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 28,
  "time_alive": 538,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 30,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 21,
  "time_alive": 1112,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08674be0-d9e7-495d-b54f-b60fa76254ed",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 31,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "019c7743-aa50-47be-8289-57f001574acd",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 22,
  "time_alive": 1102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00d16e81-6e5b-457e-8fa1-c07ce011b8f0",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 14,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "003c4792-e5f7-4956-9461-ec590fa1aed9",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 31,
  "time_alive": 229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "016ada84-b9a9-41d9-80f8-6efba027978b",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 24,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "035be7be-cf4d-4620-9a02-fdd10fa42b89",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 29,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 6,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 1,
  "time_alive": 1458,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 3,
  "time_alive": 1453,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 1,
  "time_alive": 1475,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 8,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 2,
  "time_alive": 1510,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 1,
  "time_alive": 1462,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 5,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 1,
  "time_alive": 1455,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 19,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 30,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:23b619c0f2f7462191b903bd29c34ac6",
  "placement": 7,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 2,
  "time_alive": 1462,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 16,
  "time_alive": 1205,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 5,
  "time_alive": 1411,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 16,
  "time_alive": 1288,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 21,
  "time_alive": 1061,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 5,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 7,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 10,
  "time_alive": 1347,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 2,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 23,
  "time_alive": 1041,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 6,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 9,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 3,
  "time_alive": 1458,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 2,
  "time_alive": 1458,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 17,
  "time_alive": 1212,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 26,
  "time_alive": 468,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 12,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "a83014f91e0c406da2c9840c015f3400:d3d25f74cbf846ec9359446bfa92f637:ecb3215f62f0432c801165b372008d9e",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 23,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 13,
  "time_alive": 1316,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 6,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 3,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 5,
  "time_alive": 1406,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 20,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 8,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 8,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 18,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 8,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 9,
  "time_alive": 1357,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:4acefca3bb174edabf72988632827191:bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 10,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 22,
  "time_alive": 958,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 16,
  "time_alive": 1280,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 9,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 10,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 1,
  "time_alive": 1510,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 22,
  "time_alive": 1136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 28,
  "time_alive": 523,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 23,
  "time_alive": 1023,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 2,
  "time_alive": 1475,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 18,
  "time_alive": 1087,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32:8bf410cb45c045a0b8efcf7ec0c0b14d:a9851f52e4bf452a8864414e05f06306",
  "placement": 6,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 4,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 20,
  "time_alive": 1094,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 7,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 15,
  "time_alive": 1289,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 25,
  "time_alive": 979,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:2b987b57eff147dd934b0e33e62035f8:a8fb52a615814c459516416714439bd4",
  "placement": 4,
  "time_alive": 1497,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 19,
  "time_alive": 1184,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 9,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 20,
  "time_alive": 1098,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 17,
  "time_alive": 1264,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 13,
  "time_alive": 1315,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 3,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 17,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 7,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 4,
  "time_alive": 1421,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 5,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 24,
  "time_alive": 1029,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "37da09eb8b574968ad36da5adc02232b:df2f8ff5bee04f5eb11dfe0f384bedce:e256124d31564fb881d77857d9fee45d",
  "placement": 14,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 25,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 17,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 24,
  "time_alive": 982,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 4,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 1,
  "time_alive": 1426,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 15,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 11,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 12,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 19,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 7,
  "time_alive": 1427,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 19,
  "time_alive": 1084,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 16,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 21,
  "time_alive": 1140,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 23,
  "time_alive": 896,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 30,
  "time_alive": 337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 25,
  "time_alive": 818,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 2,
  "time_alive": 1426,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "125ce2dfb194453184551649f77c5d1b:ad2cba17800941a88ee5d803406bb336:bcdcdec11c47406ca5ed5d8187a2df25",
  "placement": 17,
  "time_alive": 1330,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 9,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1437,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 26,
  "time_alive": 616,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 23,
  "time_alive": 1051,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 19,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 27,
  "time_alive": 474,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 21,
  "time_alive": 980,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 27,
  "time_alive": 517,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 10,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 7,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 8,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 20,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 11,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 10,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 6,
  "time_alive": 1432,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 16,
  "time_alive": 1260,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 12,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 10,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 29,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 8,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 11,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 20,
  "time_alive": 1068,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 23,
  "time_alive": 1060,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 5,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 18,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 29,
  "time_alive": 436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 12,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 4,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 31,
  "time_alive": 126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 12,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 6,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 22,
  "time_alive": 1073,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 13,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 11,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:3aba78cf9e644273807c36b6185fd400:47357f2065884a469537f478728c22d8",
  "placement": 22,
  "time_alive": 1146,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 13,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 4,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 33,
  "time_alive": 52,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 29,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 17,
  "time_alive": 1229,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 29,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 30,
  "time_alive": 258,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 31,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 12,
  "time_alive": 1323,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 14,
  "time_alive": 1306,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 32,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 24,
  "time_alive": 936,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 14,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 30,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 11,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 20,
  "time_alive": 1109,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 28,
  "time_alive": 561,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 11,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 31,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 25,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 15,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 22,
  "time_alive": 1065,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 3,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 30,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 15,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 19,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 9,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 24,
  "time_alive": 904,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 14,
  "time_alive": 1296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 27,
  "time_alive": 210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 18,
  "time_alive": 1212,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 15,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 13,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 18,
  "time_alive": 1215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 33,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 26,
  "time_alive": 278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 28,
  "time_alive": 376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 28,
  "time_alive": 481,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 30,
  "time_alive": 225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 15,
  "time_alive": 1287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 13,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 16,
  "time_alive": 1304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 14,
  "time_alive": 1292,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 25,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 31,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 26,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "4a5510fa888c4b5bbb755d334574308a:5cb47d3151d8403e8278c29b229916b6:649b0562422b4eada9e2898fbdebc550",
  "placement": 18,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 29,
  "time_alive": 326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 26,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 14,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 28,
  "time_alive": 341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 31,
  "time_alive": 236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "368d2f7a442c407fa26448c9aa10fc5a:593d132d1e184c4ba8360b4efab330da:b72e0314f03e4b999452ca5242899408",
  "placement": 28,
  "time_alive": 168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 24,
  "time_alive": 1108,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 24,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 31,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 27,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 22,
  "time_alive": 1058,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "18364a7261c84bc7ab66f92cc8a70e84:19cbc7c9d0754162870061ffe6596bcb:3361023e69664b8cb9c327bb71ae7ef9",
  "placement": 25,
  "time_alive": 597,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 32,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 32,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 32,
  "time_alive": 69,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 32,
  "time_alive": 137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 29,
  "time_alive": 446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "010bc59d-4d2e-4ba6-96ed-5390e2949fcb",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64:df5880bd20e543fea195a29d1521a28c",
  "placement": 32,
  "time_alive": 119,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "046956b2-614c-48fe-a6e6-bf3f37f1df6c",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 26,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0026972a-759b-4fac-a27b-253a20d45343",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 27,
  "time_alive": 782,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04fc578c-c573-48e5-acf3-460946702d20",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 21,
  "time_alive": 1080,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d2a89c-93e0-4c3e-8151-6036dfe0880f",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 21,
  "time_alive": 1086,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1206beef-2e09-4714-b693-6cb679ff2b5a",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 12,
  "time_alive": 1353,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 1,
  "time_alive": 1602,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 1,
  "time_alive": 1435,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 17,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 3,
  "time_alive": 1566,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:f6b9302087224fb1861e336019e9223b:fd6f14ab4e6b4e1e8976798bb459905e",
  "placement": 3,
  "time_alive": 1528,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1499,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1602,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 6,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 11,
  "time_alive": 1294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1571,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 14,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 1,
  "time_alive": 1607,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 3,
  "time_alive": 1507,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 27,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 30,
  "time_alive": 471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 11,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 2,
  "time_alive": 1563,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1607,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 22,
  "time_alive": 926,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1408,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1340,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:6f3ebc481092450aaf883aa49722914f:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 32,
  "time_alive": 288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 9,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 25,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 32,
  "time_alive": 449,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 5,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 9,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 1,
  "time_alive": 1563,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 3,
  "time_alive": 1526,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 13,
  "time_alive": 1246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 2,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 8,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 10,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 9,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 6,
  "time_alive": 1509,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 16,
  "time_alive": 1207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 3,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 13,
  "time_alive": 1257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 5,
  "time_alive": 1462,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "ca302d5a89b64847a0000f3d11b81a33:e052da67f88046d295b36cdfc4231cb5:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 33,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 24,
  "time_alive": 1086,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 8,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 11,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 26,
  "time_alive": 731,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 1,
  "time_alive": 1571,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 6,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1487,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 14,
  "time_alive": 1240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 23,
  "time_alive": 979,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 6,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 12,
  "time_alive": 1337,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 5,
  "time_alive": 1499,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 20,
  "time_alive": 1291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 11,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 13,
  "time_alive": 1338,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 1,
  "time_alive": 1522,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 27,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "3b5d912ab40e4102a499dbe35eee28ff:b91fddfacace40c58574f75882e6d9bb:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 19,
  "time_alive": 1279,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 17,
  "time_alive": 1316,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 7,
  "time_alive": 1353,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 31,
  "time_alive": 768,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 4,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 17,
  "time_alive": 1198,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be:862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 29,
  "time_alive": 331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 15,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 21,
  "time_alive": 1029,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 7,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 3,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 6,
  "time_alive": 1456,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "73e1c823b8604975b91849d81108d7e7:d2ff6803ffb449fc86bfc5a7962d11f4:ffd954ed6eb245a8bf4730f59d4cd783",
  "placement": 26,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 21,
  "time_alive": 1280,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 6,
  "time_alive": 1434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 20,
  "time_alive": 1116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 16,
  "time_alive": 1231,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 15,
  "time_alive": 1238,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "350ca401553c436caa03a14fe67a55fc:42e5c65826bd4e0c99f98431ab9baa1b:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 13,
  "time_alive": 1350,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 13,
  "time_alive": 1352,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 5,
  "time_alive": 1445,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 30,
  "time_alive": 798,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 25,
  "time_alive": 738,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 33,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "0f0fdefabb494a119c9487ad3f98e5db:c541c31baf354e63b3eda6cacfd4ca1b:f73cd82155304745a800e06082d28633",
  "placement": 8,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 4,
  "time_alive": 1522,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 4,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 15,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 16,
  "time_alive": 1235,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 31,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 5,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 23,
  "time_alive": 904,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 21,
  "time_alive": 1097,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 29,
  "time_alive": 509,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 28,
  "time_alive": 720,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "693124d04a9d439c967675d9e156758a:7ce93ad59fdd4fd587cdb370c3ba71e6:befb0c173cd242d982d355078cf82202",
  "placement": 20,
  "time_alive": 1204,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 23,
  "time_alive": 1138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 15,
  "time_alive": 1222,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 10,
  "time_alive": 1367,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 27,
  "time_alive": 727,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 18,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 10,
  "time_alive": 1404,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 29,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 20,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 26,
  "time_alive": 863,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 7,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 7,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 15,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 19,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 10,
  "time_alive": 1301,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 18,
  "time_alive": 1263,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 2,
  "time_alive": 1522,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 22,
  "time_alive": 1045,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 22,
  "time_alive": 1068,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 25,
  "time_alive": 921,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 28,
  "time_alive": 764,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 14,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 10,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 19,
  "time_alive": 1136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "8744c25cf9ba420fb5b2725308823639:c307ea0e2ff949a2b547b79838c665a9:cb93f923ef344e97a90d5f82a220bacc",
  "placement": 4,
  "time_alive": 1504,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 18,
  "time_alive": 1311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 12,
  "time_alive": 1267,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 9,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 23,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 13,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 12,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 27,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 33,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 19,
  "time_alive": 1187,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 14,
  "time_alive": 1255,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 14,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "067ba5b9dad347da869e6d1b9031922d:9ed9a8c465ec4ca2b7e7ce9e73eb81c2:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 7,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 11,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 24,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 24,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 18,
  "time_alive": 1031,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 26,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 11,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 26,
  "time_alive": 516,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 26,
  "time_alive": 776,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 8,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 12,
  "time_alive": 1267,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 20,
  "time_alive": 1136,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 27,
  "time_alive": 613,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 14,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 29,
  "time_alive": 739,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 4,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 22,
  "time_alive": 927,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 23,
  "time_alive": 960,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "27ddc88e9b7e4bf78af57e35f5e21820:45ce4565b6db452c9419119b12e7eac3:5360b54827804484b1e74ef4ac191c67",
  "placement": 28,
  "time_alive": 427,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 16,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 19,
  "time_alive": 1107,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 12,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 15,
  "time_alive": 1252,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 25,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 16,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 28,
  "time_alive": 350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 27,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 22,
  "time_alive": 1012,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 21,
  "time_alive": 954,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 8,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:768ac9ccc68c42a3af2521c86e7a061e:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 17,
  "time_alive": 1291,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 22,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 9,
  "time_alive": 1317,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 16,
  "time_alive": 1296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 28,
  "time_alive": 652,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 21,
  "time_alive": 1049,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 25,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "71b4b384fd4043eca66af73ef61cc841:cd1772475c72424d9bd402149fffd9f6:e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 31,
  "time_alive": 206,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "71b4b384fd4043eca66af73ef61cc841:cd1772475c72424d9bd402149fffd9f6:e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 17,
  "time_alive": 1132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "71b4b384fd4043eca66af73ef61cc841:cd1772475c72424d9bd402149fffd9f6:e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 17,
  "time_alive": 1278,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "71b4b384fd4043eca66af73ef61cc841:cd1772475c72424d9bd402149fffd9f6:e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 19,
  "time_alive": 1020,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "71b4b384fd4043eca66af73ef61cc841:cd1772475c72424d9bd402149fffd9f6:e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 29,
  "time_alive": 464,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "71b4b384fd4043eca66af73ef61cc841:cd1772475c72424d9bd402149fffd9f6:e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 21,
  "time_alive": 1068,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 10,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 18,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 25,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 20,
  "time_alive": 1013,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 31,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "18d9353296ad4724849b153c6ddcd137:c078da500f864257b95b55946fee9339:c38771d9c7b04b54bfa2fe2761378099",
  "placement": 23,
  "time_alive": 919,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 30,
  "time_alive": 723,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 29,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 31,
  "time_alive": 415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 24,
  "time_alive": 953,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 30,
  "time_alive": 316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 32,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 32,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 33,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 32,
  "time_alive": 394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 32,
  "time_alive": 261,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 18,
  "time_alive": 1284,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018330c1-16d2-46c8-9859-30d93bd34a52",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 30,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00225040-ae4e-47d3-a679-158c9881a08b",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 31,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "08d79edb-bb12-4339-9624-783a6c25314c",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 28,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00b34292-e830-44a1-b19c-13434274b7e7",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 24,
  "time_alive": 779,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "004e8f93-91bb-44a9-9b83-9ef8feab3077",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 30,
  "time_alive": 448,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00c4dd83-05cb-4618-ba13-ca5c3886d495",
  "team_id": "071d5877276749babefb5b673fc4fac5:9e53e06f12ad4e6aba6846e39b34f654:e943dbe706b041ac852de2b55b6108a5",
  "placement": 24,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 5,
  "time_alive": 1357,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 7,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 20,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1453,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 4,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:827abb1cd9fb4618991425c2d3ba9b76:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1480,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 1,
  "time_alive": 1403,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 4,
  "time_alive": 1393,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 27,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 3,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 12,
  "time_alive": 1343,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:3747a0e217984e399aefc25c5cfb16dd:af5e354532f64ea69fb53772e39b0340",
  "placement": 23,
  "time_alive": 932,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 2,
  "time_alive": 1403,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 31,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 1,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 23,
  "time_alive": 1099,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 16,
  "time_alive": 1318,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:7b9f93f83aa9457ea67113f9ea3162a9:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 5,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 15,
  "time_alive": 1269,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1459,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 3,
  "time_alive": 1445,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 5,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 20,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 25,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 2,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 2,
  "time_alive": 1470,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 29,
  "time_alive": 445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 13,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "3c4e8219851d4dc097fe17246799e745:76b369b495544d138ff60e26d32897f9:c301998e20ce4c7d9ebbe40f165cc5e9",
  "placement": 7,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 7,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 17,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 1,
  "time_alive": 1453,
  "elims": 20,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 25,
  "time_alive": 683,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 10,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 26,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 5,
  "time_alive": 1380,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 6,
  "time_alive": 1404,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 31,
  "time_alive": 248,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 2,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "37d6edf667a04dda9f642d1acba7119b:827187b423f94671b75741dd6520792b:aafddb387f6b4002b7aafd1192783db3",
  "placement": 15,
  "time_alive": 1311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 14,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 10,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 13,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 20,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 1,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "3392bd540032489da6c083c0a72d8b38:5f2f4a9cfead43709221233aefb1e23d:a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 13,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 6,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 26,
  "time_alive": 972,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 22,
  "time_alive": 1087,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 21,
  "time_alive": 1197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 5,
  "time_alive": 1436,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 3,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 20,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 24,
  "time_alive": 977,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 23,
  "time_alive": 1064,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 17,
  "time_alive": 1285,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 3,
  "time_alive": 1465,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:439e741737a54167821c99741b6a1369:e6c4db107f054a4d87843bf653e1a840",
  "placement": 2,
  "time_alive": 1480,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 23,
  "time_alive": 981,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 23,
  "time_alive": 979,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 8,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 24,
  "time_alive": 1089,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 8,
  "time_alive": 1378,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "96100f9b2871486aad7cc61d01236695:9e24ee30d65d440f8d03a4946a9f1d43:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 4,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 9,
  "time_alive": 1302,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 3,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 12,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 10,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 32,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:17d61e75dd7d44ff84fd2009ffdaf977:7961a2766c47482286b73546d1758150",
  "placement": 17,
  "time_alive": 1288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 8,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 11,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 7,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 7,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 22,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21:8e66bee5c50b44869a16e3d59c270894:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 14,
  "time_alive": 1318,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 27,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 6,
  "time_alive": 1349,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 5,
  "time_alive": 1405,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 16,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 14,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "47759f160f6644c2a735b626a6fab849:626ef1bd708b4a3abcafd4caa43b629a:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 25,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 10,
  "time_alive": 1302,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 13,
  "time_alive": 1295,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 19,
  "time_alive": 1241,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 28,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 9,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 4,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 25,
  "time_alive": 976,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 31,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 4,
  "time_alive": 1436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 7,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "077343a20e474723aecc78d877aec8d3:803c263c083143e6b103c6e390696823:cbfa6071b14a43108e99c22313431944",
  "placement": 22,
  "time_alive": 949,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 24,
  "time_alive": 924,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 8,
  "time_alive": 1335,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 4,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 14,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 18,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "5b804cf9aec94180821570a64c165cf4:bbd235432e784221a609b7cb6ef46538:f75b5b38bd944c7cb2880116633ef447",
  "placement": 18,
  "time_alive": 1222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 11,
  "time_alive": 1302,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 15,
  "time_alive": 1274,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 25,
  "time_alive": 967,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 8,
  "time_alive": 1374,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 15,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "314f0887173d4030a659573a6a020bc1:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 28,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "3df4923646054d5880f27c714dd19072:7923f2db8a6a443f8896f1bb24b09026:e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 28,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "3df4923646054d5880f27c714dd19072:7923f2db8a6a443f8896f1bb24b09026:e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 20,
  "time_alive": 1113,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "3df4923646054d5880f27c714dd19072:7923f2db8a6a443f8896f1bb24b09026:e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 11,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "3df4923646054d5880f27c714dd19072:7923f2db8a6a443f8896f1bb24b09026:e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 12,
  "time_alive": 1341,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "3df4923646054d5880f27c714dd19072:7923f2db8a6a443f8896f1bb24b09026:e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 10,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "3df4923646054d5880f27c714dd19072:7923f2db8a6a443f8896f1bb24b09026:e6ae77e0ccc747439f2b6c58eca9e246",
  "placement": 16,
  "time_alive": 1304,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3:3b68fdab54b547b488e94b563540e314:e5578416483641a593b7e1825e99b4c6",
  "placement": 3,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3:3b68fdab54b547b488e94b563540e314:e5578416483641a593b7e1825e99b4c6",
  "placement": 27,
  "time_alive": 969,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3:3b68fdab54b547b488e94b563540e314:e5578416483641a593b7e1825e99b4c6",
  "placement": 10,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3:3b68fdab54b547b488e94b563540e314:e5578416483641a593b7e1825e99b4c6",
  "placement": 11,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3:3b68fdab54b547b488e94b563540e314:e5578416483641a593b7e1825e99b4c6",
  "placement": 28,
  "time_alive": 460,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "0c43f0c67a8b4bfcaee63098079b2ba3:3b68fdab54b547b488e94b563540e314:e5578416483641a593b7e1825e99b4c6",
  "placement": 19,
  "time_alive": 1217,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 29,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 18,
  "time_alive": 1184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 15,
  "time_alive": 1297,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 6,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 23,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 8,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:517b9b4a76bf41ae9027acd4648d08f8:f05f9684754b4e9ca13c65b6fc409071",
  "placement": 17,
  "time_alive": 1211,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:517b9b4a76bf41ae9027acd4648d08f8:f05f9684754b4e9ca13c65b6fc409071",
  "placement": 14,
  "time_alive": 1281,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:517b9b4a76bf41ae9027acd4648d08f8:f05f9684754b4e9ca13c65b6fc409071",
  "placement": 30,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:517b9b4a76bf41ae9027acd4648d08f8:f05f9684754b4e9ca13c65b6fc409071",
  "placement": 9,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:517b9b4a76bf41ae9027acd4648d08f8:f05f9684754b4e9ca13c65b6fc409071",
  "placement": 6,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:517b9b4a76bf41ae9027acd4648d08f8:f05f9684754b4e9ca13c65b6fc409071",
  "placement": 29,
  "time_alive": 182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:7169c5271eb24d53bda6678baa62892b:755e79e93df44c7b885f008b2ad34d91",
  "placement": 16,
  "time_alive": 1268,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:7169c5271eb24d53bda6678baa62892b:755e79e93df44c7b885f008b2ad34d91",
  "placement": 12,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:7169c5271eb24d53bda6678baa62892b:755e79e93df44c7b885f008b2ad34d91",
  "placement": 28,
  "time_alive": 940,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:7169c5271eb24d53bda6678baa62892b:755e79e93df44c7b885f008b2ad34d91",
  "placement": 22,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:7169c5271eb24d53bda6678baa62892b:755e79e93df44c7b885f008b2ad34d91",
  "placement": 19,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:7169c5271eb24d53bda6678baa62892b:755e79e93df44c7b885f008b2ad34d91",
  "placement": 12,
  "time_alive": 1336,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 22,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 16,
  "time_alive": 1260,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 24,
  "time_alive": 1057,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 13,
  "time_alive": 1326,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 29,
  "time_alive": 322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "1c907ecf58604c95a7becf684e265fa4:86fb1ae2b202432d95e13dfb03ce569c:d0b35173b2804fc4a355057f430f2a18",
  "placement": 11,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "b23b7b31ed3a4974b68d871839dc42d9:ceb99a25c0bb4e46804490716762102a:f109446140794c659867d41064bc2298",
  "placement": 12,
  "time_alive": 1302,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "b23b7b31ed3a4974b68d871839dc42d9:ceb99a25c0bb4e46804490716762102a:f109446140794c659867d41064bc2298",
  "placement": 32,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "b23b7b31ed3a4974b68d871839dc42d9:ceb99a25c0bb4e46804490716762102a:f109446140794c659867d41064bc2298",
  "placement": 14,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "b23b7b31ed3a4974b68d871839dc42d9:ceb99a25c0bb4e46804490716762102a:f109446140794c659867d41064bc2298",
  "placement": 27,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "b23b7b31ed3a4974b68d871839dc42d9:ceb99a25c0bb4e46804490716762102a:f109446140794c659867d41064bc2298",
  "placement": 17,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "b23b7b31ed3a4974b68d871839dc42d9:ceb99a25c0bb4e46804490716762102a:f109446140794c659867d41064bc2298",
  "placement": 9,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "38c4791afeac45f6901bdb643f8f96d3:3b54cf7133754dd184ebb1018859622d:7167cc88728a4a45a3128f4654998a68",
  "placement": 18,
  "time_alive": 1199,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "38c4791afeac45f6901bdb643f8f96d3:3b54cf7133754dd184ebb1018859622d:7167cc88728a4a45a3128f4654998a68",
  "placement": 9,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "38c4791afeac45f6901bdb643f8f96d3:3b54cf7133754dd184ebb1018859622d:7167cc88728a4a45a3128f4654998a68",
  "placement": 29,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "38c4791afeac45f6901bdb643f8f96d3:3b54cf7133754dd184ebb1018859622d:7167cc88728a4a45a3128f4654998a68",
  "placement": 30,
  "time_alive": 380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "38c4791afeac45f6901bdb643f8f96d3:3b54cf7133754dd184ebb1018859622d:7167cc88728a4a45a3128f4654998a68",
  "placement": 11,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "38c4791afeac45f6901bdb643f8f96d3:3b54cf7133754dd184ebb1018859622d:7167cc88728a4a45a3128f4654998a68",
  "placement": 26,
  "time_alive": 492,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 13,
  "time_alive": 1297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 29,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 16,
  "time_alive": 1294,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 26,
  "time_alive": 1034,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 27,
  "time_alive": 489,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "47e6785a3efc496f870c3191d4048be1:677b14f0f0654cc5882036b10ca5d2c6:bdaa8c6a01814e7cb19b722dc74e4abd",
  "placement": 24,
  "time_alive": 924,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "5f051848d348481eb4f2b16997461290:7043c1bdd15445109535e5cd6aebfcc3:d7f7dc2a4fe5473c91d3489f4635b698",
  "placement": 19,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "5f051848d348481eb4f2b16997461290:7043c1bdd15445109535e5cd6aebfcc3:d7f7dc2a4fe5473c91d3489f4635b698",
  "placement": 28,
  "time_alive": 920,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "5f051848d348481eb4f2b16997461290:7043c1bdd15445109535e5cd6aebfcc3:d7f7dc2a4fe5473c91d3489f4635b698",
  "placement": 9,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "5f051848d348481eb4f2b16997461290:7043c1bdd15445109535e5cd6aebfcc3:d7f7dc2a4fe5473c91d3489f4635b698",
  "placement": 18,
  "time_alive": 1284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "5f051848d348481eb4f2b16997461290:7043c1bdd15445109535e5cd6aebfcc3:d7f7dc2a4fe5473c91d3489f4635b698",
  "placement": 21,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "5f051848d348481eb4f2b16997461290:7043c1bdd15445109535e5cd6aebfcc3:d7f7dc2a4fe5473c91d3489f4635b698",
  "placement": 30,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "1d88fa5b7e614e8284b72d74636e2bc5:7a52242420de4d89a7b869006c120f8b:b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 30,
  "time_alive": 508,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "1d88fa5b7e614e8284b72d74636e2bc5:7a52242420de4d89a7b869006c120f8b:b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 22,
  "time_alive": 1049,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "1d88fa5b7e614e8284b72d74636e2bc5:7a52242420de4d89a7b869006c120f8b:b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 21,
  "time_alive": 1149,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "1d88fa5b7e614e8284b72d74636e2bc5:7a52242420de4d89a7b869006c120f8b:b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 33,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "1d88fa5b7e614e8284b72d74636e2bc5:7a52242420de4d89a7b869006c120f8b:b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 26,
  "time_alive": 582,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "1d88fa5b7e614e8284b72d74636e2bc5:7a52242420de4d89a7b869006c120f8b:b10c1ca443e14f3db762ec46ebc36f7f",
  "placement": 20,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:aad3c7bca17945acb44e59f32adb237b:c5189808a07c49a0b2338d5d8edf245f",
  "placement": 18,
  "time_alive": 1267,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:aad3c7bca17945acb44e59f32adb237b:c5189808a07c49a0b2338d5d8edf245f",
  "placement": 15,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:aad3c7bca17945acb44e59f32adb237b:c5189808a07c49a0b2338d5d8edf245f",
  "placement": 24,
  "time_alive": 936,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 21,
  "time_alive": 1100,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 32,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 32,
  "time_alive": 233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "48d8ef27f2504f68b7c2352ac79a9ac3:913cc86daa8847fca423588439d816a1:f14aee54a84848d8b28f9db9a448101a",
  "placement": 30,
  "time_alive": 312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "225a26602e374ec8a49bf99d3a136f19:8a0ea7f2f8f840c696cdd2765b1009e4:c4110ba62fa343409230052b8048751b",
  "placement": 31,
  "time_alive": 77,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "225a26602e374ec8a49bf99d3a136f19:8a0ea7f2f8f840c696cdd2765b1009e4:c4110ba62fa343409230052b8048751b",
  "placement": 30,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "225a26602e374ec8a49bf99d3a136f19:8a0ea7f2f8f840c696cdd2765b1009e4:c4110ba62fa343409230052b8048751b",
  "placement": 26,
  "time_alive": 966,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "225a26602e374ec8a49bf99d3a136f19:8a0ea7f2f8f840c696cdd2765b1009e4:c4110ba62fa343409230052b8048751b",
  "placement": 19,
  "time_alive": 1278,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "225a26602e374ec8a49bf99d3a136f19:8a0ea7f2f8f840c696cdd2765b1009e4:c4110ba62fa343409230052b8048751b",
  "placement": 33,
  "time_alive": 94,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "225a26602e374ec8a49bf99d3a136f19:8a0ea7f2f8f840c696cdd2765b1009e4:c4110ba62fa343409230052b8048751b",
  "placement": 27,
  "time_alive": 412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5f0f16da-6b10-4014-b454-e7e1bba91f72",
  "team_id": "044a9b9480a549478c0b9ed981657c58:34cc567eba814d959677bf709e4963b0:6dec26cb8c7b4dd58405015ce0112f9b",
  "placement": 21,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e171ba-38da-4e1c-be29-3021f0421eb5",
  "team_id": "044a9b9480a549478c0b9ed981657c58:34cc567eba814d959677bf709e4963b0:6dec26cb8c7b4dd58405015ce0112f9b",
  "placement": 19,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d0fcf02-175b-4ab9-b673-cafac88a57d7",
  "team_id": "044a9b9480a549478c0b9ed981657c58:34cc567eba814d959677bf709e4963b0:6dec26cb8c7b4dd58405015ce0112f9b",
  "placement": 33,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06a04f93-c2d2-45c1-a16d-c01c0aa363fa",
  "team_id": "044a9b9480a549478c0b9ed981657c58:34cc567eba814d959677bf709e4963b0:6dec26cb8c7b4dd58405015ce0112f9b",
  "placement": 25,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "918cd3c9-ecda-43b7-bdc6-38d94956ba41",
  "team_id": "044a9b9480a549478c0b9ed981657c58:34cc567eba814d959677bf709e4963b0:6dec26cb8c7b4dd58405015ce0112f9b",
  "placement": 31,
  "time_alive": 311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c",
  "team_id": "044a9b9480a549478c0b9ed981657c58:34cc567eba814d959677bf709e4963b0:6dec26cb8c7b4dd58405015ce0112f9b",
  "placement": 21,
  "time_alive": 1136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 1,
  "time_alive": 1455,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 6,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 1,
  "time_alive": 1442,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 8,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 3,
  "time_alive": 1443,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 7,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 5,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 4,
  "time_alive": 1412,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 12,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 3,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 1,
  "time_alive": 1454,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:6dc4abc2f4a94af48b076a2aa7e40a1d:acfc51361aff4c968f3d95dac5dce379",
  "placement": 6,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 11,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 5,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 2,
  "time_alive": 1442,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 9,
  "time_alive": 1382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 8,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead:71505451c7e64154bf47dca9661d0ebb:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 1,
  "time_alive": 1485,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 3,
  "time_alive": 1446,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 1,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 13,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 4,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 6,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:394e40a2dd5e4a6f8015fe6e833dbba5:f3234220ea8a404bb89f66afce721f76",
  "placement": 17,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 7,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 21,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 3,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 2,
  "time_alive": 1461,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 4,
  "time_alive": 1424,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "189f79e8875a4782a7bb3c569c354c75:8c54d5ee92554d818c96a7f7d01a9b9b:97f4071a528d4999942b44c8ddbb32b5",
  "placement": 22,
  "time_alive": 1101,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 8,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 16,
  "time_alive": 1271,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 7,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 14,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 13,
  "time_alive": 1297,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 3,
  "time_alive": 1451,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 2,
  "time_alive": 1455,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 10,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 26,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 7,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 11,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:4356be3924ce4cf680a91fe4713c383a:e5556b3269cf4e3499198774adc4cac2",
  "placement": 14,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 15,
  "time_alive": 1311,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 7,
  "time_alive": 1380,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 4,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 13,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 31,
  "time_alive": 296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:a683b4c7d8c7448abd4c7479f35db5a6:f7d7566162fc4e65af40d412746b9457",
  "placement": 9,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 31,
  "time_alive": 745,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 23,
  "time_alive": 930,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 11,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 6,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 10,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "2d386ad29dd84db189f2755362071753:752fbff5aafa4d87bea75749aa07a8b4:7c18d3eaab924d42b0549c031d15f5f2",
  "placement": 2,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 19,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 2,
  "time_alive": 1463,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 10,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 5,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 20,
  "time_alive": 1145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 25,
  "time_alive": 949,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:4549f74b9fb7454c9725932beb16f881:5efc352d2cac4099bd6067467ac023bc",
  "placement": 6,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:4549f74b9fb7454c9725932beb16f881:5efc352d2cac4099bd6067467ac023bc",
  "placement": 25,
  "time_alive": 876,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:4549f74b9fb7454c9725932beb16f881:5efc352d2cac4099bd6067467ac023bc",
  "placement": 31,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:4549f74b9fb7454c9725932beb16f881:5efc352d2cac4099bd6067467ac023bc",
  "placement": 1,
  "time_alive": 1461,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:4549f74b9fb7454c9725932beb16f881:5efc352d2cac4099bd6067467ac023bc",
  "placement": 18,
  "time_alive": 1256,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:4549f74b9fb7454c9725932beb16f881:5efc352d2cac4099bd6067467ac023bc",
  "placement": 31,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 32,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 24,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 27,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 10,
  "time_alive": 1362,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 5,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "0936feb69d234f999aefb246b20ec49e:22ed4bdfba91496aa7d8a5990f31fa54:f8eeece803924b9093db2812e6772743",
  "placement": 12,
  "time_alive": 1330,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 23,
  "time_alive": 1091,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 8,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 5,
  "time_alive": 1427,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 16,
  "time_alive": 1262,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ffcad91-cf25-45d9-bbf7-624d67640a89",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 24,
  "time_alive": 963,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a108559-e4db-4eee-ba2b-c1fe74412db7",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017:3e999b2dbb0b46a490289ba783142bff:7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 10,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9dd35f61-77a9-4096-9ab6-4a59b106a470",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 20,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2eb9ccec-e092-4050-8d72-f9b1aa187cd3",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 9,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "817addf7-d673-46de-8ebd-d99b298c20dd",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 23,
  "time_alive": 977,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3",
  "team_id": "29215e7518c34192bcbca61ba4ec85af:7089d5d9ea5c4399b4d5caee919d7e1a:9b3676734d6846a4a44031695291ac46",
  "placement": 17,
  "time_alive": 1242,
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
    