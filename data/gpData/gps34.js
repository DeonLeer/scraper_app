const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 95,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 80,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 48,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 50,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 84,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 62,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 49,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "114677a034704e258ada30791d6e0f5e",
  "placement": 26,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "114677a034704e258ada30791d6e0f5e",
  "placement": 78,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "114677a034704e258ada30791d6e0f5e",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "114677a034704e258ada30791d6e0f5e",
  "placement": 89,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "114677a034704e258ada30791d6e0f5e",
  "placement": 84,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 86,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 70,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 59,
  "time_alive": 1179,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 90,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702",
  "placement": 92,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 92,
  "time_alive": 187,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 35,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 92,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 92,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 88,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 88,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 39,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 81,
  "time_alive": 545,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 97,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 97,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 96,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 85,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 96,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 42,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 42,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 91,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 79,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 83,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "a00bf0766a4240a1b5bcb971c5a20a1f",
  "placement": 29,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "a00bf0766a4240a1b5bcb971c5a20a1f",
  "placement": 59,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "a00bf0766a4240a1b5bcb971c5a20a1f",
  "placement": 82,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "a00bf0766a4240a1b5bcb971c5a20a1f",
  "placement": 83,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "a00bf0766a4240a1b5bcb971c5a20a1f",
  "placement": 92,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "a00bf0766a4240a1b5bcb971c5a20a1f",
  "placement": 93,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 82,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 56,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 85,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 71,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 94,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 99,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 71,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 75,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3",
  "placement": 85,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "a2c2d6cfaaea48e089a413cee11cb9f9",
  "placement": 85,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "a2c2d6cfaaea48e089a413cee11cb9f9",
  "placement": 60,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "a2c2d6cfaaea48e089a413cee11cb9f9",
  "placement": 89,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "a2c2d6cfaaea48e089a413cee11cb9f9",
  "placement": 81,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "a2c2d6cfaaea48e089a413cee11cb9f9",
  "placement": 87,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 52,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1564,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 5,
  "time_alive": 1490,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1532,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 34,
  "time_alive": 1312,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 7,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 10,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 11,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 9,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 59,
  "time_alive": 1072,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 4,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 57,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 13,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 28,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 5,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 3,
  "time_alive": 1528,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 2,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 1,
  "time_alive": 1527,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 84,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 16,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 35,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 2,
  "time_alive": 1533,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 12,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 22,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 61,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 4,
  "time_alive": 1511,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 1,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 73,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 13,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 63,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 2,
  "time_alive": 1533,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 71,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 80,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 3,
  "time_alive": 1477,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 11,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 4,
  "time_alive": 1545,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 69,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 67,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 34,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "ee8c9e09d4504b6e8b540f5e4253f48a",
  "placement": 1,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 9,
  "time_alive": 1495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 81,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 14,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 26,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 6,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 5,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 69,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 64,
  "time_alive": 1069,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 8,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 9,
  "time_alive": 1501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 20,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 14,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 35,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 3,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 18,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 91,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "12c47afef65d4f7382703fc1973d0146",
  "placement": 90,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 6,
  "time_alive": 1506,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 62,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 19,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 17,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "b1c3607370614c0aa911575f5d8739d2",
  "placement": 28,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 2,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 3,
  "time_alive": 1557,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 58,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 43,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 36,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 74,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 21,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 36,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 1,
  "time_alive": 1533,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 68,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 94,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 27,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 14,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 7,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 94,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 53,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 30,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 25,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 7,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 18,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 82,
  "time_alive": 711,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 60,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339",
  "placement": 41,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 30,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 85,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 50,
  "time_alive": 1218,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 4,
  "time_alive": 1496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 7,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "ff906aca7c12455a8035ac6999879579",
  "placement": 31,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 75,
  "time_alive": 864,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 20,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 6,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 50,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 27,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 35,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 16,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 17,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 48,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 15,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 30,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 87,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 70,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 24,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 59,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 13,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 11,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "2ab69d9dde954f2fada991047028776b",
  "placement": 15,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 17,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 50,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 15,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 65,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 39,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 23,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 96,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 2,
  "time_alive": 1564,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 94,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 96,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 22,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "fd6d7782abe54a45aba4a298827a88f1",
  "placement": 25,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 3,
  "time_alive": 1500,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 67,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 41,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 69,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 49,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 17,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 35,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 88,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 40,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 49,
  "time_alive": 1189,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 6,
  "time_alive": 1506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 13,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 12,
  "time_alive": 1451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 22,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 86,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 97,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 15,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "bd52159162bb40cf8d6d930c94d2836d",
  "placement": 7,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 54,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 46,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 56,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 3,
  "time_alive": 1505,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 21,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 64,
  "time_alive": 619,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 19,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 12,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 29,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 11,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 65,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 11,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 10,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 42,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 18,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 63,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 4,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 76,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 33,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 36,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 14,
  "time_alive": 1478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 29,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 40,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 23,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 17,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 10,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 33,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 37,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 15,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 48,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 9,
  "time_alive": 1461,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 23,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 78,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "935279f1280d4c50bce5347680e63152",
  "placement": 65,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 9,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 26,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 34,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 48,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 48,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "6533ded271324f63b045220fa442861e",
  "placement": 21,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "e92a7b43b5b94595aa99e506087895dc",
  "placement": 6,
  "time_alive": 1483,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "e92a7b43b5b94595aa99e506087895dc",
  "placement": 71,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "e92a7b43b5b94595aa99e506087895dc",
  "placement": 96,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "e92a7b43b5b94595aa99e506087895dc",
  "placement": 39,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "e92a7b43b5b94595aa99e506087895dc",
  "placement": 20,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "e92a7b43b5b94595aa99e506087895dc",
  "placement": 50,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 41,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 37,
  "time_alive": 1335,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 66,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 74,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 10,
  "time_alive": 1498,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 14,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 91,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 34,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 8,
  "time_alive": 1472,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 99,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 45,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 39,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 8,
  "time_alive": 1472,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 86,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 44,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 53,
  "time_alive": 1141,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 74,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 24,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 92,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 12,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 98,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 40,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 8,
  "time_alive": 1504,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 88,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 18,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 35,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 41,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 28,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 59,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 94,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 93,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 32,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 2,
  "time_alive": 1532,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 12,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 85,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 51,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 13,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 72,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 25,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 9,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 56,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 8,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 97,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 84,
  "time_alive": 694,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 19,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 82,
  "time_alive": 269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "2be367496be04da4b1f307b6104ab346",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "2be367496be04da4b1f307b6104ab346",
  "placement": 68,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "2be367496be04da4b1f307b6104ab346",
  "placement": 92,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "2be367496be04da4b1f307b6104ab346",
  "placement": 37,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "2be367496be04da4b1f307b6104ab346",
  "placement": 63,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "2be367496be04da4b1f307b6104ab346",
  "placement": 5,
  "time_alive": 1456,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 48,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 5,
  "time_alive": 1537,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 51,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 32,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 66,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "3f0866a303b244899938ce50f1c16f73",
  "placement": 36,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "cac4ad6ed9504f24a616a16a2af3672d",
  "placement": 86,
  "time_alive": 465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "cac4ad6ed9504f24a616a16a2af3672d",
  "placement": 49,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "cac4ad6ed9504f24a616a16a2af3672d",
  "placement": 57,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "cac4ad6ed9504f24a616a16a2af3672d",
  "placement": 7,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "cac4ad6ed9504f24a616a16a2af3672d",
  "placement": 38,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "cac4ad6ed9504f24a616a16a2af3672d",
  "placement": 22,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 32,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 59,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 31,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 35,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "7d85780b1f2342919d285037a5cf1475",
  "placement": 8,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 24,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 44,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 55,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 83,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "8e9a6fb7deb14a89b3ca26ac4dee8b4c",
  "placement": 13,
  "time_alive": 1482,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 78,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 29,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 25,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 24,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 67,
  "time_alive": 932,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 38,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 59,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 90,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 49,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 20,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 4,
  "time_alive": 1525,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 40,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9",
  "placement": 26,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9",
  "placement": 64,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9",
  "placement": 36,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9",
  "placement": 21,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9",
  "placement": 23,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "4a2f92f219c140b0a1e51277b047acc9",
  "placement": 72,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 77,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 25,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 30,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 28,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 40,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 80,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 69,
  "time_alive": 980,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 74,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 90,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 26,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 16,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 33,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "8e76773d4f134835beb71bfe436e8bef",
  "placement": 34,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "8e76773d4f134835beb71bfe436e8bef",
  "placement": 78,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "8e76773d4f134835beb71bfe436e8bef",
  "placement": 19,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "8e76773d4f134835beb71bfe436e8bef",
  "placement": 47,
  "time_alive": 1262,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "8e76773d4f134835beb71bfe436e8bef",
  "placement": 57,
  "time_alive": 806,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 36,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 56,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 54,
  "time_alive": 1158,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 92,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 47,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "3660cdc37ff84d9da965216f44d7fe30",
  "placement": 18,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "ae0b5b94271741d48a61cd895d9d3380",
  "placement": 31,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "ae0b5b94271741d48a61cd895d9d3380",
  "placement": 33,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "ae0b5b94271741d48a61cd895d9d3380",
  "placement": 89,
  "time_alive": 436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "ae0b5b94271741d48a61cd895d9d3380",
  "placement": 6,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "ae0b5b94271741d48a61cd895d9d3380",
  "placement": 85,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "ae0b5b94271741d48a61cd895d9d3380",
  "placement": 92,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "65c6e6d73d4b4390b15797f8c8125b38",
  "placement": 20,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "65c6e6d73d4b4390b15797f8c8125b38",
  "placement": 62,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "65c6e6d73d4b4390b15797f8c8125b38",
  "placement": 27,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "65c6e6d73d4b4390b15797f8c8125b38",
  "placement": 70,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "65c6e6d73d4b4390b15797f8c8125b38",
  "placement": 26,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 10,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 40,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 46,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 52,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 57,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 44,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 61,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 38,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 14,
  "time_alive": 1437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 16,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 69,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 66,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 87,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 19,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 43,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 61,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 84,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 62,
  "time_alive": 682,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 55,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 53,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 51,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 61,
  "time_alive": 698,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 93,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 80,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 38,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 88,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 5,
  "time_alive": 1511,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 79,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 81,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 52,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 29,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 46,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 76,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 10,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "905c1dfd757c46a387ad86fb5a502618",
  "placement": 23,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "905c1dfd757c46a387ad86fb5a502618",
  "placement": 31,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "905c1dfd757c46a387ad86fb5a502618",
  "placement": 77,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "905c1dfd757c46a387ad86fb5a502618",
  "placement": 11,
  "time_alive": 1439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "905c1dfd757c46a387ad86fb5a502618",
  "placement": 64,
  "time_alive": 1001,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "905c1dfd757c46a387ad86fb5a502618",
  "placement": 78,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 38,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 43,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 20,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 27,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 58,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 54,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 46,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 58,
  "time_alive": 1099,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 22,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 70,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 93,
  "time_alive": 173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 47,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 92,
  "time_alive": 559,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 83,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 12,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 79,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 49,
  "time_alive": 1188,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 73,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 21,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 24,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 77,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 52,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c0c3e9ab1d6746b497dc47d4b7d05690",
  "placement": 32,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "0f78fe0f75ce4106839bc2cf7de205a2",
  "placement": 44,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "0f78fe0f75ce4106839bc2cf7de205a2",
  "placement": 54,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "0f78fe0f75ce4106839bc2cf7de205a2",
  "placement": 88,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "0f78fe0f75ce4106839bc2cf7de205a2",
  "placement": 17,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "0f78fe0f75ce4106839bc2cf7de205a2",
  "placement": 24,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "0f78fe0f75ce4106839bc2cf7de205a2",
  "placement": 47,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 33,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 27,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 93,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 76,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 43,
  "time_alive": 1331,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 95,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 43,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 16,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 90,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 71,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "aac29f8456e846389b66b50d07f707cf",
  "placement": 55,
  "time_alive": 889,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "eb0b44f24a4246de903332e17da748eb",
  "placement": 89,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "eb0b44f24a4246de903332e17da748eb",
  "placement": 70,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "eb0b44f24a4246de903332e17da748eb",
  "placement": 65,
  "time_alive": 1066,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "eb0b44f24a4246de903332e17da748eb",
  "placement": 22,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "eb0b44f24a4246de903332e17da748eb",
  "placement": 68,
  "time_alive": 903,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "eb0b44f24a4246de903332e17da748eb",
  "placement": 77,
  "time_alive": 351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 88,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 57,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 47,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 41,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 67,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44",
  "placement": 76,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44",
  "placement": 82,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44",
  "placement": 39,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44",
  "placement": 25,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44",
  "placement": 72,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "4bcad46e7dfc40bfbd06f748fe56ed44",
  "placement": 56,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 63,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 39,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 85,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 34,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 75,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 89,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 55,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 45,
  "time_alive": 1261,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 78,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 86,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 16,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 83,
  "time_alive": 634,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 15,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 95,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 62,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 95,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 69,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 80,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 66,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 37,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 73,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 61,
  "time_alive": 1066,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 27,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 67,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 83,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 26,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 89,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 93,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 48,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 95,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 91,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 23,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 87,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 56,
  "time_alive": 1118,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 71,
  "time_alive": 471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "04f2570e382140258077d5e0584324b7",
  "placement": 28,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "04f2570e382140258077d5e0584324b7",
  "placement": 98,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "04f2570e382140258077d5e0584324b7",
  "placement": 74,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "04f2570e382140258077d5e0584324b7",
  "placement": 66,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "04f2570e382140258077d5e0584324b7",
  "placement": 46,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "04f2570e382140258077d5e0584324b7",
  "placement": 46,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "b598acd8067c4886a592bde4cc864623",
  "placement": 85,
  "time_alive": 539,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "b598acd8067c4886a592bde4cc864623",
  "placement": 47,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "b598acd8067c4886a592bde4cc864623",
  "placement": 78,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "b598acd8067c4886a592bde4cc864623",
  "placement": 44,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "b598acd8067c4886a592bde4cc864623",
  "placement": 90,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "b598acd8067c4886a592bde4cc864623",
  "placement": 19,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "ea8d80f57d504a038641c8adfd0c040f",
  "placement": 45,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "ea8d80f57d504a038641c8adfd0c040f",
  "placement": 89,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "ea8d80f57d504a038641c8adfd0c040f",
  "placement": 75,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "ea8d80f57d504a038641c8adfd0c040f",
  "placement": 64,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "ea8d80f57d504a038641c8adfd0c040f",
  "placement": 50,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "ea8d80f57d504a038641c8adfd0c040f",
  "placement": 52,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 50,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 75,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 53,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 31,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 51,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 97,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "2171bd037386494e9de0271e0ac59efb",
  "placement": 84,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "2171bd037386494e9de0271e0ac59efb",
  "placement": 42,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "2171bd037386494e9de0271e0ac59efb",
  "placement": 87,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "2171bd037386494e9de0271e0ac59efb",
  "placement": 55,
  "time_alive": 1133,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "2171bd037386494e9de0271e0ac59efb",
  "placement": 88,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "2171bd037386494e9de0271e0ac59efb",
  "placement": 68,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 79,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 42,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 54,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 73,
  "time_alive": 623,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "df490882a2bf4dd7b2e22d7493d15861",
  "placement": 70,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 49,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 28,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 72,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 93,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 81,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 75,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "f0733cc614ed4f489e3286fabefc891a",
  "placement": 74,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "f0733cc614ed4f489e3286fabefc891a",
  "placement": 30,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "f0733cc614ed4f489e3286fabefc891a",
  "placement": 52,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "f0733cc614ed4f489e3286fabefc891a",
  "placement": 91,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "f0733cc614ed4f489e3286fabefc891a",
  "placement": 37,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 66,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 32,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 76,
  "time_alive": 837,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 80,
  "time_alive": 766,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 89,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 84,
  "time_alive": 235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "81b0d74718864da2afd3ff2882bde779",
  "placement": 68,
  "time_alive": 985,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "81b0d74718864da2afd3ff2882bde779",
  "placement": 77,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "81b0d74718864da2afd3ff2882bde779",
  "placement": 80,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "81b0d74718864da2afd3ff2882bde779",
  "placement": 95,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "81b0d74718864da2afd3ff2882bde779",
  "placement": 42,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "81b0d74718864da2afd3ff2882bde779",
  "placement": 45,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 60,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 60,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 70,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 60,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 62,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 42,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 62,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 96,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 63,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 79,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 29,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 53,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 72,
  "time_alive": 870,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 45,
  "time_alive": 1300,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 99,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 85,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 92,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "92e92b329cf5421fa7874327db7681ed",
  "placement": 81,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 79,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 81,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 60,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 63,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 54,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "71c262a110ce46c5b9b7576f76438266",
  "placement": 43,
  "time_alive": 1236,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 58,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 65,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 61,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 59,
  "time_alive": 1108,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 82,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 58,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 82,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 67,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 75,
  "time_alive": 857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 32,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "378ac839d18a43f4b40c672a622f51d3",
  "placement": 86,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 51,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 94,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 91,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 33,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 94,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 51,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 64,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 97,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 68,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 57,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 77,
  "time_alive": 506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 76,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab",
  "placement": 73,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab",
  "placement": 79,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab",
  "placement": 81,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab",
  "placement": 65,
  "time_alive": 963,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "51ce08fbef95494d9bb76255619bf4ab",
  "placement": 83,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 71,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 72,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 84,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 86,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 55,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 60,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08b5f581-4af7-4a50-b9da-84b0bdb54581",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 90,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 95,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 73,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 56,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 83,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 91,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a626280-e810-46bb-935b-78ee99744181",
  "team_id": "1a063df5e87449f39eedba68c89cb136",
  "placement": 87,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0121ea3b-5be1-4ff5-be9b-225ee4f18278",
  "team_id": "1a063df5e87449f39eedba68c89cb136",
  "placement": 82,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1003bcf7-3139-48b4-ab96-44838eeb3849",
  "team_id": "1a063df5e87449f39eedba68c89cb136",
  "placement": 98,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "23014c3c-6f41-4d87-bd17-255b702e2245",
  "team_id": "1a063df5e87449f39eedba68c89cb136",
  "placement": 87,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039d0a01-2bd2-4106-ad48-ad130329ad1d",
  "team_id": "1a063df5e87449f39eedba68c89cb136",
  "placement": 96,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 1,
  "time_alive": 1522,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 8,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 75,
  "time_alive": 797,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 24,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 1,
  "time_alive": 1512,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 8,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 42,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1536,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 2,
  "time_alive": 1556,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 91,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 9,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 4,
  "time_alive": 1513,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 5,
  "time_alive": 1493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 19,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 19,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 10,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 17,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 77,
  "time_alive": 483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 18,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 81,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 1,
  "time_alive": 1556,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 28,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 2,
  "time_alive": 1536,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 36,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 6,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 9,
  "time_alive": 1509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 49,
  "time_alive": 1240,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 4,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "51312b1c8d614bffacef4e6fea655bb9",
  "placement": 13,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 10,
  "time_alive": 1486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 30,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 5,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 33,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 45,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1486,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 7,
  "time_alive": 1499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 64,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 2,
  "time_alive": 1536,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 3,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 47,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "be98f1a471c44f7f939edac26d599b20",
  "placement": 27,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 56,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 11,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 18,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 6,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 13,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "0c0760ccad674423ac0c21060b325204",
  "placement": 35,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 11,
  "time_alive": 1472,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 28,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 27,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 23,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 20,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 11,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 53,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 4,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 41,
  "time_alive": 1318,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 37,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 32,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 3,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 57,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 2,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 47,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 10,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 70,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c4079131730b46049ef4ba0ac0288d88",
  "placement": 19,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 66,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 8,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 4,
  "time_alive": 1522,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 41,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 5,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 58,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 35,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 74,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 35,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 34,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 1,
  "time_alive": 1536,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 28,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 3,
  "time_alive": 1512,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 56,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 29,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 24,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 90,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 20,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 56,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 30,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 13,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 12,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 91,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 24,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 68,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 6,
  "time_alive": 1520,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 60,
  "time_alive": 1066,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 2,
  "time_alive": 1512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 34,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 8,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 16,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 71,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 11,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 81,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 56,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 30,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 45,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 25,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 73,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 3,
  "time_alive": 1510,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 69,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 95,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 21,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 16,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 9,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 26,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 36,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 9,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 7,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 50,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 56,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 75,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "266b0993e7a4469eb75879a9b2322277",
  "placement": 60,
  "time_alive": 890,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 17,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 22,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 34,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 15,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "7ee7658b4f4b4384a7eafe369c8a5c9a",
  "placement": 70,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 25,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 74,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 74,
  "time_alive": 580,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 18,
  "time_alive": 1416,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 31,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 41,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 13,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 29,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 18,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 88,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "033786339d914cb59286221b820fd4bb",
  "placement": 48,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 94,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 89,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 24,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 16,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 19,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "40a1afeb07744c01be8e3a2ed28cd14b",
  "placement": 22,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 65,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 9,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 73,
  "time_alive": 870,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 59,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 9,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 44,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 88,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 70,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 16,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 15,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 12,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 77,
  "time_alive": 704,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 7,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 53,
  "time_alive": 1118,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "dcf6f6650f2a4440aca03b6151adf26e",
  "placement": 18,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 51,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 40,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 76,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 20,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 7,
  "time_alive": 1486,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 25,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 43,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 33,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 40,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 8,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 11,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 45,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 17,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 42,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 12,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 84,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 48,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 40,
  "time_alive": 1323,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 61,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 75,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 48,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 14,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 8,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "642e72b8ebd34ab785e5d42fab68cb3d",
  "placement": 23,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 3,
  "time_alive": 1516,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 70,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 68,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 48,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 22,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 16,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 48,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 90,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 3,
  "time_alive": 1530,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 58,
  "time_alive": 1095,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 83,
  "time_alive": 293,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "5956bb02a791482598a427fe5cd0ded0",
  "placement": 45,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "5956bb02a791482598a427fe5cd0ded0",
  "placement": 22,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "5956bb02a791482598a427fe5cd0ded0",
  "placement": 4,
  "time_alive": 1526,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "5956bb02a791482598a427fe5cd0ded0",
  "placement": 57,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "5956bb02a791482598a427fe5cd0ded0",
  "placement": 68,
  "time_alive": 702,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "5956bb02a791482598a427fe5cd0ded0",
  "placement": 51,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 19,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 26,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 65,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 69,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 6,
  "time_alive": 1472,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 27,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 50,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 10,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 95,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 71,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "e9144e723a094c29a33d1c7d1740f5ff",
  "placement": 12,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 15,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 32,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 49,
  "time_alive": 1220,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 25,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 57,
  "time_alive": 1055,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 85,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 84,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 51,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 86,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 28,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 23,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 7,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 85,
  "time_alive": 388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 65,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 33,
  "time_alive": 1366,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 31,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 50,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 10,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 50,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 77,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 42,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 69,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 6,
  "time_alive": 1492,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 62,
  "time_alive": 788,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 60,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 15,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 15,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 50,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 58,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 21,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 20,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 23,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 81,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 29,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c3557295012b4bf5a2ef3f20c95134f8",
  "placement": 68,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 39,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 24,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 93,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 12,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 33,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 53,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 23,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 14,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 82,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 64,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 27,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 32,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 29,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 44,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 21,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 79,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 5,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 79,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 68,
  "time_alive": 1016,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 84,
  "time_alive": 345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 7,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 36,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 85,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 66,
  "time_alive": 706,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 16,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 79,
  "time_alive": 549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 32,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 65,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 26,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 31,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 10,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 54,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 46,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 80,
  "time_alive": 339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "9694ac0b78724075ac7d5a1750834160",
  "placement": 86,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 32,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 58,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 96,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 22,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 46,
  "time_alive": 1212,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 30,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 55,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 19,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 45,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 27,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 49,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 73,
  "time_alive": 561,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 6,
  "time_alive": 1507,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 91,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 69,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 21,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 51,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 46,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 18,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 87,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 37,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 26,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 93,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "8b44883a09524968813986df657da706",
  "placement": 21,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 13,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 52,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 78,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 71,
  "time_alive": 737,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 43,
  "time_alive": 1258,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 64,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 47,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 41,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 51,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 17,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 42,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 83,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 62,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 29,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 79,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 42,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 14,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "c81febad1636452c80f8bb8239cbb282",
  "placement": 28,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 64,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 14,
  "time_alive": 1446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 30,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 21,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "eb0ccbe6c5fa4b4390030cd77ce076f4",
  "placement": 77,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 59,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 94,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 55,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 39,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 78,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 14,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 14,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 85,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 65,
  "time_alive": 968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 91,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 25,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 55,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 2,
  "time_alive": 1522,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 72,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 62,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 90,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 72,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "cc57a88db28b4370adae26a209c35639",
  "placement": 67,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 34,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 25,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 28,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f00862a-690f-4cda-8eb7-0eff2c13a8d2",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 54,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0490b852-f216-41f0-aeea-c6484a29466e",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 63,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08c238ed-10c6-4cd3-8d7a-e68dab317821",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 41,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "26e45888-7fb7-41fe-8192-cf48b7acba7a",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 12,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e691aa-dee9-469c-8bf9-d1b91b9c0f7e",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 80,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16115b80-b355-4926-be00-51c6cac2aad6",
  "team_id": "371c1ef29fd7495ea0d4aac9e7b982b6",
  "placement": 17,
  "time_alive": 1436,
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
    