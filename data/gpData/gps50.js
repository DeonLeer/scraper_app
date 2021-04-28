const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "e355e494ec3044e8913b669424036faf",
  "placement": 98,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "e355e494ec3044e8913b669424036faf",
  "placement": 87,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "e355e494ec3044e8913b669424036faf",
  "placement": 34,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "e355e494ec3044e8913b669424036faf",
  "placement": 78,
  "time_alive": 504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "e355e494ec3044e8913b669424036faf",
  "placement": 74,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "c9f269cbcc084d42b9963b240e674498",
  "placement": 65,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "c9f269cbcc084d42b9963b240e674498",
  "placement": 54,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "c9f269cbcc084d42b9963b240e674498",
  "placement": 53,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "c9f269cbcc084d42b9963b240e674498",
  "placement": 41,
  "time_alive": 1271,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "c9f269cbcc084d42b9963b240e674498",
  "placement": 61,
  "time_alive": 1501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "c9f269cbcc084d42b9963b240e674498",
  "placement": 86,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "b9f809f0a8c646fb89d597f6f657f970",
  "placement": 85,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "b9f809f0a8c646fb89d597f6f657f970",
  "placement": 52,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "b9f809f0a8c646fb89d597f6f657f970",
  "placement": 86,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "b9f809f0a8c646fb89d597f6f657f970",
  "placement": 32,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "b9f809f0a8c646fb89d597f6f657f970",
  "placement": 71,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "b9f809f0a8c646fb89d597f6f657f970",
  "placement": 55,
  "time_alive": 1582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "682c34482d0a495ca90eb47412acd1d5",
  "placement": 76,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "682c34482d0a495ca90eb47412acd1d5",
  "placement": 75,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "682c34482d0a495ca90eb47412acd1d5",
  "placement": 91,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "682c34482d0a495ca90eb47412acd1d5",
  "placement": 80,
  "time_alive": 608,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "682c34482d0a495ca90eb47412acd1d5",
  "placement": 55,
  "time_alive": 1553,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "682c34482d0a495ca90eb47412acd1d5",
  "placement": 65,
  "time_alive": 951,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d50854cb204740f4b58938ea7f659411",
  "placement": 81,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d50854cb204740f4b58938ea7f659411",
  "placement": 85,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d50854cb204740f4b58938ea7f659411",
  "placement": 76,
  "time_alive": 678,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d50854cb204740f4b58938ea7f659411",
  "placement": 88,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 74,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 88,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 64,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 81,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 70,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "9f67d5a66ea34228b9a474cedf106651",
  "placement": 88,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 62,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 56,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 47,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 76,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 85,
  "time_alive": 301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 67,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 73,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 62,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 50,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 67,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 68,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 58,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d",
  "placement": 83,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d",
  "placement": 73,
  "time_alive": 997,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d",
  "placement": 79,
  "time_alive": 639,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d",
  "placement": 75,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d",
  "placement": 74,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d",
  "placement": 83,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 58,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "0a234863aa65404ab32639036d365946",
  "placement": 50,
  "time_alive": 1478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "5351ede229d34fa2bb4a1c3cc063bb4b",
  "placement": 84,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "5351ede229d34fa2bb4a1c3cc063bb4b",
  "placement": 90,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 21,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 3,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 7,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 11,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 1,
  "time_alive": 1498,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 15,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "ba3172fcc3864e298b467e172327179f",
  "placement": 2,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "ba3172fcc3864e298b467e172327179f",
  "placement": 5,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "ba3172fcc3864e298b467e172327179f",
  "placement": 78,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "ba3172fcc3864e298b467e172327179f",
  "placement": 5,
  "time_alive": 1464,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "ba3172fcc3864e298b467e172327179f",
  "placement": 12,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "ba3172fcc3864e298b467e172327179f",
  "placement": 4,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 16,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 13,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 2,
  "time_alive": 1475,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 18,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 33,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 28,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 8,
  "time_alive": 1402,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 12,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 45,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 8,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 23,
  "time_alive": 1381,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 19,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 82,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 6,
  "time_alive": 1431,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 19,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 1,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 31,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 10,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 55,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 10,
  "time_alive": 1397,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 3,
  "time_alive": 1472,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 31,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 2,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 27,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 5,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 14,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 12,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 25,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 67,
  "time_alive": 499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 13,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1461,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 56,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 12,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 16,
  "time_alive": 1405,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 75,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 13,
  "time_alive": 1380,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 46,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 10,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 2,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 30,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 30,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 35,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 16,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 6,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 28,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 26,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 9,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 21,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 1,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 43,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 53,
  "time_alive": 1147,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 22,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 7,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 2,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 60,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 6,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 24,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 61,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 1,
  "time_alive": 1463,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 77,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 4,
  "time_alive": 1476,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 20,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 61,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 75,
  "time_alive": 740,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 7,
  "time_alive": 1430,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 9,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 59,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 8,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 85,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 93,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 11,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 23,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 46,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 9,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 11,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 79,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 22,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 50,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 19,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 15,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 21,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 19,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 36,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 63,
  "time_alive": 1093,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 95,
  "time_alive": 119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 54,
  "time_alive": 1123,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 1,
  "time_alive": 1486,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 4,
  "time_alive": 1436,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 61,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 13,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 57,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 36,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 9,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 85,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 37,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 68,
  "time_alive": 921,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 7,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 13,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 7,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 48,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 66,
  "time_alive": 894,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 11,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 30,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 14,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "e92283ff558543f6b182d64196082092",
  "placement": 23,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 69,
  "time_alive": 935,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 73,
  "time_alive": 655,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 38,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 15,
  "time_alive": 1391,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 22,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "9b73878aa0d94165ab4cda7e37df6891",
  "placement": 14,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 37,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 30,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 28,
  "time_alive": 1357,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 9,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 43,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 32,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "554d72295c3e4082bd99f2a4ee9d2f4e",
  "placement": 83,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "554d72295c3e4082bd99f2a4ee9d2f4e",
  "placement": 9,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "554d72295c3e4082bd99f2a4ee9d2f4e",
  "placement": 18,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "554d72295c3e4082bd99f2a4ee9d2f4e",
  "placement": 86,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "554d72295c3e4082bd99f2a4ee9d2f4e",
  "placement": 11,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "554d72295c3e4082bd99f2a4ee9d2f4e",
  "placement": 20,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 18,
  "time_alive": 1374,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 20,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 86,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 69,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 35,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "282602ae734342e197eab96478205963",
  "placement": 63,
  "time_alive": 1047,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "282602ae734342e197eab96478205963",
  "placement": 26,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "282602ae734342e197eab96478205963",
  "placement": 69,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "282602ae734342e197eab96478205963",
  "placement": 3,
  "time_alive": 1483,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "282602ae734342e197eab96478205963",
  "placement": 21,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "282602ae734342e197eab96478205963",
  "placement": 31,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 12,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 85,
  "time_alive": 357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 59,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 29,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 61,
  "time_alive": 726,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 5,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 49,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 89,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 85,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 33,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 26,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 2,
  "time_alive": 1486,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 17,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 65,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 71,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 26,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 49,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 3,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 86,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 75,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 29,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 17,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 6,
  "time_alive": 1440,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 84,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 33,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 57,
  "time_alive": 1114,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 8,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 27,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 48,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 70,
  "time_alive": 671,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "6776442278504d83ab9e7f109815b549",
  "placement": 23,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "6776442278504d83ab9e7f109815b549",
  "placement": 48,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "6776442278504d83ab9e7f109815b549",
  "placement": 4,
  "time_alive": 1470,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "6776442278504d83ab9e7f109815b549",
  "placement": 47,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "6776442278504d83ab9e7f109815b549",
  "placement": 92,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "6776442278504d83ab9e7f109815b549",
  "placement": 53,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "0cf5e763e9084a81aa5fb809d2f4407b",
  "placement": 3,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "0cf5e763e9084a81aa5fb809d2f4407b",
  "placement": 31,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "0cf5e763e9084a81aa5fb809d2f4407b",
  "placement": 32,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "0cf5e763e9084a81aa5fb809d2f4407b",
  "placement": 35,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "0cf5e763e9084a81aa5fb809d2f4407b",
  "placement": 50,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "0cf5e763e9084a81aa5fb809d2f4407b",
  "placement": 39,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 11,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 52,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 46,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 37,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 5,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 87,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 72,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 15,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 26,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 41,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 29,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "6f7115e8ca7b44dc9948c6d5ed71a248",
  "placement": 86,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 15,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 81,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 14,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 40,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 81,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 44,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "811d12fc3da2470db6dc2e97b95bef93",
  "placement": 14,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "811d12fc3da2470db6dc2e97b95bef93",
  "placement": 92,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "811d12fc3da2470db6dc2e97b95bef93",
  "placement": 27,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "811d12fc3da2470db6dc2e97b95bef93",
  "placement": 34,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "811d12fc3da2470db6dc2e97b95bef93",
  "placement": 25,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "811d12fc3da2470db6dc2e97b95bef93",
  "placement": 88,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 24,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 40,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 74,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 16,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 17,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "ab5c9d9bccc943c5b69b9634d58aed92",
  "placement": 89,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 32,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 33,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 42,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 22,
  "time_alive": 1375,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 45,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 71,
  "time_alive": 652,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "b4257b9710244ca5a571fe424f0ae3f9",
  "placement": 43,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "b4257b9710244ca5a571fe424f0ae3f9",
  "placement": 99,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "b4257b9710244ca5a571fe424f0ae3f9",
  "placement": 24,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "b4257b9710244ca5a571fe424f0ae3f9",
  "placement": 14,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "b4257b9710244ca5a571fe424f0ae3f9",
  "placement": 44,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "b4257b9710244ca5a571fe424f0ae3f9",
  "placement": 34,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e1983d4364b443febd24a698f021e8d9",
  "placement": 27,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e1983d4364b443febd24a698f021e8d9",
  "placement": 4,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e1983d4364b443febd24a698f021e8d9",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e1983d4364b443febd24a698f021e8d9",
  "placement": 96,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e1983d4364b443febd24a698f021e8d9",
  "placement": 74,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "e1983d4364b443febd24a698f021e8d9",
  "placement": 36,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 90,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 43,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 30,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 67,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 32,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "883abec4cded42f3bea87531ce0aa5c8",
  "placement": 33,
  "time_alive": 1339,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 41,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 18,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 96,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 63,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 19,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 76,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 31,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 24,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 73,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 21,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 52,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c7da3360e445414b8f9bb7e5110356c2",
  "placement": 50,
  "time_alive": 1159,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 44,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 78,
  "time_alive": 590,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 87,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 98,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 86,
  "time_alive": 227,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 6,
  "time_alive": 1431,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 77,
  "time_alive": 692,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 34,
  "time_alive": 1313,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 15,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 94,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 83,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 45,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 26,
  "time_alive": 1352,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 100,
  "time_alive": 81,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 16,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 62,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 82,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 55,
  "time_alive": 1066,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 70,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 23,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 31,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 24,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 60,
  "time_alive": 739,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 52,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 40,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 35,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 20,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 38,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 46,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "e9a1ab77f8674bc4bced206b4b3c594b",
  "placement": 37,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 51,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 79,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 35,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 97,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 57,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 8,
  "time_alive": 1411,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 89,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 80,
  "time_alive": 508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 84,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 36,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 3,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 62,
  "time_alive": 851,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 59,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 32,
  "time_alive": 1320,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 22,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 61,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 58,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 43,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 6,
  "time_alive": 1418,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 51,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 64,
  "time_alive": 1004,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 83,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 97,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 92,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 39,
  "time_alive": 1295,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 8,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 95,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 91,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 84,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 90,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 62,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 82,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 51,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 76,
  "time_alive": 755,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 7,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 41,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 76,
  "time_alive": 695,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 98,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 5,
  "time_alive": 1449,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 68,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 88,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 52,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 25,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 65,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 66,
  "time_alive": 941,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 37,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 69,
  "time_alive": 679,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 67,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 63,
  "time_alive": 984,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 88,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 32,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 73,
  "time_alive": 436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 17,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac",
  "placement": 97,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac",
  "placement": 27,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac",
  "placement": 54,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac",
  "placement": 23,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac",
  "placement": 95,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac",
  "placement": 81,
  "time_alive": 401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 66,
  "time_alive": 1019,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 38,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 36,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 80,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 40,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "802b49b6ae3940308f1a994201c893f0",
  "placement": 29,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "4d14234a28ed4db2b2ac37fdacbb9cc0",
  "placement": 30,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "4d14234a28ed4db2b2ac37fdacbb9cc0",
  "placement": 84,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "4d14234a28ed4db2b2ac37fdacbb9cc0",
  "placement": 76,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "4d14234a28ed4db2b2ac37fdacbb9cc0",
  "placement": 50,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "4d14234a28ed4db2b2ac37fdacbb9cc0",
  "placement": 78,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "4d14234a28ed4db2b2ac37fdacbb9cc0",
  "placement": 25,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "faa39bcf561442d390c07669648c7c7b",
  "placement": 47,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "faa39bcf561442d390c07669648c7c7b",
  "placement": 55,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "faa39bcf561442d390c07669648c7c7b",
  "placement": 21,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "faa39bcf561442d390c07669648c7c7b",
  "placement": 52,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "faa39bcf561442d390c07669648c7c7b",
  "placement": 38,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 99,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 41,
  "time_alive": 1282,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 37,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 82,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 28,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 54,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "036a737a688d436bbce811af92b11a4b",
  "placement": 71,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "036a737a688d436bbce811af92b11a4b",
  "placement": 47,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "036a737a688d436bbce811af92b11a4b",
  "placement": 17,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "036a737a688d436bbce811af92b11a4b",
  "placement": 49,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "036a737a688d436bbce811af92b11a4b",
  "placement": 93,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "036a737a688d436bbce811af92b11a4b",
  "placement": 80,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c361004bd01441098a2d9778ff24d195",
  "placement": 46,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c361004bd01441098a2d9778ff24d195",
  "placement": 95,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c361004bd01441098a2d9778ff24d195",
  "placement": 47,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c361004bd01441098a2d9778ff24d195",
  "placement": 47,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c361004bd01441098a2d9778ff24d195",
  "placement": 16,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c3b5d17676bd43179eabbedca781c8e0",
  "placement": 28,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c3b5d17676bd43179eabbedca781c8e0",
  "placement": 71,
  "time_alive": 671,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c3b5d17676bd43179eabbedca781c8e0",
  "placement": 72,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c3b5d17676bd43179eabbedca781c8e0",
  "placement": 89,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c3b5d17676bd43179eabbedca781c8e0",
  "placement": 38,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c3b5d17676bd43179eabbedca781c8e0",
  "placement": 72,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 80,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 91,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 90,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 10,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 85,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 46,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 53,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 86,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 42,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 27,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "8cea967916e44a7890b124d941109ab9",
  "placement": 95,
  "time_alive": 78,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "3e817cc7d4ac4d9a933cde249c8b4b11",
  "placement": 20,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "3e817cc7d4ac4d9a933cde249c8b4b11",
  "placement": 72,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "3e817cc7d4ac4d9a933cde249c8b4b11",
  "placement": 43,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "3e817cc7d4ac4d9a933cde249c8b4b11",
  "placement": 64,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "3e817cc7d4ac4d9a933cde249c8b4b11",
  "placement": 62,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "3e817cc7d4ac4d9a933cde249c8b4b11",
  "placement": 40,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 87,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 62,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 70,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 84,
  "time_alive": 463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 4,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 48,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 22,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 53,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 82,
  "time_alive": 486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 71,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 70,
  "time_alive": 460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 67,
  "time_alive": 703,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "9c3e2bcf7e654370b8f2604ef3b890b1",
  "placement": 81,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "9c3e2bcf7e654370b8f2604ef3b890b1",
  "placement": 64,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "9c3e2bcf7e654370b8f2604ef3b890b1",
  "placement": 66,
  "time_alive": 968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "9c3e2bcf7e654370b8f2604ef3b890b1",
  "placement": 13,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "9c3e2bcf7e654370b8f2604ef3b890b1",
  "placement": 94,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "9c3e2bcf7e654370b8f2604ef3b890b1",
  "placement": 58,
  "time_alive": 913,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "205c0fd7afa443dc88e759708b73e93d",
  "placement": 10,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "205c0fd7afa443dc88e759708b73e93d",
  "placement": 39,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "205c0fd7afa443dc88e759708b73e93d",
  "placement": 53,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "205c0fd7afa443dc88e759708b73e93d",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "205c0fd7afa443dc88e759708b73e93d",
  "placement": 96,
  "time_alive": 78,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "205c0fd7afa443dc88e759708b73e93d",
  "placement": 74,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 68,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 83,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 81,
  "time_alive": 503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 39,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 89,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 18,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 57,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 17,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 75,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 87,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 75,
  "time_alive": 402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 79,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 25,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 94,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 94,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 85,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 56,
  "time_alive": 1021,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 78,
  "time_alive": 425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 38,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 25,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 54,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 80,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 60,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 88,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 93,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 92,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 72,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 18,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8",
  "placement": 59,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "ec2c4f8a8f9446e09d916c1268c7d381",
  "placement": 74,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "ec2c4f8a8f9446e09d916c1268c7d381",
  "placement": 19,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "ec2c4f8a8f9446e09d916c1268c7d381",
  "placement": 67,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "ec2c4f8a8f9446e09d916c1268c7d381",
  "placement": 51,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "ec2c4f8a8f9446e09d916c1268c7d381",
  "placement": 63,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "ec2c4f8a8f9446e09d916c1268c7d381",
  "placement": 77,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 56,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 42,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 79,
  "time_alive": 579,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 65,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 76,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 63,
  "time_alive": 833,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 73,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 74,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 52,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 73,
  "time_alive": 836,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 90,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 24,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 45,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 49,
  "time_alive": 1192,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 44,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 45,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 55,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 65,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 42,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 29,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 91,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 56,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 91,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 60,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 87,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 83,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 20,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 65,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 51,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e59ca0d09774407b888d17a2cc7f7421",
  "placement": 29,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e59ca0d09774407b888d17a2cc7f7421",
  "placement": 58,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e59ca0d09774407b888d17a2cc7f7421",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e59ca0d09774407b888d17a2cc7f7421",
  "placement": 88,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e59ca0d09774407b888d17a2cc7f7421",
  "placement": 69,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "e59ca0d09774407b888d17a2cc7f7421",
  "placement": 73,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 34,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 54,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 61,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 44,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 71,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 56,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "c75030c8e8a5403e87dd198a19e80aa4",
  "placement": 96,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "c75030c8e8a5403e87dd198a19e80aa4",
  "placement": 28,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "c75030c8e8a5403e87dd198a19e80aa4",
  "placement": 89,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "c75030c8e8a5403e87dd198a19e80aa4",
  "placement": 77,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "c75030c8e8a5403e87dd198a19e80aa4",
  "placement": 68,
  "time_alive": 482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "c75030c8e8a5403e87dd198a19e80aa4",
  "placement": 68,
  "time_alive": 697,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "8482a81c4bfb4152a61afd055cde7ff8",
  "placement": 95,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "8482a81c4bfb4152a61afd055cde7ff8",
  "placement": 96,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "8482a81c4bfb4152a61afd055cde7ff8",
  "placement": 55,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "8482a81c4bfb4152a61afd055cde7ff8",
  "placement": 79,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "8482a81c4bfb4152a61afd055cde7ff8",
  "placement": 34,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "8482a81c4bfb4152a61afd055cde7ff8",
  "placement": 42,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 64,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 90,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 58,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 75,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 42,
  "time_alive": 1236,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 83,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "4b53094ab8a94f18a271ad5db677236c",
  "placement": 98,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "4b53094ab8a94f18a271ad5db677236c",
  "placement": 69,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "4b53094ab8a94f18a271ad5db677236c",
  "placement": 49,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "4b53094ab8a94f18a271ad5db677236c",
  "placement": 55,
  "time_alive": 1143,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "4b53094ab8a94f18a271ad5db677236c",
  "placement": 51,
  "time_alive": 1193,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "4b53094ab8a94f18a271ad5db677236c",
  "placement": 57,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 36,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 59,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 56,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 92,
  "time_alive": 233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 66,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf",
  "placement": 64,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 50,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 76,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 48,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 70,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 79,
  "time_alive": 294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 93,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 100,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 70,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 39,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 78,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 87,
  "time_alive": 220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 66,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "f35842ac33ca42879e56f89bac9967a3",
  "placement": 58,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "f35842ac33ca42879e56f89bac9967a3",
  "placement": 50,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "f35842ac33ca42879e56f89bac9967a3",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "f35842ac33ca42879e56f89bac9967a3",
  "placement": 58,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "f35842ac33ca42879e56f89bac9967a3",
  "placement": 59,
  "time_alive": 794,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "f35842ac33ca42879e56f89bac9967a3",
  "placement": 47,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 94,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 77,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 93,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 60,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 41,
  "time_alive": 1244,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 94,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "529a8f5f72e34a9d91223fec77042c5c",
  "placement": 54,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "529a8f5f72e34a9d91223fec77042c5c",
  "placement": 44,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "529a8f5f72e34a9d91223fec77042c5c",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "529a8f5f72e34a9d91223fec77042c5c",
  "placement": 74,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "529a8f5f72e34a9d91223fec77042c5c",
  "placement": 39,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "529a8f5f72e34a9d91223fec77042c5c",
  "placement": 91,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e96ff459df2b4e358ed2a7a1d51f818e",
  "placement": 65,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e96ff459df2b4e358ed2a7a1d51f818e",
  "placement": 88,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e96ff459df2b4e358ed2a7a1d51f818e",
  "placement": 57,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e96ff459df2b4e358ed2a7a1d51f818e",
  "placement": 81,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e96ff459df2b4e358ed2a7a1d51f818e",
  "placement": 77,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "e96ff459df2b4e358ed2a7a1d51f818e",
  "placement": 49,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "19687e2ecdaa411a927e8b4f3587a969",
  "placement": 92,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "19687e2ecdaa411a927e8b4f3587a969",
  "placement": 67,
  "time_alive": 870,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "19687e2ecdaa411a927e8b4f3587a969",
  "placement": 80,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "19687e2ecdaa411a927e8b4f3587a969",
  "placement": 93,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "19687e2ecdaa411a927e8b4f3587a969",
  "placement": 72,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c0eb25f-2318-4175-90f9-24948dab5b56",
  "team_id": "19687e2ecdaa411a927e8b4f3587a969",
  "placement": 82,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 78,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 45,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 62,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 48,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6bb01668-997c-41a8-a530-81f7891b4370",
  "team_id": "e368dea81c724512944c62725d6f8722",
  "placement": 91,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0678617b-87d2-4650-a989-0a46a7178485",
  "team_id": "e368dea81c724512944c62725d6f8722",
  "placement": 60,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "023f332d-3d6d-4f07-ba5d-c86b0133ccd0",
  "team_id": "e368dea81c724512944c62725d6f8722",
  "placement": 98,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "e5cfab56-f299-41cd-a05e-70fb7d70187b",
  "team_id": "e368dea81c724512944c62725d6f8722",
  "placement": 90,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "37a556ce-a004-4149-b908-f4ae199ad3a6",
  "team_id": "e368dea81c724512944c62725d6f8722",
  "placement": 64,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 3,
  "time_alive": 1529,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 9,
  "time_alive": 1463,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 23,
  "time_alive": 1320,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 2,
  "time_alive": 1456,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 14,
  "time_alive": 1461,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627",
  "placement": 9,
  "time_alive": 1380,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:a9716111ba114088b2a04484e94c2b40",
  "placement": 6,
  "time_alive": 1477,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:a9716111ba114088b2a04484e94c2b40",
  "placement": 37,
  "time_alive": 783,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:a9716111ba114088b2a04484e94c2b40",
  "placement": 9,
  "time_alive": 1416,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:a9716111ba114088b2a04484e94c2b40",
  "placement": 6,
  "time_alive": 1439,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:a9716111ba114088b2a04484e94c2b40",
  "placement": 3,
  "time_alive": 1553,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:a9716111ba114088b2a04484e94c2b40",
  "placement": 4,
  "time_alive": 1429,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 18,
  "time_alive": 1398,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 6,
  "time_alive": 1485,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 6,
  "time_alive": 1423,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 9,
  "time_alive": 1346,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 42,
  "time_alive": 766,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd",
  "placement": 1,
  "time_alive": 1459,
  "elims": 12,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1429,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1518,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1460,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 33,
  "time_alive": 930,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 39,
  "time_alive": 911,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 7,
  "time_alive": 1394,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1541,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 43,
  "time_alive": 331,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 16,
  "time_alive": 1365,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 13,
  "time_alive": 1332,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 43,
  "time_alive": 720,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 2,
  "time_alive": 1459,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 2,
  "time_alive": 1541,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 2,
  "time_alive": 1518,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 13,
  "time_alive": 1383,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 19,
  "time_alive": 1268,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 17,
  "time_alive": 1439,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "922888934f6c48b6ad33258584c1f688:f5783ecc4b074396aad638fd7baa1c89",
  "placement": 25,
  "time_alive": 1088,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc",
  "placement": 28,
  "time_alive": 1236,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc",
  "placement": 8,
  "time_alive": 1478,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc",
  "placement": 27,
  "time_alive": 1182,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc",
  "placement": 8,
  "time_alive": 1417,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc",
  "placement": 2,
  "time_alive": 1563,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc",
  "placement": 17,
  "time_alive": 1315,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 34,
  "time_alive": 1151,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 24,
  "time_alive": 1333,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 46,
  "time_alive": 293,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 15,
  "time_alive": 1316,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 1,
  "time_alive": 1563,
  "elims": 10,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 21,
  "time_alive": 1207,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 35,
  "time_alive": 1123,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 4,
  "time_alive": 1489,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 2,
  "time_alive": 1460,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 42,
  "time_alive": 415,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 7,
  "time_alive": 1520,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "253993e3e0b54e839f99b2e95b55a9d8:ade2bf24eb7f42188069ddaab62da007",
  "placement": 22,
  "time_alive": 1192,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "341c179499594c18924bb1e421347321:38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 37,
  "time_alive": 1006,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "341c179499594c18924bb1e421347321:38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 3,
  "time_alive": 1512,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "341c179499594c18924bb1e421347321:38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "341c179499594c18924bb1e421347321:38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 40,
  "time_alive": 511,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "341c179499594c18924bb1e421347321:38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 9,
  "time_alive": 1488,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "341c179499594c18924bb1e421347321:38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 14,
  "time_alive": 1334,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 31,
  "time_alive": 1168,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 30,
  "time_alive": 1152,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 4,
  "time_alive": 1431,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 4,
  "time_alive": 1445,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 10,
  "time_alive": 1486,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 12,
  "time_alive": 1348,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:95b8c65a16ec4322824da21fe511371a",
  "placement": 47,
  "time_alive": 176,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:95b8c65a16ec4322824da21fe511371a",
  "placement": 41,
  "time_alive": 437,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:95b8c65a16ec4322824da21fe511371a",
  "placement": 21,
  "time_alive": 1330,
  "elims": 9,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:95b8c65a16ec4322824da21fe511371a",
  "placement": 25,
  "time_alive": 1235,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:95b8c65a16ec4322824da21fe511371a",
  "placement": 11,
  "time_alive": 1481,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:95b8c65a16ec4322824da21fe511371a",
  "placement": 6,
  "time_alive": 1398,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 12,
  "time_alive": 1424,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 23,
  "time_alive": 1335,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 10,
  "time_alive": 1413,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 32,
  "time_alive": 934,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 4,
  "time_alive": 1536,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 19,
  "time_alive": 1276,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 17,
  "time_alive": 1399,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 11,
  "time_alive": 1436,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 35,
  "time_alive": 1110,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 20,
  "time_alive": 1257,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 12,
  "time_alive": 1467,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 38,
  "time_alive": 423,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 30,
  "time_alive": 1203,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 19,
  "time_alive": 1372,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 25,
  "time_alive": 1291,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 5,
  "time_alive": 1443,
  "elims": 11,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 32,
  "time_alive": 1153,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 11,
  "time_alive": 1352,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935",
  "placement": 25,
  "time_alive": 1317,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935",
  "placement": 25,
  "time_alive": 1311,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935",
  "placement": 8,
  "time_alive": 1416,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935",
  "placement": 10,
  "time_alive": 1340,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935",
  "placement": 44,
  "time_alive": 676,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935",
  "placement": 13,
  "time_alive": 1340,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1522,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 46,
  "time_alive": 211,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 40,
  "time_alive": 606,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 24,
  "time_alive": 1238,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 5,
  "time_alive": 1532,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "302646d123a0470fbd56fcc13900fafa:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 16,
  "time_alive": 1320,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 8,
  "time_alive": 1447,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 32,
  "time_alive": 982,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 5,
  "time_alive": 1424,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 21,
  "time_alive": 1254,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 24,
  "time_alive": 1332,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92",
  "placement": 37,
  "time_alive": 536,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 21,
  "time_alive": 1354,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 20,
  "time_alive": 1369,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 12,
  "time_alive": 1383,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 50,
  "time_alive": 87,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 8,
  "time_alive": 1496,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 8,
  "time_alive": 1394,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 36,
  "time_alive": 1103,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 10,
  "time_alive": 1459,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 15,
  "time_alive": 1374,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 34,
  "time_alive": 915,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 36,
  "time_alive": 962,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 3,
  "time_alive": 1440,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 13,
  "time_alive": 1414,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 5,
  "time_alive": 1487,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 43,
  "time_alive": 395,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 39,
  "time_alive": 656,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 22,
  "time_alive": 1380,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 5,
  "time_alive": 1420,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81",
  "placement": 23,
  "time_alive": 1346,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81",
  "placement": 15,
  "time_alive": 1403,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81",
  "placement": 17,
  "time_alive": 1362,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81",
  "placement": 41,
  "time_alive": 426,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81",
  "placement": 18,
  "time_alive": 1421,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81",
  "placement": 27,
  "time_alive": 1045,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 5,
  "time_alive": 1481,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 28,
  "time_alive": 1156,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 26,
  "time_alive": 1286,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 1,
  "time_alive": 1456,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 46,
  "time_alive": 530,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 46,
  "time_alive": 284,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 42,
  "time_alive": 727,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 47,
  "time_alive": 210,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 47,
  "time_alive": 264,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 18,
  "time_alive": 1277,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 6,
  "time_alive": 1529,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b",
  "placement": 33,
  "time_alive": 748,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 10,
  "time_alive": 1438,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 22,
  "time_alive": 1341,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 3,
  "time_alive": 1452,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 48,
  "time_alive": 165,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 45,
  "time_alive": 553,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 23,
  "time_alive": 1121,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 9,
  "time_alive": 1440,
  "elims": 8,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 18,
  "time_alive": 1373,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 45,
  "time_alive": 304,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 47,
  "time_alive": 225,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 34,
  "time_alive": 1082,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "212208c844e145e0bb69874ec438f080:ef0106457410430bbbd501bf4930a54e",
  "placement": 34,
  "time_alive": 692,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 43,
  "time_alive": 404,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 7,
  "time_alive": 1478,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 42,
  "time_alive": 465,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 16,
  "time_alive": 1283,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 30,
  "time_alive": 1189,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "862a829593db4771a9965076bf1621b7:d2010070f055409d970571f7e049df80",
  "placement": 35,
  "time_alive": 677,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 16,
  "time_alive": 1400,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 12,
  "time_alive": 1417,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 20,
  "time_alive": 1333,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 27,
  "time_alive": 1151,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 19,
  "time_alive": 1419,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 18,
  "time_alive": 1286,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 39,
  "time_alive": 858,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 14,
  "time_alive": 1404,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 37,
  "time_alive": 988,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 45,
  "time_alive": 239,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 37,
  "time_alive": 919,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "dd9a2b7225b54f9f990443d173807349:fbc52b1997cb40c7ade823360c605915",
  "placement": 15,
  "time_alive": 1329,
  "elims": 7,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "2dfc71015e5349ee938b57a94d205587:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 20,
  "time_alive": 1365,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "2dfc71015e5349ee938b57a94d205587:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 36,
  "time_alive": 807,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "2dfc71015e5349ee938b57a94d205587:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 19,
  "time_alive": 1347,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "2dfc71015e5349ee938b57a94d205587:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 14,
  "time_alive": 1316,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "2dfc71015e5349ee938b57a94d205587:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 26,
  "time_alive": 1300,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "2dfc71015e5349ee938b57a94d205587:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 32,
  "time_alive": 810,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 15,
  "time_alive": 1411,
  "elims": 5,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 39,
  "time_alive": 571,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 22,
  "time_alive": 1327,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 31,
  "time_alive": 1011,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 13,
  "time_alive": 1462,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 42,
  "time_alive": 367,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "f54583872aac451ab31ce647035fa030:f84249f3202947ddbce9b345783afbb8",
  "placement": 44,
  "time_alive": 333,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "f54583872aac451ab31ce647035fa030:f84249f3202947ddbce9b345783afbb8",
  "placement": 17,
  "time_alive": 1379,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "f54583872aac451ab31ce647035fa030:f84249f3202947ddbce9b345783afbb8",
  "placement": 31,
  "time_alive": 1136,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "f54583872aac451ab31ce647035fa030:f84249f3202947ddbce9b345783afbb8",
  "placement": 17,
  "time_alive": 1280,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "f54583872aac451ab31ce647035fa030:f84249f3202947ddbce9b345783afbb8",
  "placement": 20,
  "time_alive": 1404,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "f54583872aac451ab31ce647035fa030:f84249f3202947ddbce9b345783afbb8",
  "placement": 20,
  "time_alive": 1270,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 38,
  "time_alive": 896,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 42,
  "time_alive": 375,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 7,
  "time_alive": 1418,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 37,
  "time_alive": 862,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 15,
  "time_alive": 1449,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 26,
  "time_alive": 1058,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 41,
  "time_alive": 815,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 50,
  "time_alive": 88,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 34,
  "time_alive": 1117,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 11,
  "time_alive": 1338,
  "elims": 6,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 33,
  "time_alive": 1141,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 29,
  "time_alive": 943,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "78d1168291c4450e90b1f146c49f6257:89f0fb21178d46ab9b601ee2a8653100",
  "placement": 26,
  "time_alive": 1316,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "78d1168291c4450e90b1f146c49f6257:89f0fb21178d46ab9b601ee2a8653100",
  "placement": 38,
  "time_alive": 742,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "78d1168291c4450e90b1f146c49f6257:89f0fb21178d46ab9b601ee2a8653100",
  "placement": 28,
  "time_alive": 1155,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "78d1168291c4450e90b1f146c49f6257:89f0fb21178d46ab9b601ee2a8653100",
  "placement": 7,
  "time_alive": 1417,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "78d1168291c4450e90b1f146c49f6257:89f0fb21178d46ab9b601ee2a8653100",
  "placement": 31,
  "time_alive": 1169,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "78d1168291c4450e90b1f146c49f6257:89f0fb21178d46ab9b601ee2a8653100",
  "placement": 43,
  "time_alive": 360,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:aa6e9fc100084a70836ddcab3630f302",
  "placement": 14,
  "time_alive": 1413,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:aa6e9fc100084a70836ddcab3630f302",
  "placement": 21,
  "time_alive": 1368,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:aa6e9fc100084a70836ddcab3630f302",
  "placement": 41,
  "time_alive": 552,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:aa6e9fc100084a70836ddcab3630f302",
  "placement": 38,
  "time_alive": 785,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:aa6e9fc100084a70836ddcab3630f302",
  "placement": 50,
  "time_alive": 198,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:aa6e9fc100084a70836ddcab3630f302",
  "placement": 30,
  "time_alive": 935,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1451,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 40,
  "time_alive": 455,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 44,
  "time_alive": 368,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 30,
  "time_alive": 1051,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 21,
  "time_alive": 1383,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "8a9f8de89ec04ae09755781697a30577:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 50,
  "time_alive": 83,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 45,
  "time_alive": 271,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 33,
  "time_alive": 920,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 14,
  "time_alive": 1382,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 3,
  "time_alive": 1450,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 38,
  "time_alive": 916,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 45,
  "time_alive": 299,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 24,
  "time_alive": 1341,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 16,
  "time_alive": 1396,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 24,
  "time_alive": 1317,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 36,
  "time_alive": 873,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 23,
  "time_alive": 1358,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 44,
  "time_alive": 340,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 33,
  "time_alive": 1153,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 31,
  "time_alive": 1151,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 18,
  "time_alive": 1349,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 26,
  "time_alive": 1180,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 28,
  "time_alive": 1258,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "036a737a688d436bbce811af92b11a4b:ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 39,
  "time_alive": 419,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68",
  "placement": 27,
  "time_alive": 1309,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68",
  "placement": 26,
  "time_alive": 1308,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68",
  "placement": 39,
  "time_alive": 757,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68",
  "placement": 29,
  "time_alive": 1095,
  "elims": 4,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68",
  "placement": 29,
  "time_alive": 1212,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68",
  "placement": 47,
  "time_alive": 221,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438:27ad826215ac4a9caa73a1a5139384bf",
  "placement": 29,
  "time_alive": 1230,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438:27ad826215ac4a9caa73a1a5139384bf",
  "placement": 13,
  "time_alive": 1412,
  "elims": 3,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438:27ad826215ac4a9caa73a1a5139384bf",
  "placement": 30,
  "time_alive": 1138,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438:27ad826215ac4a9caa73a1a5139384bf",
  "placement": 28,
  "time_alive": 1113,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438:27ad826215ac4a9caa73a1a5139384bf",
  "placement": 47,
  "time_alive": 400,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438:27ad826215ac4a9caa73a1a5139384bf",
  "placement": 48,
  "time_alive": 211,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 40,
  "time_alive": 840,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 27,
  "time_alive": 1258,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 29,
  "time_alive": 1150,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 22,
  "time_alive": 1252,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 40,
  "time_alive": 863,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 40,
  "time_alive": 385,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "768f041b01094777a2ab43c4367b756e:a0f5e86cd9074a15a33fb05656efddac",
  "placement": 46,
  "time_alive": 253,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "768f041b01094777a2ab43c4367b756e:a0f5e86cd9074a15a33fb05656efddac",
  "placement": 35,
  "time_alive": 884,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "768f041b01094777a2ab43c4367b756e:a0f5e86cd9074a15a33fb05656efddac",
  "placement": 32,
  "time_alive": 1135,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "768f041b01094777a2ab43c4367b756e:a0f5e86cd9074a15a33fb05656efddac",
  "placement": 23,
  "time_alive": 1252,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "768f041b01094777a2ab43c4367b756e:a0f5e86cd9074a15a33fb05656efddac",
  "placement": 27,
  "time_alive": 1258,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "768f041b01094777a2ab43c4367b756e:a0f5e86cd9074a15a33fb05656efddac",
  "placement": 28,
  "time_alive": 993,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "1cea5a1bdad94fa9891131a781ff15b5:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 22,
  "time_alive": 1354,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "1cea5a1bdad94fa9891131a781ff15b5:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 29,
  "time_alive": 1156,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "1cea5a1bdad94fa9891131a781ff15b5:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 33,
  "time_alive": 1126,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "1cea5a1bdad94fa9891131a781ff15b5:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 35,
  "time_alive": 915,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "1cea5a1bdad94fa9891131a781ff15b5:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 48,
  "time_alive": 235,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "1cea5a1bdad94fa9891131a781ff15b5:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 24,
  "time_alive": 1109,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 32,
  "time_alive": 1163,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 49,
  "time_alive": 138,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 49,
  "time_alive": 115,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 43,
  "time_alive": 404,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 49,
  "time_alive": 219,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 36,
  "time_alive": 557,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "562229177d974f498e676365eccc5799:da96353e89e04f55855267963486dbef",
  "placement": 44,
  "time_alive": 248,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "562229177d974f498e676365eccc5799:da96353e89e04f55855267963486dbef",
  "placement": 48,
  "time_alive": 127,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "562229177d974f498e676365eccc5799:da96353e89e04f55855267963486dbef",
  "placement": 44,
  "time_alive": 309,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "562229177d974f498e676365eccc5799:da96353e89e04f55855267963486dbef",
  "placement": 35,
  "time_alive": 990,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "562229177d974f498e676365eccc5799:da96353e89e04f55855267963486dbef",
  "placement": 31,
  "time_alive": 891,
  "elims": 2,
  "mode": 2
 },
 {
  "game_id": "12ac912d-1080-462a-bdac-4b09c3cc37da",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 48,
  "time_alive": 141,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 48,
  "time_alive": 140,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 50,
  "time_alive": 91,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 46,
  "time_alive": 231,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 25,
  "time_alive": 1323,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941:e634cbd22c6941b78a9eec9dcdbcece8",
  "placement": 49,
  "time_alive": 172,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "06623010-6d1b-494a-a72f-40aff5ffcd3a",
  "team_id": "f0448484d6ee486298207037819e5813:fd3f264f8339483faf5f92ca37b70cb4",
  "placement": 45,
  "time_alive": 246,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "4e478d42-121c-461a-abc1-4280a92e1ee3",
  "team_id": "f0448484d6ee486298207037819e5813:fd3f264f8339483faf5f92ca37b70cb4",
  "placement": 36,
  "time_alive": 1109,
  "elims": 1,
  "mode": 2
 },
 {
  "game_id": "747b403e-9ad7-4f6f-9cb0-6eb0aab81027",
  "team_id": "f0448484d6ee486298207037819e5813:fd3f264f8339483faf5f92ca37b70cb4",
  "placement": 49,
  "time_alive": 129,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "1d4c120d-df2a-4032-967b-52d3811a4949",
  "team_id": "f0448484d6ee486298207037819e5813:fd3f264f8339483faf5f92ca37b70cb4",
  "placement": 41,
  "time_alive": 766,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "220b5b59-97eb-4cfb-9f3c-5a7008087265",
  "team_id": "f0448484d6ee486298207037819e5813:fd3f264f8339483faf5f92ca37b70cb4",
  "placement": 41,
  "time_alive": 379,
  "elims": 0,
  "mode": 2
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 13,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 4,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 8,
  "time_alive": 1465,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 28,
  "time_alive": 511,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 3,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 9,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 11,
  "time_alive": 1396,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1422,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1525,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 18,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 8,
  "time_alive": 1371,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 9,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 6,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 4,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 4,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 10,
  "time_alive": 1419,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 25,
  "time_alive": 982,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1516,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 8,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 20,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 13,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 15,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 14,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 15,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 15,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 30,
  "time_alive": 381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 17,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 1,
  "time_alive": 1511,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 4,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 6,
  "time_alive": 1488,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 7,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 23,
  "time_alive": 1016,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 6,
  "time_alive": 1467,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 22,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 5,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1516,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 20,
  "time_alive": 1257,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 11,
  "time_alive": 1428,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 33,
  "time_alive": 96,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 31,
  "time_alive": 367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1455,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 12,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 11,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 3,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 5,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 9,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 16,
  "time_alive": 1294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 3,
  "time_alive": 1505,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 23,
  "time_alive": 951,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 19,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 12,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 5,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 17,
  "time_alive": 1255,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1504,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 17,
  "time_alive": 1333,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 16,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 2,
  "time_alive": 1501,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1487,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 11,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 5,
  "time_alive": 1494,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 32,
  "time_alive": 85,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 33,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 1,
  "time_alive": 1501,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 30,
  "time_alive": 396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 32,
  "time_alive": 231,
  "elims": 0,
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
    