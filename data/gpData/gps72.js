const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 12,
  "time_alive": 1304,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1457,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 11,
  "time_alive": 1363,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 10,
  "time_alive": 1334,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 30,
  "time_alive": 728,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 8,
  "time_alive": 1378,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1471,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 13,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1455,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 28,
  "time_alive": 909,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 5,
  "time_alive": 1351,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 2,
  "time_alive": 1465,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 13,
  "time_alive": 1301,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 25,
  "time_alive": 867,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 4,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 15,
  "time_alive": 1282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 26,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1368,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 13,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1440,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 4,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1456,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 4,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1465,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 10,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 5,
  "time_alive": 1352,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 1,
  "time_alive": 1440,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 15,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 14,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1419,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 11,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 7,
  "time_alive": 1352,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 14,
  "time_alive": 1293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 9,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 23,
  "time_alive": 894,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1420,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 24,
  "time_alive": 886,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 24,
  "time_alive": 941,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 9,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1440,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 32,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 16,
  "time_alive": 1279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 25,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 30,
  "time_alive": 309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1457,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 20,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 22,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1372,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 2,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 6,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 7,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 18,
  "time_alive": 1263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 20,
  "time_alive": 1125,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 3,
  "time_alive": 1393,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 20,
  "time_alive": 1049,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 23,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 4,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 14,
  "time_alive": 1281,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 9,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1400,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 20,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 14,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 19,
  "time_alive": 1170,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 6,
  "time_alive": 1411,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 15,
  "time_alive": 1277,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 18,
  "time_alive": 1092,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 2,
  "time_alive": 1460,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 24,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 5,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 13,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 2,
  "time_alive": 1471,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 9,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 6,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 12,
  "time_alive": 1303,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 7,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 6,
  "time_alive": 1325,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 22,
  "time_alive": 961,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 22,
  "time_alive": 1178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 18,
  "time_alive": 1111,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 20,
  "time_alive": 1117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 32,
  "time_alive": 488,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 1,
  "time_alive": 1445,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 21,
  "time_alive": 1129,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 18,
  "time_alive": 1200,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 20,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 2,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 8,
  "time_alive": 1369,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 18,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 3,
  "time_alive": 1384,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 19,
  "time_alive": 1199,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 17,
  "time_alive": 1276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 25,
  "time_alive": 1038,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 27,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 11,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 8,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 17,
  "time_alive": 1291,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 22,
  "time_alive": 1096,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 10,
  "time_alive": 1330,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 13,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 2,
  "time_alive": 1442,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 8,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 12,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 16,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 18,
  "time_alive": 1170,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 12,
  "time_alive": 1333,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 21,
  "time_alive": 982,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 15,
  "time_alive": 1299,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 24,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 3,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 13,
  "time_alive": 1300,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 22,
  "time_alive": 1068,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 23,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 15,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 28,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 9,
  "time_alive": 1377,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 2,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 11,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 4,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 17,
  "time_alive": 1207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 20,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 10,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 23,
  "time_alive": 993,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 9,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 8,
  "time_alive": 1317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 4,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 26,
  "time_alive": 807,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 21,
  "time_alive": 986,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 19,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 18,
  "time_alive": 1180,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 20,
  "time_alive": 1033,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 10,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 4,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 4,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 11,
  "time_alive": 1303,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 15,
  "time_alive": 1281,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 22,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 24,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 6,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 3,
  "time_alive": 1442,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 1,
  "time_alive": 1412,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 2,
  "time_alive": 1440,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 24,
  "time_alive": 988,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 16,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 9,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 21,
  "time_alive": 1086,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 31,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 20,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 13,
  "time_alive": 1299,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 11,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 19,
  "time_alive": 1065,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 26,
  "time_alive": 944,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 13,
  "time_alive": 1304,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 24,
  "time_alive": 955,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 19,
  "time_alive": 1155,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 21,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 21,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 9,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 2,
  "time_alive": 1495,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 10,
  "time_alive": 1310,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 10,
  "time_alive": 1328,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 33,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 13,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 28,
  "time_alive": 776,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 4,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 7,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 9,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 7,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 24,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 28,
  "time_alive": 716,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 18,
  "time_alive": 1163,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 28,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 21,
  "time_alive": 964,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 8,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 8,
  "time_alive": 1379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 13,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 23,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 17,
  "time_alive": 1164,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 31,
  "time_alive": 414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 26,
  "time_alive": 920,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 2,
  "time_alive": 1509,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 22,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 27,
  "time_alive": 925,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 16,
  "time_alive": 1204,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 16,
  "time_alive": 1266,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 9,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 12,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 30,
  "time_alive": 758,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 28,
  "time_alive": 780,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 10,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 23,
  "time_alive": 1069,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 33,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 31,
  "time_alive": 252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 5,
  "time_alive": 1378,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 4,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 31,
  "time_alive": 291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 26,
  "time_alive": 783,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 31,
  "time_alive": 381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 5,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 33,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 26,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 33,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 32,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 15,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 12,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 8,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 17,
  "time_alive": 1269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 1,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 7,
  "time_alive": 1348,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 18,
  "time_alive": 1213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 29,
  "time_alive": 652,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 17,
  "time_alive": 1226,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 23,
  "time_alive": 976,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 16,
  "time_alive": 1227,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 10,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 19,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 32,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 13,
  "time_alive": 1291,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 14,
  "time_alive": 1297,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 17,
  "time_alive": 1279,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 33,
  "time_alive": 188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 9,
  "time_alive": 1341,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 22,
  "time_alive": 992,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 22,
  "time_alive": 982,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 4,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 12,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 26,
  "time_alive": 332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 24,
  "time_alive": 968,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 26,
  "time_alive": 927,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 27,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 31,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 14,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 6,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 29,
  "time_alive": 772,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 29,
  "time_alive": 755,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 16,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 33,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 5,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 30,
  "time_alive": 273,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 25,
  "time_alive": 953,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 5,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 21,
  "time_alive": 1144,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 6,
  "time_alive": 1351,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 27,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 23,
  "time_alive": 923,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 17,
  "time_alive": 1180,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 16,
  "time_alive": 1268,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 25,
  "time_alive": 949,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 7,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 27,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 14,
  "time_alive": 1359,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 17,
  "time_alive": 1273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 21,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 26,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 28,
  "time_alive": 709,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 25,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 15,
  "time_alive": 1306,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 16,
  "time_alive": 1220,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 3,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 30,
  "time_alive": 600,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 11,
  "time_alive": 1322,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 32,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 33,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 31,
  "time_alive": 284,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 25,
  "time_alive": 927,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 19,
  "time_alive": 1191,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 25,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 7,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 30,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 12,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 19,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 29,
  "time_alive": 626,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 25,
  "time_alive": 906,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 11,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 17,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 14,
  "time_alive": 1291,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 24,
  "time_alive": 946,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 33,
  "time_alive": 169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 5,
  "time_alive": 1381,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 32,
  "time_alive": 209,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 26,
  "time_alive": 844,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 27,
  "time_alive": 812,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 21,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 12,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 30,
  "time_alive": 607,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 30,
  "time_alive": 610,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 25,
  "time_alive": 432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 27,
  "time_alive": 782,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 12,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 30,
  "time_alive": 626,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 11,
  "time_alive": 1309,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 20,
  "time_alive": 1188,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 22,
  "time_alive": 964,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 32,
  "time_alive": 130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 7,
  "time_alive": 1378,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 27,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 29,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 19,
  "time_alive": 1174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 28,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 15,
  "time_alive": 1281,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 29,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 12,
  "time_alive": 1298,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 32,
  "time_alive": 104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 29,
  "time_alive": 630,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 27,
  "time_alive": 836,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 8,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 20,
  "time_alive": 1081,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 28,
  "time_alive": 720,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 22,
  "time_alive": 1121,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 31,
  "time_alive": 601,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 18,
  "time_alive": 1230,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 20,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 30,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 29,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 27,
  "time_alive": 775,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 16,
  "time_alive": 1284,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 14,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 15,
  "time_alive": 1280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 14,
  "time_alive": 1296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 18,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 12,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 23,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 23,
  "time_alive": 1082,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 30,
  "time_alive": 291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 19,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 24,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 19,
  "time_alive": 1062,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 21,
  "time_alive": 1179,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 10,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 21,
  "time_alive": 1116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 32,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 26,
  "time_alive": 816,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 28,
  "time_alive": 791,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 32,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 26,
  "time_alive": 788,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 11,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 14,
  "time_alive": 1289,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 29,
  "time_alive": 431,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 15,
  "time_alive": 1288,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 31,
  "time_alive": 370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 23,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 25,
  "time_alive": 852,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 19,
  "time_alive": 1122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 28,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 29,
  "time_alive": 717,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 27,
  "time_alive": 325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 16,
  "time_alive": 1279,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 33,
  "time_alive": 295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 17,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 9,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 24,
  "time_alive": 943,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 32,
  "time_alive": 339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 31,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 31,
  "time_alive": 614,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 31,
  "time_alive": 562,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 13,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 25,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 29,
  "time_alive": 299,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 29,
  "time_alive": 607,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 23,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 32,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 33,
  "time_alive": 86,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 30,
  "time_alive": 534,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 28,
  "time_alive": 657,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 1,
  "time_alive": 1514,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 8,
  "time_alive": 1396,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 3,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 7,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 13,
  "time_alive": 1351,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 4,
  "time_alive": 1469,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 5,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 6,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 10,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 12,
  "time_alive": 1363,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 14,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 15,
  "time_alive": 1340,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 2,
  "time_alive": 1514,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 11,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 17,
  "time_alive": 1317,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 9,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 28,
  "time_alive": 371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 29,
  "time_alive": 364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 22,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 23,
  "time_alive": 1111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 25,
  "time_alive": 868,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 16,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 18,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 19,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 20,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 21,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 24,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 26,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 27,
  "time_alive": 736,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 30,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 31,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3449169d-12db-4213-8a42-45b31c492dab",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 32,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 33,
  "time_alive": 1107,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 6,
  "time_alive": 1457,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 7,
  "time_alive": 1485,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 44,
  "time_alive": 388,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 1,
  "time_alive": 1532,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 9,
  "time_alive": 1450,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 15,
  "time_alive": 1438,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 39,
  "time_alive": 642,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 12,
  "time_alive": 1443,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1497,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 3,
  "time_alive": 1519,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 3,
  "time_alive": 1523,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 1,
  "time_alive": 1519,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 2,
  "time_alive": 1511,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 15,
  "time_alive": 1435,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 37,
  "time_alive": 560,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 15,
  "time_alive": 1434,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:44a112b04dc240cbba85518f99b7ff35",
  "placement": 8,
  "time_alive": 1457,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "b3956d8d751347f280d599eb69a1f292:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 3,
  "time_alive": 1515,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "b3956d8d751347f280d599eb69a1f292:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1431,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "b3956d8d751347f280d599eb69a1f292:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 4,
  "time_alive": 1499,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "b3956d8d751347f280d599eb69a1f292:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 31,
  "time_alive": 1179,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "b3956d8d751347f280d599eb69a1f292:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 4,
  "time_alive": 1518,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "b3956d8d751347f280d599eb69a1f292:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 7,
  "time_alive": 1462,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "3fb44adba289439b84d40b5bc8964122:8f260e254f1243d384f8eb55003b3a43",
  "placement": 39,
  "time_alive": 508,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "3fb44adba289439b84d40b5bc8964122:8f260e254f1243d384f8eb55003b3a43",
  "placement": 4,
  "time_alive": 1472,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "3fb44adba289439b84d40b5bc8964122:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1509,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "3fb44adba289439b84d40b5bc8964122:8f260e254f1243d384f8eb55003b3a43",
  "placement": 18,
  "time_alive": 1390,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "3fb44adba289439b84d40b5bc8964122:8f260e254f1243d384f8eb55003b3a43",
  "placement": 27,
  "time_alive": 1335,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "3fb44adba289439b84d40b5bc8964122:8f260e254f1243d384f8eb55003b3a43",
  "placement": 4,
  "time_alive": 1503,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 12,
  "time_alive": 1458,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 29,
  "time_alive": 1153,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 1,
  "time_alive": 1509,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 15,
  "time_alive": 1429,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 7,
  "time_alive": 1483,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 26,
  "time_alive": 1289,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "447fb739f8484d5c923c21614ed63d86:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 6,
  "time_alive": 1502,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "447fb739f8484d5c923c21614ed63d86:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 5,
  "time_alive": 1460,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "447fb739f8484d5c923c21614ed63d86:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 34,
  "time_alive": 1110,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "447fb739f8484d5c923c21614ed63d86:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 9,
  "time_alive": 1494,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "447fb739f8484d5c923c21614ed63d86:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 24,
  "time_alive": 1370,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "447fb739f8484d5c923c21614ed63d86:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 10,
  "time_alive": 1448,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:a5c699e9329342939d54a0edd21fb90c",
  "placement": 4,
  "time_alive": 1512,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:a5c699e9329342939d54a0edd21fb90c",
  "placement": 7,
  "time_alive": 1451,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:a5c699e9329342939d54a0edd21fb90c",
  "placement": 10,
  "time_alive": 1474,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:a5c699e9329342939d54a0edd21fb90c",
  "placement": 17,
  "time_alive": 1407,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:a5c699e9329342939d54a0edd21fb90c",
  "placement": 38,
  "time_alive": 718,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:a5c699e9329342939d54a0edd21fb90c",
  "placement": 25,
  "time_alive": 1294,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "00305d46885743f4b3bae606acb1af38:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 14,
  "time_alive": 1442,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "00305d46885743f4b3bae606acb1af38:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 27,
  "time_alive": 1183,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "00305d46885743f4b3bae606acb1af38:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 3,
  "time_alive": 1507,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "00305d46885743f4b3bae606acb1af38:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 32,
  "time_alive": 1133,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "00305d46885743f4b3bae606acb1af38:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 5,
  "time_alive": 1517,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "00305d46885743f4b3bae606acb1af38:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 5,
  "time_alive": 1494,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 10,
  "time_alive": 1460,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 16,
  "time_alive": 1379,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 37,
  "time_alive": 872,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1431,
  "elims": 12,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1437,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 41,
  "time_alive": 483,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 2,
  "time_alive": 1519,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 21,
  "time_alive": 1329,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 5,
  "time_alive": 1497,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 5,
  "time_alive": 1508,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 28,
  "time_alive": 1309,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 24,
  "time_alive": 1332,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1490,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1447,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 13,
  "time_alive": 1437,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 13,
  "time_alive": 1437,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 19,
  "time_alive": 1389,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 18,
  "time_alive": 1374,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 40,
  "time_alive": 442,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 50,
  "time_alive": 134,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 17,
  "time_alive": 1409,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1536,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 6,
  "time_alive": 1495,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 15,
  "time_alive": 1401,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:bae21bcc52734522bd773f5d9b712734",
  "placement": 49,
  "time_alive": 120,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:bae21bcc52734522bd773f5d9b712734",
  "placement": 35,
  "time_alive": 1018,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:bae21bcc52734522bd773f5d9b712734",
  "placement": 26,
  "time_alive": 1234,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:bae21bcc52734522bd773f5d9b712734",
  "placement": 3,
  "time_alive": 1511,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:bae21bcc52734522bd773f5d9b712734",
  "placement": 47,
  "time_alive": 174,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:bae21bcc52734522bd773f5d9b712734",
  "placement": 1,
  "time_alive": 1540,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 11,
  "time_alive": 1458,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 38,
  "time_alive": 856,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 20,
  "time_alive": 1359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 4,
  "time_alive": 1509,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 8,
  "time_alive": 1482,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a:f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 16,
  "time_alive": 1400,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 35,
  "time_alive": 939,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 1,
  "time_alive": 1511,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 28,
  "time_alive": 1185,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 19,
  "time_alive": 1370,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 21,
  "time_alive": 1379,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 23,
  "time_alive": 1342,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "3e53b59217904799b9f3646d2a869971:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 28,
  "time_alive": 1162,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "3e53b59217904799b9f3646d2a869971:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 24,
  "time_alive": 1260,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "3e53b59217904799b9f3646d2a869971:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 14,
  "time_alive": 1435,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "3e53b59217904799b9f3646d2a869971:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 2,
  "time_alive": 1536,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "3e53b59217904799b9f3646d2a869971:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 23,
  "time_alive": 1372,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "3e53b59217904799b9f3646d2a869971:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 40,
  "time_alive": 512,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 7,
  "time_alive": 1502,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 33,
  "time_alive": 1049,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 24,
  "time_alive": 1334,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 42,
  "time_alive": 402,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 9,
  "time_alive": 1476,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:1449c5d6fd4c47fc9f107d89acfb1c6a",
  "placement": 46,
  "time_alive": 160,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 32,
  "time_alive": 1118,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 10,
  "time_alive": 1418,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 8,
  "time_alive": 1483,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 24,
  "time_alive": 1337,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 17,
  "time_alive": 1407,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:d30230ffecf94ad5b4614884fcf255cd",
  "placement": 19,
  "time_alive": 1373,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:829b509f26964205acf10f463a743a14",
  "placement": 17,
  "time_alive": 1419,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:829b509f26964205acf10f463a743a14",
  "placement": 23,
  "time_alive": 1275,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:829b509f26964205acf10f463a743a14",
  "placement": 35,
  "time_alive": 1098,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:829b509f26964205acf10f463a743a14",
  "placement": 7,
  "time_alive": 1504,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:829b509f26964205acf10f463a743a14",
  "placement": 12,
  "time_alive": 1437,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:829b509f26964205acf10f463a743a14",
  "placement": 44,
  "time_alive": 253,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 46,
  "time_alive": 195,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 49,
  "time_alive": 158,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 49,
  "time_alive": 145,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 6,
  "time_alive": 1506,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 46,
  "time_alive": 187,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1540,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 47,
  "time_alive": 191,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 26,
  "time_alive": 1201,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 21,
  "time_alive": 1358,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 43,
  "time_alive": 389,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 11,
  "time_alive": 1460,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1405,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 42,
  "time_alive": 262,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 15,
  "time_alive": 1388,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 9,
  "time_alive": 1477,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 30,
  "time_alive": 1200,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 34,
  "time_alive": 1146,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 35,
  "time_alive": 810,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 30,
  "time_alive": 1161,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 12,
  "time_alive": 1412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 50,
  "time_alive": 105,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 50,
  "time_alive": 112,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 2,
  "time_alive": 1532,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "c62fd294dcd243208e87017e186ad4cc:d7f95c998dfa4ba3bca8aa30e2ef5a64",
  "placement": 28,
  "time_alive": 1128,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 26,
  "time_alive": 1253,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 20,
  "time_alive": 1333,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 38,
  "time_alive": 825,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 34,
  "time_alive": 802,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 10,
  "time_alive": 1473,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 11,
  "time_alive": 1430,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 23,
  "time_alive": 1333,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 3,
  "time_alive": 1508,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 25,
  "time_alive": 1327,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 16,
  "time_alive": 1417,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 39,
  "time_alive": 691,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 36,
  "time_alive": 785,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 18,
  "time_alive": 1418,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 14,
  "time_alive": 1409,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 11,
  "time_alive": 1452,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 49,
  "time_alive": 161,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 45,
  "time_alive": 214,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:e5556b3269cf4e3499198774adc4cac2",
  "placement": 45,
  "time_alive": 198,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 9,
  "time_alive": 1488,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 40,
  "time_alive": 491,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 19,
  "time_alive": 1372,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 26,
  "time_alive": 1333,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 43,
  "time_alive": 431,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:c58453b222ae49f98e2115c5d5769021",
  "placement": 13,
  "time_alive": 1409,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 5,
  "time_alive": 1505,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 13,
  "time_alive": 1411,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 45,
  "time_alive": 225,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 41,
  "time_alive": 458,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 50,
  "time_alive": 142,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 43,
  "time_alive": 326,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 17,
  "time_alive": 1374,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 44,
  "time_alive": 265,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 12,
  "time_alive": 1455,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 30,
  "time_alive": 1221,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 17,
  "time_alive": 1396,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 19,
  "time_alive": 1394,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 36,
  "time_alive": 991,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 6,
  "time_alive": 1494,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 36,
  "time_alive": 582,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 33,
  "time_alive": 1154,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "baaa90fdbe9245b89df33ec3b7891a0b:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 38,
  "time_alive": 648,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "205afc681a324533907d65f72933f116:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 13,
  "time_alive": 1454,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "205afc681a324533907d65f72933f116:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 44,
  "time_alive": 281,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "205afc681a324533907d65f72933f116:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 16,
  "time_alive": 1415,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "205afc681a324533907d65f72933f116:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 38,
  "time_alive": 485,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "205afc681a324533907d65f72933f116:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 36,
  "time_alive": 808,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "205afc681a324533907d65f72933f116:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 27,
  "time_alive": 1241,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 16,
  "time_alive": 1428,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 32,
  "time_alive": 1080,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 36,
  "time_alive": 928,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 48,
  "time_alive": 168,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 18,
  "time_alive": 1392,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 22,
  "time_alive": 1343,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "e365d9b305e5437fadae1ae1582c134d:f8eeece803924b9093db2812e6772743",
  "placement": 25,
  "time_alive": 1306,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "e365d9b305e5437fadae1ae1582c134d:f8eeece803924b9093db2812e6772743",
  "placement": 30,
  "time_alive": 1152,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "e365d9b305e5437fadae1ae1582c134d:f8eeece803924b9093db2812e6772743",
  "placement": 43,
  "time_alive": 300,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "e365d9b305e5437fadae1ae1582c134d:f8eeece803924b9093db2812e6772743",
  "placement": 11,
  "time_alive": 1456,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "e365d9b305e5437fadae1ae1582c134d:f8eeece803924b9093db2812e6772743",
  "placement": 22,
  "time_alive": 1374,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "e365d9b305e5437fadae1ae1582c134d:f8eeece803924b9093db2812e6772743",
  "placement": 37,
  "time_alive": 707,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 41,
  "time_alive": 278,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 42,
  "time_alive": 284,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 30,
  "time_alive": 1162,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 10,
  "time_alive": 1472,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 31,
  "time_alive": 1199,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 45,
  "time_alive": 197,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 11,
  "time_alive": 1417,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 47,
  "time_alive": 208,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 45,
  "time_alive": 293,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 20,
  "time_alive": 1385,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 42,
  "time_alive": 431,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 24,
  "time_alive": 1317,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 37,
  "time_alive": 898,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 27,
  "time_alive": 1210,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 46,
  "time_alive": 240,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 35,
  "time_alive": 1048,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "3b97c184ed7d456cb79b99ed46755009:bc31cf1e00224ba29692ea0d7f5b25fb",
  "placement": 6,
  "time_alive": 1474,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:a048d652928747a5ae9661c8e6a935c5",
  "placement": 37,
  "time_alive": 685,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:a048d652928747a5ae9661c8e6a935c5",
  "placement": 47,
  "time_alive": 241,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:a048d652928747a5ae9661c8e6a935c5",
  "placement": 18,
  "time_alive": 1396,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:a048d652928747a5ae9661c8e6a935c5",
  "placement": 21,
  "time_alive": 1358,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:a048d652928747a5ae9661c8e6a935c5",
  "placement": 16,
  "time_alive": 1424,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:a048d652928747a5ae9661c8e6a935c5",
  "placement": 48,
  "time_alive": 107,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:90b96c6294c64770b606615186e016db",
  "placement": 48,
  "time_alive": 166,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:90b96c6294c64770b606615186e016db",
  "placement": 46,
  "time_alive": 243,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:90b96c6294c64770b606615186e016db",
  "placement": 46,
  "time_alive": 208,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:90b96c6294c64770b606615186e016db",
  "placement": 28,
  "time_alive": 1236,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:90b96c6294c64770b606615186e016db",
  "placement": 14,
  "time_alive": 1434,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:90b96c6294c64770b606615186e016db",
  "placement": 20,
  "time_alive": 1355,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 22,
  "time_alive": 1336,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 19,
  "time_alive": 1337,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 41,
  "time_alive": 618,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 33,
  "time_alive": 1080,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 26,
  "time_alive": 1337,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 21,
  "time_alive": 1344,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "9b68ebab530a4d2cbf6db56b14e4c20a:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 36,
  "time_alive": 859,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "9b68ebab530a4d2cbf6db56b14e4c20a:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 41,
  "time_alive": 336,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "9b68ebab530a4d2cbf6db56b14e4c20a:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 39,
  "time_alive": 781,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "9b68ebab530a4d2cbf6db56b14e4c20a:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 35,
  "time_alive": 631,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "9b68ebab530a4d2cbf6db56b14e4c20a:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 41,
  "time_alive": 653,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "9b68ebab530a4d2cbf6db56b14e4c20a:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 12,
  "time_alive": 1428,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 38,
  "time_alive": 526,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 48,
  "time_alive": 240,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 33,
  "time_alive": 1121,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 23,
  "time_alive": 1340,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 29,
  "time_alive": 1295,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 39,
  "time_alive": 560,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "a8fb52a615814c459516416714439bd4:bd1bd44eca13440ba328e80a1d6d1c89",
  "placement": 21,
  "time_alive": 1341,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "a8fb52a615814c459516416714439bd4:bd1bd44eca13440ba328e80a1d6d1c89",
  "placement": 18,
  "time_alive": 1349,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "a8fb52a615814c459516416714439bd4:bd1bd44eca13440ba328e80a1d6d1c89",
  "placement": 42,
  "time_alive": 332,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "a8fb52a615814c459516416714439bd4:bd1bd44eca13440ba328e80a1d6d1c89",
  "placement": 22,
  "time_alive": 1345,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "a8fb52a615814c459516416714439bd4:bd1bd44eca13440ba328e80a1d6d1c89",
  "placement": 44,
  "time_alive": 248,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "a8fb52a615814c459516416714439bd4:bd1bd44eca13440ba328e80a1d6d1c89",
  "placement": 47,
  "time_alive": 134,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 20,
  "time_alive": 1384,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 28,
  "time_alive": 1176,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 31,
  "time_alive": 1162,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 29,
  "time_alive": 1203,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 42,
  "time_alive": 652,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 30,
  "time_alive": 1115,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344:5273e8f7cb5042b585ef299584f5904d",
  "placement": 31,
  "time_alive": 1158,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344:5273e8f7cb5042b585ef299584f5904d",
  "placement": 22,
  "time_alive": 1325,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344:5273e8f7cb5042b585ef299584f5904d",
  "placement": 29,
  "time_alive": 1177,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344:5273e8f7cb5042b585ef299584f5904d",
  "placement": 25,
  "time_alive": 1335,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344:5273e8f7cb5042b585ef299584f5904d",
  "placement": 49,
  "time_alive": 143,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "3ec2b56ee7f94ceba75fd4226c149344:5273e8f7cb5042b585ef299584f5904d",
  "placement": 32,
  "time_alive": 1002,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 34,
  "time_alive": 995,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 43,
  "time_alive": 283,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 48,
  "time_alive": 185,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 39,
  "time_alive": 481,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:b5eded1141724d66920d69e2e7127cbb",
  "placement": 40,
  "time_alive": 685,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "0c7b4796e8d7457695a933194fc95823:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 44,
  "time_alive": 220,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "0c7b4796e8d7457695a933194fc95823:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 31,
  "time_alive": 1086,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "0c7b4796e8d7457695a933194fc95823:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 23,
  "time_alive": 1339,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "0c7b4796e8d7457695a933194fc95823:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 20,
  "time_alive": 1361,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "0c7b4796e8d7457695a933194fc95823:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 48,
  "time_alive": 151,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "0c7b4796e8d7457695a933194fc95823:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 34,
  "time_alive": 944,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "126158086c944d55b296fa9148faa21d:9252349b219b463d9eb26d8946f357bf",
  "placement": 43,
  "time_alive": 221,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "126158086c944d55b296fa9148faa21d:9252349b219b463d9eb26d8946f357bf",
  "placement": 25,
  "time_alive": 1251,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "126158086c944d55b296fa9148faa21d:9252349b219b463d9eb26d8946f357bf",
  "placement": 22,
  "time_alive": 1341,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "126158086c944d55b296fa9148faa21d:9252349b219b463d9eb26d8946f357bf",
  "placement": 27,
  "time_alive": 1248,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "126158086c944d55b296fa9148faa21d:9252349b219b463d9eb26d8946f357bf",
  "placement": 37,
  "time_alive": 737,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "126158086c944d55b296fa9148faa21d:9252349b219b463d9eb26d8946f357bf",
  "placement": 33,
  "time_alive": 975,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d:bcd9bdddf894439ab98291355305ba2d",
  "placement": 29,
  "time_alive": 1162,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d:bcd9bdddf894439ab98291355305ba2d",
  "placement": 45,
  "time_alive": 276,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d:bcd9bdddf894439ab98291355305ba2d",
  "placement": 40,
  "time_alive": 723,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d:bcd9bdddf894439ab98291355305ba2d",
  "placement": 40,
  "time_alive": 481,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d:bcd9bdddf894439ab98291355305ba2d",
  "placement": 32,
  "time_alive": 1181,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "1bfd869378c542b4b5931566b93e6a1d:bcd9bdddf894439ab98291355305ba2d",
  "placement": 31,
  "time_alive": 1106,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "92c17b83-b1cd-4e46-99fe-5ea260c169de",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e",
  "placement": 27,
  "time_alive": 1219,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "07313b93-c466-47b3-b593-574c2e696174",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e",
  "placement": 34,
  "time_alive": 1039,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4bbb9411-a445-47b6-8158-24d730189c91",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e",
  "placement": 32,
  "time_alive": 1153,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e",
  "placement": 47,
  "time_alive": 192,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "63a17141-fd57-4845-82e0-0b5941625369",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e",
  "placement": 25,
  "time_alive": 1349,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e",
  "placement": 29,
  "time_alive": 1123,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 9,
  "time_alive": 1377,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 7,
  "time_alive": 1452,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 9,
  "time_alive": 1413,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 4,
  "time_alive": 1530,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1377,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1377,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 17,
  "time_alive": 1387,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1388,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1446,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 4,
  "time_alive": 1483,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 15,
  "time_alive": 1371,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 27,
  "time_alive": 1235,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 45,
  "time_alive": 539,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1471,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 3,
  "time_alive": 1495,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:5a3728830d834bd78307cfe968ce374f",
  "placement": 29,
  "time_alive": 1133,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 20,
  "time_alive": 1311,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 20,
  "time_alive": 1343,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1489,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 22,
  "time_alive": 1373,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1431,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 12,
  "time_alive": 1383,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 15,
  "time_alive": 1405,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1517,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 1,
  "time_alive": 1446,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 45,
  "time_alive": 646,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 47,
  "time_alive": 239,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 18,
  "time_alive": 1394,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 1,
  "time_alive": 1466,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 8,
  "time_alive": 1405,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 9,
  "time_alive": 1437,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db:7bb03ea08e16445bbe0784104bffa43f",
  "placement": 36,
  "time_alive": 901,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1388,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 25,
  "time_alive": 1250,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 25,
  "time_alive": 1182,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 1,
  "time_alive": 1556,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 19,
  "time_alive": 1351,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 40,
  "time_alive": 594,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 41,
  "time_alive": 643,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "8723f8c420c44c9f883c13401217f948:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 3,
  "time_alive": 1496,
  "elims": 12,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 13,
  "time_alive": 1353,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 1,
  "time_alive": 1502,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 16,
  "time_alive": 1366,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 31,
  "time_alive": 1169,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 9,
  "time_alive": 1414,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 31,
  "time_alive": 1140,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 2,
  "time_alive": 1504,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30",
  "placement": 34,
  "time_alive": 1041,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 38,
  "time_alive": 857,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 12,
  "time_alive": 1405,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 11,
  "time_alive": 1388,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 11,
  "time_alive": 1417,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 4,
  "time_alive": 1450,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 32,
  "time_alive": 1139,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 1,
  "time_alive": 1504,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "7b9f93f83aa9457ea67113f9ea3162a9:862ac716e4f64c35af758db0c7de5c5a",
  "placement": 14,
  "time_alive": 1378,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 10,
  "time_alive": 1370,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 11,
  "time_alive": 1407,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 12,
  "time_alive": 1386,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 19,
  "time_alive": 1381,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 6,
  "time_alive": 1440,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 7,
  "time_alive": 1410,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 28,
  "time_alive": 1140,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "f0541261c64c443882ab8109dd8b55de:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 11,
  "time_alive": 1406,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 11,
  "time_alive": 1368,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1296,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 13,
  "time_alive": 1381,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 16,
  "time_alive": 1396,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 18,
  "time_alive": 1362,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 19,
  "time_alive": 1324,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 11,
  "time_alive": 1425,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "5b804cf9aec94180821570a64c165cf4:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 19,
  "time_alive": 1349,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 40,
  "time_alive": 848,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 36,
  "time_alive": 964,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 35,
  "time_alive": 927,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 8,
  "time_alive": 1465,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 15,
  "time_alive": 1377,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 3,
  "time_alive": 1444,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 6,
  "time_alive": 1461,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 5,
  "time_alive": 1474,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 24,
  "time_alive": 1224,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 27,
  "time_alive": 1202,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 4,
  "time_alive": 1446,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1556,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 28,
  "time_alive": 1197,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 13,
  "time_alive": 1380,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 12,
  "time_alive": 1410,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "3bd7fe98024f4e819bc8fbfaecbe3102:a048d652928747a5ae9661c8e6a935c5",
  "placement": 6,
  "time_alive": 1454,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 23,
  "time_alive": 1286,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 9,
  "time_alive": 1442,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 31,
  "time_alive": 1118,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 24,
  "time_alive": 1338,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 9,
  "time_alive": 1401,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 4,
  "time_alive": 1487,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:845c762391ab4b029767c50f13f92a07",
  "placement": 44,
  "time_alive": 622,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 16,
  "time_alive": 1315,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 24,
  "time_alive": 1261,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 3,
  "time_alive": 1472,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 49,
  "time_alive": 131,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 3,
  "time_alive": 1452,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 10,
  "time_alive": 1392,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 20,
  "time_alive": 1347,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:6f3ebc481092450aaf883aa49722914f",
  "placement": 38,
  "time_alive": 856,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 3,
  "time_alive": 1422,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 35,
  "time_alive": 1000,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 20,
  "time_alive": 1243,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 42,
  "time_alive": 838,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 36,
  "time_alive": 1005,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 6,
  "time_alive": 1418,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 10,
  "time_alive": 1433,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "63fe1eb108774e33b6bb78729042e3a5:b8d23c2e16f64837a517f59623a113f4",
  "placement": 24,
  "time_alive": 1209,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 19,
  "time_alive": 1311,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 23,
  "time_alive": 1265,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 5,
  "time_alive": 1446,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 12,
  "time_alive": 1412,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 16,
  "time_alive": 1368,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 33,
  "time_alive": 1119,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 23,
  "time_alive": 1338,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "2b9bc917c1ac4cff9f96a17eba0a97bf:4356be3924ce4cf680a91fe4713c383a",
  "placement": 22,
  "time_alive": 1325,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 17,
  "time_alive": 1313,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 17,
  "time_alive": 1361,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 21,
  "time_alive": 1241,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 6,
  "time_alive": 1476,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 8,
  "time_alive": 1427,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 21,
  "time_alive": 1311,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 13,
  "time_alive": 1408,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1378,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 46,
  "time_alive": 504,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 42,
  "time_alive": 823,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 8,
  "time_alive": 1413,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 3,
  "time_alive": 1543,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 5,
  "time_alive": 1442,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 35,
  "time_alive": 1112,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 19,
  "time_alive": 1350,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5:ecb3215f62f0432c801165b372008d9e",
  "placement": 43,
  "time_alive": 681,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 37,
  "time_alive": 896,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 21,
  "time_alive": 1310,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 6,
  "time_alive": 1444,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 26,
  "time_alive": 1276,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 20,
  "time_alive": 1344,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 29,
  "time_alive": 1148,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 5,
  "time_alive": 1477,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "516323d244394670836c3fbb76cf5148:8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 37,
  "time_alive": 862,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 41,
  "time_alive": 825,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 48,
  "time_alive": 598,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 26,
  "time_alive": 1148,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 14,
  "time_alive": 1399,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 17,
  "time_alive": 1367,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 20,
  "time_alive": 1320,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 31,
  "time_alive": 1083,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "acfc51361aff4c968f3d95dac5dce379:f7e43c2c65f847adab8f1ada8de1b7d9",
  "placement": 2,
  "time_alive": 1517,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 36,
  "time_alive": 958,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 6,
  "time_alive": 1458,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 17,
  "time_alive": 1360,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 9,
  "time_alive": 1423,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 48,
  "time_alive": 338,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 26,
  "time_alive": 1167,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 8,
  "time_alive": 1443,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:fb46493d75c8465b88c60e35d879e142",
  "placement": 25,
  "time_alive": 1207,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 35,
  "time_alive": 984,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 46,
  "time_alive": 616,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 18,
  "time_alive": 1311,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 32,
  "time_alive": 1152,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 31,
  "time_alive": 1162,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 2,
  "time_alive": 1471,
  "elims": 13,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 49,
  "time_alive": 203,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:780c8202899642eeae42283b437f3d1a",
  "placement": 20,
  "time_alive": 1345,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 47,
  "time_alive": 359,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 2,
  "time_alive": 1502,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 23,
  "time_alive": 1217,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 13,
  "time_alive": 1401,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 23,
  "time_alive": 1308,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 37,
  "time_alive": 926,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 34,
  "time_alive": 932,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:e78be14b45ca4c78806554acfb04c118",
  "placement": 32,
  "time_alive": 1098,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 18,
  "time_alive": 1313,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 8,
  "time_alive": 1451,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 24,
  "time_alive": 1204,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 5,
  "time_alive": 1478,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 30,
  "time_alive": 1173,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 43,
  "time_alive": 534,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 38,
  "time_alive": 829,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "447fb739f8484d5c923c21614ed63d86:7fba179e9e5b4c5bb268731818f14568",
  "placement": 7,
  "time_alive": 1439,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 31,
  "time_alive": 1069,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 31,
  "time_alive": 1160,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 29,
  "time_alive": 1127,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 36,
  "time_alive": 1014,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 12,
  "time_alive": 1398,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 11,
  "time_alive": 1392,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 47,
  "time_alive": 293,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "0c16e625fb0040d890f4492d9f10e161:67b3814db2114185a61e3189f6e64ba7",
  "placement": 50,
  "time_alive": 116,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 39,
  "time_alive": 849,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 43,
  "time_alive": 807,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 2,
  "time_alive": 1489,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 10,
  "time_alive": 1422,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 26,
  "time_alive": 1208,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 28,
  "time_alive": 1150,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 24,
  "time_alive": 1281,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150",
  "placement": 33,
  "time_alive": 1073,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 5,
  "time_alive": 1409,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 16,
  "time_alive": 1380,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 49,
  "time_alive": 146,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 17,
  "time_alive": 1395,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 38,
  "time_alive": 834,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 4,
  "time_alive": 1434,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 30,
  "time_alive": 1092,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 39,
  "time_alive": 850,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 32,
  "time_alive": 1065,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 26,
  "time_alive": 1234,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 32,
  "time_alive": 1116,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 23,
  "time_alive": 1348,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 50,
  "time_alive": 195,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 5,
  "time_alive": 1434,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 37,
  "time_alive": 907,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "31f7d3ac2d2a425dbe834d9c67681dc1:a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 17,
  "time_alive": 1372,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 14,
  "time_alive": 1329,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 13,
  "time_alive": 1401,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 22,
  "time_alive": 1231,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 48,
  "time_alive": 136,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 13,
  "time_alive": 1383,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 42,
  "time_alive": 535,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 18,
  "time_alive": 1370,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:3e999b2dbb0b46a490289ba783142bff",
  "placement": 23,
  "time_alive": 1278,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 22,
  "time_alive": 1307,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 40,
  "time_alive": 863,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 19,
  "time_alive": 1295,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 34,
  "time_alive": 1047,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 25,
  "time_alive": 1214,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 18,
  "time_alive": 1326,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 29,
  "time_alive": 1106,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 45,
  "time_alive": 531,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 28,
  "time_alive": 1079,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 3,
  "time_alive": 1485,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 7,
  "time_alive": 1429,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 33,
  "time_alive": 1085,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 46,
  "time_alive": 539,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 22,
  "time_alive": 1292,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 43,
  "time_alive": 450,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "cc383e693def4c0e831b285f97dbf299:f69a9fe64d6f4e6fa9adfe2bb3a6524c",
  "placement": 28,
  "time_alive": 1184,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 12,
  "time_alive": 1360,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 18,
  "time_alive": 1357,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 27,
  "time_alive": 1143,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 7,
  "time_alive": 1468,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 27,
  "time_alive": 1207,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 34,
  "time_alive": 1116,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 25,
  "time_alive": 1237,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 26,
  "time_alive": 1196,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 50,
  "time_alive": 102,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 28,
  "time_alive": 1190,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 46,
  "time_alive": 280,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 20,
  "time_alive": 1376,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 22,
  "time_alive": 1325,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 16,
  "time_alive": 1343,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 40,
  "time_alive": 773,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "7c18d3eaab924d42b0549c031d15f5f2:8a49752534284919b473fcdb5a9b47d5",
  "placement": 16,
  "time_alive": 1374,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 33,
  "time_alive": 1056,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 10,
  "time_alive": 1430,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 38,
  "time_alive": 853,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 28,
  "time_alive": 1203,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 24,
  "time_alive": 1223,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 38,
  "time_alive": 850,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 7,
  "time_alive": 1445,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "6d32cf3fbe604ad0b47a0a66eeca2df2:8aa03e3c5d9b4e9a961cd3bfd0b19336",
  "placement": 21,
  "time_alive": 1328,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 4,
  "time_alive": 1412,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 44,
  "time_alive": 789,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 33,
  "time_alive": 1052,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 25,
  "time_alive": 1280,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 33,
  "time_alive": 1125,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 41,
  "time_alive": 587,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 14,
  "time_alive": 1407,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:ea1eead380a14859885c25cafb387413",
  "placement": 27,
  "time_alive": 1193,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 27,
  "time_alive": 1108,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 39,
  "time_alive": 870,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 10,
  "time_alive": 1391,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 39,
  "time_alive": 904,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 29,
  "time_alive": 1179,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 17,
  "time_alive": 1335,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 35,
  "time_alive": 920,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "675950bde95a49379dc37e298194cf1b:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 9,
  "time_alive": 1430,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 25,
  "time_alive": 1193,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 33,
  "time_alive": 1150,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 37,
  "time_alive": 865,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 44,
  "time_alive": 457,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 2,
  "time_alive": 1466,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 44,
  "time_alive": 471,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 16,
  "time_alive": 1402,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922:e7c4885ea2d1486d89b6b35973f9fda6",
  "placement": 42,
  "time_alive": 805,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1fd789a0-1125-47af-9457-fc9e72ce3820",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 34,
  "time_alive": 993,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "84594bce-e350-4536-9c55-762eb7d46491",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 41,
  "time_alive": 862,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "913da743-ac46-41bd-9573-fbfe1176d300",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 14,
  "time_alive": 1374,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "35036fa6-85dd-4c77-ad30-e0e09ecd1277",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 37,
  "time_alive": 984,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "3c0c3b21-c5af-4e3f-b3fc-749df4c07175",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 43,
  "time_alive": 726,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "727c5671-5c14-4001-a4da-dbfd21e91534",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 24,
  "time_alive": 1288,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "9603a6ab-daaa-463c-ab36-87c2dc8687c7",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 42,
  "time_alive": 579,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "5518cfc4-aace-4661-b8a3-55417408f21d",
  "team_id": "2652e3fe14b344bf8edbeee7c3de5554:4872060f1fda4f44b6eb5784bcd793ba",
  "placement": 10,
  "time_alive": 1417,
  "elims": 5,
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
    