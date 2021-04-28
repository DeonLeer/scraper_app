const axios = require('axios')
const games = {
 "6fa54062-4145-45dd-8282-765abc93a0c7": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "winners": [
   "Eclipsae"
  ],
  "time": "2020-05-24T23:45:13.171",
  "duration": 1413,
  "mode": 1
 },
 "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "winners": [
   "G2 Jаhq"
  ],
  "time": "2020-05-24T23:15:13.959",
  "duration": 1379,
  "mode": 1
 },
 "50626efe-dcd4-4d74-b319-82f2820c2977": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "winners": [
   "Liquid STREMON"
  ],
  "time": "2020-05-24T22:45:10.415",
  "duration": 1361,
  "mode": 1
 },
 "71b69a61-4dd6-4b4f-bd36-6dac9e315be0": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "winners": [
   "OA Whofishy"
  ],
  "time": "2020-05-24T22:15:13.324",
  "duration": 1471,
  "mode": 1
 },
 "932146b8-3801-440a-a3bd-7c2e107f08bf": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "winners": [
   "NRG ZAYT"
  ],
  "time": "2020-05-24T21:45:11.986",
  "duration": 1374,
  "mode": 1
 },
 "2ef76643-13d8-418c-aeac-9bfa248390f9": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAE_Week3",
  "winners": [
   "XTRA Alliege alv"
  ],
  "time": "2020-05-24T21:15:13.043",
  "duration": 1440,
  "mode": 1
 },
 "323657b5-179a-4979-80d5-e3d3413b83ad": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "winners": [
   "GUILD Flikk"
  ],
  "time": "2020-05-24T19:45:14.509",
  "duration": 1370,
  "mode": 1
 },
 "0d1c03ac-1471-4731-b231-8eabb077e5df": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "winners": [
   "LootBoy QueasKun"
  ],
  "time": "2020-05-24T19:15:12.92",
  "duration": 1430,
  "mode": 1
 },
 "3aa3941e-3603-42e3-be93-c3df1b9e53b7": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "winners": [
   "Skagen."
  ],
  "time": "2020-05-24T18:45:14.42",
  "duration": 1459,
  "mode": 1
 },
 "2432f52a-caec-487d-9338-20d0c17c3cae": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "winners": [
   "GUILD JаnnisZ"
  ],
  "time": "2020-05-24T18:15:11.905",
  "duration": 1506,
  "mode": 1
 },
 "06fbe42f-8384-4f96-8622-d0e0b84dc40a": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "winners": [
   "Gamma Th0masHD"
  ],
  "time": "2020-05-24T17:45:11.574",
  "duration": 1487,
  "mode": 1
 },
 "01e9ae6d-2b0f-4253-a940-927a0ca9fc38": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_EU_Week3",
  "winners": [
   "COOLER aqua"
  ],
  "time": "2020-05-24T17:15:10.479",
  "duration": 1435,
  "mode": 1
 },
 "1722541e-58a7-424f-903b-60c8f0d9efa8": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "winners": [
   "LitzinioGames09"
  ],
  "time": "2020-05-25T02:45:14.57",
  "duration": 1428,
  "mode": 1
 },
 "3387b8ac-caff-40fa-a15f-7bc036f0c65e": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "winners": [
   "5G Kewl"
  ],
  "time": "2020-05-25T02:15:13.487",
  "duration": 1454,
  "mode": 1
 },
 "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "winners": [
   "TEMPLE B"
  ],
  "time": "2020-05-25T01:45:13.314",
  "duration": 1397,
  "mode": 1
 },
 "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "winners": [
   "TurtleTavern"
  ],
  "time": "2020-05-25T01:15:13.825",
  "duration": 1379,
  "mode": 1
 },
 "13193aed-172b-4e28-98ec-1e819dc7d77b": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "winners": [
   "Kytrex"
  ],
  "time": "2020-05-25T00:45:15.007",
  "duration": 1378,
  "mode": 1
 },
 "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_NAW_Week3",
  "winners": [
   "Devour Sake"
  ],
  "time": "2020-05-25T00:15:13.483",
  "duration": 1473,
  "mode": 1
 },
 "364fcc74-ef6b-444a-bdf7-53b481e43230": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "winners": [
   "GW_Buyuriru"
  ],
  "time": "2020-05-24T10:45:13.595",
  "duration": 1377,
  "mode": 1
 },
 "1539ae26-9c6e-4bdd-a842-56757c41b9c4": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "winners": [
   "SVN Chipson"
  ],
  "time": "2020-05-24T10:15:11.534",
  "duration": 1438,
  "mode": 1
 },
 "1293c0c0-cc3d-4593-ae09-1a9b698dffd2": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "winners": [
   "peterpan ay лол"
  ],
  "time": "2020-05-24T09:45:13.026",
  "duration": 1475,
  "mode": 1
 },
 "90dffc85-c128-459a-a3ac-4fea2451bad3": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "winners": [
   "GOL.D.RОGER"
  ],
  "time": "2020-05-24T09:15:12.91",
  "duration": 1456,
  "mode": 1
 },
 "7251fcdf-fc20-41ef-95f5-0d0d72f94d65": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "winners": [
   "Liamy ."
  ],
  "time": "2020-05-24T08:45:12.556",
  "duration": 1477,
  "mode": 1
 },
 "b3b6d813-1048-47c7-a15b-312eae0b0c87": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ASIA_Week3",
  "winners": [
   "A2 FNCS８位"
  ],
  "time": "2020-05-24T08:15:13",
  "duration": 1502,
  "mode": 1
 },
 "40ae8af4-f7df-4ba1-be46-bbf8abe16d8d": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "winners": [
   "Noble Diamondd"
  ],
  "time": "2020-05-24T21:45:13.629",
  "duration": 1368,
  "mode": 1
 },
 "18e5004d-af23-45bd-bccb-94823f725f52": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "winners": [
   "Gabrielh99 L2 L2"
  ],
  "time": "2020-05-24T21:15:15.314",
  "duration": 1402,
  "mode": 1
 },
 "a2584546-ed06-4d5b-8b91-19892a333ded": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-05-24T20:45:14.007",
  "duration": 1375,
  "mode": 1
 },
 "400e2c20-4a37-495d-bca4-7820d27b519f": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "winners": [
   "9z H4wwk"
  ],
  "time": "2020-05-24T20:15:17.037",
  "duration": 1474,
  "mode": 1
 },
 "0f17f607-e7d2-4bb3-99d7-8519f01b4a62": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "winners": [
   "9z FiѕhyL2R2"
  ],
  "time": "2020-05-24T19:45:15.408",
  "duration": 1432,
  "mode": 1
 },
 "2f1ed5df-1212-42d7-bdf0-d3c09f610f54": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_BR_Week3",
  "winners": [
   "тısora iwnl"
  ],
  "time": "2020-05-24T19:15:14.747",
  "duration": 1471,
  "mode": 1
 },
 "021213ec-0d6a-4d98-a07d-665f1f016640": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "Bолк 7меd メ"
  ],
  "time": "2020-05-23T21:45:13.284",
  "duration": 1380,
  "mode": 1
 },
 "05c8a763-3cce-43b7-bdb0-9c96f47aef8b": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "SAQR QnDx"
  ],
  "time": "2020-05-23T21:15:13.189",
  "duration": 1434,
  "mode": 1
 },
 "18357be0-d225-4501-a570-bd0818e06218": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "Falcon KiritoKun"
  ],
  "time": "2020-05-23T20:45:13.555",
  "duration": 1410,
  "mode": 1
 },
 "17414d31-883a-46b6-b0e9-2d32dd421789": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "Ноwll"
  ],
  "time": "2020-05-23T20:15:13.463",
  "duration": 1428,
  "mode": 1
 },
 "0d59684f-3f4b-4856-b77e-45673853f412": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "SAQR Unіt"
  ],
  "time": "2020-05-23T19:45:13.761",
  "duration": 1497,
  "mode": 1
 },
 "1348d765-595f-41a6-9ecc-a95bea2024a8": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "SAQR QnDx"
  ],
  "time": "2020-05-23T19:15:14.019",
  "duration": 1455,
  "mode": 1
 },
 "494e2b20-51a9-49c6-aae0-ede0ba30f374": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_ME_Week3",
  "winners": [
   "SAQR Souriаnо"
  ],
  "time": "2020-05-22T22:40:46",
  "duration": 1461,
  "mode": 1
 },
 "8fe432b8-1a39-4ad5-9dc4-686dc3d48375": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "winners": [
   "Tsunami xo"
  ],
  "time": "2020-05-24T08:45:13.583",
  "duration": 1393,
  "mode": 1
 },
 "c91d9afe-a514-480e-8a54-aa51469c4fe3": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "winners": [
   "PRDX Oatley"
  ],
  "time": "2020-05-24T08:15:14.78",
  "duration": 1386,
  "mode": 1
 },
 "065c2c0a-eed3-4a5c-89e1-d97df23afeb2": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "winners": [
   "demon mode x"
  ],
  "time": "2020-05-24T07:45:14.333",
  "duration": 1425,
  "mode": 1
 },
 "021fbc40-686f-4697-a71e-f26311eeb190": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "winners": [
   "zoreh 4pf"
  ],
  "time": "2020-05-24T07:15:14.47",
  "duration": 1405,
  "mode": 1
 },
 "0cb08a0d-bf9b-4358-8fc9-58e47fd7e874": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "winners": [
   "finbarson"
  ],
  "time": "2020-05-24T06:45:13.04",
  "duration": 1457,
  "mode": 1
 },
 "1adcf4f3-1404-4381-bff7-6678ea67c927": {
  "tournamentID": "epicgames_S12_FNCS_Invitational_OCE_Week3",
  "winners": [
   "sYnAf"
  ],
  "time": "2020-05-24T06:15:14.546",
  "duration": 1482,
  "mode": 1
 },
 "115fc721-dfd9-468e-9c53-e7463598a46b": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "Aperta_"
  ],
  "time": "2020-07-20T01:55:11.148",
  "duration": 1509,
  "mode": 1
 },
 "0879066e-cb23-4d78-b523-1dfb7346ec72": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "G2 Smqcked"
  ],
  "time": "2020-07-20T01:15:11.591",
  "duration": 1493,
  "mode": 1
 },
 "0360744e-e5f3-4991-be8b-92360b380efd": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "KNG Nexy"
  ],
  "time": "2020-07-20T00:35:11.488",
  "duration": 1487,
  "mode": 1
 },
 "0971a668-dbda-4011-a73e-1161466f00a7": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "Кodi"
  ],
  "time": "2020-07-19T23:55:11.235",
  "duration": 1494,
  "mode": 1
 },
 "05f97b2e-c9de-4328-a2b4-9d6cea8b103f": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "Fryst C9"
  ],
  "time": "2020-07-19T23:15:09.893",
  "duration": 1516,
  "mode": 1
 },
 "0a561808-c3a6-4d01-af2f-d613407a8963": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "Cеicе"
  ],
  "time": "2020-07-19T22:35:16.158",
  "duration": 1506,
  "mode": 1
 },
 "048796f6-4d87-4e89-9d78-a613c1b54883": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "FаZe Dubs ϟ"
  ],
  "time": "2020-07-19T21:55:10.202",
  "duration": 1530,
  "mode": 1
 },
 "02dd8bf0-3ef4-41ea-a94b-dbb24c4b1baf": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAE_Finals",
  "winners": [
   "XPRT roqz"
  ],
  "time": "2020-07-19T21:15:11.624",
  "duration": 1516,
  "mode": 1
 },
 "0683f2ae-719f-442a-9a5c-a17ee00b9d51": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "winners": [
   "Cоmmandment"
  ],
  "time": "2020-08-22T04:35:09.9",
  "duration": 1523,
  "mode": 1
 },
 "051a9e1e-9f8d-43dd-8166-4e1b8a248122": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "winners": [
   "TNA ZUM"
  ],
  "time": "2020-08-22T03:55:13.121",
  "duration": 1508,
  "mode": 1
 },
 "01b5c798-3b8d-4f50-9bbf-c66c3260f1ec": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "winners": [
   "Justicе."
  ],
  "time": "2020-08-22T03:15:07.73",
  "duration": 1516,
  "mode": 1
 },
 "04809d3f-ebab-4444-b536-ab8a1c1f1c92": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "winners": [
   "SEN BUGHA 父"
  ],
  "time": "2020-08-22T02:35:13.337",
  "duration": 1513,
  "mode": 1
 },
 "032c481b-2c0b-4b5b-8106-7e1a1c854f6c": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "winners": [
   "Ghost Аѕsаult"
  ],
  "time": "2020-08-22T01:55:10.915",
  "duration": 1543,
  "mode": 1
 },
 "06d7dfa3-c6c8-42d8-95eb-851eb0b089f2": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAE_Finals",
  "winners": [
   "Zûky"
  ],
  "time": "2020-08-22T01:15:13.054",
  "duration": 1532,
  "mode": 1
 },
 "101d724d-67c9-4ca8-8c02-03951bc2e0c4": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Twitch Trentman"
  ],
  "time": "2020-08-14T19:45:11.798",
  "duration": 1513,
  "mode": 1
 },
 "17d6ef46-0214-4349-8bec-462753d07df9": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "cobolt424"
  ],
  "time": "2020-08-14T19:15:12.279",
  "duration": 1523,
  "mode": 1
 },
 "01b9cde0-ff6f-4834-8c5a-a87cfa6c5c3f": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "ENDLESS TRAGIX"
  ],
  "time": "2020-08-14T18:45:12.355",
  "duration": 1523,
  "mode": 1
 },
 "0b305dad-4a04-471d-9d69-62de232e7334": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "A1 Silverback"
  ],
  "time": "2020-08-14T18:15:12.242",
  "duration": 1527,
  "mode": 1
 },
 "078d0966-a682-4de9-a38a-84a76b1f0947": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "baby binky"
  ],
  "time": "2020-08-14T17:45:10.477",
  "duration": 1548,
  "mode": 1
 },
 "04a9bc25-7c4c-45bd-ae5e-c75d48edec7a": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "TNA Till"
  ],
  "time": "2020-08-14T17:15:10.287",
  "duration": 1537,
  "mode": 1
 },
 "0fc3ee53-f6fe-4edc-bdec-7f291d5b28d2": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "winners": [
   "whitehat is cool"
  ],
  "time": "2020-08-02T00:45:07.973",
  "duration": 1528,
  "mode": 1
 },
 "00abbb53-7624-4211-8bf1-d2f2cdb6eeb9": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "winners": [
   "ENDLESS pgod"
  ],
  "time": "2020-08-02T00:15:08.792",
  "duration": 1543,
  "mode": 1
 },
 "02ecff28-0d69-44b4-9569-db6a6881bf6a": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "winners": [
   "BBG Bucke"
  ],
  "time": "2020-08-01T23:45:07.46",
  "duration": 1548,
  "mode": 1
 },
 "01eb5c8b-e74d-4ba1-91b7-cb87fa9bf1a4": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "winners": [
   "Akella Jayth"
  ],
  "time": "2020-08-01T23:15:07.998",
  "duration": 1538,
  "mode": 1
 },
 "03173965-6614-4241-87de-fc605cd9820c": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "winners": [
   "Elite Neeqo"
  ],
  "time": "2020-08-01T22:45:07.708",
  "duration": 1551,
  "mode": 1
 },
 "067be990-ef49-4bc4-b48e-bd72a7a81789": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier1_PC",
  "winners": [
   "Ѕteelzy"
  ],
  "time": "2020-08-01T22:15:07.758",
  "duration": 1548,
  "mode": 1
 },
 "03fe7e8b-7584-48f0-a8b3-370b8cff76c4": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "XPRT roqz"
  ],
  "time": "2020-08-14T23:45:11.212",
  "duration": 1501,
  "mode": 1
 },
 "0227bfcb-870b-4b76-af15-9b333f3f4f56": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Juzoski"
  ],
  "time": "2020-08-14T23:15:11.336",
  "duration": 1533,
  "mode": 1
 },
 "0d617fd5-0668-4c07-8248-4c15b07cb1fa": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "TMP Hajie"
  ],
  "time": "2020-08-14T22:45:11.365",
  "duration": 1526,
  "mode": 1
 },
 "093b8e35-ba94-49ec-ba39-1bd0e729d3bd": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Кodi"
  ],
  "time": "2020-08-14T22:15:12.198",
  "duration": 1519,
  "mode": 1
 },
 "075c2cbf-502c-4e82-81fa-96facc0d7e6e": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Spayde OT"
  ],
  "time": "2020-08-14T21:45:12.581",
  "duration": 1519,
  "mode": 1
 },
 "00836f73-2f4a-4862-a3f4-6f2d223fcd8b": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Cаzz"
  ],
  "time": "2020-08-14T21:15:11.288",
  "duration": 1525,
  "mode": 1
 },
 "06819581-6a61-4dc3-ae16-fb0166fd628d": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "winners": [
   "Kjrop"
  ],
  "time": "2020-08-03T00:45:11.17",
  "duration": 1513,
  "mode": 1
 },
 "099736b5-80c3-4673-bb43-12e76fe15c8d": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "winners": [
   "1P Acornski"
  ],
  "time": "2020-08-03T00:15:09.757",
  "duration": 1534,
  "mode": 1
 },
 "07b21f87-4373-45b9-94ed-c6a8f64db36c": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "winners": [
   "GC daxor"
  ],
  "time": "2020-08-02T23:45:11.498",
  "duration": 1491,
  "mode": 1
 },
 "07884c34-0dfb-4324-b5da-c5d623819f63": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "winners": [
   "Felix - -"
  ],
  "time": "2020-08-02T23:15:10.827",
  "duration": 1518,
  "mode": 1
 },
 "0c20f48f-fad5-48ac-ae2b-fced2f59db22": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "winners": [
   "BBG PIECE POLICE"
  ],
  "time": "2020-08-02T22:45:10.921",
  "duration": 1523,
  "mode": 1
 },
 "14a4e574-61d1-4618-ab33-16d275acec2c": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier2_PC",
  "winners": [
   "Xen Kiox"
  ],
  "time": "2020-08-02T22:15:11.106",
  "duration": 1535,
  "mode": 1
 },
 "09229993-d492-4555-a3aa-a42f075ff2bf": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "KNG Nexy"
  ],
  "time": "2020-08-15T19:45:15.136",
  "duration": 1500,
  "mode": 1
 },
 "029f26b7-1d12-47be-8952-b3434daa5bbb": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "cozhies ψ"
  ],
  "time": "2020-08-15T19:15:14.451",
  "duration": 1501,
  "mode": 1
 },
 "075cb93a-23cf-4bc2-a164-7f04054864fe": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "ENDLESS Reverse"
  ],
  "time": "2020-08-15T18:45:14.345",
  "duration": 1492,
  "mode": 1
 },
 "06e8561a-fe65-4e02-9750-b92fa6569266": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "TNA ZLEM 3939"
  ],
  "time": "2020-08-15T18:15:12.703",
  "duration": 1530,
  "mode": 1
 },
 "02da31bf-122c-43b4-b9b3-0a954c9dadc0": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "FS Bυlly"
  ],
  "time": "2020-08-15T17:45:14.638",
  "duration": 1523,
  "mode": 1
 },
 "02d978fa-ef12-4f0d-bbd5-090a3e16086b": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Thiccboy Luneze"
  ],
  "time": "2020-08-15T17:15:12.029",
  "duration": 1506,
  "mode": 1
 },
 "00da90a8-f85f-463b-87d6-79db2a0e828c": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "winners": [
   "XTRA Furiouѕ"
  ],
  "time": "2020-08-09T00:45:10.847",
  "duration": 1498,
  "mode": 1
 },
 "019500a8-c4ab-45b9-87c3-a170dc7ef0aa": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "winners": [
   "BBG Calc"
  ],
  "time": "2020-08-09T00:15:09.95",
  "duration": 1540,
  "mode": 1
 },
 "03106060-f61e-444a-ad2c-159e2b4341a9": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "winners": [
   "AKA Swaysuo yt"
  ],
  "time": "2020-08-08T23:45:11.787",
  "duration": 1528,
  "mode": 1
 },
 "116322b7-fd6d-4846-b97f-2c24d03f3960": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "winners": [
   "Liquid STREMON"
  ],
  "time": "2020-08-08T23:15:11.952",
  "duration": 1546,
  "mode": 1
 },
 "01c647ee-8208-48ce-9ada-428c54dd8756": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "winners": [
   "ENDL8SS DEYYRITO"
  ],
  "time": "2020-08-08T22:45:11.567",
  "duration": 1532,
  "mode": 1
 },
 "01241e91-1423-43e1-a6c7-25fe8b2dd817": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier3_PC",
  "winners": [
   "ENDLESS Reverse"
  ],
  "time": "2020-08-08T22:15:09.756",
  "duration": 1536,
  "mode": 1
 },
 "064f7e54-be4c-4360-9dd1-6aef89a8ed8f": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "LG Slackes"
  ],
  "time": "2020-08-15T23:45:12.647",
  "duration": 1510,
  "mode": 1
 },
 "024702d2-b820-47fc-baaa-50a3d22e8cdb": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Bweis."
  ],
  "time": "2020-08-15T23:15:13.062",
  "duration": 1518,
  "mode": 1
 },
 "03e06782-7812-40ca-98df-5124d2fc3d1f": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Pxlarized"
  ],
  "time": "2020-08-15T22:45:12.693",
  "duration": 1494,
  "mode": 1
 },
 "03b5fd5f-723f-45fc-a6e9-d124ea123cc3": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "XSET Shark"
  ],
  "time": "2020-08-15T22:15:13.68",
  "duration": 1508,
  "mode": 1
 },
 "09f2d4b1-0a8d-42d6-b342-478394e17a2f": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "BBG Calc"
  ],
  "time": "2020-08-15T21:45:13.995",
  "duration": 1501,
  "mode": 1
 },
 "064f45c3-565b-4d93-9bbe-75e4c2f3c49b": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "A1 Ace1xx 〆"
  ],
  "time": "2020-08-15T21:15:13.489",
  "duration": 1488,
  "mode": 1
 },
 "0043de7f-79e7-4b1f-8c0c-3382e8c013d4": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "winners": [
   "Mooney ."
  ],
  "time": "2020-08-10T00:45:14.476",
  "duration": 1518,
  "mode": 1
 },
 "04b6fb4f-2234-471d-8c62-dffd92d28cdf": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "winners": [
   "fearfll"
  ],
  "time": "2020-08-10T00:15:14.171",
  "duration": 1482,
  "mode": 1
 },
 "03d71f1a-ee4c-4051-a0a7-fa246cd8da19": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "winners": [
   "NRG ZAYT"
  ],
  "time": "2020-08-09T23:45:12.781",
  "duration": 1506,
  "mode": 1
 },
 "07501c57-667c-4478-92f1-1936a4a1abe8": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "winners": [
   "NRG СІіх"
  ],
  "time": "2020-08-09T23:15:14.105",
  "duration": 1537,
  "mode": 1
 },
 "14d01cc8-df6a-4d3d-ab72-3eb450bffc62": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "winners": [
   "mero2k"
  ],
  "time": "2020-08-09T22:45:19.673",
  "duration": 1522,
  "mode": 1
 },
 "02b46e95-24b0-4150-bddb-ac28c533a3e6": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Qualifier4_PC",
  "winners": [
   "Reeloads"
  ],
  "time": "2020-08-09T22:15:14.724",
  "duration": 1499,
  "mode": 1
 },
 "0a36568b-b6a9-4568-a6e5-e170efc1280f": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "FS Bυlly"
  ],
  "time": "2020-08-16T23:45:15.001",
  "duration": 1512,
  "mode": 1
 },
 "0cf29cf0-c199-41f3-a31d-38902da7dc1f": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "DumplingGod007"
  ],
  "time": "2020-08-16T23:15:14.236",
  "duration": 1524,
  "mode": 1
 },
 "04717565-06d4-492c-ab49-d45cfbd449d4": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Xen Kiox"
  ],
  "time": "2020-08-16T22:45:13.016",
  "duration": 1526,
  "mode": 1
 },
 "01ea3ba9-aad8-4186-9957-482dfa613ee2": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Klaѕѕ"
  ],
  "time": "2020-08-16T22:15:13.751",
  "duration": 1490,
  "mode": 1
 },
 "0b72a1ab-1628-49c1-ac87-f989919f5ad5": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "DeRoller."
  ],
  "time": "2020-08-16T21:45:14.356",
  "duration": 1508,
  "mode": 1
 },
 "0b94d28a-fffc-4e11-9353-f1f4a9ca41aa": {
  "tournamentID": "epicgames_S13_FNCS_NAE_Finals_PC",
  "winners": [
   "Ghоst Blаke"
  ],
  "time": "2020-08-16T21:15:14.103",
  "duration": 1487,
  "mode": 1
 },
 "10071aeb-a5c2-4e54-9de2-16f42aa8ec37": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "Refsgaard 7"
  ],
  "time": "2020-07-19T19:55:11.968",
  "duration": 1517,
  "mode": 1
 },
 "0d88526a-cdf8-416d-90c2-e4a66c1246aa": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "BL Noahreyli ӝ"
  ],
  "time": "2020-07-19T19:15:10.528",
  "duration": 1493,
  "mode": 1
 },
 "06575a44-f70b-4293-86ad-c77774e6f517": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "Gamma Merijn"
  ],
  "time": "2020-07-19T18:35:11.301",
  "duration": 1515,
  "mode": 1
 },
 "048b60dc-7878-4493-8924-ebf2ad07eeaf": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "Lnuef"
  ],
  "time": "2020-07-19T17:55:11.218",
  "duration": 1537,
  "mode": 1
 },
 "07736870-5990-48ec-9607-3ae3886a96a9": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "Gamma Kami"
  ],
  "time": "2020-07-19T17:15:11.12",
  "duration": 1525,
  "mode": 1
 },
 "0303850e-3dcc-46c6-b7c6-c1f8e016ad53": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "GXR teeq"
  ],
  "time": "2020-07-19T16:35:10.687",
  "duration": 1477,
  "mode": 1
 },
 "032a95ca-2771-4555-acff-3424df9b8ceb": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "GUILD Аnas"
  ],
  "time": "2020-07-19T15:55:10.525",
  "duration": 1528,
  "mode": 1
 },
 "0c53f9d9-76f0-4225-87ec-1ace437d41d7": {
  "tournamentID": "epicgames_S13_Dreamhack_July_EU_Finals",
  "winners": [
   "ELITE SEBBY7"
  ],
  "time": "2020-07-19T15:15:10.522",
  "duration": 1484,
  "mode": 1
 },
 "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e": {
  "tournamentID": "epicgames_S13_Dreamhack_August_EU_Finals",
  "winners": [
   "Esтy"
  ],
  "time": "2020-08-23T22:35:15.661",
  "duration": 1509,
  "mode": 1
 },
 "00b90537-80f6-49ea-8be2-01e071df1c66": {
  "tournamentID": "epicgames_S13_Dreamhack_August_EU_Finals",
  "winners": [
   "eg0p1ayer.BDS"
  ],
  "time": "2020-08-23T21:55:11.503",
  "duration": 1514,
  "mode": 1
 },
 "035f6250-dd0a-42a0-ba39-1f7a6cfd8142": {
  "tournamentID": "epicgames_S13_Dreamhack_August_EU_Finals",
  "winners": [
   "Refsgaard 7"
  ],
  "time": "2020-08-23T21:15:14.518",
  "duration": 1487,
  "mode": 1
 },
 "01fbf803-b351-46bc-b9e2-fd4b165d9540": {
  "tournamentID": "epicgames_S13_Dreamhack_August_EU_Finals",
  "winners": [
   "TRICKED Caspersa"
  ],
  "time": "2020-08-23T20:35:16.626",
  "duration": 1530,
  "mode": 1
 },
 "00365b18-16b5-4f14-9b98-738b596a6e62": {
  "tournamentID": "epicgames_S13_Dreamhack_August_EU_Finals",
  "winners": [
   "BLM RLluka"
  ],
  "time": "2020-08-23T19:55:14.82",
  "duration": 1489,
  "mode": 1
 },
 "0225f10a-926f-4e6e-bf17-a5216c559a67": {
  "tournamentID": "epicgames_S13_Dreamhack_August_EU_Finals",
  "winners": [
   "FaZe Mongrааl"
  ],
  "time": "2020-08-23T19:15:14.463",
  "duration": 1522,
  "mode": 1
 },
 "05ba17bf-bb1c-496d-8390-51eebc877dcb": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "GameWard Antorak"
  ],
  "time": "2020-08-14T15:45:12.229",
  "duration": 1511,
  "mode": 1
 },
 "05e042fe-5126-459c-a3e4-41cab244caee": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "randomkidwhosbad"
  ],
  "time": "2020-08-14T15:15:12.371",
  "duration": 1514,
  "mode": 1
 },
 "02f8d168-a3f9-4f3b-be5e-8f163cf6c455": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Clement_ttt"
  ],
  "time": "2020-08-14T14:45:12.692",
  "duration": 1513,
  "mode": 1
 },
 "05675383-0d1d-4c57-967a-926855d7c198": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Wave advise"
  ],
  "time": "2020-08-14T14:15:12.49",
  "duration": 1534,
  "mode": 1
 },
 "0b569018-6ac5-42a0-900e-7a89aa83a4f3": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Hịde on bush"
  ],
  "time": "2020-08-14T13:45:12.847",
  "duration": 1514,
  "mode": 1
 },
 "05dc4381-df99-4105-aead-0dbe0442b844": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Flames FlowiS"
  ],
  "time": "2020-08-14T13:15:15.509",
  "duration": 1465,
  "mode": 1
 },
 "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "winners": [
   "AOS Vevi"
  ],
  "time": "2020-08-01T18:45:09.463",
  "duration": 1502,
  "mode": 1
 },
 "00e71644-4f59-4b30-814e-040bb5a5726d": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "winners": [
   "Gambit.letw1k3"
  ],
  "time": "2020-08-01T18:15:08.365",
  "duration": 1502,
  "mode": 1
 },
 "03a274a2-9a39-4ab4-9b79-e9ecbc271401": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "winners": [
   "GUILD Hen ӝ"
  ],
  "time": "2020-08-01T17:45:07.235",
  "duration": 1526,
  "mode": 1
 },
 "03c20f07-5846-4827-9299-5cd7e6d883cf": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "winners": [
   "FaZe Mongrааl"
  ],
  "time": "2020-08-01T17:15:07.73",
  "duration": 1536,
  "mode": 1
 },
 "0218b018-212e-4632-8741-435ba03a34cd": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "winners": [
   "rezon ay лол"
  ],
  "time": "2020-08-01T16:45:07.689",
  "duration": 1562,
  "mode": 1
 },
 "00bf74b3-8a65-409b-b025-eb6b765e7dbd": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier1_PC",
  "winners": [
   "Hịde on bush"
  ],
  "time": "2020-08-01T16:15:06.775",
  "duration": 1512,
  "mode": 1
 },
 "0bfc7c8c-bdfb-4ab0-b607-098f9f392dfb": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Monaco Froggy"
  ],
  "time": "2020-08-14T19:45:11.327",
  "duration": 1521,
  "mode": 1
 },
 "0983a359-5449-4833-813d-2700c402f31a": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Heretics K1nzеll"
  ],
  "time": "2020-08-14T19:15:13.302",
  "duration": 1530,
  "mode": 1
 },
 "0c732cf6-254b-4588-a4c6-906803db41bf": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Wave Kikoo"
  ],
  "time": "2020-08-14T18:45:12.885",
  "duration": 1503,
  "mode": 1
 },
 "094f2630-1486-4f2e-bee4-fd5f120c3dfa": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Wave Kikoo"
  ],
  "time": "2020-08-14T18:15:12.287",
  "duration": 1533,
  "mode": 1
 },
 "0da98ab3-c6a4-4789-b4b1-1cf27ba2c12c": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "GUILD TаySon"
  ],
  "time": "2020-08-14T17:45:11.734",
  "duration": 1524,
  "mode": 1
 },
 "0369fa50-0bbd-479d-ba5a-5218224c0580": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "GUILD TаySon"
  ],
  "time": "2020-08-14T17:15:12.26",
  "duration": 1496,
  "mode": 1
 },
 "02794cea-bfe3-4ac2-928b-895cc382bfa5": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "winners": [
   "NVD Skram"
  ],
  "time": "2020-08-02T18:45:12.471",
  "duration": 1539,
  "mode": 1
 },
 "0241257b-699f-4fcc-93ef-8508535ebd8f": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "winners": [
   "VP Siberiajkee"
  ],
  "time": "2020-08-02T18:15:08.527",
  "duration": 1546,
  "mode": 1
 },
 "036827af-c42b-4111-bd04-562933dbdf5f": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "winners": [
   "NaVi Putrick"
  ],
  "time": "2020-08-02T17:45:12.22",
  "duration": 1540,
  "mode": 1
 },
 "032398cc-1d3d-452a-add1-2d0f4627297a": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "winners": [
   "BL Edison"
  ],
  "time": "2020-08-02T17:15:11.921",
  "duration": 1544,
  "mode": 1
 },
 "04c5bda7-cc13-4182-a65d-15f644effa32": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "winners": [
   "Kartun ツ"
  ],
  "time": "2020-08-02T16:45:12.416",
  "duration": 1495,
  "mode": 1
 },
 "0b33adb7-ca6c-4f7e-9834-4224763073df": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier2_PC",
  "winners": [
   "Gambit Toose"
  ],
  "time": "2020-08-02T16:15:12.309",
  "duration": 1542,
  "mode": 1
 },
 "01729895-8eb6-4980-94e9-7a5d383d46fd": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "VP Siberiajkee"
  ],
  "time": "2020-08-15T15:45:09.759",
  "duration": 1521,
  "mode": 1
 },
 "046937ae-43f3-43aa-96d6-99c204e28401": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "xsweeze.mces"
  ],
  "time": "2020-08-15T15:15:08.951",
  "duration": 1521,
  "mode": 1
 },
 "0b861fb6-21c8-4e72-81d5-a39ae9309c1c": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "ELITE SEBBY7"
  ],
  "time": "2020-08-15T14:45:08.83",
  "duration": 1507,
  "mode": 1
 },
 "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "DualMedia Snipeツ"
  ],
  "time": "2020-08-15T14:15:09.782",
  "duration": 1538,
  "mode": 1
 },
 "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Monaco Kiraah"
  ],
  "time": "2020-08-15T13:45:09.971",
  "duration": 1558,
  "mode": 1
 },
 "09bb714d-66db-45b2-a47e-75bea51b99be": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Flames Elfred"
  ],
  "time": "2020-08-15T13:15:09.952",
  "duration": 1536,
  "mode": 1
 },
 "002c7acf-2c27-41f7-884b-224778aaf292": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "winners": [
   "TT9 Passivq"
  ],
  "time": "2020-08-08T18:45:12.495",
  "duration": 1519,
  "mode": 1
 },
 "018e2ae9-aa41-4e8c-8c23-91475a9004a4": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "winners": [
   "grizi nayte"
  ],
  "time": "2020-08-08T18:15:13.703",
  "duration": 1510,
  "mode": 1
 },
 "00cc4061-cdfd-471e-832b-25267b5d9bfd": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "winners": [
   "Gambit Toose"
  ],
  "time": "2020-08-08T17:45:14.624",
  "duration": 1497,
  "mode": 1
 },
 "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "winners": [
   "APL 404ROCKY"
  ],
  "time": "2020-08-08T17:15:14.443",
  "duration": 1522,
  "mode": 1
 },
 "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "winners": [
   "Gambit Toose"
  ],
  "time": "2020-08-08T16:45:12.976",
  "duration": 1542,
  "mode": 1
 },
 "015031c0-a48b-46eb-9489-7db3744b8e76": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier3_PC",
  "winners": [
   "Cyr0xV"
  ],
  "time": "2020-08-08T16:15:12.922",
  "duration": 1531,
  "mode": 1
 },
 "0514249a-ccff-49d9-b5f1-f9ac5fc450cf": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Gambit.letw1k3"
  ],
  "time": "2020-08-15T19:45:14.649",
  "duration": 1502,
  "mode": 1
 },
 "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "rezon ay лол"
  ],
  "time": "2020-08-15T19:15:14.449",
  "duration": 1502,
  "mode": 1
 },
 "0ce21bfd-867f-46e7-a821-5a584c090766": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "rezon ay лол"
  ],
  "time": "2020-08-15T18:45:15.368",
  "duration": 1507,
  "mode": 1
 },
 "0c71239c-1bdb-408b-a9c5-0646fa0f8905": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "BL Noahreyli ӝ"
  ],
  "time": "2020-08-15T18:15:14.524",
  "duration": 1473,
  "mode": 1
 },
 "0a2f407e-0210-4d25-87d9-060fbeab03b2": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "FaZe Mongrааl"
  ],
  "time": "2020-08-15T17:45:15.17",
  "duration": 1490,
  "mode": 1
 },
 "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Esтy"
  ],
  "time": "2020-08-15T17:15:15.273",
  "duration": 1504,
  "mode": 1
 },
 "03ec4acf-8238-4be5-934c-6e770ebc0fc3": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "winners": [
   "100T MrSavage"
  ],
  "time": "2020-08-09T18:45:14.756",
  "duration": 1528,
  "mode": 1
 },
 "03c09581-2531-4479-bd2c-6b0a09c3fe2f": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "winners": [
   "WYZIP"
  ],
  "time": "2020-08-09T18:15:15.362",
  "duration": 1472,
  "mode": 1
 },
 "080a77eb-8f86-466b-ae9e-396148ce7bed": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "winners": [
   "DizLown Kazu"
  ],
  "time": "2020-08-09T17:45:14.356",
  "duration": 1514,
  "mode": 1
 },
 "0e76f359-870a-4ea5-8a1e-06a64ae86f94": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "winners": [
   "LootBoy Slender"
  ],
  "time": "2020-08-09T17:15:13.92",
  "duration": 1488,
  "mode": 1
 },
 "09d8a0f6-2d6c-46c5-9349-5f99f659f75a": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "winners": [
   "Gamma Th0masHD"
  ],
  "time": "2020-08-09T16:45:14.211",
  "duration": 1431,
  "mode": 1
 },
 "03db5e57-1205-4765-8394-acdcd0a74a54": {
  "tournamentID": "epicgames_S13_FNCS_EU_Qualifier4_PC",
  "winners": [
   "Gamma Kami"
  ],
  "time": "2020-08-09T16:15:14.533",
  "duration": 1542,
  "mode": 1
 },
 "05e374c9-2fee-4090-b11c-5b0d2b5cbbee": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "T7K Ayar"
  ],
  "time": "2020-08-16T19:45:14.657",
  "duration": 1518,
  "mode": 1
 },
 "04b33697-4f67-4163-8a45-69cb7b94fbd0": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "GUILD TаySon"
  ],
  "time": "2020-08-16T19:15:14.356",
  "duration": 1505,
  "mode": 1
 },
 "03175d72-8b22-4aa7-9d3e-d52b2e8a45b3": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "LootBoy Slender"
  ],
  "time": "2020-08-16T18:45:13.967",
  "duration": 1510,
  "mode": 1
 },
 "04883c25-da1b-4fa2-848f-d0bfdd8a6fad": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "BL Raifla"
  ],
  "time": "2020-08-16T18:15:15.252",
  "duration": 1509,
  "mode": 1
 },
 "01c20baf-7548-42bf-9d5c-a786168e4c54": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "GUILD Аnas"
  ],
  "time": "2020-08-16T17:45:14.198",
  "duration": 1534,
  "mode": 1
 },
 "02c8ef88-b70b-4634-a8e2-70baeb289eb7": {
  "tournamentID": "epicgames_S13_FNCS_EU_Finals_PC",
  "winners": [
   "Flames FlowiS"
  ],
  "time": "2020-08-16T17:15:14.693",
  "duration": 1504,
  "mode": 1
 },
 "095d6613-6013-422c-80fc-573b6059e1b2": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "G2 Coop"
  ],
  "time": "2020-07-27T04:55:11.399",
  "duration": 1519,
  "mode": 1
 },
 "01229121-c97e-4d69-b9c3-9c7fb40cd536": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "XTRA MIDDISH"
  ],
  "time": "2020-07-27T04:15:12.084",
  "duration": 1514,
  "mode": 1
 },
 "02442ff1-4793-4787-827c-ff1ed107eb34": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "jayrosez"
  ],
  "time": "2020-07-27T03:35:10.752",
  "duration": 1539,
  "mode": 1
 },
 "02336ee0-8495-4fa7-b8a7-d1cda1ce5455": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "XTRA Furiouѕ"
  ],
  "time": "2020-07-27T02:55:12.486",
  "duration": 1524,
  "mode": 1
 },
 "074b7e84-53a1-4e20-95a6-d4d049cc97a1": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "wildfox."
  ],
  "time": "2020-07-27T02:15:12.607",
  "duration": 1506,
  "mode": 1
 },
 "05ac24e9-368d-4943-8277-38ec6124934a": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "1P Acornski"
  ],
  "time": "2020-07-27T01:35:12.484",
  "duration": 1507,
  "mode": 1
 },
 "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "NRG EpikWhale"
  ],
  "time": "2020-07-27T00:55:11.905",
  "duration": 1479,
  "mode": 1
 },
 "006ad139-90e3-47b8-8f4e-3d68bb6d485a": {
  "tournamentID": "epicgames_S13_Dreamhack_July_NAW_Finals",
  "winners": [
   "100T Arkhram."
  ],
  "time": "2020-07-27T00:15:12.429",
  "duration": 1508,
  "mode": 1
 },
 "02f0c17b-f57b-400c-8ad4-13c609922a33": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "winners": [
   "5G KADENOX"
  ],
  "time": "2020-08-08T07:35:15.032",
  "duration": 1509,
  "mode": 1
 },
 "07ae6877-fd8a-4157-86a9-19697c22e669": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "winners": [
   "WWG CoolPenguin"
  ],
  "time": "2020-08-08T06:55:15.446",
  "duration": 1515,
  "mode": 1
 },
 "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "winners": [
   "4DRStorm."
  ],
  "time": "2020-08-08T06:15:14.305",
  "duration": 1531,
  "mode": 1
 },
 "05707f12-3169-41dd-9e02-3f6350f55fc0": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "winners": [
   "ghost nanoo"
  ],
  "time": "2020-08-08T05:35:13.653",
  "duration": 1536,
  "mode": 1
 },
 "06a66152-fcf4-4f17-b6cb-cd86bb2adae3": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "winners": [
   "WWG CoolPenguin"
  ],
  "time": "2020-08-08T04:55:12.399",
  "duration": 1531,
  "mode": 1
 },
 "17676b42-5c09-4339-85c5-d2b3cbc36ef0": {
  "tournamentID": "epicgames_S13_Dreamhack_August_NAW_Finals",
  "winners": [
   "alexgοnzsoccer85"
  ],
  "time": "2020-08-08T04:15:14.007",
  "duration": 1524,
  "mode": 1
 },
 "043250c2-7383-43c4-9128-8746c33edb3c": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "SlayaNF"
  ],
  "time": "2020-08-14T22:45:12.227",
  "duration": 1538,
  "mode": 1
 },
 "063227a1-4c8a-482a-928f-b49da7f126d1": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Akella Maken"
  ],
  "time": "2020-08-14T22:15:12.356",
  "duration": 1545,
  "mode": 1
 },
 "142245f1-efa6-4266-8230-5d7adbbf02b3": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Akella Maken"
  ],
  "time": "2020-08-14T21:45:12.343",
  "duration": 1546,
  "mode": 1
 },
 "12540df7-22c5-4568-9f7d-e9b14ec12997": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Akella Maken"
  ],
  "time": "2020-08-14T21:15:12.475",
  "duration": 1532,
  "mode": 1
 },
 "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "5G Kewl"
  ],
  "time": "2020-08-14T20:45:11.626",
  "duration": 1492,
  "mode": 1
 },
 "0c560c11-5da7-4070-819b-cfc7622be7f2": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "good аim 0 brain"
  ],
  "time": "2020-08-14T20:15:11.814",
  "duration": 1524,
  "mode": 1
 },
 "01b803dd-c593-451f-bd47-f6e084789de8": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Hﱞitmarker"
  ],
  "time": "2020-08-15T02:45:11.367",
  "duration": 1515,
  "mode": 1
 },
 "050e23a2-af16-46fb-b5e7-4fe84e08805b": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "NRG EpikWhale"
  ],
  "time": "2020-08-15T02:15:12.018",
  "duration": 1505,
  "mode": 1
 },
 "1cfdc7d7-9c1a-4bf9-9bf7-baeb0d37effa": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "ZeroTwoTu"
  ],
  "time": "2020-08-15T01:45:12.089",
  "duration": 1507,
  "mode": 1
 },
 "06bc9eac-25eb-489b-9d56-fe4ac85ba996": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "domо."
  ],
  "time": "2020-08-15T01:15:12.391",
  "duration": 1526,
  "mode": 1
 },
 "0a5c3f7f-8d85-4c78-8b12-9b8b481da83b": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Reg on CREX"
  ],
  "time": "2020-08-15T00:45:11.672",
  "duration": 1509,
  "mode": 1
 },
 "062f5ef2-cd01-4ed7-a9f1-d5ee307708c1": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "NRG EpikWhale"
  ],
  "time": "2020-08-15T00:15:11.511",
  "duration": 1518,
  "mode": 1
 },
 "0aebc065-a743-43e1-a55e-ef95e2b7921e": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "LIТТLE B"
  ],
  "time": "2020-08-15T22:45:12.922",
  "duration": 1537,
  "mode": 1
 },
 "027c343c-aa6c-4c6f-87d6-f6a134337b1e": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Alclash"
  ],
  "time": "2020-08-15T22:15:14.252",
  "duration": 1530,
  "mode": 1
 },
 "14c75057-8e0e-4465-b212-4ad3a11e9bbd": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Lucish is bad"
  ],
  "time": "2020-08-15T21:45:13.468",
  "duration": 1516,
  "mode": 1
 },
 "11492e89-b27f-47f7-8d1d-b07571b6875a": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "5G tonystark"
  ],
  "time": "2020-08-15T21:15:13.644",
  "duration": 1509,
  "mode": 1
 },
 "0806fdbb-5358-4862-bb74-1772ddf39dc7": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "SINAX zZ"
  ],
  "time": "2020-08-15T20:45:13.466",
  "duration": 1504,
  "mode": 1
 },
 "0a7efe63-7c5a-4b6c-941d-f5daa56cd1ef": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "get pegged lol."
  ],
  "time": "2020-08-15T20:15:14.063",
  "duration": 1508,
  "mode": 1
 },
 "0e7672e6-70f4-49e8-bf0e-3bff1cf4d512": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "clg versace p"
  ],
  "time": "2020-08-16T02:45:13.98",
  "duration": 1494,
  "mode": 1
 },
 "0e60fc0a-74fe-4f6b-a9ce-f07681d99b0e": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "TRNL Hov"
  ],
  "time": "2020-08-16T02:15:13.505",
  "duration": 1528,
  "mode": 1
 },
 "0428896e-4291-42cc-873f-c9c747aa78c0": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "NorCal Frap."
  ],
  "time": "2020-08-16T01:45:14.252",
  "duration": 1530,
  "mode": 1
 },
 "05e2044e-5887-444d-b47a-120a2f9e6365": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "Mateоψ"
  ],
  "time": "2020-08-16T01:15:14.504",
  "duration": 1529,
  "mode": 1
 },
 "10e732c0-4378-4d3a-81aa-aa05da6709f1": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "alexgοnzsoccer85"
  ],
  "time": "2020-08-16T00:45:14.146",
  "duration": 1505,
  "mode": 1
 },
 "0a936625-0dc0-4385-b89b-5225e304e0ef": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "LOWGROUND KING7"
  ],
  "time": "2020-08-16T00:15:15.057",
  "duration": 1532,
  "mode": 1
 },
 "03e49bc1-8e05-46c5-bf20-4c052ecd261c": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "winners": [
   "bizqufan932"
  ],
  "time": "2020-08-03T03:45:11.889",
  "duration": 1518,
  "mode": 1
 },
 "06b35bc9-efe2-4340-a3b3-edf194198c11": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "winners": [
   "TRNL Lxdesman600"
  ],
  "time": "2020-08-03T03:15:07.485",
  "duration": 1534,
  "mode": 1
 },
 "088b1b59-750c-4713-b581-d836554a4178": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "winners": [
   "edgybtw"
  ],
  "time": "2020-08-03T02:45:10.834",
  "duration": 1505,
  "mode": 1
 },
 "03d75be4-f52c-49ac-b1b4-1b817aed4206": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "winners": [
   "LIТТLE B"
  ],
  "time": "2020-08-03T02:15:11.091",
  "duration": 1509,
  "mode": 1
 },
 "0f9586ab-2364-40ce-897a-496be0c18f97": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "winners": [
   "tsg kenshi"
  ],
  "time": "2020-08-03T01:45:10.861",
  "duration": 1538,
  "mode": 1
 },
 "07102a11-daaa-4789-8ca1-78efe09822c6": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier2_PC",
  "winners": [
   "Bacca7"
  ],
  "time": "2020-08-03T01:15:11.555",
  "duration": 1548,
  "mode": 1
 },
 "0557b9f5-9b89-40b1-82df-4ccbd500b320": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "winners": [
   "pzuhs"
  ],
  "time": "2020-08-09T03:45:09.146",
  "duration": 1538,
  "mode": 1
 },
 "023207e0-7b2a-481a-b055-318a1807fcbb": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "winners": [
   "100T Arkhram."
  ],
  "time": "2020-08-09T03:15:08.889",
  "duration": 1543,
  "mode": 1
 },
 "29c4126a-427e-4ca0-9c6f-e0f0ea8535cc": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "winners": [
   "100T Arkhram."
  ],
  "time": "2020-08-09T02:45:11.772",
  "duration": 1558,
  "mode": 1
 },
 "046846f0-dd43-4305-b7c8-a5590499be1e": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "winners": [
   "Akella Maken"
  ],
  "time": "2020-08-09T02:15:11.929",
  "duration": 1547,
  "mode": 1
 },
 "017bf395-efc4-44c9-900b-d60578f973bb": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "winners": [
   "TSG defiable"
  ],
  "time": "2020-08-09T01:45:12.245",
  "duration": 1509,
  "mode": 1
 },
 "04f1f316-bb85-47d1-9ea8-fd140ca9d4d2": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier3_PC",
  "winners": [
   "4DRStorm."
  ],
  "time": "2020-08-09T01:15:11.59",
  "duration": 1535,
  "mode": 1
 },
 "06f27313-df27-4f29-806b-9a86460dbffb": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "winners": [
   "NorCal Frap."
  ],
  "time": "2020-08-10T03:45:15.372",
  "duration": 1492,
  "mode": 1
 },
 "00130730-e1d6-478b-9bba-ad3012b20a7c": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "winners": [
   "tsg snacky"
  ],
  "time": "2020-08-10T03:15:13.721",
  "duration": 1500,
  "mode": 1
 },
 "0015c9bf-4dc5-4cc2-a500-c2b224f1ee13": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "winners": [
   "EpikZookez7"
  ],
  "time": "2020-08-10T02:45:13.616",
  "duration": 1534,
  "mode": 1
 },
 "02aa832d-20b8-457a-8352-f5c6c802d66a": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "winners": [
   "pоllo ay лол"
  ],
  "time": "2020-08-10T02:15:13.147",
  "duration": 1530,
  "mode": 1
 },
 "00603d50-43c6-4183-b25c-2913e4691fd8": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "winners": [
   "NRG EpikWhale"
  ],
  "time": "2020-08-10T01:45:13.948",
  "duration": 1538,
  "mode": 1
 },
 "043b8e69-a00f-429f-ba55-b00346b27174": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Qualifier4_PC",
  "winners": [
   "XTRA Reet7"
  ],
  "time": "2020-08-10T01:15:14.471",
  "duration": 1495,
  "mode": 1
 },
 "031e77c1-70c9-49d7-bd69-011b08753e78": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "100T Falconer"
  ],
  "time": "2020-08-17T02:45:14.741",
  "duration": 1505,
  "mode": 1
 },
 "0cb3819c-3a75-4695-968e-ec3f51f6e405": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "bizqufan932"
  ],
  "time": "2020-08-17T02:15:14.128",
  "duration": 1523,
  "mode": 1
 },
 "08c0e054-e2a9-4741-848f-421a57c0e13f": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "XTRA verT"
  ],
  "time": "2020-08-17T01:45:14.479",
  "duration": 1502,
  "mode": 1
 },
 "013b40fd-2cde-4ae7-8761-6945b5b2169d": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "100T Arkhram."
  ],
  "time": "2020-08-17T01:15:16.291",
  "duration": 1473,
  "mode": 1
 },
 "060f2d60-7f63-40c7-a419-0dc15005597f": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "xtra leb"
  ],
  "time": "2020-08-17T00:45:14.63",
  "duration": 1481,
  "mode": 1
 },
 "02b9fb5b-b2c2-4931-ae9e-91d0f9d444cb": {
  "tournamentID": "epicgames_S13_FNCS_NAW_Finals_PC",
  "winners": [
   "clg versace p"
  ],
  "time": "2020-08-17T00:15:15.537",
  "duration": 1491,
  "mode": 1
 },
 "031f1f46-f2f5-43bc-bbfd-7547341d33a9": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "winners": [
   "GW_Hamuppi"
  ],
  "time": "2020-08-01T11:45:09.758",
  "duration": 1547,
  "mode": 1
 },
 "02cce146-04a2-4b79-92a4-ba205abe5bea": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "winners": [
   "GW_Lettuce"
  ],
  "time": "2020-08-01T11:15:10.069",
  "duration": 1541,
  "mode": 1
 },
 "0143007e-0b6e-4380-9632-6fdebd820888": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "winners": [
   "T1 SinOoh 666"
  ],
  "time": "2020-08-01T10:45:10.381",
  "duration": 1522,
  "mode": 1
 },
 "00f739ea-0855-4974-a6b2-dd23f140d33d": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "winners": [
   "エルコモンドルパサー"
  ],
  "time": "2020-08-01T10:15:10.331",
  "duration": 1531,
  "mode": 1
 },
 "06fe8213-147e-48c6-ae99-c09707975ca6": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "winners": [
   "cr naetor様"
  ],
  "time": "2020-08-01T09:45:10.64",
  "duration": 1547,
  "mode": 1
 },
 "036f1de8-efe9-40bf-9cb5-bab0611d26b2": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier1_PC",
  "winners": [
   "NSR みや"
  ],
  "time": "2020-08-01T09:15:09.631",
  "duration": 1556,
  "mode": 1
 },
 "03b01b4e-b62b-459f-b3aa-a407a2873fa0": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "winners": [
   "ごっとらびっと"
  ],
  "time": "2020-08-02T11:45:08.056",
  "duration": 1517,
  "mode": 1
 },
 "02354271-4dea-4fd8-b279-5a0f72318d71": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "winners": [
   "GW_Albedo"
  ],
  "time": "2020-08-02T11:15:07.855",
  "duration": 1540,
  "mode": 1
 },
 "00428aad-c98b-45a0-8758-f6e0710a80d6": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "winners": [
   "CE leyyner"
  ],
  "time": "2020-08-02T10:45:08.343",
  "duration": 1538,
  "mode": 1
 },
 "01484462-d3ad-4c62-befe-b5341d79246a": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "winners": [
   "ncr rainy"
  ],
  "time": "2020-08-02T10:15:08.117",
  "duration": 1531,
  "mode": 1
 },
 "0721555a-19f0-4d59-ac43-683d3f49a7b5": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "winners": [
   "CCC_ALBAだだんだんだんご"
  ],
  "time": "2020-08-02T09:45:07.445",
  "duration": 1554,
  "mode": 1
 },
 "010fb1f4-7e15-4191-9966-13eb405c9e69": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier2_PC",
  "winners": [
   "ce jozyа"
  ],
  "time": "2020-08-02T09:15:08.323",
  "duration": 1544,
  "mode": 1
 },
 "06423475-4a6f-4032-a85d-c4c7baaccd8e": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "winners": [
   "CREssway"
  ],
  "time": "2020-08-08T11:45:16.749",
  "duration": 1495,
  "mode": 1
 },
 "0e1705bb-4800-4630-86e8-cec1a530c02e": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "winners": [
   "私はたっとです"
  ],
  "time": "2020-08-08T11:15:15.528",
  "duration": 1516,
  "mode": 1
 },
 "03a4aa37-cef4-4a99-ae73-a6747c9ca261": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "winners": [
   "Rid Rimr Knight"
  ],
  "time": "2020-08-08T10:45:16.173",
  "duration": 1536,
  "mode": 1
 },
 "1338045f-1c04-4096-b241-ed5156746210": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "winners": [
   "ぽこきん."
  ],
  "time": "2020-08-08T10:15:15.757",
  "duration": 1531,
  "mode": 1
 },
 "0160f4c7-5376-488a-92c9-b90facf27054": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "winners": [
   "Rukì"
  ],
  "time": "2020-08-08T09:45:14.791",
  "duration": 1521,
  "mode": 1
 },
 "0d28c1d4-d74e-430e-80cd-f070eb7a35b1": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier3_PC",
  "winners": [
   "sеlеnium"
  ],
  "time": "2020-08-08T09:15:14.496",
  "duration": 1543,
  "mode": 1
 },
 "0802972c-cc94-4370-a7a7-46463962f61f": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "winners": [
   "マニマニTig"
  ],
  "time": "2020-08-09T11:45:10.441",
  "duration": 1543,
  "mode": 1
 },
 "16142d28-0580-488d-9b19-2896b77bb564": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "winners": [
   "ce jozyа"
  ],
  "time": "2020-08-09T11:15:11.114",
  "duration": 1522,
  "mode": 1
 },
 "0a2f2ac2-81a9-4cbb-be9f-224952a74059": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "winners": [
   "LCF Rupa -w-"
  ],
  "time": "2020-08-09T10:45:10.459",
  "duration": 1549,
  "mode": 1
 },
 "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "winners": [
   "ragisTT"
  ],
  "time": "2020-08-09T10:15:10.584",
  "duration": 1537,
  "mode": 1
 },
 "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "winners": [
   "LCF Rupa -w-"
  ],
  "time": "2020-08-09T09:45:10.601",
  "duration": 1551,
  "mode": 1
 },
 "0f588baa-eb10-4743-9572-febef20c649e": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Qualifier4_PC",
  "winners": [
   "FaxFox77"
  ],
  "time": "2020-08-09T09:15:10.602",
  "duration": 1551,
  "mode": 1
 },
 "196a80da-6eb8-41e9-bf75-5d48548131a9": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "alba L4ex"
  ],
  "time": "2020-08-14T10:45:17.347",
  "duration": 1508,
  "mode": 1
 },
 "09f7d257-7a03-4a73-8bb5-43618c397a94": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "ALBA まるお"
  ],
  "time": "2020-08-14T10:15:17.172",
  "duration": 1510,
  "mode": 1
 },
 "12e347e9-bc0b-43c1-be3e-7583ca02af8a": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "CREssway"
  ],
  "time": "2020-08-14T09:45:17.528",
  "duration": 1529,
  "mode": 1
 },
 "2e9391e1-581a-4104-ab26-c00da4d39bc9": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "princeyuraxx"
  ],
  "time": "2020-08-14T09:15:15.877",
  "duration": 1531,
  "mode": 1
 },
 "13f9fe2f-e151-40ca-91ca-53f25a95dbdb": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "MaufinTT"
  ],
  "time": "2020-08-14T08:45:16.816",
  "duration": 1533,
  "mode": 1
 },
 "05f59286-820a-4c76-90b9-5157e6f800c3": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "cr naetor様"
  ],
  "time": "2020-08-14T08:15:16.097",
  "duration": 1505,
  "mode": 1
 },
 "092331bc-03e8-49f3-8f2d-5896b9de1fba": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "私はたっとです"
  ],
  "time": "2020-08-15T10:45:10.973",
  "duration": 1539,
  "mode": 1
 },
 "1ee89265-9afc-49e0-8467-ec193eafb5a8": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "僕の彼女 ぽて"
  ],
  "time": "2020-08-15T10:15:10.282",
  "duration": 1553,
  "mode": 1
 },
 "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "ragisTT"
  ],
  "time": "2020-08-15T09:45:17.12",
  "duration": 1535,
  "mode": 1
 },
 "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "clitefishy"
  ],
  "time": "2020-08-15T09:15:12.206",
  "duration": 1493,
  "mode": 1
 },
 "04f64671-4ee6-4e51-be91-a41861fdaace": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "cr yuseakun-."
  ],
  "time": "2020-08-15T08:45:12.215",
  "duration": 1548,
  "mode": 1
 },
 "0897d3ff-1a77-4371-8d8f-cd574432340e": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "ALBA Mеlon"
  ],
  "time": "2020-08-15T08:15:11.071",
  "duration": 1553,
  "mode": 1
 },
 "04a338ac-8017-4e23-bfb3-d25a4c44ff72": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "Rid Bob Knight"
  ],
  "time": "2020-08-16T10:45:16.132",
  "duration": 1531,
  "mode": 1
 },
 "06be0c3e-e50b-450f-9cef-22d1c7874abc": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "ce jozyа"
  ],
  "time": "2020-08-16T10:15:14.966",
  "duration": 1515,
  "mode": 1
 },
 "061cc446-7e5c-42e0-92fd-f711d80fd7ab": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "GW_Albedo"
  ],
  "time": "2020-08-16T09:45:15.492",
  "duration": 1542,
  "mode": 1
 },
 "0944fc61-7dd3-4025-a930-a96d369382db": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "LBR えいむ 老"
  ],
  "time": "2020-08-16T09:15:13.811",
  "duration": 1520,
  "mode": 1
 },
 "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "GW_Albedo"
  ],
  "time": "2020-08-16T08:45:14.521",
  "duration": 1521,
  "mode": 1
 },
 "0d2a6440-4dfe-4b79-ae66-85736451955e": {
  "tournamentID": "epicgames_S13_FNCS_ASIA_Finals_PC",
  "winners": [
   "sеlеnium"
  ],
  "time": "2020-08-16T08:15:15.879",
  "duration": 1534,
  "mode": 1
 },
 "0796bf49-b020-4e85-8cdf-d5fcf17e9906": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "dott1 lv"
  ],
  "time": "2020-08-14T17:45:13.424",
  "duration": 1563,
  "mode": 1
 },
 "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "FURY histtory"
  ],
  "time": "2020-08-14T17:15:13.247",
  "duration": 1515,
  "mode": 1
 },
 "08ce554b-e1af-4138-9872-b0c3e15c0ff5": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Zenxit ay лол"
  ],
  "time": "2020-08-14T16:45:14.71",
  "duration": 1534,
  "mode": 1
 },
 "021c456f-9696-414d-9539-7a4415e86f83": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Æ fazer74"
  ],
  "time": "2020-08-14T16:15:13.973",
  "duration": 1527,
  "mode": 1
 },
 "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Noble Diamondd"
  ],
  "time": "2020-08-14T15:45:14.384",
  "duration": 1470,
  "mode": 1
 },
 "0b4935e5-4b45-46b9-8a1c-36e4f2450778": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Zenxit ay лол"
  ],
  "time": "2020-08-14T15:15:15.19",
  "duration": 1537,
  "mode": 1
 },
 "00682554-30cb-427f-91c5-ebb9f9d77934": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-08-01T23:45:10.217",
  "duration": 1557,
  "mode": 1
 },
 "00a45a33-aa88-4497-b7fb-aa9f41057111": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-01T23:15:10.336",
  "duration": 1549,
  "mode": 1
 },
 "020d077f-31c3-4d30-8ae6-7dc8c59199a3": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "winners": [
   "Suetam ."
  ],
  "time": "2020-08-01T22:45:11.326",
  "duration": 1535,
  "mode": 1
 },
 "030111e8-24ff-4683-8546-f4e02874d482": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "winners": [
   "LOUD lelеo"
  ],
  "time": "2020-08-01T22:15:10.206",
  "duration": 1532,
  "mode": 1
 },
 "0139b55c-190f-47ec-b69c-19d1bd57ffc7": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-08-01T21:45:11.136",
  "duration": 1551,
  "mode": 1
 },
 "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier1_PC",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-08-01T21:15:10.86",
  "duration": 1528,
  "mode": 1
 },
 "0fbd38df-cf44-483c-b566-49a7a3ed69b6": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "tekо"
  ],
  "time": "2020-08-14T21:45:12.886",
  "duration": 1527,
  "mode": 1
 },
 "09a727ac-cbd8-43a4-91b0-33811200f05e": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "C9 blackoutz"
  ],
  "time": "2020-08-14T21:15:13.801",
  "duration": 1539,
  "mode": 1
 },
 "0a831ae4-078d-406f-9c71-d767bcb4f79d": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "persa smoke"
  ],
  "time": "2020-08-14T20:45:12.606",
  "duration": 1485,
  "mode": 1
 },
 "0b6751be-bfdd-4d3e-bddf-f714d681773e": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "persa smoke"
  ],
  "time": "2020-08-14T20:15:13.964",
  "duration": 1503,
  "mode": 1
 },
 "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Wolves YoungYino"
  ],
  "time": "2020-08-14T19:45:13.516",
  "duration": 1518,
  "mode": 1
 },
 "12962d07-9e47-4784-8116-0ca81779946f": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "pıetrıи"
  ],
  "time": "2020-08-14T19:15:14.308",
  "duration": 1527,
  "mode": 1
 },
 "067ecdb3-aa63-45a4-82ef-71c61a0f481f": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "winners": [
   "eRa cadu"
  ],
  "time": "2020-08-02T23:45:12.232",
  "duration": 1525,
  "mode": 1
 },
 "01e21e55-270d-400e-87a4-7059ea9a1588": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "winners": [
   "spıtflow"
  ],
  "time": "2020-08-02T23:15:12.408",
  "duration": 1527,
  "mode": 1
 },
 "05df722e-54d8-4780-9688-3bdf0bf8918e": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "winners": [
   "bagu46"
  ],
  "time": "2020-08-02T22:45:13.059",
  "duration": 1530,
  "mode": 1
 },
 "01747f55-09c0-4772-ac10-7da05f5c0973": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-02T22:15:12.985",
  "duration": 1538,
  "mode": 1
 },
 "01d3d9f5-203e-4d86-bce0-b64e2e644f48": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "winners": [
   "ktz 1"
  ],
  "time": "2020-08-02T21:45:12.486",
  "duration": 1532,
  "mode": 1
 },
 "050650fe-3555-495a-b49e-a5b6ba32f50c": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier2_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-02T21:15:13.046",
  "duration": 1517,
  "mode": 1
 },
 "039d0a01-2bd2-4106-ad48-ad130329ad1d": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Faluve"
  ],
  "time": "2020-08-15T17:45:15.927",
  "duration": 1486,
  "mode": 1
 },
 "23014c3c-6f41-4d87-bd17-255b702e2245": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Nаvars"
  ],
  "time": "2020-08-15T17:15:16.058",
  "duration": 1533,
  "mode": 1
 },
 "1003bcf7-3139-48b4-ab96-44838eeb3849": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-15T16:45:14.957",
  "duration": 1532,
  "mode": 1
 },
 "0121ea3b-5be1-4ff5-be9b-225ee4f18278": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "spıtflow"
  ],
  "time": "2020-08-15T16:15:10.203",
  "duration": 1533,
  "mode": 1
 },
 "0a626280-e810-46bb-935b-78ee99744181": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-15T15:45:11.582",
  "duration": 1564,
  "mode": 1
 },
 "08b5f581-4af7-4a50-b9da-84b0bdb54581": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "9z Barella1x"
  ],
  "time": "2020-08-15T15:15:10.586",
  "duration": 1527,
  "mode": 1
 },
 "08c238ed-10c6-4cd3-8d7a-e68dab317821": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "winners": [
   "yDоctоr"
  ],
  "time": "2020-08-09T03:45:12.545",
  "duration": 1536,
  "mode": 1
 },
 "0490b852-f216-41f0-aeea-c6484a29466e": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "winners": [
   "DEMONRUSTYACHE32"
  ],
  "time": "2020-08-09T03:15:13.061",
  "duration": 1512,
  "mode": 1
 },
 "0f00862a-690f-4cda-8eb7-0eff2c13a8d2": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "winners": [
   "VКS 100UM"
  ],
  "time": "2020-08-09T02:45:13.224",
  "duration": 1556,
  "mode": 1
 },
 "16115b80-b355-4926-be00-51c6cac2aad6": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-09T02:15:13.83",
  "duration": 1536,
  "mode": 1
 },
 "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-09T01:45:12.651",
  "duration": 1530,
  "mode": 1
 },
 "26e45888-7fb7-41fe-8192-cf48b7acba7a": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier3_PC",
  "winners": [
   "DEMONRUSTYACHE32"
  ],
  "time": "2020-08-09T01:15:14.203",
  "duration": 1522,
  "mode": 1
 },
 "373fff00-32d5-42b1-ba96-e5a6d3f59454": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-08-15T21:45:15.575",
  "duration": 1449,
  "mode": 1
 },
 "10107d65-140d-4eac-9e37-6494483537db": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "twitch FebasSZ"
  ],
  "time": "2020-08-15T21:15:15.961",
  "duration": 1544,
  "mode": 1
 },
 "11bc447e-9bed-43e0-b58d-72488245e999": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "BrenoSalviano"
  ],
  "time": "2020-08-15T20:45:15.608",
  "duration": 1535,
  "mode": 1
 },
 "05bdc0c5-106a-40ed-8b3d-38d280830610": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "SK7 Ninja"
  ],
  "time": "2020-08-15T20:15:15.287",
  "duration": 1555,
  "mode": 1
 },
 "09a958b3-be2c-40b7-8ce7-470623a75069": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "gsx7"
  ],
  "time": "2020-08-15T19:45:15.302",
  "duration": 1540,
  "mode": 1
 },
 "114310b0-1a4d-495d-8c57-7454ec35e43c": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "dyfsssj"
  ],
  "time": "2020-08-15T19:15:17.538",
  "duration": 1525,
  "mode": 1
 },
 "0c9b5636-237d-468b-bf9b-2a5279e16ab3": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "winners": [
   "RomeroPDF"
  ],
  "time": "2020-08-09T23:45:15.344",
  "duration": 1520,
  "mode": 1
 },
 "0622294f-ec63-46ca-9b93-2cb98f77d303": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "winners": [
   "DEMONRUSTYACHE32"
  ],
  "time": "2020-08-09T23:15:16.337",
  "duration": 1531,
  "mode": 1
 },
 "0764035d-c607-44fe-a691-d606fb742f95": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "winners": [
   "Keicox"
  ],
  "time": "2020-08-09T22:45:15.983",
  "duration": 1502,
  "mode": 1
 },
 "04d4e449-b252-4c19-84d3-c2f749d31fd4": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "winners": [
   "DEMONRUSTYACHE32"
  ],
  "time": "2020-08-09T22:15:16.308",
  "duration": 1531,
  "mode": 1
 },
 "0ee7ea97-b230-49f9-a287-20d813be3fca": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "winners": [
   "tsg sanku"
  ],
  "time": "2020-08-09T21:45:15.697",
  "duration": 1542,
  "mode": 1
 },
 "08cf7c56-a95f-4128-9930-8f2a9496b75f": {
  "tournamentID": "epicgames_S13_FNCS_BR_Qualifier4_PC",
  "winners": [
   "Gamma xeatHD"
  ],
  "time": "2020-08-09T21:15:15.374",
  "duration": 1536,
  "mode": 1
 },
 "09d6b370-c272-4cd0-828a-6d6add1a2eb3": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "BrYANNftn"
  ],
  "time": "2020-08-16T21:45:15.054",
  "duration": 1528,
  "mode": 1
 },
 "05f8b15d-53a9-4d0a-801d-79a8c70a8fce": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-08-16T21:15:15.291",
  "duration": 1521,
  "mode": 1
 },
 "0c2314f2-060d-4f2b-bede-db3d049e7a1c": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "Æ fazer74"
  ],
  "time": "2020-08-16T20:45:15.847",
  "duration": 1543,
  "mode": 1
 },
 "18c76420-902b-4278-a4da-3a828f84c3c6": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "SNG kıng"
  ],
  "time": "2020-08-16T20:15:16.344",
  "duration": 1535,
  "mode": 1
 },
 "1f022073-9fd8-4f65-bf37-c36e9cef3897": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-16T19:45:15.426",
  "duration": 1500,
  "mode": 1
 },
 "133d8c79-dee5-45ee-a6f0-7f41bd6ff610": {
  "tournamentID": "epicgames_S13_FNCS_BR_Finals_PC",
  "winners": [
   "FаZe k1nG."
  ],
  "time": "2020-08-16T19:15:15.497",
  "duration": 1485,
  "mode": 1
 },
 "0625c854-3d9a-46a3-baa4-aea10f6858cd": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "winners": [
   "Exploit Kovolski"
  ],
  "time": "2020-08-05T18:45:12.153",
  "duration": 1564,
  "mode": 1
 },
 "1a0d6076-cf1b-49e0-9c61-08c149d66f5c": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-05T18:15:12.159",
  "duration": 1529,
  "mode": 1
 },
 "0849081d-13aa-4755-84e1-91da549c2f56": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "winners": [
   "Brookitr0"
  ],
  "time": "2020-08-05T17:45:12.387",
  "duration": 1520,
  "mode": 1
 },
 "0b3f6180-d710-4358-bb43-3d739a3d4cd2": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "winners": [
   "Hawk Mansour"
  ],
  "time": "2020-08-05T17:15:14.338",
  "duration": 1561,
  "mode": 1
 },
 "0675bd7d-802d-48a6-8909-d2f7ad8ed5f7": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-05T16:45:13.819",
  "duration": 1556,
  "mode": 1
 },
 "0af11282-6266-4694-b915-175c8327e783": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier1_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-05T16:15:14.009",
  "duration": 1530,
  "mode": 1
 },
 "27601894-c47d-4c3b-81fb-e644c7cc82bb": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "winners": [
   "Falcon Speedy."
  ],
  "time": "2020-08-06T16:45:16.056",
  "duration": 1523,
  "mode": 1
 },
 "1f8a7ceb-6094-4e84-9138-68d2c308a1c6": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "winners": [
   "Falcon AbuFal7"
  ],
  "time": "2020-08-06T16:15:15.058",
  "duration": 1524,
  "mode": 1
 },
 "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "winners": [
   "Sonic Dream77"
  ],
  "time": "2020-08-06T15:45:14.064",
  "duration": 1543,
  "mode": 1
 },
 "14bbf875-9a48-4358-9622-9e6264a65639": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "winners": [
   "Sonic Dream77"
  ],
  "time": "2020-08-06T15:15:13.678",
  "duration": 1526,
  "mode": 1
 },
 "14df20c7-30ba-473b-b99c-01ef9d152a71": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-06T14:45:14.707",
  "duration": 1537,
  "mode": 1
 },
 "3bce82fb-ec0b-460b-a796-847fab6957cd": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier2_PC",
  "winners": [
   "Falcon Phantom."
  ],
  "time": "2020-08-06T14:15:14.326",
  "duration": 1536,
  "mode": 1
 },
 "0d647c94-b96e-4873-9b0c-2acaff5e7921": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-07T16:45:15.608",
  "duration": 1520,
  "mode": 1
 },
 "021f666d-653d-4b80-ac63-2a7694ce8507": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "winners": [
   "SAQR Hellon"
  ],
  "time": "2020-08-07T16:15:15.403",
  "duration": 1536,
  "mode": 1
 },
 "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "winners": [
   "SAQR Njﱞby"
  ],
  "time": "2020-08-07T15:45:14.319",
  "duration": 1521,
  "mode": 1
 },
 "0b324df6-1604-48a8-bd77-372d1c90d89a": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "winners": [
   "MES Obito."
  ],
  "time": "2020-08-07T15:15:15.773",
  "duration": 1544,
  "mode": 1
 },
 "1fbf214d-393e-4e5f-98cf-80367336fc65": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "winners": [
   "ELC xJam"
  ],
  "time": "2020-08-07T14:45:14.999",
  "duration": 1539,
  "mode": 1
 },
 "161ccd12-0112-4ebb-817d-4b5dc892f91a": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier3_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-07T14:15:14.205",
  "duration": 1531,
  "mode": 1
 },
 "0324ecef-9144-465e-9810-20920a4cd7ce": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-08T16:45:16.535",
  "duration": 1533,
  "mode": 1
 },
 "10e604b9-c285-4197-9d9a-1382e4537511": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "winners": [
   "Falcon Phantom."
  ],
  "time": "2020-08-08T16:15:17.544",
  "duration": 1528,
  "mode": 1
 },
 "09ee78fb-b3d8-440a-9c4f-588cc5e10410": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "winners": [
   "POWER Ѕаud"
  ],
  "time": "2020-08-08T15:45:16.049",
  "duration": 1542,
  "mode": 1
 },
 "05b89ebc-406c-4396-80c3-0a5abd580a0c": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-08T15:15:15.464",
  "duration": 1520,
  "mode": 1
 },
 "01c55f02-857d-45e6-946d-ed9da531e079": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "winners": [
   "POWER GntL"
  ],
  "time": "2020-08-08T14:45:17.332",
  "duration": 1540,
  "mode": 1
 },
 "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1": {
  "tournamentID": "epicgames_S13_FNCS_ME_Qualifier4_PC",
  "winners": [
   "َBnga"
  ],
  "time": "2020-08-08T14:15:17.399",
  "duration": 1542,
  "mode": 1
 },
 "047c1b7c-00e9-4ac0-82b6-b7c3210fd8e2": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "SCYTES vagnaR"
  ],
  "time": "2020-08-14T15:45:14.121",
  "duration": 1529,
  "mode": 1
 },
 "02c85134-3df0-4fc1-8428-00383aca4c68": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Falcon Kai"
  ],
  "time": "2020-08-14T15:15:17.01",
  "duration": 1530,
  "mode": 1
 },
 "08650206-f8ff-4343-aeb8-0f6111953931": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "NJR 鬼"
  ],
  "time": "2020-08-14T14:45:17.046",
  "duration": 1525,
  "mode": 1
 },
 "04db337b-4b47-4eb1-a1b1-0ee26c9d5e24": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-14T14:15:15.047",
  "duration": 1512,
  "mode": 1
 },
 "06750b3b-ed2b-490a-bd7a-a63585446c05": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "KINGS Metab"
  ],
  "time": "2020-08-14T13:45:16.867",
  "duration": 1503,
  "mode": 1
 },
 "05c62748-0aed-467a-8cbe-9c50bb6e445d": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "SCYTES vagnaR"
  ],
  "time": "2020-08-14T13:15:20.942",
  "duration": 1521,
  "mode": 1
 },
 "03167252-be24-40fa-8363-99f8f92b26df": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "KO D7oom"
  ],
  "time": "2020-08-14T18:45:16.425",
  "duration": 1513,
  "mode": 1
 },
 "02d1b32f-b94b-4cdc-b35e-a2b953e1ec6e": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "azpect ツ"
  ],
  "time": "2020-08-14T18:15:15.69",
  "duration": 1522,
  "mode": 1
 },
 "1daa91ce-5cbc-4bb3-bc3e-7db753acb552": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "SAQR K9"
  ],
  "time": "2020-08-14T17:45:16.42",
  "duration": 1506,
  "mode": 1
 },
 "019f32af-1dfc-4b2c-a4bb-c14dad6059be": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "SCYTES Flamors."
  ],
  "time": "2020-08-14T17:15:15.879",
  "duration": 1550,
  "mode": 1
 },
 "1088081c-4e64-4902-823d-dc9302e0faa6": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Medal malkawi"
  ],
  "time": "2020-08-14T16:45:15.344",
  "duration": 1554,
  "mode": 1
 },
 "160cd9f5-a913-4879-8c1c-1e1ab0f46c1a": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Falcon Phantom."
  ],
  "time": "2020-08-14T16:15:15.986",
  "duration": 1547,
  "mode": 1
 },
 "1bd3bffc-4bc5-44b9-89a6-1050e3268be5": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Lоzer"
  ],
  "time": "2020-08-15T18:45:15.987",
  "duration": 1541,
  "mode": 1
 },
 "19ab1bed-42d6-44fa-a78b-8a1bb7448bf0": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Sudor Saudツ"
  ],
  "time": "2020-08-15T18:15:17.09",
  "duration": 1508,
  "mode": 1
 },
 "08412f9d-ed33-4044-9984-811261aea059": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "SAQR Hellon"
  ],
  "time": "2020-08-15T17:45:18.386",
  "duration": 1532,
  "mode": 1
 },
 "0f37f9ed-ee5d-4b0e-a082-923ff8a89deb": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Falcon Modisk."
  ],
  "time": "2020-08-15T17:15:17.247",
  "duration": 1510,
  "mode": 1
 },
 "2cb840bd-b8d9-46e4-8b03-a5b4ec4c6c9c": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Falcon Phantom."
  ],
  "time": "2020-08-15T16:45:18.598",
  "duration": 1523,
  "mode": 1
 },
 "21743ff5-f637-4ac1-9fff-5bc9cb1ba833": {
  "tournamentID": "epicgames_S13_FNCS_ME_Finals_PC",
  "winners": [
   "Fаlcon Spy"
  ],
  "time": "2020-08-15T16:15:13.17",
  "duration": 1496,
  "mode": 1
 },
 "1912b026-92f7-443b-893e-b5bdb33fbb7e": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "winners": [
   "РWR Banana"
  ],
  "time": "2020-08-01T10:45:10.669",
  "duration": 1540,
  "mode": 1
 },
 "1730f245-b049-4df9-9b73-8a3621d3c05a": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "winners": [
   "Agent Eshz"
  ],
  "time": "2020-08-01T10:15:09.86",
  "duration": 1528,
  "mode": 1
 },
 "0da5ed60-38bf-47c9-a10d-3a67113e2035": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "winners": [
   "PRDX Oatley"
  ],
  "time": "2020-08-01T09:45:11.064",
  "duration": 1538,
  "mode": 1
 },
 "013082d7-c870-4125-83a0-92e0c0ee2645": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "winners": [
   "PWR worthy"
  ],
  "time": "2020-08-01T09:15:10.963",
  "duration": 1519,
  "mode": 1
 },
 "0014a06c-0546-4981-9c00-1da33e053b32": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "winners": [
   "Slof moved to NA"
  ],
  "time": "2020-08-01T08:45:10.538",
  "duration": 1508,
  "mode": 1
 },
 "11a165e3-7a2a-4333-a5cb-8b22a1f0d138": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier1_PC",
  "winners": [
   "zеn o"
  ],
  "time": "2020-08-01T08:15:10.43",
  "duration": 1493,
  "mode": 1
 },
 "0a7917bd-5c41-4af9-9943-bfc663518d1e": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "winners": [
   "wicked гг"
  ],
  "time": "2020-08-02T10:45:08.61",
  "duration": 1518,
  "mode": 1
 },
 "05028108-5c9f-4761-bed9-02151c181102": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "winners": [
   "MG asfit"
  ],
  "time": "2020-08-02T10:15:08.987",
  "duration": 1549,
  "mode": 1
 },
 "1df8510d-fa3a-4976-8016-00c178a69cd3": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "winners": [
   "agent sorif"
  ],
  "time": "2020-08-02T09:45:08.928",
  "duration": 1547,
  "mode": 1
 },
 "23b74752-90e0-49be-b99d-c52f61fd2eb8": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "winners": [
   "CRISER 父"
  ],
  "time": "2020-08-02T09:15:08.561",
  "duration": 1549,
  "mode": 1
 },
 "011f7811-184e-4349-a21f-9112b1733282": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "winners": [
   "MG asfit"
  ],
  "time": "2020-08-02T08:45:09.636",
  "duration": 1547,
  "mode": 1
 },
 "069900d9-bc0e-44a9-bf9a-06792307ca01": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier2_PC",
  "winners": [
   "MADE Weeb"
  ],
  "time": "2020-08-02T08:15:10.873",
  "duration": 1538,
  "mode": 1
 },
 "067d2c72-08d8-48c9-8e5c-4b1273413f8c": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "winners": [
   "PRDX Movrickz"
  ],
  "time": "2020-08-08T10:45:15.592",
  "duration": 1516,
  "mode": 1
 },
 "00c2980e-8987-43e2-a59b-efa448f012c1": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "winners": [
   "zoreh 4pf"
  ],
  "time": "2020-08-08T10:15:15.977",
  "duration": 1515,
  "mode": 1
 },
 "05d4959b-fb38-4798-86c3-5b75359ec60a": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "winners": [
   "volx"
  ],
  "time": "2020-08-08T09:45:15.906",
  "duration": 1490,
  "mode": 1
 },
 "0127d1a4-13b8-4ace-b3a0-fb7377474085": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "winners": [
   "SPG Squeakz"
  ],
  "time": "2020-08-08T09:15:15.675",
  "duration": 1497,
  "mode": 1
 },
 "0b0c6845-c8cd-4b32-94dd-462aea5aebc5": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "winners": [
   "volx"
  ],
  "time": "2020-08-08T08:45:16.063",
  "duration": 1536,
  "mode": 1
 },
 "0f20d4e4-a6d5-4b1e-be84-12441c1d7138": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier3_PC",
  "winners": [
   "noob jynx"
  ],
  "time": "2020-08-08T08:15:15.788",
  "duration": 1500,
  "mode": 1
 },
 "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "winners": [
   "РWR Banana"
  ],
  "time": "2020-08-09T10:45:11.071",
  "duration": 1525,
  "mode": 1
 },
 "298205fc-56dc-483a-b59d-88ef4649a843": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "winners": [
   "PWR looter"
  ],
  "time": "2020-08-09T10:15:13.894",
  "duration": 1550,
  "mode": 1
 },
 "0d40c582-8d03-4330-b4ee-7f173a306568": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "winners": [
   "noob jynx"
  ],
  "time": "2020-08-09T09:45:11.007",
  "duration": 1557,
  "mode": 1
 },
 "285d036b-accc-4285-bc65-064c1ba5e7ca": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "winners": [
   "zеn o"
  ],
  "time": "2020-08-09T09:15:10.728",
  "duration": 1559,
  "mode": 1
 },
 "18edbea7-08ec-45a1-a7d7-84d77fd94be7": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "winners": [
   "Link.ㅤ"
  ],
  "time": "2020-08-09T08:45:10.915",
  "duration": 1551,
  "mode": 1
 },
 "0bd27ee9-f378-4c16-85f6-c96cad033390": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Qualifier4_PC",
  "winners": [
   "SPG repuk"
  ],
  "time": "2020-08-09T08:15:11.928",
  "duration": 1529,
  "mode": 1
 },
 "084358cb-749c-4322-be06-3d6418cc5e77": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "kоrq"
  ],
  "time": "2020-08-14T08:45:18.814",
  "duration": 1522,
  "mode": 1
 },
 "18dd45cb-556e-479f-bd9d-ae3aa8a2759d": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "Fresh"
  ],
  "time": "2020-08-14T08:15:17.316",
  "duration": 1530,
  "mode": 1
 },
 "163e2e84-ac49-465d-9e2e-3ead40f173eb": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "РWR Banana"
  ],
  "time": "2020-08-14T07:45:17.422",
  "duration": 1514,
  "mode": 1
 },
 "1cd6c339-a2a6-45b0-b675-bd180c9289e9": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "jаhlyn"
  ],
  "time": "2020-08-14T07:15:17.533",
  "duration": 1511,
  "mode": 1
 },
 "053dc0f8-6f73-4b33-9549-4867d1b49299": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "skvtzz"
  ],
  "time": "2020-08-14T06:45:18.385",
  "duration": 1530,
  "mode": 1
 },
 "199b6685-3bb7-41d8-bf6a-35774fcec440": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "РWR Banana"
  ],
  "time": "2020-08-14T06:15:19.325",
  "duration": 1460,
  "mode": 1
 },
 "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "ATL ronin"
  ],
  "time": "2020-08-15T08:45:14.182",
  "duration": 1553,
  "mode": 1
 },
 "004db7f4-38d0-41e4-aa09-07701c86aec0": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "SPG Squeakz"
  ],
  "time": "2020-08-15T08:15:14.605",
  "duration": 1528,
  "mode": 1
 },
 "01b8f349-a8a3-46c2-8063-6248d93071a1": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "PWR worthy"
  ],
  "time": "2020-08-15T07:45:13.13",
  "duration": 1553,
  "mode": 1
 },
 "382f7713-b818-4e05-8553-e91cc1ac7c7b": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "Slobbered on ッ"
  ],
  "time": "2020-08-15T07:15:17.294",
  "duration": 1536,
  "mode": 1
 },
 "356dedaa-b860-421f-890b-d021785f4e24": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "phluxzy ӝ"
  ],
  "time": "2020-08-15T06:45:17.112",
  "duration": 1503,
  "mode": 1
 },
 "1321c957-bb6e-4026-909b-cb6545c10505": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "Mr.PlantBomb12"
  ],
  "time": "2020-08-15T06:15:17.011",
  "duration": 1513,
  "mode": 1
 },
 "06564f7b-623b-4db7-af0d-99c75e90e2d6": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "MG asfit"
  ],
  "time": "2020-08-16T08:45:19.794",
  "duration": 1522,
  "mode": 1
 },
 "21b736b5-7045-49b3-9b03-b43998682ff4": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "РWR Banana"
  ],
  "time": "2020-08-16T08:15:18.303",
  "duration": 1480,
  "mode": 1
 },
 "2c02de48-fc78-469f-a325-b911f98b4a9e": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "BMH sleepy"
  ],
  "time": "2020-08-16T07:45:19.447",
  "duration": 1493,
  "mode": 1
 },
 "08e31732-6ddc-4161-995b-e829946321e6": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "PWR worthy"
  ],
  "time": "2020-08-16T07:15:17.281",
  "duration": 1505,
  "mode": 1
 },
 "026927aa-fb59-4f59-ba4c-041df9a65274": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "rahcks FA"
  ],
  "time": "2020-08-16T06:45:17.709",
  "duration": 1517,
  "mode": 1
 },
 "03431677-2a2e-4bb1-bdbb-95b5dd99e8cc": {
  "tournamentID": "epicgames_S13_FNCS_OCE_Finals_PC",
  "winners": [
   "m0untаin"
  ],
  "time": "2020-08-16T06:15:18.849",
  "duration": 1504,
  "mode": 1
 },
 "febafe18-93f1-436f-a956-28097c0a70df": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "winners": [
   "OA Rocaine"
  ],
  "time": "2020-09-19T04:35:22.712",
  "duration": 1382,
  "mode": 1
 },
 "d280e68d-417d-48c7-b3f0-6eb88e3ba6e0": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "winners": [
   "OA Whofishy"
  ],
  "time": "2020-09-19T03:55:23.679",
  "duration": 1412,
  "mode": 1
 },
 "24653bfb-89fc-4725-a89e-17bcdb277b40": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "winners": [
   "Marzz_Ow"
  ],
  "time": "2020-09-19T03:15:22.308",
  "duration": 1489,
  "mode": 1
 },
 "0aca3d6c-e7f0-4c22-a5a2-d55cf3d229d1": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "winners": [
   "NorCal Frap."
  ],
  "time": "2020-09-19T02:35:21.032",
  "duration": 1519,
  "mode": 1
 },
 "04b60843-bf01-41c7-8c37-0bf5b3bd8518": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "winners": [
   "LG Jampеr ψ"
  ],
  "time": "2020-09-19T01:55:22.459",
  "duration": 1506,
  "mode": 1
 },
 "77942354-f76b-4c00-86eb-78ae5c99be96": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAE_Finals",
  "winners": [
   "UnknownxArmy 父"
  ],
  "time": "2020-09-19T01:14:43.486",
  "duration": 1950,
  "mode": 1
 },
 "0de4c3da-4ffa-4a6c-ac0f-ab22b9121f40": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "winners": [
   "FS Bυlly"
  ],
  "time": "2020-10-16T04:35:20.596",
  "duration": 1520,
  "mode": 1
 },
 "015478fa-b2f9-4fad-8286-8fe2f52c003b": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "winners": [
   "FS SHERIFF DEG"
  ],
  "time": "2020-10-16T03:55:22.695",
  "duration": 1486,
  "mode": 1
 },
 "005bc053-ed3e-48d0-82ea-e395d8a131e0": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "winners": [
   "XTRA Furiouѕ"
  ],
  "time": "2020-10-16T03:15:20.254",
  "duration": 1488,
  "mode": 1
 },
 "004cd04c-36f1-4197-831b-2e0f670c31de": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "winners": [
   "Justicе."
  ],
  "time": "2020-10-16T02:35:18.454",
  "duration": 1524,
  "mode": 1
 },
 "030024cb-33c0-40b9-ae92-eaa36621bcff": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "winners": [
   "XTRA Furiouѕ"
  ],
  "time": "2020-10-16T01:55:18.195",
  "duration": 1495,
  "mode": 1
 },
 "0dbc1caa-f1da-4890-8771-93f5b6e0f31c": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAE_Finals",
  "winners": [
   "Strіfe2k"
  ],
  "time": "2020-10-16T01:15:19.163",
  "duration": 1479,
  "mode": 1
 },
 "2c0dfc7d-780e-4236-8dfc-9dfbd4bcafb2": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "winners": [
   "xtra leb",
   "XTRA verT"
  ],
  "time": "2020-11-14T05:34:20.024",
  "duration": 1971,
  "mode": 2
 },
 "31d2ae91-4269-4318-b52f-87fdc4a66546": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "winners": [
   "XSET Knight",
   "XSET Shark"
  ],
  "time": "2020-11-14T04:54:15.713",
  "duration": 1968,
  "mode": 2
 },
 "1d30048b-8769-49a6-a5fe-22a2324a7a27": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "winners": [
   "Elite frat",
   "Vanish Bank"
  ],
  "time": "2020-11-14T04:14:08.452",
  "duration": 1844,
  "mode": 2
 },
 "07c37d15-2710-4325-8a8c-ce2f4d9dce10": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "winners": [
   "XTRA Furiouѕ",
   "BBG Calc"
  ],
  "time": "2020-11-14T03:34:09.482",
  "duration": 1883,
  "mode": 2
 },
 "30fd6502-bdd6-4856-84e9-df7058de7096": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "winners": [
   "SEN Aspect.",
   "LG Xoonies"
  ],
  "time": "2020-11-14T02:54:27.738",
  "duration": 1840,
  "mode": 2
 },
 "5aeaea3a-3457-48c2-9849-d1c8f3045b43": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAE_Finals",
  "winners": [
   "9LIVES Tahi",
   "sprite dabdabdba"
  ],
  "time": "2020-11-14T02:14:23.289",
  "duration": 1835,
  "mode": 2
 },
 "22a83543-7602-4123-824a-5b13b3d01110": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-11T23:40:22.435",
  "duration": 1468,
  "mode": 3
 },
 "37ea84ac-14d9-4bd7-ada4-0748736a4882": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "winners": [
   "UnknownxArmy 父",
   "FS casqer",
   "G2 Smqcked"
  ],
  "time": "2020-10-11T23:10:25.919",
  "duration": 1467,
  "mode": 3
 },
 "c40871d9-fd38-4eef-bf53-d096768d5288": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-11T22:40:22.859",
  "duration": 1488,
  "mode": 3
 },
 "00618211-d1a9-4c93-b964-1ccc03b16356": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "winners": [
   "SEN Aspect.",
   "LG Xoonies",
   "npen"
  ],
  "time": "2020-10-11T22:10:23.24",
  "duration": 1475,
  "mode": 3
 },
 "1695c575-edfc-4060-bda2-b1411ed1619b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "winners": [
   "NRG СІіх",
   "XTRA Illest",
   "FаZe Bizzle"
  ],
  "time": "2020-10-11T21:40:22.336",
  "duration": 1506,
  "mode": 3
 },
 "4fcd6323-4410-4f84-8e57-1d333ae3e03f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "winners": [
   "ENDL8SS DEYYRITO",
   "mero2k",
   "ENDLESS Reverse"
  ],
  "time": "2020-10-11T21:10:21.082",
  "duration": 1491,
  "mode": 3
 },
 "2fd440f8-12f8-41a9-988d-adb54b606544": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAE_PC",
  "time": "2020-10-10T23:40:19.571",
  "duration": 1447,
  "mode": 3
 },
 "f65469bb-8e36-4da3-b673-a2354ba4058f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "chaоtic",
   "BBG Haz",
   "EP PAPE"
  ],
  "time": "2020-10-18T23:40:22.409",
  "duration": 1529,
  "mode": 3
 },
 "7babdc09-4d62-4f87-9eaa-4261c84a3442": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-18T23:10:27.13",
  "duration": 1520,
  "mode": 3
 },
 "717d5c69-2d52-403d-a08c-0a97d26948a4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "TSM_Zexrow",
   "BBG Calc",
   "G2 MackWood"
  ],
  "time": "2020-10-18T22:40:25.811",
  "duration": 1542,
  "mode": 3
 },
 "8c84341e-7f04-400d-9f9c-5760557742f1": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-18T22:10:23.134",
  "duration": 1498,
  "mode": 3
 },
 "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "NRG СІіх",
   "XTRA Illest",
   "FаZe Bizzle"
  ],
  "time": "2020-10-18T21:40:22.314",
  "duration": 1499,
  "mode": 3
 },
 "1eb143cf-ff30-48a1-9053-80e74c286c11": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "XSET Knight",
   "XSET Shark",
   "XSET Av"
  ],
  "time": "2020-10-18T21:10:23.187",
  "duration": 1514,
  "mode": 3
 },
 "320b0a58-38bd-4fbb-af42-2c25a666dc84": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "XSET Knight",
   "XSET Shark",
   "XSET Av"
  ],
  "time": "2020-10-17T23:40:19.678",
  "duration": 1493,
  "mode": 3
 },
 "24687ba3-b243-4d9e-ad8c-281681ec997d": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "UnknownxArmy 父",
   "FS casqer",
   "G2 Smqcked"
  ],
  "time": "2020-10-17T23:10:23.333",
  "duration": 1508,
  "mode": 3
 },
 "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-17T22:40:20.273",
  "duration": 1542,
  "mode": 3
 },
 "50960b8f-30e8-4aa9-aab4-14698e9230f3": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "ENDL8SS DEYYRITO",
   "mero2k",
   "ENDLESS Reverse"
  ],
  "time": "2020-10-17T22:10:19.777",
  "duration": 1540,
  "mode": 3
 },
 "8de40da3-cf39-4ac9-b155-e20db2bfa323": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-17T21:40:24.755",
  "duration": 1530,
  "mode": 3
 },
 "e4f4aa89-1262-4d84-86af-ca8ba456d2d7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-17T21:10:20.369",
  "duration": 1499,
  "mode": 3
 },
 "018df9d8-8b99-4eea-8d4e-acd274e58685": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-25T23:40:23.16",
  "duration": 1500,
  "mode": 3
 },
 "5a63a231-de3b-43bd-917d-e4c32480ae24": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-25T23:10:23.472",
  "duration": 1498,
  "mode": 3
 },
 "6ca04073-efee-49a0-9539-91d5dd18b603": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-25T22:40:22.114",
  "duration": 1523,
  "mode": 3
 },
 "24058fb2-44ff-424f-b803-90873c642617": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "Cоmmandment",
   "FaZe Cented",
   "NRG Edgey"
  ],
  "time": "2020-10-25T22:10:21.642",
  "duration": 1531,
  "mode": 3
 },
 "245ef706-1242-45c1-ae4e-78c5788ea989": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "Cоmmandment",
   "FaZe Cented",
   "NRG Edgey"
  ],
  "time": "2020-10-25T21:40:23.769",
  "duration": 1484,
  "mode": 3
 },
 "390d5139-abcf-4373-997c-9c76594a696a": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-25T21:10:23.004",
  "duration": 1502,
  "mode": 3
 },
 "52243c6b-0a0e-46af-96a8-34fa0abcaa46": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-24T23:40:19.758",
  "duration": 1524,
  "mode": 3
 },
 "3d48ef5c-4aad-4aeb-9e88-132ad05073af": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "FaZe Megga.",
   "Liquid Riversan",
   "FаZe Dubs ϟ"
  ],
  "time": "2020-10-24T23:10:19.744",
  "duration": 1530,
  "mode": 3
 },
 "81499331-3bf7-460e-9f1a-43ffd171d1c4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-24T22:40:22.612",
  "duration": 1528,
  "mode": 3
 },
 "83b03914-ae36-4069-9149-692a00e06520": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "NRG СІіх",
   "XTRA Illest",
   "FаZe Bizzle"
  ],
  "time": "2020-10-24T22:10:20.104",
  "duration": 1490,
  "mode": 3
 },
 "a0c6851c-0183-4b01-ab1a-17526758b927": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-24T21:40:22.995",
  "duration": 1543,
  "mode": 3
 },
 "6dcaf459-dcd4-4abf-9382-b528728d305f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAE_PC",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-24T21:10:21.356",
  "duration": 1519,
  "mode": 3
 },
 "bf232831-8179-4898-bae6-31027f1179fd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "ENDLESS TRAGIX",
   "Snakeccept",
   "A1 SIMPLE"
  ],
  "time": "2020-10-30T23:40:22.616",
  "duration": 1372,
  "mode": 3
 },
 "268e3910-9e4a-4624-9f76-55ecedf8abc0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "Cеicе",
   "XTRA Furiouѕ",
   "Ghоst Blаke"
  ],
  "time": "2020-10-30T23:10:22.131",
  "duration": 1500,
  "mode": 3
 },
 "a007ab68-fccb-4b26-a40c-b74bc906535c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-30T22:40:23.02",
  "duration": 1479,
  "mode": 3
 },
 "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-30T22:10:23.623",
  "duration": 1507,
  "mode": 3
 },
 "a2642599-dc72-4459-af5b-e7858ebcc014": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "gаbeski",
   "9LIVES Tahi",
   "sprite dabdabdba"
  ],
  "time": "2020-10-30T21:40:23.531",
  "duration": 1523,
  "mode": 3
 },
 "d2016264-3c8a-4c02-952e-7b0bcaba0c84": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "TSM_Zexrow",
   "BBG Calc",
   "G2 MackWood"
  ],
  "time": "2020-10-30T21:10:24.318",
  "duration": 1485,
  "mode": 3
 },
 "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-29T23:40:20.429",
  "duration": 1493,
  "mode": 3
 },
 "837c4090-b2c5-450f-a450-895108911473": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-29T23:10:21.698",
  "duration": 1524,
  "mode": 3
 },
 "8853019b-0eea-44ab-a889-f669988e12b2": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "gаbeski",
   "9LIVES Tahi",
   "sprite dabdabdba"
  ],
  "time": "2020-10-29T22:40:22.128",
  "duration": 1489,
  "mode": 3
 },
 "3d974aed-b7fb-45df-b59d-f16560b2552d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "Cеicе",
   "XTRA Furiouѕ",
   "Ghоst Blаke"
  ],
  "time": "2020-10-29T22:10:21.555",
  "duration": 1506,
  "mode": 3
 },
 "fdd4b556-a02f-478e-9014-a086097b601e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "LG Jampеr ψ",
   "SEN BUGHA 父",
   "C9 Avery"
  ],
  "time": "2020-10-29T21:40:21.18",
  "duration": 1521,
  "mode": 3
 },
 "f9f7b4e0-9e64-4262-947e-ec5e83a823f9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat1",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-29T21:10:21.059",
  "duration": 1490,
  "mode": 3
 },
 "9c677089-0250-4ede-bb0e-3eaa7488bfbb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "mamy ay лол",
   "Aperta_",
   "sparkgkky"
  ],
  "time": "2020-10-30T23:40:21.743",
  "duration": 1530,
  "mode": 3
 },
 "d26e7437-b973-4b07-8d0b-900253bae68a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "TNA ZUM",
   "skqughaski2k",
   "NRG Ronaldo"
  ],
  "time": "2020-10-30T23:10:22.957",
  "duration": 1483,
  "mode": 3
 },
 "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "narwhаl",
   "TNA ZLEM 3939",
   "Vanish Bank"
  ],
  "time": "2020-10-30T22:40:28.469",
  "duration": 1478,
  "mode": 3
 },
 "37f26c9c-05e3-49ba-ba42-c9b2eb76a474": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "cloudy -α-",
   "strep ง",
   "9LIVES Lazar"
  ],
  "time": "2020-10-30T22:10:21.562",
  "duration": 1508,
  "mode": 3
 },
 "2dd164c5-0341-421d-8b26-bc8e46cfdf7d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "ENDL8SS DEYYRITO",
   "mero2k",
   "ENDLESS Reverse"
  ],
  "time": "2020-10-30T21:40:22.194",
  "duration": 1487,
  "mode": 3
 },
 "8c52ad51-9c29-4fee-8fcb-a4b236a78a03": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "SEN Aspect.",
   "LG Xoonies",
   "npen"
  ],
  "time": "2020-10-30T21:10:23.003",
  "duration": 1498,
  "mode": 3
 },
 "989fbf40-ad55-499f-987d-05341ae8b25a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "FS Bυlly",
   "TNA Slick",
   "Iciev."
  ],
  "time": "2020-10-29T23:40:21.213",
  "duration": 1478,
  "mode": 3
 },
 "421b8244-2b5f-4b15-96ab-9321ba897453": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "Cоmmandment",
   "FaZe Cented",
   "NRG Edgey"
  ],
  "time": "2020-10-29T23:10:21.533",
  "duration": 1512,
  "mode": 3
 },
 "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "XSET Knight",
   "XSET Shark",
   "XSET Av"
  ],
  "time": "2020-10-29T22:40:27.759",
  "duration": 1510,
  "mode": 3
 },
 "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "ENDL8SS DEYYRITO",
   "mero2k",
   "ENDLESS Reverse"
  ],
  "time": "2020-10-29T22:10:22.243",
  "duration": 1492,
  "mode": 3
 },
 "9afb4c82-c386-4c0b-9c04-6328cb2c69f0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "TRNL TRAP",
   "7 pozed",
   "Akella Nani"
  ],
  "time": "2020-10-29T21:40:21.724",
  "duration": 1509,
  "mode": 3
 },
 "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat2",
  "winners": [
   "Cоmmandment",
   "FaZe Cented",
   "NRG Edgey"
  ],
  "time": "2020-10-29T21:10:22.979",
  "duration": 1501,
  "mode": 3
 },
 "42c413d0-789b-45a2-b7d1-9579eaedcce2": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-30T23:40:22.763",
  "duration": 1478,
  "mode": 3
 },
 "7fe93217-4934-4985-a3ab-f7fcbf94cbbb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "NRG СІіх",
   "XTRA Illest",
   "FаZe Bizzle"
  ],
  "time": "2020-10-30T23:10:25.344",
  "duration": 1525,
  "mode": 3
 },
 "f01bae69-20b7-4316-a6e6-89ff1de3c3c5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "NRG СІіх",
   "XTRA Illest",
   "FаZe Bizzle"
  ],
  "time": "2020-10-30T22:40:23.172",
  "duration": 1488,
  "mode": 3
 },
 "df3153c0-d2e9-4b97-af10-a5b11c288370": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Joji",
   "Kn1pher",
   "9LIVES TabzG"
  ],
  "time": "2020-10-30T22:10:22.548",
  "duration": 1514,
  "mode": 3
 },
 "ead70082-3ddb-4fbe-be3b-f052f273b8d6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-30T21:40:22.702",
  "duration": 1489,
  "mode": 3
 },
 "3fc11d50-c952-414d-9514-6f4165a19f67": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LDamienS",
   "ms13 dany",
   "DaETBaby"
  ],
  "time": "2020-10-30T21:10:22.345",
  "duration": 1471,
  "mode": 3
 },
 "62cf85ea-67b8-4493-983a-38f6581322d7": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-29T23:40:21.927",
  "duration": 1474,
  "mode": 3
 },
 "6b157c19-686b-4d82-8f3d-9807a40eaf93": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "Littlespoon42",
   "CerealBowler69",
   "Twitch Lanson"
  ],
  "time": "2020-10-29T23:10:22.191",
  "duration": 1479,
  "mode": 3
 },
 "2452b103-b780-4550-8a45-4775d975d2bf": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-29T22:40:21.758",
  "duration": 1519,
  "mode": 3
 },
 "b532494e-b35e-47cd-8c24-184df066e693": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-29T22:10:22.344",
  "duration": 1460,
  "mode": 3
 },
 "54637761-5927-494c-ad10-0cb04f8e3890": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "NRG СІіх",
   "XTRA Illest",
   "FаZe Bizzle"
  ],
  "time": "2020-10-29T21:40:20.825",
  "duration": 1507,
  "mode": 3
 },
 "d0f49e43-53c1-49ae-a492-a70b9019f8e7": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat3",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-29T21:10:21.087",
  "duration": 1494,
  "mode": 3
 },
 "072ce672-5166-4aa5-827a-9542fb40e8c6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "MIH Drew",
   "jwordn ハハ",
   "walkR7"
  ],
  "time": "2020-10-30T23:40:22.68",
  "duration": 1518,
  "mode": 3
 },
 "4ae74ffc-4f90-4e40-9400-81fc82455c74": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "Balanced Nevify",
   "tyqzu xo",
   "omg its Sokez"
  ],
  "time": "2020-10-30T23:10:22.233",
  "duration": 1505,
  "mode": 3
 },
 "7cc14977-ebf6-4d0d-9f79-5904055cfa3b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-30T22:40:22.647",
  "duration": 1499,
  "mode": 3
 },
 "539bbd95-118e-4bd7-b83a-22896fd20254": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "Dxrant7",
   "EP Takened",
   "HЕARTT"
  ],
  "time": "2020-10-30T22:10:23.422",
  "duration": 1479,
  "mode": 3
 },
 "b23a7242-50cb-4d7c-a26e-58533aea2034": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-30T21:40:24.297",
  "duration": 1492,
  "mode": 3
 },
 "1280570b-87b7-45ab-8e34-44e4af80a535": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-30T21:10:23.588",
  "duration": 1508,
  "mode": 3
 },
 "537123f7-15a5-40da-8c1b-ea5f143442be": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-29T23:40:21.501",
  "duration": 1490,
  "mode": 3
 },
 "5d32fbaa-cda5-4a12-aab4-ee8250087d08": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "ENDLESS pgod",
   "XTRA Alliege alv",
   "G2 Jelty."
  ],
  "time": "2020-10-29T23:10:20.71",
  "duration": 1529,
  "mode": 3
 },
 "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF",
   "SEN Animal"
  ],
  "time": "2020-10-29T22:40:21.101",
  "duration": 1523,
  "mode": 3
 },
 "953821fc-d074-48d4-a30d-10e62a46da7f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-29T22:10:21.14",
  "duration": 1524,
  "mode": 3
 },
 "2267a704-7e81-4548-b344-c033f41bc062": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "UnknownxArmy 父",
   "FS casqer",
   "G2 Smqcked"
  ],
  "time": "2020-10-29T21:40:21.191",
  "duration": 1520,
  "mode": 3
 },
 "63f8d521-6f75-42b6-8693-f9f82835e990": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Heat4",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-10-29T21:10:26.747",
  "duration": 1509,
  "mode": 3
 },
 "7d0b5c5e-555b-4754-8d32-d30f9774e394": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-11-02T00:40:26.237",
  "duration": 1500,
  "mode": 3
 },
 "56da2e96-8815-4798-a62c-d200a78af6fb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "TSM_Zexrow",
   "BBG Calc",
   "G2 MackWood"
  ],
  "time": "2020-11-02T00:10:21.871",
  "duration": 1495,
  "mode": 3
 },
 "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "FaZe Megga.",
   "Liquid Riversan",
   "FаZe Dubs ϟ"
  ],
  "time": "2020-11-01T23:40:24.126",
  "duration": 1472,
  "mode": 3
 },
 "1615c24a-b896-4ddc-a259-44dec05b4b67": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2020-11-01T23:10:19.48",
  "duration": 1556,
  "mode": 3
 },
 "624aa336-02bc-4703-b098-0e94a6960e25": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "Cоmmandment",
   "FaZe Cented",
   "NRG Edgey"
  ],
  "time": "2020-11-01T22:40:21.357",
  "duration": 1530,
  "mode": 3
 },
 "67748f68-7f01-4d6c-876a-7f371f314e5d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-11-01T22:10:15.644",
  "duration": 1513,
  "mode": 3
 },
 "f5036820-a3a3-43bb-8700-d9438b681941": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "TSM_Zexrow",
   "BBG Calc",
   "G2 MackWood"
  ],
  "time": "2020-11-01T00:25:18.468",
  "duration": 1479,
  "mode": 3
 },
 "4184e467-ca6b-40b7-92bd-936955843da5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke",
   "BBG PIECE POLICE"
  ],
  "time": "2020-10-31T23:55:22.516",
  "duration": 1521,
  "mode": 3
 },
 "608857f6-33a0-4c03-97d4-1126353d1bbb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2020-10-31T23:25:23.728",
  "duration": 1550,
  "mode": 3
 },
 "239f8060-c8e6-4ab4-998f-bb973bb20296": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "XSET Knight",
   "XSET Shark",
   "XSET Av"
  ],
  "time": "2020-10-31T22:55:23.925",
  "duration": 1507,
  "mode": 3
 },
 "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "XSET Knight",
   "XSET Shark",
   "XSET Av"
  ],
  "time": "2020-10-31T22:25:21.437",
  "duration": 1545,
  "mode": 3
 },
 "b835af4f-53e2-4f69-89a2-4fc7a84eeeee": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAE_PC_Grandfinals",
  "winners": [
   "SEN Aspect.",
   "LG Xoonies",
   "npen"
  ],
  "time": "2020-10-31T21:55:25.582",
  "duration": 1564,
  "mode": 3
 },
 "ba42b56b-e27a-4195-bedc-e2ba043cbb05": {
  "tournamentID": "epicgames_S14_Dreamhack_September_EU_Finals",
  "winners": [
   "Heretics K1nzеll"
  ],
  "time": "2020-09-20T22:34:28.306",
  "duration": 2208,
  "mode": 1
 },
 "038e60df-e644-4db7-bbfe-33c708410b4f": {
  "tournamentID": "epicgames_S14_Dreamhack_September_EU_Finals",
  "winners": [
   "ENDLESS Fray"
  ],
  "time": "2020-09-20T21:54:31.492",
  "duration": 2056,
  "mode": 1
 },
 "622951aa-7719-4752-bfcc-8b1695c1ac5c": {
  "tournamentID": "epicgames_S14_Dreamhack_September_EU_Finals",
  "winners": [
   "Gamma Th0masHD"
  ],
  "time": "2020-09-20T21:15:23.325",
  "duration": 1440,
  "mode": 1
 },
 "8c991412-e520-4b28-988f-ee43307084f6": {
  "tournamentID": "epicgames_S14_Dreamhack_September_EU_Finals",
  "winners": [
   "NaVi Putrick"
  ],
  "time": "2020-09-20T20:35:25.524",
  "duration": 1464,
  "mode": 1
 },
 "30c07066-a4df-4361-a06b-5230bd99c5b3": {
  "tournamentID": "epicgames_S14_Dreamhack_September_EU_Finals",
  "winners": [
   "Ηardfind"
  ],
  "time": "2020-09-20T19:54:24.464",
  "duration": 2000,
  "mode": 1
 },
 "8fe917ca-6015-494a-9600-2035af456db6": {
  "tournamentID": "epicgames_S14_Dreamhack_September_EU_Finals",
  "winners": [
   "vortex785348"
  ],
  "time": "2020-09-20T19:14:26.973",
  "duration": 1924,
  "mode": 1
 },
 "0c0eb25f-2318-4175-90f9-24948dab5b56": {
  "tournamentID": "epicgames_S14_Dreamhack_October_EU_Finals",
  "winners": [
   "GUILD Аnas"
  ],
  "time": "2020-10-22T22:35:22.811",
  "duration": 1486,
  "mode": 1
 },
 "37a556ce-a004-4149-b908-f4ae199ad3a6": {
  "tournamentID": "epicgames_S14_Dreamhack_October_EU_Finals",
  "winners": [
   "Heretics K1nzеll"
  ],
  "time": "2020-10-22T21:55:22.09",
  "duration": 1498,
  "mode": 1
 },
 "e5cfab56-f299-41cd-a05e-70fb7d70187b": {
  "tournamentID": "epicgames_S14_Dreamhack_October_EU_Finals",
  "winners": [
   "Castery 24"
  ],
  "time": "2020-10-22T21:15:22.105",
  "duration": 1497,
  "mode": 1
 },
 "023f332d-3d6d-4f07-ba5d-c86b0133ccd0": {
  "tournamentID": "epicgames_S14_Dreamhack_October_EU_Finals",
  "winners": [
   "nate -iwnl-"
  ],
  "time": "2020-10-22T20:35:22.054",
  "duration": 1475,
  "mode": 1
 },
 "0678617b-87d2-4650-a989-0a46a7178485": {
  "tournamentID": "epicgames_S14_Dreamhack_October_EU_Finals",
  "winners": [
   "G2 Letshe"
  ],
  "time": "2020-10-22T19:55:21.583",
  "duration": 1463,
  "mode": 1
 },
 "6bb01668-997c-41a8-a530-81f7891b4370": {
  "tournamentID": "epicgames_S14_Dreamhack_October_EU_Finals",
  "winners": [
   "xsweeze.mces"
  ],
  "time": "2020-10-22T19:15:21.095",
  "duration": 1461,
  "mode": 1
 },
 "220b5b59-97eb-4cfb-9f3c-5a7008087265": {
  "tournamentID": "epicgames_S14_Dreamhack_November_EU_Finals",
  "winners": [
   "NRG benjуfishу",
   "100T MrSavage"
  ],
  "time": "2020-11-08T20:35:23.481",
  "duration": 1459,
  "mode": 2
 },
 "1d4c120d-df2a-4032-967b-52d3811a4949": {
  "tournamentID": "epicgames_S14_Dreamhack_November_EU_Finals",
  "winners": [
   "Gamma Merijn",
   "jaspaay."
  ],
  "time": "2020-11-08T19:55:14.865",
  "duration": 1563,
  "mode": 2
 },
 "747b403e-9ad7-4f6f-9cb0-6eb0aab81027": {
  "tournamentID": "epicgames_S14_Dreamhack_November_EU_Finals",
  "winners": [
   "Lootboy RELLVIS",
   "crustі"
  ],
  "time": "2020-11-08T19:15:23.808",
  "duration": 1456,
  "mode": 2
 },
 "4e478d42-121c-461a-abc1-4280a92e1ee3": {
  "tournamentID": "epicgames_S14_Dreamhack_November_EU_Finals",
  "winners": [
   "BL Setty",
   "GXR teeq"
  ],
  "time": "2020-11-08T18:35:24.287",
  "duration": 1460,
  "mode": 2
 },
 "06623010-6d1b-494a-a72f-40aff5ffcd3a": {
  "tournamentID": "epicgames_S14_Dreamhack_November_EU_Finals",
  "winners": [
   "BL Setty",
   "GXR teeq"
  ],
  "time": "2020-11-08T17:55:22.162",
  "duration": 1518,
  "mode": 2
 },
 "12ac912d-1080-462a-bdac-4b09c3cc37da": {
  "tournamentID": "epicgames_S14_Dreamhack_November_EU_Finals",
  "winners": [
   "GXR Milаn",
   "oogway 74"
  ],
  "time": "2020-11-08T17:15:23.111",
  "duration": 1541,
  "mode": 2
 },
 "cb73579b-333e-4956-aec2-c3ff53e373dd": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-11T19:40:26.679",
  "duration": 1455,
  "mode": 3
 },
 "928f903b-ecd0-48c7-9bab-c4378217ae32": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "winners": [
   "BL Raifla",
   "BL SliX",
   "hREDS BELAEU."
  ],
  "time": "2020-10-11T19:10:22.515",
  "duration": 1511,
  "mode": 3
 },
 "20c201d6-42c6-4a96-8995-5e487050e877": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "winners": [
   "Lnuef",
   "Gamma Merijn",
   "jaspaay."
  ],
  "time": "2020-10-11T18:40:21.421",
  "duration": 1501,
  "mode": 3
 },
 "43c7eb85-f85a-4fa5-a84a-3b7805784b83": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2020-10-11T18:10:22.252",
  "duration": 1525,
  "mode": 3
 },
 "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "winners": [
   "BL Noahreyli ӝ",
   "COOLER aqua",
   "rezon ay лол"
  ],
  "time": "2020-10-11T17:40:22.704",
  "duration": 1481,
  "mode": 3
 },
 "a93e193d-eaa9-4235-a71a-471e2c514425": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-11T17:10:22.298",
  "duration": 1516,
  "mode": 3
 },
 "1b18eeee-cf1e-4fd6-b2eb-1a3a6be8cf47": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "time": "2020-10-10T19:40:20.016",
  "duration": 1414,
  "mode": 3
 },
 "2df8298c-3fbc-4c4b-9f68-4de7bec15989": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_EU_PC",
  "time": "2020-10-10T19:10:25.273",
  "duration": 1116,
  "mode": 3
 },
 "834b16e4-4f90-45c2-bb12-aeaae9c58bd6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "CL Sаfik",
   "VP Siberiajkee",
   "CL iRezUmi"
  ],
  "time": "2020-10-18T19:40:23.596",
  "duration": 1500,
  "mode": 3
 },
 "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-18T19:10:23.121",
  "duration": 1502,
  "mode": 3
 },
 "1e7a31a9-27a8-4e41-8a28-43478b6f1b03": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "Centric Rakso",
   "Gamma Kami",
   "BL artor"
  ],
  "time": "2020-10-18T18:40:25.468",
  "duration": 1580,
  "mode": 3
 },
 "1b09fe89-2c4a-4387-ba0f-61e6d1362d75": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-18T18:10:24.793",
  "duration": 1499,
  "mode": 3
 },
 "213fd00c-07bf-46d1-aa5c-34dbd5e35a03": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2020-10-18T17:40:23.785",
  "duration": 1496,
  "mode": 3
 },
 "36b5e838-88a5-4cff-86ef-2bcfec87c419": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-18T17:10:21.787",
  "duration": 1558,
  "mode": 3
 },
 "981321c3-982d-477e-ae48-1911d17188d5": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-10-17T19:40:22.203",
  "duration": 1717,
  "mode": 3
 },
 "67e8b67e-12d7-4db2-8a53-780969169f0c": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "GLORIOUS snаp",
   "Heretics Miro.",
   "Flames Swag 7"
  ],
  "time": "2020-10-17T19:10:22.753",
  "duration": 1469,
  "mode": 3
 },
 "13a058ad-6dd9-45f4-b753-d8fe6072ad74": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "LootBoy QueasKun",
   "GXR Milаn",
   "oogway 74"
  ],
  "time": "2020-10-17T18:40:22.226",
  "duration": 1499,
  "mode": 3
 },
 "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "LootBoy QueasKun",
   "GXR Milаn",
   "oogway 74"
  ],
  "time": "2020-10-17T18:10:23.086",
  "duration": 1512,
  "mode": 3
 },
 "2a679f38-a9eb-476c-a2d8-e9ac41ef673c": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "VP Kiryache32",
   "CL Rotory.",
   "Stormyrite 7"
  ],
  "time": "2020-10-17T17:40:22.671",
  "duration": 1507,
  "mode": 3
 },
 "e6106fb2-8482-4d1b-8a8d-da953c4f8e94": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_EU_PC",
  "winners": [
   "GLORIOUS snаp",
   "Heretics Miro.",
   "Flames Swag 7"
  ],
  "time": "2020-10-17T17:10:22.514",
  "duration": 1531,
  "mode": 3
 },
 "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "TrainH Umplify",
   "Adn 7",
   "TrainH Matsoe"
  ],
  "time": "2020-10-25T19:40:21.603",
  "duration": 1503,
  "mode": 3
 },
 "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "MCES Andilex",
   "GUILD JаnnisZ",
   "xsweeze.mces"
  ],
  "time": "2020-10-25T19:10:22.061",
  "duration": 1515,
  "mode": 3
 },
 "ac9c205f-977a-4c4d-9bb8-98de44e5c862": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "Refsgaard 7",
   "vitality stompy-",
   "NVD Skram"
  ],
  "time": "2020-10-25T18:40:21.461",
  "duration": 1515,
  "mode": 3
 },
 "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "CL l1nk マ",
   "NaVі 7tоr",
   "freеmoк"
  ],
  "time": "2020-10-25T18:10:20.906",
  "duration": 1515,
  "mode": 3
 },
 "4a54e477-3492-4908-83bd-3d55bdb2bc73": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "MCES Andilex",
   "GUILD JаnnisZ",
   "xsweeze.mces"
  ],
  "time": "2020-10-25T17:40:22.635",
  "duration": 1485,
  "mode": 3
 },
 "2b1388c8-a07e-4dac-b9c1-889ada9f992d": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "Vitаlity Airwaks",
   "Vatо",
   "leo FOFTY"
  ],
  "time": "2020-10-25T17:10:23.286",
  "duration": 1480,
  "mode": 3
 },
 "27af9543-6b5c-4dc0-b3a1-43f315886b46": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-10-24T19:40:26.85",
  "duration": 1514,
  "mode": 3
 },
 "c5a0ab94-08ee-48b3-866e-71136d4304c7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "qvado 1",
   "VP JAMSIDE",
   "Gambit.letw1k3"
  ],
  "time": "2020-10-24T19:10:17.596",
  "duration": 1490,
  "mode": 3
 },
 "71e83442-4b48-4aa0-8764-b3254d3157e5": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-10-24T18:40:22.391",
  "duration": 1515,
  "mode": 3
 },
 "b522fdb2-c3d7-4580-a71f-fcdb27f91878": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-24T18:10:17.723",
  "duration": 1545,
  "mode": 3
 },
 "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "Solarу Floki",
   "Clement_ttt",
   "naek0z"
  ],
  "time": "2020-10-24T17:40:17.082",
  "duration": 1544,
  "mode": 3
 },
 "4c560c87-3aa1-4084-b7c4-cf138f4d3a70": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_EU_PC",
  "winners": [
   "MCES Andilex",
   "GUILD JаnnisZ",
   "xsweeze.mces"
  ],
  "time": "2020-10-24T17:10:16.734",
  "duration": 1556,
  "mode": 3
 },
 "669f2e92-6ebc-4c3e-bc6b-c33bca230702": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "Playwell Vetle 7",
   "apeks IDrop 7",
   "Playwell Styrsix"
  ],
  "time": "2020-10-30T19:40:22.962",
  "duration": 1496,
  "mode": 3
 },
 "b702503b-f23e-4990-aa71-1d8fe23e9905": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2020-10-30T19:10:21.553",
  "duration": 1493,
  "mode": 3
 },
 "f8d94716-3400-4044-9e10-1e5eb031644a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-30T18:40:21.254",
  "duration": 1485,
  "mode": 3
 },
 "86f79adf-7bf0-4efa-95a7-d81b2358c141": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "Wave Vadeal",
   "Fastroki",
   "kylie freecs"
  ],
  "time": "2020-10-30T18:10:22.516",
  "duration": 1493,
  "mode": 3
 },
 "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "Aloft Voidd",
   "MonsterMuncher77",
   "Playwell Pnkayy"
  ],
  "time": "2020-10-30T17:40:22.063",
  "duration": 1531,
  "mode": 3
 },
 "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "Psycho maestro",
   "Psycho Styler",
   "M10 Ensar"
  ],
  "time": "2020-10-30T17:10:23.259",
  "duration": 1505,
  "mode": 3
 },
 "bb50d97f-13cb-4730-a963-a81c71f8c863": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "znaрру",
   "Michаel ツ",
   "wakıe"
  ],
  "time": "2020-10-29T19:40:19.926",
  "duration": 1538,
  "mode": 3
 },
 "ae3033e1-a736-4896-b680-ac298092de46": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "NRG benjуfishу",
   "100T MrSavage",
   "G2 Letshe"
  ],
  "time": "2020-10-29T19:10:22.054",
  "duration": 1515,
  "mode": 3
 },
 "10f7c9fb-5b1f-4870-a107-28082076c55b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-29T18:40:22.352",
  "duration": 1502,
  "mode": 3
 },
 "6d121c1e-d78d-4b2b-96fa-1b7949a72640": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "TRICKED Caspersa",
   "Zh1ny",
   "Fickzi"
  ],
  "time": "2020-10-29T18:10:22.378",
  "duration": 1497,
  "mode": 3
 },
 "f6fe3306-2842-4002-a7d5-88050f2bb1b8": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "Wave Vadeal",
   "Fastroki",
   "kylie freecs"
  ],
  "time": "2020-10-29T17:40:21.566",
  "duration": 1481,
  "mode": 3
 },
 "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat1",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2020-10-29T17:10:21.745",
  "duration": 1526,
  "mode": 3
 },
 "a7de3c0d-9f1a-4b22-86b5-47e796999e6b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "Solarу Floki",
   "Clement_ttt",
   "naek0z"
  ],
  "time": "2020-10-30T19:40:23.07",
  "duration": 1505,
  "mode": 3
 },
 "37c6a34a-3003-4586-b913-99c5909d32a7": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "Temperino.",
   "11M Zаrа",
   "darkeroonie"
  ],
  "time": "2020-10-30T19:10:22.974",
  "duration": 1485,
  "mode": 3
 },
 "dd672e97-7191-4e76-9d1c-29e2036fb64c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "Heretics K1nzеll",
   "wxlfiez",
   "fnc crr 21"
  ],
  "time": "2020-10-30T18:40:24.729",
  "duration": 1486,
  "mode": 3
 },
 "dff5b7cd-98f8-45d2-93c2-dd7d30673b79": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "TrainH Skite",
   "TrаinH Fаlconly",
   "yagsou"
  ],
  "time": "2020-10-30T18:10:23.201",
  "duration": 1470,
  "mode": 3
 },
 "cf662dcd-d704-43d7-8211-088e45a99785": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "slovay 74 lol",
   "GameWard Antorak",
   "Slq."
  ],
  "time": "2020-10-30T17:40:22.839",
  "duration": 1511,
  "mode": 3
 },
 "f57f50f5-7118-4a75-a879-6fc7891621f1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "Solarу Floki",
   "Clement_ttt",
   "naek0z"
  ],
  "time": "2020-10-30T17:10:22.427",
  "duration": 1454,
  "mode": 3
 },
 "f2764c8c-985b-465b-9c8e-7bb2d0d3d485": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "Heretics K1nzеll",
   "wxlfiez",
   "fnc crr 21"
  ],
  "time": "2020-10-29T19:40:20.802",
  "duration": 1523,
  "mode": 3
 },
 "c0ab7778-cbf4-4877-b769-5404b79b0378": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "VP Kiryache32",
   "CL Rotory.",
   "Stormyrite 7"
  ],
  "time": "2020-10-29T19:10:21.994",
  "duration": 1470,
  "mode": 3
 },
 "6c2deee4-c1d4-4e8c-a337-6550ab60b78f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "Solarу Floki",
   "Clement_ttt",
   "naek0z"
  ],
  "time": "2020-10-29T18:40:22.336",
  "duration": 1504,
  "mode": 3
 },
 "9d7d8a43-3f78-4075-bd94-4171aa8c6163": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "lucky Mr.J",
   "Onyx WingS",
   "Gambit Mawakha"
  ],
  "time": "2020-10-29T18:10:22.681",
  "duration": 1485,
  "mode": 3
 },
 "aa9c6661-aa11-4ee9-a33b-48a599c9e74a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "LootBoy QueasKun",
   "GXR Milаn",
   "oogway 74"
  ],
  "time": "2020-10-29T17:40:23.315",
  "duration": 1490,
  "mode": 3
 },
 "195a5d74-c92d-4dd9-ab21-afe04ff850e2": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat2",
  "winners": [
   "TrainH Skite",
   "TrаinH Fаlconly",
   "yagsou"
  ],
  "time": "2020-10-29T17:10:22.862",
  "duration": 1495,
  "mode": 3
 },
 "400a7dca-7ce9-4d31-8fc6-3f55df5aa789": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "MCES DKS",
   "DualMedia Snipeツ",
   "LOSC Mirza"
  ],
  "time": "2020-10-30T19:40:22.296",
  "duration": 1468,
  "mode": 3
 },
 "13fec864-9552-47b6-83a1-cd1ee7d83906": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-10-30T19:10:24.59",
  "duration": 1490,
  "mode": 3
 },
 "61c459e6-9ffb-491f-b5c8-0388213694f1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-10-30T18:40:23.468",
  "duration": 1488,
  "mode": 3
 },
 "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "qvado 1",
   "VP JAMSIDE",
   "Gambit.letw1k3"
  ],
  "time": "2020-10-30T18:10:24.431",
  "duration": 1474,
  "mode": 3
 },
 "8a8332c2-f069-441a-a8ed-56c5529dbb6d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "Centric Rakso",
   "Gamma Kami",
   "BL artor"
  ],
  "time": "2020-10-30T17:40:23.332",
  "duration": 1478,
  "mode": 3
 },
 "8d7de30e-97be-4a29-9638-4784d3c7dd5f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "BL Raifla",
   "BL SliX",
   "hREDS BELAEU."
  ],
  "time": "2020-10-30T17:10:23.903",
  "duration": 1497,
  "mode": 3
 },
 "bc152474-c959-40f3-95f6-527bb3787006": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "sjеfen",
   "Gеanzha",
   "NemZ 42"
  ],
  "time": "2020-10-29T19:40:22.055",
  "duration": 1531,
  "mode": 3
 },
 "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "SRN Skydeun",
   "braize.",
   "HOMYNO voxe"
  ],
  "time": "2020-10-29T19:10:22.526",
  "duration": 1520,
  "mode": 3
 },
 "54d559ae-8c2a-476c-9f3a-ed82d80d1327": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "six nueve zq",
   "Grizi Robabz",
   "eg0p1ayer.BDS"
  ],
  "time": "2020-10-29T18:40:23.344",
  "duration": 1494,
  "mode": 3
 },
 "8d40d810-2b69-4b0d-a0c4-29f6013eaebc": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "MCES Andilex",
   "GUILD JаnnisZ",
   "xsweeze.mces"
  ],
  "time": "2020-10-29T18:10:20.622",
  "duration": 1539,
  "mode": 3
 },
 "be66a7b2-ac2b-4034-9013-3e77053694de": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "SRN Skydeun",
   "braize.",
   "HOMYNO voxe"
  ],
  "time": "2020-10-29T17:40:22.842",
  "duration": 1527,
  "mode": 3
 },
 "5c0f36b9-bc89-4d53-a484-0890d9bfc147": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat3",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-10-29T17:10:20.901",
  "duration": 1503,
  "mode": 3
 },
 "3ebeceed-05a3-4e2d-b571-f6e3877b5af7": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "Monaco Anddone",
   "herrrrrrrrrrrrra",
   "Visu Orb"
  ],
  "time": "2020-10-30T19:40:23.799",
  "duration": 1508,
  "mode": 3
 },
 "25cd6894-c84c-4da1-b2dd-483a19f07f4e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "Lootboy Pinq 7",
   "COOLER Noward",
   "VEROХ"
  ],
  "time": "2020-10-30T19:10:28.099",
  "duration": 1528,
  "mode": 3
 },
 "55c1455a-8015-40ff-8512-895a80c648e6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "Vitаlity Airwaks",
   "Vatо",
   "leo FOFTY"
  ],
  "time": "2020-10-30T18:40:23.676",
  "duration": 1505,
  "mode": 3
 },
 "8a13305f-5949-4e48-b113-ed002f2194cf": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "sapiros",
   "hаlfdumb",
   "V4 Jur3ky"
  ],
  "time": "2020-10-30T18:10:24.529",
  "duration": 1475,
  "mode": 3
 },
 "a2d316e7-4d7b-4c40-bfd5-1942796d6e1f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "Centric Snagged7",
   "bl heatzy ψ",
   "wave steelix -.-"
  ],
  "time": "2020-10-30T17:40:29.619",
  "duration": 1525,
  "mode": 3
 },
 "c118590c-33f0-42e5-b7de-5546a76d85f9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "THE BIG DOWNS 유",
   "BL PabloWingu",
   "QB웃"
  ],
  "time": "2020-10-30T17:10:23.369",
  "duration": 1474,
  "mode": 3
 },
 "ed711cc9-ce63-415f-a466-9687cca1c7fb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "Refsgaard 7",
   "vitality stompy-",
   "NVD Skram"
  ],
  "time": "2020-10-29T19:40:21.869",
  "duration": 1520,
  "mode": 3
 },
 "a7832bbf-5e3a-4f1c-8def-0731c0d39416": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "etq 7",
   "IboooHai",
   "Not Hellfire 유"
  ],
  "time": "2020-10-29T19:10:21.792",
  "duration": 1484,
  "mode": 3
 },
 "21bcbf9a-cf90-47af-bd3c-220aabae2e4c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "etq 7",
   "IboooHai",
   "Not Hellfire 유"
  ],
  "time": "2020-10-29T18:40:23.191",
  "duration": 1534,
  "mode": 3
 },
 "0650246b-840c-4e48-8408-736789c93350": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "CL Sаfik",
   "VP Siberiajkee",
   "CL iRezUmi"
  ],
  "time": "2020-10-29T18:10:22.815",
  "duration": 1466,
  "mode": 3
 },
 "832551a9-86ec-4c91-b6fb-0e0e5f2ae64d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "troqz 7",
   "فانبويميثك",
   "TD xKumu"
  ],
  "time": "2020-10-29T17:40:22.884",
  "duration": 1481,
  "mode": 3
 },
 "117a40c6-ed4e-4b1c-b120-165fefa5f14c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Heat4",
  "winners": [
   "FF 1lusha7",
   "CL Fury",
   "OVA Rijas77"
  ],
  "time": "2020-10-29T17:10:22.103",
  "duration": 1498,
  "mode": 3
 },
 "434a5114-77ef-456f-8d6d-6c19acb1de67": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "GLORIOUS snаp",
   "Heretics Miro.",
   "Flames Swag 7"
  ],
  "time": "2020-11-01T21:10:24.27",
  "duration": 1448,
  "mode": 3
 },
 "21922a45-0eae-4bdf-8118-6ea608b08f33": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "seanvp.glrs",
   "Sqwinnt",
   "TT9 Remix"
  ],
  "time": "2020-11-01T20:40:20.66",
  "duration": 1499,
  "mode": 3
 },
 "1bee2bcd-7f4f-446f-94b9-32d02d2ff861": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "Centric Rakso",
   "Gamma Kami",
   "BL artor"
  ],
  "time": "2020-11-01T20:10:26.451",
  "duration": 1576,
  "mode": 3
 },
 "0e8faea0-35a9-4051-bac9-0f6522e08d3e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "GUILD Hen ӝ",
   "GO Decyptos",
   "NaVi Putrick"
  ],
  "time": "2020-11-01T19:40:24.61",
  "duration": 1499,
  "mode": 3
 },
 "6132fe4d-edd2-4ca2-aaed-7b2c76d65424": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2020-11-01T19:10:25.553",
  "duration": 1518,
  "mode": 3
 },
 "2b39352b-67aa-461b-9783-a9fb08e693cd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-11-01T18:40:11.724",
  "duration": 1493,
  "mode": 3
 },
 "157f2a69-556d-49bc-8d84-2990ad648a6e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "Centric Rakso",
   "Gamma Kami",
   "BL artor"
  ],
  "time": "2020-11-01T18:09:59.806",
  "duration": 1509,
  "mode": 3
 },
 "32c5f756-03db-4ee7-90e5-5762068931bb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-31T20:25:23.63",
  "duration": 1524,
  "mode": 3
 },
 "681cf3c3-36b4-4b80-b9d2-77174459d471": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "six nueve zq",
   "Grizi Robabz",
   "eg0p1ayer.BDS"
  ],
  "time": "2020-10-31T19:55:21.258",
  "duration": 1506,
  "mode": 3
 },
 "07f9e2b3-0d74-4061-99f9-2c2cad908ad0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "MCES Andilex",
   "GUILD JаnnisZ",
   "xsweeze.mces"
  ],
  "time": "2020-10-31T19:25:13.178",
  "duration": 1538,
  "mode": 3
 },
 "90c5a2d8-8aab-4be4-b24b-e88644392cbf": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "FaZe Mongrааl",
   "Lίquid mίtr0",
   "GUILD TаySon"
  ],
  "time": "2020-10-31T18:55:23.336",
  "duration": 1470,
  "mode": 3
 },
 "d5aff8bc-6c96-4267-a251-d063b960cf8d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_EU_PC_Grandfinals",
  "winners": [
   "Heretics K1nzеll",
   "wxlfiez",
   "fnc crr 21"
  ],
  "time": "2020-10-31T18:25:16.943",
  "duration": 1548,
  "mode": 3
 },
 "4da6b76b-9d61-4a0e-b782-1f4e67404d10": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "winners": [
   "Jаyr"
  ],
  "time": "2020-09-14T03:35:21.971",
  "duration": 1504,
  "mode": 1
 },
 "637929b3-0ad7-4c9b-8b79-301bf8d91384": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "winners": [
   "5G Nach"
  ],
  "time": "2020-09-14T02:55:21.029",
  "duration": 1554,
  "mode": 1
 },
 "057c8578-b775-4f91-90d9-adc58a8717fb": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "winners": [
   "G2 Jelty."
  ],
  "time": "2020-09-14T02:15:21.651",
  "duration": 1484,
  "mode": 1
 },
 "12798295-2ee6-49f2-988a-0827bf47f748": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "winners": [
   "LG Slackes"
  ],
  "time": "2020-09-14T01:35:16.155",
  "duration": 1558,
  "mode": 1
 },
 "18bfa040-9511-454c-80eb-66f491882100": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "winners": [
   "Akella Maken"
  ],
  "time": "2020-09-14T00:55:22.216",
  "duration": 1476,
  "mode": 1
 },
 "03ea7a23-3ca2-4468-938c-5a6c8a25a950": {
  "tournamentID": "epicgames_S14_Dreamhack_September_NAW_Finals",
  "winners": [
   "OA Whofishy"
  ],
  "time": "2020-09-14T00:15:22.116",
  "duration": 1521,
  "mode": 1
 },
 "5a95d5fe-1b2e-444d-8a87-aceb0d9d7e89": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "winners": [
   "C9 nosh"
  ],
  "time": "2020-10-09T07:35:20.07",
  "duration": 1488,
  "mode": 1
 },
 "3d290640-341e-40e5-93ad-7148c6a910f8": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "winners": [
   "XPRT Equitz"
  ],
  "time": "2020-10-09T06:55:19.86",
  "duration": 1473,
  "mode": 1
 },
 "2414a354-92b9-4023-9727-a5374ae41273": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "winners": [
   "XTRA Reet7"
  ],
  "time": "2020-10-09T06:15:19.644",
  "duration": 1496,
  "mode": 1
 },
 "c7daf8d9-2525-4c32-9af5-a0dcfc6535bd": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "winners": [
   "NRG EpikWhale"
  ],
  "time": "2020-10-09T05:35:20.015",
  "duration": 1531,
  "mode": 1
 },
 "47f5da81-885b-4ad3-817a-6fd5fcd0a066": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "winners": [
   "C9 nosh"
  ],
  "time": "2020-10-09T04:55:19.14",
  "duration": 1478,
  "mode": 1
 },
 "43272d45-268d-4366-b4c5-fbb8f32f4bb5": {
  "tournamentID": "epicgames_S14_Dreamhack_October_NAW_Finals",
  "winners": [
   "TRNL Criizux."
  ],
  "time": "2020-10-09T04:15:19.58",
  "duration": 1523,
  "mode": 1
 },
 "4d4fd7cc-e4ac-43bf-9b6d-4b415f554c51": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "winners": [
   "TRNL Lxdesman600",
   "Reg on CREX"
  ],
  "time": "2020-11-21T08:35:15.593",
  "duration": 1535,
  "mode": 2
 },
 "e724bbd7-9a2a-4fee-9942-9b4437e566c6": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "winners": [
   "WWG CoolPenguin",
   "NC zinqxzǃ"
  ],
  "time": "2020-11-21T07:55:21.678",
  "duration": 1536,
  "mode": 2
 },
 "05aba0bc-0e36-4d6a-b0a4-c7d5c249f86c": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "winners": [
   "ATL Vanillaz",
   "Yoris."
  ],
  "time": "2020-11-21T07:15:15.981",
  "duration": 1534,
  "mode": 2
 },
 "76c096e5-6e08-4b07-b841-479d0bb5ed2f": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "winners": [
   "100T Arkhram.",
   "XTRA Reet7"
  ],
  "time": "2020-11-21T06:35:17.19",
  "duration": 1524,
  "mode": 2
 },
 "7485169c-d7b0-4cb1-9c43-6d416eb1fae6": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "winners": [
   "100T Arkhram.",
   "XTRA Reet7"
  ],
  "time": "2020-11-21T05:55:15.631",
  "duration": 1470,
  "mode": 2
 },
 "d0c0c88e-806f-4301-a7f8-3a680ea0848e": {
  "tournamentID": "epicgames_S14_Dreamhack_November_NAW_Finals",
  "winners": [
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-11-21T05:15:15.665",
  "duration": 1507,
  "mode": 2
 },
 "437cb6b8-0e01-49d0-beba-987416206738": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "winners": [
   "Pure Nates Daddy",
   "5G Xetiq7",
   "Υаgi"
  ],
  "time": "2020-10-12T02:40:18.731",
  "duration": 1472,
  "mode": 3
 },
 "16fe1d92-f336-4c54-8678-7b33708e5738": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "winners": [
   "TRNL TrashyTHD",
   "TRNL exе",
   "Kyle Poppins 34"
  ],
  "time": "2020-10-12T02:10:20.684",
  "duration": 1516,
  "mode": 3
 },
 "5de74ac2-a37c-4822-bdc0-cd40db91c011": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-10-12T01:40:23.407",
  "duration": 1520,
  "mode": 3
 },
 "ee00dae4-1d6f-4918-9b6c-cae8af26cb64": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-10-12T01:10:21.518",
  "duration": 1513,
  "mode": 3
 },
 "8f02a046-929c-450c-b4ad-3a842a241b11": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-10-12T00:40:21.622",
  "duration": 1502,
  "mode": 3
 },
 "052d5bfb-39a9-4380-87b3-6117f63ab449": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "winners": [
   "pure optimal",
   "snow 143",
   "NorCal toff."
  ],
  "time": "2020-10-12T00:10:24.728",
  "duration": 1520,
  "mode": 3
 },
 "13d11528-7475-414e-854b-2f21533938f3": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_NAW_PC",
  "time": "2020-10-11T02:40:22.425",
  "duration": 509,
  "mode": 3
 },
 "e0f08e8f-858b-4b7d-915a-f7f124eae6fe": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "xtra leb",
   "4PF Ethan",
   "XTRA verT"
  ],
  "time": "2020-10-19T02:40:15.995",
  "duration": 1579,
  "mode": 3
 },
 "2b6cb84c-a93f-42c6-859a-f376a585c1a4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "pure spideyy",
   "NorCal Blizyzyzy",
   "5G nate tf up ツ"
  ],
  "time": "2020-10-19T02:10:19.299",
  "duration": 1470,
  "mode": 3
 },
 "179c2a67-f55d-4c31-aa61-348411661eba": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "TSG defiable",
   "Nuqloツ",
   "Brycеe."
  ],
  "time": "2020-10-19T01:40:23.727",
  "duration": 1506,
  "mode": 3
 },
 "2e057fd5-66d5-4506-8189-f96f012df7d4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-10-19T01:10:24.163",
  "duration": 1554,
  "mode": 3
 },
 "010c07b0-fb63-4880-9c3d-384783fcb1a6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "g0dku",
   "Outcast Triggy",
   "NC Vayne"
  ],
  "time": "2020-10-19T00:40:29.405",
  "duration": 1507,
  "mode": 3
 },
 "8e9f871c-c3f5-4c05-8312-0f23a11da681": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "twitter 1beastfn",
   "XTRA SeahorseTai",
   "TRNL Wheels"
  ],
  "time": "2020-10-19T00:10:25.361",
  "duration": 1536,
  "mode": 3
 },
 "5bd9e5c7-8d97-4bbc-88cf-c831454a33a8": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-10-18T02:40:22.092",
  "duration": 1557,
  "mode": 3
 },
 "6c85a760-2e00-4b01-a125-7ba04f3aa69f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "5G Dex 神",
   "konoszn",
   "favsfan932"
  ],
  "time": "2020-10-18T02:10:22.569",
  "duration": 1581,
  "mode": 3
 },
 "bbc96bda-3e26-49c3-8b20-18f36eacb390": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "sIіm",
   "5G Nitrix",
   "NC zinqxzǃ"
  ],
  "time": "2020-10-18T01:40:23.282",
  "duration": 1542,
  "mode": 3
 },
 "4d6fd240-5e1f-412c-9366-2a3b78d5b02b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-10-18T01:10:22.904",
  "duration": 1506,
  "mode": 3
 },
 "13bc0e4b-170b-44c4-8eb3-0d259b75a78f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-10-18T00:40:21.587",
  "duration": 1501,
  "mode": 3
 },
 "256188cc-180c-4c1a-8382-01a9c13c1762": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_NAW_PC",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-10-18T00:10:21.692",
  "duration": 1492,
  "mode": 3
 },
 "1deb7931-9eff-44b8-b3c1-e8e9c72376cf": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "sIіm",
   "5G Nitrix",
   "NC zinqxzǃ"
  ],
  "time": "2020-10-26T02:40:23.392",
  "duration": 1503,
  "mode": 3
 },
 "6af98aa5-4fad-40d7-85ac-30f790639c89": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "tsg kenshi",
   "Akella Maken",
   "TD Dog7"
  ],
  "time": "2020-10-26T02:10:22.966",
  "duration": 1469,
  "mode": 3
 },
 "6325a50d-577a-43b5-8633-bc31aca4ac50": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "xtra leb",
   "4PF Ethan",
   "XTRA verT"
  ],
  "time": "2020-10-26T01:40:22.086",
  "duration": 1524,
  "mode": 3
 },
 "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "NolbertoEZ",
   "NorCal Peppa",
   "Swarmqt."
  ],
  "time": "2020-10-26T01:10:22.491",
  "duration": 1487,
  "mode": 3
 },
 "17ad7b6a-66f8-4600-ab67-86b407f59a63": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "ThaiTanks",
   "5G KADENOX",
   "Devour Sake"
  ],
  "time": "2020-10-26T00:40:21.859",
  "duration": 1521,
  "mode": 3
 },
 "cc594674-3794-4db2-ab4e-f905c0398b08": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "tsg kenshi",
   "Akella Maken",
   "TD Dog7"
  ],
  "time": "2020-10-26T00:10:21.953",
  "duration": 1489,
  "mode": 3
 },
 "828208c3-2184-479c-a0d0-44460da34dd6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "LIТТLE B",
   "TEMPLE B",
   "clg versace p"
  ],
  "time": "2020-10-25T02:40:21.137",
  "duration": 1489,
  "mode": 3
 },
 "115e23b4-3410-479f-8bec-1f1c2abc76d9": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "LIТТLE B",
   "TEMPLE B",
   "clg versace p"
  ],
  "time": "2020-10-25T02:10:21.83",
  "duration": 1535,
  "mode": 3
 },
 "600829e3-5610-43ba-81dd-ca137090b927": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "xtra leb",
   "4PF Ethan",
   "XTRA verT"
  ],
  "time": "2020-10-25T01:40:22.442",
  "duration": 1466,
  "mode": 3
 },
 "59b065a8-51d2-437d-b7b3-fe84cb12a2e6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "tericcsan10",
   "July221",
   "djacoby7k"
  ],
  "time": "2020-10-25T01:10:22.005",
  "duration": 1529,
  "mode": 3
 },
 "60882822-919e-47d9-99cd-1a9412567518": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "juiсeǃ",
   "gawr gura fǃ",
   "piano17 x fakie5"
  ],
  "time": "2020-10-25T00:40:22.597",
  "duration": 1516,
  "mode": 3
 },
 "52c6d500-8d67-4b95-900a-e08ef526d4ea": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_NAW_PC",
  "winners": [
   "NАRS",
   "Vydo",
   "fozа"
  ],
  "time": "2020-10-25T00:10:23.05",
  "duration": 1492,
  "mode": 3
 },
 "adb99985-60cf-42bc-aa88-1860e1ae52aa": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "ZF jeckL",
   "ZH22 Squishy",
   "Balanced Mob"
  ],
  "time": "2020-10-31T02:40:18.891",
  "duration": 1464,
  "mode": 3
 },
 "51d49522-828c-482e-bd33-f9f9f08b57c3": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "twitter 1beastfn",
   "XTRA SeahorseTai",
   "TRNL Wheels"
  ],
  "time": "2020-10-31T02:10:23.579",
  "duration": 1483,
  "mode": 3
 },
 "780402fe-9040-4635-ba45-2fe46e078cd6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "razer naga",
   "ItsBocha TV",
   "sleepway 74"
  ],
  "time": "2020-10-31T01:40:21.655",
  "duration": 1459,
  "mode": 3
 },
 "ad2673f4-613f-4ec6-b7f7-04249f0257bb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "lmао.",
   "5G tonystark",
   "5G Zoluc"
  ],
  "time": "2020-10-31T01:10:22.083",
  "duration": 1521,
  "mode": 3
 },
 "e827488d-a83b-4c2e-ad00-72d180ef6844": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-10-31T00:40:25.261",
  "duration": 1521,
  "mode": 3
 },
 "52841f7a-5acd-4666-a8d7-d9765e811018": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "pure spideyy",
   "NorCal Blizyzyzy",
   "5G nate tf up ツ"
  ],
  "time": "2020-10-31T00:10:25.561",
  "duration": 1484,
  "mode": 3
 },
 "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "XТRA Reеt7",
   "CLST Hockle",
   "33 Weston"
  ],
  "time": "2020-10-30T02:40:22.274",
  "duration": 1492,
  "mode": 3
 },
 "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "pure optimal",
   "snow 143",
   "NorCal toff."
  ],
  "time": "2020-10-30T02:10:22.285",
  "duration": 1482,
  "mode": 3
 },
 "5133bc88-e83c-4a73-81a9-183dfd0b53ca": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-10-30T01:40:22.034",
  "duration": 1516,
  "mode": 3
 },
 "ed0f21aa-af4f-4ab8-95c5-092d5c80362f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "pure spideyy",
   "NorCal Blizyzyzy",
   "5G nate tf up ツ"
  ],
  "time": "2020-10-30T01:10:22.325",
  "duration": 1512,
  "mode": 3
 },
 "deeff861-ad61-4511-8423-d67831174ccd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-10-30T00:40:22.876",
  "duration": 1451,
  "mode": 3
 },
 "d7febf0a-7131-4315-804c-05c12dc70714": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat1",
  "winners": [
   "pure optimal",
   "snow 143",
   "NorCal toff."
  ],
  "time": "2020-10-30T00:10:23.001",
  "duration": 1522,
  "mode": 3
 },
 "0e093e4e-32d8-4e9f-969a-34c1d192c496": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "XTRA Quinn",
   "TRNL Lxdesman600",
   "XTRA MIDDISH"
  ],
  "time": "2020-10-31T02:40:22.973",
  "duration": 1439,
  "mode": 3
 },
 "42d0c444-232b-4b61-bad0-c3c6a7ece49f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "TRNL TrashyTHD",
   "TRNL exе",
   "Kyle Poppins 34"
  ],
  "time": "2020-10-31T02:10:22.309",
  "duration": 1423,
  "mode": 3
 },
 "1f26d28f-d97d-44b0-b74a-8150abdec4c0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "Ghost Sean",
   "TRNL Criizux.",
   "domо."
  ],
  "time": "2020-10-31T01:40:23.094",
  "duration": 1482,
  "mode": 3
 },
 "86e0c55f-d0ff-48f4-9cdb-d389829c87b5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "5G Nach",
   "9LIVES Slays",
   "PowurKG"
  ],
  "time": "2020-10-31T01:10:21.692",
  "duration": 1518,
  "mode": 3
 },
 "757a2642-3135-437c-8ac7-7c17c4280311": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "оIaf",
   "ACREE.",
   "demon аstа"
  ],
  "time": "2020-10-31T00:40:22.28",
  "duration": 1452,
  "mode": 3
 },
 "9111990b-b148-4b06-85fe-4553edd0a48c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "sIіm",
   "5G Nitrix",
   "NC zinqxzǃ"
  ],
  "time": "2020-10-31T00:10:22.795",
  "duration": 1511,
  "mode": 3
 },
 "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "5G Nach",
   "9LIVES Slays",
   "PowurKG"
  ],
  "time": "2020-10-30T02:40:24.314",
  "duration": 1523,
  "mode": 3
 },
 "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "sIіm",
   "5G Nitrix",
   "NC zinqxzǃ"
  ],
  "time": "2020-10-30T02:10:23.129",
  "duration": 1517,
  "mode": 3
 },
 "c8f8e244-dc83-492b-9802-0a5be550cee0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "TTV LimeV2",
   "KazqiGGs",
   "Sрencerz."
  ],
  "time": "2020-10-30T01:40:21.428",
  "duration": 1522,
  "mode": 3
 },
 "d7cc3473-6cd0-400e-8799-053e009c6828": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "5G Nach",
   "9LIVES Slays",
   "PowurKG"
  ],
  "time": "2020-10-30T01:10:22.239",
  "duration": 1532,
  "mode": 3
 },
 "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "norcal alithy",
   "daddy rift420",
   "NorCal Frap."
  ],
  "time": "2020-10-30T00:40:22.478",
  "duration": 1508,
  "mode": 3
 },
 "4c3d5471-6e9d-4cab-a192-d3fa90f9b947": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat2",
  "winners": [
   "CLG symetrical",
   "Pure Bombito",
   "jayrosez"
  ],
  "time": "2020-10-30T00:10:22.448",
  "duration": 1512,
  "mode": 3
 },
 "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "0-1 Xen Alexx",
   "Nedаk",
   "Lucish is bad"
  ],
  "time": "2020-10-31T02:40:19.961",
  "duration": 1427,
  "mode": 3
 },
 "a69bea61-0c0e-4095-84e5-9b9320d4817b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "washed coach",
   "BH Cepillín",
   "ВН Vеnor"
  ],
  "time": "2020-10-31T02:10:22.227",
  "duration": 1447,
  "mode": 3
 },
 "189541ea-fa28-4f21-bd34-cca4618e0ed5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "LIТТLE B",
   "TEMPLE B",
   "clg versace p"
  ],
  "time": "2020-10-31T01:40:23.691",
  "duration": 1452,
  "mode": 3
 },
 "4862a5e3-4de2-4116-9f66-200507ce049c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "LIТТLE B",
   "TEMPLE B",
   "clg versace p"
  ],
  "time": "2020-10-31T01:10:22.331",
  "duration": 1526,
  "mode": 3
 },
 "20b58abd-d300-48b8-82ec-0b639fedf4ce": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "TSG defiable",
   "Nuqloツ",
   "Brycеe."
  ],
  "time": "2020-10-31T00:40:22.968",
  "duration": 1500,
  "mode": 3
 },
 "9934d9c3-1bb5-4ae8-90cb-257f643b7107": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-10-31T00:10:14.741",
  "duration": 1512,
  "mode": 3
 },
 "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "ZH22 Inferno",
   "Relaklol",
   "Bdawg 04"
  ],
  "time": "2020-10-30T02:40:22.151",
  "duration": 1515,
  "mode": 3
 },
 "13a3acf8-c740-4d52-9f78-bcff0dc9032f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "5G Dex 神",
   "konoszn",
   "favsfan932"
  ],
  "time": "2020-10-30T02:10:22.006",
  "duration": 1513,
  "mode": 3
 },
 "132b3546-06f3-4259-94b8-5c35ae97148d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "محارب مريض unwet",
   "Zaеy",
   "CLST Finesse"
  ],
  "time": "2020-10-30T01:40:21.131",
  "duration": 1478,
  "mode": 3
 },
 "02f5081a-65b2-4482-bd82-f212846dbe81": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "tsg kenshi",
   "Akella Maken",
   "TD Dog7"
  ],
  "time": "2020-10-30T01:10:22.53",
  "duration": 1521,
  "mode": 3
 },
 "69872163-c22c-4206-ae23-7f4e9b9ce8f7": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-10-30T00:40:21.712",
  "duration": 1529,
  "mode": 3
 },
 "5a06554e-329e-46a9-aad1-c8229ec136ee": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat3",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-10-30T00:10:22.125",
  "duration": 1461,
  "mode": 3
 },
 "5efd6f68-3f76-4b87-aab8-8e50d645319e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "Voxie.",
   "CYFISH.",
   "Jаyr"
  ],
  "time": "2020-10-31T02:40:20.361",
  "duration": 1458,
  "mode": 3
 },
 "2d59b328-8c7a-4422-9a46-a812e2d692dd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "pure fjaa",
   "Coach Chad.",
   "HzExtinct."
  ],
  "time": "2020-10-31T02:10:23.932",
  "duration": 1479,
  "mode": 3
 },
 "4f7c9bb4-dbd8-402d-b51b-c336539c6066": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "pure fjaa",
   "Coach Chad.",
   "HzExtinct."
  ],
  "time": "2020-10-31T01:40:22.653",
  "duration": 1484,
  "mode": 3
 },
 "5b3f723b-0345-418d-b5f3-a597890bb02c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "TSG 1Tidal",
   "GUSHER SKILLZ",
   "Pure DaMechton"
  ],
  "time": "2020-10-31T01:10:22.9",
  "duration": 1490,
  "mode": 3
 },
 "57f694ed-98b9-45b4-b99a-f03cc0a478c7": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "TSG 1Tidal",
   "GUSHER SKILLZ",
   "Pure DaMechton"
  ],
  "time": "2020-10-31T00:40:21.324",
  "duration": 1501,
  "mode": 3
 },
 "9f93d23f-e922-4918-bf7f-c9db89224ed1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-10-31T00:10:26.583",
  "duration": 1500,
  "mode": 3
 },
 "87194a51-737f-401f-a755-15c34d62a849": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "5G bossbanana22",
   "TRNL Hov",
   "Xen Howdy"
  ],
  "time": "2020-10-30T02:40:20.883",
  "duration": 1520,
  "mode": 3
 },
 "549f9fe6-c533-4701-ac28-f37c97195a4f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "yt cyrzr",
   "5G Feared",
   "NorCal dylannx7"
  ],
  "time": "2020-10-30T02:10:22.633",
  "duration": 1533,
  "mode": 3
 },
 "2824188e-e995-45f2-a291-13af55302d80": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-10-30T01:40:22.424",
  "duration": 1491,
  "mode": 3
 },
 "478b92a0-71f1-4da1-93ca-2af16162d053": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "Adity.",
   "wouho xx",
   "02 Mint"
  ],
  "time": "2020-10-30T01:10:23.271",
  "duration": 1475,
  "mode": 3
 },
 "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "Dz xParrazek",
   "Timbers RevoAB",
   "MTS Lichota"
  ],
  "time": "2020-10-30T00:40:21.629",
  "duration": 1509,
  "mode": 3
 },
 "ca27e35c-7984-48a2-8417-4896ea24e4ca": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Heat4",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-10-30T00:10:21.869",
  "duration": 1495,
  "mode": 3
 },
 "1a62700b-2193-4568-9cb8-7854b6652daf": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "pure spideyy",
   "NorCal Blizyzyzy",
   "5G nate tf up ツ"
  ],
  "time": "2020-11-02T03:40:22.198",
  "duration": 1578,
  "mode": 3
 },
 "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "g0dku",
   "Outcast Triggy",
   "NC Vayne"
  ],
  "time": "2020-11-02T03:10:22.606",
  "duration": 1448,
  "mode": 3
 },
 "93a228fe-3393-4c99-9a46-a7e530568e6b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-11-02T02:40:25.523",
  "duration": 1507,
  "mode": 3
 },
 "5992714d-9c61-4947-9a1e-906ac139f3af": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-11-02T02:10:20.685",
  "duration": 1511,
  "mode": 3
 },
 "8b7705b7-e17d-4546-ba13-6d711f1b9f68": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "LIТТLE B",
   "TEMPLE B",
   "clg versace p"
  ],
  "time": "2020-11-02T01:40:19.005",
  "duration": 1418,
  "mode": 3
 },
 "c1aa2094-066f-47da-a07d-ededf6afa045": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "sIіm",
   "5G Nitrix",
   "NC zinqxzǃ"
  ],
  "time": "2020-11-02T01:10:23.913",
  "duration": 1463,
  "mode": 3
 },
 "50e2c439-8e6a-49c2-90d4-3209dfdc1e58": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-11-01T03:25:22.396",
  "duration": 1501,
  "mode": 3
 },
 "2b8f747f-353f-4efd-8a2f-ca8c216c3775": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "XTRA Reet7",
   "alexgοnzsoccer85",
   "bizqufan932"
  ],
  "time": "2020-11-01T02:55:24.875",
  "duration": 1466,
  "mode": 3
 },
 "0aafbe5e-49dc-40f8-986d-44dabadb1028": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "CLG symetrical",
   "Pure Bombito",
   "jayrosez"
  ],
  "time": "2020-11-01T02:25:21.828",
  "duration": 1508,
  "mode": 3
 },
 "1a127a34-bd12-41e2-be73-d1d5e719fe84": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2020-11-01T01:55:25.728",
  "duration": 1530,
  "mode": 3
 },
 "75e91277-a8ab-4807-b701-7b6b7d1710c1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "100T Falconer",
   "TurtleTavern",
   "4DRStorm."
  ],
  "time": "2020-11-01T01:25:22.718",
  "duration": 1557,
  "mode": 3
 },
 "2361adbf-6acc-470b-af14-d980abf9ffd6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_NAW_PC_Grandfinals",
  "winners": [
   "5G Dex 神",
   "konoszn",
   "favsfan932"
  ],
  "time": "2020-11-01T00:55:22.103",
  "duration": 1496,
  "mode": 3
 },
 "85619cb5-883d-4dec-a308-6caa9d699750": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "winners": [
   "ALBAひろ.椿",
   "KUREN 覇",
   "ALBA ROCCA"
  ],
  "time": "2020-10-11T10:40:22.362",
  "duration": 1490,
  "mode": 3
 },
 "5c6f7f6f-ac29-464f-ae0f-b94487424b03": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2020-10-11T10:10:22.635",
  "duration": 1519,
  "mode": 3
 },
 "08aa9d13-f9db-42af-8e20-733c538f9eeb": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-11T09:40:23.832",
  "duration": 1490,
  "mode": 3
 },
 "13126440-0313-40c6-a467-7953510530a7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "winners": [
   "stork 笑",
   "DaAllen.",
   "くれめんす 改"
  ],
  "time": "2020-10-11T09:10:01.281",
  "duration": 1544,
  "mode": 3
 },
 "82e16cfb-8aff-4250-904e-6cfb94d78ea0": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2020-10-11T08:40:21.09",
  "duration": 1521,
  "mode": 3
 },
 "5081a612-ace6-4471-8573-51483eec2ec4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-11T08:10:22.524",
  "duration": 1521,
  "mode": 3
 },
 "018aea5d-96a3-41bc-b5ee-e677b68cdfb3": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ASIA_PC",
  "time": "2020-10-10T10:40:22.945",
  "duration": 1360,
  "mode": 3
 },
 "613c2fd4-6fc8-49cd-84c2-f5d4a302e964": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "Ruiサナ",
   "私はたっとです",
   "CR スカっとスカスカ"
  ],
  "time": "2020-10-18T10:40:22.932",
  "duration": 1482,
  "mode": 3
 },
 "d9d6f126-70e0-4e17-980c-5e1e2c163194": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "Korox2 Ѧ",
   "Ṭzuyu2k",
   "LBR やま"
  ],
  "time": "2020-10-18T10:10:06.314",
  "duration": 1541,
  "mode": 3
 },
 "07716c3a-6550-429a-8686-9a7a0b1bcd1f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2020-10-18T09:40:21.721",
  "duration": 1540,
  "mode": 3
 },
 "4b0fb982-c7e3-431c-8a73-f57373a15c73": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "Hayatentacion",
   "さざんとレクイエム",
   "しゅらレクイエム"
  ],
  "time": "2020-10-18T09:10:21.918",
  "duration": 1530,
  "mode": 3
 },
 "6cb37152-3834-4670-bc89-921b2f36d939": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "CR QJАC",
   "Rid WildHawk ゆ機",
   "cr naetor様"
  ],
  "time": "2020-10-18T08:40:25.391",
  "duration": 1528,
  "mode": 3
 },
 "50f97e5f-b57f-4dfd-a480-d13db00e81fa": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "181.77.20",
   "T1 Quickss 75",
   "Backho.백호"
  ],
  "time": "2020-10-18T08:10:26.01",
  "duration": 1542,
  "mode": 3
 },
 "099cca3c-2ce3-463a-96f2-b0ea655ac9a5": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-17T10:40:22.77",
  "duration": 1503,
  "mode": 3
 },
 "402b8491-7945-4f01-81d8-7be7187d95a6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2020-10-17T10:10:22.631",
  "duration": 1492,
  "mode": 3
 },
 "1d5f9080-7c4f-471a-adc7-493b3989e319": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2020-10-17T09:40:22.707",
  "duration": 1495,
  "mode": 3
 },
 "0dfe6b63-8091-4a36-ad80-9f66a1781fcd": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-17T09:10:22.532",
  "duration": 1494,
  "mode": 3
 },
 "0976042d-0087-4985-8788-ca06d40439a2": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-17T08:40:21.981",
  "duration": 1542,
  "mode": 3
 },
 "286ff342-5ae8-4646-b8c4-6638c1972393": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ASIA_PC",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-17T08:10:22.594",
  "duration": 1466,
  "mode": 3
 },
 "abd5f826-ae67-4c44-939f-dd05c61deb57": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-25T10:40:24.015",
  "duration": 1503,
  "mode": 3
 },
 "5d1cd72e-be7c-4832-87f1-3aa49c3f553b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-25T10:10:22.418",
  "duration": 1479,
  "mode": 3
 },
 "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2020-10-25T09:40:23.253",
  "duration": 1518,
  "mode": 3
 },
 "72c86e06-696e-49d7-9917-7129ec4c5620": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "Ragna G Justice",
   "俺は天下の大将軍になる男だ",
   "CCC_ALBAだだんだんだんご"
  ],
  "time": "2020-10-25T09:10:23.283",
  "duration": 1504,
  "mode": 3
 },
 "73c34cca-6669-4f04-ab4f-f4b8e063bf48": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-25T08:40:21.788",
  "duration": 1527,
  "mode": 3
 },
 "135ab22d-4bfd-4b63-84fc-2dcdf937428e": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-25T08:10:21.84",
  "duration": 1524,
  "mode": 3
 },
 "05fceef1-1f87-4b14-ac92-406768e74d6b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-24T10:40:17.854",
  "duration": 1558,
  "mode": 3
 },
 "6c036597-1628-45f7-9ecb-501d64442a84": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-24T10:10:17.291",
  "duration": 1466,
  "mode": 3
 },
 "11979f81-b68b-452b-b7ae-46a1eeb4bff0": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "ALBA まるお",
   "FA たかちゃん",
   "Magu Ψ"
  ],
  "time": "2020-10-24T09:40:17.601",
  "duration": 1553,
  "mode": 3
 },
 "03be06ac-93d0-4ff7-ac75-8d49245e40e4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-24T09:10:18.365",
  "duration": 1560,
  "mode": 3
 },
 "0f29f1af-f697-4ef0-a6a3-6c8e104cd288": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "ぽこきん.",
   "Tori 峻",
   "アニマルまさきプラネット"
  ],
  "time": "2020-10-24T08:40:17.292",
  "duration": 1559,
  "mode": 3
 },
 "169235b0-8d02-4ed3-ab35-283352ac81f8": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ASIA_PC",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-24T08:10:17.742",
  "duration": 1540,
  "mode": 3
 },
 "1c806c2d-8393-431a-ac72-4315848b7909": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-30T10:40:23.02",
  "duration": 1482,
  "mode": 3
 },
 "64617123-2db0-465f-9572-8c50fe1ce5e1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-30T10:10:22.128",
  "duration": 1497,
  "mode": 3
 },
 "cba38856-5f18-4cc9-bfce-983e304d9ea8": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-30T09:40:21.549",
  "duration": 1522,
  "mode": 3
 },
 "3a83964f-c1eb-44ed-89ba-265a5a89c3b2": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-30T09:10:23.795",
  "duration": 1532,
  "mode": 3
 },
 "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-30T08:40:22.244",
  "duration": 1487,
  "mode": 3
 },
 "95b12617-6a27-49f1-ab79-77f670ef9182": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "stork 笑",
   "DaAllen.",
   "くれめんす 改"
  ],
  "time": "2020-10-30T08:10:22.662",
  "duration": 1540,
  "mode": 3
 },
 "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-29T10:40:27.435",
  "duration": 1526,
  "mode": 3
 },
 "36075757-9864-44e7-a88e-65133bf562c6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "FaxFox77"
  ],
  "time": "2020-10-29T10:10:21.988",
  "duration": 1476,
  "mode": 3
 },
 "4e98ccfe-f88f-48bf-9730-0803570a6d2d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "Secret xEllthuR",
   "私の彼女 まいぽり",
   "僕の彼女 ぽて"
  ],
  "time": "2020-10-29T09:40:27.964",
  "duration": 1520,
  "mode": 3
 },
 "5027016a-7315-4dd9-bf3a-a1384f6e3b48": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-29T09:10:21.843",
  "duration": 1502,
  "mode": 3
 },
 "8809252f-13f3-44d9-8bb9-0613f20cb179": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "GW_Lettuce",
   "CREssway",
   "GW_Hamuppi"
  ],
  "time": "2020-10-29T08:40:23.057",
  "duration": 1494,
  "mode": 3
 },
 "66546263-6f08-43f7-8460-69b78bc9830b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat1",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-10-29T08:10:28.134",
  "duration": 1520,
  "mode": 3
 },
 "11e7c510-3195-4e20-9d41-730769968eb9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "りんかー浜田ジェームズブライアン",
   "ALBA iNyy",
   "Rid Rimr Knight"
  ],
  "time": "2020-10-30T10:40:22.323",
  "duration": 1494,
  "mode": 3
 },
 "56599e89-5a2f-4a98-a779-6d6968298b9f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-30T10:10:21.921",
  "duration": 1520,
  "mode": 3
 },
 "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-30T09:40:20.991",
  "duration": 1480,
  "mode": 3
 },
 "9eb95655-9050-4ad9-be8e-dd9544704768": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "CRノRiz",
   "GOL.D.RОGER",
   "Swillium"
  ],
  "time": "2020-10-30T09:10:26.938",
  "duration": 1506,
  "mode": 3
 },
 "1ead4e32-078a-496f-9678-1c56d2d0f84a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-30T08:40:24.36",
  "duration": 1468,
  "mode": 3
 },
 "ed0c989d-2995-425b-af18-d0ab17b8dfe1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "крыса0_о",
   "SR Atlxntid",
   "1MPyt"
  ],
  "time": "2020-10-30T08:10:22.208",
  "duration": 1524,
  "mode": 3
 },
 "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "CRノRiz",
   "GOL.D.RОGER",
   "Swillium"
  ],
  "time": "2020-10-29T10:40:22.147",
  "duration": 1511,
  "mode": 3
 },
 "037e83ca-30ab-4b9c-bcb5-4da24980159d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-29T10:10:22.095",
  "duration": 1478,
  "mode": 3
 },
 "06b9a200-251f-441f-b26c-43837a5608b0": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "alba L4ex",
   "Štunt",
   "あぁああぁぁあぁぁぁあああぁああ"
  ],
  "time": "2020-10-29T09:40:22.562",
  "duration": 1482,
  "mode": 3
 },
 "0ddc06d0-dccb-4abf-a448-0f35c4fedd07": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-29T09:10:21.697",
  "duration": 1476,
  "mode": 3
 },
 "0b299c5a-d55b-409c-95f0-d8fad8d1e707": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "りんかー浜田ジェームズブライアン",
   "ALBA iNyy",
   "Rid Rimr Knight"
  ],
  "time": "2020-10-29T08:40:21.857",
  "duration": 1524,
  "mode": 3
 },
 "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Heat2",
  "winners": [
   "ALBAひろ.椿",
   "KUREN 覇",
   "ALBA ROCCA"
  ],
  "time": "2020-10-29T08:10:22.638",
  "duration": 1500,
  "mode": 3
 },
 "57244fef-41ec-40e5-8c1a-dcb426fbd4a5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "CR QJАC",
   "Rid WildHawk ゆ機",
   "cr naetor様"
  ],
  "time": "2020-11-01T10:40:22.082",
  "duration": 1542,
  "mode": 3
 },
 "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "Ruiサナ",
   "私はたっとです",
   "CR スカっとスカスカ"
  ],
  "time": "2020-11-01T10:10:20.906",
  "duration": 1499,
  "mode": 3
 },
 "8c929872-1b2a-4628-b0fa-cefe466afcad": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "stork 笑",
   "DaAllen.",
   "くれめんす 改"
  ],
  "time": "2020-11-01T09:40:24.207",
  "duration": 1472,
  "mode": 3
 },
 "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "stork 笑",
   "DaAllen.",
   "くれめんす 改"
  ],
  "time": "2020-11-01T09:10:17.555",
  "duration": 1470,
  "mode": 3
 },
 "87fdfe4c-3bcf-4d12-b612-01b0b8f91739": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2020-11-01T08:40:21.522",
  "duration": 1488,
  "mode": 3
 },
 "1c487fb2-92a1-47d1-8766-737a8c2964ea": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-11-01T08:10:20.839",
  "duration": 1542,
  "mode": 3
 },
 "6de4b645-4b29-41c6-89b5-e36a7b9afe56": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "헤으응 눈나 나 죽어",
   "losing life",
   "Misty Aim"
  ],
  "time": "2020-10-31T11:25:55",
  "duration": 1533,
  "mode": 3
 },
 "3fc83f0a-1f25-41af-9719-cdf643f36e86": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "Korox2 Ѧ",
   "Ṭzuyu2k",
   "LBR やま"
  ],
  "time": "2020-10-31T10:56:09",
  "duration": 1520,
  "mode": 3
 },
 "7fd44734-c322-4b01-95cc-665e32e00a58": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-31T10:26:23",
  "duration": 1519,
  "mode": 3
 },
 "70889ca0-3e27-43ce-bb1b-f10f9baadb87": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-31T09:56:26",
  "duration": 1492,
  "mode": 3
 },
 "57a285e3-71d5-4121-b6aa-92a516628b6f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "The Kid MAESAR",
   "Macyfishy",
   "SHINCK ON TOP"
  ],
  "time": "2020-10-31T09:26:17",
  "duration": 1551,
  "mode": 3
 },
 "2a2117f1-6e55-46e8-be63-bacf0facd249": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ASIA_PC_Grandfinals",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2020-10-31T08:57:30",
  "duration": 1539,
  "mode": 3
 },
 "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T22:40:23.573",
  "duration": 1497,
  "mode": 3
 },
 "b6e6b7d6-c120-4ff4-86ea-d42397b7b771": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T22:10:24.438",
  "duration": 1501,
  "mode": 3
 },
 "0fbaf302-33a9-4297-85e4-4dcf9182eb93": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T21:40:24.486",
  "duration": 1488,
  "mode": 3
 },
 "2fcfc4af-8ff4-4a88-804a-94c98719c9ba": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T21:10:24.617",
  "duration": 1484,
  "mode": 3
 },
 "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T20:40:24.813",
  "duration": 1526,
  "mode": 3
 },
 "99b5782f-3572-4f5c-9d92-fa4a0ab102e9": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "TRIBE Liimaa",
   "brabo punisher",
   "scan punisher"
  ],
  "time": "2020-10-11T20:10:23.179",
  "duration": 1498,
  "mode": 3
 },
 "555509a4-21ba-4455-8ae1-bd8cbbe8b114": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T19:40:23.738",
  "duration": 1500,
  "mode": 3
 },
 "38f83d37-7f19-4db0-ae42-b744035d3c85": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-11T19:10:24.434",
  "duration": 1535,
  "mode": 3
 },
 "0abbd3ed-1216-4f09-a301-533da1103fd1": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "time": "2020-10-10T20:40:40",
  "duration": 1440,
  "mode": 3
 },
 "0a013f07-6696-4d67-aba4-4160e8c90171": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "time": "2020-10-10T20:10:32",
  "duration": 1403,
  "mode": 3
 },
 "19641f59-6604-4c27-9309-f377deaaf091": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "time": "2020-10-10T19:40:27",
  "duration": 890,
  "mode": 3
 },
 "0b4b8db2-f10b-4f64-ba40-338ebde355f9": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_BR_PC",
  "time": "2020-10-10T19:10:40",
  "duration": 1496,
  "mode": 3
 },
 "6247d894-a139-4767-8617-d8ba83d9029e": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-18T21:40:27.344",
  "duration": 1521,
  "mode": 3
 },
 "0e2a4261-80a2-4a57-9c53-406ed6e5ef59": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-18T21:10:26.46",
  "duration": 1556,
  "mode": 3
 },
 "1ba92a78-2168-40f5-b97d-64105cff52a5": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-18T20:40:22.906",
  "duration": 1525,
  "mode": 3
 },
 "70b0994a-fe11-475c-9077-a7efab9a4b22": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "SNOW FINAL BOSS",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2020-10-18T20:10:23.821",
  "duration": 1486,
  "mode": 3
 },
 "1335bde3-db85-48a5-9e51-eb7ced14cc32": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-18T19:40:23.94",
  "duration": 1537,
  "mode": 3
 },
 "5302a923-2a33-4db6-8da8-48afcde5c810": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-18T19:10:25.172",
  "duration": 1502,
  "mode": 3
 },
 "1168c7c1-ab17-4ec3-b9af-2135cffd65c0": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "FURY sнeco",
   "FURY histtory",
   "rоbоtt"
  ],
  "time": "2020-10-17T21:40:24.566",
  "duration": 1480,
  "mode": 3
 },
 "2da3121c-0af6-462b-9243-beb256562a04": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-17T21:10:24.014",
  "duration": 1472,
  "mode": 3
 },
 "1538e132-7b0d-4b89-9e23-8d03e918d17b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-17T20:40:23.703",
  "duration": 1510,
  "mode": 3
 },
 "666600ae-a561-4182-ac76-879248e878ce": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-17T20:10:21.862",
  "duration": 1505,
  "mode": 3
 },
 "0af98349-2f40-4c80-ac0b-3059c7d317fe": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-17T19:40:24.989",
  "duration": 1475,
  "mode": 3
 },
 "80328a9d-7457-4a07-bd66-f808a1b6b340": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_BR_PC",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-17T19:10:23.14",
  "duration": 1491,
  "mode": 3
 },
 "a611afcc-b65f-4b91-a94d-7fb9495cee05": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-25T21:40:24.245",
  "duration": 1483,
  "mode": 3
 },
 "3aab881e-1377-464f-b287-deb42ea22a15": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "eRa KBR -ɢ-",
   "9z Barella1x",
   "The Refletz"
  ],
  "time": "2020-10-25T21:10:28.829",
  "duration": 1489,
  "mode": 3
 },
 "a83768cc-b4db-4da8-8aee-1816bc9ba6c2": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "persa smoke",
   "TRNL Ed",
   "nicks golden boy"
  ],
  "time": "2020-10-25T20:40:24.111",
  "duration": 1532,
  "mode": 3
 },
 "12480a47-8ef1-431d-8290-4e9dad447803": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "9z FiѕhyL2R2",
   "Æ Riquelmee",
   "tsg sanku"
  ],
  "time": "2020-10-25T20:10:23.63",
  "duration": 1503,
  "mode": 3
 },
 "0a19df72-e30e-4e4c-9fdc-a418488f5dff": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-25T19:40:23.541",
  "duration": 1514,
  "mode": 3
 },
 "1d5a670a-8952-4be6-8735-d6fd5ee60ed0": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-25T19:10:23.921",
  "duration": 1521,
  "mode": 3
 },
 "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-24T21:40:23.903",
  "duration": 1479,
  "mode": 3
 },
 "071b48ba-7ead-496c-ae62-584f50db44aa": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-24T21:10:23.504",
  "duration": 1495,
  "mode": 3
 },
 "09467da1-2264-4b31-9e41-c033f3d5fd31": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "LOUD lelеo",
   "diguera7",
   "SNG kıng"
  ],
  "time": "2020-10-24T20:40:23.513",
  "duration": 1526,
  "mode": 3
 },
 "218e3343-e043-4fe9-bcf7-d23f8a919215": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "TCE Lucasg",
   "spıtflow",
   "Brunão Pocotó"
  ],
  "time": "2020-10-24T20:10:23.56",
  "duration": 1543,
  "mode": 3
 },
 "0b06e3a9-2862-4a42-a30b-6cc7285def75": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "eRa cadu",
   "TRNL bedin",
   "ktz 1"
  ],
  "time": "2020-10-24T19:40:23.213",
  "duration": 1498,
  "mode": 3
 },
 "7c3063d7-a390-457b-8641-7767fff16734": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_BR_PC",
  "winners": [
   "Revenge Sync",
   "Beтто",
   "Nаvars"
  ],
  "time": "2020-10-24T19:10:21.089",
  "duration": 1526,
  "mode": 3
 },
 "513b7333-d4cf-4376-8e38-c6c6a1617a27": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "FURY sнeco",
   "FURY histtory",
   "rоbоtt"
  ],
  "time": "2020-10-30T21:40:24.004",
  "duration": 1526,
  "mode": 3
 },
 "c5edbb57-6d68-43ac-b5e0-61147b122c5e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "9z sant",
   "KRU Leobas",
   "eRa Clipnode 8"
  ],
  "time": "2020-10-30T21:10:23.698",
  "duration": 1515,
  "mode": 3
 },
 "0103de85-f669-4a64-956f-12fb960700ca": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "eRa KBR -ɢ-",
   "9z Barella1x",
   "The Refletz"
  ],
  "time": "2020-10-30T20:40:24.361",
  "duration": 1476,
  "mode": 3
 },
 "2d5c6f8e-f6fb-4e82-a76c-925356d2304a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "saint 76",
   "dario demon mode",
   "Trоpphy"
  ],
  "time": "2020-10-30T20:10:24.439",
  "duration": 1525,
  "mode": 3
 },
 "0ec85936-1616-4c8a-9cb9-873b4875127f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "NW9 rpg",
   "HiT Irikura9x",
   "Мagni"
  ],
  "time": "2020-10-30T19:40:23.685",
  "duration": 1521,
  "mode": 3
 },
 "55b862c6-8029-4a59-a17f-bf144220b1ee": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "eRa KBR -ɢ-",
   "9z Barella1x",
   "The Refletz"
  ],
  "time": "2020-10-30T19:10:25.744",
  "duration": 1520,
  "mode": 3
 },
 "60193dff-c18b-4910-8330-c0718afed6cd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "9z H4wwk",
   "Suetam .",
   "TCE cocak1ng"
  ],
  "time": "2020-10-29T21:40:24.013",
  "duration": 1528,
  "mode": 3
 },
 "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "9z FiѕhyL2R2",
   "Æ Riquelmee",
   "tsg sanku"
  ],
  "time": "2020-10-29T21:10:23.247",
  "duration": 1525,
  "mode": 3
 },
 "1865a005-107e-45cd-b884-3777d8f6f4e6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "RedbullKing.",
   "pogba beiby",
   "Wolves YoungYino"
  ],
  "time": "2020-10-29T20:40:23.603",
  "duration": 1491,
  "mode": 3
 },
 "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "eRa KBR -ɢ-",
   "9z Barella1x",
   "The Refletz"
  ],
  "time": "2020-10-29T20:10:22.85",
  "duration": 1477,
  "mode": 3
 },
 "05eba675-b02d-4a79-a8b7-55abd0a53521": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "9z H4wwk",
   "Suetam .",
   "TCE cocak1ng"
  ],
  "time": "2020-10-29T19:40:22.344",
  "duration": 1519,
  "mode": 3
 },
 "81935dae-47cd-4183-ad71-a347c8beb822": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat1",
  "winners": [
   "persa smoke",
   "TRNL Ed",
   "nicks golden boy"
  ],
  "time": "2020-10-29T19:10:22.885",
  "duration": 1502,
  "mode": 3
 },
 "c7ef4a45-8ae1-42bc-88bb-168265dab6b6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "mуstick",
   "eRa gordinho",
   "TRIBE OPai"
  ],
  "time": "2020-10-30T21:40:23.38",
  "duration": 1477,
  "mode": 3
 },
 "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "TDDEMOCNEYACHE32",
   "Æ fazer74",
   "Æ Germán22"
  ],
  "time": "2020-10-30T21:10:27.186",
  "duration": 1519,
  "mode": 3
 },
 "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-30T20:40:24.071",
  "duration": 1479,
  "mode": 3
 },
 "ebaff9f7-6d73-4384-a932-d78a9af560fd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-30T20:10:24.198",
  "duration": 1476,
  "mode": 3
 },
 "56b5bc52-746a-4638-b9e1-335dbda48195": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-30T19:40:25.814",
  "duration": 1481,
  "mode": 3
 },
 "72a0df76-de5d-469a-86a0-99d38d7c4f07": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "mуstick",
   "eRa gordinho",
   "TRIBE OPai"
  ],
  "time": "2020-10-30T19:10:23.773",
  "duration": 1527,
  "mode": 3
 },
 "437b3023-e530-4555-b0e6-d0c7823dd587": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "TDDEMOCNEYACHE32",
   "Æ fazer74",
   "Æ Germán22"
  ],
  "time": "2020-10-29T21:40:24.263",
  "duration": 1521,
  "mode": 3
 },
 "46393331-677f-4250-8e89-079c11b10898": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "SKIPЕR7",
   "nias .",
   "Granjero 247"
  ],
  "time": "2020-10-29T21:10:24",
  "duration": 1499,
  "mode": 3
 },
 "35be2c42-1bc2-4fea-ab35-5c76150d7101": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-29T20:40:23.916",
  "duration": 1481,
  "mode": 3
 },
 "013657a6-6488-48ee-a87f-db624adc7035": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "TCE Lucasg",
   "spıtflow",
   "Brunão Pocotó"
  ],
  "time": "2020-10-29T20:10:23.697",
  "duration": 1525,
  "mode": 3
 },
 "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "Liquid Pulga",
   "mɑster",
   "C9 blackoutz"
  ],
  "time": "2020-10-29T19:40:23.078",
  "duration": 1528,
  "mode": 3
 },
 "8c567c10-7df4-49fa-9b52-fba83f77aac9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat2",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-29T19:10:23.93",
  "duration": 1502,
  "mode": 3
 },
 "47edc9df-f67c-459a-8851-e910768a0075": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "Prxnextt L2R2",
   "GH Itrol〆",
   "9z fаcu"
  ],
  "time": "2020-10-30T21:40:23.411",
  "duration": 1345,
  "mode": 3
 },
 "2b8ecc35-df56-4581-93dd-6129399141b4": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "Prxnextt L2R2",
   "GH Itrol〆",
   "9z fаcu"
  ],
  "time": "2020-10-30T21:10:23.662",
  "duration": 1491,
  "mode": 3
 },
 "0964add7-1cd7-41df-abcd-3bf26efda8f8": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "mingal mamute",
   "abreuhere ʞ",
   "wxvygiant 021"
  ],
  "time": "2020-10-30T20:40:24.868",
  "duration": 1519,
  "mode": 3
 },
 "26678acf-095d-461a-b123-bc11c3729312": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "eRa cadu",
   "TRNL bedin",
   "ktz 1"
  ],
  "time": "2020-10-30T20:10:23.33",
  "duration": 1498,
  "mode": 3
 },
 "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-30T19:40:23.701",
  "duration": 1535,
  "mode": 3
 },
 "77ce5d82-f7cb-4901-83b9-e03b26f2b857": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "Prxnextt L2R2",
   "GH Itrol〆",
   "9z fаcu"
  ],
  "time": "2020-10-30T19:10:23.428",
  "duration": 1495,
  "mode": 3
 },
 "290138e5-2fcb-4009-a767-d9c4e6d8db09": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "pattaty46",
   "bagu46",
   "jpsk1ng"
  ],
  "time": "2020-10-29T21:40:24.269",
  "duration": 1530,
  "mode": 3
 },
 "1e1fa71e-fe47-45a0-b82d-b386ad2c391b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "SNOW FINAL BOSS",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2020-10-29T21:10:24.041",
  "duration": 1491,
  "mode": 3
 },
 "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "SNOW FINAL BOSS",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2020-10-29T20:40:23.348",
  "duration": 1468,
  "mode": 3
 },
 "178bd20e-2a9e-4148-b82f-895eeb24bd75": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "Luiston7",
   "Blessed Whalifaa",
   "Сhupete Suazo"
  ],
  "time": "2020-10-29T20:10:23.485",
  "duration": 1534,
  "mode": 3
 },
 "522b9ee6-79a9-4a51-a4c4-ec165c438d63": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "Prxnextt L2R2",
   "GH Itrol〆",
   "9z fаcu"
  ],
  "time": "2020-10-29T19:40:23.261",
  "duration": 1503,
  "mode": 3
 },
 "0392f70e-e17f-43f2-ba8d-89d3d9989202": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat3",
  "winners": [
   "pattaty46",
   "bagu46",
   "jpsk1ng"
  ],
  "time": "2020-10-29T19:10:24.05",
  "duration": 1522,
  "mode": 3
 },
 "5508dc3f-8a20-4dd8-9987-64c237054cf5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "LOUD lelеo",
   "diguera7",
   "SNG kıng"
  ],
  "time": "2020-10-30T21:40:25.308",
  "duration": 1356,
  "mode": 3
 },
 "b5fa37dd-712c-48bd-ba50-56e4cd3f2392": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "DETONA Kayky",
   "NEW Insano",
   "NEW Lørd"
  ],
  "time": "2020-10-30T21:10:25.928",
  "duration": 1444,
  "mode": 3
 },
 "6f365a33-6a91-4d2d-8284-dbfe60b65f69": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "9z Twayko",
   "Faккz",
   "YS Gaston"
  ],
  "time": "2020-10-30T20:40:24.055",
  "duration": 1500,
  "mode": 3
 },
 "78910779-0d41-46c0-bf31-355734ecb83e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-30T20:10:24.08",
  "duration": 1515,
  "mode": 3
 },
 "31b6dbd2-1d72-4155-b2ac-c9c2e064123e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "9z Twayko",
   "Faккz",
   "YS Gaston"
  ],
  "time": "2020-10-30T19:40:23.657",
  "duration": 1534,
  "mode": 3
 },
 "5b2e4d8e-523a-405b-9a14-eeceba61a829": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "y97da9dy9",
   "gabov1ce",
   "CODE Enzinho13"
  ],
  "time": "2020-10-30T19:10:24.611",
  "duration": 1518,
  "mode": 3
 },
 "4fb06203-781c-4c04-a5d4-f04c03f2e4fe": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "DETONA Kayky",
   "NEW Insano",
   "NEW Lørd"
  ],
  "time": "2020-10-29T21:40:24.187",
  "duration": 1529,
  "mode": 3
 },
 "bdb1e103-ab60-4ff9-a640-528638cc6115": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-29T21:10:24.209",
  "duration": 1472,
  "mode": 3
 },
 "6b29a3d2-49d4-44a6-b5a5-26526d584997": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-29T20:40:23.983",
  "duration": 1463,
  "mode": 3
 },
 "07e28e77-50cb-405e-abbb-ae894992586c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-29T20:10:24.214",
  "duration": 1525,
  "mode": 3
 },
 "1bfc7485-f19a-492e-a503-350f0d971125": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "SATIS LaroKshyer",
   "SATIS Gangifishy",
   "GUILD rafatz"
  ],
  "time": "2020-10-29T19:40:23.336",
  "duration": 1533,
  "mode": 3
 },
 "01c89f91-2e8d-4d08-93a1-b2effee852f4": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Heat4",
  "winners": [
   "Frаns",
   "kiritoﾠ",
   "ksjrnwnsbdhеbwhj"
  ],
  "time": "2020-10-29T19:10:24.433",
  "duration": 1504,
  "mode": 3
 },
 "1e1510aa-29c4-4f48-9776-0706826d46db": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-11-01T21:40:25.162",
  "duration": 1472,
  "mode": 3
 },
 "56024923-7268-415e-9742-293c2b16642b": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "9z Nahue507",
   "TWSTD tade",
   "dyfsssj"
  ],
  "time": "2020-11-01T21:10:16.703",
  "duration": 1464,
  "mode": 3
 },
 "32ce5db2-25e0-41ea-a467-d743f9b0fbf5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "SNOW FINAL BOSS",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2020-11-01T20:40:25.536",
  "duration": 1466,
  "mode": 3
 },
 "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "TRIBE Liimaa",
   "brabo punisher",
   "scan punisher"
  ],
  "time": "2020-11-01T20:10:30.749",
  "duration": 1443,
  "mode": 3
 },
 "65745dee-7064-4fb0-a18f-39bd68d00a5e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "lorax9j",
   "ndр",
   "x8 iwnl."
  ],
  "time": "2020-11-01T19:40:25.91",
  "duration": 1436,
  "mode": 3
 },
 "4b1874b7-afd1-4b03-b1a8-68734b91c8bb": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "LOUD lelеo",
   "diguera7",
   "SNG kıng"
  ],
  "time": "2020-11-01T19:10:19.611",
  "duration": 1525,
  "mode": 3
 },
 "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-31T22:25:20.921",
  "duration": 1452,
  "mode": 3
 },
 "60b60a78-591f-499e-84b4-d883625bbde1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "DEMONRUSTYACHE32",
   "VКS 100UM",
   "FаZe k1nG."
  ],
  "time": "2020-10-31T21:55:20.784",
  "duration": 1518,
  "mode": 3
 },
 "03c48a60-6f8a-4dc1-bba2-22f58a17e811": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-31T21:25:21.564",
  "duration": 1522,
  "mode": 3
 },
 "5229e840-8705-4ac8-aa67-5a41b3b68756": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "Gabrielh99 L2 L2",
   "LOUD Lasers",
   "technoviking46"
  ],
  "time": "2020-10-31T20:55:00.664",
  "duration": 1511,
  "mode": 3
 },
 "4a2469d8-40fd-4293-8c28-1c5ef836f1b1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "FURY sнeco",
   "FURY histtory",
   "rоbоtt"
  ],
  "time": "2020-10-31T20:25:22.752",
  "duration": 1556,
  "mode": 3
 },
 "9739e862-350e-4704-9b10-d6ff3e711d38": {
  "tournamentID": "epicgames_S14_FNCS_Finals_BR_PC_Grandfinals",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2020-10-31T19:55:25.747",
  "duration": 1549,
  "mode": 3
 },
 "405594f2-74ae-442e-bbcd-d8e43aea219e": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-10T18:40:24.179",
  "duration": 1532,
  "mode": 3
 },
 "4e4fcfcb-e54d-455b-ae48-f0bb0cfc9645": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-10T18:10:24.697",
  "duration": 1465,
  "mode": 3
 },
 "19cc0093-9215-4b25-9452-d57a41593faa": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "winners": [
   "NMR 3BoooD",
   "2ormen",
   "NMR Tooke ӝ"
  ],
  "time": "2020-10-10T17:40:24.614",
  "duration": 1528,
  "mode": 3
 },
 "8ec2317d-9886-478a-8712-568719df890a": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "winners": [
   "SAQR QnDx",
   "SAQR Rapit",
   "SAQR Njﱞby"
  ],
  "time": "2020-10-10T17:10:24.446",
  "duration": 1523,
  "mode": 3
 },
 "f4802fd3-ba0c-4591-9bd5-09339cc45740": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "winners": [
   "Eltrocity KuKi",
   "Mevǃ",
   "GXR Nylereyli ӝ"
  ],
  "time": "2020-10-10T16:40:25.989",
  "duration": 1493,
  "mode": 3
 },
 "904342e2-128f-405f-a9b7-992020a04328": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "winners": [
   "LND Ax3",
   "Feиix",
   "Lоk1"
  ],
  "time": "2020-10-10T16:10:25.248",
  "duration": 1501,
  "mode": 3
 },
 "1f3a9ccb-d7e8-4492-b13f-eb64a62e5ff4": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_ME_PC",
  "time": "2020-10-09T18:40:24.431",
  "duration": 1463,
  "mode": 3
 },
 "510644a9-c5c6-4b34-bb34-7046c2b5d300": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "Eltrocity KuKi",
   "Mevǃ",
   "GXR Nylereyli ӝ"
  ],
  "time": "2020-10-17T18:40:25.229",
  "duration": 1507,
  "mode": 3
 },
 "3b3460bb-7c78-43d3-ab76-f56d49b4c542": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "POWER 7MOOD",
   "POWER Abdulelah",
   "Brookitr0"
  ],
  "time": "2020-10-17T18:10:25.016",
  "duration": 1472,
  "mode": 3
 },
 "1fe2eef1-840c-4873-8621-5bf6b893bbb3": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "Falcon FHD",
   "Falcon Yonx",
   "Falcon KiritoKun"
  ],
  "time": "2020-10-17T17:40:26.363",
  "duration": 1532,
  "mode": 3
 },
 "6fd9cc5d-758f-42bb-b11c-4ea61c826a54": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "Falcon FHD",
   "Falcon Yonx",
   "Falcon KiritoKun"
  ],
  "time": "2020-10-17T17:10:25.569",
  "duration": 1530,
  "mode": 3
 },
 "c4f2605b-e168-4c0c-9332-fc1c6063aab9": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "EpikSKULLYlol",
   "Sudor Saudツ",
   "TU TOМY"
  ],
  "time": "2020-10-17T16:40:25.587",
  "duration": 1529,
  "mode": 3
 },
 "924e0c1f-bcb0-4818-8ec3-3f85697724e3": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-10-17T16:10:25.946",
  "duration": 1506,
  "mode": 3
 },
 "18d51820-a7f4-40d9-a0f4-3502aded282a": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "Eltrocity KuKi",
   "Mevǃ",
   "GXR Nylereyli ӝ"
  ],
  "time": "2020-10-16T18:40:26.847",
  "duration": 1456,
  "mode": 3
 },
 "894a48ce-b0f5-4203-8ff0-70ed6ad15389": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-10-16T18:10:25.49",
  "duration": 1518,
  "mode": 3
 },
 "2c7de276-b36e-4531-ba97-12962ea91b9f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-16T17:40:25.227",
  "duration": 1497,
  "mode": 3
 },
 "91a472f3-4ad4-4928-9078-a56d70d44303": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "DeattFan109",
   "А7mdo",
   "Wizreyli77"
  ],
  "time": "2020-10-16T17:10:25.638",
  "duration": 1512,
  "mode": 3
 },
 "0f53451f-8d2b-43d5-bbd0-b558c5e518ae": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "SAQR QnDx",
   "SAQR Rapit",
   "SAQR Njﱞby"
  ],
  "time": "2020-10-16T16:40:24.841",
  "duration": 1502,
  "mode": 3
 },
 "a3427962-8009-4a57-bb7c-bdea8fe588e6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_ME_PC",
  "winners": [
   "Fаlcon Spy",
   "Nаsir",
   "ASMR Tobi"
  ],
  "time": "2020-10-16T16:10:24.386",
  "duration": 1530,
  "mode": 3
 },
 "c4d0604e-3194-4177-b3de-ab153f9f12fc": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "POWER 7MOOD",
   "POWER Abdulelah",
   "Monkey 3z"
  ],
  "time": "2020-10-24T18:40:23.975",
  "duration": 1515,
  "mode": 3
 },
 "9b3872c5-6084-42e2-a803-75b9000f33ab": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-10-24T18:10:22.626",
  "duration": 1547,
  "mode": 3
 },
 "f0dac456-49ec-4f48-9097-c08a6a687c36": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-24T17:40:24.359",
  "duration": 1514,
  "mode": 3
 },
 "5454c91c-52cb-4054-83ea-9424de4f63ff": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-24T17:10:23.574",
  "duration": 1545,
  "mode": 3
 },
 "8bc5a494-77fe-4a3d-88d8-376bd09ecea9": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Tox AAAAAAAAAAAA",
   "pJLoJI_JljJj",
   "Teddу."
  ],
  "time": "2020-10-24T16:40:22.497",
  "duration": 1510,
  "mode": 3
 },
 "57e645f8-79bc-44d2-aa81-21138f39a05b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-10-24T16:10:24.04",
  "duration": 1522,
  "mode": 3
 },
 "3bdd0fcb-eafc-49e1-b3fa-0f04ef5a9c47": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-23T18:40:21.329",
  "duration": 1543,
  "mode": 3
 },
 "5182358a-8a2f-433b-9a71-ebd18e15dd07": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Falcon Speedy.",
   "SCYTES Heif",
   "SAQR 7manツ"
  ],
  "time": "2020-10-23T18:10:21.913",
  "duration": 1544,
  "mode": 3
 },
 "a58680df-df9c-4e6a-b409-edf52ee45067": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-23T17:40:23.489",
  "duration": 1511,
  "mode": 3
 },
 "5346bd33-d75b-4156-a49a-8ca00d0f25ff": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-23T17:10:23.325",
  "duration": 1536,
  "mode": 3
 },
 "4b1e685c-6339-4b07-b552-1c1a56799ee8": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "Tox AAAAAAAAAAAA",
   "pJLoJI_JljJj",
   "Teddу."
  ],
  "time": "2020-10-23T16:40:22.789",
  "duration": 1515,
  "mode": 3
 },
 "5ecd946e-e460-4013-8d2f-4596d851df3d": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_ME_PC",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2020-10-23T16:10:23.382",
  "duration": 1483,
  "mode": 3
 },
 "89c8c78a-43e2-4296-b2f6-508606b59500": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "Eltrocity KuKi",
   "Mevǃ",
   "GXR Nylereyli ӝ"
  ],
  "time": "2020-10-29T20:10:26.834",
  "duration": 1484,
  "mode": 3
 },
 "e2a52c92-383b-4a69-9930-acc2fac873e3": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "TU Msiddig",
   "TU Siddig",
   "y7soon"
  ],
  "time": "2020-10-29T19:40:24.136",
  "duration": 1490,
  "mode": 3
 },
 "d428b214-2e0c-471b-bb4b-d2c9494dc0e4": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-10-29T19:10:24.496",
  "duration": 1477,
  "mode": 3
 },
 "8bc3997d-dd94-4bd6-a87b-08a242b6b681": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "Eltrocity KuKi",
   "Mevǃ",
   "GXR Nylereyli ӝ"
  ],
  "time": "2020-10-29T18:40:24.424",
  "duration": 1459,
  "mode": 3
 },
 "26219221-e081-4339-be46-ae78ddb162e3": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "Falcon Νm7",
   "Falcon Rv",
   "TU LIQUID"
  ],
  "time": "2020-10-29T18:10:23.82",
  "duration": 1522,
  "mode": 3
 },
 "64f03f96-282e-43af-8cad-d76e44812bb9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "Nakano Krista",
   "DiggerWavyXander",
   "HwR WavyA7med"
  ],
  "time": "2020-10-29T17:40:23.699",
  "duration": 1532,
  "mode": 3
 },
 "5d080a81-4dd2-464e-b9f8-4f7ec0292447": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-10-28T20:10:27",
  "duration": 1559,
  "mode": 3
 },
 "98675477-6936-4c91-9c3d-ebc3f8b76985": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "LND Ax3",
   "Feиix",
   "Lоk1"
  ],
  "time": "2020-10-28T19:40:24",
  "duration": 1489,
  "mode": 3
 },
 "424a5738-8f01-4b34-b7ef-717dcc786294": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "TU Adapter7",
   "Sudor LeziX",
   "TU Herо"
  ],
  "time": "2020-10-28T19:10:25",
  "duration": 1538,
  "mode": 3
 },
 "0efd39c4-f2db-4d33-bd34-1da2f7203f27": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "AQ Khalood",
   "Spark DemonMinas",
   "ZAU IS BACK"
  ],
  "time": "2020-10-28T18:40:26",
  "duration": 1526,
  "mode": 3
 },
 "2f227356-cf71-414f-9b56-acd397adceb8": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "TU Msiddig",
   "TU Siddig",
   "y7soon"
  ],
  "time": "2020-10-28T18:10:23",
  "duration": 1527,
  "mode": 3
 },
 "99387cff-fa4e-420a-af9f-2ccdb599ad75": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat1",
  "winners": [
   "Lоzer",
   "KINGS Azizilex",
   "KINGS Metab"
  ],
  "time": "2020-10-28T17:40:25",
  "duration": 1500,
  "mode": 3
 },
 "e5c17c9e-e152-48e5-84bb-78bab2804898": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2020-10-29T20:10:23.563",
  "duration": 1467,
  "mode": 3
 },
 "3a1d9e7c-f01e-4252-b5ad-2f80759791bd": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2020-10-29T19:40:24.664",
  "duration": 1534,
  "mode": 3
 },
 "96bcd598-4f35-41a5-9e81-8a978ec58d5c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-29T19:10:22.735",
  "duration": 1485,
  "mode": 3
 },
 "8687a446-9fa5-4358-9de6-2c195b1abdf8": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SAQR QnDx",
   "SAQR Rapit",
   "SAQR Njﱞby"
  ],
  "time": "2020-10-29T18:40:24.212",
  "duration": 1500,
  "mode": 3
 },
 "d009507c-18d6-40b7-b688-ef3cb659254e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SAQR Hellon",
   "Falcon Phantom.",
   "SCYTES xFares"
  ],
  "time": "2020-10-29T18:10:22.501",
  "duration": 1534,
  "mode": 3
 },
 "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2020-10-29T17:40:23.639",
  "duration": 1499,
  "mode": 3
 },
 "b4f7d19e-8ce0-4bcb-a228-d6a948d52922": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "YaLLa Ech0",
   "25 D7M",
   "POWER JABR"
  ],
  "time": "2020-10-28T20:10:27",
  "duration": 1529,
  "mode": 3
 },
 "d2fe301c-2e57-426d-b42c-40eb3add81e1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "Gemx Roadkiller",
   "TE Flаsh",
   "Twistnator"
  ],
  "time": "2020-10-28T19:40:23",
  "duration": 1484,
  "mode": 3
 },
 "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SAQR Hellon",
   "Falcon Phantom.",
   "SCYTES xFares"
  ],
  "time": "2020-10-28T19:10:24",
  "duration": 1500,
  "mode": 3
 },
 "d84870d6-fe0b-4376-ae70-392eb57a77d5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-28T18:40:24",
  "duration": 1507,
  "mode": 3
 },
 "76588e00-545e-4597-bdfc-3c314f6260d3": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SAQR QnDx",
   "SAQR Rapit",
   "SAQR Njﱞby"
  ],
  "time": "2020-10-28T18:10:25",
  "duration": 1525,
  "mode": 3
 },
 "16286fb8-0db2-475a-adc9-d8a1ec826a17": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Heat2",
  "winners": [
   "SAQR Hellon",
   "Falcon Phantom.",
   "SCYTES xFares"
  ],
  "time": "2020-10-28T17:40:26",
  "duration": 1488,
  "mode": 3
 },
 "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Dаrgon.",
   "Sudor Raed",
   "Snowyka"
  ],
  "time": "2020-11-01T18:40:26.266",
  "duration": 1528,
  "mode": 3
 },
 "19f72abb-550f-4a4f-a1ac-d315d82ae890": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Falcon FHD",
   "Falcon Yonx",
   "Falcon KiritoKun"
  ],
  "time": "2020-11-01T18:10:33.066",
  "duration": 1482,
  "mode": 3
 },
 "4fed9276-5e12-474c-be56-8e51d544cffa": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2020-11-01T17:40:28.206",
  "duration": 1510,
  "mode": 3
 },
 "e480f3b8-2ea7-4568-872d-947d0ce16863": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Falcon Speedy.",
   "SCYTES Heif",
   "SAQR 7manツ"
  ],
  "time": "2020-11-01T17:10:30.319",
  "duration": 1475,
  "mode": 3
 },
 "cf178053-f88e-4694-bfe1-0ab0a1765703": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Falcon Νm7",
   "Falcon Rv",
   "TU LIQUID"
  ],
  "time": "2020-11-01T16:40:29.951",
  "duration": 1510,
  "mode": 3
 },
 "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "KINGS Javi",
   "Nezirrrツ",
   "Hawk Msgowski"
  ],
  "time": "2020-11-01T16:10:29.325",
  "duration": 1536,
  "mode": 3
 },
 "dc4eedd1-58b9-4117-bcf0-69a6af051005": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "TU Adapter7",
   "Sudor LeziX",
   "TU Herо"
  ],
  "time": "2020-10-31T18:42:33",
  "duration": 1508,
  "mode": 3
 },
 "889a0dea-0718-48ee-924d-b5e038e440a6": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "SAQR Hellon",
   "Falcon Phantom.",
   "SCYTES xFares"
  ],
  "time": "2020-10-31T18:11:26",
  "duration": 1503,
  "mode": 3
 },
 "10a67f40-3750-47b3-a82b-f78ef40e5262": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2020-10-31T17:40:54",
  "duration": 1441,
  "mode": 3
 },
 "8179319c-b19e-4c10-960d-aa55178c9d1d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Falcon Speedy.",
   "SCYTES Heif",
   "SAQR 7manツ"
  ],
  "time": "2020-10-31T17:13:05",
  "duration": 1468,
  "mode": 3
 },
 "8a33cc8b-aac9-4f16-8728-63494d3d446d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Falcon Modisk.",
   "Falcon Kai",
   "Falcon AbuFal7"
  ],
  "time": "2020-10-31T16:42:59",
  "duration": 1545,
  "mode": 3
 },
 "6c46acfd-cd6d-412a-b64f-0699e6a540a9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_ME_PC_Grandfinals",
  "winners": [
   "Fаlcon Spy",
   "Nаsir",
   "ASMR Tobi"
  ],
  "time": "2020-10-31T16:10:43",
  "duration": 1494,
  "mode": 3
 },
 "26d3f6d5-3aeb-401b-b6da-2bc701fa616c": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-11T07:40:22.453",
  "duration": 1389,
  "mode": 3
 },
 "461c2ba3-b098-4fb3-9781-078428b04d10": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-11T07:10:23.852",
  "duration": 1523,
  "mode": 3
 },
 "2f443b12-6fe5-4ea4-9409-5951b830626e": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "winners": [
   "Bolаrr",
   "tp mechszn",
   "Mr.PlantBomb12"
  ],
  "time": "2020-10-11T06:40:22.35",
  "duration": 1516,
  "mode": 3
 },
 "12f2c8c8-a739-472d-999c-c51fd20f26b5": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-11T06:10:23.285",
  "duration": 1494,
  "mode": 3
 },
 "6e29584f-f141-4b88-8430-a22f59d9cca7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-11T05:40:23.014",
  "duration": 1501,
  "mode": 3
 },
 "db9ec9f2-7344-488d-80c1-853dd9083ab7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-11T05:10:23.819",
  "duration": 1477,
  "mode": 3
 },
 "13454b02-851a-4e9b-b9c2-890bfd054016": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "time": "2020-10-10T07:40:22.969",
  "duration": 1211,
  "mode": 3
 },
 "120236e0-75c7-4096-bb40-012b9683798c": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "time": "2020-10-10T07:10:22.598",
  "duration": 729,
  "mode": 3
 },
 "538cfdaa-dc3e-42dc-8c71-d23a089242d7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier1_OCE_PC",
  "time": "2020-10-10T06:40:24.845",
  "duration": 399,
  "mode": 3
 },
 "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-18T07:40:14.929",
  "duration": 1494,
  "mode": 3
 },
 "6fd2e3cd-c63f-4217-89bc-bb6de53660b1": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-18T07:10:24.697",
  "duration": 1531,
  "mode": 3
 },
 "5bc3b6ea-aec0-410d-847d-602b7bd3c203": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-18T06:40:23.121",
  "duration": 1498,
  "mode": 3
 },
 "628089ff-5063-43d4-8648-b7e71c11fd81": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "РWR Banana",
   "PWR radius",
   "speedy at pub"
  ],
  "time": "2020-10-18T06:10:26.661",
  "duration": 1548,
  "mode": 3
 },
 "9d337fda-26f8-46b4-a0c8-df2349a6c8f9": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "agent sorif",
   "demon mode x",
   "Agent Eshz"
  ],
  "time": "2020-10-18T05:40:26.558",
  "duration": 1574,
  "mode": 3
 },
 "6c35e9d8-1d94-493d-b593-e96a1115ffac": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "syncyfishy"
  ],
  "time": "2020-10-18T05:10:27.028",
  "duration": 1515,
  "mode": 3
 },
 "12d57762-52e2-4faa-8111-db99fd983e6b": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "2321451254213123",
   "ATL ronin",
   "phluxzy ӝ"
  ],
  "time": "2020-10-17T07:40:23.064",
  "duration": 1487,
  "mode": 3
 },
 "3ad6b101-3607-45de-91c1-38df2847b1f6": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "Bolаrr",
   "tp mechszn",
   "Mr.PlantBomb12"
  ],
  "time": "2020-10-17T07:10:24.62",
  "duration": 1505,
  "mode": 3
 },
 "5078bf59-5ae1-4c06-a130-7ff9255219e7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "wicked гг",
   "GLM x2Suns",
   "HVT LunR"
  ],
  "time": "2020-10-17T06:40:23.312",
  "duration": 1494,
  "mode": 3
 },
 "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2020-10-17T06:10:22.833",
  "duration": 1510,
  "mode": 3
 },
 "2d3ab738-9e01-43c6-b276-7e04135556bf": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-17T05:40:22.908",
  "duration": 1528,
  "mode": 3
 },
 "1dfc787c-0905-4eb0-b841-0dc3d00bc21c": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier2_OCE_PC",
  "winners": [
   "newbatoon.",
   "CLR hardworker",
   "Ghееz"
  ],
  "time": "2020-10-17T05:10:24.034",
  "duration": 1517,
  "mode": 3
 },
 "1248b1c7-31bc-413d-8b13-46e9df0767b8": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-25T07:40:23.469",
  "duration": 1439,
  "mode": 3
 },
 "7547ec48-d59f-4bfc-a143-dee7b71cd20c": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "zoreh 4pf",
   "jаhlyn",
   "pаrpу"
  ],
  "time": "2020-10-25T07:10:23.022",
  "duration": 1500,
  "mode": 3
 },
 "64543231-8a2c-4d57-bb94-5e0a43aa29a2": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "MG DISTRICT",
   "Bаntis",
   "gusos."
  ],
  "time": "2020-10-25T06:40:23.221",
  "duration": 1514,
  "mode": 3
 },
 "121d118d-774f-4c5b-8e08-d3ad07ef71cb": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2020-10-25T06:10:22.523",
  "duration": 1521,
  "mode": 3
 },
 "79e97837-789f-4959-8e72-0608d67e1e33": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-25T05:40:21.759",
  "duration": 1506,
  "mode": 3
 },
 "142ba076-893e-479f-ac89-07e441a2f96d": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "syncyfishy"
  ],
  "time": "2020-10-25T05:10:21.866",
  "duration": 1503,
  "mode": 3
 },
 "54cdf725-b1ce-45ae-b709-7efd32eafcd2": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2020-10-24T07:40:17.121",
  "duration": 1530,
  "mode": 3
 },
 "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2020-10-24T07:10:16.835",
  "duration": 1538,
  "mode": 3
 },
 "51312672-6f92-43c1-88ee-b1a257bd2dec": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-24T06:40:17.418",
  "duration": 1525,
  "mode": 3
 },
 "5ea097cf-db66-462b-8abe-831b03c50d64": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "2321451254213123",
   "ATL ronin",
   "phluxzy ӝ"
  ],
  "time": "2020-10-24T06:10:17.18",
  "duration": 1549,
  "mode": 3
 },
 "366210a4-7a12-405d-9794-2a237be3d8e7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "2321451254213123",
   "ATL ronin",
   "phluxzy ӝ"
  ],
  "time": "2020-10-24T05:40:19.635",
  "duration": 1527,
  "mode": 3
 },
 "63e27488-03be-42fd-bfdc-9f1fd81777e7": {
  "tournamentID": "epicgames_S14_FNCS_Qualifier3_OCE_PC",
  "winners": [
   "agent sorif",
   "demon mode x",
   "Agent Eshz"
  ],
  "time": "2020-10-24T05:10:18.908",
  "duration": 1527,
  "mode": 3
 },
 "5593cb72-98cb-4e34-b78c-09aa6eb3fe22": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-30T08:40:24.491",
  "duration": 1464,
  "mode": 3
 },
 "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "wicked гг",
   "GLM x2Suns",
   "HVT LunR"
  ],
  "time": "2020-10-30T08:10:21.599",
  "duration": 1472,
  "mode": 3
 },
 "55c6d8ab-5c76-4489-ad15-da68fb151358": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-30T07:40:23.351",
  "duration": 1453,
  "mode": 3
 },
 "6b3572c7-2689-43e2-b013-669e13fe303e": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "wicked гг",
   "GLM x2Suns",
   "HVT LunR"
  ],
  "time": "2020-10-30T07:10:22.222",
  "duration": 1509,
  "mode": 3
 },
 "eed4ee85-2433-4059-bf40-dd5d81a42783": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "x2prhzy",
   "J. A Prufrock",
   "soggyshark39"
  ],
  "time": "2020-10-30T06:40:23.859",
  "duration": 1526,
  "mode": 3
 },
 "b28d66ca-5481-4a9b-b122-565e6c96fec5": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "PRDX Oatley",
   "kоrq",
   "GLM osiris."
  ],
  "time": "2020-10-30T06:10:16.601",
  "duration": 1533,
  "mode": 3
 },
 "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "rahcks FA",
   "skvtzz",
   "jake FA"
  ],
  "time": "2020-10-29T09:25:22.557",
  "duration": 1474,
  "mode": 3
 },
 "a1e6505a-d2b3-49d8-9adc-0623339b458a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-29T08:55:22.644",
  "duration": 1447,
  "mode": 3
 },
 "abb992f7-6aeb-47f5-8848-8903916812e1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "CRISER 父",
   "agent re11",
   "PWR looter"
  ],
  "time": "2020-10-29T08:25:24.597",
  "duration": 1534,
  "mode": 3
 },
 "5e8d15a1-36c1-4f23-8737-264405339600": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "wicked гг",
   "GLM x2Suns",
   "HVT LunR"
  ],
  "time": "2020-10-29T07:55:16.775",
  "duration": 1524,
  "mode": 3
 },
 "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "wicked гг",
   "GLM x2Suns",
   "HVT LunR"
  ],
  "time": "2020-10-29T07:25:18.505",
  "duration": 1500,
  "mode": 3
 },
 "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat1",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-10-29T06:55:23.227",
  "duration": 1502,
  "mode": 3
 },
 "3b5b334c-473d-4484-9229-4657f2d82f74": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "Mako Pumpkin",
   "SPG Trixy",
   "WAVE Venihcy"
  ],
  "time": "2020-10-30T08:40:24.123",
  "duration": 1340,
  "mode": 3
 },
 "41d57046-d373-466d-bd98-a242dec967ba": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "РWR Banana",
   "PWR radius",
   "speedy at pub"
  ],
  "time": "2020-10-30T08:10:23.762",
  "duration": 1473,
  "mode": 3
 },
 "251318b0-8d2c-40b7-8d33-55b495066e3a": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2020-10-30T07:40:22.091",
  "duration": 1503,
  "mode": 3
 },
 "2e1fdc4f-5b71-4267-a34a-e732bc507a26": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "РWR Banana",
   "PWR radius",
   "speedy at pub"
  ],
  "time": "2020-10-30T07:10:21.977",
  "duration": 1492,
  "mode": 3
 },
 "90d4e08c-beb4-4d58-b2d0-45e0b730ef71": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "zoreh 4pf",
   "jаhlyn",
   "pаrpу"
  ],
  "time": "2020-10-30T06:40:25.067",
  "duration": 1409,
  "mode": 3
 },
 "12abc930-10af-44a6-a0e1-6d495747ab03": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "bigc0ckboz",
   "AGENT Tyraxe",
   "Link.ㅤ"
  ],
  "time": "2020-10-30T06:10:22.731",
  "duration": 1511,
  "mode": 3
 },
 "1e23f9af-d631-4899-934a-1a8cd592f935": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "РWR Banana",
   "PWR radius",
   "speedy at pub"
  ],
  "time": "2020-10-29T09:25:22.131",
  "duration": 1513,
  "mode": 3
 },
 "080f6d4d-662f-4dca-8b1a-4c04339db390": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "zoreh 4pf",
   "jаhlyn",
   "pаrpу"
  ],
  "time": "2020-10-29T08:55:22.051",
  "duration": 1509,
  "mode": 3
 },
 "5d721bfa-f55d-4cac-9f76-67ae820b6c65": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "2321451254213123",
   "ATL ronin",
   "phluxzy ӝ"
  ],
  "time": "2020-10-29T08:25:27.902",
  "duration": 1545,
  "mode": 3
 },
 "20c8a6ee-a847-44e1-b63c-9d9601002a0f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2020-10-29T07:55:18.467",
  "duration": 1453,
  "mode": 3
 },
 "bd78030d-3107-4a14-b271-425c0f4bf35d": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "agent sorif",
   "demon mode x",
   "Agent Eshz"
  ],
  "time": "2020-10-29T07:25:17.336",
  "duration": 1533,
  "mode": 3
 },
 "44a8254b-c239-4ab9-a57a-d53be8790f53": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Heat2",
  "winners": [
   "2321451254213123",
   "ATL ronin",
   "phluxzy ӝ"
  ],
  "time": "2020-10-29T06:55:18.802",
  "duration": 1530,
  "mode": 3
 },
 "2aa6c846-20ec-40c5-824f-3e38c9367c25": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "syncyfishy"
  ],
  "time": "2020-11-01T08:40:19.626",
  "duration": 1524,
  "mode": 3
 },
 "340058d2-9f6f-473e-b040-e3f64aed84d1": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "agent sorif",
   "demon mode x",
   "Agent Eshz"
  ],
  "time": "2020-11-01T08:10:22.399",
  "duration": 1520,
  "mode": 3
 },
 "086b6abe-3832-4d2e-9536-ad944846ab5f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "syncyfishy"
  ],
  "time": "2020-11-01T07:40:22.249",
  "duration": 1493,
  "mode": 3
 },
 "824d7ac0-d24b-401c-aa9c-8fd48b02304f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "syncyfishy"
  ],
  "time": "2020-11-01T07:10:22.05",
  "duration": 1481,
  "mode": 3
 },
 "0bbeeeeb-a056-4e22-99a8-ca39347e6b9f": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "syncyfishy"
  ],
  "time": "2020-11-01T06:40:22.074",
  "duration": 1476,
  "mode": 3
 },
 "2a97de5f-f90b-4589-8828-643582e1d8d4": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2020-11-01T06:10:16.91",
  "duration": 1497,
  "mode": 3
 },
 "0ad06341-c1b6-4594-bfd7-cab550ad380c": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "rahcks FA",
   "skvtzz",
   "jake FA"
  ],
  "time": "2020-10-31T09:27:57",
  "duration": 1542,
  "mode": 3
 },
 "5821561d-e2fd-4cba-af7b-a5327eb558f4": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "x2Сhubby",
   "Cоde x2Twins",
   "volx"
  ],
  "time": "2020-10-31T08:58:17",
  "duration": 1473,
  "mode": 3
 },
 "9039513a-eeb6-4463-933c-b6b090fb2e20": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "CRISER 父",
   "agent re11",
   "PWR looter"
  ],
  "time": "2020-10-31T08:26:52",
  "duration": 1501,
  "mode": 3
 },
 "92a0b9fb-0668-48a5-a2fb-724c45a279b3": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "РWR Banana",
   "PWR radius",
   "speedy at pub"
  ],
  "time": "2020-10-31T07:58:26",
  "duration": 1511,
  "mode": 3
 },
 "5cdef378-6683-4518-a78f-e913b029b919": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "MG DISTRICT",
   "Bаntis",
   "gusos."
  ],
  "time": "2020-10-31T07:28:50",
  "duration": 1516,
  "mode": 3
 },
 "33338bc0-e0cc-4603-979c-cbb3cc00bdbc": {
  "tournamentID": "epicgames_S14_FNCS_Finals_OCE_PC_Grandfinals",
  "winners": [
   "agent sorif",
   "demon mode x",
   "Agent Eshz"
  ],
  "time": "2020-10-31T06:56:30",
  "duration": 1520,
  "mode": 3
 },
 "4aadb68e-da9e-421a-a860-6557ce4ed369": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "winners": [
   "XPRT Xccept",
   "TMP vyx"
  ],
  "time": "2020-12-11T05:35:17.711",
  "duration": 1519,
  "mode": 2
 },
 "375221f0-3b9f-4735-bd2f-25d837a7fe70": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "winners": [
   "BBG Calc",
   "mero2k"
  ],
  "time": "2020-12-11T04:55:23.514",
  "duration": 1483,
  "mode": 2
 },
 "4ddf41b7-96dc-438b-829b-f3055991f14a": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "winners": [
   "FaZe Megga.",
   "FаZe Dubs ϟ"
  ],
  "time": "2020-12-11T04:15:21.878",
  "duration": 1506,
  "mode": 2
 },
 "67f856bc-71b3-4927-98e4-f8187ae386ed": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "winners": [
   "Dukﱞe",
   "Vanish Strodles"
  ],
  "time": "2020-12-11T03:35:18.423",
  "duration": 1506,
  "mode": 2
 },
 "c2f9db3d-0333-4d98-97cd-a01a835850a8": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "winners": [
   "BBG Kreozard",
   "BBG Bucke"
  ],
  "time": "2020-12-11T02:55:18.944",
  "duration": 1524,
  "mode": 2
 },
 "bdd4740b-ebd0-4e48-bd6e-76f9d80f36e4": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAE_Finals",
  "winners": [
   "SmiteyGGs",
   "Evasion."
  ],
  "time": "2020-12-11T02:15:23.132",
  "duration": 1497,
  "mode": 2
 },
 "f59651ee-395f-4f0c-b6d7-aa29e53d45e5": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "Liquid Riversan",
   "NRG Edgey"
  ],
  "time": "2021-01-24T23:55:23.556",
  "duration": 1518,
  "mode": 2
 },
 "1509c576-2760-4026-aae9-81b31e894c8d": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "BBG PIECE POLICE",
   "G2 MackWood"
  ],
  "time": "2021-01-24T23:15:22.751",
  "duration": 1520,
  "mode": 2
 },
 "54d433a8-867b-423a-9a5a-85d563cbfc4b": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "kwаh",
   "Elite Neeqo"
  ],
  "time": "2021-01-24T22:35:22.344",
  "duration": 1534,
  "mode": 2
 },
 "0f681bc0-87f3-4740-a201-67ad5ace1219": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "Kn1pher",
   "Plege"
  ],
  "time": "2021-01-24T21:55:23.392",
  "duration": 1531,
  "mode": 2
 },
 "3d9ae12b-4909-48d4-812a-f288015f17c9": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "insight duŝky",
   "O zir vo"
  ],
  "time": "2021-01-24T21:15:22.339",
  "duration": 1534,
  "mode": 2
 },
 "01f717b0-0c80-42b1-8368-f283aeff7324": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2021-01-24T20:35:21.932",
  "duration": 1510,
  "mode": 2
 },
 "f1de05c9-665c-402e-90c1-8e6c30f5902b": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "BBG PIECE POLICE",
   "G2 MackWood"
  ],
  "time": "2021-01-24T19:55:23.217",
  "duration": 1527,
  "mode": 2
 },
 "13d58fb9-a253-4957-ace4-542d35a163b9": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAE_Finals",
  "winners": [
   "NRG Zaytttttttt",
   "NRG benjуfishу"
  ],
  "time": "2021-01-24T19:15:22.419",
  "duration": 1491,
  "mode": 2
 },
 "035be7be-cf4d-4620-9a02-fdd10fa42b89": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-02-15T00:40:21.286",
  "duration": 1543,
  "mode": 3
 },
 "016ada84-b9a9-41d9-80f8-6efba027978b": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAE",
  "winners": [
   "XTRA Furiouѕ",
   "BBG Calc",
   "ELITE SEBBY7"
  ],
  "time": "2021-02-15T00:10:22.637",
  "duration": 1553,
  "mode": 3
 },
 "003c4792-e5f7-4956-9461-ec590fa1aed9": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAE",
  "winners": [
   "SEN Aspect.",
   "LG Xoonies",
   "npen"
  ],
  "time": "2021-02-14T23:40:24.184",
  "duration": 1478,
  "mode": 3
 },
 "00d16e81-6e5b-457e-8fa1-c07ce011b8f0": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-02-14T23:10:31.518",
  "duration": 1526,
  "mode": 3
 },
 "019c7743-aa50-47be-8289-57f001574acd": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAE",
  "winners": [
   "BBG Bucke",
   "BBG PIECE POLICE",
   "G2 MackWood"
  ],
  "time": "2021-02-14T22:40:26.326",
  "duration": 1517,
  "mode": 3
 },
 "08674be0-d9e7-495d-b54f-b60fa76254ed": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-02-14T22:10:28.027",
  "duration": 1509,
  "mode": 3
 },
 "010bc59d-4d2e-4ba6-96ed-5390e2949fcb": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAE",
  "winners": [
   "9LIVES Crumble",
   "KNG Nexy",
   "Marzz_Ow"
  ],
  "time": "2021-02-22T00:41:02.398",
  "duration": 1510,
  "mode": 3
 },
 "1206beef-2e09-4714-b693-6cb679ff2b5a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAE",
  "winners": [
   "Aperta_",
   "cozhies ψ",
   "Aminished"
  ],
  "time": "2021-02-22T00:11:24.629",
  "duration": 1426,
  "mode": 3
 },
 "08d2a89c-93e0-4c3e-8151-6036dfe0880f": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAE",
  "winners": [
   "DeRoller.",
   "Klaѕѕ",
   "TSM Сo1azo"
  ],
  "time": "2021-02-21T23:41:02.858",
  "duration": 1475,
  "mode": 3
 },
 "04fc578c-c573-48e5-acf3-460946702d20": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAE",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF",
   "skqughaski2k"
  ],
  "time": "2021-02-21T23:11:01.005",
  "duration": 1455,
  "mode": 3
 },
 "0026972a-759b-4fac-a27b-253a20d45343": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAE",
  "winners": [
   "DeRoller.",
   "Klaѕѕ",
   "TSM Сo1azo"
  ],
  "time": "2021-02-21T22:41:03.142",
  "duration": 1458,
  "mode": 3
 },
 "046956b2-614c-48fe-a6e6-bf3f37f1df6c": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAE",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF",
   "skqughaski2k"
  ],
  "time": "2021-02-21T22:11:06.034",
  "duration": 1462,
  "mode": 3
 },
 "00c4dd83-05cb-4618-ba13-ca5c3886d495": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAE",
  "winners": [
   "c0dgenesis",
   "9LIVES VOIL",
   "Pandushh"
  ],
  "time": "2021-03-01T00:40:55.096",
  "duration": 1563,
  "mode": 3
 },
 "004e8f93-91bb-44a9-9b83-9ef8feab3077": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAE",
  "winners": [
   "XPRT Domski",
   "insight duŝky",
   "O zir vo"
  ],
  "time": "2021-03-01T00:10:40.705",
  "duration": 1571,
  "mode": 3
 },
 "00b34292-e830-44a1-b19c-13434274b7e7": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAE",
  "winners": [
   "spookx .",
   "jusripp",
   "sparkgkky"
  ],
  "time": "2021-02-28T23:40:55.566",
  "duration": 1522,
  "mode": 3
 },
 "08d79edb-bb12-4339-9624-783a6c25314c": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAE",
  "winners": [
   "noob teyo",
   "chimpkky",
   "Tabnae"
  ],
  "time": "2021-02-28T23:10:58.854",
  "duration": 1435,
  "mode": 3
 },
 "00225040-ae4e-47d3-a679-158c9881a08b": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAE",
  "winners": [
   "noob teyo",
   "chimpkky",
   "Tabnae"
  ],
  "time": "2021-02-28T22:40:38.141",
  "duration": 1602,
  "mode": 3
 },
 "018330c1-16d2-46c8-9859-30d93bd34a52": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAE",
  "winners": [
   "LG Jampеr ψ",
   "C9 nosh",
   "EP PAPE"
  ],
  "time": "2021-02-28T22:10:20.507",
  "duration": 1607,
  "mode": 3
 },
 "b5f4a78d-df0b-4b30-b09d-cdf8e83c139c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-03-06T20:40:55.532",
  "duration": 1480,
  "mode": 3
 },
 "918cd3c9-ecda-43b7-bdc6-38d94956ba41": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "A1 Ace1xx 〆",
   "A1 Silverback",
   "divine ح"
  ],
  "time": "2021-03-06T20:10:57.917",
  "duration": 1477,
  "mode": 3
 },
 "06a04f93-c2d2-45c1-a16d-c01c0aa363fa": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "SEN Aspect.",
   "LG Xoonies",
   "npen"
  ],
  "time": "2021-03-06T19:40:59.468",
  "duration": 1453,
  "mode": 3
 },
 "3d0fcf02-175b-4ab9-b673-cafac88a57d7": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "Рrеdator",
   "XPRT Equitz",
   "HunttCakee"
  ],
  "time": "2021-03-06T19:10:57.96",
  "duration": 1470,
  "mode": 3
 },
 "07e171ba-38da-4e1c-be29-3021f0421eb5": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "BBG Bucke",
   "BBG PIECE POLICE",
   "G2 MackWood"
  ],
  "time": "2021-03-06T18:40:57.633",
  "duration": 1459,
  "mode": 3
 },
 "5f0f16da-6b10-4014-b454-e7e1bba91f72": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "LG Jampеr ψ",
   "C9 nosh",
   "EP PAPE"
  ],
  "time": "2021-03-06T18:10:55.404",
  "duration": 1403,
  "mode": 3
 },
 "4a108559-e4db-4eee-ba2b-c1fe74412db7": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "c0dgenesis",
   "9LIVES VOIL",
   "Pandushh"
  ],
  "time": "2021-03-07T00:40:59.748",
  "duration": 1485,
  "mode": 3
 },
 "1ffcad91-cf25-45d9-bbf7-624d67640a89": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "Speguu",
   "OUTCAST GOKU YT",
   "Justicе."
  ],
  "time": "2021-03-07T00:10:59.848",
  "duration": 1454,
  "mode": 3
 },
 "739aabcc-e44e-4427-b0ae-c00d3f2a2cd3": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "Gun Control Arab",
   "Nate Hill",
   "innocеntѕ"
  ],
  "time": "2021-03-06T23:40:59.142",
  "duration": 1461,
  "mode": 3
 },
 "817addf7-d673-46de-8ebd-d99b298c20dd": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "gаbeski",
   "9LIVES Tahi",
   "sprite dabdabdba"
  ],
  "time": "2021-03-06T23:11:01.253",
  "duration": 1442,
  "mode": 3
 },
 "2eb9ccec-e092-4050-8d72-f9b1aa187cd3": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "SEN ZYFA 地",
   "nut 1300",
   "TUEXY"
  ],
  "time": "2021-03-06T22:41:01.658",
  "duration": 1463,
  "mode": 3
 },
 "9dd35f61-77a9-4096-9ab6-4a59b106a470": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "gаbeski",
   "9LIVES Tahi",
   "sprite dabdabdba"
  ],
  "time": "2021-03-06T22:11:02.903",
  "duration": 1455,
  "mode": 3
 },
 "054a223d-1b21-4015-8bb9-ab0791a7d1aa": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2021-03-07T20:40:57.367",
  "duration": 1410,
  "mode": 3
 },
 "46c1fdb6-636d-4791-8b7e-f614de3cbd9a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2021-03-07T20:10:56.15",
  "duration": 1472,
  "mode": 3
 },
 "ebb3e0f1-38b0-4d79-ae82-a59f40793884": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2021-03-07T19:40:59.041",
  "duration": 1448,
  "mode": 3
 },
 "4f9d1e32-0344-44d9-ad05-4f33640ac869": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "noob teyo",
   "chimpkky",
   "Tabnae"
  ],
  "time": "2021-03-07T19:10:59.744",
  "duration": 1425,
  "mode": 3
 },
 "d2066abb-652c-40e0-adcb-dce113885129": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "skillѕ.",
   "3 soul",
   "qwеx"
  ],
  "time": "2021-03-07T18:40:59.363",
  "duration": 1488,
  "mode": 3
 },
 "4b0d16dd-4065-46ab-aefd-ef7a76b60b7c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "HIGHGROUND KІNG7",
   "Dictate",
   "Userz ."
  ],
  "time": "2021-03-07T18:10:57.179",
  "duration": 1472,
  "mode": 3
 },
 "91de61ae-b862-46d0-89a3-a644831a7d87": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "Cеicе",
   "SEN Animal",
   "The Uzі"
  ],
  "time": "2021-03-08T00:41:00.237",
  "duration": 1444,
  "mode": 3
 },
 "08ce4552-d4e0-4a79-861c-faca1e2d3b89": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF",
   "skqughaski2k"
  ],
  "time": "2021-03-08T00:10:59.669",
  "duration": 1506,
  "mode": 3
 },
 "2647809c-337e-48ea-a809-84a9f263cf72": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "XSET Knight",
   "XSET Shark",
   "XSET Av"
  ],
  "time": "2021-03-07T23:41:01.517",
  "duration": 1478,
  "mode": 3
 },
 "2bc12a2c-de86-4c45-9398-526c7201bf8f": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF",
   "skqughaski2k"
  ],
  "time": "2021-03-07T23:11:00.119",
  "duration": 1442,
  "mode": 3
 },
 "fd03bebf-3c34-4a06-ae15-382e6aaa6bd0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "BBG Kreozard",
   "XTRA Illest",
   "C9 Avery"
  ],
  "time": "2021-03-07T22:41:00.811",
  "duration": 1490,
  "mode": 3
 },
 "3a7bf0b2-5a02-445f-8811-81e19f311798": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAE",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2021-03-07T22:10:58.459",
  "duration": 1426,
  "mode": 3
 },
 "8a118f51-9d2f-4f8d-86fa-1a8edef7a10d": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "BBG Bucke",
   "BBG PIECE POLICE",
   "G2 MackWood"
  ],
  "time": "2021-03-15T00:40:59.021",
  "duration": 1505,
  "mode": 3
 },
 "f68bacc6-0cbc-4676-9163-6a33ed5e9628": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "XPRT Domski",
   "insight duŝky",
   "O zir vo"
  ],
  "time": "2021-03-15T00:10:57.3",
  "duration": 1488,
  "mode": 3
 },
 "b21688c9-c579-4f0a-a3de-faafe198b0f7": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-03-14T23:40:57.493",
  "duration": 1438,
  "mode": 3
 },
 "e86cd793-ebe6-40c3-9b94-210a67527af7": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-03-14T23:10:59.034",
  "duration": 1511,
  "mode": 3
 },
 "c4b9326c-b79b-483c-8b0a-97d1e29642c1": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "BBG Kreozard",
   "XTRA Illest",
   "C9 Avery"
  ],
  "time": "2021-03-14T22:40:59.33",
  "duration": 1487,
  "mode": 3
 },
 "70e4bdd0-8950-44d0-822d-0c2101e39a0f": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2021-03-14T22:11:00.842",
  "duration": 1499,
  "mode": 3
 },
 "0e6b8d63-e9c7-40a0-acf7-55c197ba5f18": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF",
   "skqughaski2k"
  ],
  "time": "2021-03-14T00:40:58.577",
  "duration": 1437,
  "mode": 3
 },
 "520e1446-d459-4997-af69-149a1cf3a5ef": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "NRG СІіх",
   "SEN BUGHA 父",
   "FаZe Bizzle"
  ],
  "time": "2021-03-14T00:10:58.44",
  "duration": 1506,
  "mode": 3
 },
 "3bc8753a-5549-4368-837e-e01f46c7830e": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "Cоmmandment",
   "FaZe Cented",
   "NRG Edgey"
  ],
  "time": "2021-03-13T23:40:57.856",
  "duration": 1476,
  "mode": 3
 },
 "0602e559-9d1c-454d-8a20-8d2c18feeade": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "LG Slackes",
   "1P Acornski",
   "G2 Jаhq"
  ],
  "time": "2021-03-13T23:11:00.907",
  "duration": 1452,
  "mode": 3
 },
 "ceaa30b9-8896-47b6-84aa-404398dc9e27": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "ENDL8SS DEYYRITO",
   "mero2k",
   "ENDLESS Reverse"
  ],
  "time": "2021-03-13T22:41:03.037",
  "duration": 1499,
  "mode": 3
 },
 "10323d0c-5623-48cc-ba93-e905a5603c31": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAE",
  "winners": [
   "gаbeski",
   "9LIVES Tahi",
   "sprite dabdabdba"
  ],
  "time": "2021-03-13T22:10:56.262",
  "duration": 1463,
  "mode": 3
 },
 "95c5d5d2-8302-450c-8a63-30945ffb06c7": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_NAE",
  "winners": [
   "NRG ZAYT",
   "TrainH saffy",
   "Liquid STREMON"
  ],
  "time": "2021-03-08T01:45:55.249",
  "duration": 1481,
  "mode": 3
 },
 "e21fedbd-bbe9-4785-8b78-bfb6e4b04d81": {
  "tournamentID": "epicgames_S15_Dreamhack_December_EU_Finals",
  "winners": [
   "BL Setty",
   "GXR teeq"
  ],
  "time": "2020-12-20T20:35:22.704",
  "duration": 1528,
  "mode": 2
 },
 "0e208450-6c05-492d-9d03-6f228ccd0ac1": {
  "tournamentID": "epicgames_S15_Dreamhack_December_EU_Finals",
  "winners": [
   "BL Setty",
   "GXR teeq"
  ],
  "time": "2020-12-20T19:55:22.873",
  "duration": 1527,
  "mode": 2
 },
 "ca1b38ae-694f-4d91-8596-fa698feeb578": {
  "tournamentID": "epicgames_S15_Dreamhack_December_EU_Finals",
  "winners": [
   "LootBoy QueasKun",
   "Glоrious TruleX"
  ],
  "time": "2020-12-20T19:15:22.37",
  "duration": 1542,
  "mode": 2
 },
 "3f9a373d-8dae-4940-891e-32d339902e39": {
  "tournamentID": "epicgames_S15_Dreamhack_December_EU_Finals",
  "winners": [
   "VP Kiryache32",
   "NaVi Putrick"
  ],
  "time": "2020-12-20T18:35:20.425",
  "duration": 1479,
  "mode": 2
 },
 "8fba85ed-a646-49d7-b3ff-702e1d679fe1": {
  "tournamentID": "epicgames_S15_Dreamhack_December_EU_Finals",
  "winners": [
   "wxlfiez",
   "fnc crr 21"
  ],
  "time": "2020-12-20T17:55:22.693",
  "duration": 1506,
  "mode": 2
 },
 "6dcc940c-ce63-4fb5-9f26-2b08fa333a91": {
  "tournamentID": "epicgames_S15_Dreamhack_December_EU_Finals",
  "winners": [
   "Wave Vadeal",
   "BL Noahreyli ӝ"
  ],
  "time": "2020-12-20T17:15:21.885",
  "duration": 1544,
  "mode": 2
 },
 "5e370cdf-a525-4481-ad3e-a71e9f6bba59": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "Refsgaard 7",
   "NVD Skram"
  ],
  "time": "2021-01-31T17:55:21.727",
  "duration": 1450,
  "mode": 2
 },
 "2a7de992-7e6d-4e66-a342-6bf6c69337cd": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "Envice kelfy",
   "ft 97default ツ"
  ],
  "time": "2021-01-31T17:15:22.072",
  "duration": 1492,
  "mode": 2
 },
 "35b348b9-0570-462c-bb73-cb7e78759f6e": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "GriffFNBR",
   "Knifer ."
  ],
  "time": "2021-01-31T16:35:22.81",
  "duration": 1499,
  "mode": 2
 },
 "4c2084b1-56da-4ab7-b3d9-b1215b5963f8": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "EP Saevid 194",
   "G2 Letshe"
  ],
  "time": "2021-01-31T15:55:22.878",
  "duration": 1519,
  "mode": 2
 },
 "a9f64101-887c-4b7a-8a96-7b4efff7e2cb": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "GUILD Hen ӝ",
   "oogway 74"
  ],
  "time": "2021-01-31T15:15:21.811",
  "duration": 1478,
  "mode": 2
 },
 "5b983649-4d66-4cc4-9a9d-2f53a2ab47e0": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "Wave Vadeal",
   "BL Noahreyli ӝ"
  ],
  "time": "2021-01-31T14:35:24.039",
  "duration": 1488,
  "mode": 2
 },
 "2d655c69-609d-48c3-9823-ea8b054c5bfd": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "Heretics K1nzеll",
   "wakıe"
  ],
  "time": "2021-01-31T13:55:22.095",
  "duration": 1537,
  "mode": 2
 },
 "50e993cb-3f08-4b55-8277-bf72f8dc0f08": {
  "tournamentID": "epicgames_S15_Dreamhack_January_EU_Finals",
  "winners": [
   "LootBoy QueasKun",
   "Glоrious TruleX"
  ],
  "time": "2021-01-31T13:15:24.368",
  "duration": 1513,
  "mode": 2
 },
 "02cfa2b9-1fc8-4177-8956-dfd64b2ab643": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_EU",
  "winners": [
   "Wave Vadeal",
   "BL Noahreyli ӝ",
   "rezon ay лол"
  ],
  "time": "2021-02-14T20:40:24.661",
  "duration": 1550,
  "mode": 3
 },
 "027aca23-fc7e-4794-9508-d8d569ff9c2e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_EU",
  "winners": [
   "GLORIOUS snаp",
   "Heretics Miro.",
   "Flames Swag 7"
  ],
  "time": "2021-02-14T20:10:27.748",
  "duration": 1578,
  "mode": 3
 },
 "0043f58b-4b7c-46cc-a2cd-34d838fd7ade": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_EU",
  "winners": [
   "GUILD Hen ӝ",
   "GUILD JаnnisZ",
   "oogway 74"
  ],
  "time": "2021-02-14T19:40:22.759",
  "duration": 1481,
  "mode": 3
 },
 "013cbcd0-fb1d-4508-8af9-5d86294f28aa": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_EU",
  "winners": [
   "GLORIOUS snаp",
   "Heretics Miro.",
   "Flames Swag 7"
  ],
  "time": "2021-02-14T19:10:24.306",
  "duration": 1571,
  "mode": 3
 },
 "0264110e-b555-4f5c-9bd4-c01f18d50554": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_EU",
  "winners": [
   "LootBoy QueasKun",
   "heretics packo メ",
   "Centric Rakso"
  ],
  "time": "2021-02-14T18:40:31.961",
  "duration": 1483,
  "mode": 3
 },
 "0023c311-f020-4e67-b5b1-2d1f5397c950": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_EU",
  "winners": [
   "GUILD Hen ӝ",
   "GUILD JаnnisZ",
   "oogway 74"
  ],
  "time": "2021-02-14T18:10:21.416",
  "duration": 1476,
  "mode": 3
 },
 "087873c3-67a0-43da-8011-5fcf846e47f6": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_EU",
  "winners": [
   "FL7 Helix",
   "777 BOBBY",
   "Flames Deqzyy"
  ],
  "time": "2021-02-21T20:41:03.961",
  "duration": 1518,
  "mode": 3
 },
 "04d29a82-3468-439f-8139-a9c35398449a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_EU",
  "winners": [
   "TrainH Umplify",
   "TrainH Matsoe",
   "NRG benjуfishу"
  ],
  "time": "2021-02-21T20:10:59.383",
  "duration": 1393,
  "mode": 3
 },
 "0661b6b4-8b64-4f91-b435-f323c817e2e5": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_EU",
  "winners": [
   "CL Sаfik",
   "VP Siberiajkee",
   "CL iRezUmi"
  ],
  "time": "2021-02-21T19:40:59.55",
  "duration": 1477,
  "mode": 3
 },
 "04e77f89-6f5c-426d-980d-515b6c1508f4": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_EU",
  "winners": [
   "TrainH Umplify",
   "TrainH Matsoe",
   "NRG benjуfishу"
  ],
  "time": "2021-02-21T19:10:56.897",
  "duration": 1469,
  "mode": 3
 },
 "0284c040-344b-4647-9274-7c65d43c2150": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_EU",
  "winners": [
   "TrainH Skite",
   "TrаinH Fаlconly",
   "Grizi Robabz"
  ],
  "time": "2021-02-21T18:41:01.567",
  "duration": 1486,
  "mode": 3
 },
 "09525a55-bf72-4b54-b6ca-e5921f80dcba": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_EU",
  "winners": [
   "znaрру",
   "Gambit Toose",
   "NaVi Putrick"
  ],
  "time": "2021-02-21T18:11:03.255",
  "duration": 1513,
  "mode": 3
 },
 "059c0b18-f049-49b0-b03d-be6066b70fa6": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_EU",
  "winners": [
   "RABID7",
   "Browner 37",
   "yagsou"
  ],
  "time": "2021-02-28T20:40:59.474",
  "duration": 1509,
  "mode": 3
 },
 "0496831a-4a9e-4fb1-b66f-ced982def7f4": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_EU",
  "winners": [
   "Shaykoz.",
   "GO Grayinjo ӝ",
   "Solary EMXXRR 7"
  ],
  "time": "2021-02-28T20:10:58.793",
  "duration": 1425,
  "mode": 3
 },
 "01341264-5429-4963-8990-217c23c56be8": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_EU",
  "winners": [
   "Mv3 c0de",
   "Focus ManuM",
   "putisimo MateoZ"
  ],
  "time": "2021-02-28T19:41:00.072",
  "duration": 1505,
  "mode": 3
 },
 "007309bb-196a-43a2-8cc2-e76c03ed679e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_EU",
  "winners": [
   "Solarу BlastR",
   "Vitаlity Nikof",
   "TrainH Alphaa"
  ],
  "time": "2021-02-28T19:11:03.92",
  "duration": 1517,
  "mode": 3
 },
 "00e16899-7ed8-44d9-80ad-223a07a57b9d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_EU",
  "winners": [
   "Adn 7",
   "Ηardfind",
   "AstrоSMZ"
  ],
  "time": "2021-02-28T18:41:04.628",
  "duration": 1472,
  "mode": 3
 },
 "005e0047-4bc4-45d3-a7b4-f7510c18a765": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_EU",
  "winners": [
   "Xypher Stasiowyy",
   "synxx -",
   "Demonreyli"
  ],
  "time": "2021-02-28T18:11:04.257",
  "duration": 1401,
  "mode": 3
 },
 "c2596cce-b66c-400b-af58-02f7fc9a9a0c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Lootboy Pinq 7",
   "Glоrious TruleX",
   "vitality stompy-"
  ],
  "time": "2021-03-06T16:40:56.352",
  "duration": 1462,
  "mode": 3
 },
 "63a64585-531f-4939-9a50-f6cef2e49e74": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "LootBoy QueasKun",
   "heretics packo メ",
   "Centric Rakso"
  ],
  "time": "2021-03-06T16:10:57.108",
  "duration": 1497,
  "mode": 3
 },
 "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Wave Vadeal",
   "BL Noahreyli ӝ",
   "rezon ay лол"
  ],
  "time": "2021-03-06T15:40:58.72",
  "duration": 1474,
  "mode": 3
 },
 "091e738f-3244-4451-bf7c-8cef6d4a782c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "LootBoy QueasKun",
   "heretics packo メ",
   "Centric Rakso"
  ],
  "time": "2021-03-06T15:11:00.314",
  "duration": 1491,
  "mode": 3
 },
 "5e28753b-1a1c-4e90-8082-486a372597b6": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "apeks IDrop 7",
   "GUILD TаySon",
   "100T MrSavage"
  ],
  "time": "2021-03-06T14:40:57.438",
  "duration": 1359,
  "mode": 3
 },
 "cca61707-570b-41fb-a8ee-6c62113bd14c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Lootboy Pinq 7",
   "Glоrious TruleX",
   "vitality stompy-"
  ],
  "time": "2021-03-06T14:10:59.151",
  "duration": 1439,
  "mode": 3
 },
 "0ab62b4b-01fc-4622-9258-4aff3b11f3b1": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "BL Setty",
   "Gamma Kami",
   "GXR teeq"
  ],
  "time": "2021-03-06T21:11:00.171",
  "duration": 1498,
  "mode": 3
 },
 "7428ba7d-0524-4b0e-9f01-1c746c6728e1": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Siko Lzrxy7",
   "Envice kelfy",
   "Vortexers"
  ],
  "time": "2021-03-06T20:41:55.019",
  "duration": 1431,
  "mode": 3
 },
 "c4ed9b93-3de8-406b-b564-1af26a0a9157": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "wishi washy",
   "Traitor 7",
   "TD Raqz"
  ],
  "time": "2021-03-06T20:11:56.712",
  "duration": 1461,
  "mode": 3
 },
 "8691f99b-c81b-470c-9139-14c96c6bc320": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Jоefn",
   "V4 Jur3ky",
   "Shadow 1118"
  ],
  "time": "2021-03-06T19:40:58.554",
  "duration": 1496,
  "mode": 3
 },
 "13779fb0-73ad-4619-9871-e03e33e5b838": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "le artox",
   "le pizza",
   "le ardit"
  ],
  "time": "2021-03-06T19:10:59.676",
  "duration": 1476,
  "mode": 3
 },
 "b9327e2e-6a55-46eb-87bf-9a44685c38b6": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Shaykoz.",
   "GO Grayinjo ӝ",
   "Solary EMXXRR 7"
  ],
  "time": "2021-03-06T18:41:02.275",
  "duration": 1455,
  "mode": 3
 },
 "7093813e-7784-4e80-a1eb-3d0e375d65bc": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "THE BIG DOWNS 유",
   "etq 7",
   "BL PabloWingu"
  ],
  "time": "2021-03-07T16:40:54.386",
  "duration": 1464,
  "mode": 3
 },
 "19709178-cda3-43ef-846e-4e83df877ad1": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Malibuca",
   "TCE shizokıng〆",
   "Mayhemᅠ"
  ],
  "time": "2021-03-07T16:10:58.597",
  "duration": 1466,
  "mode": 3
 },
 "095cf018-5d2d-47b9-ab16-522a81c48b74": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "KPI Kiujy",
   "Not kkwet",
   "Serenexo ϟ"
  ],
  "time": "2021-03-07T15:41:00.027",
  "duration": 1421,
  "mode": 3
 },
 "97271c2d-0aca-4c1c-b142-4a89bd0155db": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "BL Raifla",
   "BL SliX",
   "GXR Milаn"
  ],
  "time": "2021-03-07T15:11:00.592",
  "duration": 1492,
  "mode": 3
 },
 "f9cf5905-a926-425a-ac31-8a48feeaaf03": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Wave Kikoo",
   "LootBoy Slender",
   "XIV starboymosh"
  ],
  "time": "2021-03-07T14:40:57.642",
  "duration": 1443,
  "mode": 3
 },
 "521d92c1-9f38-45af-8030-fdda92c045a0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Malibuca",
   "TCE shizokıng〆",
   "Mayhemᅠ"
  ],
  "time": "2021-03-07T14:10:57.953",
  "duration": 1481,
  "mode": 3
 },
 "7e6bf34a-49cd-4690-a664-730c6e69d195": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "MCES Andilex",
   "Grizi SnayzOnBTC",
   "xsweeze.mces"
  ],
  "time": "2021-03-07T20:40:59.181",
  "duration": 1456,
  "mode": 3
 },
 "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "RCY Paddy",
   "Knifer .",
   "wkey veno"
  ],
  "time": "2021-03-07T20:10:58.076",
  "duration": 1495,
  "mode": 3
 },
 "f33ce1e5-db88-4a54-94ed-76bb512b39cf": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2021-03-07T19:40:58.51",
  "duration": 1401,
  "mode": 3
 },
 "bf3478de-32a3-402a-9473-82bb21ce85a6": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2021-03-07T19:10:59.453",
  "duration": 1441,
  "mode": 3
 },
 "01e474f6-4560-4194-ba2e-11bc8ca5019a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Homyno ewen",
   "MCES DKS",
   "eg0p1ayer.BDS"
  ],
  "time": "2021-03-07T18:41:00.365",
  "duration": 1455,
  "mode": 3
 },
 "9713fc66-d679-44a3-a035-17fad27d5429": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_EU",
  "winners": [
   "Yeww.",
   "SMS Jаmz",
   "shmеky"
  ],
  "time": "2021-03-07T18:11:01.057",
  "duration": 1451,
  "mode": 3
 },
 "0722de64-280c-43e3-b328-39ad72a9adbf": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "GUILD Hen ӝ",
   "GUILD JаnnisZ",
   "oogway 74"
  ],
  "time": "2021-03-14T20:41:07.983",
  "duration": 1460,
  "mode": 3
 },
 "f170b7a0-208e-4560-8a21-e5dceb52c6f4": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "GUILD Flikk",
   "GUILD Аnas",
   "Gamma Th0masHD"
  ],
  "time": "2021-03-14T20:11:15.413",
  "duration": 1457,
  "mode": 3
 },
 "a3043799-dd99-4ce1-8725-d9ea55c17055": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "MCES Andilex",
   "Grizi SnayzOnBTC",
   "xsweeze.mces"
  ],
  "time": "2021-03-14T19:41:02.864",
  "duration": 1465,
  "mode": 3
 },
 "85304357-c9e1-4860-bdda-aad670819480": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "RCY Paddy",
   "Knifer .",
   "wkey veno"
  ],
  "time": "2021-03-14T19:11:05.423",
  "duration": 1442,
  "mode": 3
 },
 "9a95463c-45a1-463d-87fc-a3f2d1b85676": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "GUILD Hen ӝ",
   "GUILD JаnnisZ",
   "oogway 74"
  ],
  "time": "2021-03-14T18:40:58.944",
  "duration": 1495,
  "mode": 3
 },
 "51a50f2c-9d7b-4642-af3d-00043aebcd39": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "Wave Vadeal",
   "BL Noahreyli ӝ",
   "rezon ay лол"
  ],
  "time": "2021-03-14T18:11:09.121",
  "duration": 1455,
  "mode": 3
 },
 "30573356-b0ab-4468-889f-925cf3b88e29": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "BL Setty",
   "Gamma Kami",
   "GXR teeq"
  ],
  "time": "2021-03-13T20:41:08.448",
  "duration": 1509,
  "mode": 3
 },
 "a15fde49-f8ea-44ac-89f4-39f05b771011": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "GUILD Hen ӝ",
   "GUILD JаnnisZ",
   "oogway 74"
  ],
  "time": "2021-03-13T20:11:05.855",
  "duration": 1440,
  "mode": 3
 },
 "0110fb9a-9bff-431b-a2ee-53ede998d4e7": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "Wave Vadeal",
   "BL Noahreyli ӝ",
   "rezon ay лол"
  ],
  "time": "2021-03-13T19:41:06.442",
  "duration": 1471,
  "mode": 3
 },
 "16aa2170-d86b-4f12-a89b-bea304ae9f4e": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "Wave Kikoo",
   "LootBoy Slender",
   "XIV starboymosh"
  ],
  "time": "2021-03-13T19:11:01.661",
  "duration": 1445,
  "mode": 3
 },
 "2ce1aa95-64ed-4283-8524-81071b9840e1": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "TrainH Umplify",
   "TrainH Matsoe",
   "NRG benjуfishу"
  ],
  "time": "2021-03-13T18:41:10.91",
  "duration": 1440,
  "mode": 3
 },
 "b3da443b-0f19-4857-85f1-7abf9c771515": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_EU",
  "winners": [
   "Lootboy Pinq 7",
   "Glоrious TruleX",
   "vitality stompy-"
  ],
  "time": "2021-03-13T18:11:04.862",
  "duration": 1412,
  "mode": 3
 },
 "3449169d-12db-4213-8a42-45b31c492dab": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_EU",
  "winners": [
   "ALOFT Diablo",
   "Flecken.",
   "bayoл"
  ],
  "time": "2021-03-07T21:45:57.226",
  "duration": 1514,
  "mode": 3
 },
 "01ce94e4-0dd8-4383-97a9-1da5b0e6b52e": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "winners": [
   "Pure Bombito",
   "daddy rift420"
  ],
  "time": "2020-12-18T08:35:19.264",
  "duration": 1540,
  "mode": 2
 },
 "63a17141-fd57-4845-82e0-0b5941625369": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "winners": [
   "5G primal",
   "ZH22 Aideneh30"
  ],
  "time": "2020-12-18T07:55:19.404",
  "duration": 1532,
  "mode": 2
 },
 "70cc3684-0e1b-4fe3-ac90-d45ef9c3e59f": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "winners": [
   "TD Dog7",
   "NC zinqxzǃ"
  ],
  "time": "2020-12-18T07:15:19.422",
  "duration": 1536,
  "mode": 2
 },
 "4bbb9411-a445-47b6-8158-24d730189c91": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF"
  ],
  "time": "2020-12-18T06:35:18.676",
  "duration": 1509,
  "mode": 2
 },
 "07313b93-c466-47b3-b593-574c2e696174": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "winners": [
   "Kjrop",
   "NeonWTFF YT"
  ],
  "time": "2020-12-18T05:55:19.326",
  "duration": 1511,
  "mode": 2
 },
 "92c17b83-b1cd-4e46-99fe-5ea260c169de": {
  "tournamentID": "epicgames_S15_Dreamhack_December_NAW_Finals",
  "winners": [
   "100T Arkhram.",
   "XTRA Reet7"
  ],
  "time": "2020-12-18T05:15:19.813",
  "duration": 1519,
  "mode": 2
 },
 "5518cfc4-aace-4661-b8a3-55417408f21d": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-02-01T02:55:24.596",
  "duration": 1517,
  "mode": 2
 },
 "9603a6ab-daaa-463c-ab36-87c2dc8687c7": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "XPRT Equitz",
   "AKA Squish YT"
  ],
  "time": "2021-02-01T02:15:24.453",
  "duration": 1504,
  "mode": 2
 },
 "727c5671-5c14-4001-a4da-dbfd21e91534": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "ENDL8SS DEYYRITO",
   "BBG PIECE POLICE"
  ],
  "time": "2021-02-01T01:35:24.475",
  "duration": 1471,
  "mode": 2
 },
 "3c0c3b21-c5af-4e3f-b3fc-749df4c07175": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "TRNL exе",
   "BeckTHD."
  ],
  "time": "2021-02-01T00:55:21.85",
  "duration": 1466,
  "mode": 2
 },
 "35036fa6-85dd-4c77-ad30-e0e09ecd1277": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "TRNL Criizux.",
   "G2 Jelty."
  ],
  "time": "2021-02-01T00:15:23.82",
  "duration": 1556,
  "mode": 2
 },
 "913da743-ac46-41bd-9573-fbfe1176d300": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-01-31T23:35:24.271",
  "duration": 1489,
  "mode": 2
 },
 "84594bce-e350-4536-9c55-762eb7d46491": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "FS SHERIFF DEG",
   "FS PIECE CHIEF"
  ],
  "time": "2021-01-31T22:55:22.96",
  "duration": 1502,
  "mode": 2
 },
 "1fd789a0-1125-47af-9457-fc9e72ce3820": {
  "tournamentID": "epicgames_S15_Dreamhack_January_NAW_Finals",
  "winners": [
   "TRNL exе",
   "BeckTHD."
  ],
  "time": "2021-01-31T22:15:25.056",
  "duration": 1446,
  "mode": 2
 },
 "120601f9-6cf8-4182-b82b-88a3638b0c6d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAW",
  "winners": [
   "TRNL Criizux.",
   "norcal alithy",
   "NorCal Frap."
  ],
  "time": "2021-02-15T04:40:33.327",
  "duration": 1520,
  "mode": 3
 },
 "06760ad8-558f-4d8d-9fa1-b3a496ffa76a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAW",
  "winners": [
   "CLG symetrical",
   "TD Dog7",
   "NC zinqxzǃ"
  ],
  "time": "2021-02-15T04:10:24.057",
  "duration": 1498,
  "mode": 3
 },
 "10f9537b-0fd3-4a9b-90cf-ab0f4a1a50f6": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAW",
  "winners": [
   "ZH22 Yumi",
   "ZH22 Squishy",
   "Balanced Mob"
  ],
  "time": "2021-02-15T03:40:30.216",
  "duration": 1557,
  "mode": 3
 },
 "025a85c8-5b85-4028-9abd-dff344d10f33": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAW",
  "winners": [
   "TSG SIDLAHψ",
   "Mateоψ",
   "munkawesomer"
  ],
  "time": "2021-02-15T03:10:25.404",
  "duration": 1511,
  "mode": 3
 },
 "0d20d90d-adbd-4fdb-ac8f-5e544ad3a526": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAW",
  "winners": [
   "Elite Lanjok",
   "renuity on low",
   "Nahv ϟ"
  ],
  "time": "2021-02-15T02:40:24.516",
  "duration": 1495,
  "mode": 3
 },
 "0f3a7425-4c96-4a4f-b51b-86d12a6dd95c": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_NAW",
  "winners": [
   "100T Falconer",
   "5G KADENOX",
   "TurtleTavern"
  ],
  "time": "2021-02-15T02:10:21.831",
  "duration": 1484,
  "mode": 3
 },
 "0a8e71b9-a90e-4272-967c-f89d73684a52": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAW",
  "winners": [
   "clst dmile",
   "Nedаk",
   "Lucish is bad"
  ],
  "time": "2021-02-22T04:41:07.227",
  "duration": 1409,
  "mode": 3
 },
 "00e98a8e-634e-4828-ba83-f806ae614c1a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAW",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-02-22T04:10:59.839",
  "duration": 1422,
  "mode": 3
 },
 "04e35364-a9c7-4006-aa32-3c6e16bfe8f3": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAW",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-02-22T03:41:02.45",
  "duration": 1472,
  "mode": 3
 },
 "0036f7c4-ff1f-4703-971f-67a59b73b84a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAW",
  "winners": [
   "5G illusion7",
   "twitter 1beastfn",
   "5G mitoo"
  ],
  "time": "2021-02-22T03:11:06.021",
  "duration": 1479,
  "mode": 3
 },
 "0051b6c5-01d8-4cbf-a89a-83da97cb4443": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAW",
  "winners": [
   "PURE ZESTY B",
   "domо.",
   "pure unsightly"
  ],
  "time": "2021-02-22T02:41:08.135",
  "duration": 1437,
  "mode": 3
 },
 "076a30d8-46a5-4f6c-b578-2dcbace7437b": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_NAW",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-02-22T02:11:08.23",
  "duration": 1457,
  "mode": 3
 },
 "07f2d8d6-0e15-44b9-9373-6be2c5a20f13": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAW",
  "winners": [
   "RG Kirky",
   "ZH22 France",
   "ATL Lucks"
  ],
  "time": "2021-03-01T04:40:20.299",
  "duration": 1510,
  "mode": 3
 },
 "03b7a6ed-b0f0-467a-80aa-6e31185f779a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAW",
  "winners": [
   "Pure Bombito",
   "5G Nitrix",
   "favsfan932"
  ],
  "time": "2021-03-01T04:10:29.628",
  "duration": 1597,
  "mode": 3
 },
 "02e380c9-bfb8-4275-8220-dc74702d5bc0": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAW",
  "winners": [
   "g0dku",
   "Outcast Triggy",
   "Insight Skvdoosh"
  ],
  "time": "2021-03-01T03:40:15.332",
  "duration": 1629,
  "mode": 3
 },
 "05fa5ce5-d9a5-4a7d-8c34-4342226beb1d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAW",
  "winners": [
   "Mangosvibin",
   "5G Kaboo",
   "pure pelican"
  ],
  "time": "2021-03-01T03:10:28.435",
  "duration": 1648,
  "mode": 3
 },
 "01d96a5e-5472-48c0-a243-8295116372ba": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAW",
  "winners": [
   "rubenbear8",
   "buzzobear8",
   "ordcpz"
  ],
  "time": "2021-03-01T02:40:16.91",
  "duration": 1626,
  "mode": 3
 },
 "01734918-b0b8-47e6-9af6-398e9f604bbc": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_NAW",
  "winners": [
   "kuuzii",
   "5G nakama",
   "CLST Lollicker"
  ],
  "time": "2021-03-01T02:10:26.471",
  "duration": 1549,
  "mode": 3
 },
 "68c389a8-694a-4485-895a-2d50f539682a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Mangosvibin",
   "5G Kaboo",
   "pure pelican"
  ],
  "time": "2021-03-07T00:40:54.768",
  "duration": 1481,
  "mode": 3
 },
 "c48451a7-20eb-44bb-b3a0-c12a15fdbbc2": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "alexgοnzsoccer85",
   "clg versace p",
   "bizqufan932"
  ],
  "time": "2021-03-07T00:10:57.472",
  "duration": 1494,
  "mode": 3
 },
 "0b629c24-6c5b-449f-ac09-a16ceefb6c98": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Mangosvibin",
   "5G Kaboo",
   "pure pelican"
  ],
  "time": "2021-03-06T23:40:55.3",
  "duration": 1477,
  "mode": 3
 },
 "8e808117-6f1e-4f1e-9311-10ba2ce68798": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "YouTube Fixenz",
   "vague ψ",
   "lίl mosh"
  ],
  "time": "2021-03-06T23:10:58.126",
  "duration": 1439,
  "mode": 3
 },
 "6ebf3c8f-3c43-41f5-83c7-2fc01127ff26": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "SLCT Ark 赤",
   "CLST Drew 赤",
   "SLCT XARE 赤"
  ],
  "time": "2021-03-06T22:40:58.232",
  "duration": 1482,
  "mode": 3
 },
 "03feaf26-8be7-4325-9bba-4ee3c55c797d": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "MuscleMxlk",
   "FrostyzMxlk",
   "SpiritLS."
  ],
  "time": "2021-03-06T22:10:57.885",
  "duration": 1460,
  "mode": 3
 },
 "101a0d1b-c7ae-404f-ae47-8715cb229b1d": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "CLG symetrical",
   "TD Dog7",
   "NC zinqxzǃ"
  ],
  "time": "2021-03-07T04:40:58.133",
  "duration": 1431,
  "mode": 3
 },
 "5fe3e4b7-6288-444a-8ee7-9928afc26be7": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "juiсeǃ",
   "gawr gura fǃ",
   "piano17 x fakie5"
  ],
  "time": "2021-03-07T04:11:03.032",
  "duration": 1460,
  "mode": 3
 },
 "597c2c4e-f0be-40eb-aa8c-d657aec52369": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "CLG symetrical",
   "TD Dog7",
   "NC zinqxzǃ"
  ],
  "time": "2021-03-07T03:40:59.352",
  "duration": 1445,
  "mode": 3
 },
 "cc8c99e0-a336-4cd5-9d86-efecc1afe187": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "XTRA Reet7",
   "4DRStorm.",
   "Akella Maken"
  ],
  "time": "2021-03-07T03:11:03.018",
  "duration": 1380,
  "mode": 3
 },
 "73d18d4d-da79-481b-89bb-e13f9036144a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-03-07T02:40:59.989",
  "duration": 1514,
  "mode": 3
 },
 "c85b4eee-b502-4868-bbcf-388759d59b14": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "5G illusion7",
   "twitter 1beastfn",
   "5G mitoo"
  ],
  "time": "2021-03-07T02:11:01.435",
  "duration": 1489,
  "mode": 3
 },
 "059c91c2-c744-4abc-89f6-692a625a6d19": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Вrоdiе.",
   "RΕХ",
   "Jakeу."
  ],
  "time": "2021-03-08T00:40:56.588",
  "duration": 1428,
  "mode": 3
 },
 "367d260a-9884-4c9d-8f55-345a64a6b7fa": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "BestGamer1028",
   "ZD Zas",
   "Diggy T"
  ],
  "time": "2021-03-08T00:10:57.011",
  "duration": 1477,
  "mode": 3
 },
 "1cb36538-bf65-46d4-9f2b-2b140ba26ea6": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Timbers Raul",
   "Timberѕ Robinznn",
   "Timberѕ Chicken"
  ],
  "time": "2021-03-07T23:40:56.97",
  "duration": 1481,
  "mode": 3
 },
 "6f76477f-bb05-4b1e-aca9-547230b706a2": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "TRNL Criizux.",
   "norcal alithy",
   "NorCal Frap."
  ],
  "time": "2021-03-07T23:10:59.087",
  "duration": 1487,
  "mode": 3
 },
 "6995f656-1345-4a29-b0d3-4ab09786510f": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Timbers Raul",
   "Timberѕ Robinznn",
   "Timberѕ Chicken"
  ],
  "time": "2021-03-07T22:40:58.472",
  "duration": 1462,
  "mode": 3
 },
 "7e94215f-c46b-4d63-a606-2925b1b832fe": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Coolsitо",
   "415 yael",
   "Twitter Confi1x"
  ],
  "time": "2021-03-07T22:10:58.112",
  "duration": 1495,
  "mode": 3
 },
 "944e147e-d9c2-4ab7-a23d-411e4af2dd39": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "ZH22 Zehlo",
   "Balanced Decay",
   "msе"
  ],
  "time": "2021-03-08T04:41:00.578",
  "duration": 1430,
  "mode": 3
 },
 "b227b38e-55fc-4911-b80d-69d8852f3ad0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "Temmy.",
   "ATL Luis.",
   "Yoris."
  ],
  "time": "2021-03-08T04:11:01.858",
  "duration": 1455,
  "mode": 3
 },
 "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "XTRA Quinn",
   "Jucygoatified101",
   "NorCal dylannx7"
  ],
  "time": "2021-03-08T03:40:59.449",
  "duration": 1438,
  "mode": 3
 },
 "2df689ae-ea1e-447c-84e8-a8c9dd15de8c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "rubenbear8",
   "buzzobear8",
   "ordcpz"
  ],
  "time": "2021-03-08T03:11:03.38",
  "duration": 1476,
  "mode": 3
 },
 "3481d9a8-4864-47db-8ee9-a618a6a5bc54": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "rubenbear8",
   "buzzobear8",
   "ordcpz"
  ],
  "time": "2021-03-08T02:40:58.452",
  "duration": 1489,
  "mode": 3
 },
 "41f0fd25-5d96-4f1d-8b4d-b676216daad9": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_NAW",
  "winners": [
   "TRNL TrashyTHD",
   "TRNL exе",
   "Kyle Poppins 34"
  ],
  "time": "2021-03-08T02:10:59.749",
  "duration": 1405,
  "mode": 3
 },
 "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "ZH22 Zehlo",
   "Balanced Decay",
   "msе"
  ],
  "time": "2021-03-15T04:41:01.006",
  "duration": 1460,
  "mode": 3
 },
 "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "pure spideyy",
   "NorCal Blizyzyzy",
   "5G nate tf up ツ"
  ],
  "time": "2021-03-15T04:11:00.83",
  "duration": 1382,
  "mode": 3
 },
 "2ac97491-6e8b-4140-b13d-5575743cfd10": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-03-15T03:40:57.817",
  "duration": 1489,
  "mode": 3
 },
 "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "CLG symetrical",
   "TD Dog7",
   "NC zinqxzǃ"
  ],
  "time": "2021-03-15T03:11:00.3",
  "duration": 1450,
  "mode": 3
 },
 "6f51676c-40fa-4195-8865-de59a8d8318c": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "tsg kenshi",
   "tsg snacky",
   "pure chriѕ"
  ],
  "time": "2021-03-15T02:40:59.279",
  "duration": 1466,
  "mode": 3
 },
 "2433f2c8-4b67-432c-a4fd-ea48543cc1f3": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "pure spideyy",
   "NorCal Blizyzyzy",
   "5G nate tf up ツ"
  ],
  "time": "2021-03-15T02:11:00.821",
  "duration": 1478,
  "mode": 3
 },
 "7b50cd49-a6ec-4466-b266-824ab609b1ee": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "XTRA Quinn",
   "Jucygoatified101",
   "NorCal dylannx7"
  ],
  "time": "2021-03-14T04:40:55.068",
  "duration": 1512,
  "mode": 3
 },
 "4df8d053-f951-442f-9c93-6a1b67afeda1": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "100T Arkhram.",
   "100T rehx",
   "NRG EpikWhale"
  ],
  "time": "2021-03-14T04:10:53.497",
  "duration": 1451,
  "mode": 3
 },
 "4aa6b167-1dbd-4288-8b50-f9a203c2d529": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "TRNL Criizux.",
   "norcal alithy",
   "NorCal Frap."
  ],
  "time": "2021-03-14T03:40:58.719",
  "duration": 1506,
  "mode": 3
 },
 "c61f8de2-6a66-4b6a-911b-c2af62a24023": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "tsg kenshi",
   "tsg snacky",
   "pure chriѕ"
  ],
  "time": "2021-03-14T03:11:00.885",
  "duration": 1511,
  "mode": 3
 },
 "671328ec-7c11-48e7-8974-5e2e7a681f88": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "TSG DaChicken",
   "Skinnybluhh",
   "Kytrex"
  ],
  "time": "2021-03-14T02:40:53.922",
  "duration": 1498,
  "mode": 3
 },
 "67a88aed-ab73-4c06-9bfb-63607f6076c2": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_NAW",
  "winners": [
   "TSG DaChicken",
   "Skinnybluhh",
   "Kytrex"
  ],
  "time": "2021-03-14T02:10:59.046",
  "duration": 1455,
  "mode": 3
 },
 "6a532e5c-671d-453b-be43-6d33513eadc5": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_NAW",
  "winners": [
   "TRNL Weeb",
   "ZH22 Jeffers",
   "merk dardis"
  ],
  "time": "2021-03-08T05:45:58.379",
  "duration": 1497,
  "mode": 3
 },
 "0263bea5-b362-4d36-820c-fd2298fe5842": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "winners": [
   "CH.ほとけいずぶっだ 姫",
   "LCF 太ってるたく",
   "GW Fleder1st"
  ],
  "time": "2021-02-14T10:40:24.131",
  "duration": 1553,
  "mode": 3
 },
 "03bd171a-51fa-48eb-a919-43fc3db17594": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "winners": [
   "AQ demon x",
   "CE Moon",
   "Swillium"
  ],
  "time": "2021-02-14T10:10:22.417",
  "duration": 1520,
  "mode": 3
 },
 "0f041961-63dd-4b80-b92e-54fe46fc5211": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "winners": [
   "CR QJАC",
   "cr naetor様",
   "GOL.D.RОGER"
  ],
  "time": "2021-02-14T09:40:25.562",
  "duration": 1551,
  "mode": 3
 },
 "072ecad2-8c09-411f-88f7-22eaa34db03a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "winners": [
   "CRノRiz",
   "Rid WildHawk ゆ機",
   "Rid Rimr Knight"
  ],
  "time": "2021-02-14T09:10:26.081",
  "duration": 1528,
  "mode": 3
 },
 "0b41dbed-2a7c-40ff-87a6-dd150241d09a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "winners": [
   "svn otomeZz",
   "Korox2 Ѧ",
   "Ṭzuyu2k"
  ],
  "time": "2021-02-14T08:40:15.129",
  "duration": 1559,
  "mode": 3
 },
 "051b61ff-c829-4d8b-aa5d-78a7f607af50": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ASIA",
  "winners": [
   "CRノRiz",
   "Rid WildHawk ゆ機",
   "Rid Rimr Knight"
  ],
  "time": "2021-02-14T08:10:31.776",
  "duration": 1489,
  "mode": 3
 },
 "02d40ac4-1926-446e-acf1-fddd59b5b1dc": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "winners": [
   "ncr rainy",
   "NSR みや",
   "cr yuseakun-."
  ],
  "time": "2021-02-21T10:40:55.934",
  "duration": 1487,
  "mode": 3
 },
 "10f34320-4c0c-445e-8b75-498560173bbf": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "winners": [
   "c4ddywwXX",
   "oogway 4",
   "iseekwhale"
  ],
  "time": "2021-02-21T10:10:57.427",
  "duration": 1477,
  "mode": 3
 },
 "0d11ea71-a31e-457a-b18e-918a9126e2a3": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "winners": [
   "Secret Cghit0",
   "Secret ponta",
   "Secret すず"
  ],
  "time": "2021-02-21T09:40:56.696",
  "duration": 1495,
  "mode": 3
 },
 "040fb9bc-2acf-4947-bd7e-a429de2d7381": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "winners": [
   "ShinoaFN",
   "スイッチ勢かげとら",
   "xavid ."
  ],
  "time": "2021-02-21T09:10:58.672",
  "duration": 1486,
  "mode": 3
 },
 "07633ac5-7af2-42b4-8e22-065904889d3e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "winners": [
   "ShinoaFN",
   "スイッチ勢かげとら",
   "xavid ."
  ],
  "time": "2021-02-21T08:41:02.782",
  "duration": 1501,
  "mode": 3
 },
 "0475828c-2295-471e-815d-36b3de5a7700": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ASIA",
  "winners": [
   "ASF Runa",
   "CR GW CE corましろん",
   "FA ぺぽ 獅子奮迅"
  ],
  "time": "2021-02-21T08:11:07.159",
  "duration": 1470,
  "mode": 3
 },
 "0463f4a9-5cb3-4ded-9872-34d7e9835875": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "winners": [
   "delta syamuuuuuu",
   "FA たかちゃん",
   "CR スカっとスカスカ"
  ],
  "time": "2021-02-28T10:39:06.149",
  "duration": 1753,
  "mode": 3
 },
 "00799d22-fa59-449d-a086-338525e49ef6": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "winners": [
   "svn otomeZz",
   "Korox2 Ѧ",
   "Ṭzuyu2k"
  ],
  "time": "2021-02-28T10:09:32.545",
  "duration": 1828,
  "mode": 3
 },
 "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "winners": [
   "spt hibiki",
   "res Lsha",
   "TheArkhram."
  ],
  "time": "2021-02-28T09:39:57.009",
  "duration": 1644,
  "mode": 3
 },
 "06172ff5-3425-4431-ac3a-5f63f6c37996": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "winners": [
   "T1 SinOoh 666",
   "T1 EnvyWhale",
   "Asudfishy"
  ],
  "time": "2021-02-28T09:10:07.319",
  "duration": 1734,
  "mode": 3
 },
 "045b0834-b116-4247-9bca-9bee8f6557c3": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "winners": [
   "ぼっと 化",
   "stork 笑",
   "KUREN 覇"
  ],
  "time": "2021-02-28T08:39:55.405",
  "duration": 1784,
  "mode": 3
 },
 "01f1b21c-737f-4aed-a886-4f0113121c48": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ASIA",
  "winners": [
   "ぼっと 化",
   "stork 笑",
   "KUREN 覇"
  ],
  "time": "2021-02-28T08:09:45.335",
  "duration": 1818,
  "mode": 3
 },
 "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "FLK 吉男DOPENESS.",
   "Secret champion.",
   "SE TASK 道化師"
  ],
  "time": "2021-03-06T06:40:53.035",
  "duration": 1476,
  "mode": 3
 },
 "2e7a2638-fc28-4a6d-8b53-785f915463e8": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "Felip Rottweiler",
   "duduzera ay лол",
   "GuiKzn"
  ],
  "time": "2021-03-06T06:10:52.784",
  "duration": 1464,
  "mode": 3
 },
 "0b3925ee-8611-4b35-8530-cef26a99de53": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "ごっとらびっと",
   "alba L4ex",
   "FCS Monster"
  ],
  "time": "2021-03-06T05:40:52.935",
  "duration": 1513,
  "mode": 3
 },
 "43cabb3f-e51f-43d1-b5f4-4967022a0bda": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "CRノRuri",
   "MaufinTT",
   "Rid Bob Knight"
  ],
  "time": "2021-03-06T05:10:57.792",
  "duration": 1490,
  "mode": 3
 },
 "0894dcd2-44fd-4451-a1f3-5f6f5df31f44": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "ce zobib",
   "DaAllen.",
   "princeyuraxx"
  ],
  "time": "2021-03-06T04:40:53.077",
  "duration": 1484,
  "mode": 3
 },
 "8586a06c-29ff-4146-8c00-f7db18137e6a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "wall1su",
   "GODBAEKHO 78",
   "Misty Aim"
  ],
  "time": "2021-03-06T04:10:51.214",
  "duration": 1461,
  "mode": 3
 },
 "989d5995-3835-48ad-8cd2-5ce73176e3d5": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "CR QJАC",
   "cr naetor様",
   "GOL.D.RОGER"
  ],
  "time": "2021-03-06T10:40:53.946",
  "duration": 1510,
  "mode": 3
 },
 "063a8e63-e905-47b2-a57b-328fa96de67e": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "крыса0_о",
   "1MPyt",
   "OVA pizdun"
  ],
  "time": "2021-03-06T10:10:53.193",
  "duration": 1513,
  "mode": 3
 },
 "77718933-6604-4f88-8088-061571278492": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "CR QJАC",
   "cr naetor様",
   "GOL.D.RОGER"
  ],
  "time": "2021-03-06T09:40:53.803",
  "duration": 1479,
  "mode": 3
 },
 "46fc9260-60ef-4310-ab59-1f96bca6076b": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "xrarutor.ncr",
   "GW_Albedo",
   "GW_Buyuriru"
  ],
  "time": "2021-03-06T09:10:51.499",
  "duration": 1509,
  "mode": 3
 },
 "43e03d69-0d3a-48c2-9ace-0afea3bc04cb": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "AQ demon x",
   "CE Moon",
   "Swillium"
  ],
  "time": "2021-03-06T08:40:53.075",
  "duration": 1488,
  "mode": 3
 },
 "1e4d6ac2-e5a5-405f-9274-e8cc7f084936": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "T1 SinOoh 666",
   "T1 EnvyWhale",
   "Asudfishy"
  ],
  "time": "2021-03-06T08:10:53.257",
  "duration": 1395,
  "mode": 3
 },
 "0be4dd12-c30e-4e39-9b9d-793687c2d65d": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "delta syamuuuuuu",
   "FA たかちゃん",
   "CR スカっとスカスカ"
  ],
  "time": "2021-03-07T06:40:55.865",
  "duration": 1481,
  "mode": 3
 },
 "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "I love BuckeFPS",
   "Backpack Frenzy",
   "TN EpikStandry7"
  ],
  "time": "2021-03-07T06:10:59.241",
  "duration": 1489,
  "mode": 3
 },
 "e0bf10ff-4956-4369-8c8a-db148bd29a91": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2021-03-07T05:40:58.957",
  "duration": 1492,
  "mode": 3
 },
 "2ed3a8d1-35f0-455a-99c9-af58bf720c51": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2021-03-07T05:10:59.921",
  "duration": 1450,
  "mode": 3
 },
 "27a737ee-1d8c-480a-a76c-cf5d0392d060": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "ShinoaFN",
   "スイッチ勢かげとら",
   "xavid ."
  ],
  "time": "2021-03-07T04:40:59.786",
  "duration": 1507,
  "mode": 3
 },
 "1d84ff89-ff67-4ca4-8ba1-db393808d7a0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "CЕ 2SNgNl",
   "CE fa1zzyy",
   "ce jozyа"
  ],
  "time": "2021-03-07T04:11:05.502",
  "duration": 1455,
  "mode": 3
 },
 "491d3711-283d-4a4c-ae2f-ee47649fa103": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "clitefishy"
  ],
  "time": "2021-03-07T10:40:57.218",
  "duration": 1485,
  "mode": 3
 },
 "1e64faa9-f5fc-402a-b343-7a01529238cd": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "svn zuko.",
   "CG LUCID DREAMS",
   "CE res qjac"
  ],
  "time": "2021-03-07T10:10:58.648",
  "duration": 1485,
  "mode": 3
 },
 "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "ce seak.",
   "peterpan ay лол",
   "clitefishy"
  ],
  "time": "2021-03-07T09:41:00.088",
  "duration": 1450,
  "mode": 3
 },
 "16590f2f-872c-45ed-8303-e69255654bc0": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "私の彼女 まいぽり",
   "NRG benjyfіshy",
   "Rylе"
  ],
  "time": "2021-03-07T09:10:58.622",
  "duration": 1464,
  "mode": 3
 },
 "5b0c65bb-7d4e-4320-972a-e1b9f23e286b": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "svn zuko.",
   "CG LUCID DREAMS",
   "CE res qjac"
  ],
  "time": "2021-03-07T08:41:00.644",
  "duration": 1488,
  "mode": 3
 },
 "dc186fb4-aa0f-4e0e-9484-964607a50edf": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ASIA",
  "winners": [
   "hsjhfz.DoragonCH",
   "SG4 きんぐ",
   "velcia on top"
  ],
  "time": "2021-03-07T08:11:00.004",
  "duration": 1479,
  "mode": 3
 },
 "51be836f-7bfc-4ee3-a59e-693e2d13e36b": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "AQ demon x",
   "CE Moon",
   "Swillium"
  ],
  "time": "2021-03-14T10:40:58.58",
  "duration": 1443,
  "mode": 3
 },
 "8505b717-f953-4cb3-bf80-46f459e1ffe5": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "ごっとらびっと",
   "alba L4ex",
   "FCS Monster"
  ],
  "time": "2021-03-14T10:11:03.415",
  "duration": 1479,
  "mode": 3
 },
 "0b327af0-1c29-4692-ae77-a87f4d6d8b99": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "FCS Fram ncr",
   "ALBA まるお",
   "あぁああぁぁあぁぁぁあああぁああ"
  ],
  "time": "2021-03-14T09:40:58.542",
  "duration": 1448,
  "mode": 3
 },
 "6418df86-25dd-4b44-9a57-e4eea3543f1f": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "マニマニRio",
   "Ruiサナ",
   "マニマニTig"
  ],
  "time": "2021-03-14T09:10:59.454",
  "duration": 1462,
  "mode": 3
 },
 "8970784e-46b6-42d7-9479-ec91e186209c": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "GW_Lettuce",
   "CREssway",
   "GW Hamuppii"
  ],
  "time": "2021-03-14T08:40:58.355",
  "duration": 1487,
  "mode": 3
 },
 "8bfb8726-a3ad-4f3a-9700-e4987b84e884": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "GW_Kоgane",
   "GW_Nephrite",
   "LBR えいむ 老"
  ],
  "time": "2021-03-14T08:10:57.702",
  "duration": 1504,
  "mode": 3
 },
 "2b752bc6-7744-48d3-9d1c-063f2a27a1b8": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "しゅんしゃんだ",
   "LCF りる",
   "LBR やま"
  ],
  "time": "2021-03-13T10:40:57.088",
  "duration": 1482,
  "mode": 3
 },
 "39fa65b2-7c12-40a5-85d6-0eae3226603a": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "FCS Fram ncr",
   "ALBA まるお",
   "あぁああぁぁあぁぁぁあああぁああ"
  ],
  "time": "2021-03-13T10:10:57.205",
  "duration": 1457,
  "mode": 3
 },
 "84d74e00-55fb-4957-92d6-967b468eb15f": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "FCS Fram ncr",
   "ALBA まるお",
   "あぁああぁぁあぁぁぁあああぁああ"
  ],
  "time": "2021-03-13T09:40:57.809",
  "duration": 1469,
  "mode": 3
 },
 "0776d7ca-cabb-40d4-868c-904849e322ad": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "ごっとらびっと",
   "alba L4ex",
   "FCS Monster"
  ],
  "time": "2021-03-13T09:10:57.406",
  "duration": 1464,
  "mode": 3
 },
 "17d27d4d-7152-4796-8fbe-31d90b6d4a60": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "CRノRiz",
   "Rid WildHawk ゆ機",
   "Rid Rimr Knight"
  ],
  "time": "2021-03-13T08:40:56.172",
  "duration": 1517,
  "mode": 3
 },
 "4ab12b83-421a-42ff-9564-501dce283508": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ASIA",
  "winners": [
   "T1 SinOoh 666",
   "T1 EnvyWhale",
   "Asudfishy"
  ],
  "time": "2021-03-13T08:10:53.536",
  "duration": 1468,
  "mode": 3
 },
 "d0b6a774-e106-4c75-9281-b359dd9f24cd": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_ASIA",
  "winners": [
   "amrs200spyedTRG",
   "FOCUS せこちゃんいずごっど",
   "ᴘ7."
  ],
  "time": "2021-03-07T11:45:56.591",
  "duration": 1439,
  "mode": 3
 },
 "07556ca4-cba2-47c8-94d9-d08977d1da5d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_BR",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2021-02-14T21:40:31.248",
  "duration": 1505,
  "mode": 3
 },
 "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_BR",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2021-02-14T21:10:30.691",
  "duration": 1434,
  "mode": 3
 },
 "0ced7ba0-a023-47f7-acc9-d2d9fc84241f": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_BR",
  "winners": [
   "ceronn23",
   "Gаbzera",
   "AG1RRЕ"
  ],
  "time": "2021-02-14T20:40:25.946",
  "duration": 1521,
  "mode": 3
 },
 "0081d159-6ffd-48d2-b694-33d69e0560b0": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_BR",
  "winners": [
   "9z FiѕhyL2R2",
   "9z Nahue507",
   "9z Twayko"
  ],
  "time": "2021-02-14T20:10:26.127",
  "duration": 1551,
  "mode": 3
 },
 "0301eb20-f067-46c9-a936-86bf8c4f0e87": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_BR",
  "winners": [
   "TCE Lucasg",
   "TCE cocak1ng",
   "spıtflow"
  ],
  "time": "2021-02-14T19:40:25.89",
  "duration": 1551,
  "mode": 3
 },
 "02ce5d84-2481-4cf3-8337-a2b8e2319d0b": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_BR",
  "winners": [
   "TCE Lucasg",
   "TCE cocak1ng",
   "spıtflow"
  ],
  "time": "2021-02-14T19:10:24.001",
  "duration": 1523,
  "mode": 3
 },
 "0c910129-9645-4652-8aa3-353c07617ec6": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "brabo punisher",
   "zepapibaquigrafo",
   "Rincon 74"
  ],
  "time": "2021-02-21T22:11:45.923",
  "duration": 1030,
  "mode": 3
 },
 "025cdf1a-9668-4039-ac93-c00fd3d33fbb": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "luisrabbity7",
   "TRIBE CaduznHere",
   "wypeHERE"
  ],
  "time": "2021-02-21T21:41:04.103",
  "duration": 1443,
  "mode": 3
 },
 "007724e6-b190-496d-b487-41aa513fe236": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "LOUD Lasers",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2021-02-21T21:11:04.773",
  "duration": 1465,
  "mode": 3
 },
 "02723188-f565-40cf-8b12-355ec7c8e531": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "LOUD Lasers",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2021-02-21T20:41:05.408",
  "duration": 1474,
  "mode": 3
 },
 "04ad904e-173a-424d-ab42-daaab810a4d1": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "LOUD Lasers",
   "Noble Diamondd",
   "Filipe PitbuIl"
  ],
  "time": "2021-02-21T20:11:05.228",
  "duration": 1521,
  "mode": 3
 },
 "03311016-1513-43bc-92ec-c8167994de0e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "Beтто",
   "Æ fazer74",
   "Nаvars"
  ],
  "time": "2021-02-21T19:40:57.609",
  "duration": 1496,
  "mode": 3
 },
 "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-02-21T19:10:52.757",
  "duration": 1487,
  "mode": 3
 },
 "0a168143-59ed-4ef3-9ac3-de6db539eb89": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_BR",
  "winners": [
   "TCE collet",
   "ussbisdhisdhbsj",
   "TCE guneves"
  ],
  "time": "2021-02-28T21:40:26.686",
  "duration": 1575,
  "mode": 3
 },
 "01e38ec5-b50a-444d-9ab5-d6286dee4eb1": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_BR",
  "winners": [
   "DETONA Kayky",
   "NEW Insano",
   "NEW Lørd"
  ],
  "time": "2021-02-28T21:10:21.372",
  "duration": 1706,
  "mode": 3
 },
 "00e27e62-8c18-4251-b2a2-f9677bcae551": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_BR",
  "winners": [
   "GH Itrol〆",
   "INT S6nti",
   "aguszkHD"
  ],
  "time": "2021-02-28T20:40:27.227",
  "duration": 1558,
  "mode": 3
 },
 "0077189d-0e03-463f-827e-b240526dc9d5": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_BR",
  "winners": [
   "eRa gordinho",
   "C9 blackoutz",
   "TRIBE OPai"
  ],
  "time": "2021-02-28T20:10:21.534",
  "duration": 1552,
  "mode": 3
 },
 "084a545f-8e23-4eeb-b1b5-176b65763ea3": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_BR",
  "winners": [
   "FURY sнeco",
   "LOUD lelеo",
   "diguera7"
  ],
  "time": "2021-02-28T19:40:42.626",
  "duration": 1616,
  "mode": 3
 },
 "03aaab45-3db9-4395-88f1-013bc3a3635e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_BR",
  "winners": [
   "GH Itrol〆",
   "INT S6nti",
   "aguszkHD"
  ],
  "time": "2021-02-28T19:10:25.07",
  "duration": 1591,
  "mode": 3
 },
 "53fa46b2-1c16-4029-9213-773c9dd68ac4": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Inet thz1n46",
   "pattaty46",
   "x8 iwnl."
  ],
  "time": "2021-03-06T17:41:02.807",
  "duration": 1429,
  "mode": 3
 },
 "9bb62e20-4d27-4a21-99a1-dd22864b5343": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "kurtzv2_",
   "Frosтy7",
   "redlee the beast"
  ],
  "time": "2021-03-06T17:11:01.943",
  "duration": 1509,
  "mode": 3
 },
 "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Beтто",
   "Æ fazer74",
   "Nаvars"
  ],
  "time": "2021-03-06T16:41:00.885",
  "duration": 1469,
  "mode": 3
 },
 "a20be2fb-15a8-49a6-a684-ed715d10320a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Frаns",
   "bagu46",
   "jpsk1ng"
  ],
  "time": "2021-03-06T16:11:02.304",
  "duration": 1486,
  "mode": 3
 },
 "70cdaa45-8317-4eaa-b381-7c8a2a726213": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "9z FiѕhyL2R2",
   "9z Nahue507",
   "9z Twayko"
  ],
  "time": "2021-03-06T15:41:02.216",
  "duration": 1489,
  "mode": 3
 },
 "5c17bbed-b8a2-493f-821d-9912965fb2a9": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Mirko TS3",
   "Chipi TS3",
   "Cyanic Lordy."
  ],
  "time": "2021-03-06T15:11:02.173",
  "duration": 1488,
  "mode": 3
 },
 "8bbf4598-e1fa-420a-ad95-c165fd9eef31": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "kaiki cavalao",
   "C9 dkGOD9x",
   "BARROSOMEO."
  ],
  "time": "2021-03-06T21:40:57.033",
  "duration": 1493,
  "mode": 3
 },
 "77d9271c-8643-4cc4-a9a9-157f24b201ac": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "rym the beast",
   "nov1cе",
   "Pronex Ackerman〆"
  ],
  "time": "2021-03-06T21:10:56.294",
  "duration": 1465,
  "mode": 3
 },
 "9980058a-7d49-412a-b4a8-2e70cae70c46": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "DEMONRUSTYACHE32",
   "eRa xown",
   "FаZe k1nG."
  ],
  "time": "2021-03-06T20:41:03.685",
  "duration": 1407,
  "mode": 3
 },
 "6b16e69b-446a-4755-ad72-6cfff1c4abec": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Æ Riquelmee",
   "TDDEMOCNEYACHE32",
   "Æ Germán22"
  ],
  "time": "2021-03-06T20:11:03.643",
  "duration": 1408,
  "mode": 3
 },
 "042dbacf-b41d-40ba-83e0-cb5839e09981": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "FURY sнeco",
   "LOUD lelеo",
   "diguera7"
  ],
  "time": "2021-03-06T19:41:02.092",
  "duration": 1438,
  "mode": 3
 },
 "2c561a38-d095-49a5-89e6-0b0e99b0a17e": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "DEMONRUSTYACHE32",
   "eRa xown",
   "FаZe k1nG."
  ],
  "time": "2021-03-06T19:11:06.191",
  "duration": 1453,
  "mode": 3
 },
 "859a8d1c-a8a1-4e3d-ac4c-a034b3769161": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "persa smoke",
   "TRNL Ed",
   "nicks golden boy"
  ],
  "time": "2021-03-07T17:41:04.447",
  "duration": 1425,
  "mode": 3
 },
 "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Freecss Dio",
   "RomeroPDF",
   "9z Randu"
  ],
  "time": "2021-03-07T17:11:03.155",
  "duration": 1436,
  "mode": 3
 },
 "78eb559e-bb38-456e-a6c2-bb46eb47b665": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "TCE collet",
   "ussbisdhisdhbsj",
   "TCE guneves"
  ],
  "time": "2021-03-07T16:40:59.389",
  "duration": 1491,
  "mode": 3
 },
 "5b255298-ea2f-42f1-8d48-8fb5be96dbdf": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "Freecss Dio",
   "RomeroPDF",
   "9z Randu"
  ],
  "time": "2021-03-07T16:11:00.25",
  "duration": 1475,
  "mode": 3
 },
 "792bf7e8-c6bc-4db8-9e99-85f3ca132e26": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "wisheydp",
   "z7 originsZ",
   "TRIBE estevin"
  ],
  "time": "2021-03-07T15:41:02.014",
  "duration": 1491,
  "mode": 3
 },
 "e5095cf4-1468-4993-b0ea-1170e31fb847": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "persa smoke",
   "TRNL Ed",
   "nicks golden boy"
  ],
  "time": "2021-03-07T15:10:57.977",
  "duration": 1420,
  "mode": 3
 },
 "90b366b3-4ba2-4e5d-902e-24de86e714d6": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "DETONA Kayky",
   "NEW Insano",
   "NEW Lørd"
  ],
  "time": "2021-03-07T21:41:01.3",
  "duration": 1441,
  "mode": 3
 },
 "6c210709-e5d0-4de0-b287-e531ece30cde": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-07T21:11:01.988",
  "duration": 1475,
  "mode": 3
 },
 "177ec4ae-57cc-4a8c-82e1-e83719408a6b": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-07T20:41:01.154",
  "duration": 1434,
  "mode": 3
 },
 "21fca17b-b879-40b3-9fa2-4d23d02221d9": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-07T20:11:02.922",
  "duration": 1454,
  "mode": 3
 },
 "6a4888fb-f4b8-4da2-8041-ca85263c83b3": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "DETONA Kayky",
   "NEW Insano",
   "NEW Lørd"
  ],
  "time": "2021-03-07T19:41:03.39",
  "duration": 1463,
  "mode": 3
 },
 "bfc7a322-2e92-436d-b5df-87bf6d8bc431": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_BR",
  "winners": [
   "betamb",
   "halk phelps",
   "eRa strendd"
  ],
  "time": "2021-03-07T19:11:10.29",
  "duration": 1472,
  "mode": 3
 },
 "12deaedf-b238-4d9d-84f5-a2a7ce7f0684": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "eRa KBR -ɢ-",
   "9z Barella1x",
   "TRNL bedin"
  ],
  "time": "2021-03-14T21:41:07.989",
  "duration": 1472,
  "mode": 3
 },
 "258bc97c-6e19-4ac5-a693-c863f906043b": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-14T21:11:08.643",
  "duration": 1450,
  "mode": 3
 },
 "0a5dfcb1-344d-45d7-92da-083d867f49f5": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-14T20:41:10.397",
  "duration": 1410,
  "mode": 3
 },
 "263694f0-961b-4fa0-9947-354655706b70": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "lil моjа",
   "FURY histtory",
   "Mxrcio ay лол"
  ],
  "time": "2021-03-14T20:11:05.469",
  "duration": 1397,
  "mode": 3
 },
 "d2d123d2-31ba-4347-bb4b-36bc0377a142": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-14T19:41:06.805",
  "duration": 1510,
  "mode": 3
 },
 "dcc77d0a-4835-4273-b1fc-26fedb19dde5": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "9z FiѕhyL2R2",
   "9z Nahue507",
   "9z Twayko"
  ],
  "time": "2021-03-14T19:11:07.699",
  "duration": 1432,
  "mode": 3
 },
 "c3760d55-a398-44eb-a7b5-8a137c2fafb8": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "9z H4wwk",
   "TRIBE Juanzin",
   "kalifaszn"
  ],
  "time": "2021-03-13T21:41:02.084",
  "duration": 1429,
  "mode": 3
 },
 "b7c0d2af-4569-42a2-a3cb-21d4a86a8dd3": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "persa smoke",
   "TRNL Ed",
   "nicks golden boy"
  ],
  "time": "2021-03-13T21:11:06.239",
  "duration": 1397,
  "mode": 3
 },
 "2681a768-d964-4824-8993-babbd361b9b8": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-13T20:41:06.568",
  "duration": 1417,
  "mode": 3
 },
 "6d6d0e3d-33eb-4f6f-8ac5-9dd1106fcb55": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "DETONA Kayky",
   "NEW Insano",
   "NEW Lørd"
  ],
  "time": "2021-03-13T20:11:08.163",
  "duration": 1447,
  "mode": 3
 },
 "01a163f3-864c-4eb1-8583-1f2878beeb2a": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "eRa cadu",
   "VКS 100UM",
   "SNG kıng"
  ],
  "time": "2021-03-13T19:41:10.238",
  "duration": 1436,
  "mode": 3
 },
 "ce035ef2-4baa-4564-a58d-ce5e183ad33a": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_BR",
  "winners": [
   "persa smoke",
   "TRNL Ed",
   "nicks golden boy"
  ],
  "time": "2021-03-13T19:11:08.41",
  "duration": 1423,
  "mode": 3
 },
 "9bab6986-50af-4ded-805e-720958d18257": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_BR",
  "winners": [
   "Cyanic nykzz",
   "TomackWood",
   "Cyanic Maгtin"
  ],
  "time": "2021-03-07T22:45:57.974",
  "duration": 1504,
  "mode": 3
 },
 "01b6c101-6f8d-4841-8301-6ae5eae37672": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ME",
  "winners": [
   "Falcon Modisk.",
   "SAQR Souriаnо",
   "Falcon Kai"
  ],
  "time": "2021-02-13T18:40:26.033",
  "duration": 1499,
  "mode": 3
 },
 "00ebd938-2597-4aab-a51c-259d3a87e664": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ME",
  "winners": [
   "POWER Ѕаud",
   "SAQR ОUTLAW",
   "Falcon AbuFal7"
  ],
  "time": "2021-02-13T18:10:27.217",
  "duration": 1515,
  "mode": 3
 },
 "017abcc7-039d-4ad1-a475-0e944522d5a9": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ME",
  "winners": [
   "KINGS Javi",
   "hwr rizenasty",
   "Hawk Msgowski"
  ],
  "time": "2021-02-13T17:40:26.984",
  "duration": 1499,
  "mode": 3
 },
 "07db276c-16ec-4f5d-b83b-57b85a28a67e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-02-13T17:10:26.299",
  "duration": 1510,
  "mode": 3
 },
 "01f273db-35d6-4d7e-822f-b9bb6033997b": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ME",
  "winners": [
   "Falcon Modisk.",
   "SAQR Souriаnо",
   "Falcon Kai"
  ],
  "time": "2021-02-13T16:40:26.029",
  "duration": 1513,
  "mode": 3
 },
 "15eca6c7-daa1-44bd-930f-bec2285c1142": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_ME",
  "winners": [
   "Falcon Speedy.",
   "SCYTES Heif",
   "SAQR 7manツ"
  ],
  "time": "2021-02-13T16:11:16.423",
  "duration": 1467,
  "mode": 3
 },
 "07f99553-4380-49c2-ad53-34e3fb953a2d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ME",
  "winners": [
   "Eltrocity KuKi",
   "Falcon Phantom.",
   "GXR Nylereyli ӝ"
  ],
  "time": "2021-02-20T18:41:00.67",
  "duration": 1434,
  "mode": 3
 },
 "0a80c965-3ca4-4b91-a71a-c9b03162a5d2": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ME",
  "winners": [
   "TU Adapter7",
   "KINGS Azizilex",
   "SAQR Az2milex"
  ],
  "time": "2021-02-20T18:11:00.782",
  "duration": 1494,
  "mode": 3
 },
 "030f0d09-b259-4dc5-990f-1f8b7fbd4272": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ME",
  "winners": [
   "Bолк 7меd メ",
   "А7mdo",
   "Sonic Dream77"
  ],
  "time": "2021-02-20T17:40:59.544",
  "duration": 1491,
  "mode": 3
 },
 "007239f1-f6fc-49a4-a64f-73eec6fe347c": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ME",
  "winners": [
   "500 FT",
   "NMR Kinq",
   "Hawk Lucciowski"
  ],
  "time": "2021-02-20T17:10:57.871",
  "duration": 1462,
  "mode": 3
 },
 "00968ee7-11d9-4b65-b113-260e6dc9d7f3": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ME",
  "winners": [
   "KINGS Javi",
   "hwr rizenasty",
   "Hawk Msgowski"
  ],
  "time": "2021-02-20T16:41:00.082",
  "duration": 1502,
  "mode": 3
 },
 "01110746-6767-43b5-8f6b-37fda1c18eab": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_ME",
  "winners": [
   "TU Adapter7",
   "KINGS Azizilex",
   "SAQR Az2milex"
  ],
  "time": "2021-02-20T16:11:00.12",
  "duration": 1485,
  "mode": 3
 },
 "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ME",
  "winners": [
   "Sudor Balor",
   "DeattFan109",
   "TE DeattWood"
  ],
  "time": "2021-02-27T18:39:32.641",
  "duration": 2224,
  "mode": 3
 },
 "02d51aba-ff76-450a-b4ed-a58d06021155": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ME",
  "winners": [
   "ELC xJam",
   "SAQR Hellon",
   "WASP TrikShe"
  ],
  "time": "2021-02-27T18:10:03.359",
  "duration": 2261,
  "mode": 3
 },
 "13fa396d-556e-4a29-98b6-835f98e12276": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-02-27T17:40:59.389",
  "duration": 1394,
  "mode": 3
 },
 "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-02-27T17:10:00.279",
  "duration": 1904,
  "mode": 3
 },
 "01243af4-0146-4f18-ba32-1d7b3a9e0500": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ME",
  "winners": [
   "ELC Btray",
   "HwR Nachiiri",
   "Astra Tax"
  ],
  "time": "2021-02-27T16:40:05.665",
  "duration": 1898,
  "mode": 3
 },
 "06af1dc3-185d-4db7-8d89-32bab0aedc9d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_ME",
  "winners": [
   "ELC Btray",
   "HwR Nachiiri",
   "Astra Tax"
  ],
  "time": "2021-02-27T16:09:52.902",
  "duration": 1769,
  "mode": 3
 },
 "c3122a0f-9419-457e-b3cf-665f2d9c8cd5": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Lоzer",
   "Sudor Naif",
   "KINGS Metab"
  ],
  "time": "2021-03-05T14:40:58.52",
  "duration": 1436,
  "mode": 3
 },
 "1af01751-91f2-41a3-9b16-89c16b6cacd1": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "ELC xJam",
   "SAQR Hellon",
   "WASP TrikShe"
  ],
  "time": "2021-03-05T14:10:58.272",
  "duration": 1474,
  "mode": 3
 },
 "31e4735e-7ecd-41c3-a925-f089a673c073": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "POWER Ѕаud",
   "SAQR ОUTLAW",
   "Falcon AbuFal7"
  ],
  "time": "2021-03-05T13:40:55.74",
  "duration": 1500,
  "mode": 3
 },
 "3d379657-3c29-4157-8a8d-9e21479fcbcc": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "ELC xJam",
   "SAQR Hellon",
   "WASP TrikShe"
  ],
  "time": "2021-03-05T13:11:03.044",
  "duration": 1478,
  "mode": 3
 },
 "655e4e2b-0fc5-46d9-8cc5-38599f3591e8": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Fаlcon Spy",
   "TU iExon",
   "SAQR Rapit"
  ],
  "time": "2021-03-05T12:40:57.411",
  "duration": 1486,
  "mode": 3
 },
 "70a43fb2-9968-43c8-b083-b44ee1a4c175": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Falcon Snowitr0",
   "Falcon Νm7",
   "Falcon Rv"
  ],
  "time": "2021-03-05T12:10:56.918",
  "duration": 1505,
  "mode": 3
 },
 "0e92c986-c30e-4ee7-90c4-ec477815a670": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Eltrocity KuKi",
   "Falcon Phantom.",
   "GXR Nylereyli ӝ"
  ],
  "time": "2021-03-05T18:40:56.16",
  "duration": 1446,
  "mode": 3
 },
 "51a7fea7-6b01-4720-818e-e3bbd6166724": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Falcon Speedy.",
   "SCYTES Heif",
   "SAQR 7manツ"
  ],
  "time": "2021-03-05T18:10:55.878",
  "duration": 1487,
  "mode": 3
 },
 "3519f173-549f-4ec3-9dd1-7fca0f28d1e9": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "SAQR QnDx",
   "SAQR Njﱞby",
   "SAQR Unіt"
  ],
  "time": "2021-03-05T17:40:59.335",
  "duration": 1504,
  "mode": 3
 },
 "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Eagle fahad",
   "Hawk Mansour",
   "Sudor SKULLY"
  ],
  "time": "2021-03-05T17:11:00.538",
  "duration": 1433,
  "mode": 3
 },
 "64a836b9-3066-476d-b3b0-9210e7491588": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Eltrocity KuKi",
   "Falcon Phantom.",
   "GXR Nylereyli ӝ"
  ],
  "time": "2021-03-05T16:41:06.819",
  "duration": 1473,
  "mode": 3
 },
 "2d895dc6-8fde-4510-bde6-f31bcd040f49": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "SAQR QnDx",
   "SAQR Njﱞby",
   "SAQR Unіt"
  ],
  "time": "2021-03-05T16:10:51.266",
  "duration": 1490,
  "mode": 3
 },
 "3a023c93-ec73-42d0-afbf-eabeff726ee8": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Hawk DemonJolo",
   "AQ Khalood",
   "Spark DemonMinas"
  ],
  "time": "2021-03-06T14:40:57.765",
  "duration": 1410,
  "mode": 3
 },
 "5d3defa8-b40c-4d46-a565-d884342348bf": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-03-06T14:11:01.027",
  "duration": 1487,
  "mode": 3
 },
 "33bd1bb1-f22a-4e82-9304-793bd8fd446f": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Sudor Balor",
   "DeattFan109",
   "TE DeattWood"
  ],
  "time": "2021-03-06T13:41:01.8",
  "duration": 1485,
  "mode": 3
 },
 "158ac617-67c3-4cf6-93d6-68230e76a6ad": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Digger Melo",
   "Eagle Cloud",
   "Ruls Hiiper"
  ],
  "time": "2021-03-06T13:11:05.851",
  "duration": 1504,
  "mode": 3
 },
 "f36e90c3-90ed-475a-9a2c-125f9472af62": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Sudor Balor",
   "DeattFan109",
   "TE DeattWood"
  ],
  "time": "2021-03-06T12:40:59.587",
  "duration": 1465,
  "mode": 3
 },
 "12181175-d3a5-4ea4-b135-649358d7da02": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-03-06T12:11:01.026",
  "duration": 1455,
  "mode": 3
 },
 "aa528fa5-3d9d-4648-bc62-3514a76fc517": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Digger RsTn",
   "Digger Escdark",
   "Digger oMxP"
  ],
  "time": "2021-03-06T18:41:00.338",
  "duration": 1481,
  "mode": 3
 },
 "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "TU Adapter7",
   "KINGS Azizilex",
   "SAQR Az2milex"
  ],
  "time": "2021-03-06T18:11:01.397",
  "duration": 1492,
  "mode": 3
 },
 "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Falcon FHD",
   "Falcon Yonx",
   "Falcon KiritoKun"
  ],
  "time": "2021-03-06T17:40:58.888",
  "duration": 1444,
  "mode": 3
 },
 "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Falcon Modisk.",
   "SAQR Souriаnо",
   "Falcon Kai"
  ],
  "time": "2021-03-06T17:11:03.317",
  "duration": 1493,
  "mode": 3
 },
 "2e624e14-08c9-40cf-867e-87446d22d62b": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Falcon Modisk.",
   "SAQR Souriаnо",
   "Falcon Kai"
  ],
  "time": "2021-03-06T16:41:09.407",
  "duration": 1488,
  "mode": 3
 },
 "41d11636-fd57-4c5a-8d8f-eb7232b34c72": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_ME",
  "winners": [
   "Digger RsTn",
   "Digger Escdark",
   "Digger oMxP"
  ],
  "time": "2021-03-06T16:10:58.737",
  "duration": 1468,
  "mode": 3
 },
 "f0dc3628-2ba0-49a5-9b09-37e89772fd2d": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "SAQR QnDx",
   "SAQR Njﱞby",
   "SAQR Unіt"
  ],
  "time": "2021-03-13T18:40:47.852",
  "duration": 1488,
  "mode": 3
 },
 "57bc5a19-1f18-41a0-8a0d-b64e87c1941f": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Falcon Modisk.",
   "SAQR Souriаnо",
   "Falcon Kai"
  ],
  "time": "2021-03-13T18:10:55.767",
  "duration": 1432,
  "mode": 3
 },
 "2ddf49d0-d97b-4d19-8cb0-082e3de76e87": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Fаlcon Spy",
   "TU iExon",
   "SAQR Rapit"
  ],
  "time": "2021-03-13T17:40:46.612",
  "duration": 1525,
  "mode": 3
 },
 "271d6556-09cd-4a92-b948-8484328ec59b": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Sudor Balor",
   "DeattFan109",
   "TE DeattWood"
  ],
  "time": "2021-03-13T17:10:52.002",
  "duration": 1474,
  "mode": 3
 },
 "667926bd-c785-44cd-a3dd-660b2060f87c": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Eagle fahad",
   "Hawk Mansour",
   "Sudor SKULLY"
  ],
  "time": "2021-03-13T16:40:59.531",
  "duration": 1484,
  "mode": 3
 },
 "48e0e000-133c-47b4-bdcc-ea61bd500747": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "reformed ali",
   "Arrow Faris",
   "LND eKKo"
  ],
  "time": "2021-03-13T16:10:53.739",
  "duration": 1496,
  "mode": 3
 },
 "6aac0e75-dd19-4b5f-a981-1556042e96e2": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Falcon Speedy.",
   "SCYTES Heif",
   "SAQR 7manツ"
  ],
  "time": "2021-03-12T18:40:49.948",
  "duration": 1464,
  "mode": 3
 },
 "2dc719e6-d817-4b70-a1c5-b9ddfba9d905": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Falcon Modisk.",
   "SAQR Souriаnо",
   "Falcon Kai"
  ],
  "time": "2021-03-12T18:10:57.876",
  "duration": 1503,
  "mode": 3
 },
 "ba876b91-61ae-4eb6-8d99-328f58297653": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "Eltrocity KuKi",
   "Falcon Phantom.",
   "GXR Nylereyli ӝ"
  ],
  "time": "2021-03-12T17:40:55.923",
  "duration": 1474,
  "mode": 3
 },
 "459be51f-0669-4e31-8de1-0b9794d22ad1": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "SAQR QnDx",
   "SAQR Njﱞby",
   "SAQR Unіt"
  ],
  "time": "2021-03-12T17:11:06.493",
  "duration": 1490,
  "mode": 3
 },
 "ec50f56a-bbed-4794-a6e1-57b828898e14": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-03-12T16:40:56.704",
  "duration": 1450,
  "mode": 3
 },
 "1bc376a9-ffa0-4a32-8a92-cf180149ea08": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_ME",
  "winners": [
   "SCYTES vagnaR",
   "TU I4xPRO",
   "TU Dexefite"
  ],
  "time": "2021-03-12T16:10:46.645",
  "duration": 1492,
  "mode": 3
 },
 "1157c23a-729a-4472-9652-8d1282e74dfd": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_ME",
  "winners": [
   "reformed ali",
   "Arrow Faris",
   "LND eKKo"
  ],
  "time": "2021-03-06T19:45:57.264",
  "duration": 1516,
  "mode": 3
 },
 "0348467a-badf-4a20-95e0-9df800dbe031": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-02-14T07:40:23.157",
  "duration": 1475,
  "mode": 3
 },
 "1d7d65ea-2254-4c98-b081-54cc45eea78c": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_OCE",
  "winners": [
   "Tаker",
   "Squidward L2",
   "wрuc"
  ],
  "time": "2021-02-14T07:10:39.129",
  "duration": 1496,
  "mode": 3
 },
 "58c146dd-6b34-4e69-aa99-fa1241d9bef1": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_OCE",
  "winners": [
   "GLM x2Suns",
   "tp mechszn",
   "kоrq"
  ],
  "time": "2021-02-14T06:40:23.77",
  "duration": 1510,
  "mode": 3
 },
 "0e979a1d-e1a9-4f57-ac08-ff763874baa0": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_OCE",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2021-02-14T06:10:27.447",
  "duration": 1529,
  "mode": 3
 },
 "02a99773-f12c-44fd-aba8-4ee47a7c5f04": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-02-14T05:40:26.456",
  "duration": 1484,
  "mode": 3
 },
 "0496edb3-463f-4038-b5c3-7685cbaedc2a": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier1_OCE",
  "winners": [
   "РWR Banana",
   "PWR looter",
   "speedy at pub"
  ],
  "time": "2021-02-14T05:10:24.576",
  "duration": 1510,
  "mode": 3
 },
 "07671211-c118-40e8-b2dc-14f26c508e48": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_OCE",
  "winners": [
   "Agent Raptah",
   "x2prhzy",
   "PRDX Oatley"
  ],
  "time": "2021-02-21T07:41:07.543",
  "duration": 1499,
  "mode": 3
 },
 "29935b52-dded-45b2-b043-e6721dcc48e4": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_OCE",
  "winners": [
   "JFT goeg",
   "scammed ihmo",
   "JFT xalkerr"
  ],
  "time": "2021-02-21T07:10:58.097",
  "duration": 1463,
  "mode": 3
 },
 "28c982f7-15c6-4332-9e1e-7905e4afae17": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_OCE",
  "winners": [
   "synr χο",
   "fаllеп",
   "gеk"
  ],
  "time": "2021-02-21T06:41:02.647",
  "duration": 1496,
  "mode": 3
 },
 "3521cecf-6f7a-4d47-b0ad-b00ae39278cf": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_OCE",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2021-02-21T06:11:02.357",
  "duration": 1382,
  "mode": 3
 },
 "198f8609-e13c-4026-a2c8-edddf1e20ca0": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_OCE",
  "winners": [
   "Fresh",
   "agent re11",
   "newbatoon."
  ],
  "time": "2021-02-21T05:41:09.691",
  "duration": 1421,
  "mode": 3
 },
 "02e35d33-24df-4068-b5ea-e4a18195cb13": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier2_OCE",
  "winners": [
   "PWR radius",
   "phluxzy ӝ",
   "slаya"
  ],
  "time": "2021-02-21T05:10:59.958",
  "duration": 1490,
  "mode": 3
 },
 "03c0a4aa-e363-498c-a3be-e0bcff378a3e": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_OCE",
  "winners": [
   "6s crippas",
   "6S rip",
   "MG bmp"
  ],
  "time": "2021-02-28T07:40:05.281",
  "duration": 1616,
  "mode": 3
 },
 "0d4a7c11-c0fd-4cb7-8a90-5ba4eb152bd2": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_OCE",
  "winners": [
   "HERO BOY BRIDGE",
   "child predator04",
   "HVT Lupius"
  ],
  "time": "2021-02-28T07:10:21.154",
  "duration": 1683,
  "mode": 3
 },
 "1c7794a0-f302-4fe8-8a71-ebe171fb6062": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_OCE",
  "winners": [
   "SPG repuk",
   "HVT Forbes",
   "AGENT Tyraxe"
  ],
  "time": "2021-02-28T06:40:54.182",
  "duration": 1462,
  "mode": 3
 },
 "1502163b-d6ad-4ae4-b56c-b8f7262b923f": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_OCE",
  "winners": [
   "CLR baffle7",
   "J. A Prufrock",
   "saqoski"
  ],
  "time": "2021-02-28T06:10:39.419",
  "duration": 1486,
  "mode": 3
 },
 "2d756921-c411-4e3f-b8cf-366cf1dacd8d": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_OCE",
  "winners": [
   "CLR baffle7",
   "J. A Prufrock",
   "saqoski"
  ],
  "time": "2021-02-28T05:40:31.198",
  "duration": 1391,
  "mode": 3
 },
 "0797079e-1bd7-46e0-b6ee-4db757a952d7": {
  "tournamentID": "epicgames_S15_FNCS_Qualifier3_OCE",
  "winners": [
   "zoreh 4pf",
   "jаhlyn",
   "SPG Squeakz"
  ],
  "time": "2021-02-28T05:10:13.755",
  "duration": 1632,
  "mode": 3
 },
 "20f2bfa8-acc9-4222-a9f6-389f67de0864": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "GLM danath",
   "GLM osiris.",
   "FURY skits"
  ],
  "time": "2021-03-06T03:40:55.505",
  "duration": 1454,
  "mode": 3
 },
 "74c008ab-61c7-401e-835c-23aca05fb41f": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-03-06T03:10:54.289",
  "duration": 1468,
  "mode": 3
 },
 "d265c04f-e0c6-4e0d-98ca-b08789d896f8": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "sidejump bliss",
   "aurudente7",
   "twitch maloxty"
  ],
  "time": "2021-03-06T02:40:53.343",
  "duration": 1448,
  "mode": 3
 },
 "8344eff5-7c0f-40ef-8e31-a499555c5aea": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-03-06T02:10:55.995",
  "duration": 1508,
  "mode": 3
 },
 "611732ba-bb67-46c6-858f-92316d07a9d2": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "MG Infusion",
   "MG I LOVE WONKA",
   "MG Yixsaa"
  ],
  "time": "2021-03-06T01:40:53.708",
  "duration": 1504,
  "mode": 3
 },
 "8d79403a-f9fd-42c5-9622-17310b8e1de5": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "twitch jvanofn",
   "twitch pumaaoce",
   "Twitch MrTassie"
  ],
  "time": "2021-03-06T01:10:53.707",
  "duration": 1493,
  "mode": 3
 },
 "258bba08-2965-40f7-9583-ae002fd4ad8f": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "Agent Raptah",
   "x2prhzy",
   "PRDX Oatley"
  ],
  "time": "2021-03-06T07:40:54.22",
  "duration": 1489,
  "mode": 3
 },
 "29e5bdb8-8629-4265-a41e-fc0536070cf1": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "zoreh 4pf",
   "jаhlyn",
   "SPG Squeakz"
  ],
  "time": "2021-03-06T07:10:56.106",
  "duration": 1477,
  "mode": 3
 },
 "1c15edec-5403-4731-a341-64705d872827": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "РWR Banana",
   "PWR looter",
   "speedy at pub"
  ],
  "time": "2021-03-06T06:40:51.416",
  "duration": 1502,
  "mode": 3
 },
 "5b5106a1-2642-48c4-b7a1-3b9d9a31f974": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2021-03-06T06:10:59.587",
  "duration": 1519,
  "mode": 3
 },
 "ca21c22b-27ad-4edf-ab5e-dc8a42f5a5ff": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2021-03-06T05:40:53.013",
  "duration": 1506,
  "mode": 3
 },
 "9f85e049-a4ea-4738-a83f-6ff450c8f05e": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2021-03-06T05:10:52.387",
  "duration": 1502,
  "mode": 3
 },
 "9374075d-7f90-45fe-b118-d931f6f5a13d": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "hvt bathanocefn",
   "HVT Zedox",
   "GLM Pandasfan"
  ],
  "time": "2021-03-07T03:41:01.854",
  "duration": 1422,
  "mode": 3
 },
 "058c7caa-588b-496a-b246-698bac33b9fa": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "hvt bathanocefn",
   "HVT Zedox",
   "GLM Pandasfan"
  ],
  "time": "2021-03-07T03:10:57.134",
  "duration": 1493,
  "mode": 3
 },
 "29aa5dca-7cb6-4632-913d-6e256c89653c": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "6s crippas",
   "6S rip",
   "MG bmp"
  ],
  "time": "2021-03-07T02:40:58.408",
  "duration": 1443,
  "mode": 3
 },
 "00f5ef36-8f2a-482b-9ea9-0726056a36dd": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "arrestrr",
   "6S Lucas",
   "cynicalrr"
  ],
  "time": "2021-03-07T02:10:58.22",
  "duration": 1485,
  "mode": 3
 },
 "17052072-6657-4f29-89b6-1cac637a994a": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "6s crippas",
   "6S rip",
   "MG bmp"
  ],
  "time": "2021-03-07T01:40:58.109",
  "duration": 1481,
  "mode": 3
 },
 "4874e8a8-9e86-440c-97d6-23e097bd2164": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "hvt bathanocefn",
   "HVT Zedox",
   "GLM Pandasfan"
  ],
  "time": "2021-03-07T01:10:56.617",
  "duration": 1463,
  "mode": 3
 },
 "065aef98-90fc-4453-b80d-7dd43803e2cc": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "zanz FA",
   "GLM oreo",
   "AGENT Raiku"
  ],
  "time": "2021-03-07T07:41:00.044",
  "duration": 1485,
  "mode": 3
 },
 "2d45ae09-86d8-496e-b191-e6bb657e20fc": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "PWR radius",
   "phluxzy ӝ",
   "slаya"
  ],
  "time": "2021-03-07T07:11:00.555",
  "duration": 1456,
  "mode": 3
 },
 "1a415c8c-4b22-498e-806f-726364cbf80f": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "аpolox",
   "MG clean",
   "Slobbered on ッ"
  ],
  "time": "2021-03-07T06:41:00.462",
  "duration": 1406,
  "mode": 3
 },
 "901ad0ef-e589-4ac9-ad1d-bf8dd3af32d1": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "TalonTheGoated",
   "jedinite",
   "Toyswag"
  ],
  "time": "2021-03-07T06:11:02.136",
  "duration": 1495,
  "mode": 3
 },
 "86dc1f1c-bdf5-4d74-bda2-001600b15a8e": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "TalonTheGoated",
   "jedinite",
   "Toyswag"
  ],
  "time": "2021-03-07T05:41:02.622",
  "duration": 1476,
  "mode": 3
 },
 "2d402d02-c0ab-4c9e-b82e-2f0eee9a6464": {
  "tournamentID": "epicgames_S15_FNCS_SemiFinals_OCE",
  "winners": [
   "Mako Pumpkin",
   "CLR hardworker",
   "sunzw1k3"
  ],
  "time": "2021-03-07T05:10:59.829",
  "duration": 1467,
  "mode": 3
 },
 "248dc80b-6597-4e63-b323-9e3327d5bf6c": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "GLM x2Suns",
   "tp mechszn",
   "kоrq"
  ],
  "time": "2021-03-14T07:41:00.895",
  "duration": 1464,
  "mode": 3
 },
 "c9b3b0d2-dbbc-4465-8f70-6d19ccc78bc7": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "РWR Banana",
   "PWR looter",
   "speedy at pub"
  ],
  "time": "2021-03-14T07:11:01.187",
  "duration": 1495,
  "mode": 3
 },
 "0d699726-e067-4f7c-a647-c43c7231b147": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2021-03-14T06:40:58.056",
  "duration": 1443,
  "mode": 3
 },
 "1a5a16a6-8ed4-4e92-a82c-ba9c93592a8d": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "FURY Remi",
   "pace〆",
   "ATL Spraz"
  ],
  "time": "2021-03-14T06:11:02.993",
  "duration": 1454,
  "mode": 3
 },
 "dcb420e1-9fad-4665-8c92-e86eac2ff6bb": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-03-14T05:41:00.616",
  "duration": 1427,
  "mode": 3
 },
 "1f930436-7d21-4f4c-83e5-492105bb8096": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "basil 74",
   "Forbidden Vortex",
   "Jace 75"
  ],
  "time": "2021-03-14T05:11:01.949",
  "duration": 1492,
  "mode": 3
 },
 "2fc0c877-9a39-4397-b36f-9cbcb2e785c0": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "noob jynx",
   "wavyalecc",
   "PWR worthy"
  ],
  "time": "2021-03-13T07:41:00.179",
  "duration": 1445,
  "mode": 3
 },
 "007be8c7-c87f-4cf1-b2d3-18262698bc91": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-03-13T07:11:00.512",
  "duration": 1493,
  "mode": 3
 },
 "1c87abd0-a8c4-448c-b5a0-497286b967cb": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "GLM x2Suns",
   "tp mechszn",
   "kоrq"
  ],
  "time": "2021-03-13T06:41:01.158",
  "duration": 1442,
  "mode": 3
 },
 "bc976804-a101-49b4-947b-0859b222a892": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "agent sorif",
   "volx",
   "syncyfishy"
  ],
  "time": "2021-03-13T06:11:03.91",
  "duration": 1484,
  "mode": 3
 },
 "d7e4968b-5f18-4d07-b04d-774bc4a77f83": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "Agent Raptah",
   "x2prhzy",
   "PRDX Oatley"
  ],
  "time": "2021-03-13T05:40:59.638",
  "duration": 1497,
  "mode": 3
 },
 "e9a70e61-532e-40bc-a242-1c955883a786": {
  "tournamentID": "epicgames_S15_FNCS_GrandFinals_OCE",
  "winners": [
   "Agent Raptah",
   "x2prhzy",
   "PRDX Oatley"
  ],
  "time": "2021-03-13T05:10:56.427",
  "duration": 1482,
  "mode": 3
 },
 "d826334e-2e30-4b0f-81ac-b17c7dd375cb": {
  "tournamentID": "epicgames_S15_FNCS_RebootRound_OCE",
  "winners": [
   "monarchy bluezie",
   "PRDX Lazy",
   "6S Wreckless"
  ],
  "time": "2021-03-07T08:45:58.414",
  "duration": 1502,
  "mode": 3
 }
}
const modes = {1: 'solo', 2: 'duo', 3: 'trio', 4: 'squad'}
Object.keys(games).map((game) => {
  if (games[game].winners) {
    axios.post('http://localhost:3000/api/games', {game: {
      id: game,
      tournament_id: games[game].tournamentID,
      time: games[game].time,
      duration: games[game].duration,
      winners: games[game].winners.join(),
      mode: modes[games[game].mode] 
    }})
    .then(function(response) {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }
})