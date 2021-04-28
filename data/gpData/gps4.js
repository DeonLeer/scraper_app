const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 46,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 40,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 38,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "8dbf0dfcbfac419bafd0b7305d006b00",
  "placement": 17,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 93,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 36,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 71,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 88,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 23,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 74,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 58,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 23,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 22,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 3,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 23,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 31,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 76,
  "time_alive": 803,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 35,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 94,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 22,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 22,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 11,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 69,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 20,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 16,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 49,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 74,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "6fdeb1b5b9574726a0b1906b25a0a35e",
  "placement": 7,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 42,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 72,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 18,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 57,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 81,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 62,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 36,
  "time_alive": 1275,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 5,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 21,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 64,
  "time_alive": 675,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 58,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 94,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 40,
  "time_alive": 1223,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 37,
  "time_alive": 1287,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 31,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 70,
  "time_alive": 663,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 95,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 80,
  "time_alive": 778,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 93,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 8,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 72,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 47,
  "time_alive": 1140,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 79,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 61,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 48,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 62,
  "time_alive": 881,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 26,
  "time_alive": 1327,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 88,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 21,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 37,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 13,
  "time_alive": 1373,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 79,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 61,
  "time_alive": 961,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 17,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 53,
  "time_alive": 753,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 53,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 90,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 14,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 43,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 5,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 70,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 70,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 3,
  "time_alive": 1466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 38,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 13,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 57,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "61d258e38fc24979b8dbdaf22356ed2e",
  "placement": 51,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 54,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 31,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 99,
  "time_alive": 66,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 50,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 39,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 57,
  "time_alive": 1000,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 41,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 11,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 97,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 63,
  "time_alive": 890,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 6,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 81,
  "time_alive": 280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 10,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 29,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 27,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 73,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 53,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 51,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 45,
  "time_alive": 1240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 40,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 54,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 7,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 53,
  "time_alive": 931,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 48,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 35,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 33,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 46,
  "time_alive": 1168,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 32,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 11,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 72,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 49,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 35,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 80,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 89,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 13,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 28,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 71,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 89,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 84,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 17,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 3,
  "time_alive": 1448,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 69,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 82,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 95,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 32,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 50,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 15,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 20,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 24,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 75,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 59,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 34,
  "time_alive": 1290,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 43,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 76,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 35,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 2,
  "time_alive": 1477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 27,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 92,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 35,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 59,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 100,
  "time_alive": 65,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 28,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 2,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 93,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 95,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 20,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 23,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 97,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 57,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 84,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 75,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 92,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 29,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 34,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 24,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 58,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 24,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 100,
  "time_alive": 52,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 11,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 25,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 19,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 47,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 42,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 29,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 45,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 68,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 39,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 23,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 74,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 54,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 17,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 24,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 14,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 70,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 7,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 40,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 16,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 2,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 11,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 51,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 36,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 61,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 92,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 45,
  "time_alive": 1193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 29,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 66,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 50,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 88,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 55,
  "time_alive": 1093,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 55,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 77,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 36,
  "time_alive": 1285,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 18,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 86,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 68,
  "time_alive": 965,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 30,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 65,
  "time_alive": 837,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 46,
  "time_alive": 1192,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 96,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 39,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 92,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 46,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 4,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 11,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 44,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 6,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 74,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 34,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 33,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 26,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 86,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 78,
  "time_alive": 323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 97,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 13,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 73,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 29,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 19,
  "time_alive": 1338,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 34,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 60,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 64,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 86,
  "time_alive": 277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 53,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 9,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 43,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 77,
  "time_alive": 799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 7,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 83,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 10,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 8,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 91,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 56,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 82,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 74,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 97,
  "time_alive": 87,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 66,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 95,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 91,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 53,
  "time_alive": 1062,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 45,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 37,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 64,
  "time_alive": 882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 84,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 86,
  "time_alive": 311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 48,
  "time_alive": 1165,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 87,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 21,
  "time_alive": 1302,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 11,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 22,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 44,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 66,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 25,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 58,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 28,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 40,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 60,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 87,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 33,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 8,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 34,
  "time_alive": 1218,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 52,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 79,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 72,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 15,
  "time_alive": 1349,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 73,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 90,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 100,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 90,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 6,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 52,
  "time_alive": 1160,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 94,
  "time_alive": 158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 83,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 7,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 53,
  "time_alive": 1137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 95,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 98,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 25,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 31,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 85,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 46,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 66,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 12,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 45,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 52,
  "time_alive": 788,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 47,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 43,
  "time_alive": 1186,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 42,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 100,
  "time_alive": 55,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 52,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 36,
  "time_alive": 1278,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 89,
  "time_alive": 375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 73,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 38,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 32,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 15,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 32,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 14,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 19,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 55,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 61,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 83,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 43,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 47,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 53,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 78,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 56,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 19,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 44,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 74,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 30,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 40,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 82,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 41,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 6,
  "time_alive": 1458,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 57,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 44,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 19,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 52,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 62,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 37,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 82,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 40,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 80,
  "time_alive": 299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 10,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 17,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 63,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 81,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 40,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 81,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 58,
  "time_alive": 779,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 57,
  "time_alive": 692,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 72,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 93,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 49,
  "time_alive": 1090,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 59,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 59,
  "time_alive": 956,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 45,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 72,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 83,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 11,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 62,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 18,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 85,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 33,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 87,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 23,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 75,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 13,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 77,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 94,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 14,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 39,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 55,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 99,
  "time_alive": 65,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 61,
  "time_alive": 545,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 87,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 19,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 56,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 24,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 64,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 52,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 78,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 27,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 61,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 23,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 76,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 25,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 80,
  "time_alive": 627,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 32,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 48,
  "time_alive": 1136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 63,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 41,
  "time_alive": 1270,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 30,
  "time_alive": 1309,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 99,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 16,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 97,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 70,
  "time_alive": 475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 38,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 40,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 25,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 91,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 9,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 81,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 35,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 59,
  "time_alive": 1128,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 48,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 23,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 67,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 71,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 44,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 64,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 55,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 49,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 32,
  "time_alive": 1301,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 96,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 7,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 49,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 98,
  "time_alive": 85,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 69,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 29,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 74,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 66,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 88,
  "time_alive": 337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 6,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 47,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 56,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 9,
  "time_alive": 1404,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 55,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 41,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 49,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 75,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 85,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 11,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 60,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 47,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 13,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 91,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 71,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 90,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 88,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 91,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 64,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 16,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "0b7e488fe30c4d6da029c5025fbd23e7",
  "placement": 82,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 25,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 38,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 82,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 77,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 20,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 32,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 28,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 54,
  "time_alive": 1150,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 89,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 30,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 36,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 46,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 67,
  "time_alive": 952,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 10,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 90,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 81,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 29,
  "time_alive": 1308,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 49,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 33,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 87,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 83,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 45,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 82,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 80,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 90,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 95,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 8,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 70,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 12,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 44,
  "time_alive": 1187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 71,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 58,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 76,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 73,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 88,
  "time_alive": 248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 87,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 56,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 64,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 100,
  "time_alive": 50,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 61,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 31,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 29,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 29,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 69,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 73,
  "time_alive": 621,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 79,
  "time_alive": 430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 25,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 76,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 99,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 71,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 15,
  "time_alive": 1369,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 76,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 90,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 22,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 97,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 91,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 88,
  "time_alive": 249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 51,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 81,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "bf13cb4386474206a8eadc7497f7d03a",
  "placement": 30,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 46,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 47,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 76,
  "time_alive": 461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 38,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 83,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 92,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 22,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 84,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 75,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 37,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 46,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "efcbed47d8a2450b8a6483671285ab25",
  "placement": 50,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 68,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 61,
  "time_alive": 1085,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 58,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 94,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 94,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 53,
  "time_alive": 1018,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 16,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 89,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 69,
  "time_alive": 733,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 93,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 63,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "0aa924c5dd50499eab9bd478c71fd1cd",
  "placement": 94,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 31,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 77,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 13,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 28,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 63,
  "time_alive": 825,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 56,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 47,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 52,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 18,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 57,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 43,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "0013311b517c474cb79fe15790610ff3",
  "placement": 55,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 49,
  "time_alive": 1161,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 98,
  "time_alive": 77,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 86,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 72,
  "time_alive": 527,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 98,
  "time_alive": 63,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 82,
  "time_alive": 449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 81,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 55,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 47,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 71,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 77,
  "time_alive": 337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 63,
  "time_alive": 501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 75,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 41,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 87,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 42,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 45,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 50,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 32,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 68,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 51,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 76,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 41,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 56,
  "time_alive": 692,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 50,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 80,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 97,
  "time_alive": 76,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 54,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 76,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 58,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 17,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 59,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 90,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "aa0334a3fb3045c191f791eb8761397a",
  "placement": 35,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 60,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 37,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 44,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 27,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 75,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 66,
  "time_alive": 870,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 83,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 50,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 68,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 17,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 65,
  "time_alive": 598,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "e173a262484d4bd29b081c993c505785",
  "placement": 73,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 83,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 54,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 63,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 68,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 66,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 55,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 54,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 61,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 52,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 11,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "8cbdd28fa8bd43ffabb6d26b982a76e3",
  "placement": 40,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 82,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 50,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 89,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 52,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 50,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 47,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 76,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 21,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 81,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 58,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 67,
  "time_alive": 554,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 24,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 63,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 51,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 78,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 96,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 99,
  "time_alive": 58,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 65,
  "time_alive": 881,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 42,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 39,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 93,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 94,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 95,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 91,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 43,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 94,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 67,
  "time_alive": 754,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 89,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 67,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 68,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 73,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 78,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 64,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 44,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 98,
  "time_alive": 70,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "044e23ec0b5b436e8d8cccde5f53fdd8",
  "placement": 69,
  "time_alive": 416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 38,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 70,
  "time_alive": 861,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 52,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 83,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 85,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 93,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 91,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 92,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 78,
  "time_alive": 454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 82,
  "time_alive": 390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "06d7dccbfcd743a598ed2c526967c59f",
  "placement": 80,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 73,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 73,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 93,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 14,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 79,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 63,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 65,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 77,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 56,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 91,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 83,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "2fd61d503fda4c3d913546c56e30b421",
  "placement": 42,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 21,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 34,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 99,
  "time_alive": 76,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 16,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 98,
  "time_alive": 71,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 87,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 98,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "56d9f9fe0f1042c590b39d76cd3efed2",
  "placement": 96,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 70,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 81,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 54,
  "time_alive": 1053,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 46,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 80,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 48,
  "time_alive": 1168,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 64,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 80,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 85,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 77,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 72,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 75,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 91,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 85,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 80,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 86,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 69,
  "time_alive": 717,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 62,
  "time_alive": 912,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 44,
  "time_alive": 1241,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 59,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 72,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 80,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 91,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "0995a06580614cad997d5ce3585fb219",
  "placement": 47,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 89,
  "time_alive": 365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 24,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 69,
  "time_alive": 709,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 55,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 99,
  "time_alive": 62,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 75,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 94,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 84,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 92,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 90,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 81,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 52,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 60,
  "time_alive": 927,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 90,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 100,
  "time_alive": 34,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 60,
  "time_alive": 963,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 96,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 96,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 95,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 90,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 87,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "364fcc74-ef6b-444a-bdf7-53b481e43230",
  "team_id": "d5d3543a5a7041439f76ff14dc4046af",
  "placement": 86,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1028c4d5-6eb1-416a-98db-7ff6d3a2cb3c",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 59,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66462c18-4902-4f1b-be27-22d8e10d4970",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 58,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c2e4c0dc-0b01-4963-b3e9-76cd846b9b26",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 75,
  "time_alive": 511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1a86872c-290f-413e-89ef-011f8aecae0f",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 82,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ae0686ab-3b06-46ff-8a59-1307adf1839c",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 86,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17bf205d-e803-4a03-bce1-319f3adc0669",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 84,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "b3b6d813-1048-47c7-a15b-312eae0b0c87",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 93,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7251fcdf-fc20-41ef-95f5-0d0d72f94d65",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 99,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "90dffc85-c128-459a-a3ac-4fea2451bad3",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 59,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1293c0c0-cc3d-4593-ae09-1a9b698dffd2",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 88,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1539ae26-9c6e-4bdd-a842-56757c41b9c4",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 89,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 83,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 1,
  "time_alive": 1450,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 97,
  "time_alive": 79,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 1,
  "time_alive": 1373,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 29,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 29,
  "time_alive": 1290,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 87,
  "time_alive": 413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 27,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 12,
  "time_alive": 1368,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 4,
  "time_alive": 1361,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 5,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 67,
  "time_alive": 557,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 3,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 8,
  "time_alive": 1405,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 67,
  "time_alive": 934,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 45,
  "time_alive": 1182,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 7,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 22,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 20,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 1,
  "time_alive": 1432,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 24,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 7,
  "time_alive": 1348,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 62,
  "time_alive": 853,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 52,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 72,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 58,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 5,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 9,
  "time_alive": 1336,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 50,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 36,
  "time_alive": 1256,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 44,
  "time_alive": 1251,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 82,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 50,
  "time_alive": 1188,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 84,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 3,
  "time_alive": 1382,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 1,
  "time_alive": 1368,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 10,
  "time_alive": 1369,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 6,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 29,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 81,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 74,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 52,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 83,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 8,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 28,
  "time_alive": 1304,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 14,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 12,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 3,
  "time_alive": 1355,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 13,
  "time_alive": 1362,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 89,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 35,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 8,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 99,
  "time_alive": 48,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 4,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 50,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 39,
  "time_alive": 1240,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 23,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1375,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 9,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 19,
  "time_alive": 1285,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 43,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 70,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 47,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 3,
  "time_alive": 1358,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 1,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 57,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 33,
  "time_alive": 1314,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 54,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 30,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 35,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 21,
  "time_alive": 1277,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 16,
  "time_alive": 1290,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 14,
  "time_alive": 1351,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 31,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 51,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 50,
  "time_alive": 1110,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 3,
  "time_alive": 1449,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 70,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 75,
  "time_alive": 803,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 28,
  "time_alive": 1290,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 51,
  "time_alive": 1184,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 5,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 30,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 12,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 6,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 30,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 16,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 25,
  "time_alive": 1283,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 16,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 20,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 28,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 30,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 43,
  "time_alive": 1259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 58,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 35,
  "time_alive": 1243,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 5,
  "time_alive": 1339,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 1,
  "time_alive": 1435,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 32,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 25,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 46,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 35,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 14,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 2,
  "time_alive": 1471,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 55,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 47,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 22,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 22,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 21,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 22,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 76,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 8,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 4,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 32,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 94,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 10,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 36,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 2,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 25,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 54,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 2,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 74,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 19,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 48,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1373,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 21,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 9,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 57,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 59,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 33,
  "time_alive": 1285,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 72,
  "time_alive": 706,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 15,
  "time_alive": 1308,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 8,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 75,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 15,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 3,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 82,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 18,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 42,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 1,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 5,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 53,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 40,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 8,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 42,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 67,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 22,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 17,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 84,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 2,
  "time_alive": 1404,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 47,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 29,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 11,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 67,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 47,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 30,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 27,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 24,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 61,
  "time_alive": 1042,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 6,
  "time_alive": 1348,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 40,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 1,
  "time_alive": 1404,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 46,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 70,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 78,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 21,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 69,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 47,
  "time_alive": 932,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 28,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 55,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 96,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 69,
  "time_alive": 827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 2,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 10,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 35,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 45,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 5,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 60,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 16,
  "time_alive": 1307,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310",
  "placement": 36,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 25,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 47,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 41,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 61,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 23,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 16,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 60,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 41,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 11,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 13,
  "time_alive": 1311,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1292,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 21,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 73,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 72,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 13,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 76,
  "time_alive": 623,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 92,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 3,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 92,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 25,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 97,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 1,
  "time_alive": 1402,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 13,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 37,
  "time_alive": 1193,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 14,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 79,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 7,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 82,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 87,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 72,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 60,
  "time_alive": 1056,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 3,
  "time_alive": 1438,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 47,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 95,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 6,
  "time_alive": 1337,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 89,
  "time_alive": 446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 53,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 63,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 18,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 43,
  "time_alive": 1253,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 32,
  "time_alive": 1271,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 98,
  "time_alive": 87,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 84,
  "time_alive": 454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 1,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 7,
  "time_alive": 1327,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 58,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 53,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 11,
  "time_alive": 1390,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 49,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 47,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 66,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 41,
  "time_alive": 1176,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 6,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 38,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 34,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 10,
  "time_alive": 1316,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 31,
  "time_alive": 1214,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 42,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 17,
  "time_alive": 1306,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 59,
  "time_alive": 1046,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 93,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 4,
  "time_alive": 1447,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 5,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 93,
  "time_alive": 304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 16,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 57,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 56,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 58,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057",
  "placement": 78,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 50,
  "time_alive": 1103,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 74,
  "time_alive": 654,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 98,
  "time_alive": 69,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 97,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 37,
  "time_alive": 1279,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 49,
  "time_alive": 1088,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 41,
  "time_alive": 1285,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 89,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 76,
  "time_alive": 644,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 90,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 40,
  "time_alive": 1232,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 81,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 23,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 20,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 87,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 87,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 68,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 18,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 53,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 4,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 8,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 71,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 44,
  "time_alive": 1159,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 7,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 5,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 40,
  "time_alive": 1193,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 90,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 76,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 8,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 19,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 45,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 17,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 86,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 17,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 66,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "5dfdbb980be8419e9dd8ec882be3deee",
  "placement": 55,
  "time_alive": 652,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 78,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 48,
  "time_alive": 1169,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e64542b-5dd7-4d23-9346-7bb12c84c40e",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 2,
  "time_alive": 1495,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0ddd8f25-1936-4213-a157-8cb49638a6b7",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 63,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27d17069-05ba-46d0-9bcf-14fd11ea43f7",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 52,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "a401c9bb-c990-472c-a026-5c4640dfb94f",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 67,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f1ed5df-1212-42d7-bdf0-d3c09f610f54",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 77,
  "time_alive": 777,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f17f607-e7d2-4bb3-99d7-8519f01b4a62",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 71,
  "time_alive": 884,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "400e2c20-4a37-495d-bca4-7820d27b519f",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 14,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "a2584546-ed06-4d5b-8b91-19892a333ded",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 27,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18e5004d-af23-45bd-bccb-94823f725f52",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 20,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 68,
  "time_alive": 515,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d00afbb-b612-4310-b3a0-424826ff59b1",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 30,
  "time_alive": 1220,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "cb31607c-56c5-4dff-b214-ef41ed5a4b00",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 80,
  "time_alive": 479,
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
    