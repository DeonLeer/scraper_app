const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 57,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 57,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 36,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 34,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 66,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 15,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 24,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 70,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 22,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 49,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 22,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 91,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 44,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 77,
  "time_alive": 728,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 4,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 9,
  "time_alive": 1470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 84,
  "time_alive": 268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 59,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 34,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 10,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 17,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 57,
  "time_alive": 1077,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 24,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 73,
  "time_alive": 700,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 17,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 12,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 66,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 67,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 33,
  "time_alive": 1367,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 31,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 84,
  "time_alive": 457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 16,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 65,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 32,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 33,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 13,
  "time_alive": 1444,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 75,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 68,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 31,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 26,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 32,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 33,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 48,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 23,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 43,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 32,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 9,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 84,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 40,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 37,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 46,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 39,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 46,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 50,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 15,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 21,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 5,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 30,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 68,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 23,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 76,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 71,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 4,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 67,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 42,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 74,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 27,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 17,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 43,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 21,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 79,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 57,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 22,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 42,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 40,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 83,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 20,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 18,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 52,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 11,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 67,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 53,
  "time_alive": 1206,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 67,
  "time_alive": 961,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 88,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 20,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 6,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 45,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 45,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 78,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 63,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 63,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 38,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 13,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 67,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "696abcd73a8540bf9319c455b590254c",
  "placement": 64,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 18,
  "time_alive": 1412,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 85,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 100,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 95,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 75,
  "time_alive": 649,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 30,
  "time_alive": 1362,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 81,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 70,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 43,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 11,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 52,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 44,
  "time_alive": 1284,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 70,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 3,
  "time_alive": 1529,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 88,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 92,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 94,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 33,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 53,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 93,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 39,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 21,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 16,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 81,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 9,
  "time_alive": 1447,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 84,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 73,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 61,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 82,
  "time_alive": 388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "721ee9ce20cc4e66b337157222aa2008",
  "placement": 26,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "721ee9ce20cc4e66b337157222aa2008",
  "placement": 46,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "721ee9ce20cc4e66b337157222aa2008",
  "placement": 48,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "721ee9ce20cc4e66b337157222aa2008",
  "placement": 43,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "721ee9ce20cc4e66b337157222aa2008",
  "placement": 35,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "721ee9ce20cc4e66b337157222aa2008",
  "placement": 26,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 48,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 68,
  "time_alive": 941,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 42,
  "time_alive": 1306,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 48,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 89,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 45,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 98,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 81,
  "time_alive": 581,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 85,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 12,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 47,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "6cc2daeec2f64fbe84cfd29a65f4eb50",
  "placement": 52,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "6cc2daeec2f64fbe84cfd29a65f4eb50",
  "placement": 62,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "6cc2daeec2f64fbe84cfd29a65f4eb50",
  "placement": 49,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "6cc2daeec2f64fbe84cfd29a65f4eb50",
  "placement": 62,
  "time_alive": 1048,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "6cc2daeec2f64fbe84cfd29a65f4eb50",
  "placement": 34,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "6cc2daeec2f64fbe84cfd29a65f4eb50",
  "placement": 14,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 90,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 58,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 15,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 40,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 30,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 86,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 59,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 34,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 43,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 50,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "055757ad94454afeb62d63ae153e8e93",
  "placement": 12,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "055757ad94454afeb62d63ae153e8e93",
  "placement": 92,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "055757ad94454afeb62d63ae153e8e93",
  "placement": 95,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "055757ad94454afeb62d63ae153e8e93",
  "placement": 41,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "055757ad94454afeb62d63ae153e8e93",
  "placement": 30,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "055757ad94454afeb62d63ae153e8e93",
  "placement": 58,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 50,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 25,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 38,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 33,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 75,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 21,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 34,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 63,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 25,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 73,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 83,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 13,
  "time_alive": 1435,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 71,
  "time_alive": 900,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 82,
  "time_alive": 660,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 91,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 51,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 74,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 23,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 50,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 64,
  "time_alive": 1037,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 80,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 47,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 82,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 37,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 24,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 81,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 66,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 41,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 72,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 87,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 76,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 5,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 76,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 25,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 64,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 92,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 70,
  "time_alive": 855,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 89,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 10,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 58,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 70,
  "time_alive": 904,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 91,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 90,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 97,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 56,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 74,
  "time_alive": 678,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 97,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 40,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 44,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "07e55f50750a436a9096a8e047980d09",
  "placement": 78,
  "time_alive": 450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 92,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 28,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 61,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 28,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "b3cb5d6176634a02ad976c1e37d9e0f5",
  "placement": 54,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 59,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 35,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 55,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 46,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 85,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 38,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "ccf2400fd8884ce9810e2f3ca7af62e3",
  "placement": 36,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "ccf2400fd8884ce9810e2f3ca7af62e3",
  "placement": 37,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "ccf2400fd8884ce9810e2f3ca7af62e3",
  "placement": 79,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "ccf2400fd8884ce9810e2f3ca7af62e3",
  "placement": 37,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "ccf2400fd8884ce9810e2f3ca7af62e3",
  "placement": 42,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "ccf2400fd8884ce9810e2f3ca7af62e3",
  "placement": 93,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 67,
  "time_alive": 1020,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 69,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 82,
  "time_alive": 577,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 72,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 71,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 24,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 65,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 50,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 29,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 56,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 59,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 62,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 44,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 57,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 80,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 87,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 45,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 34,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 63,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 66,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 71,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 64,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 56,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 22,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 47,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 58,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 63,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "94b9d210f7064d2ab5b3da33e74f450b",
  "placement": 79,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "092b3ecec52941caae9e64be34415f36",
  "placement": 82,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "092b3ecec52941caae9e64be34415f36",
  "placement": 61,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "092b3ecec52941caae9e64be34415f36",
  "placement": 28,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "092b3ecec52941caae9e64be34415f36",
  "placement": 55,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "092b3ecec52941caae9e64be34415f36",
  "placement": 92,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "092b3ecec52941caae9e64be34415f36",
  "placement": 68,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 69,
  "time_alive": 1008,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 99,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 91,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 83,
  "time_alive": 386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 36,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 99,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 87,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 54,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 36,
  "time_alive": 1344,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 98,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 98,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 28,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 100,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 78,
  "time_alive": 729,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 68,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 80,
  "time_alive": 511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "aed5b8938b7049ec87dff0d189cc70df",
  "placement": 91,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 62,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 49,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 65,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 90,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 61,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 55,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 57,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 88,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 35,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 86,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 58,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "fb442fb1eab145879750e9ea81e0ff3a",
  "placement": 71,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 52,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 94,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 26,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 37,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 99,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 87,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 90,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 98,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 54,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 32,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 95,
  "time_alive": 161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "6642bbc470d44a5ba4805f4278b39023",
  "placement": 61,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "6642bbc470d44a5ba4805f4278b39023",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "6642bbc470d44a5ba4805f4278b39023",
  "placement": 90,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "6642bbc470d44a5ba4805f4278b39023",
  "placement": 88,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "6642bbc470d44a5ba4805f4278b39023",
  "placement": 31,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "6642bbc470d44a5ba4805f4278b39023",
  "placement": 60,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 75,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 55,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 51,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 74,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 62,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 59,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 78,
  "time_alive": 448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 80,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 69,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 93,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 47,
  "time_alive": 1291,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 85,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 89,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 64,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 39,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 84,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 77,
  "time_alive": 477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "0e194bb985354becba4d8fa88ba1112c",
  "placement": 73,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "0e194bb985354becba4d8fa88ba1112c",
  "placement": 79,
  "time_alive": 577,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "0e194bb985354becba4d8fa88ba1112c",
  "placement": 36,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "0e194bb985354becba4d8fa88ba1112c",
  "placement": 60,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "0e194bb985354becba4d8fa88ba1112c",
  "placement": 95,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "0e194bb985354becba4d8fa88ba1112c",
  "placement": 70,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 77,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 54,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 89,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 49,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "bed0117d1d884becbdb30597b909778b",
  "placement": 61,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "aaef72dc28744ed1b64dd7252b98bb2d",
  "placement": 68,
  "time_alive": 1018,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "aaef72dc28744ed1b64dd7252b98bb2d",
  "placement": 83,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "aaef72dc28744ed1b64dd7252b98bb2d",
  "placement": 77,
  "time_alive": 735,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "aaef72dc28744ed1b64dd7252b98bb2d",
  "placement": 89,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "aaef72dc28744ed1b64dd7252b98bb2d",
  "placement": 77,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "aaef72dc28744ed1b64dd7252b98bb2d",
  "placement": 85,
  "time_alive": 321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "5d0d4720e79d44bcabc9a93fef5eec53",
  "placement": 89,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "5d0d4720e79d44bcabc9a93fef5eec53",
  "placement": 60,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "5d0d4720e79d44bcabc9a93fef5eec53",
  "placement": 60,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "5d0d4720e79d44bcabc9a93fef5eec53",
  "placement": 73,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "5d0d4720e79d44bcabc9a93fef5eec53",
  "placement": 87,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "5d0d4720e79d44bcabc9a93fef5eec53",
  "placement": 84,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 95,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 86,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 59,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 50,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 92,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 49,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 56,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 85,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 80,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 82,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 87,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "6bb00dbfa3624166ae97ccd719fb4ebd",
  "placement": 79,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "6bb00dbfa3624166ae97ccd719fb4ebd",
  "placement": 76,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "6bb00dbfa3624166ae97ccd719fb4ebd",
  "placement": 76,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "6bb00dbfa3624166ae97ccd719fb4ebd",
  "placement": 51,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "6bb00dbfa3624166ae97ccd719fb4ebd",
  "placement": 86,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "6bb00dbfa3624166ae97ccd719fb4ebd",
  "placement": 88,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1524,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 5,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 56,
  "time_alive": 1096,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 58,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 13,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 14,
  "time_alive": 1406,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 7,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 50,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 13,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 1,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 31,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 24,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 15,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 9,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 17,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 66,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 3,
  "time_alive": 1502,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 2,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 14,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 82,
  "time_alive": 526,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 33,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 65,
  "time_alive": 870,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 9,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 12,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 35,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 22,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 5,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 4,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 12,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 5,
  "time_alive": 1498,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 4,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 37,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 18,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 39,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 18,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 10,
  "time_alive": 1453,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 94,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 20,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 7,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "03efbe617be94971969ed876ccd2a48f",
  "placement": 17,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 87,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 57,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 1,
  "time_alive": 1533,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 1,
  "time_alive": 1503,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 80,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 50,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 3,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 88,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 26,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 68,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 3,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 14,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 7,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 25,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 21,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 17,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "c001682f7b234a4e96ae0fca725b8679",
  "placement": 19,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 41,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 73,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 2,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 48,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 13,
  "time_alive": 1413,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 11,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 13,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 34,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 56,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 15,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 16,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 10,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 75,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 26,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 44,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 19,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 27,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "1e7f637ca1ac439abfa9a0a2a51d047d",
  "placement": 1,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 16,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 77,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 7,
  "time_alive": 1472,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 16,
  "time_alive": 1402,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 54,
  "time_alive": 1216,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 85,
  "time_alive": 290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 47,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 19,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 51,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 10,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 34,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 12,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 88,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 20,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 14,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 41,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 6,
  "time_alive": 1472,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "276f93e44a4542ed9636d845025a7bfb",
  "placement": 27,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 95,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 3,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 29,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 97,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 2,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 34,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 25,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 40,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 8,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 93,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 29,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 26,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 8,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 97,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 98,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 6,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 23,
  "time_alive": 1365,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 24,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 20,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 50,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 66,
  "time_alive": 964,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 24,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 39,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "f54583872aac451ab31ce647035fa030",
  "placement": 2,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 43,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 29,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 15,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 49,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 10,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 64,
  "time_alive": 1018,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 47,
  "time_alive": 1247,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 80,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 4,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 42,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 29,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 4,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 24,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 91,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 79,
  "time_alive": 594,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 72,
  "time_alive": 739,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 16,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 10,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 6,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 6,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 90,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 61,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 66,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 52,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 4,
  "time_alive": 1502,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 46,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 21,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 20,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "55e0afc645d84b12ae60c8fb9ff2281b",
  "placement": 25,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 69,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 21,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 57,
  "time_alive": 1114,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 29,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 43,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 9,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 19,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 51,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 17,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 40,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 9,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 69,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 86,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 8,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 12,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 53,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 25,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4",
  "placement": 30,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 76,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 91,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 76,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 3,
  "time_alive": 1468,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 18,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "7c536053a6eb4a0e8d5609253e83d7b6",
  "placement": 40,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "7c536053a6eb4a0e8d5609253e83d7b6",
  "placement": 42,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "7c536053a6eb4a0e8d5609253e83d7b6",
  "placement": 36,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "7c536053a6eb4a0e8d5609253e83d7b6",
  "placement": 46,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "7c536053a6eb4a0e8d5609253e83d7b6",
  "placement": 74,
  "time_alive": 568,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "7c536053a6eb4a0e8d5609253e83d7b6",
  "placement": 8,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 42,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 60,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 24,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 78,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 8,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 21,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 34,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 70,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 64,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 26,
  "time_alive": 1379,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 83,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "618c2dc679b64491acd039e8040dc073",
  "placement": 6,
  "time_alive": 1476,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 61,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 13,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 38,
  "time_alive": 1311,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 74,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 14,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 87,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 6,
  "time_alive": 1463,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 37,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 71,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 8,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 55,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 78,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "ff28f0d1a21345b98a2f8f6fd070c34c",
  "placement": 84,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "ff28f0d1a21345b98a2f8f6fd070c34c",
  "placement": 18,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "ff28f0d1a21345b98a2f8f6fd070c34c",
  "placement": 75,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "ff28f0d1a21345b98a2f8f6fd070c34c",
  "placement": 32,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "ff28f0d1a21345b98a2f8f6fd070c34c",
  "placement": 30,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "ff28f0d1a21345b98a2f8f6fd070c34c",
  "placement": 5,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 28,
  "time_alive": 1350,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 30,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 30,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 66,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 19,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 70,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "717a21e450f44a81a9d76ae92acd345f",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "717a21e450f44a81a9d76ae92acd345f",
  "placement": 22,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "717a21e450f44a81a9d76ae92acd345f",
  "placement": 18,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "717a21e450f44a81a9d76ae92acd345f",
  "placement": 73,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "717a21e450f44a81a9d76ae92acd345f",
  "placement": 96,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "717a21e450f44a81a9d76ae92acd345f",
  "placement": 41,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 45,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 71,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 28,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 7,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 26,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 23,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "2c8b636ab74e4265af6735a2dac9a6d1",
  "placement": 15,
  "time_alive": 1404,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "2c8b636ab74e4265af6735a2dac9a6d1",
  "placement": 79,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "2c8b636ab74e4265af6735a2dac9a6d1",
  "placement": 42,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "2c8b636ab74e4265af6735a2dac9a6d1",
  "placement": 52,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "2c8b636ab74e4265af6735a2dac9a6d1",
  "placement": 15,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "2c8b636ab74e4265af6735a2dac9a6d1",
  "placement": 89,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "81fb65540c214c63a2b91905164182b1",
  "placement": 11,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "81fb65540c214c63a2b91905164182b1",
  "placement": 62,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "81fb65540c214c63a2b91905164182b1",
  "placement": 40,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "81fb65540c214c63a2b91905164182b1",
  "placement": 39,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "81fb65540c214c63a2b91905164182b1",
  "placement": 56,
  "time_alive": 1085,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "81fb65540c214c63a2b91905164182b1",
  "placement": 76,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 60,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 11,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 68,
  "time_alive": 955,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 51,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 79,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 15,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9c4da64aea204f52b4a5bb9088453723",
  "placement": 17,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9c4da64aea204f52b4a5bb9088453723",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9c4da64aea204f52b4a5bb9088453723",
  "placement": 63,
  "time_alive": 994,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9c4da64aea204f52b4a5bb9088453723",
  "placement": 88,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9c4da64aea204f52b4a5bb9088453723",
  "placement": 11,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9c4da64aea204f52b4a5bb9088453723",
  "placement": 44,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 56,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 2,
  "time_alive": 1524,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 99,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 57,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 93,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 73,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 68,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 60,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 5,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 12,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "351a8ff39ff1452fb90b053a41002825",
  "placement": 95,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "52bdda9479fb4364a1a3c13c33dd55c4",
  "placement": 92,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "52bdda9479fb4364a1a3c13c33dd55c4",
  "placement": 28,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "52bdda9479fb4364a1a3c13c33dd55c4",
  "placement": 48,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "52bdda9479fb4364a1a3c13c33dd55c4",
  "placement": 31,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "52bdda9479fb4364a1a3c13c33dd55c4",
  "placement": 38,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "52bdda9479fb4364a1a3c13c33dd55c4",
  "placement": 7,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 29,
  "time_alive": 1349,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 45,
  "time_alive": 1278,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 79,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 43,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 69,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 32,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 89,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 22,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 2,
  "time_alive": 1503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 91,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 79,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 80,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 63,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 11,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 14,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 87,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "2053da881ffb4c5ea250d51ac56e38df",
  "placement": 28,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 39,
  "time_alive": 1318,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 23,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 49,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 85,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 44,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 48,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 22,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 84,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 37,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 70,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 22,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 47,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56",
  "placement": 48,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56",
  "placement": 17,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56",
  "placement": 70,
  "time_alive": 938,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56",
  "placement": 60,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56",
  "placement": 63,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "68c35d12fe89481c9bf7c0ea6af45b56",
  "placement": 49,
  "time_alive": 1224,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 23,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 35,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 82,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 45,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 32,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 58,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 21,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 43,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 27,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 60,
  "time_alive": 1061,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 55,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 44,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 72,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 19,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 83,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 48,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613",
  "placement": 96,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 98,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 23,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 35,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 76,
  "time_alive": 455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "7250390c0c114cea981fd9922c405268",
  "placement": 36,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 58,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 55,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 87,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 81,
  "time_alive": 551,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 28,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "ca15e9390114472ebc29f375d9e2a8a9",
  "placement": 20,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 97,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 39,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 96,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 11,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 88,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 45,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 93,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 32,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 93,
  "time_alive": 324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 18,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 35,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 38,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 46,
  "time_alive": 1258,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 47,
  "time_alive": 1178,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 47,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 52,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 67,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 94,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 54,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 13,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 50,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 75,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 33,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 50,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 78,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 20,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 28,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 41,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "f198554f661042508f197b7a41c7f0c6",
  "placement": 74,
  "time_alive": 551,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 74,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 49,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 58,
  "time_alive": 1086,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 44,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 37,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "94ded700312e4420828837f2790029be",
  "placement": 82,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 27,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 67,
  "time_alive": 974,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 25,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 69,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 64,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 60,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "6c491ea22fb649509519ef98d6d74e57",
  "placement": 77,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "6c491ea22fb649509519ef98d6d74e57",
  "placement": 9,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "6c491ea22fb649509519ef98d6d74e57",
  "placement": 41,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "6c491ea22fb649509519ef98d6d74e57",
  "placement": 75,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "6c491ea22fb649509519ef98d6d74e57",
  "placement": 53,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "6c491ea22fb649509519ef98d6d74e57",
  "placement": 59,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 26,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 86,
  "time_alive": 477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 90,
  "time_alive": 418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 54,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 21,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 53,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 46,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 87,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 92,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 23,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 73,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9daa4d76858c45a5a112ae00cbba5777",
  "placement": 96,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9daa4d76858c45a5a112ae00cbba5777",
  "placement": 69,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9daa4d76858c45a5a112ae00cbba5777",
  "placement": 34,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9daa4d76858c45a5a112ae00cbba5777",
  "placement": 77,
  "time_alive": 642,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9daa4d76858c45a5a112ae00cbba5777",
  "placement": 24,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9daa4d76858c45a5a112ae00cbba5777",
  "placement": 57,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "cd17fefb9a2442eea13c20c06be2aa39",
  "placement": 66,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "cd17fefb9a2442eea13c20c06be2aa39",
  "placement": 52,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "cd17fefb9a2442eea13c20c06be2aa39",
  "placement": 10,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "cd17fefb9a2442eea13c20c06be2aa39",
  "placement": 59,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "cd17fefb9a2442eea13c20c06be2aa39",
  "placement": 78,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "cd17fefb9a2442eea13c20c06be2aa39",
  "placement": 92,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 49,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 43,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 78,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 62,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 47,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "8dd8cdcef1f143c7b13ff112b11e72b7",
  "placement": 52,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "4f4dbe013fd446e186a79ed7a6b15140",
  "placement": 37,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "4f4dbe013fd446e186a79ed7a6b15140",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "4f4dbe013fd446e186a79ed7a6b15140",
  "placement": 45,
  "time_alive": 1199,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "4f4dbe013fd446e186a79ed7a6b15140",
  "placement": 61,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "4f4dbe013fd446e186a79ed7a6b15140",
  "placement": 77,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "4f4dbe013fd446e186a79ed7a6b15140",
  "placement": 56,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 55,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 83,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 59,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 9,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 98,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 97,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 72,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 96,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 74,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 12,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 86,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609",
  "placement": 64,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 53,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 93,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 88,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 94,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 4,
  "time_alive": 1490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "76eedc7bc7344f86a787fffbe7148d87",
  "placement": 43,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "e20ed7495bd548a28ef499f3cb5bba49",
  "placement": 35,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "e20ed7495bd548a28ef499f3cb5bba49",
  "placement": 56,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "e20ed7495bd548a28ef499f3cb5bba49",
  "placement": 73,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "e20ed7495bd548a28ef499f3cb5bba49",
  "placement": 89,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "e20ed7495bd548a28ef499f3cb5bba49",
  "placement": 92,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "e20ed7495bd548a28ef499f3cb5bba49",
  "placement": 40,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 68,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 75,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 39,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 65,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 49,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "c41d66baf2b44f65aea57ce7fc038c6c",
  "placement": 63,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 81,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 16,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 55,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 46,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 80,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 62,
  "time_alive": 1074,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 58,
  "time_alive": 1136,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 95,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 38,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 51,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "850c4251a7214bb6a5d34840218a803f",
  "placement": 83,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 81,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 53,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 61,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 72,
  "time_alive": 815,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 40,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9b3d5bef58f44d7e9ee2aacc88f59fe4",
  "placement": 72,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "a3050c4f81d741fba853825a85397019",
  "placement": 32,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "a3050c4f81d741fba853825a85397019",
  "placement": 59,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "a3050c4f81d741fba853825a85397019",
  "placement": 32,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "a3050c4f81d741fba853825a85397019",
  "placement": 87,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "a3050c4f81d741fba853825a85397019",
  "placement": 65,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "a3050c4f81d741fba853825a85397019",
  "placement": 62,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "6f650bc2d5a64a47a6feb8e07a291f05",
  "placement": 30,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "6f650bc2d5a64a47a6feb8e07a291f05",
  "placement": 38,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "6f650bc2d5a64a47a6feb8e07a291f05",
  "placement": 67,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "6f650bc2d5a64a47a6feb8e07a291f05",
  "placement": 58,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "6f650bc2d5a64a47a6feb8e07a291f05",
  "placement": 85,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "6f650bc2d5a64a47a6feb8e07a291f05",
  "placement": 94,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 71,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 44,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 65,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 25,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 90,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "4296504c791547f68cba705c3801610c",
  "placement": 88,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 63,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 33,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 27,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 68,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "45131b61c97340049deeef91a1cc3ad2",
  "placement": 61,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 59,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 86,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 86,
  "time_alive": 429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 31,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "0cc327faff954a82b6c15d7dd675c509",
  "placement": 71,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 70,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 65,
  "time_alive": 1004,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 55,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 64,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 99,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "9b57715077ef4733a7d1457cfaf45fd8",
  "placement": 68,
  "time_alive": 769,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "259e773b341f4de3a7222cf25b9e4dee",
  "placement": 67,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "259e773b341f4de3a7222cf25b9e4dee",
  "placement": 82,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "259e773b341f4de3a7222cf25b9e4dee",
  "placement": 83,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "259e773b341f4de3a7222cf25b9e4dee",
  "placement": 30,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "259e773b341f4de3a7222cf25b9e4dee",
  "placement": 67,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "259e773b341f4de3a7222cf25b9e4dee",
  "placement": 84,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 54,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 61,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 54,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 71,
  "time_alive": 762,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "43886afd004048a49c3d80276c0da9f0",
  "placement": 42,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 79,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 64,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 81,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 96,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 50,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 22,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 83,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 66,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 31,
  "time_alive": 1332,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 63,
  "time_alive": 955,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 94,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "a8e3b68068cf4fd2bc1973ffd544d13b",
  "placement": 91,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 36,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 48,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 69,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 80,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 95,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 65,
  "time_alive": 1016,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 74,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 77,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 84,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 36,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "b339763466084ca3b7cc01193ffee7f8",
  "placement": 73,
  "time_alive": 576,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 82,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 31,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 53,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 67,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 62,
  "time_alive": 997,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df",
  "placement": 86,
  "time_alive": 265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "1c369fe439f7489d901a94d4b8237230",
  "placement": 33,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "1c369fe439f7489d901a94d4b8237230",
  "placement": 94,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "1c369fe439f7489d901a94d4b8237230",
  "placement": 72,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "1c369fe439f7489d901a94d4b8237230",
  "placement": 91,
  "time_alive": 253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "1c369fe439f7489d901a94d4b8237230",
  "placement": 81,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "1c369fe439f7489d901a94d4b8237230",
  "placement": 46,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "7983a7fb9fd741d1ad689a617c11298d",
  "placement": 98,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "7983a7fb9fd741d1ad689a617c11298d",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "7983a7fb9fd741d1ad689a617c11298d",
  "placement": 84,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "7983a7fb9fd741d1ad689a617c11298d",
  "placement": 34,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "7983a7fb9fd741d1ad689a617c11298d",
  "placement": 70,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "7983a7fb9fd741d1ad689a617c11298d",
  "placement": 90,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "6a038fe035b0481495799f829efda75f",
  "placement": 57,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "6a038fe035b0481495799f829efda75f",
  "placement": 76,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "6a038fe035b0481495799f829efda75f",
  "placement": 33,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "6a038fe035b0481495799f829efda75f",
  "placement": 76,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "6a038fe035b0481495799f829efda75f",
  "placement": 82,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "6a038fe035b0481495799f829efda75f",
  "placement": 75,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "d52edcb1754b42e6b52ae110d2f88a14",
  "placement": 91,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "d52edcb1754b42e6b52ae110d2f88a14",
  "placement": 85,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "d52edcb1754b42e6b52ae110d2f88a14",
  "placement": 52,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "d52edcb1754b42e6b52ae110d2f88a14",
  "placement": 57,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "d52edcb1754b42e6b52ae110d2f88a14",
  "placement": 59,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "d52edcb1754b42e6b52ae110d2f88a14",
  "placement": 51,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 31,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 80,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 62,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 92,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 81,
  "time_alive": 369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "c178b4e0d81d476aa8f05a7f5d8f5b93",
  "placement": 90,
  "time_alive": 466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "c178b4e0d81d476aa8f05a7f5d8f5b93",
  "placement": 89,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "c178b4e0d81d476aa8f05a7f5d8f5b93",
  "placement": 85,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "c178b4e0d81d476aa8f05a7f5d8f5b93",
  "placement": 36,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "c178b4e0d81d476aa8f05a7f5d8f5b93",
  "placement": 84,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "c178b4e0d81d476aa8f05a7f5d8f5b93",
  "placement": 77,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 85,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 92,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 97,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 71,
  "time_alive": 838,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 98,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 78,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 90,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "094f2630-1486-4f2e-bee4-fd5f120c3dfa",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 89,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c732cf6-254b-4588-a4c6-906803db41bf",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0983a359-5449-4833-813d-2700c402f31a",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 89,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb",
  "team_id": "0ffd2910db3047a7b67acd4d41761f21",
  "placement": 54,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0369fa50-0bbd-479d-ba5a-5218224c0580",
  "team_id": "b05f0d32cb254b02bde6aa319cb08f86",
  "placement": 100,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 8,
  "time_alive": 1507,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 5,
  "time_alive": 1462,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 53,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 47,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 21,
  "time_alive": 1417,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1524,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 57,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 76,
  "time_alive": 807,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 58,
  "time_alive": 1134,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 3,
  "time_alive": 1535,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 4,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 10,
  "time_alive": 1446,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 2,
  "time_alive": 1542,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 63,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 45,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 19,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 22,
  "time_alive": 1413,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 8,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 49,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 39,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "032398cc-1d3d-452a-add1-2d0f4627297a",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 57,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "036827af-c42b-4111-bd04-562933dbdf5f",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1540,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0241257b-699f-4fcc-93ef-8508535ebd8f",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 6,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02794cea-bfe3-4ac2-928b-895cc382bfa5",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b33adb7-ca6c-4f7e-9834-4224763073df",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 43,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04c5bda7-cc13-4182-a65d-15f644effa32",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 56,
  "time_alive": 1192,
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
    