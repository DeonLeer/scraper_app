const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "526bbd74a0af4294a0067ce1dc225a9a:85bb830169b94cd1872d4eb1d968cd4c:ef99d827619a44ddb2ac27b86f93c7f5",
  "placement": 9,
  "time_alive": 2108,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 19,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 17,
  "time_alive": 1564,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 22,
  "time_alive": 1561,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 25,
  "time_alive": 478,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 20,
  "time_alive": 804,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 20,
  "time_alive": 1285,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 23,
  "time_alive": 660,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06af1dc3-185d-4db7-8d89-32bab0aedc9d",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 16,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01243af4-0146-4f18-ba32-1d7b3a9e0500",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 19,
  "time_alive": 1525,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bd023a-c44e-4bd9-83a7-4ddfde8ad72d",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 32,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fa396d-556e-4a29-98b6-835f98e12276",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 21,
  "time_alive": 794,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d51aba-ff76-450a-b4ed-a58d06021155",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 16,
  "time_alive": 1804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "070b3b78-ed57-4e3b-b3d8-ddef4601c7ed",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 31,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 3,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 1,
  "time_alive": 1478,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 4,
  "time_alive": 1430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 1,
  "time_alive": 1474,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "3856b7159cb24b068ae9334371883507:5027366496ce4254931a2e2f02b1af32:cc70b1faf00144f6bdad114cabf8901b",
  "placement": 2,
  "time_alive": 1436,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 2,
  "time_alive": 1505,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1239,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1389,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 16,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 13,
  "time_alive": 1353,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 1,
  "time_alive": 1436,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 1,
  "time_alive": 1486,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 15,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 2,
  "time_alive": 1500,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 4,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 17,
  "time_alive": 1217,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 20,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 25,
  "time_alive": 1041,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 3,
  "time_alive": 1475,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1500,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 11,
  "time_alive": 1363,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 8,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 1,
  "time_alive": 1505,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 2,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 9,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 17,
  "time_alive": 1338,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 14,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 13,
  "time_alive": 1302,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 5,
  "time_alive": 1467,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 20,
  "time_alive": 1254,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 6,
  "time_alive": 1403,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 12,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "3051491640074e529154af24251526fb:683c8817f0d047e3ba1c177a79ffcd6f:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 9,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 7,
  "time_alive": 1422,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 32,
  "time_alive": 87,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 13,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 3,
  "time_alive": 1458,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "392557a1bc08450b849706ba91c6d758:42d5d91fc03e4704834e8537747596b0:4308c50d18f247f39b07a5159511bd62",
  "placement": 31,
  "time_alive": 112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 30,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 27,
  "time_alive": 907,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 7,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 8,
  "time_alive": 1392,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 6,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "553546f925f44294b782bbf84994eb3f:cd84188b596e482a8d9ac6b2a31c6c4d:e169272b121742bfb6f46ecbfda59244",
  "placement": 4,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 10,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 8,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 10,
  "time_alive": 1374,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 12,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 27,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "1978d7c87c4743709f0a391371e7b075:34ad7ff5593343d5a7a740c6554793b8:92c966b501894b77befe0dfc275c88a9",
  "placement": 6,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 7,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 23,
  "time_alive": 1141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 18,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 18,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 5,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "38e1686622b641a399838abb0cba9493:8cbc97957a9c4a27b9abfa8f218457e9:d06f83ea140a40bd91cd13112d24d816",
  "placement": 3,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 8,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 6,
  "time_alive": 1451,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 17,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 10,
  "time_alive": 1379,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 18,
  "time_alive": 1261,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "08c7e96ecb1e4e069b8012cc6dcebd3c:e2f5726a22654b00b3776bea00779c54:f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 24,
  "time_alive": 570,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 13,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 14,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 29,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 30,
  "time_alive": 292,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 2,
  "time_alive": 1474,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "be3ef498ecac4745acfcc7ba96f7808b:ce33e5bf52974e7990f8ab8da37b62d0:dc34d51f63db4e3b9038a36cd9bc7c32",
  "placement": 11,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 6,
  "time_alive": 1461,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 15,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 14,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 3,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 7,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "1fa2e2366d414cc1a359bb43498cda4c:a396550c25134720b4530089ee26fe35:e9936643249f40f7bd8738a650c04512",
  "placement": 22,
  "time_alive": 1076,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 12,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 5,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 6,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 23,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 16,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "5820d012a9a04ace925f48dc7cc76091:5df1dd01d2b94ba882a9ce65371b536f:c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 14,
  "time_alive": 1290,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 23,
  "time_alive": 1102,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 29,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 5,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 7,
  "time_alive": 1394,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 10,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "32928e9b31544806a48ea3d7243befcd:53e9c5d238fe4e81a67ae3c02c9b23d1:81a879edfa564a618ef4330e0349a73f",
  "placement": 28,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 19,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 11,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 21,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "15bb4ba32c484cb38ba00a5ab19f7aa6:1c7697a54c9a4e0095ffce5b6a452117:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 5,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "14668e944bbd45d3820dc51fad60cc0d:2bc25f4d22654f12b9ae273a73af46cc:77109732b9f54e5e808db5e21796210e",
  "placement": 26,
  "time_alive": 948,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "14668e944bbd45d3820dc51fad60cc0d:2bc25f4d22654f12b9ae273a73af46cc:77109732b9f54e5e808db5e21796210e",
  "placement": 13,
  "time_alive": 1358,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "14668e944bbd45d3820dc51fad60cc0d:2bc25f4d22654f12b9ae273a73af46cc:77109732b9f54e5e808db5e21796210e",
  "placement": 24,
  "time_alive": 1089,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "14668e944bbd45d3820dc51fad60cc0d:2bc25f4d22654f12b9ae273a73af46cc:77109732b9f54e5e808db5e21796210e",
  "placement": 14,
  "time_alive": 1349,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "14668e944bbd45d3820dc51fad60cc0d:2bc25f4d22654f12b9ae273a73af46cc:77109732b9f54e5e808db5e21796210e",
  "placement": 25,
  "time_alive": 658,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "14668e944bbd45d3820dc51fad60cc0d:2bc25f4d22654f12b9ae273a73af46cc:77109732b9f54e5e808db5e21796210e",
  "placement": 16,
  "time_alive": 1283,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "0489f712effe4f0ab7ed8b096ca2c941:5456af88363541b5869bd4fbb8d29f9a:6eae099955a249fe8dd307debe19f536",
  "placement": 14,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "0489f712effe4f0ab7ed8b096ca2c941:5456af88363541b5869bd4fbb8d29f9a:6eae099955a249fe8dd307debe19f536",
  "placement": 4,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "0489f712effe4f0ab7ed8b096ca2c941:5456af88363541b5869bd4fbb8d29f9a:6eae099955a249fe8dd307debe19f536",
  "placement": 21,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "0489f712effe4f0ab7ed8b096ca2c941:5456af88363541b5869bd4fbb8d29f9a:6eae099955a249fe8dd307debe19f536",
  "placement": 31,
  "time_alive": 185,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "0489f712effe4f0ab7ed8b096ca2c941:5456af88363541b5869bd4fbb8d29f9a:6eae099955a249fe8dd307debe19f536",
  "placement": 19,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "0489f712effe4f0ab7ed8b096ca2c941:5456af88363541b5869bd4fbb8d29f9a:6eae099955a249fe8dd307debe19f536",
  "placement": 12,
  "time_alive": 1311,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 4,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 16,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 16,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 22,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 24,
  "time_alive": 817,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "65aae2744676435981cdac0b48777def:b75590bc26214154a435f8a37c249b3a:cf6aaf7e77de4d3886227550505d35c9",
  "placement": 21,
  "time_alive": 1078,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "06f51668e68d4e04ad82bbe80926823b:51a0e7baf78641debc107c1bfd4f2d37:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 17,
  "time_alive": 1232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "06f51668e68d4e04ad82bbe80926823b:51a0e7baf78641debc107c1bfd4f2d37:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 17,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "06f51668e68d4e04ad82bbe80926823b:51a0e7baf78641debc107c1bfd4f2d37:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 4,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "06f51668e68d4e04ad82bbe80926823b:51a0e7baf78641debc107c1bfd4f2d37:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 5,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "06f51668e68d4e04ad82bbe80926823b:51a0e7baf78641debc107c1bfd4f2d37:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 20,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "06f51668e68d4e04ad82bbe80926823b:51a0e7baf78641debc107c1bfd4f2d37:528d825ddd3f4e9db016a04c4411b4b3",
  "placement": 23,
  "time_alive": 941,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "20b94816700540b486ff0cf0b867dc68:37d1068fd9134f8ca161b027a6b021d6:f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 24,
  "time_alive": 999,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "20b94816700540b486ff0cf0b867dc68:37d1068fd9134f8ca161b027a6b021d6:f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 24,
  "time_alive": 1139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "20b94816700540b486ff0cf0b867dc68:37d1068fd9134f8ca161b027a6b021d6:f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 13,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "20b94816700540b486ff0cf0b867dc68:37d1068fd9134f8ca161b027a6b021d6:f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 32,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "20b94816700540b486ff0cf0b867dc68:37d1068fd9134f8ca161b027a6b021d6:f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 28,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "20b94816700540b486ff0cf0b867dc68:37d1068fd9134f8ca161b027a6b021d6:f1966fc984e04eef9b6f325b98f12f2c",
  "placement": 7,
  "time_alive": 1326,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "9090408ab7db43269764f82c60940f5f:b965e62b13424cfb86adf4b2aa3011b9:cf80c7857162490d943e3193f72cccae",
  "placement": 21,
  "time_alive": 1117,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "9090408ab7db43269764f82c60940f5f:b965e62b13424cfb86adf4b2aa3011b9:cf80c7857162490d943e3193f72cccae",
  "placement": 28,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "9090408ab7db43269764f82c60940f5f:b965e62b13424cfb86adf4b2aa3011b9:cf80c7857162490d943e3193f72cccae",
  "placement": 2,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "9090408ab7db43269764f82c60940f5f:b965e62b13424cfb86adf4b2aa3011b9:cf80c7857162490d943e3193f72cccae",
  "placement": 27,
  "time_alive": 445,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "9090408ab7db43269764f82c60940f5f:b965e62b13424cfb86adf4b2aa3011b9:cf80c7857162490d943e3193f72cccae",
  "placement": 23,
  "time_alive": 904,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "9090408ab7db43269764f82c60940f5f:b965e62b13424cfb86adf4b2aa3011b9:cf80c7857162490d943e3193f72cccae",
  "placement": 25,
  "time_alive": 519,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "3a7a015bf85a440aa2bf6793d205cf22:7c55248d658e4da6af65255a560beb73:b13615c470d3444b99151e5c23b1c04b",
  "placement": 28,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "3a7a015bf85a440aa2bf6793d205cf22:7c55248d658e4da6af65255a560beb73:b13615c470d3444b99151e5c23b1c04b",
  "placement": 9,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "3a7a015bf85a440aa2bf6793d205cf22:7c55248d658e4da6af65255a560beb73:b13615c470d3444b99151e5c23b1c04b",
  "placement": 22,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "3a7a015bf85a440aa2bf6793d205cf22:7c55248d658e4da6af65255a560beb73:b13615c470d3444b99151e5c23b1c04b",
  "placement": 20,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "3a7a015bf85a440aa2bf6793d205cf22:7c55248d658e4da6af65255a560beb73:b13615c470d3444b99151e5c23b1c04b",
  "placement": 22,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "3a7a015bf85a440aa2bf6793d205cf22:7c55248d658e4da6af65255a560beb73:b13615c470d3444b99151e5c23b1c04b",
  "placement": 9,
  "time_alive": 1323,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:d8b8165cebf348f7a2aef4e5cf621da9:d9af839793a44e9c90c3b5c88e16d909",
  "placement": 16,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:d8b8165cebf348f7a2aef4e5cf621da9:d9af839793a44e9c90c3b5c88e16d909",
  "placement": 18,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:d8b8165cebf348f7a2aef4e5cf621da9:d9af839793a44e9c90c3b5c88e16d909",
  "placement": 23,
  "time_alive": 1141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:d8b8165cebf348f7a2aef4e5cf621da9:d9af839793a44e9c90c3b5c88e16d909",
  "placement": 9,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:d8b8165cebf348f7a2aef4e5cf621da9:d9af839793a44e9c90c3b5c88e16d909",
  "placement": 15,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "65e4527264ee4fbcbc0405bec6c50000:d8b8165cebf348f7a2aef4e5cf621da9:d9af839793a44e9c90c3b5c88e16d909",
  "placement": 20,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 22,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 10,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 28,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 26,
  "time_alive": 465,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 33,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "0f6683c630d6428081edd66777ca8beb:28cc150810b243aab2efdfe0fb8442a5:96db77a335244e94926384e7db4a51ee",
  "placement": 15,
  "time_alive": 1284,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 25,
  "time_alive": 987,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 12,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 12,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 24,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 30,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "5ff7001e3f744a1797a9ad9fb3d6b54b:8f2a6ad5de5d438b88e796677fb12863:ed885b1d5178452ebcdc0a58fe5bd931",
  "placement": 27,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 31,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 31,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 11,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 29,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 29,
  "time_alive": 288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:842335c971474adbbb237e908d87c62c:a203297fc0f14c388233f58f2f8b2f0f",
  "placement": 29,
  "time_alive": 277,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "3114d1bdf5034c8986bbea69306a78d8:5215c7b5eeab4f4cb546d0c76d32efd0:b71b309750b14af6ba5adc4f2314117b",
  "placement": 29,
  "time_alive": 508,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "3114d1bdf5034c8986bbea69306a78d8:5215c7b5eeab4f4cb546d0c76d32efd0:b71b309750b14af6ba5adc4f2314117b",
  "placement": 27,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "3114d1bdf5034c8986bbea69306a78d8:5215c7b5eeab4f4cb546d0c76d32efd0:b71b309750b14af6ba5adc4f2314117b",
  "placement": 21,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "3114d1bdf5034c8986bbea69306a78d8:5215c7b5eeab4f4cb546d0c76d32efd0:b71b309750b14af6ba5adc4f2314117b",
  "placement": 9,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "3114d1bdf5034c8986bbea69306a78d8:5215c7b5eeab4f4cb546d0c76d32efd0:b71b309750b14af6ba5adc4f2314117b",
  "placement": 19,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 19,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 30,
  "time_alive": 427,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 31,
  "time_alive": 727,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 15,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 17,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "1de90a7eef81496da730874d8bb611c0:9c41395b8ad342cc87fabb89fecdaa44:cde94ae8a2ee4accb7b304ee56751766",
  "placement": 30,
  "time_alive": 275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "511312ed02fe48a6a8a38552a2d227eb:5c2ff2a58a4640d5b33b10ca1460e705:5fc1b7c2f1454090a31f97015b7a9870",
  "placement": 27,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "511312ed02fe48a6a8a38552a2d227eb:5c2ff2a58a4640d5b33b10ca1460e705:5fc1b7c2f1454090a31f97015b7a9870",
  "placement": 21,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "511312ed02fe48a6a8a38552a2d227eb:5c2ff2a58a4640d5b33b10ca1460e705:5fc1b7c2f1454090a31f97015b7a9870",
  "placement": 25,
  "time_alive": 1055,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "511312ed02fe48a6a8a38552a2d227eb:5c2ff2a58a4640d5b33b10ca1460e705:5fc1b7c2f1454090a31f97015b7a9870",
  "placement": 25,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "511312ed02fe48a6a8a38552a2d227eb:5c2ff2a58a4640d5b33b10ca1460e705:5fc1b7c2f1454090a31f97015b7a9870",
  "placement": 8,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "511312ed02fe48a6a8a38552a2d227eb:5c2ff2a58a4640d5b33b10ca1460e705:5fc1b7c2f1454090a31f97015b7a9870",
  "placement": 18,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "8a6c0a57ea864937a2dee22b2f699c75:a4aaa32c00c243fcac83118feae7ec87:eaeb8e0ac443441ea08aa4e1c37d5282",
  "placement": 15,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "8a6c0a57ea864937a2dee22b2f699c75:a4aaa32c00c243fcac83118feae7ec87:eaeb8e0ac443441ea08aa4e1c37d5282",
  "placement": 26,
  "time_alive": 947,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "8a6c0a57ea864937a2dee22b2f699c75:a4aaa32c00c243fcac83118feae7ec87:eaeb8e0ac443441ea08aa4e1c37d5282",
  "placement": 30,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "8a6c0a57ea864937a2dee22b2f699c75:a4aaa32c00c243fcac83118feae7ec87:eaeb8e0ac443441ea08aa4e1c37d5282",
  "placement": 31,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "7eb575ec1aca4ee5a93c2040e55063e2:caafdbdf73044cce9999771ba375251d:db188c044e17417f8304b324677b9c01",
  "placement": 18,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "7eb575ec1aca4ee5a93c2040e55063e2:caafdbdf73044cce9999771ba375251d:db188c044e17417f8304b324677b9c01",
  "placement": 20,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "7eb575ec1aca4ee5a93c2040e55063e2:caafdbdf73044cce9999771ba375251d:db188c044e17417f8304b324677b9c01",
  "placement": 26,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "7eb575ec1aca4ee5a93c2040e55063e2:caafdbdf73044cce9999771ba375251d:db188c044e17417f8304b324677b9c01",
  "placement": 19,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "7eb575ec1aca4ee5a93c2040e55063e2:caafdbdf73044cce9999771ba375251d:db188c044e17417f8304b324677b9c01",
  "placement": 26,
  "time_alive": 460,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c3122a0f-9419-457e-b3cf-665f2d9c8cd5",
  "team_id": "7eb575ec1aca4ee5a93c2040e55063e2:caafdbdf73044cce9999771ba375251d:db188c044e17417f8304b324677b9c01",
  "placement": 26,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70a43fb2-9968-43c8-b083-b44ee1a4c175",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2:a702f9d7cb154918b67df1cbf078014a:d0b5b26db6c7434a81a11966f6479eb8",
  "placement": 32,
  "time_alive": 154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "655e4e2b-0fc5-46d9-8cc5-38599f3591e8",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2:a702f9d7cb154918b67df1cbf078014a:d0b5b26db6c7434a81a11966f6479eb8",
  "placement": 32,
  "time_alive": 155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d379657-3c29-4157-8a8d-9e21479fcbcc",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2:a702f9d7cb154918b67df1cbf078014a:d0b5b26db6c7434a81a11966f6479eb8",
  "placement": 33,
  "time_alive": 82,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "31e4735e-7ecd-41c3-a925-f089a673c073",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2:a702f9d7cb154918b67df1cbf078014a:d0b5b26db6c7434a81a11966f6479eb8",
  "placement": 28,
  "time_alive": 399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1af01751-91f2-41a3-9b16-89c16b6cacd1",
  "team_id": "26a437d88aaf4f62900fddf8d77424f2:a702f9d7cb154918b67df1cbf078014a:d0b5b26db6c7434a81a11966f6479eb8",
  "placement": 32,
  "time_alive": 174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1490,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1473,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1419,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 4,
  "time_alive": 1471,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 20,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1446,
  "elims": 21,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 1,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 6,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 2,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 5,
  "time_alive": 1437,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 18,
  "time_alive": 1031,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 11,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 3,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 7,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 8,
  "time_alive": 1408,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 1,
  "time_alive": 1487,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 21,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 24,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 2,
  "time_alive": 1473,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 4,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 2,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 10,
  "time_alive": 1396,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "819339212a764a70a4c9b39dd497437f:897e866d97af44d78d333c7f9b4e9033:96d1408569264aa88919da6fe85474f7",
  "placement": 11,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 6,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 17,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 1,
  "time_alive": 1433,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 3,
  "time_alive": 1473,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 3,
  "time_alive": 1483,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 19,
  "time_alive": 937,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 22,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 8,
  "time_alive": 1405,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 11,
  "time_alive": 1344,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 11,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 9,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "0af80850b99941a88ce050bed0f73f96:b287d40adf59441da97b9d9bc39a7621:b6ac1859fe8248e2bd2433e3109f96a4",
  "placement": 2,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 27,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 10,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 5,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 6,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 11,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 4,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 9,
  "time_alive": 1437,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 12,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 16,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 5,
  "time_alive": 1424,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 14,
  "time_alive": 1359,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 17,
  "time_alive": 1108,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:19aa835bee1946f3a6027bfc71761256:a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 28,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:19aa835bee1946f3a6027bfc71761256:a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 9,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:19aa835bee1946f3a6027bfc71761256:a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 6,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:19aa835bee1946f3a6027bfc71761256:a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 15,
  "time_alive": 1328,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:19aa835bee1946f3a6027bfc71761256:a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 7,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "11e348196d4d4696a67ee0feb75e8dd5:19aa835bee1946f3a6027bfc71761256:a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 20,
  "time_alive": 873,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 4,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 4,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 19,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 12,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 12,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "38044319899040eca9910bef4048b7d1:d68c85aa4d4744a2a4ba955355123b36:e3e75140df33428dbbec4f34b3e68c8a",
  "placement": 5,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 3,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 27,
  "time_alive": 380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 32,
  "time_alive": 228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 29,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 18,
  "time_alive": 1249,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "6d2e1bf5ea2c4ea5899ef7157795183d:b278a355c3094a7b99908a0dcc2bd8e0:f92f388865a24f8c8a7c7980258a353e",
  "placement": 8,
  "time_alive": 1389,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 23,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 33,
  "time_alive": 48,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 8,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 18,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 4,
  "time_alive": 1460,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "8c4439d0a25142d4ae1186f48e6d03ae:ccbb75a14bbb4f5695918d6e41f25a26:f41e848486784debb8be3767956fee05",
  "placement": 7,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 7,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 10,
  "time_alive": 1366,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 22,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 16,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "99161b526d594bb39d773154f9826534:9d213c60c03b4e8c9b73e1917cf16008:de4c84fec30e44fd8d37a114431e9a25",
  "placement": 16,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 5,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 21,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 17,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 2,
  "time_alive": 1487,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "046f5f0d4d5f4dbebd6c4981d2e8df77:e6d28f410cae4938b483614c50e47826:ff2d4a36657f4a2296b650a3037b6309",
  "placement": 15,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 20,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 20,
  "time_alive": 1310,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 23,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 25,
  "time_alive": 715,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 28,
  "time_alive": 149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "34a8d1a44f094d5d8ad09910dd56d3ed:71ae89ef042547b4be1bed58713cef03:bf3c449f8aef4dd8bd36009d06c40bef",
  "placement": 10,
  "time_alive": 1358,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 14,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 28,
  "time_alive": 312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 22,
  "time_alive": 1132,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 7,
  "time_alive": 1412,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 17,
  "time_alive": 1267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "3c25f75aed4644e484e139340f0f6023:440fc8ec008d4938b6507bc458eece38:afc0a88bf98f471a9fdc390aee4ab0a2",
  "placement": 24,
  "time_alive": 658,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:b600f3144773415e840d5a71cdb9e08c",
  "placement": 25,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:b600f3144773415e840d5a71cdb9e08c",
  "placement": 14,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:b600f3144773415e840d5a71cdb9e08c",
  "placement": 26,
  "time_alive": 933,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:b600f3144773415e840d5a71cdb9e08c",
  "placement": 20,
  "time_alive": 1196,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:b600f3144773415e840d5a71cdb9e08c",
  "placement": 24,
  "time_alive": 462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "0c77e5535ee14fb3afd7058ba0cd8908:613c6bb926094bf79fac51db7d06da3e:b600f3144773415e840d5a71cdb9e08c",
  "placement": 3,
  "time_alive": 1436,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 5,
  "time_alive": 1475,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 11,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25:69ac00ae0a9847afa8b5b0ab81a6b646:a5d24766bf784ed6b8745ad195881284",
  "placement": 12,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 19,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 18,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 14,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 9,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 15,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "3a5ae8ffff9143ecb68ba9f037d7c4e4:eaa1d54c872b47a5a19fe1efcac710e8:ee106dc69f1049b197aa3ed276b59176",
  "placement": 6,
  "time_alive": 1404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 7,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 24,
  "time_alive": 1112,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 15,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 16,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 13,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "038f53798d634710a14c1c4be4b73700:4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec",
  "placement": 12,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "91d2401d399348c4a907c304980a6c35:b5f661a4f4ff436c8c9ad3f535f9f7fe:e398d5a1f03a43b79302a6efe5bef936",
  "placement": 15,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "91d2401d399348c4a907c304980a6c35:b5f661a4f4ff436c8c9ad3f535f9f7fe:e398d5a1f03a43b79302a6efe5bef936",
  "placement": 16,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "91d2401d399348c4a907c304980a6c35:b5f661a4f4ff436c8c9ad3f535f9f7fe:e398d5a1f03a43b79302a6efe5bef936",
  "placement": 13,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "91d2401d399348c4a907c304980a6c35:b5f661a4f4ff436c8c9ad3f535f9f7fe:e398d5a1f03a43b79302a6efe5bef936",
  "placement": 19,
  "time_alive": 1213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "91d2401d399348c4a907c304980a6c35:b5f661a4f4ff436c8c9ad3f535f9f7fe:e398d5a1f03a43b79302a6efe5bef936",
  "placement": 23,
  "time_alive": 482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "91d2401d399348c4a907c304980a6c35:b5f661a4f4ff436c8c9ad3f535f9f7fe:e398d5a1f03a43b79302a6efe5bef936",
  "placement": 29,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "73189ce026984493841997155c246419:d657aafaac12470887f8b09e3b79a58c:f1120c3bf6894683a3559815028d5220",
  "placement": 8,
  "time_alive": 1454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "73189ce026984493841997155c246419:d657aafaac12470887f8b09e3b79a58c:f1120c3bf6894683a3559815028d5220",
  "placement": 21,
  "time_alive": 1284,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "73189ce026984493841997155c246419:d657aafaac12470887f8b09e3b79a58c:f1120c3bf6894683a3559815028d5220",
  "placement": 17,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "73189ce026984493841997155c246419:d657aafaac12470887f8b09e3b79a58c:f1120c3bf6894683a3559815028d5220",
  "placement": 10,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "73189ce026984493841997155c246419:d657aafaac12470887f8b09e3b79a58c:f1120c3bf6894683a3559815028d5220",
  "placement": 22,
  "time_alive": 757,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "37c4556172a74d13b0b2747450c2de45:98893221e8d84ce7b9011ae45db0285e:9b66d0d59c45479e926efdb0df494382",
  "placement": 15,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "37c4556172a74d13b0b2747450c2de45:98893221e8d84ce7b9011ae45db0285e:9b66d0d59c45479e926efdb0df494382",
  "placement": 9,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "37c4556172a74d13b0b2747450c2de45:98893221e8d84ce7b9011ae45db0285e:9b66d0d59c45479e926efdb0df494382",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "37c4556172a74d13b0b2747450c2de45:98893221e8d84ce7b9011ae45db0285e:9b66d0d59c45479e926efdb0df494382",
  "placement": 8,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "37c4556172a74d13b0b2747450c2de45:98893221e8d84ce7b9011ae45db0285e:9b66d0d59c45479e926efdb0df494382",
  "placement": 23,
  "time_alive": 694,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "41608dc495b7492698ec008bf9fe3cec:7e49f45e2b814fc69cf37455b059f262:a3505706507d41af8de9a5319d9e139e",
  "placement": 12,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "41608dc495b7492698ec008bf9fe3cec:7e49f45e2b814fc69cf37455b059f262:a3505706507d41af8de9a5319d9e139e",
  "placement": 23,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "41608dc495b7492698ec008bf9fe3cec:7e49f45e2b814fc69cf37455b059f262:a3505706507d41af8de9a5319d9e139e",
  "placement": 20,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "41608dc495b7492698ec008bf9fe3cec:7e49f45e2b814fc69cf37455b059f262:a3505706507d41af8de9a5319d9e139e",
  "placement": 13,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "41608dc495b7492698ec008bf9fe3cec:7e49f45e2b814fc69cf37455b059f262:a3505706507d41af8de9a5319d9e139e",
  "placement": 21,
  "time_alive": 708,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "41608dc495b7492698ec008bf9fe3cec:7e49f45e2b814fc69cf37455b059f262:a3505706507d41af8de9a5319d9e139e",
  "placement": 25,
  "time_alive": 550,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "1ae57def90f54baba396bae77b12e906:30a0e850dedf4411aea19e10b2487ca4:c119da9e9b0440918479a65fff4f6c10",
  "placement": 26,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "1ae57def90f54baba396bae77b12e906:30a0e850dedf4411aea19e10b2487ca4:c119da9e9b0440918479a65fff4f6c10",
  "placement": 26,
  "time_alive": 505,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "1ae57def90f54baba396bae77b12e906:30a0e850dedf4411aea19e10b2487ca4:c119da9e9b0440918479a65fff4f6c10",
  "placement": 25,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "1ae57def90f54baba396bae77b12e906:30a0e850dedf4411aea19e10b2487ca4:c119da9e9b0440918479a65fff4f6c10",
  "placement": 26,
  "time_alive": 511,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "1ae57def90f54baba396bae77b12e906:30a0e850dedf4411aea19e10b2487ca4:c119da9e9b0440918479a65fff4f6c10",
  "placement": 6,
  "time_alive": 1423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "1ae57def90f54baba396bae77b12e906:30a0e850dedf4411aea19e10b2487ca4:c119da9e9b0440918479a65fff4f6c10",
  "placement": 13,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 10,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 32,
  "time_alive": 79,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 18,
  "time_alive": 1283,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 31,
  "time_alive": 207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 26,
  "time_alive": 324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:5e31ad7273954ae98870a1d49b92157a:d20bad044cb24f52bcef40a423aba45d",
  "placement": 30,
  "time_alive": 112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "6fd20ae1fc3d4e138aecc7589dfe99fa:78a567bd689a4fcc904416f7abfa36f0:b489e150cd264893ba9903a4a1cbeae5",
  "placement": 13,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "6fd20ae1fc3d4e138aecc7589dfe99fa:78a567bd689a4fcc904416f7abfa36f0:b489e150cd264893ba9903a4a1cbeae5",
  "placement": 31,
  "time_alive": 173,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "6fd20ae1fc3d4e138aecc7589dfe99fa:78a567bd689a4fcc904416f7abfa36f0:b489e150cd264893ba9903a4a1cbeae5",
  "placement": 27,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "6fd20ae1fc3d4e138aecc7589dfe99fa:78a567bd689a4fcc904416f7abfa36f0:b489e150cd264893ba9903a4a1cbeae5",
  "placement": 23,
  "time_alive": 1090,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "6fd20ae1fc3d4e138aecc7589dfe99fa:78a567bd689a4fcc904416f7abfa36f0:b489e150cd264893ba9903a4a1cbeae5",
  "placement": 25,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "6fd20ae1fc3d4e138aecc7589dfe99fa:78a567bd689a4fcc904416f7abfa36f0:b489e150cd264893ba9903a4a1cbeae5",
  "placement": 9,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 29,
  "time_alive": 320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 25,
  "time_alive": 1010,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 28,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 32,
  "time_alive": 97,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 30,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "536cbaa030a64fed9ff7c160a4cfca55:b39e187e6b644a439ad633fc6938cbed:e9303d25d52f4ef7a645635c3fdbd4d4",
  "placement": 14,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 30,
  "time_alive": 289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 19,
  "time_alive": 1319,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 33,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 24,
  "time_alive": 776,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 27,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "95abe9cb984b4244be56886d59496783:bccda587d1774b3aa3621f44eb75a02f:f6d1dbf8d63d437b82070b805cf93e3b",
  "placement": 28,
  "time_alive": 209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "baecc2ce7adc4954b77ad53407588556:cd67e4d72b5f45149adb509866a88802:e0411f07656c48769d20899f624db3a3",
  "placement": 16,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "baecc2ce7adc4954b77ad53407588556:cd67e4d72b5f45149adb509866a88802:e0411f07656c48769d20899f624db3a3",
  "placement": 13,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "baecc2ce7adc4954b77ad53407588556:cd67e4d72b5f45149adb509866a88802:e0411f07656c48769d20899f624db3a3",
  "placement": 24,
  "time_alive": 968,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "baecc2ce7adc4954b77ad53407588556:cd67e4d72b5f45149adb509866a88802:e0411f07656c48769d20899f624db3a3",
  "placement": 27,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "baecc2ce7adc4954b77ad53407588556:cd67e4d72b5f45149adb509866a88802:e0411f07656c48769d20899f624db3a3",
  "placement": 22,
  "time_alive": 699,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "baecc2ce7adc4954b77ad53407588556:cd67e4d72b5f45149adb509866a88802:e0411f07656c48769d20899f624db3a3",
  "placement": 26,
  "time_alive": 378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "3d2648faa4f84649a23f6d588edb834f:a89efaef9d7b408a8b106d089f7f3abb:ee7ee37cea77409bb6a43a4adb514934",
  "placement": 18,
  "time_alive": 1212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "3d2648faa4f84649a23f6d588edb834f:a89efaef9d7b408a8b106d089f7f3abb:ee7ee37cea77409bb6a43a4adb514934",
  "placement": 22,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "3d2648faa4f84649a23f6d588edb834f:a89efaef9d7b408a8b106d089f7f3abb:ee7ee37cea77409bb6a43a4adb514934",
  "placement": 30,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "3d2648faa4f84649a23f6d588edb834f:a89efaef9d7b408a8b106d089f7f3abb:ee7ee37cea77409bb6a43a4adb514934",
  "placement": 14,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "3d2648faa4f84649a23f6d588edb834f:a89efaef9d7b408a8b106d089f7f3abb:ee7ee37cea77409bb6a43a4adb514934",
  "placement": 19,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e92c986-c30e-4ee7-90c4-ec477815a670",
  "team_id": "3d2648faa4f84649a23f6d588edb834f:a89efaef9d7b408a8b106d089f7f3abb:ee7ee37cea77409bb6a43a4adb514934",
  "placement": 27,
  "time_alive": 289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d895dc6-8fde-4510-bde6-f31bcd040f49",
  "team_id": "82252986d0134f42bd892df759804457:d252ccd903854a29ab101001998bceb5:d422413cbd244bab9a6f0f5c24866023",
  "placement": 17,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "82252986d0134f42bd892df759804457:d252ccd903854a29ab101001998bceb5:d422413cbd244bab9a6f0f5c24866023",
  "placement": 29,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "82252986d0134f42bd892df759804457:d252ccd903854a29ab101001998bceb5:d422413cbd244bab9a6f0f5c24866023",
  "placement": 29,
  "time_alive": 599,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "82252986d0134f42bd892df759804457:d252ccd903854a29ab101001998bceb5:d422413cbd244bab9a6f0f5c24866023",
  "placement": 28,
  "time_alive": 274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a7fea7-6b01-4720-818e-e3bbd6166724",
  "team_id": "82252986d0134f42bd892df759804457:d252ccd903854a29ab101001998bceb5:d422413cbd244bab9a6f0f5c24866023",
  "placement": 29,
  "time_alive": 137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64a836b9-3066-476d-b3b0-9210e7491588",
  "team_id": "0b150e5eff894bafa84af8e4f171e102:d3e44df2bd6942978df68fbeb0e6a65e:eb224e0254af437bb0c96ecca313d684",
  "placement": 30,
  "time_alive": 185,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f5dafd6-1a3e-47c0-bd0d-88b72febbd8d",
  "team_id": "0b150e5eff894bafa84af8e4f171e102:d3e44df2bd6942978df68fbeb0e6a65e:eb224e0254af437bb0c96ecca313d684",
  "placement": 31,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3519f173-549f-4ec3-9dd1-7fca0f28d1e9",
  "team_id": "0b150e5eff894bafa84af8e4f171e102:d3e44df2bd6942978df68fbeb0e6a65e:eb224e0254af437bb0c96ecca313d684",
  "placement": 30,
  "time_alive": 217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1455,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 21,
  "time_alive": 1194,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1487,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 20,
  "time_alive": 925,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 16,
  "time_alive": 1297,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 1,
  "time_alive": 1465,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 8,
  "time_alive": 1399,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 1,
  "time_alive": 1485,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 17,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 4,
  "time_alive": 1401,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 3,
  "time_alive": 1425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 8,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 6,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 4,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 25,
  "time_alive": 730,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "15f4b6e1fddb4f28b496979d711b8832:1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b",
  "placement": 2,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 12,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 13,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 3,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 9,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 19,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "09baeee4b19044209ca034c28411af9e:1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903",
  "placement": 1,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 17,
  "time_alive": 1279,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 18,
  "time_alive": 1280,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 18,
  "time_alive": 1206,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 3,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 4,
  "time_alive": 1443,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 3,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 6,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 17,
  "time_alive": 1284,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 1,
  "time_alive": 1504,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 21,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 7,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "a05e4e93b42345339723f73088735a99:ea71ac9b51d74b5b90f1b2304aeecae7:f66d7de88a3d4c96bd709652e1098873",
  "placement": 11,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 32,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 5,
  "time_alive": 1433,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 4,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 15,
  "time_alive": 1294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 6,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "34cf60755dec4d17b4e6957bf8c11ab1:fb376e2a135d484c980637764020ec3a:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 14,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 27,
  "time_alive": 883,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 7,
  "time_alive": 1408,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 20,
  "time_alive": 1107,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 11,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "ade4d3b78a764b2d861e5b382886b70d:b345733da041497bb09e945d4861e121:d4cac246e8b440babf6fa4fc81352cbd",
  "placement": 5,
  "time_alive": 1396,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 18,
  "time_alive": 1267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 3,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 10,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 28,
  "time_alive": 645,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 5,
  "time_alive": 1438,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "3d04d2352738484298fc576f9310cdc3:823e6f3a7cc84c41b363de516e369aae:d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 12,
  "time_alive": 1324,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 10,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 6,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 16,
  "time_alive": 1227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 24,
  "time_alive": 966,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 3,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4:8646bbcaa192447aa42a68c08946c9ac:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 6,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 14,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 9,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 11,
  "time_alive": 1378,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 5,
  "time_alive": 1425,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 10,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "4bfa931f42744db49a7b6cdcd717d880:61f4fc03007c4598b75c701ba3e9eb30:93d58854ff8748eeb3390e2d8915e431",
  "placement": 18,
  "time_alive": 1195,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 4,
  "time_alive": 1425,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 33,
  "time_alive": 368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 31,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 2,
  "time_alive": 1485,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 21,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "45e996ea960549de9bc86a5129476eef:99340f8d264f40f8965caebceeccba1f:f198554f661042508f197b7a41c7f0c6",
  "placement": 29,
  "time_alive": 367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 20,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 7,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 13,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 26,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 2,
  "time_alive": 1487,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 7,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 9,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 10,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 19,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 22,
  "time_alive": 1007,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 9,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "e2a055a1a0224606ba51bc6fb879066b:e9f472e3817e4d9a994361326ee5fdd4:fb2966cc253344179a65f5ca2d2d9fa1",
  "placement": 9,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 25,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 4,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 32,
  "time_alive": 197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 11,
  "time_alive": 1332,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 13,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 16,
  "time_alive": 1245,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b:fb55c23bb7a343f0ad7816b87479eb20:fd82ddb16cfb48bca283d206a7a39497",
  "placement": 5,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b:fb55c23bb7a343f0ad7816b87479eb20:fd82ddb16cfb48bca283d206a7a39497",
  "placement": 28,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b:fb55c23bb7a343f0ad7816b87479eb20:fd82ddb16cfb48bca283d206a7a39497",
  "placement": 26,
  "time_alive": 918,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b:fb55c23bb7a343f0ad7816b87479eb20:fd82ddb16cfb48bca283d206a7a39497",
  "placement": 8,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b:fb55c23bb7a343f0ad7816b87479eb20:fd82ddb16cfb48bca283d206a7a39497",
  "placement": 8,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "50bf9a94d04b4ee59d3c75160b28c19b:fb55c23bb7a343f0ad7816b87479eb20:fd82ddb16cfb48bca283d206a7a39497",
  "placement": 10,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "181af74c136d4648b34568dbd387f32c:7660b03470d04684872457b054276cc0:ed2770d9a01f4421ab5431ee4e36c3cc",
  "placement": 29,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "181af74c136d4648b34568dbd387f32c:7660b03470d04684872457b054276cc0:ed2770d9a01f4421ab5431ee4e36c3cc",
  "placement": 12,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "181af74c136d4648b34568dbd387f32c:7660b03470d04684872457b054276cc0:ed2770d9a01f4421ab5431ee4e36c3cc",
  "placement": 33,
  "time_alive": 179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "181af74c136d4648b34568dbd387f32c:7660b03470d04684872457b054276cc0:ed2770d9a01f4421ab5431ee4e36c3cc",
  "placement": 7,
  "time_alive": 1410,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "181af74c136d4648b34568dbd387f32c:7660b03470d04684872457b054276cc0:ed2770d9a01f4421ab5431ee4e36c3cc",
  "placement": 15,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "181af74c136d4648b34568dbd387f32c:7660b03470d04684872457b054276cc0:ed2770d9a01f4421ab5431ee4e36c3cc",
  "placement": 27,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 8,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 25,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 25,
  "time_alive": 937,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 13,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 14,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b915c3e2083f4cbe9c23a87fb27d4bff:b952068bc7b447e9a97980395208739d",
  "placement": 7,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b915c3e2083f4cbe9c23a87fb27d4bff:b952068bc7b447e9a97980395208739d",
  "placement": 29,
  "time_alive": 682,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b915c3e2083f4cbe9c23a87fb27d4bff:b952068bc7b447e9a97980395208739d",
  "placement": 14,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b915c3e2083f4cbe9c23a87fb27d4bff:b952068bc7b447e9a97980395208739d",
  "placement": 29,
  "time_alive": 493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b915c3e2083f4cbe9c23a87fb27d4bff:b952068bc7b447e9a97980395208739d",
  "placement": 26,
  "time_alive": 658,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "4c594819ce454c16a2fe9b024caad822:b915c3e2083f4cbe9c23a87fb27d4bff:b952068bc7b447e9a97980395208739d",
  "placement": 22,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 21,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 24,
  "time_alive": 1062,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 22,
  "time_alive": 1094,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 6,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 20,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "3b83475ff56545a78c1ad3c5f57b406d:67e3a812fe5e4ca4883d24def8452548:db6b13d19b30436c999d636599eb76a2",
  "placement": 15,
  "time_alive": 1269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "23fa56f0c3764bf8a740e8024fbd1378:31069a5625584ed19583660057f58e02:d9333fe31f1242f5a4b4b3de88185a32",
  "placement": 28,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "23fa56f0c3764bf8a740e8024fbd1378:31069a5625584ed19583660057f58e02:d9333fe31f1242f5a4b4b3de88185a32",
  "placement": 19,
  "time_alive": 1231,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "23fa56f0c3764bf8a740e8024fbd1378:31069a5625584ed19583660057f58e02:d9333fe31f1242f5a4b4b3de88185a32",
  "placement": 12,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "23fa56f0c3764bf8a740e8024fbd1378:31069a5625584ed19583660057f58e02:d9333fe31f1242f5a4b4b3de88185a32",
  "placement": 31,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "23fa56f0c3764bf8a740e8024fbd1378:31069a5625584ed19583660057f58e02:d9333fe31f1242f5a4b4b3de88185a32",
  "placement": 22,
  "time_alive": 1110,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "23fa56f0c3764bf8a740e8024fbd1378:31069a5625584ed19583660057f58e02:d9333fe31f1242f5a4b4b3de88185a32",
  "placement": 26,
  "time_alive": 439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 11,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 30,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 27,
  "time_alive": 889,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 32,
  "time_alive": 124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 32,
  "time_alive": 301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "2cd671142b2a46b9a855e5fe66dff759:ac6211233af24c37a4b30159a77ad1d1:b2d0e8d95caa4e81a305236622ee70fe",
  "placement": 19,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "7241ee693d9c490fbb4bcbd152db46b3:d6cbc91371d74e3cb1c23f22b94ff6c5:e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 13,
  "time_alive": 1315,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "7241ee693d9c490fbb4bcbd152db46b3:d6cbc91371d74e3cb1c23f22b94ff6c5:e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 23,
  "time_alive": 1082,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "7241ee693d9c490fbb4bcbd152db46b3:d6cbc91371d74e3cb1c23f22b94ff6c5:e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 21,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "7241ee693d9c490fbb4bcbd152db46b3:d6cbc91371d74e3cb1c23f22b94ff6c5:e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 25,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "7241ee693d9c490fbb4bcbd152db46b3:d6cbc91371d74e3cb1c23f22b94ff6c5:e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 30,
  "time_alive": 318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "7241ee693d9c490fbb4bcbd152db46b3:d6cbc91371d74e3cb1c23f22b94ff6c5:e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 8,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 22,
  "time_alive": 1140,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 11,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 20,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 18,
  "time_alive": 1248,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 31,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "6a6c1fd4ef4540e2a78163d00fb9378b:d9bb1522642d4de58999f17c244e909a:fd8050f96e4740bc84304987918aba43",
  "placement": 17,
  "time_alive": 1210,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 19,
  "time_alive": 1193,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 14,
  "time_alive": 1321,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 17,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 33,
  "time_alive": 101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "20b5f5c735f14f21aa9023d383e1fc1d:990be36c05b7441db2407b43335e1993:e48baae2fb8c40d9a154b1d341b742bc",
  "placement": 18,
  "time_alive": 1259,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "07d4a9bea5684d1d8ec5c8176924e5be:427f5119614346fa9e15cc41131608d8:497f608a80354561a33c2b5125aaab07",
  "placement": 15,
  "time_alive": 1303,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "07d4a9bea5684d1d8ec5c8176924e5be:427f5119614346fa9e15cc41131608d8:497f608a80354561a33c2b5125aaab07",
  "placement": 26,
  "time_alive": 919,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "07d4a9bea5684d1d8ec5c8176924e5be:427f5119614346fa9e15cc41131608d8:497f608a80354561a33c2b5125aaab07",
  "placement": 23,
  "time_alive": 1093,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "07d4a9bea5684d1d8ec5c8176924e5be:427f5119614346fa9e15cc41131608d8:497f608a80354561a33c2b5125aaab07",
  "placement": 27,
  "time_alive": 711,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "07d4a9bea5684d1d8ec5c8176924e5be:427f5119614346fa9e15cc41131608d8:497f608a80354561a33c2b5125aaab07",
  "placement": 27,
  "time_alive": 581,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "07d4a9bea5684d1d8ec5c8176924e5be:427f5119614346fa9e15cc41131608d8:497f608a80354561a33c2b5125aaab07",
  "placement": 30,
  "time_alive": 195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "1958dd21cb694739a1f976cbd474e742:74ce57229cf649c384b246db6295b492:c89f51cbe99a4ab1aeafaf2d04a7df55",
  "placement": 26,
  "time_alive": 933,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "1958dd21cb694739a1f976cbd474e742:74ce57229cf649c384b246db6295b492:c89f51cbe99a4ab1aeafaf2d04a7df55",
  "placement": 32,
  "time_alive": 560,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "1958dd21cb694739a1f976cbd474e742:74ce57229cf649c384b246db6295b492:c89f51cbe99a4ab1aeafaf2d04a7df55",
  "placement": 29,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "1958dd21cb694739a1f976cbd474e742:74ce57229cf649c384b246db6295b492:c89f51cbe99a4ab1aeafaf2d04a7df55",
  "placement": 12,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "1958dd21cb694739a1f976cbd474e742:74ce57229cf649c384b246db6295b492:c89f51cbe99a4ab1aeafaf2d04a7df55",
  "placement": 16,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "1958dd21cb694739a1f976cbd474e742:74ce57229cf649c384b246db6295b492:c89f51cbe99a4ab1aeafaf2d04a7df55",
  "placement": 23,
  "time_alive": 808,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "310666462cbf4338a0aa7c2dac46759a:9540651d2de24a33ab0be73292cbe456:ce36e623a6a44298b56244734e783332",
  "placement": 31,
  "time_alive": 258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "310666462cbf4338a0aa7c2dac46759a:9540651d2de24a33ab0be73292cbe456:ce36e623a6a44298b56244734e783332",
  "placement": 31,
  "time_alive": 588,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "310666462cbf4338a0aa7c2dac46759a:9540651d2de24a33ab0be73292cbe456:ce36e623a6a44298b56244734e783332",
  "placement": 15,
  "time_alive": 1263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "310666462cbf4338a0aa7c2dac46759a:9540651d2de24a33ab0be73292cbe456:ce36e623a6a44298b56244734e783332",
  "placement": 16,
  "time_alive": 1290,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "310666462cbf4338a0aa7c2dac46759a:9540651d2de24a33ab0be73292cbe456:ce36e623a6a44298b56244734e783332",
  "placement": 28,
  "time_alive": 446,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "310666462cbf4338a0aa7c2dac46759a:9540651d2de24a33ab0be73292cbe456:ce36e623a6a44298b56244734e783332",
  "placement": 25,
  "time_alive": 634,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "0c52a47a7a124d6187f56750c62746f0:870f06400a554e349d3a8cd31c08e5d6:dde5ad1781b14621870d52bdd4890254",
  "placement": 27,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "0c52a47a7a124d6187f56750c62746f0:870f06400a554e349d3a8cd31c08e5d6:dde5ad1781b14621870d52bdd4890254",
  "placement": 9,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "0c52a47a7a124d6187f56750c62746f0:870f06400a554e349d3a8cd31c08e5d6:dde5ad1781b14621870d52bdd4890254",
  "placement": 17,
  "time_alive": 1283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "0c52a47a7a124d6187f56750c62746f0:870f06400a554e349d3a8cd31c08e5d6:dde5ad1781b14621870d52bdd4890254",
  "placement": 29,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "01d3a40a22a84be19c3f9e2b111d5ce4:35e4ae112788455a85fc5926e0648d18:94c9f6d849db4961997431f42210f73f",
  "placement": 23,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "01d3a40a22a84be19c3f9e2b111d5ce4:35e4ae112788455a85fc5926e0648d18:94c9f6d849db4961997431f42210f73f",
  "placement": 20,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "01d3a40a22a84be19c3f9e2b111d5ce4:35e4ae112788455a85fc5926e0648d18:94c9f6d849db4961997431f42210f73f",
  "placement": 24,
  "time_alive": 1008,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "01d3a40a22a84be19c3f9e2b111d5ce4:35e4ae112788455a85fc5926e0648d18:94c9f6d849db4961997431f42210f73f",
  "placement": 30,
  "time_alive": 403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "01d3a40a22a84be19c3f9e2b111d5ce4:35e4ae112788455a85fc5926e0648d18:94c9f6d849db4961997431f42210f73f",
  "placement": 12,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "01d3a40a22a84be19c3f9e2b111d5ce4:35e4ae112788455a85fc5926e0648d18:94c9f6d849db4961997431f42210f73f",
  "placement": 21,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12181175-d3a5-4ea4-b135-649358d7da02",
  "team_id": "81240a5ecbdb4bf4b95be91075971c6a:b6ed0abd2389464b8d5d1abbe6c23fab:f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 24,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f36e90c3-90ed-475a-9a2c-125f9472af62",
  "team_id": "81240a5ecbdb4bf4b95be91075971c6a:b6ed0abd2389464b8d5d1abbe6c23fab:f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 15,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "158ac617-67c3-4cf6-93d6-68230e76a6ad",
  "team_id": "81240a5ecbdb4bf4b95be91075971c6a:b6ed0abd2389464b8d5d1abbe6c23fab:f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 28,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "33bd1bb1-f22a-4e82-9304-793bd8fd446f",
  "team_id": "81240a5ecbdb4bf4b95be91075971c6a:b6ed0abd2389464b8d5d1abbe6c23fab:f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 23,
  "time_alive": 986,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d3defa8-b40c-4d46-a565-d884342348bf",
  "team_id": "81240a5ecbdb4bf4b95be91075971c6a:b6ed0abd2389464b8d5d1abbe6c23fab:f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 24,
  "time_alive": 740,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a023c93-ec73-42d0-afbf-eabeff726ee8",
  "team_id": "81240a5ecbdb4bf4b95be91075971c6a:b6ed0abd2389464b8d5d1abbe6c23fab:f8a0bfebc3454aa1a528176a5d334b9d",
  "placement": 28,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 2,
  "time_alive": 1468,
  "elims": 21,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1488,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1493,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 3,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 17,
  "time_alive": 1214,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 5,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 30,
  "time_alive": 768,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 2,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 1,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 8,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 6,
  "time_alive": 1380,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 4,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 4,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 11,
  "time_alive": 1360,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 7,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 8,
  "time_alive": 1410,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 3,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 6,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 11,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 4,
  "time_alive": 1429,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 11,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 2,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 26,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 2,
  "time_alive": 1488,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 15,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 8,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 1,
  "time_alive": 1492,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 3,
  "time_alive": 1467,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 7,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 8,
  "time_alive": 1414,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 13,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 14,
  "time_alive": 1315,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 4,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 6,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 14,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 14,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 25,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 7,
  "time_alive": 1392,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 2,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35:bdfe79bcfca241fb98d42e9a4dd5ef8f:d7947383d34b4a1c8dab936994c1865a",
  "placement": 4,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 1,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 21,
  "time_alive": 1072,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 28,
  "time_alive": 384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 19,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 12,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "2aa411ab16c6483a887362a908072571:d8ca26922d214605bef69e9feb5b5b09:f31580f92ba748d28655884e58b4b86b",
  "placement": 1,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 11,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 7,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 22,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 10,
  "time_alive": 1373,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 10,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "10cbfcc22bdf45afabc7e63ef05fff58:7b866cbea7a747e4b621d2834139ab58:c92714f0458649a3998dc5d920cb73bf",
  "placement": 15,
  "time_alive": 1340,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 3,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 2,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 21,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "4266aab245ce409f9be70f5c390f55cc:7e2bf67b311b4e9b85455bce4d88b2b1:913af324f92d41f5b6c0d88a02b2a4d3",
  "placement": 16,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 10,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 8,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 23,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 3,
  "time_alive": 1470,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "67a797909b094027a078ead3a7e579d9:e42f54702e5648a0a95dbc4e3708c701:f2d582251fed4874bf4c4a4ecb9a0f75",
  "placement": 18,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 12,
  "time_alive": 1340,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 5,
  "time_alive": 1459,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 7,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 28,
  "time_alive": 724,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "222923b8d36f49aa84803ba2d25822af:54f006cf73cf4751bb7d42bd04fd8b9f:b27d369e71f04d2bb6433664a24c8718",
  "placement": 14,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 9,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 19,
  "time_alive": 1133,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 10,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 12,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 14,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "72657a43cf974cf0a13f36d46331e88d:7845af4f047747cf820d9df436382237:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 9,
  "time_alive": 1381,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 13,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 3,
  "time_alive": 1481,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 17,
  "time_alive": 1268,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 13,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 29,
  "time_alive": 584,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "7a2c2f6cb8b3444dad7f4418da6fa110:dec8522a04c24954af5b450bcf10fedf:f669ecc68e304d748af143e28e0387a5",
  "placement": 30,
  "time_alive": 283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "3eceffa1b080465da37c5aae7ad00ddc:4f4002197c8b46f5a940861ceb96ffed:9a21769dba95485ba8f90f990a41948b",
  "placement": 15,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "3eceffa1b080465da37c5aae7ad00ddc:4f4002197c8b46f5a940861ceb96ffed:9a21769dba95485ba8f90f990a41948b",
  "placement": 23,
  "time_alive": 977,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "3eceffa1b080465da37c5aae7ad00ddc:4f4002197c8b46f5a940861ceb96ffed:9a21769dba95485ba8f90f990a41948b",
  "placement": 12,
  "time_alive": 1361,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "3eceffa1b080465da37c5aae7ad00ddc:4f4002197c8b46f5a940861ceb96ffed:9a21769dba95485ba8f90f990a41948b",
  "placement": 30,
  "time_alive": 452,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "3eceffa1b080465da37c5aae7ad00ddc:4f4002197c8b46f5a940861ceb96ffed:9a21769dba95485ba8f90f990a41948b",
  "placement": 6,
  "time_alive": 1410,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "3eceffa1b080465da37c5aae7ad00ddc:4f4002197c8b46f5a940861ceb96ffed:9a21769dba95485ba8f90f990a41948b",
  "placement": 21,
  "time_alive": 1059,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 8,
  "time_alive": 1363,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 31,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 14,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 9,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 33,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "065e9fbe90c64b119185967580b932b1:24d6558a589343e0b148014e925df2ff:efcb3e576540466f926b74f93fca5fb5",
  "placement": 29,
  "time_alive": 377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "34d30c4b19bd4548b4d46ae2b5332022:8e9764a1b7ea46a99a6881cfcbbb3f71:b4bc842afd70436780bb949874fba96a",
  "placement": 25,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "34d30c4b19bd4548b4d46ae2b5332022:8e9764a1b7ea46a99a6881cfcbbb3f71:b4bc842afd70436780bb949874fba96a",
  "placement": 17,
  "time_alive": 1309,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "34d30c4b19bd4548b4d46ae2b5332022:8e9764a1b7ea46a99a6881cfcbbb3f71:b4bc842afd70436780bb949874fba96a",
  "placement": 6,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "34d30c4b19bd4548b4d46ae2b5332022:8e9764a1b7ea46a99a6881cfcbbb3f71:b4bc842afd70436780bb949874fba96a",
  "placement": 24,
  "time_alive": 1099,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "34d30c4b19bd4548b4d46ae2b5332022:8e9764a1b7ea46a99a6881cfcbbb3f71:b4bc842afd70436780bb949874fba96a",
  "placement": 22,
  "time_alive": 1098,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "34d30c4b19bd4548b4d46ae2b5332022:8e9764a1b7ea46a99a6881cfcbbb3f71:b4bc842afd70436780bb949874fba96a",
  "placement": 11,
  "time_alive": 1354,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 29,
  "time_alive": 408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 16,
  "time_alive": 1318,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 32,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 31,
  "time_alive": 180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 15,
  "time_alive": 1296,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48:7b2516c47db348cda12b482cef9e2841:ad36f2ba80f54b50a793e185c18183d6",
  "placement": 22,
  "time_alive": 911,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 24,
  "time_alive": 1051,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 12,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 29,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 6,
  "time_alive": 1400,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "34d31538545a43259ef45a52ee1a81d2:f02c7fbbeb8c4c8da7ad7feecb56869b:f540d4d752174b598f4b9f85b99e4384",
  "placement": 16,
  "time_alive": 1295,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 21,
  "time_alive": 1105,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 22,
  "time_alive": 996,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 9,
  "time_alive": 1400,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 25,
  "time_alive": 1020,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 9,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "31c59c0efce74f5e8ce5a60e5e6e2121:36b9b6a40ac04f59a007d847cec50ca2:98bcf853fc2b4d538fd67dd76fbca562",
  "placement": 28,
  "time_alive": 417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 18,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 18,
  "time_alive": 1155,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 5,
  "time_alive": 1471,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 22,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 13,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "32170fb9d7a447e0ad98e629b8305e96:4c475807527b4295a184365b9e28887c:6af5953d88744df0bff93e570fe11541",
  "placement": 24,
  "time_alive": 556,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0:24b33ade27704fde92f2ba934280cbda:29b37225302643cf93550f76fcd385a7",
  "placement": 5,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0:24b33ade27704fde92f2ba934280cbda:29b37225302643cf93550f76fcd385a7",
  "placement": 29,
  "time_alive": 808,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0:24b33ade27704fde92f2ba934280cbda:29b37225302643cf93550f76fcd385a7",
  "placement": 24,
  "time_alive": 1098,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0:24b33ade27704fde92f2ba934280cbda:29b37225302643cf93550f76fcd385a7",
  "placement": 16,
  "time_alive": 1295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0:24b33ade27704fde92f2ba934280cbda:29b37225302643cf93550f76fcd385a7",
  "placement": 18,
  "time_alive": 1212,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "1ecd29ab69f542fb82ef434d6fc57aa0:24b33ade27704fde92f2ba934280cbda:29b37225302643cf93550f76fcd385a7",
  "placement": 23,
  "time_alive": 604,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988:e8f30fc629964852bbb9e93cafb3223d:f193d5de5af749009166c76694d75f7a",
  "placement": 28,
  "time_alive": 509,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988:e8f30fc629964852bbb9e93cafb3223d:f193d5de5af749009166c76694d75f7a",
  "placement": 9,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988:e8f30fc629964852bbb9e93cafb3223d:f193d5de5af749009166c76694d75f7a",
  "placement": 20,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988:e8f30fc629964852bbb9e93cafb3223d:f193d5de5af749009166c76694d75f7a",
  "placement": 15,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988:e8f30fc629964852bbb9e93cafb3223d:f193d5de5af749009166c76694d75f7a",
  "placement": 5,
  "time_alive": 1424,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988:e8f30fc629964852bbb9e93cafb3223d:f193d5de5af749009166c76694d75f7a",
  "placement": 19,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 17,
  "time_alive": 1201,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 20,
  "time_alive": 1080,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 27,
  "time_alive": 587,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 5,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 23,
  "time_alive": 1079,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 12,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "2dae191c62e64f588c09cb9e43911f69:c06b4c19266e4ef39d32b5a6ee097b81:cc4d1aa45f054862bce80f325d4bc3aa",
  "placement": 10,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "2dae191c62e64f588c09cb9e43911f69:c06b4c19266e4ef39d32b5a6ee097b81:cc4d1aa45f054862bce80f325d4bc3aa",
  "placement": 28,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "2dae191c62e64f588c09cb9e43911f69:c06b4c19266e4ef39d32b5a6ee097b81:cc4d1aa45f054862bce80f325d4bc3aa",
  "placement": 18,
  "time_alive": 1249,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "2dae191c62e64f588c09cb9e43911f69:c06b4c19266e4ef39d32b5a6ee097b81:cc4d1aa45f054862bce80f325d4bc3aa",
  "placement": 17,
  "time_alive": 1287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "2dae191c62e64f588c09cb9e43911f69:c06b4c19266e4ef39d32b5a6ee097b81:cc4d1aa45f054862bce80f325d4bc3aa",
  "placement": 31,
  "time_alive": 504,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "2dae191c62e64f588c09cb9e43911f69:c06b4c19266e4ef39d32b5a6ee097b81:cc4d1aa45f054862bce80f325d4bc3aa",
  "placement": 13,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "1becb33c0df9424dbb664244230acea5:c5486c22d77c47c7a4a5a19cd0837442:c58cf0a1604249ae8ec63be132aa28a2",
  "placement": 30,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "1becb33c0df9424dbb664244230acea5:c5486c22d77c47c7a4a5a19cd0837442:c58cf0a1604249ae8ec63be132aa28a2",
  "placement": 32,
  "time_alive": 282,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "1becb33c0df9424dbb664244230acea5:c5486c22d77c47c7a4a5a19cd0837442:c58cf0a1604249ae8ec63be132aa28a2",
  "placement": 23,
  "time_alive": 1137,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "1becb33c0df9424dbb664244230acea5:c5486c22d77c47c7a4a5a19cd0837442:c58cf0a1604249ae8ec63be132aa28a2",
  "placement": 27,
  "time_alive": 645,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "1becb33c0df9424dbb664244230acea5:c5486c22d77c47c7a4a5a19cd0837442:c58cf0a1604249ae8ec63be132aa28a2",
  "placement": 25,
  "time_alive": 897,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "1becb33c0df9424dbb664244230acea5:c5486c22d77c47c7a4a5a19cd0837442:c58cf0a1604249ae8ec63be132aa28a2",
  "placement": 27,
  "time_alive": 505,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 22,
  "time_alive": 1073,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 26,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 31,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 26,
  "time_alive": 909,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 32,
  "time_alive": 446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "7afbd48019474b448c0ab66317c16336:9f5340a9fe76409aad5ebe1f6961cfed:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 10,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 20,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 13,
  "time_alive": 1327,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 19,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 21,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 30,
  "time_alive": 543,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "6addae54563c43b783c2b4b6b3603f8f:9c0545b3fe2d48d39896263cf7a1d6a2:d2b2996236bc460eb5259462fa2f9cb7",
  "placement": 32,
  "time_alive": 122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 27,
  "time_alive": 686,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 11,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 16,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 20,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 27,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "0268c274c2cf4971948f33d2519d344f:656c4949ff7d4bae900907908daa3b19:96bc09f8dbb44ed4acdd1857e6ee8611",
  "placement": 25,
  "time_alive": 552,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "04af3cf298cf47d99315bfb4e2b2621a:46cb9d693af244fab6ec8b7479fdddb9:f706845267be4304afbeecb5a32ef719",
  "placement": 16,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "04af3cf298cf47d99315bfb4e2b2621a:46cb9d693af244fab6ec8b7479fdddb9:f706845267be4304afbeecb5a32ef719",
  "placement": 15,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "04af3cf298cf47d99315bfb4e2b2621a:46cb9d693af244fab6ec8b7479fdddb9:f706845267be4304afbeecb5a32ef719",
  "placement": 21,
  "time_alive": 1196,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "04af3cf298cf47d99315bfb4e2b2621a:46cb9d693af244fab6ec8b7479fdddb9:f706845267be4304afbeecb5a32ef719",
  "placement": 29,
  "time_alive": 595,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "04af3cf298cf47d99315bfb4e2b2621a:46cb9d693af244fab6ec8b7479fdddb9:f706845267be4304afbeecb5a32ef719",
  "placement": 24,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "04af3cf298cf47d99315bfb4e2b2621a:46cb9d693af244fab6ec8b7479fdddb9:f706845267be4304afbeecb5a32ef719",
  "placement": 31,
  "time_alive": 138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "127693b99f374de0bd1b323fddb53703:50be2c20325c41b1bf7f59e9660e3793:5277fa137aec4aa89277da0fd1632776",
  "placement": 19,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "127693b99f374de0bd1b323fddb53703:50be2c20325c41b1bf7f59e9660e3793:5277fa137aec4aa89277da0fd1632776",
  "placement": 24,
  "time_alive": 936,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "127693b99f374de0bd1b323fddb53703:50be2c20325c41b1bf7f59e9660e3793:5277fa137aec4aa89277da0fd1632776",
  "placement": 30,
  "time_alive": 287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "127693b99f374de0bd1b323fddb53703:50be2c20325c41b1bf7f59e9660e3793:5277fa137aec4aa89277da0fd1632776",
  "placement": 28,
  "time_alive": 624,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "127693b99f374de0bd1b323fddb53703:50be2c20325c41b1bf7f59e9660e3793:5277fa137aec4aa89277da0fd1632776",
  "placement": 19,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "127693b99f374de0bd1b323fddb53703:50be2c20325c41b1bf7f59e9660e3793:5277fa137aec4aa89277da0fd1632776",
  "placement": 20,
  "time_alive": 1304,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 23,
  "time_alive": 1052,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 33,
  "time_alive": 79,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 33,
  "time_alive": 90,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 32,
  "time_alive": 116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 26,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "b984b028171848a79479394a29b908f7:d36636b8487e46dc9c522ea82ff7b0d2:dab693c19832457abd119fae900fcc81",
  "placement": 17,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d11636-fd57-4c5a-8d8f-eb7232b34c72",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 31,
  "time_alive": 138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e624e14-08c9-40cf-867e-87446d22d62b",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 25,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4d1a0d8b-86d7-4a6f-a4f9-c8d865deb56c",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 26,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac47ad3c-c78c-4ad9-bc8a-2d506d35736c",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 18,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e7b3d3d-902a-45f7-bd7f-1e2145f861f9",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 20,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa528fa5-3d9d-4648-bc62-3514a76fc517",
  "team_id": "7b348caae35e454599b90055f241f5d0:8fcfc2e4e8df4181acf06a34816f8779:e134ac2645844a66a207a4fddcd68acb",
  "placement": 26,
  "time_alive": 524,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 24,
  "time_alive": 1030,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1416,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 1,
  "time_alive": 1474,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 22,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1466,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1474,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 22,
  "time_alive": 1096,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:9c0aebee92fc4471ab8101bbe12a1b0d:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1450,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 11,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 11,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 7,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 3,
  "time_alive": 1442,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 8,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 2,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 13,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 8,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 1,
  "time_alive": 1432,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "2fe98e6b52f14e7e904456092af67627:4b06f770475842899a84a33b6189dd11:b9783bde21354df2815a6a00cbea4ffa",
  "placement": 2,
  "time_alive": 1488,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 3,
  "time_alive": 1480,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 23,
  "time_alive": 1168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 2,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 19,
  "time_alive": 1245,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 3,
  "time_alive": 1487,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 9,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 26,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 5,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 4,
  "time_alive": 1440,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 15,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 3,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "2710f646cfbf41048672df6131ad7662:769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28",
  "placement": 6,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 12,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 28,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 5,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 20,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 1,
  "time_alive": 1464,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1496,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 3,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1516,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 15,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 17,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1492,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1450,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 15,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 7,
  "time_alive": 1415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 23,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 4,
  "time_alive": 1462,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 12,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 8,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 21,
  "time_alive": 917,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 5,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 14,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 14,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 4,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 10,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 13,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 10,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 6,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 6,
  "time_alive": 1388,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1419,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 22,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 17,
  "time_alive": 1241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 1,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 10,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 19,
  "time_alive": 1201,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 5,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 9,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 23,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 14,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 22,
  "time_alive": 966,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 28,
  "time_alive": 808,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:b3555c6b364c4a52b307a1348dec797b:be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 1,
  "time_alive": 1488,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 21,
  "time_alive": 1229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 27,
  "time_alive": 838,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 3,
  "time_alive": 1441,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 18,
  "time_alive": 1291,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 15,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 6,
  "time_alive": 1405,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 1,
  "time_alive": 1496,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 20,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 31,
  "time_alive": 284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 13,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 18,
  "time_alive": 1178,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3:5c62918b3d0c41fca96ba84258286021:9942822dd25b409591a936ed3eb4c1ac",
  "placement": 14,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 11,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 5,
  "time_alive": 1426,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 6,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 16,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 11,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 17,
  "time_alive": 1291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 1,
  "time_alive": 1484,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 9,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 18,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 21,
  "time_alive": 1104,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "7c90ba6b9cee4bc9b78c0fac5438211e:ddf2ecd4c2d647e6a0189afe6d6131bb:ed6f083bd77444298cb6ead58a4279b4",
  "placement": 19,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 23,
  "time_alive": 1140,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 12,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 20,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 12,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 2,
  "time_alive": 1503,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 7,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 12,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 17,
  "time_alive": 1271,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 5,
  "time_alive": 1439,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 16,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 25,
  "time_alive": 1028,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "5762ae04cdab4741a09bc7c0ac49e21f:b5f3a8feaf884b12911669ecd126bfe8:dd1f2310a93b4b3693acdb437f60b289",
  "placement": 8,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 6,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 18,
  "time_alive": 1253,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 23,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 16,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 15,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 3,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 25,
  "time_alive": 958,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 12,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 1,
  "time_alive": 1525,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 10,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:3750138919cb423db8deeffebe52c4ed:7731bc6b134745c58efeb10e37f81ef0",
  "placement": 12,
  "time_alive": 1348,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 2,
  "time_alive": 1450,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 12,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 22,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 29,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1389,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 8,
  "time_alive": 1393,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 19,
  "time_alive": 1211,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 24,
  "time_alive": 946,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 13,
  "time_alive": 1315,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "85692ee96a4249a3a516cc044111d00a:d2fe75ba95fa4295a0c53a015824c0a9:df13c1a64151456c8dec92058736b8b0",
  "placement": 4,
  "time_alive": 1476,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 20,
  "time_alive": 1295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 16,
  "time_alive": 1302,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 26,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 17,
  "time_alive": 1309,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 32,
  "time_alive": 155,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 25,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 11,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 21,
  "time_alive": 1161,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 1,
  "time_alive": 1474,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 7,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 9,
  "time_alive": 1356,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:46fb9d209462445dbad93f48188f1fed:ec18095be9b140cf86cc94dce830eeb0",
  "placement": 11,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 10,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 32,
  "time_alive": 193,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 4,
  "time_alive": 1434,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 9,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 30,
  "time_alive": 472,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 25,
  "time_alive": 814,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 31,
  "time_alive": 613,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 7,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 14,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "1bf60fbc1af943bf8d53f5826557062a:3e60b1793f1b4628afbe7d30756cabb1:ce4020852bb44e09a776cdf57828c790",
  "placement": 5,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 25,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 13,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 31,
  "time_alive": 302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 8,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 9,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 16,
  "time_alive": 1301,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 7,
  "time_alive": 1454,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 26,
  "time_alive": 943,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 20,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 26,
  "time_alive": 782,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 16,
  "time_alive": 1284,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "231ef7fe16c14fd483303852f1e85673:51ec0da0a5834f3c9871268d4751ec51:8e23f72779504413a72713166f0dbb48",
  "placement": 3,
  "time_alive": 1483,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 9,
  "time_alive": 1397,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 3,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 19,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 6,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 14,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 21,
  "time_alive": 1132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 23,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 14,
  "time_alive": 1317,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 27,
  "time_alive": 741,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 11,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 29,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "1291c8ba9a6c4d758455dbe1be432ea1:38f0303c44834ec48d1e37505d49a98e:8de4ce322454462b802bef2ca7f60595",
  "placement": 10,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 24,
  "time_alive": 1137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 7,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 7,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 3,
  "time_alive": 1449,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 26,
  "time_alive": 942,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 28,
  "time_alive": 817,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 20,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 7,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 21,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 5,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 14,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:8f008e74e8624a18ab99ef9757866d56:f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 13,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 6,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 20,
  "time_alive": 1224,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 25,
  "time_alive": 958,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 25,
  "time_alive": 948,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 4,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 14,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 6,
  "time_alive": 1454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 13,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 17,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 29,
  "time_alive": 391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 4,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 9,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 13,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 9,
  "time_alive": 1394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 22,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 13,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 6,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 20,
  "time_alive": 1227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 13,
  "time_alive": 1374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "667926bd-c785-44cd-a3dd-660b2060f87c",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 11,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "271d6556-09cd-4a92-b948-8484328ec59b",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 6,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ddf49d0-d97b-4d19-8cb0-082e3de76e87",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 2,
  "time_alive": 1525,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57bc5a19-1f18-41a0-8a0d-b64e87c1941f",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 26,
  "time_alive": 1009,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f0dc3628-2ba0-49a5-9b09-37e89772fd2d",
  "team_id": "1ece06930db54235a28c59cdf9ea30d6:394908d5888c4e598687f7f4f43594ef:82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 16,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1bc376a9-ffa0-4a32-8a92-cf180149ea08",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 18,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ec50f56a-bbed-4794-a6e1-57b828898e14",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 10,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "459be51f-0669-4e31-8de1-0b9794d22ad1",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 9,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ba876b91-61ae-4eb6-8d99-328f58297653",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 2,
  "time_alive": 1474,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2dc719e6-d817-4b70-a1c5-b9ddfba9d905",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 27,
  "time_alive": 909,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aac0e75-dd19-4b5f-a981-1556042e96e2",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 12,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "48e0e000-133c-47b4-bdcc-ea61bd500747",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0:f3ff66a0c2d946bb84ae3b0b6a185c9e:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 14,
  "time_alive": 1338,
  "elims": 2,
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
    