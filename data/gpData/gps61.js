const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 11,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1512,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 15,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 6,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1526,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1495,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 16,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 6,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 26,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 8,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1458,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1482,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1522,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1498,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 31,
  "time_alive": 221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 14,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 31,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 26,
  "time_alive": 451,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 7,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 6,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1503,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1515,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 29,
  "time_alive": 566,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 19,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 33,
  "time_alive": 92,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 19,
  "time_alive": 1195,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 6,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 4,
  "time_alive": 1465,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 20,
  "time_alive": 1208,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 10,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 6,
  "time_alive": 1450,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 2,
  "time_alive": 1532,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 3,
  "time_alive": 1487,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1483,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 2,
  "time_alive": 1526,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 4,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 1,
  "time_alive": 1543,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 3,
  "time_alive": 1525,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 15,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 21,
  "time_alive": 1016,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 11,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 11,
  "time_alive": 1417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 11,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 32,
  "time_alive": 255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 10,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 6,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 27,
  "time_alive": 693,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 6,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 24,
  "time_alive": 993,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 30,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 30,
  "time_alive": 360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 2,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 9,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 5,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 1,
  "time_alive": 1503,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 7,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 4,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 15,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1513,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 13,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1494,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 17,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 25,
  "time_alive": 946,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 30,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1512,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 9,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 10,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 1,
  "time_alive": 1532,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 24,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 12,
  "time_alive": 1416,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 12,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 10,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1507,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 5,
  "time_alive": 1437,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 17,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 31,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 7,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 14,
  "time_alive": 1336,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 13,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 8,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 8,
  "time_alive": 1455,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 11,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 16,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 20,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 8,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 5,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 16,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 20,
  "time_alive": 1143,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 5,
  "time_alive": 1454,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 19,
  "time_alive": 1295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 1,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 5,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 3,
  "time_alive": 1529,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 2,
  "time_alive": 1526,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 24,
  "time_alive": 950,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 5,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 23,
  "time_alive": 999,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 25,
  "time_alive": 977,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 17,
  "time_alive": 1308,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 11,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 13,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 13,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 26,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 8,
  "time_alive": 1440,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 8,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 7,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 4,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 15,
  "time_alive": 1363,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 12,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 14,
  "time_alive": 1393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 1,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 15,
  "time_alive": 1370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 6,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 22,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 3,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 22,
  "time_alive": 1007,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 30,
  "time_alive": 648,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 15,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 4,
  "time_alive": 1513,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 26,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 18,
  "time_alive": 1207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 6,
  "time_alive": 1462,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 31,
  "time_alive": 172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 7,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 12,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 13,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 11,
  "time_alive": 1432,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 12,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 32,
  "time_alive": 264,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 24,
  "time_alive": 1086,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 5,
  "time_alive": 1505,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 17,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:838b273fb0ad43d291bb92a9478eafc8:8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 26,
  "time_alive": 433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 11,
  "time_alive": 1443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 32,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 8,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 22,
  "time_alive": 1114,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 12,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 2,
  "time_alive": 1521,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 16,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 21,
  "time_alive": 1117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 13,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 6,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 10,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 1,
  "time_alive": 1526,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 14,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 27,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 11,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 17,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 22,
  "time_alive": 977,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 17,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 17,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 13,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 9,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 20,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 17,
  "time_alive": 1267,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 28,
  "time_alive": 632,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 21,
  "time_alive": 1257,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 32,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 8,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 10,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 18,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 14,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 12,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 26,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 8,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 16,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 17,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 26,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 5,
  "time_alive": 1506,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 4,
  "time_alive": 1438,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 15,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 13,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 29,
  "time_alive": 629,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 29,
  "time_alive": 495,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 7,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 7,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 19,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 9,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 9,
  "time_alive": 1446,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 7,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 20,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 24,
  "time_alive": 850,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 24,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 24,
  "time_alive": 949,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 8,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 15,
  "time_alive": 1326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 12,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 27,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 25,
  "time_alive": 905,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 29,
  "time_alive": 525,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 28,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 24,
  "time_alive": 925,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 29,
  "time_alive": 609,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 19,
  "time_alive": 1221,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 15,
  "time_alive": 1338,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 13,
  "time_alive": 1396,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 23,
  "time_alive": 1111,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 12,
  "time_alive": 1379,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 19,
  "time_alive": 1221,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6:8d01b94378ff4f71898033b5754b7352:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 21,
  "time_alive": 959,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 21,
  "time_alive": 1155,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 28,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 22,
  "time_alive": 1181,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 16,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 12,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 14,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 26,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 4,
  "time_alive": 1471,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 27,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 6,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 22,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "17a55115aca04a99be849a5079e04cee:ada746fa490947b0b61f815560563da3:e59264f8a04848ec99ca4ff8e71ec9eb",
  "placement": 20,
  "time_alive": 1055,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 20,
  "time_alive": 1197,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 24,
  "time_alive": 1023,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 11,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 25,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 23,
  "time_alive": 1003,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 28,
  "time_alive": 240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 31,
  "time_alive": 417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 2,
  "time_alive": 1514,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 22,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 30,
  "time_alive": 365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 31,
  "time_alive": 330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 19,
  "time_alive": 1179,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 10,
  "time_alive": 1450,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 16,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 14,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 13,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 18,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 9,
  "time_alive": 1440,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 10,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 28,
  "time_alive": 726,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 17,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 16,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 18,
  "time_alive": 1246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 23,
  "time_alive": 663,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 24,
  "time_alive": 920,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 30,
  "time_alive": 355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 25,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 27,
  "time_alive": 652,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 3,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1116,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 19,
  "time_alive": 1216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 8,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 27,
  "time_alive": 758,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 27,
  "time_alive": 799,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 31,
  "time_alive": 141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 18,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 27,
  "time_alive": 891,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 12,
  "time_alive": 1420,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 21,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 9,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 13,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 21,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 12,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 26,
  "time_alive": 941,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 23,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 33,
  "time_alive": 199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 28,
  "time_alive": 287,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 33,
  "time_alive": 255,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 5,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 21,
  "time_alive": 1213,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 18,
  "time_alive": 1256,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 19,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 27,
  "time_alive": 366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 23,
  "time_alive": 950,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 15,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 19,
  "time_alive": 1228,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 28,
  "time_alive": 520,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 32,
  "time_alive": 200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "793fb9ba4c2440b1b91b339f42d02095:b4c91eed02904f809cc009bb56a2c099:dbb1328802fd40d0b53acb320cb8b1de",
  "placement": 30,
  "time_alive": 182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 30,
  "time_alive": 367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 20,
  "time_alive": 1305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 20,
  "time_alive": 1226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 9,
  "time_alive": 1471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 14,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 6,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 33,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 18,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 32,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 18,
  "time_alive": 1301,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 29,
  "time_alive": 360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 24,
  "time_alive": 484,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 22,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 18,
  "time_alive": 1321,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 30,
  "time_alive": 243,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 33,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 27,
  "time_alive": 837,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 33,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 18,
  "time_alive": 1297,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 27,
  "time_alive": 752,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 9,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 24,
  "time_alive": 1102,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 28,
  "time_alive": 401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "6e284bac47914f56a9d9b3c23bbf318b:7f09f75476a9479f95dee910c90cbf17:fd67476ffa55434eaf9527763c6b6df1",
  "placement": 22,
  "time_alive": 857,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 31,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 8,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 19,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 29,
  "time_alive": 368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 11,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 32,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 32,
  "time_alive": 292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 29,
  "time_alive": 654,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 18,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 25,
  "time_alive": 921,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 16,
  "time_alive": 1335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 25,
  "time_alive": 460,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 15,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 25,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 17,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 26,
  "time_alive": 662,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 10,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 25,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 22,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 31,
  "time_alive": 178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 22,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 23,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 33,
  "time_alive": 101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 23,
  "time_alive": 949,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 33,
  "time_alive": 85,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 4,
  "time_alive": 1506,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 32,
  "time_alive": 174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 28,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 25,
  "time_alive": 511,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 30,
  "time_alive": 524,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 33,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 33,
  "time_alive": 106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 33,
  "time_alive": 129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 30,
  "time_alive": 343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 32,
  "time_alive": 102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 26,
  "time_alive": 716,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 22,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 18,
  "time_alive": 1249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 31,
  "time_alive": 322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 31,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 28,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 25,
  "time_alive": 930,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 14,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 20,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 14,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a:aae40ccb67d84d0aaa0c39b6cfbf62cc:bef4103d987546c4aba0382aeefbd78b",
  "placement": 9,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 16,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 23,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 13,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 28,
  "time_alive": 407,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 16,
  "time_alive": 1338,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 23,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 21,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 30,
  "time_alive": 283,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 21,
  "time_alive": 1192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 25,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 29,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 32,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 17,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 23,
  "time_alive": 1048,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 26,
  "time_alive": 923,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 226,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 576,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 19,
  "time_alive": 1317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 28,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 31,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 21,
  "time_alive": 1012,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a611afcc-b65f-4b91-a94d-7fb9495cee05",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 14,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 1,
  "time_alive": 1502,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1519,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 19,
  "time_alive": 1218,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1456,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 13,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 14,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1503,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1515,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1509,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 2,
  "time_alive": 1502,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 3,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 1,
  "time_alive": 1477,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 12,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 22,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 10,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 1,
  "time_alive": 1520,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 8,
  "time_alive": 1473,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 11,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 1,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 19,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 20,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 6,
  "time_alive": 1448,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 4,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 8,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 15,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 11,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 2,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 5,
  "time_alive": 1488,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 27,
  "time_alive": 751,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 12,
  "time_alive": 1371,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 1,
  "time_alive": 1526,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 14,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 18,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 10,
  "time_alive": 1404,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 9,
  "time_alive": 1407,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 1,
  "time_alive": 1525,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 3,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 3,
  "time_alive": 1515,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 12,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 9,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 9,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 8,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 7,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 8,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 26,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 5,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 20,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 4,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 14,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 7,
  "time_alive": 1435,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 2,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 8,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 31,
  "time_alive": 486,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 3,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b:ac215ba6aeab493895eed2156df714df:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 2,
  "time_alive": 1526,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 3,
  "time_alive": 1489,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 1,
  "time_alive": 1519,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 13,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 11,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 2,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 1,
  "time_alive": 1528,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 20,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 26,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 15,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 24,
  "time_alive": 1013,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 20,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 9,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 11,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 32,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 6,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 2,
  "time_alive": 1491,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 17,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 32,
  "time_alive": 263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 11,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 9,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 14,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 2,
  "time_alive": 1476,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 4,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "0283351fd3b54505a0e523ed402c6886:4900a25c46914fe1a71b0fb1437b4833:5fe045499dd2407b93a7bee65f5b0e2f",
  "placement": 14,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 9,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 7,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 11,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 14,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 3,
  "time_alive": 1518,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 7,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 15,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 1,
  "time_alive": 1521,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 30,
  "time_alive": 642,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 13,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 27,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "33b9ef193f194a2188d43808a6158c81:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 27,
  "time_alive": 171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 13,
  "time_alive": 1390,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 8,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 4,
  "time_alive": 1457,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 3,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 18,
  "time_alive": 1238,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 9,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 12,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 17,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 6,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 28,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 10,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 4,
  "time_alive": 1502,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 7,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 5,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 7,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 10,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 13,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 16,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 8,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 11,
  "time_alive": 1438,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 2,
  "time_alive": 1525,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 18,
  "time_alive": 1302,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314:c371e935468641d69332e5919b0e6f8b",
  "placement": 18,
  "time_alive": 1209,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 19,
  "time_alive": 1260,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 13,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 15,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 6,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 7,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 21,
  "time_alive": 1209,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 9,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 6,
  "time_alive": 1484,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 5,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 26,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 7,
  "time_alive": 1428,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "02845468b8c94f13b4f6663af5c92f4a:10494c34cb1b477ab7dd3b32d6ab61c5:eeda536115ca446eacdd161c0315c0cd",
  "placement": 13,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 16,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 6,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 14,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 8,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 6,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 4,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 10,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 25,
  "time_alive": 981,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 13,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 15,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 6,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 11,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 22,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 17,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 2,
  "time_alive": 1477,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 4,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 27,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 17,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 4,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 19,
  "time_alive": 1242,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 24,
  "time_alive": 910,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 4,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 14,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "7c5e52cac09d4a64b71da1c67aa49e50:8e76773d4f134835beb71bfe436e8bef:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 16,
  "time_alive": 1318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 31,
  "time_alive": 669,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 31,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 32,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 19,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 31,
  "time_alive": 294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 28,
  "time_alive": 438,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 27,
  "time_alive": 715,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 14,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 4,
  "time_alive": 1489,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 3,
  "time_alive": 1473,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 1,
  "time_alive": 1515,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 5,
  "time_alive": 1490,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 15,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 10,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 9,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 7,
  "time_alive": 1424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 19,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 12,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 23,
  "time_alive": 1002,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 4,
  "time_alive": 1496,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 7,
  "time_alive": 1435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 21,
  "time_alive": 1152,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 26,
  "time_alive": 538,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44:905c1dfd757c46a387ad86fb5a502618:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 6,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 21,
  "time_alive": 1240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 11,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 23,
  "time_alive": 1122,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 1,
  "time_alive": 1491,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 10,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 26,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 26,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 28,
  "time_alive": 393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 10,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 8,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 23,
  "time_alive": 1080,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "0b93adbc755642bc8a17aa345b954b17:76c425fe12b24731b3ec7d740a4f9776:eb44968f1f0a457882c3419a8303665f",
  "placement": 24,
  "time_alive": 650,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 30,
  "time_alive": 792,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 22,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 26,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 28,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 8,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 2,
  "time_alive": 1528,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 19,
  "time_alive": 1226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 18,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 17,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 6,
  "time_alive": 1453,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 16,
  "time_alive": 1279,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 15,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 10,
  "time_alive": 1413,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 9,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 3,
  "time_alive": 1467,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 13,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 29,
  "time_alive": 353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 18,
  "time_alive": 1302,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 7,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 28,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 26,
  "time_alive": 191,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 5,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 16,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 18,
  "time_alive": 1267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 26,
  "time_alive": 978,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 14,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 19,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 13,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 23,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 1,
  "time_alive": 1525,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 30,
  "time_alive": 559,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 22,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 4,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 25,
  "time_alive": 1073,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 29,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 30,
  "time_alive": 416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 32,
  "time_alive": 154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 27,
  "time_alive": 857,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 24,
  "time_alive": 946,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 7,
  "time_alive": 1483,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 32,
  "time_alive": 461,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 32,
  "time_alive": 326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 5,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 19,
  "time_alive": 1294,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 12,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 24,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 16,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 12,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 31,
  "time_alive": 381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 6,
  "time_alive": 1438,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 10,
  "time_alive": 1440,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 18,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 16,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 12,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "b47110975085467992abe5fa22a3af36:befae21a086e44bd90e74b225f782e08:fb896c61b1f04a078d96c1d3d6f5ae24",
  "placement": 21,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 18,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 30,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 23,
  "time_alive": 1032,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 28,
  "time_alive": 370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 8,
  "time_alive": 1420,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 5,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 24,
  "time_alive": 1035,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 19,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 19,
  "time_alive": 1211,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 17,
  "time_alive": 1315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 27,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 20,
  "time_alive": 1194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 16,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 22,
  "time_alive": 1011,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 29,
  "time_alive": 187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 16,
  "time_alive": 1353,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 29,
  "time_alive": 768,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 24,
  "time_alive": 1002,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "349392ad218c4f2987d2ab778fed7608:777bc1474ba94dda87f38bf2fd2ef767:a190f25f03af4daa8672cdf58d6d8f14",
  "placement": 8,
  "time_alive": 1436,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 17,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 15,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 25,
  "time_alive": 1037,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 22,
  "time_alive": 1078,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 16,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 15,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 28,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 15,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 31,
  "time_alive": 564,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 17,
  "time_alive": 1304,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 13,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 10,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 32,
  "time_alive": 245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 12,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 27,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 29,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 24,
  "time_alive": 1058,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 5,
  "time_alive": 1435,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 21,
  "time_alive": 1189,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 16,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 23,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 14,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "25230b34e09b43ada3a140d30e82bc4f:399c49feb21648a3afe807ff85044dfe:8bdc27633bb4476383837ab2adb64a2c",
  "placement": 17,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 20,
  "time_alive": 1253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 27,
  "time_alive": 871,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 20,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 17,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 11,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 29,
  "time_alive": 434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 17,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 27,
  "time_alive": 939,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 21,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 10,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 31,
  "time_alive": 167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "3081876d947646a6989772db81ea5100:9ccd630a5a4b4d1384db23805d6441a7:dceda4b442c243e5aeb6d6441a246f70",
  "placement": 25,
  "time_alive": 512,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 28,
  "time_alive": 869,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 30,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 32,
  "time_alive": 289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 23,
  "time_alive": 1128,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 24,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 20,
  "time_alive": 1182,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 12,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 11,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 22,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9:a509f50735a346cca41de41370ae98bd:c35edc7307ab482084bf91ad96121267",
  "placement": 23,
  "time_alive": 723,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 23,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 14,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 21,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 21,
  "time_alive": 1085,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 21,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 23,
  "time_alive": 1098,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 16,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 22,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 20,
  "time_alive": 1163,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 25,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50:bd641f99040d483aa6036ef46440b59d:dae6f063d2c84ec2bd40d94f18d85214",
  "placement": 11,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 24,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 19,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 28,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 18,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 20,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 6,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 18,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 21,
  "time_alive": 1176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 26,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 23,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 30,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 29,
  "time_alive": 101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 25,
  "time_alive": 1026,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 21,
  "time_alive": 1183,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 31,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 27,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 26,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 22,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 30,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 33,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 20,
  "time_alive": 1155,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 29,
  "time_alive": 284,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "393e6ad258f344d1adf05cb4c242b879:4680414c26a346cc93c10045671ba0ae:5a12a7628ece40cdb1fd3a8f7b2c52a7",
  "placement": 12,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 28,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 29,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 17,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 31,
  "time_alive": 327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 15,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 30,
  "time_alive": 398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 31,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 22,
  "time_alive": 1045,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "039ebbfca9dd42cf92acbd2ab45b105f:536ed9717d344dab9840b01ef60a5f24:6330b2dbd00f4837b35fa529abcf1c5e",
  "placement": 33,
  "time_alive": 288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 29,
  "time_alive": 830,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 23,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 22,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 25,
  "time_alive": 990,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 25,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 25,
  "time_alive": 1015,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 29,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 30,
  "time_alive": 157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 29,
  "time_alive": 649,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 22,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 15,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "22ba585ad82e4e3c810b0076301609aa:91c0b5178f67463bbced25c6e84b92c4:f5d9496e786f4eab843bab2652841508",
  "placement": 18,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81935dae-47cd-4183-ad71-a347c8beb822",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 26,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05eba675-b02d-4a79-a8b7-55abd0a53521",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 33,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b9d67a2-87aa-4ba0-aace-a5d1db2b954d",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 24,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1865a005-107e-45cd-b884-3777d8f6f4e6",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 24,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "273b8ea7-0a82-4d2a-bdcd-dfcd622ae355",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 30,
  "time_alive": 340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60193dff-c18b-4910-8330-c0718afed6cd",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 20,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55b862c6-8029-4a59-a17f-bf144220b1ee",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 25,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ec85936-1616-4c8a-9cb9-873b4875127f",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 13,
  "time_alive": 1426,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d5c6f8e-f6fb-4e82-a76c-925356d2304a",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 28,
  "time_alive": 652,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0103de85-f669-4a64-956f-12fb960700ca",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 27,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5edbb57-6d68-43ac-b5e0-61147b122c5e",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 25,
  "time_alive": 739,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "513b7333-d4cf-4376-8e38-c6c6a1617a27",
  "team_id": "1033d54d12474a8db12815b0ac97a2f8:f25153b705484535aa617ccd61dcd678:f9c7294152e3487c8214edf7940a9931",
  "placement": 28,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 19,
  "time_alive": 1195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 3,
  "time_alive": 1505,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 8,
  "time_alive": 1429,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 3,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 1,
  "time_alive": 1521,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 5,
  "time_alive": 1459,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 7,
  "time_alive": 1413,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1479,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 1,
  "time_alive": 1519,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1477,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1502,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 8,
  "time_alive": 1453,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 13,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1481,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 24,
  "time_alive": 1051,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 3,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 19,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1476,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1479,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 16,
  "time_alive": 1288,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 13,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 27,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 3,
  "time_alive": 1515,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 4,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 5,
  "time_alive": 1459,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 10,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 1,
  "time_alive": 1527,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 5,
  "time_alive": 1473,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 2,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 19,
  "time_alive": 1288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "02ce1029c071498f90fba6dc95006005:31a4e8a9d5cc4426a3241204873bbba3:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 1,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 3,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 13,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 6,
  "time_alive": 1462,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 15,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 2,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 9,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 10,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 3,
  "time_alive": 1475,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 6,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 6,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 14,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 5,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 11,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 4,
  "time_alive": 1496,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 20,
  "time_alive": 1264,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 7,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 7,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 4,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 4,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 7,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 3,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 7,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 5,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "197d9c9072234e04aeb7462146c184a6:5c6aa281aece46b2ab0f9452809704f2:c4079131730b46049ef4ba0ac0288d88",
  "placement": 14,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 12,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 1,
  "time_alive": 1528,
  "elims": 20,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 7,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 6,
  "time_alive": 1435,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 8,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 5,
  "time_alive": 1462,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 31,
  "time_alive": 91,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 10,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 19,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 26,
  "time_alive": 610,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 4,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 28,
  "time_alive": 238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 4,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 28,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 2,
  "time_alive": 1525,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 30,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 9,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 16,
  "time_alive": 1351,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 2,
  "time_alive": 1527,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 6,
  "time_alive": 1471,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 5,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 16,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 6,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 24,
  "time_alive": 493,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 20,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 5,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 5,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 3,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 21,
  "time_alive": 1174,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 28,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 3,
  "time_alive": 1463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 9,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 12,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 4,
  "time_alive": 1471,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 2,
  "time_alive": 1519,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 16,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 2,
  "time_alive": 1502,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 30,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 1,
  "time_alive": 1525,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 16,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 17,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 7,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 27,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 18,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 13,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 5,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 8,
  "time_alive": 1416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 10,
  "time_alive": 1385,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 13,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 7,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 9,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 27,
  "time_alive": 886,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 6,
  "time_alive": 1455,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 8,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 13,
  "time_alive": 1357,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 21,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 4,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 12,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 15,
  "time_alive": 1328,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 22,
  "time_alive": 853,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 32,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 25,
  "time_alive": 980,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 10,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 12,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 11,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 2,
  "time_alive": 1521,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 9,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 13,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 16,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 20,
  "time_alive": 1207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 11,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 7,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 24,
  "time_alive": 1038,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 2,
  "time_alive": 1528,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 4,
  "time_alive": 1508,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 24,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 30,
  "time_alive": 345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 12,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 25,
  "time_alive": 1053,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 28,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 31,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 31,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 3,
  "time_alive": 1511,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "afac7eae3be44447b5ce9d29f8bd0ee5:b6be67e0fdff429eaa2ef928de3e404b:f22e91ef067141ebac162cd99573b9fd",
  "placement": 3,
  "time_alive": 1464,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 6,
  "time_alive": 1454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 24,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 12,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 19,
  "time_alive": 1320,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 25,
  "time_alive": 559,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 28,
  "time_alive": 642,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 8,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 28,
  "time_alive": 579,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 4,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 9,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 14,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 14,
  "time_alive": 1372,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 10,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 4,
  "time_alive": 1473,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 14,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 12,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 20,
  "time_alive": 1282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 10,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 22,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 25,
  "time_alive": 715,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 23,
  "time_alive": 573,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 18,
  "time_alive": 1303,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 11,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 11,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 9,
  "time_alive": 1403,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 14,
  "time_alive": 1374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 17,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 7,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 25,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 17,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 8,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 29,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "29a0ed4655dd4b62b3c6a2561e7d7a43:40fc5ac2c95041738a03e1d85ae4fe24:d347f1aa8595407b9a115010cbd029c3",
  "placement": 9,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 12,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 19,
  "time_alive": 1265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 5,
  "time_alive": 1438,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 11,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 18,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 17,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 15,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 10,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 26,
  "time_alive": 652,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "02cc96718f654f3082c04a3699d81b44:676cbaa314234b8d95ab008c7f7af7b7:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 15,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 16,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 19,
  "time_alive": 1246,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 28,
  "time_alive": 692,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 13,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 1,
  "time_alive": 1499,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 6,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 26,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 12,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 27,
  "time_alive": 759,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 13,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9:93bb8936fbec423199582ecf1aee4ae4:f7a027a3821845429033aa7bed48c092",
  "placement": 24,
  "time_alive": 725,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 6,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 18,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 8,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 26,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 32,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 27,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 30,
  "time_alive": 260,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 19,
  "time_alive": 1148,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:cca99398d2c147da8e5e3b1d8eb31937:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 6,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 17,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 29,
  "time_alive": 195,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 31,
  "time_alive": 319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 25,
  "time_alive": 964,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 25,
  "time_alive": 869,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 30,
  "time_alive": 313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 6,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 23,
  "time_alive": 1170,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 9,
  "time_alive": 1410,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 3,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 13,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c7ef4a45-8ae1-42bc-88bb-168265dab6b6",
  "team_id": "22fee118f27b47a387c8a22373929da4:4c31413d33c247d08ecfb104ea97988f:b08b963b721140369df683b4b8f8dd93",
  "placement": 27,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c567c10-7df4-49fa-9b52-fba83f77aac9",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 8,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ac9b8ea-4456-438b-bf8b-02f6a2e1fb5a",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 10,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "013657a6-6488-48ee-a87f-db624adc7035",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 26,
  "time_alive": 738,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "35be2c42-1bc2-4fea-ab35-5c76150d7101",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 19,
  "time_alive": 1314,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46393331-677f-4250-8e89-079c11b10898",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 18,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "437b3023-e530-4555-b0e6-d0c7823dd587",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 27,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72a0df76-de5d-469a-86a0-99d38d7c4f07",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 17,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56b5bc52-746a-4638-b9e1-335dbda48195",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 29,
  "time_alive": 184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ebaff9f7-6d73-4384-a932-d78a9af560fd",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 23,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c25012be-ac71-43b0-a1d2-1f30ac6fb3f6",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 9,
  "time_alive": 1399,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03d5ec48-f6ef-42f8-8f46-ab1b026f60e4",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 17,
  "time_alive": 1244,
  "elims": 3,
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
    