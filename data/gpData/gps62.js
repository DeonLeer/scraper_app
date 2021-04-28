const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 11,
  "time_alive": 1373,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 21,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 17,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 16,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 14,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 28,
  "time_alive": 665,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 11,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 4,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 31,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "19e90facb1784aaea62c471b513677f1:7a75d18d48e14f7fb3d6947214e4f846:8c71b39da68e4def9ef7b82687df1aae",
  "placement": 29,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 22,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 9,
  "time_alive": 1430,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 21,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 13,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 19,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 16,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 22,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 18,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 23,
  "time_alive": 1094,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 9,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 17,
  "time_alive": 1304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 28,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 23,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 30,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 29,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 20,
  "time_alive": 1207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 13,
  "time_alive": 1369,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 8,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 11,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 20,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 30,
  "time_alive": 416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 21,
  "time_alive": 1004,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab:c035dec127df4bcbbec6133c4e5dbc6b:f96ae2672af04fe9a57833a53b6d8b9c",
  "placement": 19,
  "time_alive": 1137,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 15,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 22,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 27,
  "time_alive": 721,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 26,
  "time_alive": 890,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 15,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 23,
  "time_alive": 637,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 23,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 14,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 8,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 15,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 20,
  "time_alive": 1023,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 26,
  "time_alive": 326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 10,
  "time_alive": 1411,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 18,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 17,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 20,
  "time_alive": 1181,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 12,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 15,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 15,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 24,
  "time_alive": 935,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 24,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 24,
  "time_alive": 618,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 23,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 18,
  "time_alive": 1164,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 30,
  "time_alive": 451,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 26,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 32,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 18,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 16,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 18,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 20,
  "time_alive": 1229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 16,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 11,
  "time_alive": 1393,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 21,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 18,
  "time_alive": 1187,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "9f5bf423c9b94ce087b9b2abd4875d49:bfb1a0b26387463f8bfb77e177fa00f5:c0a4b48d608c41a29f5193940d49a07a",
  "placement": 12,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 29,
  "time_alive": 498,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 25,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 32,
  "time_alive": 471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 32,
  "time_alive": 228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 33,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 24,
  "time_alive": 1080,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 15,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 14,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 17,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 22,
  "time_alive": 992,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "1fdb115d4e33436696c00f165b143c7b:2cda97cef1fe4560878744c59ebe74ac:555ce9a89e084e0f91af584f21247ec4",
  "placement": 8,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 25,
  "time_alive": 928,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 20,
  "time_alive": 1237,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 15,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 28,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 27,
  "time_alive": 745,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 21,
  "time_alive": 916,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 21,
  "time_alive": 1209,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 19,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 29,
  "time_alive": 535,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 27,
  "time_alive": 609,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "14049f1be23e44fa90cd04949d2f6906:74f41f6e60c049c1a475b9095fe54d23:df07624687ec4fe497c2f739f39ea38f",
  "placement": 30,
  "time_alive": 369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 27,
  "time_alive": 347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 33,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 22,
  "time_alive": 1118,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 33,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 24,
  "time_alive": 598,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 30,
  "time_alive": 255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 30,
  "time_alive": 183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 25,
  "time_alive": 1005,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 18,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 28,
  "time_alive": 538,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "4ac428afed144b8192e7250bfa395b22:7e45ef7a03ce47e2bc8ccd0441bab4f1:e9315a3960004d4db8c46841b46fafc6",
  "placement": 20,
  "time_alive": 888,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "2746d105c96f4066a494b727ae990c27:add568e5669c4857b929503b06659564:c094c3ab3d924e139c9ae31d4309c8a3",
  "placement": 14,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "2746d105c96f4066a494b727ae990c27:add568e5669c4857b929503b06659564:c094c3ab3d924e139c9ae31d4309c8a3",
  "placement": 15,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "2746d105c96f4066a494b727ae990c27:add568e5669c4857b929503b06659564:c094c3ab3d924e139c9ae31d4309c8a3",
  "placement": 22,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "2746d105c96f4066a494b727ae990c27:add568e5669c4857b929503b06659564:c094c3ab3d924e139c9ae31d4309c8a3",
  "placement": 17,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "2746d105c96f4066a494b727ae990c27:add568e5669c4857b929503b06659564:c094c3ab3d924e139c9ae31d4309c8a3",
  "placement": 22,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "2746d105c96f4066a494b727ae990c27:add568e5669c4857b929503b06659564:c094c3ab3d924e139c9ae31d4309c8a3",
  "placement": 22,
  "time_alive": 638,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 31,
  "time_alive": 361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 16,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 23,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 23,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 31,
  "time_alive": 310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 26,
  "time_alive": 544,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 14,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 26,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 21,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 28,
  "time_alive": 510,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 27,
  "time_alive": 542,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd:a49895b5167845c4b41e5d22fd25aa38:b1fc50e62fe848e48078375bace0af57",
  "placement": 25,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 26,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 31,
  "time_alive": 120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 29,
  "time_alive": 643,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 21,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 29,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 31,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 22,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 26,
  "time_alive": 799,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 25,
  "time_alive": 616,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 12,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "9fbd30160e85438689b33ee061559fbb:a13627ee068348d8829ee260a07f92f3:d5394f80dfd44f5786106aea7bbf8c32",
  "placement": 21,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144:28d3978c00714931952d3b6b87a031a8:476a8736e5c043c5950b8a7941919539",
  "placement": 23,
  "time_alive": 1105,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144:28d3978c00714931952d3b6b87a031a8:476a8736e5c043c5950b8a7941919539",
  "placement": 21,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144:28d3978c00714931952d3b6b87a031a8:476a8736e5c043c5950b8a7941919539",
  "placement": 24,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144:28d3978c00714931952d3b6b87a031a8:476a8736e5c043c5950b8a7941919539",
  "placement": 31,
  "time_alive": 721,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144:28d3978c00714931952d3b6b87a031a8:476a8736e5c043c5950b8a7941919539",
  "placement": 23,
  "time_alive": 1153,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144:28d3978c00714931952d3b6b87a031a8:476a8736e5c043c5950b8a7941919539",
  "placement": 29,
  "time_alive": 383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 3,
  "time_alive": 1496,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 1,
  "time_alive": 1503,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 4,
  "time_alive": 1503,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 29,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 5,
  "time_alive": 1483,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 6,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 1,
  "time_alive": 1495,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 9,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 18,
  "time_alive": 1354,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 11,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 1,
  "time_alive": 1491,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 1,
  "time_alive": 1345,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 7,
  "time_alive": 1480,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 3,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 28,
  "time_alive": 778,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 3,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 4,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 2,
  "time_alive": 1530,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 20,
  "time_alive": 1281,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 10,
  "time_alive": 1432,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 1,
  "time_alive": 1498,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 2,
  "time_alive": 1519,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 15,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 7,
  "time_alive": 1331,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 1,
  "time_alive": 1522,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 13,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 20,
  "time_alive": 1236,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 8,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 3,
  "time_alive": 1488,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 1,
  "time_alive": 1530,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 14,
  "time_alive": 1365,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 18,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 25,
  "time_alive": 883,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 3,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 2,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 17,
  "time_alive": 950,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 5,
  "time_alive": 1471,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 21,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 16,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 27,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 14,
  "time_alive": 1434,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1495,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1535,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 3,
  "time_alive": 1490,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 5,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 3,
  "time_alive": 1488,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 15,
  "time_alive": 1104,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 2,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 14,
  "time_alive": 1390,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 9,
  "time_alive": 1451,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 5,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 15,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1494,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 16,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1454,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 14,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 8,
  "time_alive": 1477,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 4,
  "time_alive": 1480,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1534,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1468,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1491,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 29,
  "time_alive": 860,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 17,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 23,
  "time_alive": 1015,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 27,
  "time_alive": 425,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 31,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 22,
  "time_alive": 972,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 12,
  "time_alive": 1198,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 5,
  "time_alive": 1487,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 19,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 10,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 6,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 10,
  "time_alive": 1429,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 15,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 3,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 2,
  "time_alive": 1535,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 14,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 7,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 11,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 11,
  "time_alive": 1257,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 2,
  "time_alive": 1522,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 6,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 16,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 19,
  "time_alive": 1302,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 26,
  "time_alive": 910,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 17,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 5,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 3,
  "time_alive": 1523,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 21,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 6,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 8,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 6,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 26,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 16,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 6,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 15,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 21,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 23,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 24,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 13,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 15,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 1,
  "time_alive": 1519,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 4,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "0e1798dd58104829ba6d5e1231de1b61:2b5c63b020694364a14d26f6815620d9:e42e6216555a44b2b618ea7c0e523b1f",
  "placement": 3,
  "time_alive": 1344,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 28,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 8,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 1,
  "time_alive": 1534,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 23,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 16,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 24,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 8,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 25,
  "time_alive": 800,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 9,
  "time_alive": 1439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 14,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 9,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7:61b5c9319b554808a11700db9c52c79b:d67d63cf79db4879ad040aa41de0d994",
  "placement": 4,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 25,
  "time_alive": 965,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 26,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 13,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 7,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 13,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 12,
  "time_alive": 1436,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 9,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 22,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 10,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 4,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 10,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 5,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 11,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 10,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 3,
  "time_alive": 1526,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 25,
  "time_alive": 907,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 20,
  "time_alive": 1294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 8,
  "time_alive": 1478,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 19,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 16,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 22,
  "time_alive": 1200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 9,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 7,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 13,
  "time_alive": 1166,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 21,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 15,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 5,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 5,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 2,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 18,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 7,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 17,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 11,
  "time_alive": 1419,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 22,
  "time_alive": 1208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 19,
  "time_alive": 1221,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "765df88b420f452ba6682fc549bf2231:91c2e76fa5fd4ab1aea8b9d6d0609613:d907b93ca070423c8ed0e189f93a00fc",
  "placement": 23,
  "time_alive": 620,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 4,
  "time_alive": 1490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 14,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 25,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 32,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 13,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 4,
  "time_alive": 1457,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 24,
  "time_alive": 1005,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 7,
  "time_alive": 1461,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 8,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 12,
  "time_alive": 1403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 9,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 19,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 11,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 18,
  "time_alive": 1259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 17,
  "time_alive": 1311,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 14,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 11,
  "time_alive": 1439,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 22,
  "time_alive": 1149,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 11,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 19,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 28,
  "time_alive": 322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 13,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1:7c67a0fed9e34d55bbe79119ef42ee81:c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 2,
  "time_alive": 1345,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 23,
  "time_alive": 1137,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 19,
  "time_alive": 1248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 2,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 11,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 19,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 21,
  "time_alive": 1182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 4,
  "time_alive": 1513,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 6,
  "time_alive": 1462,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 18,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 23,
  "time_alive": 802,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:7c6d8c3aa32849aba5a7ecaaaf93a294:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 8,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 15,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 29,
  "time_alive": 579,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 7,
  "time_alive": 1471,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 12,
  "time_alive": 1374,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 19,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 21,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 32,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 8,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 5,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 13,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 27,
  "time_alive": 510,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa:dcf6f6650f2a4440aca03b6151adf26e:ec63057ab44c457383bd34e4a994cfdf",
  "placement": 20,
  "time_alive": 754,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 9,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 15,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 18,
  "time_alive": 1304,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 6,
  "time_alive": 1476,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 3,
  "time_alive": 1508,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 18,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 15,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 8,
  "time_alive": 1447,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 27,
  "time_alive": 322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 26,
  "time_alive": 517,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "b1b1ceef0fb949e19225ac7843466ba1:dfd44fabbe14482cb9a960a6fbb72c46:fcff6d466aed4351bf4395608001d47e",
  "placement": 27,
  "time_alive": 235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 24,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 18,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 12,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 26,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 7,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 16,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 23,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 7,
  "time_alive": 1473,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 17,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 23,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 16,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "396b11b5b13641ab9859551e4dd8df04:a4344a33181c4ded8b915e32ec3a031e:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 10,
  "time_alive": 1293,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 18,
  "time_alive": 1240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 28,
  "time_alive": 810,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 8,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 20,
  "time_alive": 1239,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 24,
  "time_alive": 1101,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 30,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 6,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 5,
  "time_alive": 1511,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 16,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 12,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 17,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 28,
  "time_alive": 225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 16,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 24,
  "time_alive": 980,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 30,
  "time_alive": 458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 9,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 15,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 4,
  "time_alive": 1503,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 13,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 20,
  "time_alive": 1218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 26,
  "time_alive": 621,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 10,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 14,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "543a75571b644d64a505c864a8590b44:6d981a4944cc4f56b028598dc3d595c7:f548d6b69e0b4a168720eeccaf9c4200",
  "placement": 22,
  "time_alive": 643,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 20,
  "time_alive": 1190,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 33,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 32,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 10,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 31,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 26,
  "time_alive": 944,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 10,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 19,
  "time_alive": 1240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 2,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 30,
  "time_alive": 304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 18,
  "time_alive": 1299,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "1f8729462114420eb60b03f20835ac22:471803cc23a7444686a3090bf132ff2d:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 16,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 32,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 32,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 11,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 11,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 8,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 9,
  "time_alive": 1474,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 29,
  "time_alive": 620,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 26,
  "time_alive": 753,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "27641300c9224aa7ac5c981d96cccc8c:2e95c24ea8f9418089c4ef06a954a294:69dc8433ad5d41c09785c516a4286f6e",
  "placement": 32,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 12,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 17,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 9,
  "time_alive": 1430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 24,
  "time_alive": 910,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 28,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 10,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 30,
  "time_alive": 453,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 32,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 23,
  "time_alive": 1157,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 28,
  "time_alive": 361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:557d2f8f350d4e41975e9aa7158f8557:5bdd56a9448f483ea237bc05db209d23",
  "placement": 26,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 30,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 7,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 24,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 33,
  "time_alive": 197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 22,
  "time_alive": 1208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 28,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 27,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 12,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 12,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 25,
  "time_alive": 1154,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 20,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "28f9d47425534887ade5465316862080:a4f09ec1f06a4f468125a99bb4e5ca16:ea264b22b813452ab4d1017797f7fb4c",
  "placement": 29,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 22,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 12,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 33,
  "time_alive": 237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 14,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 17,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 25,
  "time_alive": 969,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 12,
  "time_alive": 1372,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 28,
  "time_alive": 411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 20,
  "time_alive": 1254,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 24,
  "time_alive": 1191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 24,
  "time_alive": 524,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070:8e9a6fb7deb14a89b3ca26ac4dee8b4c:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 25,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 14,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 31,
  "time_alive": 198,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 17,
  "time_alive": 1280,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 30,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 12,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 22,
  "time_alive": 1121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 31,
  "time_alive": 302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 30,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 13,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 17,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 31,
  "time_alive": 213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "a66717ec19424910a2e8f698f62ec1ba:a7ee1166b2b844f3a7b1270cc5fc2912:b8fd4b7b269d4326b7a094fa453b4aea",
  "placement": 24,
  "time_alive": 566,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 31,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 25,
  "time_alive": 909,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 29,
  "time_alive": 531,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 22,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 20,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 11,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 14,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 33,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 21,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 5,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "452567d12459404099a9a1ccf3602f06:e908cb630f854351a1ebe4dda54cfb3c:f971364f19e74baf89fe5ac980b4cafd",
  "placement": 21,
  "time_alive": 729,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 17,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 23,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 31,
  "time_alive": 438,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 27,
  "time_alive": 868,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 25,
  "time_alive": 1039,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 7,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 26,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 27,
  "time_alive": 567,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 24,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 32,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 13,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 20,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 22,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 21,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 32,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 32,
  "time_alive": 360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 16,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 21,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 29,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 19,
  "time_alive": 1268,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 25,
  "time_alive": 522,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "3f0866a303b244899938ce50f1c16f73:7a9d7d8038e642c49d1d019c94a7ab6c:dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 18,
  "time_alive": 890,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 29,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 22,
  "time_alive": 1149,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 13,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 30,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 33,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 29,
  "time_alive": 386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 30,
  "time_alive": 300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 29,
  "time_alive": 309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 21,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "3d07dc40f6fe4a5bafaa532097e518f4:42c96cddca97481bbb2862541ec703e3:8f0ebc725fd0410daf832dd05807d3e2",
  "placement": 30,
  "time_alive": 127,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 27,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 30,
  "time_alive": 480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 26,
  "time_alive": 918,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 31,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 29,
  "time_alive": 427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 33,
  "time_alive": 180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 25,
  "time_alive": 996,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9cd5d1f-10c0-4a49-bf80-2c224bc2fc6b",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 31,
  "time_alive": 221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 31,
  "time_alive": 226,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 26,
  "time_alive": 474,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 30,
  "time_alive": 232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "47edc9df-f67c-459a-8851-e910768a0075",
  "team_id": "0d0e16ab1e1f4daabdbce8effc4cfba6:1044fabbf3e14ac2882e607e88167252:f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 19,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0392f70e-e17f-43f2-ba8d-89d3d9989202",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 9,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "522b9ee6-79a9-4a51-a4c4-ec165c438d63",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 27,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "178bd20e-2a9e-4148-b82f-895eeb24bd75",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 23,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c714e8f9-bb7b-42f2-a5e6-a4fa6b5921ef",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 28,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1fa71e-fe47-45a0-b82d-b386ad2c391b",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 18,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "290138e5-2fcb-4009-a767-d9c4e6d8db09",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 31,
  "time_alive": 586,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77ce5d82-f7cb-4901-83b9-e03b26f2b857",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 28,
  "time_alive": 744,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26678acf-095d-461a-b123-bc11c3729312",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 28,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0964add7-1cd7-41df-abcd-3bf26efda8f8",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 20,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8ecc35-df56-4581-93dd-6129399141b4",
  "team_id": "a645f6c20a2e4c34b0611cc6dbc6538f:d103ed8f17544c60b9d8f26c83908576:d76fb57d518a45bb803ed07e59d849d9",
  "placement": 29,
  "time_alive": 291,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 6,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 4,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1525,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1463,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 2,
  "time_alive": 1529,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 27,
  "time_alive": 261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 3,
  "time_alive": 1522,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1515,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 2,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 16,
  "time_alive": 1283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 12,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 2,
  "time_alive": 1504,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 3,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 27,
  "time_alive": 692,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 2,
  "time_alive": 1463,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 6,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 1,
  "time_alive": 1529,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 4,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 2,
  "time_alive": 1534,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 6,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 13,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 1,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1494,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 9,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 11,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 25,
  "time_alive": 1044,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 16,
  "time_alive": 1371,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1518,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 18,
  "time_alive": 1212,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 4,
  "time_alive": 1468,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1356,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 4,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 30,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 29,
  "time_alive": 555,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 15,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 5,
  "time_alive": 1462,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 18,
  "time_alive": 1263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 6,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 1,
  "time_alive": 1534,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 3,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 1,
  "time_alive": 1500,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 8,
  "time_alive": 1352,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "9b333e3d949449309ba8c8a1c491b102:b467bc30b1b244c79455aba58ec70d42:fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 8,
  "time_alive": 1278,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 13,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 2,
  "time_alive": 1533,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 4,
  "time_alive": 1476,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 4,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 18,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 7,
  "time_alive": 1450,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 11,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 9,
  "time_alive": 1454,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 2,
  "time_alive": 1515,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 7,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 3,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 22,
  "time_alive": 559,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 1,
  "time_alive": 1504,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 7,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 6,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 9,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 4,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 15,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 18,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 20,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 5,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 6,
  "time_alive": 1427,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 6,
  "time_alive": 1392,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 6,
  "time_alive": 1295,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 5,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 20,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 7,
  "time_alive": 1428,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 6,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 8,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 6,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 3,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 11,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 27,
  "time_alive": 702,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 5,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 7,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 13,
  "time_alive": 1129,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 18,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 5,
  "time_alive": 1474,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 16,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 7,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 7,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 3,
  "time_alive": 1488,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 24,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 4,
  "time_alive": 1512,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 9,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 19,
  "time_alive": 1228,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 4,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 3,
  "time_alive": 1354,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 19,
  "time_alive": 1310,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 18,
  "time_alive": 1211,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 14,
  "time_alive": 1362,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 26,
  "time_alive": 1012,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 17,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 9,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 1,
  "time_alive": 1518,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 12,
  "time_alive": 1432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 8,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 10,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 10,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 11,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 21,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 11,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 29,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 3,
  "time_alive": 1468,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 27,
  "time_alive": 386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 28,
  "time_alive": 229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 14,
  "time_alive": 1360,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 4,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 21,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 2,
  "time_alive": 1444,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 23,
  "time_alive": 238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 11,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 6,
  "time_alive": 1460,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 12,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 21,
  "time_alive": 1218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 26,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 5,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 13,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 13,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 17,
  "time_alive": 1240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 11,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 20,
  "time_alive": 484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "49e5a8a2ddc840a8b52273a45ecf474d:e9f8bb90253d4a51a7a42bc4f6c48dff:ea3a34ea69274f0eab23698910d0d58c",
  "placement": 5,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 8,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 15,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 8,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 12,
  "time_alive": 1414,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 22,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 29,
  "time_alive": 277,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 17,
  "time_alive": 1280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 18,
  "time_alive": 1249,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 7,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 15,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 9,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "3f2895bb59ac45bebb66bb0e3ef0c23c:52888763360146c98c24e276a2c964ff:60fbd5f2849a4052b8817c4e24a0a3ef",
  "placement": 10,
  "time_alive": 1227,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 20,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 10,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 24,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 28,
  "time_alive": 373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 2,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 24,
  "time_alive": 1034,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 25,
  "time_alive": 555,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 6,
  "time_alive": 1495,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 14,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 9,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 18,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 9,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 16,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 13,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 3,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 20,
  "time_alive": 1275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 22,
  "time_alive": 1125,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 8,
  "time_alive": 1452,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 7,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 22,
  "time_alive": 1090,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 12,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 15,
  "time_alive": 1285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "66195fe176ce4a4ba68191a8db88b7a5:6a38bba47fee46bd87596869aa3b84eb:b1c3607370614c0aa911575f5d8739d2",
  "placement": 20,
  "time_alive": 603,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 12,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 8,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 10,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 10,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 21,
  "time_alive": 1172,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 8,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 15,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 23,
  "time_alive": 1160,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 21,
  "time_alive": 1092,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 16,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 11,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 21,
  "time_alive": 597,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 14,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 13,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 26,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 5,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 19,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 23,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 10,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 11,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 8,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 17,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:2ab69d9dde954f2fada991047028776b:c2eb271a63aa45e39c80316cc6955886",
  "placement": 17,
  "time_alive": 865,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 17,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 22,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 3,
  "time_alive": 1505,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 23,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 27,
  "time_alive": 643,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 20,
  "time_alive": 1229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 5,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 15,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 23,
  "time_alive": 1005,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 26,
  "time_alive": 404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 12,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "36232fd4c028417a837cf6146017a8b9:c02ce3d8396342df8fe27260dee17ce3:c85820ec101742b097973599947b0ac0",
  "placement": 16,
  "time_alive": 932,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 7,
  "time_alive": 1434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 17,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 23,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 25,
  "time_alive": 1078,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 13,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 4,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 19,
  "time_alive": 1207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 24,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 10,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 18,
  "time_alive": 1311,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 21,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 9,
  "time_alive": 1250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 27,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 1,
  "time_alive": 1533,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 31,
  "time_alive": 226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 20,
  "time_alive": 1226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 16,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 14,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 21,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 25,
  "time_alive": 988,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 25,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 23,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 14,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "1a063df5e87449f39eedba68c89cb136:35e65ce910b4451e8d6eb444116fa295:fa97c23b6f07447e9d6484b9ba64d2e6",
  "placement": 14,
  "time_alive": 1030,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 30,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 27,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 5,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 19,
  "time_alive": 1231,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 14,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 13,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 10,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 19,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 19,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 24,
  "time_alive": 861,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 13,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "443823861a67499fafe7b073348b28bd:8a4f562ac0594ca3a52016798d111d5a:9f389fe834cc4bc3b6715276553f49cc",
  "placement": 25,
  "time_alive": 164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 10,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 28,
  "time_alive": 722,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 15,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 14,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 12,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 11,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 9,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 29,
  "time_alive": 167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 28,
  "time_alive": 125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 27,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:88cedc43a3404def8b0cf54a17b301d6",
  "placement": 26,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 23,
  "time_alive": 1130,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 28,
  "time_alive": 688,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 24,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 28,
  "time_alive": 422,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 17,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 26,
  "time_alive": 502,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 8,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 20,
  "time_alive": 1112,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 14,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 25,
  "time_alive": 326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:be4dd5c02714461d8201001ea99a6685:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 4,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 22,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 12,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 20,
  "time_alive": 1213,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 23,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 22,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 21,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 12,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 3,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 22,
  "time_alive": 441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "0ed59ad123664c1f870a8210167ef7fb:3c2eef6bc5c34c028db7614a6385c95c:dc93fa22338a47018298222979a06a66",
  "placement": 19,
  "time_alive": 625,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 26,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 19,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 19,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 18,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 11,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 26,
  "time_alive": 640,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 7,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 28,
  "time_alive": 483,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 28,
  "time_alive": 606,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 22,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 19,
  "time_alive": 1159,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 7,
  "time_alive": 1279,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 15,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 23,
  "time_alive": 1156,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 18,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 8,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 9,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 19,
  "time_alive": 1237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 16,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 16,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 24,
  "time_alive": 980,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "8e2152a84fcf41d2a553f03479a6341e:a13372e1865745f3a2be01e3066f5e79:b223cc7e505b42b28212150f2c6f9009",
  "placement": 27,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 29,
  "time_alive": 416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 24,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 17,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 31,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 10,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 25,
  "time_alive": 1028,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 12,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 22,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 13,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 25,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 24,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 18,
  "time_alive": 722,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "1d7792c39ab34e89a8fef9e714054cb5:f3385036413e46a9b520ecac2d1d256a:fa7631e8435b4ed6b7f4069091d774a4",
  "placement": 14,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "1d7792c39ab34e89a8fef9e714054cb5:f3385036413e46a9b520ecac2d1d256a:fa7631e8435b4ed6b7f4069091d774a4",
  "placement": 17,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "1d7792c39ab34e89a8fef9e714054cb5:f3385036413e46a9b520ecac2d1d256a:fa7631e8435b4ed6b7f4069091d774a4",
  "placement": 16,
  "time_alive": 1260,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "1d7792c39ab34e89a8fef9e714054cb5:f3385036413e46a9b520ecac2d1d256a:fa7631e8435b4ed6b7f4069091d774a4",
  "placement": 20,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "1d7792c39ab34e89a8fef9e714054cb5:f3385036413e46a9b520ecac2d1d256a:fa7631e8435b4ed6b7f4069091d774a4",
  "placement": 23,
  "time_alive": 370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "1d7792c39ab34e89a8fef9e714054cb5:f3385036413e46a9b520ecac2d1d256a:fa7631e8435b4ed6b7f4069091d774a4",
  "placement": 2,
  "time_alive": 1356,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "3d17c3d6238c469d9109f831a8d89079:dc2a7f57b67c43e49d64727c113f3480:f78ac8c957ac4db7b76747d350618f88",
  "placement": 16,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "3d17c3d6238c469d9109f831a8d89079:dc2a7f57b67c43e49d64727c113f3480:f78ac8c957ac4db7b76747d350618f88",
  "placement": 11,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "3d17c3d6238c469d9109f831a8d89079:dc2a7f57b67c43e49d64727c113f3480:f78ac8c957ac4db7b76747d350618f88",
  "placement": 22,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "3d17c3d6238c469d9109f831a8d89079:dc2a7f57b67c43e49d64727c113f3480:f78ac8c957ac4db7b76747d350618f88",
  "placement": 17,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "3d17c3d6238c469d9109f831a8d89079:dc2a7f57b67c43e49d64727c113f3480:f78ac8c957ac4db7b76747d350618f88",
  "placement": 24,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "3d17c3d6238c469d9109f831a8d89079:dc2a7f57b67c43e49d64727c113f3480:f78ac8c957ac4db7b76747d350618f88",
  "placement": 10,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 24,
  "time_alive": 1027,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 26,
  "time_alive": 906,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 25,
  "time_alive": 811,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 13,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 15,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 28,
  "time_alive": 293,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 25,
  "time_alive": 976,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 25,
  "time_alive": 1006,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 9,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 22,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 29,
  "time_alive": 422,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 21,
  "time_alive": 1154,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b2e4d8e-523a-405b-9a14-eeceba61a829",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 20,
  "time_alive": 1144,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 27,
  "time_alive": 542,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 26,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01c89f91-2e8d-4d08-93a1-b2effee852f4",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 28,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bfc7485-f19a-492e-a503-350f0d971125",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 29,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07e28e77-50cb-405e-abbb-ae894992586c",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 21,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b29a3d2-49d4-44a6-b5a5-26526d584997",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 16,
  "time_alive": 1344,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bdb1e103-ab60-4ff9-a640-528638cc6115",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 31,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fb06203-781c-4c04-a5d4-f04c03f2e4fe",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 30,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31b6dbd2-1d72-4155-b2ac-c9c2e064123e",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 29,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78910779-0d41-46c0-bf31-355734ecb83e",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 15,
  "time_alive": 1284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f365a33-6a91-4d2d-8284-dbfe60b65f69",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 17,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b5fa37dd-712c-48bd-ba50-56e4cd3f2392",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 26,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5508dc3f-8a20-4dd8-9987-64c237054cf5",
  "team_id": "5870d578c03447049618fa56f25ce8ef:68b870f5302447458e47619f6836bc7c:723abc9e0f184fa49134fa734cb02f66",
  "placement": 24,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1549,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 6,
  "time_alive": 1470,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1522,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 7,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 5,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 16,
  "time_alive": 1197,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 5,
  "time_alive": 1451,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 13,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1472,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 23,
  "time_alive": 1111,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 15,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 27,
  "time_alive": 887,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 14,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1518,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 2,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 10,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 9,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 3,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 2,
  "time_alive": 1472,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 9,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 2,
  "time_alive": 1556,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1511,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 21,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 6,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 3,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 12,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 13,
  "time_alive": 1288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 33,
  "time_alive": 85,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 32,
  "time_alive": 165,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 11,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 17,
  "time_alive": 1250,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 27,
  "time_alive": 917,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 5,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 20,
  "time_alive": 1247,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 8,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 5,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 23,
  "time_alive": 1110,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 22,
  "time_alive": 1231,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 7,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1466,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 6,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 11,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 1,
  "time_alive": 1556,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 16,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 12,
  "time_alive": 1364,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 24,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 4,
  "time_alive": 1430,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 25,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 4,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 22,
  "time_alive": 1001,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 19,
  "time_alive": 1236,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 4,
  "time_alive": 1457,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1549,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 19,
  "time_alive": 1240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 24,
  "time_alive": 937,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 4,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 8,
  "time_alive": 1437,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1525,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 21,
  "time_alive": 1008,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 6,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 30,
  "time_alive": 255,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 23,
  "time_alive": 1086,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 22,
  "time_alive": 629,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 5,
  "time_alive": 1508,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 21,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 21,
  "time_alive": 1146,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 11,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 4,
  "time_alive": 1487,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 19,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 26,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 1,
  "time_alive": 1436,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 11,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 4,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 10,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 10,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 3,
  "time_alive": 1528,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 3,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 19,
  "time_alive": 1264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 3,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 27,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 14,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 4,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 5,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 25,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 3,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 18,
  "time_alive": 1216,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 5,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 24,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 3,
  "time_alive": 1494,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 19,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 12,
  "time_alive": 1396,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 6,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 17,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 8,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1440,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 9,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1400,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 12,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 4,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 4,
  "time_alive": 1487,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 8,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 28,
  "time_alive": 790,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 20,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 22,
  "time_alive": 1121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 18,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 12,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 1,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "32ce5db2-25e0-41ea-a467-d743f9b0fbf5",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56024923-7268-415e-9742-293c2b16642b",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 17,
  "time_alive": 1224,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e1510aa-29c4-4f48-9776-0706826d46db",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 3,
  "time_alive": 1466,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9739e862-350e-4704-9b10-d6ff3e711d38",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 17,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a2469d8-40fd-4293-8c28-1c5ef836f1b1",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 17,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5229e840-8705-4ac8-aa67-5a41b3b68756",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03c48a60-6f8a-4dc1-bba2-22f58a17e811",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1522,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60b60a78-591f-499e-84b4-d883625bbde1",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 18,
  "time_alive": 1289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a186ea2-c5b6-4e9c-bfe5-77e9fa3f51da",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 15,
  "time_alive": 1327,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4b1874b7-afd1-4b03-b1a8-68734b91c8bb",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "65745dee-7064-4fb0-a18f-39bd68d00a5e",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 9,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c38e62b1-0cb8-4b3b-a22a-7ed8e0be9fb9",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 28,
  "time_alive": 782,
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
    