const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "48f9cd1b2bad4183919bab7810cc0b61",
  "placement": 82,
  "time_alive": 519,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "48f9cd1b2bad4183919bab7810cc0b61",
  "placement": 90,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "48f9cd1b2bad4183919bab7810cc0b61",
  "placement": 81,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "48f9cd1b2bad4183919bab7810cc0b61",
  "placement": 23,
  "time_alive": 1389,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "48f9cd1b2bad4183919bab7810cc0b61",
  "placement": 54,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "48f9cd1b2bad4183919bab7810cc0b61",
  "placement": 77,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 21,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 86,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 84,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 80,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 27,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 64,
  "time_alive": 694,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 79,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 41,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 35,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 35,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 39,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 91,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 25,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 94,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 75,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 36,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 35,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 84,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 26,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 88,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 63,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 32,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 81,
  "time_alive": 290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea",
  "placement": 70,
  "time_alive": 998,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea",
  "placement": 88,
  "time_alive": 283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea",
  "placement": 13,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea",
  "placement": 76,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea",
  "placement": 91,
  "time_alive": 154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea",
  "placement": 97,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 65,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 72,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 31,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 84,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 34,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 43,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "072398ce06bd41f4bf07169677c8f5ba",
  "placement": 23,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "072398ce06bd41f4bf07169677c8f5ba",
  "placement": 44,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "072398ce06bd41f4bf07169677c8f5ba",
  "placement": 83,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "072398ce06bd41f4bf07169677c8f5ba",
  "placement": 86,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "072398ce06bd41f4bf07169677c8f5ba",
  "placement": 72,
  "time_alive": 483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 99,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 77,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 76,
  "time_alive": 622,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 20,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 66,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 42,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 45,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 37,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 94,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 73,
  "time_alive": 826,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 82,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 89,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 27,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 89,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 89,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 65,
  "time_alive": 967,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 52,
  "time_alive": 1080,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 73,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 42,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 45,
  "time_alive": 1255,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 54,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 89,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 79,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 40,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 31,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 46,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 61,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 45,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 72,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "6975f7b9eaef4cbb9048e801c87f3b1c",
  "placement": 91,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "6975f7b9eaef4cbb9048e801c87f3b1c",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "6975f7b9eaef4cbb9048e801c87f3b1c",
  "placement": 37,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "6975f7b9eaef4cbb9048e801c87f3b1c",
  "placement": 32,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "6975f7b9eaef4cbb9048e801c87f3b1c",
  "placement": 59,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "6975f7b9eaef4cbb9048e801c87f3b1c",
  "placement": 86,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "3f5bd1a868af4ae4990549d2e7700079",
  "placement": 73,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "3f5bd1a868af4ae4990549d2e7700079",
  "placement": 54,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "3f5bd1a868af4ae4990549d2e7700079",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "3f5bd1a868af4ae4990549d2e7700079",
  "placement": 58,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "3f5bd1a868af4ae4990549d2e7700079",
  "placement": 70,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "3f5bd1a868af4ae4990549d2e7700079",
  "placement": 26,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 51,
  "time_alive": 1221,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 95,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 62,
  "time_alive": 1094,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 68,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 76,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 92,
  "time_alive": 145,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "45e1c6fc75234d119968b6b8e80931de",
  "placement": 50,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "45e1c6fc75234d119968b6b8e80931de",
  "placement": 61,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "45e1c6fc75234d119968b6b8e80931de",
  "placement": 95,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "45e1c6fc75234d119968b6b8e80931de",
  "placement": 33,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "45e1c6fc75234d119968b6b8e80931de",
  "placement": 65,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 74,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 71,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 77,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 28,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 56,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 53,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 26,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 47,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 74,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 64,
  "time_alive": 889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 82,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "1cee8641d99d407b8efd4832340cb5c4",
  "placement": 30,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "1cee8641d99d407b8efd4832340cb5c4",
  "placement": 58,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "1cee8641d99d407b8efd4832340cb5c4",
  "placement": 28,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "1cee8641d99d407b8efd4832340cb5c4",
  "placement": 95,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "1cee8641d99d407b8efd4832340cb5c4",
  "placement": 94,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "1cee8641d99d407b8efd4832340cb5c4",
  "placement": 80,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01",
  "placement": 68,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01",
  "placement": 73,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01",
  "placement": 44,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01",
  "placement": 61,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01",
  "placement": 55,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01",
  "placement": 93,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "d2cff14cae254037bb08885c32752830",
  "placement": 57,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "d2cff14cae254037bb08885c32752830",
  "placement": 65,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "d2cff14cae254037bb08885c32752830",
  "placement": 60,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "d2cff14cae254037bb08885c32752830",
  "placement": 28,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "d2cff14cae254037bb08885c32752830",
  "placement": 78,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 92,
  "time_alive": 200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 34,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 93,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 82,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 71,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 39,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 77,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 76,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 24,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 94,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 93,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "76b5a02b6e814898a2570a3a59077008",
  "placement": 64,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "76b5a02b6e814898a2570a3a59077008",
  "placement": 79,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "76b5a02b6e814898a2570a3a59077008",
  "placement": 56,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "76b5a02b6e814898a2570a3a59077008",
  "placement": 53,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "76b5a02b6e814898a2570a3a59077008",
  "placement": 60,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "76b5a02b6e814898a2570a3a59077008",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 94,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 63,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 42,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 87,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 51,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "edd63da92a5c46dab17f688e82063490",
  "placement": 93,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "edd63da92a5c46dab17f688e82063490",
  "placement": 80,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "edd63da92a5c46dab17f688e82063490",
  "placement": 59,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "edd63da92a5c46dab17f688e82063490",
  "placement": 59,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "edd63da92a5c46dab17f688e82063490",
  "placement": 85,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "edd63da92a5c46dab17f688e82063490",
  "placement": 63,
  "time_alive": 716,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "e3f8e30133394278b09ed6d45e3993b7",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "e3f8e30133394278b09ed6d45e3993b7",
  "placement": 81,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "e3f8e30133394278b09ed6d45e3993b7",
  "placement": 82,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "e3f8e30133394278b09ed6d45e3993b7",
  "placement": 85,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "e3f8e30133394278b09ed6d45e3993b7",
  "placement": 47,
  "time_alive": 1237,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "e3f8e30133394278b09ed6d45e3993b7",
  "placement": 83,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 67,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 67,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 90,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 86,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 31,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 79,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 86,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 84,
  "time_alive": 423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 63,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 92,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 80,
  "time_alive": 395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 95,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 60,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fe8213-147e-48c6-ae99-c09707975ca6",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 92,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 66,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 77,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 90,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 61,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036f1de8-efe9-40bf-9cb5-bab0611d26b2",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa",
  "placement": 84,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f739ea-0855-4974-a6b2-dd23f140d33d",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa",
  "placement": 96,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0143007e-0b6e-4380-9632-6fdebd820888",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa",
  "placement": 88,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa",
  "placement": 37,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02cce146-04a2-4b79-92a4-ba205abe5bea",
  "team_id": "1ca080820b8c46d1aae1d011e2efa0a2",
  "placement": 98,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "031f1f46-f2f5-43bc-bbfd-7547341d33a9",
  "team_id": "1ca080820b8c46d1aae1d011e2efa0a2",
  "placement": 94,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1544,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 5,
  "time_alive": 1541,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 3,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 62,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 13,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 78,
  "time_alive": 300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 4,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 15,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 37,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 1,
  "time_alive": 1538,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 96,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 19,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 39,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 24,
  "time_alive": 1424,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 1,
  "time_alive": 1531,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 7,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 16,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 29,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 40,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 51,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 4,
  "time_alive": 1499,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 17,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 7,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 3,
  "time_alive": 1517,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 2,
  "time_alive": 1544,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 46,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 48,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 63,
  "time_alive": 1007,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 3,
  "time_alive": 1533,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 7,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 31,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 21,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 27,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 36,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 26,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 1,
  "time_alive": 1517,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 7,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 17,
  "time_alive": 1467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 8,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 9,
  "time_alive": 1493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 39,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 18,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 32,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 3,
  "time_alive": 1553,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 31,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 55,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 1,
  "time_alive": 1540,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 16,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 13,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 32,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 17,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 52,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 6,
  "time_alive": 1524,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 30,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 3,
  "time_alive": 1513,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 7,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 16,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 41,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 70,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 26,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 57,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 8,
  "time_alive": 1524,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 4,
  "time_alive": 1516,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 8,
  "time_alive": 1518,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 22,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 17,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 10,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 95,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 22,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 27,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 20,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 19,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 4,
  "time_alive": 1549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 12,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 6,
  "time_alive": 1509,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 52,
  "time_alive": 1122,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 53,
  "time_alive": 787,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 9,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 50,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 7,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 25,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 17,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 76,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 37,
  "time_alive": 1343,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 11,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 69,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 64,
  "time_alive": 928,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 34,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 27,
  "time_alive": 1379,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 8,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 54,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 56,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 16,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 15,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 32,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 20,
  "time_alive": 1444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 34,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 19,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 73,
  "time_alive": 404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 8,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 25,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 25,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 92,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 29,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 5,
  "time_alive": 1525,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 82,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 38,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 37,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 18,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 36,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 6,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 62,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 47,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 24,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 2,
  "time_alive": 1538,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 46,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 42,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 24,
  "time_alive": 1381,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 55,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 26,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 39,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 50,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 2,
  "time_alive": 1517,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 45,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 16,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 23,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 43,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 4,
  "time_alive": 1526,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 36,
  "time_alive": 1274,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 23,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 19,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 14,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 80,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 11,
  "time_alive": 1468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 70,
  "time_alive": 934,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 14,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 82,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 5,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 81,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 14,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 5,
  "time_alive": 1507,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 63,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 5,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 48,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 49,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 34,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 33,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 86,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 3,
  "time_alive": 1526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 11,
  "time_alive": 1478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 17,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 60,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 29,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 84,
  "time_alive": 356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 13,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1540,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 74,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 10,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 27,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 15,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 54,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 54,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 50,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 26,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 90,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 10,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 12,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 25,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 64,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 12,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 13,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 56,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 42,
  "time_alive": 1303,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 33,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 16,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 1,
  "time_alive": 1554,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 77,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 71,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 64,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 43,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 21,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 36,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 96,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 89,
  "time_alive": 218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 84,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 4,
  "time_alive": 1507,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 28,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 60,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 6,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 38,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 77,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 23,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 22,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 85,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 15,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 49,
  "time_alive": 1230,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 55,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 5,
  "time_alive": 1501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 11,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 9,
  "time_alive": 1522,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 50,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 69,
  "time_alive": 744,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 31,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 48,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 90,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 22,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 31,
  "time_alive": 1366,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 9,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 39,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 26,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 6,
  "time_alive": 1536,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 44,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 27,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 47,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 2,
  "time_alive": 1554,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 55,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 68,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 22,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 31,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 89,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 59,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 49,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 45,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 18,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 10,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 54,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 76,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 25,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 21,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 20,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 28,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 72,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 39,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 35,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 18,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 19,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 46,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "535d05c2970b4dc59e33d1afa952aedb",
  "placement": 85,
  "time_alive": 226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "535d05c2970b4dc59e33d1afa952aedb",
  "placement": 66,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "535d05c2970b4dc59e33d1afa952aedb",
  "placement": 2,
  "time_alive": 1531,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "535d05c2970b4dc59e33d1afa952aedb",
  "placement": 46,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "535d05c2970b4dc59e33d1afa952aedb",
  "placement": 93,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "535d05c2970b4dc59e33d1afa952aedb",
  "placement": 84,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 30,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 40,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 46,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 20,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 24,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 52,
  "time_alive": 857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 66,
  "time_alive": 969,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 89,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 76,
  "time_alive": 600,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 23,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 85,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 9,
  "time_alive": 1477,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 14,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 56,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 53,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 28,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 25,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 35,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 18,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 49,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 71,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 30,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 37,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 75,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 63,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 44,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 73,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 84,
  "time_alive": 353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 21,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 15,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "930c6c7113f9408ab2da90b16ed685a7",
  "placement": 36,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "930c6c7113f9408ab2da90b16ed685a7",
  "placement": 58,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "930c6c7113f9408ab2da90b16ed685a7",
  "placement": 58,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "930c6c7113f9408ab2da90b16ed685a7",
  "placement": 53,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "930c6c7113f9408ab2da90b16ed685a7",
  "placement": 23,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "930c6c7113f9408ab2da90b16ed685a7",
  "placement": 12,
  "time_alive": 1464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 20,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 22,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 83,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 35,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 56,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 24,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 95,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 18,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 51,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 51,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 14,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 61,
  "time_alive": 545,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "08318ce78a1e4114b33e27c8b2544636",
  "placement": 35,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "08318ce78a1e4114b33e27c8b2544636",
  "placement": 13,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "08318ce78a1e4114b33e27c8b2544636",
  "placement": 32,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "08318ce78a1e4114b33e27c8b2544636",
  "placement": 80,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "08318ce78a1e4114b33e27c8b2544636",
  "placement": 68,
  "time_alive": 570,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "b2f8831e6b0b4243b7e983e3424045fc",
  "placement": 6,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "b2f8831e6b0b4243b7e983e3424045fc",
  "placement": 77,
  "time_alive": 690,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "b2f8831e6b0b4243b7e983e3424045fc",
  "placement": 30,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "b2f8831e6b0b4243b7e983e3424045fc",
  "placement": 70,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "b2f8831e6b0b4243b7e983e3424045fc",
  "placement": 74,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "b2f8831e6b0b4243b7e983e3424045fc",
  "placement": 79,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 78,
  "time_alive": 644,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 36,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 12,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 38,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 44,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 44,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 33,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 52,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 11,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 76,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 72,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 51,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 11,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 66,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 62,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 67,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 15,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 74,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 60,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 47,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 40,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 55,
  "time_alive": 706,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 42,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 34,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 28,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 59,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 51,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 21,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "83a92ae788cf4d359819a8a91525720b",
  "placement": 65,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "83a92ae788cf4d359819a8a91525720b",
  "placement": 43,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "83a92ae788cf4d359819a8a91525720b",
  "placement": 20,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "83a92ae788cf4d359819a8a91525720b",
  "placement": 58,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "83a92ae788cf4d359819a8a91525720b",
  "placement": 29,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "83a92ae788cf4d359819a8a91525720b",
  "placement": 41,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 77,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 69,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 40,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 26,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 33,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 80,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "568c8a26076a49d8b2d7a8e6114ec9dc",
  "placement": 61,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "568c8a26076a49d8b2d7a8e6114ec9dc",
  "placement": 64,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "568c8a26076a49d8b2d7a8e6114ec9dc",
  "placement": 9,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "568c8a26076a49d8b2d7a8e6114ec9dc",
  "placement": 83,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "568c8a26076a49d8b2d7a8e6114ec9dc",
  "placement": 60,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "568c8a26076a49d8b2d7a8e6114ec9dc",
  "placement": 71,
  "time_alive": 436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 67,
  "time_alive": 959,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 45,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 14,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 54,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 67,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 64,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 69,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 19,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 67,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 96,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 30,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 83,
  "time_alive": 246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 96,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 93,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 10,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 24,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 88,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 59,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 56,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 87,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 29,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 32,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 41,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 62,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 83,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 95,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 45,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 8,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 83,
  "time_alive": 267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 65,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 84,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 38,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 98,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 81,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 44,
  "time_alive": 1254,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 56,
  "time_alive": 670,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 73,
  "time_alive": 834,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 67,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 38,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 78,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 65,
  "time_alive": 641,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 73,
  "time_alive": 371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "47311a395c954b6e8fc80fb85ac43057",
  "placement": 68,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "47311a395c954b6e8fc80fb85ac43057",
  "placement": 30,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "47311a395c954b6e8fc80fb85ac43057",
  "placement": 86,
  "time_alive": 310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "47311a395c954b6e8fc80fb85ac43057",
  "placement": 94,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "47311a395c954b6e8fc80fb85ac43057",
  "placement": 43,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "47311a395c954b6e8fc80fb85ac43057",
  "placement": 70,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 81,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 53,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 57,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 50,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 45,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 40,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 53,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 83,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 33,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 88,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 35,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 38,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 12,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 71,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 62,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 90,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 72,
  "time_alive": 465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 89,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 55,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 90,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 89,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 74,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 10,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 57,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 48,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 28,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 63,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 57,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 61,
  "time_alive": 796,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 86,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 74,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 74,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 60,
  "time_alive": 1109,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 71,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 87,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "6d32ca06233c4ab39e9c1b24f5d1a3a6",
  "placement": 47,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "6d32ca06233c4ab39e9c1b24f5d1a3a6",
  "placement": 78,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "6d32ca06233c4ab39e9c1b24f5d1a3a6",
  "placement": 61,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "6d32ca06233c4ab39e9c1b24f5d1a3a6",
  "placement": 40,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "6d32ca06233c4ab39e9c1b24f5d1a3a6",
  "placement": 32,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "6d32ca06233c4ab39e9c1b24f5d1a3a6",
  "placement": 47,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 43,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 82,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 92,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 37,
  "time_alive": 1237,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "dd50d22e1403420ca8a08ed7f5607538",
  "placement": 23,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "dd50d22e1403420ca8a08ed7f5607538",
  "placement": 79,
  "time_alive": 625,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "dd50d22e1403420ca8a08ed7f5607538",
  "placement": 79,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "dd50d22e1403420ca8a08ed7f5607538",
  "placement": 92,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "dd50d22e1403420ca8a08ed7f5607538",
  "placement": 75,
  "time_alive": 370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "dd50d22e1403420ca8a08ed7f5607538",
  "placement": 58,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 62,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 59,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 98,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 91,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 13,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 76,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 72,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 41,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 91,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 49,
  "time_alive": 1049,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 52,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 48,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 88,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 86,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 59,
  "time_alive": 936,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 51,
  "time_alive": 878,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 92,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 68,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 85,
  "time_alive": 323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 61,
  "time_alive": 1041,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 48,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 85,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "932741962df4481a8b1e6ae082627feb",
  "placement": 75,
  "time_alive": 742,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "932741962df4481a8b1e6ae082627feb",
  "placement": 68,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "932741962df4481a8b1e6ae082627feb",
  "placement": 34,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "932741962df4481a8b1e6ae082627feb",
  "placement": 63,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "932741962df4481a8b1e6ae082627feb",
  "placement": 91,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 94,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 47,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 79,
  "time_alive": 520,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 45,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "7d18498489b74c3295c556e96109a218",
  "placement": 29,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "7d18498489b74c3295c556e96109a218",
  "placement": 82,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "7d18498489b74c3295c556e96109a218",
  "placement": 65,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "7d18498489b74c3295c556e96109a218",
  "placement": 87,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "7d18498489b74c3295c556e96109a218",
  "placement": 57,
  "time_alive": 1047,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "7d18498489b74c3295c556e96109a218",
  "placement": 88,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "3058aed0234d4d9fbcace004e9f096cb",
  "placement": 88,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "3058aed0234d4d9fbcace004e9f096cb",
  "placement": 99,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "3058aed0234d4d9fbcace004e9f096cb",
  "placement": 66,
  "time_alive": 986,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "3058aed0234d4d9fbcace004e9f096cb",
  "placement": 95,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "3058aed0234d4d9fbcace004e9f096cb",
  "placement": 28,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "3058aed0234d4d9fbcace004e9f096cb",
  "placement": 69,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 49,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 73,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 81,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 65,
  "time_alive": 913,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 58,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 50,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 87,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 41,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 72,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 76,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 89,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 60,
  "time_alive": 593,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 82,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 61,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 75,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 42,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 86,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 68,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "37f16f732a334dae9325bbe313606dac",
  "placement": 99,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "37f16f732a334dae9325bbe313606dac",
  "placement": 88,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "37f16f732a334dae9325bbe313606dac",
  "placement": 64,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "37f16f732a334dae9325bbe313606dac",
  "placement": 33,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "37f16f732a334dae9325bbe313606dac",
  "placement": 66,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "37f16f732a334dae9325bbe313606dac",
  "placement": 77,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 46,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 81,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 91,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 73,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 87,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 43,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 92,
  "time_alive": 222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 86,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 94,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 70,
  "time_alive": 817,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 77,
  "time_alive": 542,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 79,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 90,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 71,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 57,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 78,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 93,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 69,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 81,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf",
  "placement": 79,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf",
  "placement": 84,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf",
  "placement": 67,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf",
  "placement": 53,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 41,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 91,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 93,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 44,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 90,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 66,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 80,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 80,
  "time_alive": 575,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 80,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 72,
  "time_alive": 681,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 93,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 96,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 54,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 75,
  "time_alive": 611,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 95,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 59,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 65,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 85,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 82,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 63,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "7ca495fabad1429bb2a8cfed61772cc0",
  "placement": 58,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "7ca495fabad1429bb2a8cfed61772cc0",
  "placement": 70,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01484462-d3ad-4c62-befe-b5341d79246a",
  "team_id": "7ca495fabad1429bb2a8cfed61772cc0",
  "placement": 87,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00428aad-c98b-45a0-8758-f6e0710a80d6",
  "team_id": "7ca495fabad1429bb2a8cfed61772cc0",
  "placement": 97,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02354271-4dea-4fd8-b279-5a0f72318d71",
  "team_id": "7ca495fabad1429bb2a8cfed61772cc0",
  "placement": 78,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03b01b4e-b62b-459f-b3aa-a407a2873fa0",
  "team_id": "7ca495fabad1429bb2a8cfed61772cc0",
  "placement": 92,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "010fb1f4-7e15-4191-9966-13eb405c9e69",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 91,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0721555a-19f0-4d59-ac43-683d3f49a7b5",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 75,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 46,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 8,
  "time_alive": 1481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 1,
  "time_alive": 1531,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 23,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 5,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 10,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 13,
  "time_alive": 1485,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 79,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 6,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 8,
  "time_alive": 1448,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 4,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 16,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 3,
  "time_alive": 1543,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 85,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 34,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 11,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 52,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 1,
  "time_alive": 1495,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 28,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 88,
  "time_alive": 439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 55,
  "time_alive": 1122,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 84,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 2,
  "time_alive": 1516,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 9,
  "time_alive": 1424,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 10,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 66,
  "time_alive": 1003,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 49,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 24,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 1,
  "time_alive": 1516,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 51,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 39,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 7,
  "time_alive": 1503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 3,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 38,
  "time_alive": 1305,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 43,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 8,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 10,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 7,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 94,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 11,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 2,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 56,
  "time_alive": 1194,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 1,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 90,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 7,
  "time_alive": 1448,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 17,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 79,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 96,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 23,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 26,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 15,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 7,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 14,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 26,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 2,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 63,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 39,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 36,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 20,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 12,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 19,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 33,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 30,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 54,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 99,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 4,
  "time_alive": 1522,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 4,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 3,
  "time_alive": 1509,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 89,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 18,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 43,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 2,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 17,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 73,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 72,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 2,
  "time_alive": 1543,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 5,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 43,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 26,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 30,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 58,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 47,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 4,
  "time_alive": 1512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 14,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 19,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 24,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 24,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 31,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 24,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 75,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 5,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 45,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 20,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 14,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 18,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 27,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 14,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 19,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 71,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 23,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 14,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 10,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 35,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 28,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 17,
  "time_alive": 1478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 19,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 5,
  "time_alive": 1506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 69,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 14,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 50,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 12,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 16,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 97,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 92,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 21,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 7,
  "time_alive": 1428,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 7,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 26,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 35,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 57,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 18,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 11,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 1,
  "time_alive": 1543,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 81,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 29,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 22,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 34,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 77,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 48,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 6,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 22,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 45,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 60,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 4,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 100,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 11,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 28,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 41,
  "time_alive": 1296,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 54,
  "time_alive": 1172,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 40,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 61,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 56,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 20,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 76,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 15,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 21,
  "time_alive": 1379,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 21,
  "time_alive": 1461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 57,
  "time_alive": 1153,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 9,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 12,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 69,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 44,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 58,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 36,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 81,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 13,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 6,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 15,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 22,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 55,
  "time_alive": 1161,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 46,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 3,
  "time_alive": 1490,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 59,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 65,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 43,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 25,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 38,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 18,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 39,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 17,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 6,
  "time_alive": 1535,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 91,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 13,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 64,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 87,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 59,
  "time_alive": 852,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 5,
  "time_alive": 1540,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 33,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 36,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 36,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 70,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 67,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 9,
  "time_alive": 1515,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 74,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 12,
  "time_alive": 1464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 74,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 18,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 66,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 90,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 59,
  "time_alive": 1060,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 1,
  "time_alive": 1536,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 93,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 90,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 8,
  "time_alive": 1517,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 39,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 79,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 32,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 76,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 38,
  "time_alive": 1313,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 25,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 32,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 21,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 34,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 49,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 83,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 75,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 9,
  "time_alive": 1478,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 54,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 65,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 23,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 31,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0",
  "placement": 69,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0",
  "placement": 29,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0",
  "placement": 41,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0",
  "placement": 83,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0",
  "placement": 8,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0",
  "placement": 22,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 27,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 50,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 61,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 16,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 9,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 45,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "12a481bd362d4fcb824698aa39ac6242",
  "placement": 86,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "12a481bd362d4fcb824698aa39ac6242",
  "placement": 67,
  "time_alive": 1002,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "12a481bd362d4fcb824698aa39ac6242",
  "placement": 16,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "12a481bd362d4fcb824698aa39ac6242",
  "placement": 85,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "12a481bd362d4fcb824698aa39ac6242",
  "placement": 10,
  "time_alive": 1470,
  "elims": 4,
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
    