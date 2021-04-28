const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0887e73a09b642ac8b814619480419b9:578a9c9f052d42ce9c34815466a09e6b:79914ff80ee04c8a9d6bd3318526bf10",
  "placement": 10,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0887e73a09b642ac8b814619480419b9:578a9c9f052d42ce9c34815466a09e6b:79914ff80ee04c8a9d6bd3318526bf10",
  "placement": 19,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0887e73a09b642ac8b814619480419b9:578a9c9f052d42ce9c34815466a09e6b:79914ff80ee04c8a9d6bd3318526bf10",
  "placement": 16,
  "time_alive": 1311,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:2d6902991a294e4b8d19762436815191:e89063a11df7478c90772749c7005252",
  "placement": 24,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:2d6902991a294e4b8d19762436815191:e89063a11df7478c90772749c7005252",
  "placement": 30,
  "time_alive": 501,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:2d6902991a294e4b8d19762436815191:e89063a11df7478c90772749c7005252",
  "placement": 14,
  "time_alive": 1299,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:2d6902991a294e4b8d19762436815191:e89063a11df7478c90772749c7005252",
  "placement": 9,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:2d6902991a294e4b8d19762436815191:e89063a11df7478c90772749c7005252",
  "placement": 28,
  "time_alive": 564,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:2d6902991a294e4b8d19762436815191:e89063a11df7478c90772749c7005252",
  "placement": 13,
  "time_alive": 1353,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 29,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 11,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 22,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 13,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 8,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0c7b4796e8d7457695a933194fc95823:1bfd869378c542b4b5931566b93e6a1d:b4dd2c18e86649d58fd7d5480c192304",
  "placement": 28,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:81eec67550b6425db58871ffd8e540e0:85a5032476cb49419f5806eba2e2012c",
  "placement": 15,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:81eec67550b6425db58871ffd8e540e0:85a5032476cb49419f5806eba2e2012c",
  "placement": 26,
  "time_alive": 934,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:81eec67550b6425db58871ffd8e540e0:85a5032476cb49419f5806eba2e2012c",
  "placement": 28,
  "time_alive": 710,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:81eec67550b6425db58871ffd8e540e0:85a5032476cb49419f5806eba2e2012c",
  "placement": 22,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:81eec67550b6425db58871ffd8e540e0:85a5032476cb49419f5806eba2e2012c",
  "placement": 17,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:81eec67550b6425db58871ffd8e540e0:85a5032476cb49419f5806eba2e2012c",
  "placement": 5,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 31,
  "time_alive": 764,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 22,
  "time_alive": 1111,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 33,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 27,
  "time_alive": 462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 29,
  "time_alive": 348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "02ee8a35009b4e3c8a930eb7ce48e74a:716f5f5b59c2448b8561a7753c16e1e4:f73ec798a07b406db8c615fa0f85bef2",
  "placement": 25,
  "time_alive": 415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "8437dc0be9b540ac9293acf5244c1d4d:d626627ba62646e1b3ca374176e2c7c4:e0d4a38d70fb41ecb00acbae999c10a3",
  "placement": 33,
  "time_alive": 69,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "8437dc0be9b540ac9293acf5244c1d4d:d626627ba62646e1b3ca374176e2c7c4:e0d4a38d70fb41ecb00acbae999c10a3",
  "placement": 33,
  "time_alive": 61,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "8437dc0be9b540ac9293acf5244c1d4d:d626627ba62646e1b3ca374176e2c7c4:e0d4a38d70fb41ecb00acbae999c10a3",
  "placement": 27,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "8437dc0be9b540ac9293acf5244c1d4d:d626627ba62646e1b3ca374176e2c7c4:e0d4a38d70fb41ecb00acbae999c10a3",
  "placement": 6,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "8437dc0be9b540ac9293acf5244c1d4d:d626627ba62646e1b3ca374176e2c7c4:e0d4a38d70fb41ecb00acbae999c10a3",
  "placement": 31,
  "time_alive": 162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "8437dc0be9b540ac9293acf5244c1d4d:d626627ba62646e1b3ca374176e2c7c4:e0d4a38d70fb41ecb00acbae999c10a3",
  "placement": 31,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "6c06ee3c03ba4e55a862a1677f0c20d3:7595259de5c74114b72280bd7f56d29a:b457af658aed4999936b9e2a7be8ba0c",
  "placement": 13,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "6c06ee3c03ba4e55a862a1677f0c20d3:7595259de5c74114b72280bd7f56d29a:b457af658aed4999936b9e2a7be8ba0c",
  "placement": 32,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "6c06ee3c03ba4e55a862a1677f0c20d3:7595259de5c74114b72280bd7f56d29a:b457af658aed4999936b9e2a7be8ba0c",
  "placement": 32,
  "time_alive": 248,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "6c06ee3c03ba4e55a862a1677f0c20d3:7595259de5c74114b72280bd7f56d29a:b457af658aed4999936b9e2a7be8ba0c",
  "placement": 32,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "6c06ee3c03ba4e55a862a1677f0c20d3:7595259de5c74114b72280bd7f56d29a:b457af658aed4999936b9e2a7be8ba0c",
  "placement": 32,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "6c06ee3c03ba4e55a862a1677f0c20d3:7595259de5c74114b72280bd7f56d29a:b457af658aed4999936b9e2a7be8ba0c",
  "placement": 27,
  "time_alive": 360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "916b578b078f479899969be16b181113:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 32,
  "time_alive": 572,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "916b578b078f479899969be16b181113:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 31,
  "time_alive": 433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "916b578b078f479899969be16b181113:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 26,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "916b578b078f479899969be16b181113:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 18,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "916b578b078f479899969be16b181113:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 26,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "916b578b078f479899969be16b181113:ac17c6dd419d4cc3b47c911710de1802:fe03469a5c0e4393bbd69bb68805055e",
  "placement": 30,
  "time_alive": 231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "54c6d5d42cb44843957cafa4e6cda59f:74933fe724a9427faabb0a8e2dea2484:9ee0a85b8eff48db8e3bc9ab81a33eb6",
  "placement": 17,
  "time_alive": 1277,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "54c6d5d42cb44843957cafa4e6cda59f:74933fe724a9427faabb0a8e2dea2484:9ee0a85b8eff48db8e3bc9ab81a33eb6",
  "placement": 27,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "54c6d5d42cb44843957cafa4e6cda59f:74933fe724a9427faabb0a8e2dea2484:9ee0a85b8eff48db8e3bc9ab81a33eb6",
  "placement": 31,
  "time_alive": 291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "54c6d5d42cb44843957cafa4e6cda59f:74933fe724a9427faabb0a8e2dea2484:9ee0a85b8eff48db8e3bc9ab81a33eb6",
  "placement": 28,
  "time_alive": 364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "54c6d5d42cb44843957cafa4e6cda59f:74933fe724a9427faabb0a8e2dea2484:9ee0a85b8eff48db8e3bc9ab81a33eb6",
  "placement": 20,
  "time_alive": 1162,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "54c6d5d42cb44843957cafa4e6cda59f:74933fe724a9427faabb0a8e2dea2484:9ee0a85b8eff48db8e3bc9ab81a33eb6",
  "placement": 32,
  "time_alive": 115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16:77138ad38fda4be5a3ba116753c74f60:a28b4b88ccf94bd69dd87d196305849f",
  "placement": 21,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16:77138ad38fda4be5a3ba116753c74f60:a28b4b88ccf94bd69dd87d196305849f",
  "placement": 24,
  "time_alive": 1097,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16:77138ad38fda4be5a3ba116753c74f60:a28b4b88ccf94bd69dd87d196305849f",
  "placement": 21,
  "time_alive": 1129,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16:77138ad38fda4be5a3ba116753c74f60:a28b4b88ccf94bd69dd87d196305849f",
  "placement": 16,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16:77138ad38fda4be5a3ba116753c74f60:a28b4b88ccf94bd69dd87d196305849f",
  "placement": 24,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0e0eb9a0053d4764a213087fd4e10b16:77138ad38fda4be5a3ba116753c74f60:a28b4b88ccf94bd69dd87d196305849f",
  "placement": 23,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "3464be16ca1d4c9f8e5cef3c1e08112a:6149fbe6e14d4eceac20d249c97b63d8:cf8e2ecfe0034d22b32dac3316e9c470",
  "placement": 23,
  "time_alive": 1058,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "3464be16ca1d4c9f8e5cef3c1e08112a:6149fbe6e14d4eceac20d249c97b63d8:cf8e2ecfe0034d22b32dac3316e9c470",
  "placement": 28,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "3464be16ca1d4c9f8e5cef3c1e08112a:6149fbe6e14d4eceac20d249c97b63d8:cf8e2ecfe0034d22b32dac3316e9c470",
  "placement": 29,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "3464be16ca1d4c9f8e5cef3c1e08112a:6149fbe6e14d4eceac20d249c97b63d8:cf8e2ecfe0034d22b32dac3316e9c470",
  "placement": 23,
  "time_alive": 1012,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "3464be16ca1d4c9f8e5cef3c1e08112a:6149fbe6e14d4eceac20d249c97b63d8:cf8e2ecfe0034d22b32dac3316e9c470",
  "placement": 18,
  "time_alive": 1274,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "3464be16ca1d4c9f8e5cef3c1e08112a:6149fbe6e14d4eceac20d249c97b63d8:cf8e2ecfe0034d22b32dac3316e9c470",
  "placement": 21,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:206ac7cc2183469ea107a7974e385dfb:9e7fdc187642467d9d2c800feb5bd013",
  "placement": 26,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:206ac7cc2183469ea107a7974e385dfb:9e7fdc187642467d9d2c800feb5bd013",
  "placement": 21,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:206ac7cc2183469ea107a7974e385dfb:9e7fdc187642467d9d2c800feb5bd013",
  "placement": 24,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "597c2c4e-f0be-40eb-aa8c-d657aec52369",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:206ac7cc2183469ea107a7974e385dfb:9e7fdc187642467d9d2c800feb5bd013",
  "placement": 21,
  "time_alive": 1102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5fe3e4b7-6288-444a-8ee7-9928afc26be7",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:206ac7cc2183469ea107a7974e385dfb:9e7fdc187642467d9d2c800feb5bd013",
  "placement": 30,
  "time_alive": 225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "101a0d1b-c7ae-404f-ae47-8715cb229b1d",
  "team_id": "0378ffa6c29148d5ae9442b8241dedee:206ac7cc2183469ea107a7974e385dfb:9e7fdc187642467d9d2c800feb5bd013",
  "placement": 24,
  "time_alive": 965,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c85b4eee-b502-4868-bbcf-388759d59b14",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3:57246fe8d19b4482a58986703a0e392d:9bcf5a4986e34433bec656f3ee017818",
  "placement": 25,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73d18d4d-da79-481b-89bb-e13f9036144a",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3:57246fe8d19b4482a58986703a0e392d:9bcf5a4986e34433bec656f3ee017818",
  "placement": 19,
  "time_alive": 1286,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc8c99e0-a336-4cd5-9d86-efecc1afe187",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3:57246fe8d19b4482a58986703a0e392d:9bcf5a4986e34433bec656f3ee017818",
  "placement": 30,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 25,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 1,
  "time_alive": 1462,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 29,
  "time_alive": 791,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 1,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 13,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 13,
  "time_alive": 1346,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 4,
  "time_alive": 1452,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 4,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 13,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 2,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 2,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 5,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 7,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 4,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 12,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 4,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 6,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 9,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 6,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 11,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 5,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 28,
  "time_alive": 722,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 3,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 17,
  "time_alive": 1272,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 2,
  "time_alive": 1462,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 16,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 12,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 16,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 3,
  "time_alive": 1439,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 21,
  "time_alive": 1086,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 4,
  "time_alive": 1462,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 17,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 10,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 11,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 24,
  "time_alive": 1089,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 15,
  "time_alive": 1317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 7,
  "time_alive": 1438,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 1,
  "time_alive": 1477,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 17,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 15,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 8,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 10,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 8,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 2,
  "time_alive": 1477,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 19,
  "time_alive": 1267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 21,
  "time_alive": 1103,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 21,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 8,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 29,
  "time_alive": 336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 11,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 1,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 28,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 19,
  "time_alive": 1195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 2,
  "time_alive": 1487,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 16,
  "time_alive": 1296,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 6,
  "time_alive": 1411,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 18,
  "time_alive": 1274,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 3,
  "time_alive": 1453,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 11,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 14,
  "time_alive": 1325,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 27,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 24,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 33,
  "time_alive": 98,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 19,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 28,
  "time_alive": 839,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 17,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 3,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 3,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 14,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 2,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 27,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 3,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 17,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 29,
  "time_alive": 601,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 25,
  "time_alive": 939,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 18,
  "time_alive": 1270,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 20,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 7,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 6,
  "time_alive": 1448,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 20,
  "time_alive": 1224,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 9,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 1,
  "time_alive": 1495,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 25,
  "time_alive": 968,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 30,
  "time_alive": 687,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 18,
  "time_alive": 1264,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 5,
  "time_alive": 1426,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 16,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 12,
  "time_alive": 1348,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 10,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 12,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 33,
  "time_alive": 81,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 15,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 8,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 8,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 5,
  "time_alive": 1431,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 6,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 20,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 21,
  "time_alive": 1206,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6:fd6e15a59d4443939e426df36251cb62",
  "placement": 30,
  "time_alive": 500,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 27,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 13,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 16,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 19,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 9,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "090dd00f00e44c45bd9257da07fd2dda:38512244f5a4483e88afe56492e4709c:4f3bb4147df4456292d8e58437fb7f4c",
  "placement": 4,
  "time_alive": 1392,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 14,
  "time_alive": 1325,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 17,
  "time_alive": 1305,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 25,
  "time_alive": 885,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 22,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 8,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "04dff78ae94142ae82d8b8681d6b584c:77742956832445d4a67f515ff4ed014e:8529af26be4147f18d74eceec9838934",
  "placement": 24,
  "time_alive": 972,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 26,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 15,
  "time_alive": 1326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 5,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 21,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 10,
  "time_alive": 1361,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 5,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 6,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 33,
  "time_alive": 785,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 9,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 13,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 25,
  "time_alive": 1103,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "3b4679738dee4ffcb720ddb97b018bea:67a20dab018d422f978f6bc785542264:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 26,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 24,
  "time_alive": 959,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 23,
  "time_alive": 1102,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 24,
  "time_alive": 970,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 26,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 7,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 7,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "178af59bd05943d8a844f01436af6c95:6b71744010f5425ca0e993bb2d3c3d5f:ec2ccaa6afd4449fbf100966fb6451e2",
  "placement": 10,
  "time_alive": 1360,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "178af59bd05943d8a844f01436af6c95:6b71744010f5425ca0e993bb2d3c3d5f:ec2ccaa6afd4449fbf100966fb6451e2",
  "placement": 18,
  "time_alive": 1233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "178af59bd05943d8a844f01436af6c95:6b71744010f5425ca0e993bb2d3c3d5f:ec2ccaa6afd4449fbf100966fb6451e2",
  "placement": 26,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "178af59bd05943d8a844f01436af6c95:6b71744010f5425ca0e993bb2d3c3d5f:ec2ccaa6afd4449fbf100966fb6451e2",
  "placement": 9,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "178af59bd05943d8a844f01436af6c95:6b71744010f5425ca0e993bb2d3c3d5f:ec2ccaa6afd4449fbf100966fb6451e2",
  "placement": 12,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "178af59bd05943d8a844f01436af6c95:6b71744010f5425ca0e993bb2d3c3d5f:ec2ccaa6afd4449fbf100966fb6451e2",
  "placement": 22,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 13,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 9,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 22,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 25,
  "time_alive": 910,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 27,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 11,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "1910bf1c703046139f3834e255bf11e3:9d4d3d116def4f878231ec906df18f44:a4e64a77774647dbab11c13814bb20c2",
  "placement": 23,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "1910bf1c703046139f3834e255bf11e3:9d4d3d116def4f878231ec906df18f44:a4e64a77774647dbab11c13814bb20c2",
  "placement": 12,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "1910bf1c703046139f3834e255bf11e3:9d4d3d116def4f878231ec906df18f44:a4e64a77774647dbab11c13814bb20c2",
  "placement": 20,
  "time_alive": 1113,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "1910bf1c703046139f3834e255bf11e3:9d4d3d116def4f878231ec906df18f44:a4e64a77774647dbab11c13814bb20c2",
  "placement": 10,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "1910bf1c703046139f3834e255bf11e3:9d4d3d116def4f878231ec906df18f44:a4e64a77774647dbab11c13814bb20c2",
  "placement": 26,
  "time_alive": 995,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "1910bf1c703046139f3834e255bf11e3:9d4d3d116def4f878231ec906df18f44:a4e64a77774647dbab11c13814bb20c2",
  "placement": 21,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 7,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 16,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 23,
  "time_alive": 975,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 28,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 14,
  "time_alive": 1314,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "6b31bf3cb1f248e89b94857c19ff7d44:b3c5e13103eb4c849ebfe2ba0151489f:d0c57ea49bd64838966a616d43e8422b",
  "placement": 28,
  "time_alive": 775,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "725733a144bf4cc7911ceb1aba92354e:8cff001494214d57a787c74b642536d9:d88db8b9d9cf4b6c973b3bd8e467a10f",
  "placement": 22,
  "time_alive": 992,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "725733a144bf4cc7911ceb1aba92354e:8cff001494214d57a787c74b642536d9:d88db8b9d9cf4b6c973b3bd8e467a10f",
  "placement": 31,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "725733a144bf4cc7911ceb1aba92354e:8cff001494214d57a787c74b642536d9:d88db8b9d9cf4b6c973b3bd8e467a10f",
  "placement": 18,
  "time_alive": 1280,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "725733a144bf4cc7911ceb1aba92354e:8cff001494214d57a787c74b642536d9:d88db8b9d9cf4b6c973b3bd8e467a10f",
  "placement": 24,
  "time_alive": 962,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "725733a144bf4cc7911ceb1aba92354e:8cff001494214d57a787c74b642536d9:d88db8b9d9cf4b6c973b3bd8e467a10f",
  "placement": 30,
  "time_alive": 453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "725733a144bf4cc7911ceb1aba92354e:8cff001494214d57a787c74b642536d9:d88db8b9d9cf4b6c973b3bd8e467a10f",
  "placement": 32,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "3c7bb11e804446b29674eab428cff2e9:6e7bde41d99c450b88c4c6577e73ac50:ee601e65ebdf4c8aa9845835e129c1f7",
  "placement": 31,
  "time_alive": 222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "3c7bb11e804446b29674eab428cff2e9:6e7bde41d99c450b88c4c6577e73ac50:ee601e65ebdf4c8aa9845835e129c1f7",
  "placement": 14,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "3c7bb11e804446b29674eab428cff2e9:6e7bde41d99c450b88c4c6577e73ac50:ee601e65ebdf4c8aa9845835e129c1f7",
  "placement": 28,
  "time_alive": 810,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "3c7bb11e804446b29674eab428cff2e9:6e7bde41d99c450b88c4c6577e73ac50:ee601e65ebdf4c8aa9845835e129c1f7",
  "placement": 15,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "3c7bb11e804446b29674eab428cff2e9:6e7bde41d99c450b88c4c6577e73ac50:ee601e65ebdf4c8aa9845835e129c1f7",
  "placement": 19,
  "time_alive": 1256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "3c7bb11e804446b29674eab428cff2e9:6e7bde41d99c450b88c4c6577e73ac50:ee601e65ebdf4c8aa9845835e129c1f7",
  "placement": 20,
  "time_alive": 1201,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 30,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 30,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 31,
  "time_alive": 417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 11,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 31,
  "time_alive": 405,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "a39887890b4b4041b35f47b2cb60b248:b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d",
  "placement": 29,
  "time_alive": 726,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:cd1fb7243641436fac1e6d6b52e4aa04:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 29,
  "time_alive": 458,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:cd1fb7243641436fac1e6d6b52e4aa04:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:cd1fb7243641436fac1e6d6b52e4aa04:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 32,
  "time_alive": 274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:cd1fb7243641436fac1e6d6b52e4aa04:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 30,
  "time_alive": 318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:cd1fb7243641436fac1e6d6b52e4aa04:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 23,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:cd1fb7243641436fac1e6d6b52e4aa04:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 15,
  "time_alive": 1316,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "7acec9b50df6480398027d71731aabbf:a057dd6749934c46ab5eb2333c497c63:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 22,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "7acec9b50df6480398027d71731aabbf:a057dd6749934c46ab5eb2333c497c63:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 19,
  "time_alive": 1120,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "7acec9b50df6480398027d71731aabbf:a057dd6749934c46ab5eb2333c497c63:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 31,
  "time_alive": 287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "7acec9b50df6480398027d71731aabbf:a057dd6749934c46ab5eb2333c497c63:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 32,
  "time_alive": 392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "7acec9b50df6480398027d71731aabbf:a057dd6749934c46ab5eb2333c497c63:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 31,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "0e877b2b52304dcbbf444d2c38e0596c:ae9ccf2ff14547ebb9dd6891c62cbfcf:bdcb404ba9c2483590e9f0480642db9f",
  "placement": 32,
  "time_alive": 97,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "0e877b2b52304dcbbf444d2c38e0596c:ae9ccf2ff14547ebb9dd6891c62cbfcf:bdcb404ba9c2483590e9f0480642db9f",
  "placement": 26,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "0e877b2b52304dcbbf444d2c38e0596c:ae9ccf2ff14547ebb9dd6891c62cbfcf:bdcb404ba9c2483590e9f0480642db9f",
  "placement": 33,
  "time_alive": 152,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "0e877b2b52304dcbbf444d2c38e0596c:ae9ccf2ff14547ebb9dd6891c62cbfcf:bdcb404ba9c2483590e9f0480642db9f",
  "placement": 23,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "0e877b2b52304dcbbf444d2c38e0596c:ae9ccf2ff14547ebb9dd6891c62cbfcf:bdcb404ba9c2483590e9f0480642db9f",
  "placement": 18,
  "time_alive": 1269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "0e877b2b52304dcbbf444d2c38e0596c:ae9ccf2ff14547ebb9dd6891c62cbfcf:bdcb404ba9c2483590e9f0480642db9f",
  "placement": 23,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e94215f-c46b-4d63-a606-2925b1b832fe",
  "team_id": "9d955b71cb274157a476c1a91d3a29fc:a5c1b68b016a468aba6c27592993d384:db7dce16a40043bea74a66d9dfb0bb17",
  "placement": 20,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6995f656-1345-4a29-b0d3-4ab09786510f",
  "team_id": "9d955b71cb274157a476c1a91d3a29fc:a5c1b68b016a468aba6c27592993d384:db7dce16a40043bea74a66d9dfb0bb17",
  "placement": 32,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f76477f-bb05-4b1e-aca9-547230b706a2",
  "team_id": "9d955b71cb274157a476c1a91d3a29fc:a5c1b68b016a468aba6c27592993d384:db7dce16a40043bea74a66d9dfb0bb17",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1cb36538-bf65-46d4-9f2b-2b140ba26ea6",
  "team_id": "9d955b71cb274157a476c1a91d3a29fc:a5c1b68b016a468aba6c27592993d384:db7dce16a40043bea74a66d9dfb0bb17",
  "placement": 32,
  "time_alive": 214,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "367d260a-9884-4c9d-8f55-345a64a6b7fa",
  "team_id": "9d955b71cb274157a476c1a91d3a29fc:a5c1b68b016a468aba6c27592993d384:db7dce16a40043bea74a66d9dfb0bb17",
  "placement": 33,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c91c2-c744-4abc-89f6-692a625a6d19",
  "team_id": "9d955b71cb274157a476c1a91d3a29fc:a5c1b68b016a468aba6c27592993d384:db7dce16a40043bea74a66d9dfb0bb17",
  "placement": 27,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 23,
  "time_alive": 1076,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 1,
  "time_alive": 1489,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 1,
  "time_alive": 1476,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 30,
  "time_alive": 360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 13,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 10,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 13,
  "time_alive": 1293,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 16,
  "time_alive": 1242,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1449,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 17,
  "time_alive": 1291,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 1,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 23,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 5,
  "time_alive": 1435,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 3,
  "time_alive": 1435,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 17,
  "time_alive": 1313,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 23,
  "time_alive": 832,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 15,
  "time_alive": 1285,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 7,
  "time_alive": 1414,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 7,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 12,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 1,
  "time_alive": 1455,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 25,
  "time_alive": 791,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 3,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 15,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 3,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 23,
  "time_alive": 912,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 11,
  "time_alive": 1350,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 14,
  "time_alive": 1292,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 9,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 24,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 9,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 28,
  "time_alive": 655,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 1,
  "time_alive": 1430,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 20,
  "time_alive": 1212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 17,
  "time_alive": 1314,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 8,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 5,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 16,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 2,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 33,
  "time_alive": 239,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 5,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 11,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 1,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 14,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 19,
  "time_alive": 996,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 11,
  "time_alive": 1296,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 12,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 23,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 8,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 9,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 6,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 10,
  "time_alive": 1306,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 2,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 4,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 16,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 25,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 16,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 26,
  "time_alive": 980,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 6,
  "time_alive": 1425,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 22,
  "time_alive": 1108,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 7,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 22,
  "time_alive": 1058,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 3,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 2,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 4,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 21,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 27,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 15,
  "time_alive": 1326,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 29,
  "time_alive": 278,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 4,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 16,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 18,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 10,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 11,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 4,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 9,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 8,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 6,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 24,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 5,
  "time_alive": 1411,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 28,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 28,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 2,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 6,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 6,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 15,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 6,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 21,
  "time_alive": 1192,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 11,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 20,
  "time_alive": 1174,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 12,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 5,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 27,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 13,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 17,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 26,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89:7fba179e9e5b4c5bb268731818f14568:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 8,
  "time_alive": 1386,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "37bac976e19841fdb679af8e4c068cba:64b9b28ccdc0482abfaac6266306248c:64e242302a9744588ff50a33b497ed21",
  "placement": 24,
  "time_alive": 1067,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "37bac976e19841fdb679af8e4c068cba:64b9b28ccdc0482abfaac6266306248c:64e242302a9744588ff50a33b497ed21",
  "placement": 24,
  "time_alive": 1093,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "37bac976e19841fdb679af8e4c068cba:64b9b28ccdc0482abfaac6266306248c:64e242302a9744588ff50a33b497ed21",
  "placement": 12,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "37bac976e19841fdb679af8e4c068cba:64b9b28ccdc0482abfaac6266306248c:64e242302a9744588ff50a33b497ed21",
  "placement": 19,
  "time_alive": 1283,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "37bac976e19841fdb679af8e4c068cba:64b9b28ccdc0482abfaac6266306248c:64e242302a9744588ff50a33b497ed21",
  "placement": 2,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "37bac976e19841fdb679af8e4c068cba:64b9b28ccdc0482abfaac6266306248c:64e242302a9744588ff50a33b497ed21",
  "placement": 18,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 12,
  "time_alive": 1296,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 11,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 28,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 13,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 7,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "40c8cd7106d642cf996ae35a0b1e1ff6:a64ece3f836c49e6a8c212844b6272f7:df05948988584f2f8ac965491f6897d7",
  "placement": 22,
  "time_alive": 909,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 7,
  "time_alive": 1345,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 19,
  "time_alive": 1214,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 29,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 15,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 18,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "1569f1cb435649faa34a9fbc4f26a67a:430e8af1e054452b962a940bdca8ab29:4b5bb03fa6c4475a908c04e46d0a67da",
  "placement": 13,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "04cf90b1afb24b47a9389a57345911cd:05cfc7a52ce14a93abcafc345ab44c89:9b03f02c403241e195cc678f0bbeec22",
  "placement": 30,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "04cf90b1afb24b47a9389a57345911cd:05cfc7a52ce14a93abcafc345ab44c89:9b03f02c403241e195cc678f0bbeec22",
  "placement": 26,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "04cf90b1afb24b47a9389a57345911cd:05cfc7a52ce14a93abcafc345ab44c89:9b03f02c403241e195cc678f0bbeec22",
  "placement": 9,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "04cf90b1afb24b47a9389a57345911cd:05cfc7a52ce14a93abcafc345ab44c89:9b03f02c403241e195cc678f0bbeec22",
  "placement": 21,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "04cf90b1afb24b47a9389a57345911cd:05cfc7a52ce14a93abcafc345ab44c89:9b03f02c403241e195cc678f0bbeec22",
  "placement": 4,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "04cf90b1afb24b47a9389a57345911cd:05cfc7a52ce14a93abcafc345ab44c89:9b03f02c403241e195cc678f0bbeec22",
  "placement": 20,
  "time_alive": 954,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 8,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 20,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 27,
  "time_alive": 868,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 18,
  "time_alive": 1318,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 31,
  "time_alive": 311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "bd1f0758ba1a482c9045f77cf10f6bc9:cde8a39469be455995d7c79a7389d03d:d78e9008751d4cad9186525e045f20f3",
  "placement": 31,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "1935c920ee644d918a14b6a39332d2fd:2bfc4025160943798d56d4a4248b264a:9b86e30f81304fd4b24df5afdb2a1861",
  "placement": 29,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "1935c920ee644d918a14b6a39332d2fd:2bfc4025160943798d56d4a4248b264a:9b86e30f81304fd4b24df5afdb2a1861",
  "placement": 29,
  "time_alive": 505,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "1935c920ee644d918a14b6a39332d2fd:2bfc4025160943798d56d4a4248b264a:9b86e30f81304fd4b24df5afdb2a1861",
  "placement": 15,
  "time_alive": 1287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "1935c920ee644d918a14b6a39332d2fd:2bfc4025160943798d56d4a4248b264a:9b86e30f81304fd4b24df5afdb2a1861",
  "placement": 31,
  "time_alive": 354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "1935c920ee644d918a14b6a39332d2fd:2bfc4025160943798d56d4a4248b264a:9b86e30f81304fd4b24df5afdb2a1861",
  "placement": 8,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "1935c920ee644d918a14b6a39332d2fd:2bfc4025160943798d56d4a4248b264a:9b86e30f81304fd4b24df5afdb2a1861",
  "placement": 9,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 25,
  "time_alive": 1025,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 10,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 10,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 29,
  "time_alive": 367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 12,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962:530039b311924e889067b973aba24c91:db5f3582caed47b18d3bd1a69571e944",
  "placement": 27,
  "time_alive": 536,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875:baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01",
  "placement": 18,
  "time_alive": 1266,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875:baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01",
  "placement": 30,
  "time_alive": 365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875:baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01",
  "placement": 30,
  "time_alive": 438,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875:baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01",
  "placement": 25,
  "time_alive": 912,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875:baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01",
  "placement": 24,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875:baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01",
  "placement": 7,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "5cdab22548b94909bcccc68207509099:ac2bde67b4804f7f8ea654869d5b0d59:e0c8bef622a14cb1a01e73aadac56f5e",
  "placement": 16,
  "time_alive": 1284,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "5cdab22548b94909bcccc68207509099:ac2bde67b4804f7f8ea654869d5b0d59:e0c8bef622a14cb1a01e73aadac56f5e",
  "placement": 22,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "5cdab22548b94909bcccc68207509099:ac2bde67b4804f7f8ea654869d5b0d59:e0c8bef622a14cb1a01e73aadac56f5e",
  "placement": 32,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "5cdab22548b94909bcccc68207509099:ac2bde67b4804f7f8ea654869d5b0d59:e0c8bef622a14cb1a01e73aadac56f5e",
  "placement": 33,
  "time_alive": 174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "5cdab22548b94909bcccc68207509099:ac2bde67b4804f7f8ea654869d5b0d59:e0c8bef622a14cb1a01e73aadac56f5e",
  "placement": 5,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "1e55a259df8c437aa663147f182a44ba:928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 31,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "1e55a259df8c437aa663147f182a44ba:928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 18,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "1e55a259df8c437aa663147f182a44ba:928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 19,
  "time_alive": 1146,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "1e55a259df8c437aa663147f182a44ba:928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 22,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "1e55a259df8c437aa663147f182a44ba:928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 10,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "1e55a259df8c437aa663147f182a44ba:928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da",
  "placement": 14,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "69e7fb307e4f42b5926b2c11a0456a8f:a0991c391a8e4c818b2539e012427409:fdc0ece97fc54005be696de0a88f30c1",
  "placement": 17,
  "time_alive": 1268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "69e7fb307e4f42b5926b2c11a0456a8f:a0991c391a8e4c818b2539e012427409:fdc0ece97fc54005be696de0a88f30c1",
  "placement": 28,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "69e7fb307e4f42b5926b2c11a0456a8f:a0991c391a8e4c818b2539e012427409:fdc0ece97fc54005be696de0a88f30c1",
  "placement": 17,
  "time_alive": 1177,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "69e7fb307e4f42b5926b2c11a0456a8f:a0991c391a8e4c818b2539e012427409:fdc0ece97fc54005be696de0a88f30c1",
  "placement": 14,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "69e7fb307e4f42b5926b2c11a0456a8f:a0991c391a8e4c818b2539e012427409:fdc0ece97fc54005be696de0a88f30c1",
  "placement": 21,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "69e7fb307e4f42b5926b2c11a0456a8f:a0991c391a8e4c818b2539e012427409:fdc0ece97fc54005be696de0a88f30c1",
  "placement": 21,
  "time_alive": 951,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "01942d1f1b984089ab6905224de6966a:12b0be7a834949b99c047ceeb329ef10:475e3b66dc5d453aa66aa577c7b4f6ea",
  "placement": 21,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "01942d1f1b984089ab6905224de6966a:12b0be7a834949b99c047ceeb329ef10:475e3b66dc5d453aa66aa577c7b4f6ea",
  "placement": 32,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "01942d1f1b984089ab6905224de6966a:12b0be7a834949b99c047ceeb329ef10:475e3b66dc5d453aa66aa577c7b4f6ea",
  "placement": 33,
  "time_alive": 61,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "01942d1f1b984089ab6905224de6966a:12b0be7a834949b99c047ceeb329ef10:475e3b66dc5d453aa66aa577c7b4f6ea",
  "placement": 32,
  "time_alive": 227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "01942d1f1b984089ab6905224de6966a:12b0be7a834949b99c047ceeb329ef10:475e3b66dc5d453aa66aa577c7b4f6ea",
  "placement": 30,
  "time_alive": 327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "01942d1f1b984089ab6905224de6966a:12b0be7a834949b99c047ceeb329ef10:475e3b66dc5d453aa66aa577c7b4f6ea",
  "placement": 26,
  "time_alive": 578,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "4ced82ddc8f54096bf9289c42b2796e9:9f2c6a7eca2e436f8077c6991f9d46c8:b7c51a44f6024d2492601adea342a986",
  "placement": 19,
  "time_alive": 1261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "4ced82ddc8f54096bf9289c42b2796e9:9f2c6a7eca2e436f8077c6991f9d46c8:b7c51a44f6024d2492601adea342a986",
  "placement": 14,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "4ced82ddc8f54096bf9289c42b2796e9:9f2c6a7eca2e436f8077c6991f9d46c8:b7c51a44f6024d2492601adea342a986",
  "placement": 31,
  "time_alive": 428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "4ced82ddc8f54096bf9289c42b2796e9:9f2c6a7eca2e436f8077c6991f9d46c8:b7c51a44f6024d2492601adea342a986",
  "placement": 20,
  "time_alive": 1179,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "4ced82ddc8f54096bf9289c42b2796e9:9f2c6a7eca2e436f8077c6991f9d46c8:b7c51a44f6024d2492601adea342a986",
  "placement": 27,
  "time_alive": 764,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "4ced82ddc8f54096bf9289c42b2796e9:9f2c6a7eca2e436f8077c6991f9d46c8:b7c51a44f6024d2492601adea342a986",
  "placement": 33,
  "time_alive": 83,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f:98d72ef801074b75a4e4e56b3121b371:db0ef823c1494f95a243e37580797dfd",
  "placement": 22,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f:98d72ef801074b75a4e4e56b3121b371:db0ef823c1494f95a243e37580797dfd",
  "placement": 13,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f:98d72ef801074b75a4e4e56b3121b371:db0ef823c1494f95a243e37580797dfd",
  "placement": 26,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f:98d72ef801074b75a4e4e56b3121b371:db0ef823c1494f95a243e37580797dfd",
  "placement": 23,
  "time_alive": 988,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f:98d72ef801074b75a4e4e56b3121b371:db0ef823c1494f95a243e37580797dfd",
  "placement": 19,
  "time_alive": 1262,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "6843ac0865ce4de9a36973c877ea9a5f:98d72ef801074b75a4e4e56b3121b371:db0ef823c1494f95a243e37580797dfd",
  "placement": 24,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "9417760048124849be98a20360a2d423:ad1e8f2eb7c44d8fa6feff81f9a0f06c:f69ba17b96de40cf937d264f052f6652",
  "placement": 32,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "9417760048124849be98a20360a2d423:ad1e8f2eb7c44d8fa6feff81f9a0f06c:f69ba17b96de40cf937d264f052f6652",
  "placement": 31,
  "time_alive": 149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "9417760048124849be98a20360a2d423:ad1e8f2eb7c44d8fa6feff81f9a0f06c:f69ba17b96de40cf937d264f052f6652",
  "placement": 20,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "9417760048124849be98a20360a2d423:ad1e8f2eb7c44d8fa6feff81f9a0f06c:f69ba17b96de40cf937d264f052f6652",
  "placement": 28,
  "time_alive": 486,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "9417760048124849be98a20360a2d423:ad1e8f2eb7c44d8fa6feff81f9a0f06c:f69ba17b96de40cf937d264f052f6652",
  "placement": 29,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "9417760048124849be98a20360a2d423:ad1e8f2eb7c44d8fa6feff81f9a0f06c:f69ba17b96de40cf937d264f052f6652",
  "placement": 30,
  "time_alive": 249,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41f0fd25-5d96-4f1d-8b4d-b676216daad9",
  "team_id": "0dd99c6e267b4394978913da58c51f18:3bc17dad4a9c4d9e827ac2f4536fcd7e:8f90ec5536064629bdebd9f4e0c0a2d5",
  "placement": 27,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3481d9a8-4864-47db-8ee9-a618a6a5bc54",
  "team_id": "0dd99c6e267b4394978913da58c51f18:3bc17dad4a9c4d9e827ac2f4536fcd7e:8f90ec5536064629bdebd9f4e0c0a2d5",
  "placement": 25,
  "time_alive": 1068,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2df689ae-ea1e-447c-84e8-a8c9dd15de8c",
  "team_id": "0dd99c6e267b4394978913da58c51f18:3bc17dad4a9c4d9e827ac2f4536fcd7e:8f90ec5536064629bdebd9f4e0c0a2d5",
  "placement": 25,
  "time_alive": 954,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd6a23b-0ca6-4f5d-a26f-03807e1b7dc0",
  "team_id": "0dd99c6e267b4394978913da58c51f18:3bc17dad4a9c4d9e827ac2f4536fcd7e:8f90ec5536064629bdebd9f4e0c0a2d5",
  "placement": 26,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b227b38e-55fc-4911-b80d-69d8852f3ad0",
  "team_id": "0dd99c6e267b4394978913da58c51f18:3bc17dad4a9c4d9e827ac2f4536fcd7e:8f90ec5536064629bdebd9f4e0c0a2d5",
  "placement": 32,
  "time_alive": 189,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "944e147e-d9c2-4ab7-a23d-411e4af2dd39",
  "team_id": "0dd99c6e267b4394978913da58c51f18:3bc17dad4a9c4d9e827ac2f4536fcd7e:8f90ec5536064629bdebd9f4e0c0a2d5",
  "placement": 32,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 27,
  "time_alive": 867,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 6,
  "time_alive": 1483,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 12,
  "time_alive": 1307,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1451,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 11,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 4,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 9,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 28,
  "time_alive": 744,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 1,
  "time_alive": 1511,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 20,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 7,
  "time_alive": 1390,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 10,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 21,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 1,
  "time_alive": 1466,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 15,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1382,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:a2e1d4f0b63f4fd1911b8b8a583b18e9:f6d565f6647242ac8735227af015e4d8",
  "placement": 11,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 6,
  "time_alive": 1404,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 8,
  "time_alive": 1435,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 3,
  "time_alive": 1504,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 4,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 17,
  "time_alive": 1278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 1,
  "time_alive": 1512,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 6,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 7,
  "time_alive": 1375,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 27,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 20,
  "time_alive": 1137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 5,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "336ab331628044619724361709cd23bf:b58a836baa0a4ed6ad9d20ff811e5f61:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 22,
  "time_alive": 1061,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 1,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 1,
  "time_alive": 1498,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 16,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 9,
  "time_alive": 1358,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 10,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 8,
  "time_alive": 1460,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 20,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 15,
  "time_alive": 1315,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 8,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 7,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 8,
  "time_alive": 1355,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "359979f50bc84344b87ce2e0054ecf61:7e9dad67bb6f4239aaf3ceecdcf373ea:c07d728876a2486bb6ac06dd45b22505",
  "placement": 21,
  "time_alive": 1074,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 23,
  "time_alive": 973,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 11,
  "time_alive": 1381,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 13,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 24,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 9,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 9,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 5,
  "time_alive": 1391,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 16,
  "time_alive": 1307,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 6,
  "time_alive": 1450,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 17,
  "time_alive": 1265,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391:ddcad38f85c245b785c8812e7592a6a7:efd4b17204c346aaa1672add49529a6c",
  "placement": 8,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 16,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 5,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 17,
  "time_alive": 1315,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 19,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 26,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 23,
  "time_alive": 1073,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 1,
  "time_alive": 1478,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 10,
  "time_alive": 1338,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 9,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 19,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 1,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 3,
  "time_alive": 1437,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 15,
  "time_alive": 1315,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 18,
  "time_alive": 1313,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 9,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 6,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 22,
  "time_alive": 1090,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 4,
  "time_alive": 1496,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 18,
  "time_alive": 1182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 2,
  "time_alive": 1466,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 25,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 28,
  "time_alive": 811,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 9,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 5,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 4,
  "time_alive": 1421,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 14,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 2,
  "time_alive": 1511,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 30,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 15,
  "time_alive": 1285,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 3,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 10,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 33,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 7,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 18,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 33,
  "time_alive": 86,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "04803795ae414a6da3efbe0b19ce1313:665973174ecc4ce1aecbf0141184222f:b8320a4fb7b8469fb81c0df31527636d",
  "placement": 32,
  "time_alive": 79,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 19,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 9,
  "time_alive": 1432,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 25,
  "time_alive": 995,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1506,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 9,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 26,
  "time_alive": 918,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 13,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 4,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 21,
  "time_alive": 1086,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "8723f8c420c44c9f883c13401217f948:a5976cd43f5b467cb23b170a2b443d28:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 4,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 24,
  "time_alive": 1075,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 4,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 23,
  "time_alive": 1081,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 5,
  "time_alive": 1455,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 2,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 18,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 6,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 23,
  "time_alive": 1028,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 15,
  "time_alive": 1295,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:a048d652928747a5ae9661c8e6a935c5:b3956d8d751347f280d599eb69a1f292",
  "placement": 14,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 8,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 13,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 10,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 16,
  "time_alive": 1290,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 21,
  "time_alive": 1093,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 7,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 14,
  "time_alive": 1308,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 19,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 17,
  "time_alive": 1197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 6,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "447fb739f8484d5c923c21614ed63d86:c3abda5df33146afa899e622772a8004:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 13,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 31,
  "time_alive": 806,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 6,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 30,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 31,
  "time_alive": 798,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 8,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 6,
  "time_alive": 1478,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 32,
  "time_alive": 90,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 12,
  "time_alive": 1325,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 4,
  "time_alive": 1393,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 12,
  "time_alive": 1336,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 4,
  "time_alive": 1372,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "9b0c50977b5441b4a155e10b0d710036:9f687e479cad4be18dad868bea874c20:f301f6da9f93441b8551420349d172d8",
  "placement": 26,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 17,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 27,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 28,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 11,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 4,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 2,
  "time_alive": 1512,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 23,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 13,
  "time_alive": 1325,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 5,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 13,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 25,
  "time_alive": 827,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "1c88ff7b044f4b67b44e2b046f3435a9:4ed9f7264a364adc951f0a8c2a8abe7b:da589d3557224582b9094375290bf0ed",
  "placement": 1,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 12,
  "time_alive": 1323,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 4,
  "time_alive": 1502,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 15,
  "time_alive": 1294,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 3,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 19,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 16,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 14,
  "time_alive": 1320,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 8,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 30,
  "time_alive": 210,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:cbf435c90da64e9eb090b573e7b7a88f:d26316ae99e14fce917372902d441098",
  "placement": 31,
  "time_alive": 180,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 14,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 3,
  "time_alive": 1487,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 18,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 14,
  "time_alive": 1298,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 5,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 13,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 19,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 17,
  "time_alive": 1286,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 21,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 11,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 26,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "205afc681a324533907d65f72933f116:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 10,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 21,
  "time_alive": 1120,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 31,
  "time_alive": 513,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 14,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 27,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 12,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 26,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 11,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 10,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 13,
  "time_alive": 1294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "7bb03ea08e16445bbe0784104bffa43f:bfd93dc74d74404ab57e10eb7ecdb3be:c732e7e2160847b493ca8b61e80c8652",
  "placement": 2,
  "time_alive": 1460,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 5,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 25,
  "time_alive": 923,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 8,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 3,
  "time_alive": 1477,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 25,
  "time_alive": 908,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 27,
  "time_alive": 449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 15,
  "time_alive": 1304,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 30,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 20,
  "time_alive": 1114,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 31,
  "time_alive": 512,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 29,
  "time_alive": 379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "22958035fa5b4c09a1a0b476128481be:6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07",
  "placement": 30,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 28,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 12,
  "time_alive": 1398,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 22,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 21,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 11,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 5,
  "time_alive": 1494,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 7,
  "time_alive": 1423,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 8,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 19,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 9,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 18,
  "time_alive": 1256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "245cd346263c435cbc7d230afa466fe5:3b06ba4fc85242a5ae5e66abbd98ea08:f9543eabd4bc42b0acf763889726be7b",
  "placement": 28,
  "time_alive": 624,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 11,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 11,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 21,
  "time_alive": 1148,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 26,
  "time_alive": 873,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 12,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 12,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 3,
  "time_alive": 1452,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 22,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 18,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 30,
  "time_alive": 564,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 27,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "0610088d19ef47d68de8b7505a059d07:69e3ed4958264bf3a9f75f91609ff366:6cfd89d465da42f188d375bdf26d99c4",
  "placement": 17,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 20,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 21,
  "time_alive": 1062,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 13,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 2,
  "time_alive": 1506,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 20,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 16,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 13,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 28,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 10,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 22,
  "time_alive": 1122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 7,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:5f41699036514527a2d5c9a4ab7ac7fa:60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 15,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 25,
  "time_alive": 1074,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 26,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 24,
  "time_alive": 1042,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 7,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 6,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 15,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 17,
  "time_alive": 1277,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 23,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 2,
  "time_alive": 1450,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 24,
  "time_alive": 1095,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 23,
  "time_alive": 1060,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:829b509f26964205acf10f463a743a14:86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 19,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 7,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 15,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 15,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 10,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 27,
  "time_alive": 812,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 29,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 16,
  "time_alive": 1298,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 24,
  "time_alive": 1042,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 24,
  "time_alive": 951,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 2,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 15,
  "time_alive": 1281,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:6fbe6a71b2b74e6e99bdba9affaacaf6:8fdbc27d0bc14de0956576deebb0c3d8",
  "placement": 25,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 33,
  "time_alive": 127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 32,
  "time_alive": 130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 31,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 8,
  "time_alive": 1375,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 18,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 21,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 28,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 11,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 31,
  "time_alive": 126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 32,
  "time_alive": 392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 24,
  "time_alive": 854,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "052beb06c89e4bcd8514ed5a6fca011b:3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427",
  "placement": 6,
  "time_alive": 1396,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 30,
  "time_alive": 816,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 22,
  "time_alive": 1028,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 27,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 25,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 22,
  "time_alive": 1101,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 25,
  "time_alive": 956,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 3,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 12,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 14,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 20,
  "time_alive": 1101,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 7,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 2,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 18,
  "time_alive": 1251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 13,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 28,
  "time_alive": 348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 31,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 29,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 22,
  "time_alive": 1076,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 16,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 28,
  "time_alive": 735,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "420df92347464bd0add659245e0a3529:f5e61b9a6e2a4f2aa9fce74a0b5860e7:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 18,
  "time_alive": 1177,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 10,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 30,
  "time_alive": 631,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 29,
  "time_alive": 625,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 33,
  "time_alive": 364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 19,
  "time_alive": 1117,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 31,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 30,
  "time_alive": 138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 20,
  "time_alive": 1119,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 6,
  "time_alive": 1366,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 21,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 10,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "4c2823ee44f04153894573603591d1be:aae1a871aea74ba191a4e16891d44fc0:e7e52f33c5e5415dbc453cb281e3f877",
  "placement": 29,
  "time_alive": 426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 9,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 7,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 19,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 925,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 28,
  "time_alive": 422,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 20,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 21,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 28,
  "time_alive": 725,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 5,
  "time_alive": 1466,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 19,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "0601d03341f44403995a457466cf3bdf:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 22,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 24,
  "time_alive": 959,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 5,
  "time_alive": 1496,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 29,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 25,
  "time_alive": 951,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 2,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 27,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 22,
  "time_alive": 1083,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "d8819e67905e434a9bf2794556e71a4b:d94a396d14584886bbab0cb6dce96fa8:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 20,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 32,
  "time_alive": 286,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 20,
  "time_alive": 1080,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 12,
  "time_alive": 1346,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 23,
  "time_alive": 946,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 30,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 32,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 8,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 31,
  "time_alive": 132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 32,
  "time_alive": 55,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 27,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 31,
  "time_alive": 204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:b47ad8c4d637496eba7cafb8f081107d",
  "placement": 16,
  "time_alive": 1283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 29,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 29,
  "time_alive": 735,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 20,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 17,
  "time_alive": 1277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 23,
  "time_alive": 1058,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 24,
  "time_alive": 1053,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 4,
  "time_alive": 1440,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 18,
  "time_alive": 1281,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 17,
  "time_alive": 1235,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 26,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "168aec015e944eac9272b013ea1bac1b:3e34b8fe61e54207bafe49e9acb73811:58c8049560164e6380fab50acdef2099",
  "placement": 32,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 26,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 17,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 7,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 22,
  "time_alive": 1016,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 29,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 30,
  "time_alive": 167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 27,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 32,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 30,
  "time_alive": 444,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 25,
  "time_alive": 1079,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 12,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 12,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 18,
  "time_alive": 1297,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "671328ec-7c11-48e7-8974-5e2e7a681f88",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 19,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 28,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 14,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 26,
  "time_alive": 674,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 5,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 9,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 29,
  "time_alive": 713,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 29,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 16,
  "time_alive": 1277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "4ecec591f33a44ada4fd085b552e62f2:4fbef5245a864cf781c9fae9caf2819e:e75833933bdb44939cc755561bc49714",
  "placement": 23,
  "time_alive": 1059,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67a88aed-ab73-4c06-9bfb-63607f6076c2",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 23,
  "time_alive": 1098,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c61f8de2-6a66-4b6a-911b-c2af62a24023",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 32,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4aa6b167-1dbd-4288-8b50-f9a203c2d529",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 32,
  "time_alive": 397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4df8d053-f951-442f-9c93-6a1b67afeda1",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 16,
  "time_alive": 1285,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7b50cd49-a6ec-4466-b266-824ab609b1ee",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 17,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2433f2c8-4b67-432c-a4fd-ea48543cc1f3",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 29,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6f51676c-40fa-4195-8865-de59a8d8318c",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 25,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ab75cfe-c54b-48ad-a2cc-40b5d69ae1cb",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 26,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ac97491-6e8b-4140-b13d-5575743cfd10",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 23,
  "time_alive": 1101,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55e9f4c3-e897-44fb-8e6a-e67d48ad70b4",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 14,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ab0d91c1-842e-421c-a6b0-b1548f2f6a6a",
  "team_id": "2af77443864341f9b71938566417f8d7:30cbf67e615449379898faac08a0e4a9:370336ba87ff49ab9b5aec44f0b78c78",
  "placement": 27,
  "time_alive": 766,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "67b3814db2114185a61e3189f6e64ba7:69edf025fb4f4ceaa21581e11ef92899:721f5da4872b43dea30fc4e4c30006cc",
  "placement": 1,
  "time_alive": 1497,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0:9dc0178c0a9741228092c2a4bac2a1a9:d170b35fb5534767a3a2bab2116dfd47",
  "placement": 2,
  "time_alive": 1497,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:299fd10f3f8842468153e1a9eca81b32:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 3,
  "time_alive": 1483,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "401da08468794b50b0d956eaea8116fd:89543e835f194f7282d02252c53d3c20:c3be9b547ca448caa0961fbddc290bae",
  "placement": 4,
  "time_alive": 1467,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:3bde7dc87a8344df9c048081834ec367",
  "placement": 7,
  "time_alive": 1444,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3:898aa1d15d3644c0b4b93db4d58b5866:b80dff9d35104ce393c388c3be299964",
  "placement": 10,
  "time_alive": 1400,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "20a185bb314f48208365e66815812ee9:24224a137c3e417584103af1f5f83598:ce65be929e05415d88be3cd9b79e93d3",
  "placement": 8,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 11,
  "time_alive": 1397,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "669d255a8f3b425b844697fe9257c43d:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 13,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "5b4686cebaa24d31a8e2686f59254d36:986d718c088d4dcc8220784432d359a5:b45dda5630a04a28ba16abd2ee501a67",
  "placement": 5,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:a3dd7923e3b4400091159ecdceb0c449:e78be14b45ca4c78806554acfb04c118",
  "placement": 6,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "5e9fc0646e5b445b9e3bbec65e305809:8425aa001a81455b837aeef950c7b280:b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 15,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "362094acb2f9460eaec47b035b351f0d:9252349b219b463d9eb26d8946f357bf:e772d6ae502e48eb8d121601ec4e2c53",
  "placement": 18,
  "time_alive": 1289,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:41143f5b6776452a8f75fdf1c95748c3:6f46854557e5445c8dffb8f391afa041",
  "placement": 9,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:36c43327deea4841bd7cadbfe662d8b6:8599b6242e214acb93d0ab757b0b0413",
  "placement": 14,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 12,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "3dc4c28afca548feaef558c4a12fdc42:4d1110a62f9e4abfaa30dab356883159:d505ce11eb2a42d4ab20e176bddda236",
  "placement": 19,
  "time_alive": 1213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "53d1efffbb0f4b6ea3cc29fcd59b9353:9a9517742738457e9afc21a70172023d:c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 20,
  "time_alive": 1130,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "20be3f62b2c54cb7aeffbb83ecff6254:8ddc2fe29a594a3c85c1539ea085d328:d40f519e0dd44a74906da9c13359357a",
  "placement": 21,
  "time_alive": 1084,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf:9f6f91b9fdd548a7a7447dc0d851a5ae:fa2483b6eb194b5487c259682d53986d",
  "placement": 22,
  "time_alive": 1081,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "43b453c633ce4704a50740a558003edf:5970807d2db64d00ac525f516fb39d6a:8e07108bd40c4b9e9f0064f83335157d",
  "placement": 24,
  "time_alive": 1040,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc",
  "placement": 28,
  "time_alive": 656,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "9a41d01f2442468387feb000951157be:a64bb19d285349e8ba6cb6c1dbad008b:df70fadb103b414897f620a64b516383",
  "placement": 30,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 16,
  "time_alive": 1317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 17,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "69d249f52b24459fa5a74b6bf9b780fb:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 23,
  "time_alive": 1072,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "1c962b5c9f354385be99435c82cc6821:3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5",
  "placement": 25,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663:f0541261c64c443882ab8109dd8b55de",
  "placement": 26,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:b5025b2648274c8c851ff098a758bc50:c7f8b768fd3a4aeab88d478fe118778d",
  "placement": 27,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "105797eec03f44148748f1d00c24d2be:bcd9c321e7de40b6b6ef2d10bcabb160:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 29,
  "time_alive": 527,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a532e5c-671d-453b-be43-6d33513eadc5",
  "team_id": "304140906647428895f14f11fbd81bf5:782bf80cda284ce1b8ccedc64687b01c:7e349e6bf86c4b579a2f1ef50250263f",
  "placement": 31,
  "time_alive": 100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 1,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 7,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 1,
  "time_alive": 1528,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 4,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 4,
  "time_alive": 1515,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 16,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 5,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 2,
  "time_alive": 1559,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 15,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 23,
  "time_alive": 1184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 7,
  "time_alive": 1485,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 2,
  "time_alive": 1553,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 10,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 8,
  "time_alive": 1458,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 4,
  "time_alive": 1485,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 1,
  "time_alive": 1551,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 11,
  "time_alive": 1395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 29,
  "time_alive": 550,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 24,
  "time_alive": 967,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 9,
  "time_alive": 1456,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1528,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1551,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 32,
  "time_alive": 122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 10,
  "time_alive": 1499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 2,
  "time_alive": 1489,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 18,
  "time_alive": 1224,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 15,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 2,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 18,
  "time_alive": 1256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 32,
  "time_alive": 232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 22,
  "time_alive": 1176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 13,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 9,
  "time_alive": 1442,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1550,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 9,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 3,
  "time_alive": 1514,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 17,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 6,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 13,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 5,
  "time_alive": 1539,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 13,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 6,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 24,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 7,
  "time_alive": 1472,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 8,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 1,
  "time_alive": 1553,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 6,
  "time_alive": 1413,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 5,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 12,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 25,
  "time_alive": 940,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 6,
  "time_alive": 1496,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 11,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 4,
  "time_alive": 1452,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 19,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 5,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 21,
  "time_alive": 1274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 3,
  "time_alive": 1517,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 13,
  "time_alive": 1437,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 22,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 7,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 8,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 1,
  "time_alive": 1520,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 6,
  "time_alive": 1527,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 11,
  "time_alive": 1367,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 13,
  "time_alive": 1420,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 26,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 22,
  "time_alive": 1202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 5,
  "time_alive": 1499,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 12,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 19,
  "time_alive": 1222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 10,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 9,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 10,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 10,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 19,
  "time_alive": 1245,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 7,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 16,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 16,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 27,
  "time_alive": 624,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 25,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 4,
  "time_alive": 1548,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 25,
  "time_alive": 919,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 5,
  "time_alive": 1480,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 149,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 18,
  "time_alive": 1249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 1,
  "time_alive": 1559,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 19,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 31,
  "time_alive": 123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 33,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 23,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 31,
  "time_alive": 284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 8,
  "time_alive": 1450,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 16,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 28,
  "time_alive": 391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 9,
  "time_alive": 1501,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 28,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 4,
  "time_alive": 1505,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 23,
  "time_alive": 1168,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 18,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 22,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 7,
  "time_alive": 1518,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 12,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 24,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 14,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 31,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 16,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 8,
  "time_alive": 1509,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 32,
  "time_alive": 514,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 20,
  "time_alive": 1275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 30,
  "time_alive": 563,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 3,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 23,
  "time_alive": 1100,
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
    