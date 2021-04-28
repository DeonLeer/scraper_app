const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "d33ed82d1a8c48ca8a37c5370a647488",
  "placement": 97,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "d33ed82d1a8c48ca8a37c5370a647488",
  "placement": 26,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "9fa5e2df78cb4c1aa2ea1fe9ee36522d",
  "placement": 60,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "9fa5e2df78cb4c1aa2ea1fe9ee36522d",
  "placement": 72,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "9fa5e2df78cb4c1aa2ea1fe9ee36522d",
  "placement": 74,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "9fa5e2df78cb4c1aa2ea1fe9ee36522d",
  "placement": 33,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "9fa5e2df78cb4c1aa2ea1fe9ee36522d",
  "placement": 45,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "9fa5e2df78cb4c1aa2ea1fe9ee36522d",
  "placement": 30,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 6,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 67,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 87,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 80,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 88,
  "time_alive": 250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "c5f357ab648a427eab44986b1f25f5c6",
  "placement": 82,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 59,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 8,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 54,
  "time_alive": 1189,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 90,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 78,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 85,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 67,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 31,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 79,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 39,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 51,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 37,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 91,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 41,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 18,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 62,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 74,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 49,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 63,
  "time_alive": 1025,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 9,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 78,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 78,
  "time_alive": 544,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 63,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "10354163e217480aaee2f962e0b35295",
  "placement": 93,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 30,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 22,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 86,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 81,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 82,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 50,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 64,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 56,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 23,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 37,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 55,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "2a41148bbb8145a0bad4fa7d76a82c38",
  "placement": 51,
  "time_alive": 893,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "9c21eb4243884d0986db03152d2281f3",
  "placement": 47,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "9c21eb4243884d0986db03152d2281f3",
  "placement": 68,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "9c21eb4243884d0986db03152d2281f3",
  "placement": 69,
  "time_alive": 689,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "9c21eb4243884d0986db03152d2281f3",
  "placement": 20,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "9c21eb4243884d0986db03152d2281f3",
  "placement": 47,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "9c21eb4243884d0986db03152d2281f3",
  "placement": 91,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 43,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 48,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 57,
  "time_alive": 1082,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 85,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 65,
  "time_alive": 879,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 88,
  "time_alive": 144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 16,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 80,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 93,
  "time_alive": 153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 54,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 71,
  "time_alive": 424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "d0bec10b238d49029f7ff291b7f6ad24",
  "placement": 81,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "d0bec10b238d49029f7ff291b7f6ad24",
  "placement": 90,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "d0bec10b238d49029f7ff291b7f6ad24",
  "placement": 56,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "d0bec10b238d49029f7ff291b7f6ad24",
  "placement": 16,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "d0bec10b238d49029f7ff291b7f6ad24",
  "placement": 60,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "d0bec10b238d49029f7ff291b7f6ad24",
  "placement": 59,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "6e3bf6079ff0446e849d0a6cf65f0d0a",
  "placement": 75,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "6e3bf6079ff0446e849d0a6cf65f0d0a",
  "placement": 99,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "6e3bf6079ff0446e849d0a6cf65f0d0a",
  "placement": 9,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "6e3bf6079ff0446e849d0a6cf65f0d0a",
  "placement": 58,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "6e3bf6079ff0446e849d0a6cf65f0d0a",
  "placement": 81,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "6e370fc33d504b2393f17f1c384f9ff8",
  "placement": 52,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "6e370fc33d504b2393f17f1c384f9ff8",
  "placement": 43,
  "time_alive": 1259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "6e370fc33d504b2393f17f1c384f9ff8",
  "placement": 45,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "6e370fc33d504b2393f17f1c384f9ff8",
  "placement": 64,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "6e370fc33d504b2393f17f1c384f9ff8",
  "placement": 43,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "6e370fc33d504b2393f17f1c384f9ff8",
  "placement": 65,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 73,
  "time_alive": 853,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 42,
  "time_alive": 1287,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 65,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 93,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 77,
  "time_alive": 444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 65,
  "time_alive": 961,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 49,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 55,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 94,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 72,
  "time_alive": 672,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "ae9bd7153291439fb770ce7e58b561ee",
  "placement": 64,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "f7b41ed235ba4c4c8f863d7a9590ef35",
  "placement": 49,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "f7b41ed235ba4c4c8f863d7a9590ef35",
  "placement": 97,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "f7b41ed235ba4c4c8f863d7a9590ef35",
  "placement": 71,
  "time_alive": 681,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "f7b41ed235ba4c4c8f863d7a9590ef35",
  "placement": 77,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "f7b41ed235ba4c4c8f863d7a9590ef35",
  "placement": 59,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "f7b41ed235ba4c4c8f863d7a9590ef35",
  "placement": 48,
  "time_alive": 909,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 96,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 23,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 59,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 52,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 67,
  "time_alive": 854,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 81,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 78,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 73,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 70,
  "time_alive": 684,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 86,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 23,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 70,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 83,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 62,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 73,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 96,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 19,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3",
  "placement": 80,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "49b44b371b10449ca6f52625a16dc724",
  "placement": 26,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "49b44b371b10449ca6f52625a16dc724",
  "placement": 100,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "49b44b371b10449ca6f52625a16dc724",
  "placement": 84,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "49b44b371b10449ca6f52625a16dc724",
  "placement": 32,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "49b44b371b10449ca6f52625a16dc724",
  "placement": 53,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "49b44b371b10449ca6f52625a16dc724",
  "placement": 84,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "5cf520531cf84601b7a4f8d7a7606dc8",
  "placement": 23,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "5cf520531cf84601b7a4f8d7a7606dc8",
  "placement": 84,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "5cf520531cf84601b7a4f8d7a7606dc8",
  "placement": 62,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "5cf520531cf84601b7a4f8d7a7606dc8",
  "placement": 69,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "5cf520531cf84601b7a4f8d7a7606dc8",
  "placement": 92,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "5cf520531cf84601b7a4f8d7a7606dc8",
  "placement": 72,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "b746af3cde9b42b5803c9d7c942c06ba",
  "placement": 99,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "b746af3cde9b42b5803c9d7c942c06ba",
  "placement": 86,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "b746af3cde9b42b5803c9d7c942c06ba",
  "placement": 75,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "b746af3cde9b42b5803c9d7c942c06ba",
  "placement": 71,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "b746af3cde9b42b5803c9d7c942c06ba",
  "placement": 35,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "b746af3cde9b42b5803c9d7c942c06ba",
  "placement": 79,
  "time_alive": 294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 31,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 58,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 80,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 73,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 94,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 62,
  "time_alive": 629,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "2d55477bf0ff42f8990f08cd4c93c6f4",
  "placement": 38,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "2d55477bf0ff42f8990f08cd4c93c6f4",
  "placement": 44,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "2d55477bf0ff42f8990f08cd4c93c6f4",
  "placement": 48,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "2d55477bf0ff42f8990f08cd4c93c6f4",
  "placement": 79,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "2d55477bf0ff42f8990f08cd4c93c6f4",
  "placement": 79,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 34,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 50,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 81,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 82,
  "time_alive": 401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 75,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 92,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 93,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 31,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 74,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 71,
  "time_alive": 756,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 75,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "6d8bff24429646f284a1740f117e9617",
  "placement": 93,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "6d8bff24429646f284a1740f117e9617",
  "placement": 81,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "6d8bff24429646f284a1740f117e9617",
  "placement": 68,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "6d8bff24429646f284a1740f117e9617",
  "placement": 23,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "6d8bff24429646f284a1740f117e9617",
  "placement": 80,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "6d8bff24429646f284a1740f117e9617",
  "placement": 66,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 76,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 66,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 60,
  "time_alive": 965,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 97,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 84,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 55,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "857cdacd73b94ecab5342b13d1f09492",
  "placement": 56,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "857cdacd73b94ecab5342b13d1f09492",
  "placement": 94,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "857cdacd73b94ecab5342b13d1f09492",
  "placement": 91,
  "time_alive": 187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "857cdacd73b94ecab5342b13d1f09492",
  "placement": 65,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "857cdacd73b94ecab5342b13d1f09492",
  "placement": 90,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "857cdacd73b94ecab5342b13d1f09492",
  "placement": 31,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 61,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 91,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 46,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 57,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 86,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 76,
  "time_alive": 376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "c6ebfc39cb2b4651b835c9b783524cf4",
  "placement": 72,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "c6ebfc39cb2b4651b835c9b783524cf4",
  "placement": 95,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "c6ebfc39cb2b4651b835c9b783524cf4",
  "placement": 51,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "c6ebfc39cb2b4651b835c9b783524cf4",
  "placement": 91,
  "time_alive": 282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "c6ebfc39cb2b4651b835c9b783524cf4",
  "placement": 83,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 53,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 82,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 43,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 76,
  "time_alive": 620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 87,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 86,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3",
  "placement": 88,
  "time_alive": 483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3",
  "placement": 71,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "2b10b61599c24a3280c7d16b805afcf3",
  "placement": 95,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 77,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 78,
  "time_alive": 830,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 53,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 88,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 93,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "fbd0f32fe89041e1b6d71153aa7ef592",
  "placement": 83,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "31f7806aa01648eabd58b9bab3913363",
  "placement": 87,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "31f7806aa01648eabd58b9bab3913363",
  "placement": 92,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "31f7806aa01648eabd58b9bab3913363",
  "placement": 89,
  "time_alive": 231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "069900d9-bc0e-44a9-bf9a-06792307ca01",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 85,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "011f7811-184e-4349-a21f-9112b1733282",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 89,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23b74752-90e0-49be-b99d-c52f61fd2eb8",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1df8510d-fa3a-4976-8016-00c178a69cd3",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 95,
  "time_alive": 155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05028108-5c9f-4761-bed9-02151c181102",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 91,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a7917bd-5c41-4af9-9943-bfc663518d1e",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 90,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 24,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 46,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 2,
  "time_alive": 1497,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 21,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 8,
  "time_alive": 1472,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 5,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 51,
  "time_alive": 1179,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 2,
  "time_alive": 1536,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 47,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 80,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 18,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 1,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 20,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 15,
  "time_alive": 1418,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 12,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 5,
  "time_alive": 1452,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 19,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 22,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 49,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1536,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 16,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 24,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 43,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 20,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 1,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 4,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 16,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 15,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 16,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 4,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 7,
  "time_alive": 1425,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 65,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 2,
  "time_alive": 1516,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 13,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 9,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 5,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 10,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 22,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 36,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 2,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 41,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 45,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 9,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 5,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 9,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 8,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 26,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 11,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 17,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 51,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "439901ea973c444c8b1563d74c7e7e59",
  "placement": 17,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 93,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 8,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 9,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 6,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 47,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 4,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 1,
  "time_alive": 1500,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 43,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 36,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 22,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 67,
  "time_alive": 696,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 21,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 5,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 3,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 3,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 41,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 52,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 11,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 15,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 35,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 27,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 14,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 26,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 14,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 15,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 10,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "8e0540ab69d04a7f9f01dff74dac99de",
  "placement": 51,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 44,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 56,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 27,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 30,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 12,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 10,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 33,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 5,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 77,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 33,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 13,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "bbd19a4744a24a49a2aaf63e9fe12334",
  "placement": 19,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 7,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 28,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 13,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 42,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 9,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "9553dfcebe82446387f60e33699dc76c",
  "placement": 69,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 96,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 60,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 55,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 1,
  "time_alive": 1515,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 16,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 10,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 37,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 86,
  "time_alive": 370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 14,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 75,
  "time_alive": 499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 8,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 95,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 86,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 91,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 12,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 7,
  "time_alive": 1478,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 3,
  "time_alive": 1507,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 29,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 70,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 31,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 26,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 20,
  "time_alive": 1394,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 6,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 4,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 29,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 43,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 38,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 20,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 65,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 47,
  "time_alive": 1230,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 17,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 3,
  "time_alive": 1488,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 84,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "a8671dd49785426d9a6549b2b7c2d2d8",
  "placement": 31,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 3,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 12,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 73,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 84,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 39,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 29,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 22,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 45,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 6,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 24,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 33,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 32,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 45,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 34,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 8,
  "time_alive": 1458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 37,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 4,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 42,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 9,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 52,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 20,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 47,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 41,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "596ff531905244a4b699883dae5691da",
  "placement": 28,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 71,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 4,
  "time_alive": 1474,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 23,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 74,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 28,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "bda1400107db415097b908eedde12f74",
  "placement": 85,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 25,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 10,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 38,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 71,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 30,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 47,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 23,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 84,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 24,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 57,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 61,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 11,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 11,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 38,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 68,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 76,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "7a70c5dd0c6d45cf8f7ad429ddd29ef2",
  "placement": 18,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 19,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 17,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 7,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 52,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 52,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 80,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 64,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 25,
  "time_alive": 1396,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 11,
  "time_alive": 1418,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "e1a370862b864e2d80adc489701f4684",
  "placement": 91,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 69,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 40,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 3,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 79,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 62,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 15,
  "time_alive": 1424,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 18,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 80,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 83,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 40,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "84040a64b35044059d58ecb39f597633",
  "placement": 6,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "84040a64b35044059d58ecb39f597633",
  "placement": 64,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "84040a64b35044059d58ecb39f597633",
  "placement": 75,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "84040a64b35044059d58ecb39f597633",
  "placement": 78,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "84040a64b35044059d58ecb39f597633",
  "placement": 11,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "84040a64b35044059d58ecb39f597633",
  "placement": 84,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 28,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 44,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 18,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 65,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 14,
  "time_alive": 1437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 37,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 70,
  "time_alive": 887,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 69,
  "time_alive": 819,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 72,
  "time_alive": 682,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 8,
  "time_alive": 1423,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 48,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 74,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 84,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 21,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 14,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 64,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 94,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 70,
  "time_alive": 381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 68,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 22,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 76,
  "time_alive": 635,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 66,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 23,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 33,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 58,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 78,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 10,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 62,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 31,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 43,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "f86ad0922926454885345da63a833910",
  "placement": 97,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "f86ad0922926454885345da63a833910",
  "placement": 79,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "f86ad0922926454885345da63a833910",
  "placement": 67,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "f86ad0922926454885345da63a833910",
  "placement": 2,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "f86ad0922926454885345da63a833910",
  "placement": 25,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "f86ad0922926454885345da63a833910",
  "placement": 54,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "239cada4bbeb466bae38d0e7a5553416",
  "placement": 12,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "239cada4bbeb466bae38d0e7a5553416",
  "placement": 27,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "239cada4bbeb466bae38d0e7a5553416",
  "placement": 88,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "239cada4bbeb466bae38d0e7a5553416",
  "placement": 16,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "239cada4bbeb466bae38d0e7a5553416",
  "placement": 66,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "239cada4bbeb466bae38d0e7a5553416",
  "placement": 56,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "d3579336e84b48e4af9f9bd1c9e5b3bd",
  "placement": 81,
  "time_alive": 481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "d3579336e84b48e4af9f9bd1c9e5b3bd",
  "placement": 81,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "d3579336e84b48e4af9f9bd1c9e5b3bd",
  "placement": 19,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "d3579336e84b48e4af9f9bd1c9e5b3bd",
  "placement": 27,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "d3579336e84b48e4af9f9bd1c9e5b3bd",
  "placement": 57,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "d3579336e84b48e4af9f9bd1c9e5b3bd",
  "placement": 7,
  "time_alive": 1495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "5b588f6ee44c4dcc8376e1146da26bc0",
  "placement": 80,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "5b588f6ee44c4dcc8376e1146da26bc0",
  "placement": 42,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "5b588f6ee44c4dcc8376e1146da26bc0",
  "placement": 26,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "5b588f6ee44c4dcc8376e1146da26bc0",
  "placement": 32,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "5b588f6ee44c4dcc8376e1146da26bc0",
  "placement": 42,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "5b588f6ee44c4dcc8376e1146da26bc0",
  "placement": 58,
  "time_alive": 879,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 40,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 99,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 43,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 93,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 89,
  "time_alive": 225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 12,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 21,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 83,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 55,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 63,
  "time_alive": 943,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 82,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "e845b978ac384d5a8e869d8538fe8bce",
  "placement": 27,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 7,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 34,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 72,
  "time_alive": 583,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 62,
  "time_alive": 671,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 46,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 32,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 33,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 75,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 21,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 81,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 37,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 53,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 63,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 49,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 32,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 61,
  "time_alive": 753,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 53,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 35,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 20,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 64,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 57,
  "time_alive": 885,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455",
  "placement": 42,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455",
  "placement": 33,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455",
  "placement": 79,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455",
  "placement": 69,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455",
  "placement": 63,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "10c5c90ae1d24979a13dcdec87f2e455",
  "placement": 13,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 17,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 62,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 39,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 76,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "d94f99cf85084d638ea80c0f5d89db0e",
  "placement": 44,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 18,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 76,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 21,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 54,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 46,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "46b3b873361e4ae1b40c310d4a9a0604",
  "placement": 64,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 39,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 57,
  "time_alive": 1057,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 28,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 72,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 59,
  "time_alive": 871,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 88,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 77,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 13,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 46,
  "time_alive": 1292,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 77,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 87,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 38,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 48,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 54,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 98,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 13,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 96,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 49,
  "time_alive": 1106,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 92,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 91,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 30,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 61,
  "time_alive": 1000,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 15,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 72,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 30,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 30,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 48,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 58,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 35,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 73,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 78,
  "time_alive": 627,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 6,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 44,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 63,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 31,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 69,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 44,
  "time_alive": 1302,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 71,
  "time_alive": 599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 87,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 41,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 88,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 32,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 48,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 36,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 92,
  "time_alive": 95,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "706185466d854789ad3c0578ce0a34c9",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "706185466d854789ad3c0578ce0a34c9",
  "placement": 95,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "706185466d854789ad3c0578ce0a34c9",
  "placement": 22,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "706185466d854789ad3c0578ce0a34c9",
  "placement": 29,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "706185466d854789ad3c0578ce0a34c9",
  "placement": 68,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "706185466d854789ad3c0578ce0a34c9",
  "placement": 79,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 86,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 51,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 49,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 60,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 37,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 25,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 34,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 93,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 93,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 34,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 97,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 45,
  "time_alive": 1143,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 86,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 6,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 34,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "b292c001cd4248818d394b479348829e",
  "placement": 82,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "b292c001cd4248818d394b479348829e",
  "placement": 94,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "b292c001cd4248818d394b479348829e",
  "placement": 50,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "b292c001cd4248818d394b479348829e",
  "placement": 70,
  "time_alive": 715,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "b292c001cd4248818d394b479348829e",
  "placement": 34,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "b292c001cd4248818d394b479348829e",
  "placement": 35,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 57,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 77,
  "time_alive": 644,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 29,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 40,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 86,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 48,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "7c90be1375a84dd5b43812901d85b122",
  "placement": 75,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "7c90be1375a84dd5b43812901d85b122",
  "placement": 49,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "7c90be1375a84dd5b43812901d85b122",
  "placement": 78,
  "time_alive": 495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "7c90be1375a84dd5b43812901d85b122",
  "placement": 67,
  "time_alive": 799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "7c90be1375a84dd5b43812901d85b122",
  "placement": 93,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "7c90be1375a84dd5b43812901d85b122",
  "placement": 46,
  "time_alive": 1141,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 87,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 16,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 95,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 89,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 55,
  "time_alive": 956,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "2bef9dce40204e238254099a69393afe",
  "placement": 52,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 90,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 75,
  "time_alive": 700,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 61,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 25,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 44,
  "time_alive": 1220,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 83,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 89,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 67,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 81,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 23,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 70,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "3ee96915f7884259b03bbcd16456941e",
  "placement": 26,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 31,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 74,
  "time_alive": 719,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 57,
  "time_alive": 1158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 73,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 56,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 35,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 55,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 54,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 56,
  "time_alive": 1167,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 73,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 63,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "b354331224fc46e095a93c0252ecb09f",
  "placement": 54,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "b354331224fc46e095a93c0252ecb09f",
  "placement": 92,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "b354331224fc46e095a93c0252ecb09f",
  "placement": 66,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "b354331224fc46e095a93c0252ecb09f",
  "placement": 38,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "b354331224fc46e095a93c0252ecb09f",
  "placement": 45,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "b354331224fc46e095a93c0252ecb09f",
  "placement": 39,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 73,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 60,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 25,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 90,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 49,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 66,
  "time_alive": 527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "61d6817c59da4c6f93e0d7a31630626d",
  "placement": 50,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "61d6817c59da4c6f93e0d7a31630626d",
  "placement": 63,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "61d6817c59da4c6f93e0d7a31630626d",
  "placement": 92,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "61d6817c59da4c6f93e0d7a31630626d",
  "placement": 19,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "61d6817c59da4c6f93e0d7a31630626d",
  "placement": 69,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "61d6817c59da4c6f93e0d7a31630626d",
  "placement": 82,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 91,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 90,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 52,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 28,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 95,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 76,
  "time_alive": 323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 61,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 61,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 51,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 59,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 40,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 71,
  "time_alive": 371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 79,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 71,
  "time_alive": 758,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 56,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 94,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 54,
  "time_alive": 980,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 23,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 19,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 42,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 83,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 53,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 86,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 88,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 68,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 62,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 41,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 26,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 59,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 36,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 66,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 74,
  "time_alive": 665,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 31,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 78,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "e31851f8c5104eaba60b888f5410d37a",
  "placement": 60,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 62,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 36,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 85,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 46,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 74,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "7fcb6697bf5b43c8a8e1c2aee84f273b",
  "placement": 53,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "66660a4989744c0996297c82a52a1a1f",
  "placement": 83,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "66660a4989744c0996297c82a52a1a1f",
  "placement": 48,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "66660a4989744c0996297c82a52a1a1f",
  "placement": 70,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "66660a4989744c0996297c82a52a1a1f",
  "placement": 50,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "66660a4989744c0996297c82a52a1a1f",
  "placement": 43,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "66660a4989744c0996297c82a52a1a1f",
  "placement": 50,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 27,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 89,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 59,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 90,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 38,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 72,
  "time_alive": 735,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 89,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 91,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 81,
  "time_alive": 438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "2d5df6c76fb147c694f6276eb1f24caf",
  "placement": 89,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "191cf9c5363546a6bf6b45bc1c173dd9",
  "placement": 66,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "191cf9c5363546a6bf6b45bc1c173dd9",
  "placement": 98,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "191cf9c5363546a6bf6b45bc1c173dd9",
  "placement": 71,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "191cf9c5363546a6bf6b45bc1c173dd9",
  "placement": 92,
  "time_alive": 119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "191cf9c5363546a6bf6b45bc1c173dd9",
  "placement": 50,
  "time_alive": 1135,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "191cf9c5363546a6bf6b45bc1c173dd9",
  "placement": 91,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 85,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 87,
  "time_alive": 313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 39,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 51,
  "time_alive": 1206,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 88,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "f1b554515841484e9826ae0164b61f53",
  "placement": 68,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 55,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 65,
  "time_alive": 894,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 82,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 81,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 29,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "e526d56e153b4622beb83b2f434effcc",
  "placement": 78,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "2235476261434812a96239512d7d9a6d",
  "placement": 60,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "2235476261434812a96239512d7d9a6d",
  "placement": 50,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "2235476261434812a96239512d7d9a6d",
  "placement": 64,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "2235476261434812a96239512d7d9a6d",
  "placement": 45,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "2235476261434812a96239512d7d9a6d",
  "placement": 80,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "2235476261434812a96239512d7d9a6d",
  "placement": 65,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "502c2c16fe8247aa86a75eb496f740e3",
  "placement": 72,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "502c2c16fe8247aa86a75eb496f740e3",
  "placement": 59,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "502c2c16fe8247aa86a75eb496f740e3",
  "placement": 83,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "502c2c16fe8247aa86a75eb496f740e3",
  "placement": 36,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "502c2c16fe8247aa86a75eb496f740e3",
  "placement": 85,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "502c2c16fe8247aa86a75eb496f740e3",
  "placement": 75,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "aefdf0f5050b447ca04ad69136d5ed69",
  "placement": 67,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "aefdf0f5050b447ca04ad69136d5ed69",
  "placement": 23,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "aefdf0f5050b447ca04ad69136d5ed69",
  "placement": 87,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "aefdf0f5050b447ca04ad69136d5ed69",
  "placement": 87,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "aefdf0f5050b447ca04ad69136d5ed69",
  "placement": 60,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 47,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 84,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "ac8c911d09084b56b289ad38486041b4",
  "placement": 85,
  "time_alive": 249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "f26fc8b5fd064144b3525a4608029259",
  "placement": 74,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "f26fc8b5fd064144b3525a4608029259",
  "placement": 82,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "f26fc8b5fd064144b3525a4608029259",
  "placement": 53,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "f26fc8b5fd064144b3525a4608029259",
  "placement": 82,
  "time_alive": 360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "f26fc8b5fd064144b3525a4608029259",
  "placement": 79,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "f26fc8b5fd064144b3525a4608029259",
  "placement": 67,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "9055ea7aead74eed9151a7dc28bf704b",
  "placement": 56,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "9055ea7aead74eed9151a7dc28bf704b",
  "placement": 73,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "9055ea7aead74eed9151a7dc28bf704b",
  "placement": 65,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "9055ea7aead74eed9151a7dc28bf704b",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "9055ea7aead74eed9151a7dc28bf704b",
  "placement": 58,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "9055ea7aead74eed9151a7dc28bf704b",
  "placement": 77,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "20718351c2684b1e8278eecbc88d0631",
  "placement": 76,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "20718351c2684b1e8278eecbc88d0631",
  "placement": 85,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "20718351c2684b1e8278eecbc88d0631",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "20718351c2684b1e8278eecbc88d0631",
  "placement": 88,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "20718351c2684b1e8278eecbc88d0631",
  "placement": 92,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "20718351c2684b1e8278eecbc88d0631",
  "placement": 55,
  "time_alive": 904,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 59,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 58,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 90,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f20d4e4-a6d5-4b1e-be84-12441c1d7138",
  "team_id": "8cf0b5bd3adc438b903b3364d454fa41",
  "placement": 94,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b0c6845-c8cd-4b32-94dd-462aea5aebc5",
  "team_id": "8cf0b5bd3adc438b903b3364d454fa41",
  "placement": 80,
  "time_alive": 565,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0127d1a4-13b8-4ace-b3a0-fb7377474085",
  "team_id": "8cf0b5bd3adc438b903b3364d454fa41",
  "placement": 94,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05d4959b-fb38-4798-86c3-5b75359ec60a",
  "team_id": "8cf0b5bd3adc438b903b3364d454fa41",
  "placement": 68,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00c2980e-8987-43e2-a59b-efa448f012c1",
  "team_id": "8cf0b5bd3adc438b903b3364d454fa41",
  "placement": 77,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067d2c72-08d8-48c9-8e5c-4b1273413f8c",
  "team_id": "8cf0b5bd3adc438b903b3364d454fa41",
  "placement": 90,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 60,
  "time_alive": 1128,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 8,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 1,
  "time_alive": 1550,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "e7a1ec8965a749689b51dbca97c07042",
  "placement": 3,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 29,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 7,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 7,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 9,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 4,
  "time_alive": 1533,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 15,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 1,
  "time_alive": 1529,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 38,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 37,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 8,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 22,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "25961545eb234080830cbb4ad3b98566",
  "placement": 26,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 20,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 88,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 12,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 24,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 5,
  "time_alive": 1508,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 10,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 14,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 27,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 4,
  "time_alive": 1542,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 12,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 2,
  "time_alive": 1525,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 10,
  "time_alive": 1456,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 1,
  "time_alive": 1551,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 26,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 41,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 32,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 7,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 2,
  "time_alive": 1551,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 49,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 6,
  "time_alive": 1495,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 62,
  "time_alive": 835,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9",
  "placement": 60,
  "time_alive": 951,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 26,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 17,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 38,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 28,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 10,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 8,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 37,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 25,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 5,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 43,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 8,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 18,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 52,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 6,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 6,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 2,
  "time_alive": 1557,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 18,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 86,
  "time_alive": 176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 12,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 10,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 19,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 75,
  "time_alive": 543,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 12,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 22,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 36,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 39,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 74,
  "time_alive": 594,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 56,
  "time_alive": 1070,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 1,
  "time_alive": 1525,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 25,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 10,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 2,
  "time_alive": 1559,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 38,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 21,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 90,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 4,
  "time_alive": 1510,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 54,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 1,
  "time_alive": 1557,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 27,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 92,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 9,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 5,
  "time_alive": 1515,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 93,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 25,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 66,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 34,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 30,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 9,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 3,
  "time_alive": 1558,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 22,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 25,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 59,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 6,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 24,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 48,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 18,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 19,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "45bc9aaac5884a46a24a7515e9a080e6",
  "placement": 14,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 49,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 20,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 25,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 66,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 63,
  "time_alive": 722,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "e7f97e7c64834303ad533b5418b748cc",
  "placement": 4,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 2,
  "time_alive": 1529,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 4,
  "time_alive": 1525,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 64,
  "time_alive": 991,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 90,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 60,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 61,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 55,
  "time_alive": 1184,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 14,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 62,
  "time_alive": 1030,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 10,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 72,
  "time_alive": 565,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 22,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 38,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 18,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 43,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 79,
  "time_alive": 414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 16,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 5,
  "time_alive": 1500,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 57,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 86,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 9,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 5,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 42,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "1d36774ca7034b7f891e1156097e8380",
  "placement": 20,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 15,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 13,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 71,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 9,
  "time_alive": 1480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 51,
  "time_alive": 1077,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 23,
  "time_alive": 1385,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 11,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 50,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 50,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 47,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "578bbd7a85734e97a1db3367c04ae2d6",
  "placement": 36,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 33,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 65,
  "time_alive": 1007,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 56,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 7,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 49,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 23,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 32,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 16,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 34,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 27,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 23,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "9a8e6f48464e48a2b0cfb6d7911b7686",
  "placement": 44,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 61,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 26,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 47,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 12,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 61,
  "time_alive": 1030,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 7,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 74,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 47,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 16,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 23,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 32,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "85a847056ee54dd594c149799431e1f9",
  "placement": 6,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 78,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 69,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 51,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 4,
  "time_alive": 1531,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 14,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 43,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "f9f06786b69244298a8777d4f4dbe639",
  "placement": 64,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "f9f06786b69244298a8777d4f4dbe639",
  "placement": 54,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "f9f06786b69244298a8777d4f4dbe639",
  "placement": 81,
  "time_alive": 443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "f9f06786b69244298a8777d4f4dbe639",
  "placement": 3,
  "time_alive": 1552,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "f9f06786b69244298a8777d4f4dbe639",
  "placement": 15,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "f9f06786b69244298a8777d4f4dbe639",
  "placement": 50,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 35,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 35,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 22,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 29,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 58,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 19,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 27,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 49,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 68,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 13,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 45,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 16,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 17,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 66,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 14,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 28,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 28,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "ada0452ee66c49c0b285b1d609a93231",
  "placement": 39,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "ada0452ee66c49c0b285b1d609a93231",
  "placement": 41,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "ada0452ee66c49c0b285b1d609a93231",
  "placement": 15,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "ada0452ee66c49c0b285b1d609a93231",
  "placement": 83,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "ada0452ee66c49c0b285b1d609a93231",
  "placement": 17,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "ada0452ee66c49c0b285b1d609a93231",
  "placement": 25,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 3,
  "time_alive": 1523,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 21,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 44,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 50,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 37,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 62,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 80,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 31,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 11,
  "time_alive": 1459,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 26,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 73,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 83,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 94,
  "time_alive": 137,
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
    