const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 80,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 82,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 65,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 14,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 70,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "559695864dea41f0831d6340819b8819",
  "placement": 64,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 78,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 75,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 31,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 43,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 76,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 94,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 60,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 76,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 73,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 88,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 51,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 21,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 93,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 31,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 83,
  "time_alive": 577,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 85,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 29,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "72629dda44b84118ba4037fc7216fbf2",
  "placement": 57,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 19,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 83,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 100,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 78,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 56,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 47,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 43,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 48,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 90,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 53,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 72,
  "time_alive": 844,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 92,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 97,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 95,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 85,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 40,
  "time_alive": 1298,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 50,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 67,
  "time_alive": 975,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 53,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 63,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 53,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 36,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 93,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 59,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 71,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 51,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 44,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 93,
  "time_alive": 351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 42,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 61,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 68,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 53,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 35,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 56,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 68,
  "time_alive": 875,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 84,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 25,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 99,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 93,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 99,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 99,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 46,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 77,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 43,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 39,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 48,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 81,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 69,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 88,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 72,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 77,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 49,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 62,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 55,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 55,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 67,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 72,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 67,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 53,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 73,
  "time_alive": 871,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 61,
  "time_alive": 1098,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 66,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 88,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 59,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 90,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 96,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 76,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 93,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 32,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 76,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 86,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "68aa115312494d99b6ae92893d79932f",
  "placement": 56,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 89,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 80,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 75,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 41,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 61,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 86,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 87,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 94,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 98,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 81,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 64,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06564f7b-623b-4db7-af0d-99c75e90e2d6",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 52,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 75,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "026927aa-fb59-4f59-ba4c-041df9a65274",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 81,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08e31732-6ddc-4161-995b-e829946321e6",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 79,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2c02de48-fc78-469f-a325-b911f98b4a9e",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 58,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "21b736b5-7045-49b3-9b03-b43998682ff4",
  "team_id": "4ab66d6700c84181bf2cf371287f29c5",
  "placement": 96,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 18,
  "time_alive": 1713,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 6,
  "time_alive": 1474,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 11,
  "time_alive": 1447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 1,
  "time_alive": 1489,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 19,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 33,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 62,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 9,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 9,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 4,
  "time_alive": 1451,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 16,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 2,
  "time_alive": 1382,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 20,
  "time_alive": 1702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 11,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 8,
  "time_alive": 1469,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 16,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 26,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 30,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 2,
  "time_alive": 1950,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 13,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 16,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 14,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 13,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "246f03fa13ac4dd6a4eb3f1e2630aeff",
  "placement": 42,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 36,
  "time_alive": 1567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 51,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 12,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 32,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 7,
  "time_alive": 1348,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 1,
  "time_alive": 1382,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 35,
  "time_alive": 1576,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 8,
  "time_alive": 1461,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 14,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 38,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 28,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 7,
  "time_alive": 1350,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 21,
  "time_alive": 1693,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 5,
  "time_alive": 1489,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 62,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 45,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 9,
  "time_alive": 1343,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 15,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 25,
  "time_alive": 1670,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 1,
  "time_alive": 1506,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 7,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 29,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 84,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 24,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 13,
  "time_alive": 1744,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 63,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1514,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 26,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 1,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 29,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1736,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 98,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1519,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 96,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 25,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 10,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 14,
  "time_alive": 1739,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 39,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 4,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 3,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 23,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 84,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 5,
  "time_alive": 1906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 71,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 6,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 13,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 4,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f",
  "placement": 40,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 46,
  "time_alive": 1465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 21,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 65,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 7,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 8,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 6,
  "time_alive": 1359,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 23,
  "time_alive": 1685,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 4,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 24,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 36,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 29,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "aaa6130de0704dbead7ef18acd48dd84",
  "placement": 20,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 16,
  "time_alive": 1734,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 20,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 88,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 20,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 2,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 31,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 22,
  "time_alive": 1689,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 46,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 20,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 69,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 10,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 3,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 84,
  "time_alive": 495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 3,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 45,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 23,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 15,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 17,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 10,
  "time_alive": 1768,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 30,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 27,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 12,
  "time_alive": 1399,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 64,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "3a6f67c75c6849bb837cbe4c2e8ef8be",
  "placement": 46,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 4,
  "time_alive": 1928,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 22,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 33,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 34,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 94,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 45,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 83,
  "time_alive": 548,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 16,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 19,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 28,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 65,
  "time_alive": 568,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "7ac9362818984d8a86c863487f6cbf1b",
  "placement": 13,
  "time_alive": 1318,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 1,
  "time_alive": 1950,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 47,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 2,
  "time_alive": 1519,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 94,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 74,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed",
  "placement": 81,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 49,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 17,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 83,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 6,
  "time_alive": 1441,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 72,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8f260e254f1243d384f8eb55003b3a43",
  "placement": 4,
  "time_alive": 1364,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 11,
  "time_alive": 1755,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 48,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 79,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 39,
  "time_alive": 1302,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 6,
  "time_alive": 1355,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 39,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 40,
  "time_alive": 1541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 19,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 18,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 92,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 11,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "e365d9b305e5437fadae1ae1582c134d",
  "placement": 12,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 3,
  "time_alive": 1929,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 14,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 47,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 77,
  "time_alive": 549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 36,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 14,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 7,
  "time_alive": 1854,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 33,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 85,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 48,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 30,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "cb93f923ef344e97a90d5f82a220bacc",
  "placement": 23,
  "time_alive": 1264,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "491da741f42949c1b49df51205e03a64",
  "placement": 69,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "491da741f42949c1b49df51205e03a64",
  "placement": 59,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "491da741f42949c1b49df51205e03a64",
  "placement": 53,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "491da741f42949c1b49df51205e03a64",
  "placement": 10,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "491da741f42949c1b49df51205e03a64",
  "placement": 3,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "491da741f42949c1b49df51205e03a64",
  "placement": 22,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 19,
  "time_alive": 1705,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 40,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 36,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 19,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 12,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 73,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 6,
  "time_alive": 1856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 23,
  "time_alive": 1402,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 93,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 70,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 41,
  "time_alive": 1194,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 18,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "d6c35d0f0d88453599cbb1875cf2c925",
  "placement": 24,
  "time_alive": 1677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "d6c35d0f0d88453599cbb1875cf2c925",
  "placement": 10,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "d6c35d0f0d88453599cbb1875cf2c925",
  "placement": 35,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "d6c35d0f0d88453599cbb1875cf2c925",
  "placement": 79,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "d6c35d0f0d88453599cbb1875cf2c925",
  "placement": 34,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "d6c35d0f0d88453599cbb1875cf2c925",
  "placement": 21,
  "time_alive": 1271,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 56,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 45,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 38,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 2,
  "time_alive": 1489,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 17,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 87,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 78,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 25,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 34,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 27,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 39,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 9,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "bc6346bbacca449c82f1e6d39b1f5597",
  "placement": 29,
  "time_alive": 1603,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "bc6346bbacca449c82f1e6d39b1f5597",
  "placement": 88,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "bc6346bbacca449c82f1e6d39b1f5597",
  "placement": 5,
  "time_alive": 1501,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "bc6346bbacca449c82f1e6d39b1f5597",
  "placement": 61,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "bc6346bbacca449c82f1e6d39b1f5597",
  "placement": 32,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "bc6346bbacca449c82f1e6d39b1f5597",
  "placement": 49,
  "time_alive": 1039,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 8,
  "time_alive": 1840,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 77,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 86,
  "time_alive": 345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 8,
  "time_alive": 1424,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 78,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "9e24ee30d65d440f8d03a4946a9f1d43",
  "placement": 72,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 42,
  "time_alive": 1504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 15,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 76,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 9,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 82,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb",
  "placement": 28,
  "time_alive": 1242,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 57,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 7,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 80,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 58,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 37,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 11,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 9,
  "time_alive": 1785,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 31,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 15,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 74,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 54,
  "time_alive": 801,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 80,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 26,
  "time_alive": 1639,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 73,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 70,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 52,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 38,
  "time_alive": 1212,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 8,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 79,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 2,
  "time_alive": 1506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 21,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 42,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 61,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "ee5820c5c3744db498c8e8fdeb0aa547",
  "placement": 58,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 77,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 68,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 56,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 5,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 53,
  "time_alive": 850,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8809943909584a349675ee6b4d3a03e2",
  "placement": 16,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 68,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 56,
  "time_alive": 1177,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 23,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 60,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 83,
  "time_alive": 284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 5,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 91,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 13,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 66,
  "time_alive": 914,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 18,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 65,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 27,
  "time_alive": 1606,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 44,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 30,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 73,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 31,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "2fce260875094a0c8ec920988d51624f",
  "placement": 48,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "df2542f3d23144a0a2966f1ff264afe3",
  "placement": 51,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "df2542f3d23144a0a2966f1ff264afe3",
  "placement": 79,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "df2542f3d23144a0a2966f1ff264afe3",
  "placement": 25,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "df2542f3d23144a0a2966f1ff264afe3",
  "placement": 11,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "df2542f3d23144a0a2966f1ff264afe3",
  "placement": 45,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "df2542f3d23144a0a2966f1ff264afe3",
  "placement": 34,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 33,
  "time_alive": 1587,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 91,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 37,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 41,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 21,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 50,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 12,
  "time_alive": 1745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 42,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 94,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 25,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 47,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "e3cfc3e99ac94316a9b015e8c0b2ab59",
  "placement": 83,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 99,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 99,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 28,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 88,
  "time_alive": 265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 24,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 35,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "66f10f5808dc4721a4d3a4158c04e0a1",
  "placement": 50,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "66f10f5808dc4721a4d3a4158c04e0a1",
  "placement": 83,
  "time_alive": 607,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "66f10f5808dc4721a4d3a4158c04e0a1",
  "placement": 43,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "66f10f5808dc4721a4d3a4158c04e0a1",
  "placement": 18,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "66f10f5808dc4721a4d3a4158c04e0a1",
  "placement": 27,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "66f10f5808dc4721a4d3a4158c04e0a1",
  "placement": 47,
  "time_alive": 1060,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 32,
  "time_alive": 1596,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 81,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 72,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 21,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 51,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 19,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 88,
  "time_alive": 439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 34,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 87,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 78,
  "time_alive": 545,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 35,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "1fe3dc94d16b41f1a976ff51b41e0be9",
  "placement": 36,
  "time_alive": 1197,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 73,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 35,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 10,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 57,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 68,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "1caa23c54ab648c88374f6cb456e6bff",
  "placement": 69,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 18,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 44,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 22,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 48,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "befb0c173cd242d982d355078cf82202",
  "placement": 66,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 53,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 12,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 82,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 81,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 57,
  "time_alive": 775,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 54,
  "time_alive": 790,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 17,
  "time_alive": 1733,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 61,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 39,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 49,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 76,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "34af930f6d4c495cb872b229f30a15ad",
  "placement": 85,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "b83353b35d494d1a94b573fd09007d9c",
  "placement": 66,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "b83353b35d494d1a94b573fd09007d9c",
  "placement": 50,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "b83353b35d494d1a94b573fd09007d9c",
  "placement": 26,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "b83353b35d494d1a94b573fd09007d9c",
  "placement": 30,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "b83353b35d494d1a94b573fd09007d9c",
  "placement": 81,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "b83353b35d494d1a94b573fd09007d9c",
  "placement": 25,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 74,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 90,
  "time_alive": 383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 49,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 62,
  "time_alive": 1076,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 22,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 41,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 45,
  "time_alive": 1480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 62,
  "time_alive": 1043,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 63,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 15,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 43,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 64,
  "time_alive": 556,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 41,
  "time_alive": 1532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 32,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 90,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 42,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 89,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 34,
  "time_alive": 1582,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 65,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 59,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 37,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 56,
  "time_alive": 785,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 79,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 80,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 93,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 74,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 67,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 5,
  "time_alive": 1363,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "593d132d1e184c4ba8360b4efab330da",
  "placement": 52,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "ae78ba58ea234e7dbd5bd59347cf0c14",
  "placement": 87,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "ae78ba58ea234e7dbd5bd59347cf0c14",
  "placement": 74,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "ae78ba58ea234e7dbd5bd59347cf0c14",
  "placement": 75,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "ae78ba58ea234e7dbd5bd59347cf0c14",
  "placement": 17,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "ae78ba58ea234e7dbd5bd59347cf0c14",
  "placement": 96,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "ae78ba58ea234e7dbd5bd59347cf0c14",
  "placement": 26,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 72,
  "time_alive": 944,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 84,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 40,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 31,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 66,
  "time_alive": 562,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 60,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 59,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 66,
  "time_alive": 997,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 58,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 35,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 20,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 44,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "73e1c823b8604975b91849d81108d7e7",
  "placement": 39,
  "time_alive": 1552,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "73e1c823b8604975b91849d81108d7e7",
  "placement": 58,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "73e1c823b8604975b91849d81108d7e7",
  "placement": 31,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "73e1c823b8604975b91849d81108d7e7",
  "placement": 55,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "73e1c823b8604975b91849d81108d7e7",
  "placement": 79,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "73e1c823b8604975b91849d81108d7e7",
  "placement": 43,
  "time_alive": 1114,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 30,
  "time_alive": 1600,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 28,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 48,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 50,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 50,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 75,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "e203a372cf0b439d959958b745cb1d2f",
  "placement": 71,
  "time_alive": 965,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "e203a372cf0b439d959958b745cb1d2f",
  "placement": 87,
  "time_alive": 516,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "e203a372cf0b439d959958b745cb1d2f",
  "placement": 17,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "e203a372cf0b439d959958b745cb1d2f",
  "placement": 54,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "e203a372cf0b439d959958b745cb1d2f",
  "placement": 92,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "e203a372cf0b439d959958b745cb1d2f",
  "placement": 67,
  "time_alive": 444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "bccf458e0a2a490995ca8d68d0519696",
  "placement": 37,
  "time_alive": 1565,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "bccf458e0a2a490995ca8d68d0519696",
  "placement": 75,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "bccf458e0a2a490995ca8d68d0519696",
  "placement": 98,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "bccf458e0a2a490995ca8d68d0519696",
  "placement": 24,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "bccf458e0a2a490995ca8d68d0519696",
  "placement": 77,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "bccf458e0a2a490995ca8d68d0519696",
  "placement": 61,
  "time_alive": 673,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "677b14f0f0654cc5882036b10ca5d2c6",
  "placement": 76,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "677b14f0f0654cc5882036b10ca5d2c6",
  "placement": 67,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "677b14f0f0654cc5882036b10ca5d2c6",
  "placement": 22,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "677b14f0f0654cc5882036b10ca5d2c6",
  "placement": 82,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "677b14f0f0654cc5882036b10ca5d2c6",
  "placement": 95,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "677b14f0f0654cc5882036b10ca5d2c6",
  "placement": 76,
  "time_alive": 307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 82,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 43,
  "time_alive": 1300,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 95,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 80,
  "time_alive": 443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 60,
  "time_alive": 670,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 86,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "55c81f0434d849f7a6feabce80017190",
  "placement": 28,
  "time_alive": 1604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "55c81f0434d849f7a6feabce80017190",
  "placement": 70,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "55c81f0434d849f7a6feabce80017190",
  "placement": 42,
  "time_alive": 1233,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "55c81f0434d849f7a6feabce80017190",
  "placement": 51,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "55c81f0434d849f7a6feabce80017190",
  "placement": 75,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "55c81f0434d849f7a6feabce80017190",
  "placement": 71,
  "time_alive": 380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 44,
  "time_alive": 1484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 36,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 63,
  "time_alive": 971,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 80,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 51,
  "time_alive": 1010,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 72,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 90,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 95,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 14,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff",
  "placement": 56,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "b2c0f301e4064c1f9b9b09941d83019e",
  "placement": 65,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "b2c0f301e4064c1f9b9b09941d83019e",
  "placement": 27,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "b2c0f301e4064c1f9b9b09941d83019e",
  "placement": 46,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "b2c0f301e4064c1f9b9b09941d83019e",
  "placement": 71,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "b2c0f301e4064c1f9b9b09941d83019e",
  "placement": 49,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "b2c0f301e4064c1f9b9b09941d83019e",
  "placement": 90,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "1940f97bfb2347a5b9a64005a3e982c9",
  "placement": 85,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "1940f97bfb2347a5b9a64005a3e982c9",
  "placement": 82,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "1940f97bfb2347a5b9a64005a3e982c9",
  "placement": 96,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "1940f97bfb2347a5b9a64005a3e982c9",
  "placement": 85,
  "time_alive": 325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "1940f97bfb2347a5b9a64005a3e982c9",
  "placement": 91,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "1940f97bfb2347a5b9a64005a3e982c9",
  "placement": 27,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 52,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 29,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 67,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 68,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "e9eb3bfd83404d70bc6b10c6962d7ab9",
  "placement": 92,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "e9eb3bfd83404d70bc6b10c6962d7ab9",
  "placement": 29,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "e9eb3bfd83404d70bc6b10c6962d7ab9",
  "placement": 51,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "e9eb3bfd83404d70bc6b10c6962d7ab9",
  "placement": 83,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "e9eb3bfd83404d70bc6b10c6962d7ab9",
  "placement": 63,
  "time_alive": 616,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "e9eb3bfd83404d70bc6b10c6962d7ab9",
  "placement": 91,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 31,
  "time_alive": 1597,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 85,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 68,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 76,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 54,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 32,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 50,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 87,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 85,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 67,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 53,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 91,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 75,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 46,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 37,
  "time_alive": 1195,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 61,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 64,
  "time_alive": 1029,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 52,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 93,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 33,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "b72e0314f03e4b999452ca5242899408",
  "placement": 63,
  "time_alive": 664,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "201a5ae05070492c8cb3043819188b83",
  "placement": 75,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "201a5ae05070492c8cb3043819188b83",
  "placement": 57,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "201a5ae05070492c8cb3043819188b83",
  "placement": 92,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "201a5ae05070492c8cb3043819188b83",
  "placement": 65,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "201a5ae05070492c8cb3043819188b83",
  "placement": 44,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "201a5ae05070492c8cb3043819188b83",
  "placement": 32,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 90,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 78,
  "time_alive": 752,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 66,
  "time_alive": 826,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "9ed9a8c465ec4ca2b7e7ce9e73eb81c2",
  "placement": 94,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "9ed9a8c465ec4ca2b7e7ce9e73eb81c2",
  "placement": 95,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "9ed9a8c465ec4ca2b7e7ce9e73eb81c2",
  "placement": 84,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "9ed9a8c465ec4ca2b7e7ce9e73eb81c2",
  "placement": 33,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "9ed9a8c465ec4ca2b7e7ce9e73eb81c2",
  "placement": 40,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "9ed9a8c465ec4ca2b7e7ce9e73eb81c2",
  "placement": 59,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 38,
  "time_alive": 1554,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 54,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 69,
  "time_alive": 731,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 72,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 55,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 77,
  "time_alive": 429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 44,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 59,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 78,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 60,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 24,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 57,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 53,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 71,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 64,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 89,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 54,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 40,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 86,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "8ab2664b4e2d4513b5490314e5b5f516",
  "placement": 55,
  "time_alive": 788,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "b6a50773cd9940b482e3e3da077bb6b8",
  "placement": 52,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "b6a50773cd9940b482e3e3da077bb6b8",
  "placement": 69,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "b6a50773cd9940b482e3e3da077bb6b8",
  "placement": 41,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "b6a50773cd9940b482e3e3da077bb6b8",
  "placement": 56,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "b6a50773cd9940b482e3e3da077bb6b8",
  "placement": 55,
  "time_alive": 790,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "b6a50773cd9940b482e3e3da077bb6b8",
  "placement": 77,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 70,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 94,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 81,
  "time_alive": 372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 43,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 88,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "d5b8dc56ec7a434dbcf7ac569f2f15c3",
  "placement": 48,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "d5b8dc56ec7a434dbcf7ac569f2f15c3",
  "placement": 60,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "d5b8dc56ec7a434dbcf7ac569f2f15c3",
  "placement": 55,
  "time_alive": 1136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "d5b8dc56ec7a434dbcf7ac569f2f15c3",
  "placement": 46,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "d5b8dc56ec7a434dbcf7ac569f2f15c3",
  "placement": 93,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "d5b8dc56ec7a434dbcf7ac569f2f15c3",
  "placement": 53,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 89,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 80,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 99,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 59,
  "time_alive": 1121,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 62,
  "time_alive": 624,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 62,
  "time_alive": 665,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 81,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 37,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 89,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 89,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 89,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 74,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "a3eee3d21bc34c75a09d86b997958675",
  "placement": 58,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "a3eee3d21bc34c75a09d86b997958675",
  "placement": 92,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "a3eee3d21bc34c75a09d86b997958675",
  "placement": 61,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "a3eee3d21bc34c75a09d86b997958675",
  "placement": 91,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "a3eee3d21bc34c75a09d86b997958675",
  "placement": 69,
  "time_alive": 498,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "a3eee3d21bc34c75a09d86b997958675",
  "placement": 38,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 47,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 86,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 78,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 68,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 90,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 43,
  "time_alive": 1487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 55,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 67,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 64,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 52,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "87498a794058452d9bede3bd8f22c7b1",
  "placement": 82,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "89b92ae21b704054bd7a94a8391b4301",
  "placement": 63,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "89b92ae21b704054bd7a94a8391b4301",
  "placement": 49,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "89b92ae21b704054bd7a94a8391b4301",
  "placement": 73,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "89b92ae21b704054bd7a94a8391b4301",
  "placement": 47,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "89b92ae21b704054bd7a94a8391b4301",
  "placement": 58,
  "time_alive": 738,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "189f79e8875a4782a7bb3c569c354c75",
  "placement": 86,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "189f79e8875a4782a7bb3c569c354c75",
  "placement": 97,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "189f79e8875a4782a7bb3c569c354c75",
  "placement": 71,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "189f79e8875a4782a7bb3c569c354c75",
  "placement": 84,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "189f79e8875a4782a7bb3c569c354c75",
  "placement": 70,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "189f79e8875a4782a7bb3c569c354c75",
  "placement": 57,
  "time_alive": 749,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "d0695e43a6c44f90b775282dddd6d970",
  "placement": 95,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "d0695e43a6c44f90b775282dddd6d970",
  "placement": 96,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "d0695e43a6c44f90b775282dddd6d970",
  "placement": 60,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "d0695e43a6c44f90b775282dddd6d970",
  "placement": 86,
  "time_alive": 315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "d0695e43a6c44f90b775282dddd6d970",
  "placement": 73,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "d0695e43a6c44f90b775282dddd6d970",
  "placement": 70,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "5ffb78abeb7943cbbb551a79ff0d1d59",
  "placement": 97,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04b60843-bf01-41c7-8c37-0bf5b3bd8518",
  "team_id": "5ffb78abeb7943cbbb551a79ff0d1d59",
  "placement": 76,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1",
  "team_id": "5ffb78abeb7943cbbb551a79ff0d1d59",
  "placement": 64,
  "time_alive": 875,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "24653bfb-89fc-4725-a89e-17bcdb277b40",
  "team_id": "5ffb78abeb7943cbbb551a79ff0d1d59",
  "placement": 97,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0",
  "team_id": "5ffb78abeb7943cbbb551a79ff0d1d59",
  "placement": 87,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "febafe18-93f1-436f-a956-28097c0a70df",
  "team_id": "5ffb78abeb7943cbbb551a79ff0d1d59",
  "placement": 88,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "77942354-f76b-4c00-86eb-78ae5c99be96",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 93,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 78,
  "time_alive": 785,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 1,
  "time_alive": 1495,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 12,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 1,
  "time_alive": 1488,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 2,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 87,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 10,
  "time_alive": 1421,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 31,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 8,
  "time_alive": 1428,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 34,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 7,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "23b619c0f2f7462191b903bd29c34ac6",
  "placement": 11,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 19,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 10,
  "time_alive": 1437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 2,
  "time_alive": 1524,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 1,
  "time_alive": 1486,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 13,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 27,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 2,
  "time_alive": 1495,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 17,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 32,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 21,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "350ca401553c436caa03a14fe67a55fc",
  "placement": 17,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 41,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 22,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 32,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 26,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 3,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 1,
  "time_alive": 1520,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 59,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 12,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 1,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 86,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 53,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 5,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 23,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 42,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 13,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 55,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 8,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "4356be3924ce4cf680a91fe4713c383a",
  "placement": 20,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 16,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 9,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 31,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 62,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 19,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 2,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 17,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 35,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 15,
  "time_alive": 1383,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 23,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 12,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 5,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 17,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 19,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 27,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 65,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "af5e354532f64ea69fb53772e39b0340",
  "placement": 7,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 6,
  "time_alive": 1462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 78,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 42,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 19,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 13,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "658913b573ae4f2fa8814b079d1a9086",
  "placement": 6,
  "time_alive": 1489,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 62,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 26,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 34,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 24,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 14,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 65,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 32,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 3,
  "time_alive": 1492,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 8,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 18,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 60,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "568d307c48734a42b4f905bcebf9517f",
  "placement": 29,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "568d307c48734a42b4f905bcebf9517f",
  "placement": 46,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "568d307c48734a42b4f905bcebf9517f",
  "placement": 6,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "568d307c48734a42b4f905bcebf9517f",
  "placement": 17,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "568d307c48734a42b4f905bcebf9517f",
  "placement": 6,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "568d307c48734a42b4f905bcebf9517f",
  "placement": 34,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 12,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 80,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 59,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 3,
  "time_alive": 1473,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 45,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 19,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 83,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 28,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 10,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 23,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 90,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 3,
  "time_alive": 1504,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 86,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 47,
  "time_alive": 1215,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 24,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 2,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 5,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "3aba78cf9e644273807c36b6185fd400",
  "placement": 42,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 22,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 5,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 5,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 54,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 26,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514",
  "placement": 83,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 15,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 72,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 18,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 39,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 25,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "015572b588c94bc297dd44503cc0c755",
  "placement": 1,
  "time_alive": 1479,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "015572b588c94bc297dd44503cc0c755",
  "placement": 84,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "015572b588c94bc297dd44503cc0c755",
  "placement": 67,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "015572b588c94bc297dd44503cc0c755",
  "placement": 36,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "015572b588c94bc297dd44503cc0c755",
  "placement": 37,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "015572b588c94bc297dd44503cc0c755",
  "placement": 18,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 74,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 19,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 4,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 52,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 11,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "93cfb726aebb4eb0a5ce4a0ea42d3498",
  "placement": 37,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 3,
  "time_alive": 1478,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 6,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 98,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 85,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 89,
  "time_alive": 196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 68,
  "time_alive": 375,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 35,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 8,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 69,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 25,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 36,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 20,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 48,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 9,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 31,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 36,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "5439066c9a744fa3a0dc406de48aebe9",
  "placement": 8,
  "time_alive": 1470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 25,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 34,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 47,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 10,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 41,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 25,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 30,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 16,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 30,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 14,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 32,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "14172e753af34ab4abe3c2de6348bc23",
  "placement": 67,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 38,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 45,
  "time_alive": 1242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 38,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 20,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 4,
  "time_alive": 1468,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 39,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 34,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 14,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 27,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 6,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 73,
  "time_alive": 676,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "c3fed2a8f12f4d39ada7a8aeb784285a",
  "placement": 44,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 54,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 18,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 43,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 7,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 43,
  "time_alive": 1299,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 40,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 24,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 7,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 41,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 75,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 35,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99",
  "placement": 45,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 26,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 37,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 21,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 16,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 62,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 43,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 58,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 15,
  "time_alive": 1399,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 77,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 57,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 45,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 13,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 55,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 4,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 47,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 75,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 7,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 39,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 33,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 59,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 40,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 22,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 14,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 90,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 85,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 11,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 60,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "827187b423f94671b75741dd6520792b",
  "placement": 16,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "c6242764ab20411dae77829ee1ce39a4",
  "placement": 11,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "c6242764ab20411dae77829ee1ce39a4",
  "placement": 75,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "c6242764ab20411dae77829ee1ce39a4",
  "placement": 28,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "c6242764ab20411dae77829ee1ce39a4",
  "placement": 48,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "c6242764ab20411dae77829ee1ce39a4",
  "placement": 27,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "c6242764ab20411dae77829ee1ce39a4",
  "placement": 24,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 32,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 3,
  "time_alive": 1486,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 49,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 94,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 29,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "f8eeece803924b9093db2812e6772743",
  "placement": 47,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 21,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 77,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 39,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 13,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 31,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "beaa7d16ede54d99a370e070a3356a90",
  "placement": 35,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 75,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 54,
  "time_alive": 1147,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 76,
  "time_alive": 591,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 9,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 9,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "ecb3215f62f0432c801165b372008d9e",
  "placement": 50,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 31,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 30,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 82,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 40,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 70,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "862ac716e4f64c35af758db0c7de5c5a",
  "placement": 21,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 36,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 4,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 67,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 74,
  "time_alive": 638,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "3f429aacd44f4a1c83dca963097bd010",
  "placement": 26,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 46,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 20,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 68,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 22,
  "time_alive": 1372,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 42,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 52,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 47,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 56,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 91,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 10,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "cfef167a8ff243e4bb250cfeee9bb94d",
  "placement": 9,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 70,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 15,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 11,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 56,
  "time_alive": 1101,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 78,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 54,
  "time_alive": 1119,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 52,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 86,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 45,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 16,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 33,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca",
  "placement": 10,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 4,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 49,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 35,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 72,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 28,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "ed1260a4238d4028bad11c5dc92efe18",
  "placement": 71,
  "time_alive": 289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 98,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 98,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 93,
  "time_alive": 295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 5,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 39,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 28,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 18,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 37,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 50,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 33,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 55,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "68b3cff286064e34bcbf2e293446208d",
  "placement": 23,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 8,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 69,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 97,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 46,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 95,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07",
  "placement": 27,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 99,
  "time_alive": 83,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 11,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 78,
  "time_alive": 496,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 12,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 75,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60",
  "placement": 77,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dbc1caa-f1da-4890-8771-93f5b6e0f31c",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 28,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030024cb-33c0-40b9-ae92-eaa36621bcff",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 23,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004cd04c-36f1-4197-831b-2e0f670c31de",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 84,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "005bc053-ed3e-48d0-82ea-e395d8a131e0",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 71,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015478fa-b2f9-4fad-8286-8fe2f52c003b",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 34,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 78,
  "time_alive": 216,
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
    