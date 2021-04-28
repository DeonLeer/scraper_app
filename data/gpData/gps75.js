const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 15,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 31,
  "time_alive": 546,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 17,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 29,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 9,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 12,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 20,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 20,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 15,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 6,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 20,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 33,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 17,
  "time_alive": 1297,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 11,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 10,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 17,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 19,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 21,
  "time_alive": 1235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 16,
  "time_alive": 1306,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 21,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 11,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 12,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 26,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 22,
  "time_alive": 1218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 8,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 27,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 19,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 29,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 29,
  "time_alive": 228,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 14,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 21,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 25,
  "time_alive": 1098,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 13,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 11,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 18,
  "time_alive": 1240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 31,
  "time_alive": 293,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 15,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 29,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 20,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 33,
  "time_alive": 128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 14,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 27,
  "time_alive": 708,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 14,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 28,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 25,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 14,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 27,
  "time_alive": 406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 28,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 29,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 23,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 28,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 28,
  "time_alive": 566,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 15,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 24,
  "time_alive": 958,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:d9800f0d5b4e4bb0a924db5096af844c:f75c8f8782cd460e96b2d50b7f0e73c0",
  "placement": 33,
  "time_alive": 287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:d9800f0d5b4e4bb0a924db5096af844c:f75c8f8782cd460e96b2d50b7f0e73c0",
  "placement": 14,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:d9800f0d5b4e4bb0a924db5096af844c:f75c8f8782cd460e96b2d50b7f0e73c0",
  "placement": 31,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:d9800f0d5b4e4bb0a924db5096af844c:f75c8f8782cd460e96b2d50b7f0e73c0",
  "placement": 24,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:d9800f0d5b4e4bb0a924db5096af844c:f75c8f8782cd460e96b2d50b7f0e73c0",
  "placement": 21,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:d9800f0d5b4e4bb0a924db5096af844c:f75c8f8782cd460e96b2d50b7f0e73c0",
  "placement": 17,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 30,
  "time_alive": 725,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 18,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 21,
  "time_alive": 1194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 32,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 24,
  "time_alive": 980,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 23,
  "time_alive": 1045,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 27,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 22,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 33,
  "time_alive": 108,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 26,
  "time_alive": 709,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 20,
  "time_alive": 1156,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 25,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "051b61ff-c829-4d8b-aa5d-78a7f607af50",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 26,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b41dbed-2a7c-40ff-87a6-dd150241d09a",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 26,
  "time_alive": 1025,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ecad2-8c09-411f-88f7-22eaa34db03a",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 32,
  "time_alive": 247,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f041961-63dd-4b80-b92e-54fe46fc5211",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 30,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03bd171a-51fa-48eb-a919-43fc3db17594",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 17,
  "time_alive": 1315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0263bea5-b362-4d36-820c-fd2298fe5842",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 26,
  "time_alive": 713,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 4,
  "time_alive": 1415,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 13,
  "time_alive": 1347,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 2,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 4,
  "time_alive": 1474,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 15,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 2,
  "time_alive": 1487,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 10,
  "time_alive": 1376,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1494,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 8,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1487,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 1,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 15,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 22,
  "time_alive": 1153,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 17,
  "time_alive": 1285,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 3,
  "time_alive": 1427,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 6,
  "time_alive": 1447,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 11,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 1,
  "time_alive": 1501,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 1,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 22,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 5,
  "time_alive": 1423,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 22,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 14,
  "time_alive": 1324,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 2,
  "time_alive": 1501,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 11,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 20,
  "time_alive": 1197,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 2,
  "time_alive": 1477,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1430,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 2,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 6,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 4,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 25,
  "time_alive": 1047,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 26,
  "time_alive": 461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 30,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 12,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 7,
  "time_alive": 1386,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 12,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 21,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 13,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 4,
  "time_alive": 1474,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 21,
  "time_alive": 1118,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 18,
  "time_alive": 1272,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 13,
  "time_alive": 1371,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 1,
  "time_alive": 1495,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 24,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 7,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 8,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 12,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 25,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 8,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 1,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 18,
  "time_alive": 1206,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 17,
  "time_alive": 1282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 27,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 6,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 5,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 9,
  "time_alive": 1383,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 16,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 16,
  "time_alive": 1288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 5,
  "time_alive": 1457,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 7,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 11,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 14,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 21,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 27,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 24,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 18,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 2,
  "time_alive": 1495,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 4,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 12,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 3,
  "time_alive": 1428,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 21,
  "time_alive": 1127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 15,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 26,
  "time_alive": 601,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 20,
  "time_alive": 1213,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 23,
  "time_alive": 994,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 24,
  "time_alive": 984,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 8,
  "time_alive": 1382,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 10,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 6,
  "time_alive": 1456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 6,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 17,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 6,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 29,
  "time_alive": 594,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 5,
  "time_alive": 1413,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 15,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 12,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 15,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 5,
  "time_alive": 1398,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 11,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 24,
  "time_alive": 1114,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 9,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 27,
  "time_alive": 536,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 22,
  "time_alive": 1102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 10,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 31,
  "time_alive": 178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 16,
  "time_alive": 1321,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 3,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 23,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 19,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 8,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 18,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 7,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 10,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 7,
  "time_alive": 1394,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 20,
  "time_alive": 1135,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 29,
  "time_alive": 783,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 32,
  "time_alive": 90,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 18,
  "time_alive": 1246,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 11,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 32,
  "time_alive": 218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 17,
  "time_alive": 1304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 3,
  "time_alive": 1442,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 29,
  "time_alive": 234,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 22,
  "time_alive": 1100,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 25,
  "time_alive": 596,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 9,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 3,
  "time_alive": 1474,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 28,
  "time_alive": 432,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 28,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 28,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 13,
  "time_alive": 1339,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 14,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 19,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 24,
  "time_alive": 1067,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 10,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 20,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 18,
  "time_alive": 1189,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 16,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 23,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 16,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 32,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 9,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 15,
  "time_alive": 1294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 25,
  "time_alive": 1061,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 21,
  "time_alive": 1154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 7,
  "time_alive": 1449,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 17,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 14,
  "time_alive": 1354,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 28,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 30,
  "time_alive": 492,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 17,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 10,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 19,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 13,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 26,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 26,
  "time_alive": 1035,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 31,
  "time_alive": 467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 19,
  "time_alive": 1203,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 23,
  "time_alive": 1041,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 24,
  "time_alive": 619,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 25,
  "time_alive": 958,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 4,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 26,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 23,
  "time_alive": 1160,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 27,
  "time_alive": 438,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 32,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 30,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 22,
  "time_alive": 1124,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 16,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 27,
  "time_alive": 551,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 25,
  "time_alive": 713,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 19,
  "time_alive": 1205,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 33,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 33,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 28,
  "time_alive": 792,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 30,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 31,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 5,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 20,
  "time_alive": 1129,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 23,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 14,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 13,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 30,
  "time_alive": 263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 26,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 29,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 33,
  "time_alive": 80,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 12,
  "time_alive": 1393,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 29,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 29,
  "time_alive": 361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "423b99d5f2d4459ab0801c25a7fae281:8711f0016b224f9bbfdd0abc290b2f77:ee18ee022954402490640d19ba775897",
  "placement": 31,
  "time_alive": 652,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "423b99d5f2d4459ab0801c25a7fae281:8711f0016b224f9bbfdd0abc290b2f77:ee18ee022954402490640d19ba775897",
  "placement": 28,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "423b99d5f2d4459ab0801c25a7fae281:8711f0016b224f9bbfdd0abc290b2f77:ee18ee022954402490640d19ba775897",
  "placement": 30,
  "time_alive": 642,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0d11ea71-a31e-457a-b18e-918a9126e2a3",
  "team_id": "423b99d5f2d4459ab0801c25a7fae281:8711f0016b224f9bbfdd0abc290b2f77:ee18ee022954402490640d19ba775897",
  "placement": 14,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f34320-4c0c-445e-8b75-498560173bbf",
  "team_id": "423b99d5f2d4459ab0801c25a7fae281:8711f0016b224f9bbfdd0abc290b2f77:ee18ee022954402490640d19ba775897",
  "placement": 11,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02d40ac4-1926-446e-acf1-fddd59b5b1dc",
  "team_id": "423b99d5f2d4459ab0801c25a7fae281:8711f0016b224f9bbfdd0abc290b2f77:ee18ee022954402490640d19ba775897",
  "placement": 31,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0475828c-2295-471e-815d-36b3de5a7700",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 19,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07633ac5-7af2-42b4-8e22-065904889d3e",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 31,
  "time_alive": 404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "040fb9bc-2acf-4947-bd7e-a429de2d7381",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 32,
  "time_alive": 456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 2,
  "time_alive": 1818,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 4,
  "time_alive": 1692,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 6,
  "time_alive": 1465,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 8,
  "time_alive": 1657,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 2,
  "time_alive": 1753,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 1,
  "time_alive": 1818,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 1,
  "time_alive": 1784,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 10,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 5,
  "time_alive": 1470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 20,
  "time_alive": 1461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 5,
  "time_alive": 1721,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 24,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 25,
  "time_alive": 1007,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 3,
  "time_alive": 1645,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 2,
  "time_alive": 1644,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 1,
  "time_alive": 1828,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 4,
  "time_alive": 1724,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 18,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 2,
  "time_alive": 1784,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 2,
  "time_alive": 1734,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 19,
  "time_alive": 1236,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 18,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 30,
  "time_alive": 388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 7,
  "time_alive": 1689,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 12,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 1,
  "time_alive": 1734,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 18,
  "time_alive": 1249,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 16,
  "time_alive": 1510,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 8,
  "time_alive": 1623,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 3,
  "time_alive": 1813,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 3,
  "time_alive": 1707,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 12,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 17,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 12,
  "time_alive": 1546,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 21,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 12,
  "time_alive": 1531,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 30,
  "time_alive": 521,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 4,
  "time_alive": 1545,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 12,
  "time_alive": 1387,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 2,
  "time_alive": 1828,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 6,
  "time_alive": 1691,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 10,
  "time_alive": 1549,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 6,
  "time_alive": 1641,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 5,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 9,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 25,
  "time_alive": 1046,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 27,
  "time_alive": 911,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 13,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 8,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 6,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 21,
  "time_alive": 1411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 1,
  "time_alive": 1753,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 21,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 31,
  "time_alive": 363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 13,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 4,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 6,
  "time_alive": 1693,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 9,
  "time_alive": 1611,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 13,
  "time_alive": 1530,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 20,
  "time_alive": 1286,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 29,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 1,
  "time_alive": 1644,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 11,
  "time_alive": 1553,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 11,
  "time_alive": 1595,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 11,
  "time_alive": 1533,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 7,
  "time_alive": 1580,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 22,
  "time_alive": 1197,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 21,
  "time_alive": 1198,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 3,
  "time_alive": 1811,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 12,
  "time_alive": 1586,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 24,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 7,
  "time_alive": 1457,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 14,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 14,
  "time_alive": 1521,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 14,
  "time_alive": 1523,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 22,
  "time_alive": 1289,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 10,
  "time_alive": 1545,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 23,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 10,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 26,
  "time_alive": 838,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 10,
  "time_alive": 1609,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 15,
  "time_alive": 1518,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 19,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 31,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 3,
  "time_alive": 1599,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 13,
  "time_alive": 1537,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 20,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 27,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 8,
  "time_alive": 1580,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 31,
  "time_alive": 451,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 5,
  "time_alive": 1728,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 22,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 14,
  "time_alive": 1522,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 5,
  "time_alive": 1665,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 20,
  "time_alive": 1244,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 28,
  "time_alive": 740,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 10,
  "time_alive": 1567,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 16,
  "time_alive": 1514,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "613e71338d834dc692f9abd90259d892:9d76faac42d0481caa238018f59153a8:fe206c3d6ba249089b1517d94ee9cb8a",
  "placement": 6,
  "time_alive": 1722,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "613e71338d834dc692f9abd90259d892:9d76faac42d0481caa238018f59153a8:fe206c3d6ba249089b1517d94ee9cb8a",
  "placement": 15,
  "time_alive": 1426,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "613e71338d834dc692f9abd90259d892:9d76faac42d0481caa238018f59153a8:fe206c3d6ba249089b1517d94ee9cb8a",
  "placement": 16,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "613e71338d834dc692f9abd90259d892:9d76faac42d0481caa238018f59153a8:fe206c3d6ba249089b1517d94ee9cb8a",
  "placement": 13,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "613e71338d834dc692f9abd90259d892:9d76faac42d0481caa238018f59153a8:fe206c3d6ba249089b1517d94ee9cb8a",
  "placement": 17,
  "time_alive": 1501,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "613e71338d834dc692f9abd90259d892:9d76faac42d0481caa238018f59153a8:fe206c3d6ba249089b1517d94ee9cb8a",
  "placement": 18,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "106f44cec8fa47c69cb2acf932c4a982:1b77d884d5cc46058ed85461ef58ec73:cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 9,
  "time_alive": 1616,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "106f44cec8fa47c69cb2acf932c4a982:1b77d884d5cc46058ed85461ef58ec73:cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 9,
  "time_alive": 1564,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "106f44cec8fa47c69cb2acf932c4a982:1b77d884d5cc46058ed85461ef58ec73:cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 14,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "106f44cec8fa47c69cb2acf932c4a982:1b77d884d5cc46058ed85461ef58ec73:cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 26,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "106f44cec8fa47c69cb2acf932c4a982:1b77d884d5cc46058ed85461ef58ec73:cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 24,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "106f44cec8fa47c69cb2acf932c4a982:1b77d884d5cc46058ed85461ef58ec73:cae8288c10924f9d8e93e4cabfad65cf",
  "placement": 28,
  "time_alive": 729,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 25,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 16,
  "time_alive": 1425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 26,
  "time_alive": 1081,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 8,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 23,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 3,
  "time_alive": 1744,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 28,
  "time_alive": 339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 21,
  "time_alive": 1260,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 15,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 23,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 30,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 7,
  "time_alive": 1653,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 5,
  "time_alive": 1730,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 17,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 18,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 32,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 27,
  "time_alive": 835,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 17,
  "time_alive": 1478,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "6f1c176471d54f448a935b8c0a4519a6:76a70d72f58e4ef4be9f5a04c36cedca:f58e30cfa82f4f04ad2aba2914684a9c",
  "placement": 4,
  "time_alive": 1774,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "6f1c176471d54f448a935b8c0a4519a6:76a70d72f58e4ef4be9f5a04c36cedca:f58e30cfa82f4f04ad2aba2914684a9c",
  "placement": 28,
  "time_alive": 750,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "6f1c176471d54f448a935b8c0a4519a6:76a70d72f58e4ef4be9f5a04c36cedca:f58e30cfa82f4f04ad2aba2914684a9c",
  "placement": 27,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "6f1c176471d54f448a935b8c0a4519a6:76a70d72f58e4ef4be9f5a04c36cedca:f58e30cfa82f4f04ad2aba2914684a9c",
  "placement": 22,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "6f1c176471d54f448a935b8c0a4519a6:76a70d72f58e4ef4be9f5a04c36cedca:f58e30cfa82f4f04ad2aba2914684a9c",
  "placement": 22,
  "time_alive": 1410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "6f1c176471d54f448a935b8c0a4519a6:76a70d72f58e4ef4be9f5a04c36cedca:f58e30cfa82f4f04ad2aba2914684a9c",
  "placement": 15,
  "time_alive": 1519,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 26,
  "time_alive": 869,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 27,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 30,
  "time_alive": 469,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 20,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 7,
  "time_alive": 1685,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 23,
  "time_alive": 1273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 8,
  "time_alive": 1634,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 14,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 17,
  "time_alive": 1345,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 25,
  "time_alive": 1151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 31,
  "time_alive": 327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 25,
  "time_alive": 1035,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 17,
  "time_alive": 1488,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 23,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 21,
  "time_alive": 1241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 29,
  "time_alive": 685,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 4,
  "time_alive": 1734,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 29,
  "time_alive": 655,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "20be8b17b7eb4b7db2b469004da9abaa:671bd4a796814acda46b904a4eaa6a10:6c5927d5958846c6b09968140023c38c",
  "placement": 19,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "20be8b17b7eb4b7db2b469004da9abaa:671bd4a796814acda46b904a4eaa6a10:6c5927d5958846c6b09968140023c38c",
  "placement": 18,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "20be8b17b7eb4b7db2b469004da9abaa:671bd4a796814acda46b904a4eaa6a10:6c5927d5958846c6b09968140023c38c",
  "placement": 9,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "20be8b17b7eb4b7db2b469004da9abaa:671bd4a796814acda46b904a4eaa6a10:6c5927d5958846c6b09968140023c38c",
  "placement": 15,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "20be8b17b7eb4b7db2b469004da9abaa:671bd4a796814acda46b904a4eaa6a10:6c5927d5958846c6b09968140023c38c",
  "placement": 28,
  "time_alive": 612,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "20be8b17b7eb4b7db2b469004da9abaa:671bd4a796814acda46b904a4eaa6a10:6c5927d5958846c6b09968140023c38c",
  "placement": 13,
  "time_alive": 1524,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 16,
  "time_alive": 1499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 11,
  "time_alive": 1541,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 25,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 27,
  "time_alive": 802,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 15,
  "time_alive": 1520,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 24,
  "time_alive": 1265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 29,
  "time_alive": 302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 32,
  "time_alive": 278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 32,
  "time_alive": 338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 7,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 29,
  "time_alive": 588,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 24,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 30,
  "time_alive": 483,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 9,
  "time_alive": 1589,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 19,
  "time_alive": 1423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 30,
  "time_alive": 194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 22,
  "time_alive": 1253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 28,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 16,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 19,
  "time_alive": 1465,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0463f4a9-5cb3-4ded-9872-34d7e9835875",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 26,
  "time_alive": 1003,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01f1b21c-737f-4aed-a886-4f0113121c48",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 20,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "045b0834-b116-4247-9bca-9bee8f6557c3",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 26,
  "time_alive": 907,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06172ff5-3425-4431-ac3a-5f63f6c37996",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 19,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2af0e7e8-aef8-4b86-a3c0-3ff14f333d75",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 24,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00799d22-fa59-449d-a086-338525e49ef6",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 29,
  "time_alive": 373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 5,
  "time_alive": 1434,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 5,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 3,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 5,
  "time_alive": 1412,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 4,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 9,
  "time_alive": 1369,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 10,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 2,
  "time_alive": 1484,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 10,
  "time_alive": 1371,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 2,
  "time_alive": 1464,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 6,
  "time_alive": 1400,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 2,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 21,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 2,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 3,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 29,
  "time_alive": 363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 11,
  "time_alive": 1363,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 20,
  "time_alive": 1255,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 31,
  "time_alive": 240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 7,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 2,
  "time_alive": 1513,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 18,
  "time_alive": 1296,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 3,
  "time_alive": 1469,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1436,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 9,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 22,
  "time_alive": 1133,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 1,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 6,
  "time_alive": 1413,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 4,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 16,
  "time_alive": 1317,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 23,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 11,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 20,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 9,
  "time_alive": 1393,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 1,
  "time_alive": 1513,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 7,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 24,
  "time_alive": 1065,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 1,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 9,
  "time_alive": 1372,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 22,
  "time_alive": 1065,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 32,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 24,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 10,
  "time_alive": 1368,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 3,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 7,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 8,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 17,
  "time_alive": 1260,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 13,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 7,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 23,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 15,
  "time_alive": 1266,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 18,
  "time_alive": 1309,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 11,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 9,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 2,
  "time_alive": 1476,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 14,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 25,
  "time_alive": 871,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 24,
  "time_alive": 945,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 7,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 6,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 1,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 8,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 6,
  "time_alive": 1447,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 4,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 14,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 21,
  "time_alive": 1139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 5,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 13,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 13,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 5,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 22,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 1,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 14,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 19,
  "time_alive": 1262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 3,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 12,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 23,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 8,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 17,
  "time_alive": 1311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 15,
  "time_alive": 1307,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 14,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 25,
  "time_alive": 835,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 6,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 3,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 16,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 7,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 11,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 31,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 13,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 20,
  "time_alive": 1163,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 26,
  "time_alive": 541,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:8913629aa8bf4c0282de2e7e17c1e661:edd63da92a5c46dab17f688e82063490",
  "placement": 6,
  "time_alive": 1426,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:8913629aa8bf4c0282de2e7e17c1e661:edd63da92a5c46dab17f688e82063490",
  "placement": 18,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:8913629aa8bf4c0282de2e7e17c1e661:edd63da92a5c46dab17f688e82063490",
  "placement": 26,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:8913629aa8bf4c0282de2e7e17c1e661:edd63da92a5c46dab17f688e82063490",
  "placement": 8,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:8913629aa8bf4c0282de2e7e17c1e661:edd63da92a5c46dab17f688e82063490",
  "placement": 17,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:8913629aa8bf4c0282de2e7e17c1e661:edd63da92a5c46dab17f688e82063490",
  "placement": 15,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:d933c662555a4405b84b628ca7339f3a:eb9a43c50db74aa5841570767d433682",
  "placement": 18,
  "time_alive": 1278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:d933c662555a4405b84b628ca7339f3a:eb9a43c50db74aa5841570767d433682",
  "placement": 27,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:d933c662555a4405b84b628ca7339f3a:eb9a43c50db74aa5841570767d433682",
  "placement": 32,
  "time_alive": 86,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:d933c662555a4405b84b628ca7339f3a:eb9a43c50db74aa5841570767d433682",
  "placement": 15,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:d933c662555a4405b84b628ca7339f3a:eb9a43c50db74aa5841570767d433682",
  "placement": 5,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:d933c662555a4405b84b628ca7339f3a:eb9a43c50db74aa5841570767d433682",
  "placement": 12,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01:72a46fb0355b4af6bb0cb4948bbd7c5b:8ac5a175356f4648ac6e3ff4dd46f750",
  "placement": 12,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01:72a46fb0355b4af6bb0cb4948bbd7c5b:8ac5a175356f4648ac6e3ff4dd46f750",
  "placement": 28,
  "time_alive": 338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01:72a46fb0355b4af6bb0cb4948bbd7c5b:8ac5a175356f4648ac6e3ff4dd46f750",
  "placement": 11,
  "time_alive": 1357,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01:72a46fb0355b4af6bb0cb4948bbd7c5b:8ac5a175356f4648ac6e3ff4dd46f750",
  "placement": 26,
  "time_alive": 655,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01:72a46fb0355b4af6bb0cb4948bbd7c5b:8ac5a175356f4648ac6e3ff4dd46f750",
  "placement": 11,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "30b0a1d1ba20475f8351bb52982d1b01:72a46fb0355b4af6bb0cb4948bbd7c5b:8ac5a175356f4648ac6e3ff4dd46f750",
  "placement": 21,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "4d5a2ee86e784a10a78ed606fcc881a7:ad892a460017499e9e8d9515466707a0:ea75b4ee33f146418b740a0f00edcce0",
  "placement": 16,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "4d5a2ee86e784a10a78ed606fcc881a7:ad892a460017499e9e8d9515466707a0:ea75b4ee33f146418b740a0f00edcce0",
  "placement": 12,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "4d5a2ee86e784a10a78ed606fcc881a7:ad892a460017499e9e8d9515466707a0:ea75b4ee33f146418b740a0f00edcce0",
  "placement": 13,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "4d5a2ee86e784a10a78ed606fcc881a7:ad892a460017499e9e8d9515466707a0:ea75b4ee33f146418b740a0f00edcce0",
  "placement": 19,
  "time_alive": 1197,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "4d5a2ee86e784a10a78ed606fcc881a7:ad892a460017499e9e8d9515466707a0:ea75b4ee33f146418b740a0f00edcce0",
  "placement": 12,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "4d5a2ee86e784a10a78ed606fcc881a7:ad892a460017499e9e8d9515466707a0:ea75b4ee33f146418b740a0f00edcce0",
  "placement": 20,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "82d0c0675055408e8b4815d46456bf68:8fcffecbb6dc4a9c88b898632286297c:c4543334b16e446fb7671773dc14ed09",
  "placement": 9,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "82d0c0675055408e8b4815d46456bf68:8fcffecbb6dc4a9c88b898632286297c:c4543334b16e446fb7671773dc14ed09",
  "placement": 16,
  "time_alive": 1260,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "82d0c0675055408e8b4815d46456bf68:8fcffecbb6dc4a9c88b898632286297c:c4543334b16e446fb7671773dc14ed09",
  "placement": 28,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "82d0c0675055408e8b4815d46456bf68:8fcffecbb6dc4a9c88b898632286297c:c4543334b16e446fb7671773dc14ed09",
  "placement": 25,
  "time_alive": 706,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "82d0c0675055408e8b4815d46456bf68:8fcffecbb6dc4a9c88b898632286297c:c4543334b16e446fb7671773dc14ed09",
  "placement": 31,
  "time_alive": 316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "82d0c0675055408e8b4815d46456bf68:8fcffecbb6dc4a9c88b898632286297c:c4543334b16e446fb7671773dc14ed09",
  "placement": 8,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 31,
  "time_alive": 107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 29,
  "time_alive": 301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 20,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 20,
  "time_alive": 1194,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 10,
  "time_alive": 1379,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "86304dbe07ff433a89c53a7097ecf9e2:b6c80d21813e4dbab8612e261ecc2118:da880530598846d7bb48984995d1ddae",
  "placement": 19,
  "time_alive": 1146,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 25,
  "time_alive": 696,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 4,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 21,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 21,
  "time_alive": 1138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 14,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "42a5d553798240b6a66ecd921ea2cc4e:78210884fca64607ae3f8a5a6f0f07e5:c116c755c27f4ceeb32105e599dfd264",
  "placement": 18,
  "time_alive": 1300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:b15b7b90c80c4fa18c04e62278779131",
  "placement": 24,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:b15b7b90c80c4fa18c04e62278779131",
  "placement": 19,
  "time_alive": 1223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:b15b7b90c80c4fa18c04e62278779131",
  "placement": 10,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:b15b7b90c80c4fa18c04e62278779131",
  "placement": 18,
  "time_alive": 1215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:b15b7b90c80c4fa18c04e62278779131",
  "placement": 15,
  "time_alive": 1321,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:b15b7b90c80c4fa18c04e62278779131",
  "placement": 25,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 17,
  "time_alive": 1296,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 17,
  "time_alive": 1248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 30,
  "time_alive": 209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 30,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 28,
  "time_alive": 529,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "29defa412eca45c48b29e69390ea4a7d:c609542c90d549d4bf9352c5f885e2e8:f9674478b4ef45ecb451935be1bccbb0",
  "placement": 31,
  "time_alive": 193,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "372657aefaca4c0bba567975ab1f79a6:3f638e49c21840e5b43de6f1d1a70c72:af7d1528a76b4ae3b53b97f2a894ba04",
  "placement": 27,
  "time_alive": 370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "372657aefaca4c0bba567975ab1f79a6:3f638e49c21840e5b43de6f1d1a70c72:af7d1528a76b4ae3b53b97f2a894ba04",
  "placement": 8,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "372657aefaca4c0bba567975ab1f79a6:3f638e49c21840e5b43de6f1d1a70c72:af7d1528a76b4ae3b53b97f2a894ba04",
  "placement": 27,
  "time_alive": 472,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "372657aefaca4c0bba567975ab1f79a6:3f638e49c21840e5b43de6f1d1a70c72:af7d1528a76b4ae3b53b97f2a894ba04",
  "placement": 12,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "372657aefaca4c0bba567975ab1f79a6:3f638e49c21840e5b43de6f1d1a70c72:af7d1528a76b4ae3b53b97f2a894ba04",
  "placement": 26,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "372657aefaca4c0bba567975ab1f79a6:3f638e49c21840e5b43de6f1d1a70c72:af7d1528a76b4ae3b53b97f2a894ba04",
  "placement": 28,
  "time_alive": 388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 26,
  "time_alive": 638,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 22,
  "time_alive": 1145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 15,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 16,
  "time_alive": 1267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 19,
  "time_alive": 1285,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "12f0e2fc110e491b9d888a71b49619c5:199846dd563b4fd7873d302b1dc2918e:89cad04cb2c1421d9d6be2dfdb9b07a0",
  "placement": 22,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "2adb352b6bfd424db7edb91fd02bbab8:4be94142573f424892c49254ee41b0a9:64a428b34e574e85a333f4bc2de8ac5e",
  "placement": 21,
  "time_alive": 1165,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "2adb352b6bfd424db7edb91fd02bbab8:4be94142573f424892c49254ee41b0a9:64a428b34e574e85a333f4bc2de8ac5e",
  "placement": 32,
  "time_alive": 134,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "2adb352b6bfd424db7edb91fd02bbab8:4be94142573f424892c49254ee41b0a9:64a428b34e574e85a333f4bc2de8ac5e",
  "placement": 23,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "2adb352b6bfd424db7edb91fd02bbab8:4be94142573f424892c49254ee41b0a9:64a428b34e574e85a333f4bc2de8ac5e",
  "placement": 24,
  "time_alive": 712,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "2adb352b6bfd424db7edb91fd02bbab8:4be94142573f424892c49254ee41b0a9:64a428b34e574e85a333f4bc2de8ac5e",
  "placement": 32,
  "time_alive": 146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "2adb352b6bfd424db7edb91fd02bbab8:4be94142573f424892c49254ee41b0a9:64a428b34e574e85a333f4bc2de8ac5e",
  "placement": 32,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "406b10b466bc4dc3b61fa2c3cfcd98f3:64d0417c144347b28431257d2ebcbbe0:817fb0a7f1a3401f93fd6e722c3ec958",
  "placement": 28,
  "time_alive": 155,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "406b10b466bc4dc3b61fa2c3cfcd98f3:64d0417c144347b28431257d2ebcbbe0:817fb0a7f1a3401f93fd6e722c3ec958",
  "placement": 23,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "406b10b466bc4dc3b61fa2c3cfcd98f3:64d0417c144347b28431257d2ebcbbe0:817fb0a7f1a3401f93fd6e722c3ec958",
  "placement": 16,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "406b10b466bc4dc3b61fa2c3cfcd98f3:64d0417c144347b28431257d2ebcbbe0:817fb0a7f1a3401f93fd6e722c3ec958",
  "placement": 29,
  "time_alive": 325,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "406b10b466bc4dc3b61fa2c3cfcd98f3:64d0417c144347b28431257d2ebcbbe0:817fb0a7f1a3401f93fd6e722c3ec958",
  "placement": 30,
  "time_alive": 358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "406b10b466bc4dc3b61fa2c3cfcd98f3:64d0417c144347b28431257d2ebcbbe0:817fb0a7f1a3401f93fd6e722c3ec958",
  "placement": 27,
  "time_alive": 524,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "1b81969ffc3b44aaa76939e03c294d9f:5fa6658fa27a4b6d80cc52144df27d85:6027fd6b36a34efcbc4addea986a3e27",
  "placement": 29,
  "time_alive": 143,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "1b81969ffc3b44aaa76939e03c294d9f:5fa6658fa27a4b6d80cc52144df27d85:6027fd6b36a34efcbc4addea986a3e27",
  "placement": 30,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "1b81969ffc3b44aaa76939e03c294d9f:5fa6658fa27a4b6d80cc52144df27d85:6027fd6b36a34efcbc4addea986a3e27",
  "placement": 19,
  "time_alive": 1237,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "1b81969ffc3b44aaa76939e03c294d9f:5fa6658fa27a4b6d80cc52144df27d85:6027fd6b36a34efcbc4addea986a3e27",
  "placement": 28,
  "time_alive": 373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "1b81969ffc3b44aaa76939e03c294d9f:5fa6658fa27a4b6d80cc52144df27d85:6027fd6b36a34efcbc4addea986a3e27",
  "placement": 23,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "1b81969ffc3b44aaa76939e03c294d9f:5fa6658fa27a4b6d80cc52144df27d85:6027fd6b36a34efcbc4addea986a3e27",
  "placement": 13,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "4095ab52d2a946309f6c86ee16c42376:cca300d8946a49fdbb41908e5618c23b:d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 30,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "4095ab52d2a946309f6c86ee16c42376:cca300d8946a49fdbb41908e5618c23b:d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 24,
  "time_alive": 968,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "4095ab52d2a946309f6c86ee16c42376:cca300d8946a49fdbb41908e5618c23b:d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 17,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "4095ab52d2a946309f6c86ee16c42376:cca300d8946a49fdbb41908e5618c23b:d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 27,
  "time_alive": 432,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "4095ab52d2a946309f6c86ee16c42376:cca300d8946a49fdbb41908e5618c23b:d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 25,
  "time_alive": 922,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "4095ab52d2a946309f6c86ee16c42376:cca300d8946a49fdbb41908e5618c23b:d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 30,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8586a06c-29ff-4146-8c00-f7db18137e6a",
  "team_id": "27870c987fcd4cc1b129c44d5e2f8615:5d639e5ac9894538a5b7ca0f1ee38c3c:74c4a21f92a04949aa9a0d1b4eb6ce59",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0894dcd2-44fd-4451-a1f3-5f6f5df31f44",
  "team_id": "27870c987fcd4cc1b129c44d5e2f8615:5d639e5ac9894538a5b7ca0f1ee38c3c:74c4a21f92a04949aa9a0d1b4eb6ce59",
  "placement": 26,
  "time_alive": 764,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43cabb3f-e51f-43d1-b5f4-4967022a0bda",
  "team_id": "27870c987fcd4cc1b129c44d5e2f8615:5d639e5ac9894538a5b7ca0f1ee38c3c:74c4a21f92a04949aa9a0d1b4eb6ce59",
  "placement": 29,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b3925ee-8611-4b35-8530-cef26a99de53",
  "team_id": "27870c987fcd4cc1b129c44d5e2f8615:5d639e5ac9894538a5b7ca0f1ee38c3c:74c4a21f92a04949aa9a0d1b4eb6ce59",
  "placement": 31,
  "time_alive": 162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e7a2638-fc28-4a6d-8b53-785f915463e8",
  "team_id": "27870c987fcd4cc1b129c44d5e2f8615:5d639e5ac9894538a5b7ca0f1ee38c3c:74c4a21f92a04949aa9a0d1b4eb6ce59",
  "placement": 27,
  "time_alive": 655,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e2d79ed-1fa5-4231-a5aa-ee3059d51a05",
  "team_id": "27870c987fcd4cc1b129c44d5e2f8615:5d639e5ac9894538a5b7ca0f1ee38c3c:74c4a21f92a04949aa9a0d1b4eb6ce59",
  "placement": 29,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 3,
  "time_alive": 1390,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 5,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 7,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 1,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 2,
  "time_alive": 1513,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 1,
  "time_alive": 1510,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 1,
  "time_alive": 1395,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 7,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 24,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 5,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 10,
  "time_alive": 1356,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 2,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 19,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1488,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 1,
  "time_alive": 1509,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 12,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 12,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 16,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 4,
  "time_alive": 1430,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 3,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 1,
  "time_alive": 1513,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 29,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 2,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 6,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 8,
  "time_alive": 1386,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 6,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 24,
  "time_alive": 571,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 3,
  "time_alive": 1478,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 17,
  "time_alive": 1268,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 1,
  "time_alive": 1488,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 16,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 15,
  "time_alive": 1337,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 4,
  "time_alive": 1482,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 9,
  "time_alive": 1435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 9,
  "time_alive": 1335,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 11,
  "time_alive": 1351,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 26,
  "time_alive": 953,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 8,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 6,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 7,
  "time_alive": 1443,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 11,
  "time_alive": 1300,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 10,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 2,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 11,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 13,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 23,
  "time_alive": 1030,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 8,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 3,
  "time_alive": 1482,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 9,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 7,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 12,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 13,
  "time_alive": 1286,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 9,
  "time_alive": 1385,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 6,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 19,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 3,
  "time_alive": 1502,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 25,
  "time_alive": 641,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 4,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 12,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 2,
  "time_alive": 1509,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 11,
  "time_alive": 1372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 27,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 5,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 16,
  "time_alive": 1273,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 3,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 14,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 4,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 31,
  "time_alive": 121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1373,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 18,
  "time_alive": 1292,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 28,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 19,
  "time_alive": 1212,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 10,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 22,
  "time_alive": 1067,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 4,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 9,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 24,
  "time_alive": 1083,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 20,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 4,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 25,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 17,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 5,
  "time_alive": 1425,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 17,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 5,
  "time_alive": 1431,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 20,
  "time_alive": 1098,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 15,
  "time_alive": 1280,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 23,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 30,
  "time_alive": 770,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 13,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 8,
  "time_alive": 1371,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 31,
  "time_alive": 144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "01cd1851f94f4bfeae1a0bfb4b5976cd:83a92ae788cf4d359819a8a91525720b:b4e049673aee487fb84391fecd7ffc07",
  "placement": 29,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "01cd1851f94f4bfeae1a0bfb4b5976cd:83a92ae788cf4d359819a8a91525720b:b4e049673aee487fb84391fecd7ffc07",
  "placement": 10,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "01cd1851f94f4bfeae1a0bfb4b5976cd:83a92ae788cf4d359819a8a91525720b:b4e049673aee487fb84391fecd7ffc07",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "01cd1851f94f4bfeae1a0bfb4b5976cd:83a92ae788cf4d359819a8a91525720b:b4e049673aee487fb84391fecd7ffc07",
  "placement": 16,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "01cd1851f94f4bfeae1a0bfb4b5976cd:83a92ae788cf4d359819a8a91525720b:b4e049673aee487fb84391fecd7ffc07",
  "placement": 13,
  "time_alive": 1336,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "01cd1851f94f4bfeae1a0bfb4b5976cd:83a92ae788cf4d359819a8a91525720b:b4e049673aee487fb84391fecd7ffc07",
  "placement": 17,
  "time_alive": 1291,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "2b1ab3001d084aa0a293043c7fc88601:4bbe269a090b4658993c919f0ed24d01:6b41306f0a4b4814afeeb164c5bd9331",
  "placement": 32,
  "time_alive": 114,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "2b1ab3001d084aa0a293043c7fc88601:4bbe269a090b4658993c919f0ed24d01:6b41306f0a4b4814afeeb164c5bd9331",
  "placement": 14,
  "time_alive": 1323,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "2b1ab3001d084aa0a293043c7fc88601:4bbe269a090b4658993c919f0ed24d01:6b41306f0a4b4814afeeb164c5bd9331",
  "placement": 17,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "2b1ab3001d084aa0a293043c7fc88601:4bbe269a090b4658993c919f0ed24d01:6b41306f0a4b4814afeeb164c5bd9331",
  "placement": 22,
  "time_alive": 1130,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "2b1ab3001d084aa0a293043c7fc88601:4bbe269a090b4658993c919f0ed24d01:6b41306f0a4b4814afeeb164c5bd9331",
  "placement": 9,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "2b1ab3001d084aa0a293043c7fc88601:4bbe269a090b4658993c919f0ed24d01:6b41306f0a4b4814afeeb164c5bd9331",
  "placement": 16,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "5e96a123a1d24b20bddb96fc892f9d71:917816c47f6e4d21b9b60e73918ccf08:cb82ffe03a2e4295a98059c7cdfd318d",
  "placement": 26,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "5e96a123a1d24b20bddb96fc892f9d71:917816c47f6e4d21b9b60e73918ccf08:cb82ffe03a2e4295a98059c7cdfd318d",
  "placement": 13,
  "time_alive": 1340,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "5e96a123a1d24b20bddb96fc892f9d71:917816c47f6e4d21b9b60e73918ccf08:cb82ffe03a2e4295a98059c7cdfd318d",
  "placement": 11,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "5e96a123a1d24b20bddb96fc892f9d71:917816c47f6e4d21b9b60e73918ccf08:cb82ffe03a2e4295a98059c7cdfd318d",
  "placement": 25,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "5e96a123a1d24b20bddb96fc892f9d71:917816c47f6e4d21b9b60e73918ccf08:cb82ffe03a2e4295a98059c7cdfd318d",
  "placement": 29,
  "time_alive": 352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "5e96a123a1d24b20bddb96fc892f9d71:917816c47f6e4d21b9b60e73918ccf08:cb82ffe03a2e4295a98059c7cdfd318d",
  "placement": 24,
  "time_alive": 810,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "1dd37cbf120d443988a6ba59864157d8:4f0d8b4929d74970a982c19fa097a4d7:5c72e9a7c4ef402183bcd04910db655f",
  "placement": 8,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "1dd37cbf120d443988a6ba59864157d8:4f0d8b4929d74970a982c19fa097a4d7:5c72e9a7c4ef402183bcd04910db655f",
  "placement": 21,
  "time_alive": 1129,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "1dd37cbf120d443988a6ba59864157d8:4f0d8b4929d74970a982c19fa097a4d7:5c72e9a7c4ef402183bcd04910db655f",
  "placement": 30,
  "time_alive": 305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "1dd37cbf120d443988a6ba59864157d8:4f0d8b4929d74970a982c19fa097a4d7:5c72e9a7c4ef402183bcd04910db655f",
  "placement": 15,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "1dd37cbf120d443988a6ba59864157d8:4f0d8b4929d74970a982c19fa097a4d7:5c72e9a7c4ef402183bcd04910db655f",
  "placement": 14,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 14,
  "time_alive": 1283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 20,
  "time_alive": 1262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 15,
  "time_alive": 1323,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 27,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 14,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "6cb2c0f2e9d741dd8f134ea496a89dbc:c5a9a2be9acf49f591290269cde8357c:f6c2963f55264ebf940db006542b6c94",
  "placement": 21,
  "time_alive": 979,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "3c18eebf63f046d1af7bea423c79a8dd:9355f629b0484abf8acfc73e1e19b7bd:d8e198327bae479791b715bfcbbc6a4e",
  "placement": 5,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "3c18eebf63f046d1af7bea423c79a8dd:9355f629b0484abf8acfc73e1e19b7bd:d8e198327bae479791b715bfcbbc6a4e",
  "placement": 26,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "3c18eebf63f046d1af7bea423c79a8dd:9355f629b0484abf8acfc73e1e19b7bd:d8e198327bae479791b715bfcbbc6a4e",
  "placement": 12,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "3c18eebf63f046d1af7bea423c79a8dd:9355f629b0484abf8acfc73e1e19b7bd:d8e198327bae479791b715bfcbbc6a4e",
  "placement": 32,
  "time_alive": 170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "3c18eebf63f046d1af7bea423c79a8dd:9355f629b0484abf8acfc73e1e19b7bd:d8e198327bae479791b715bfcbbc6a4e",
  "placement": 28,
  "time_alive": 353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "3c18eebf63f046d1af7bea423c79a8dd:9355f629b0484abf8acfc73e1e19b7bd:d8e198327bae479791b715bfcbbc6a4e",
  "placement": 22,
  "time_alive": 942,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "2cdbc8fd3e884cce8cb477683d41d207:6ccfad8ebd684a98860a2a52ca7fd18a:db2bbc6eb7ea4536a1465a6791419ada",
  "placement": 10,
  "time_alive": 1303,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "2cdbc8fd3e884cce8cb477683d41d207:6ccfad8ebd684a98860a2a52ca7fd18a:db2bbc6eb7ea4536a1465a6791419ada",
  "placement": 15,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "2cdbc8fd3e884cce8cb477683d41d207:6ccfad8ebd684a98860a2a52ca7fd18a:db2bbc6eb7ea4536a1465a6791419ada",
  "placement": 23,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "2cdbc8fd3e884cce8cb477683d41d207:6ccfad8ebd684a98860a2a52ca7fd18a:db2bbc6eb7ea4536a1465a6791419ada",
  "placement": 23,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "2cdbc8fd3e884cce8cb477683d41d207:6ccfad8ebd684a98860a2a52ca7fd18a:db2bbc6eb7ea4536a1465a6791419ada",
  "placement": 22,
  "time_alive": 1126,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "2cdbc8fd3e884cce8cb477683d41d207:6ccfad8ebd684a98860a2a52ca7fd18a:db2bbc6eb7ea4536a1465a6791419ada",
  "placement": 15,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26:8eb77c81a5fb42138f10c99fc0a43fee",
  "placement": 30,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26:8eb77c81a5fb42138f10c99fc0a43fee",
  "placement": 30,
  "time_alive": 164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26:8eb77c81a5fb42138f10c99fc0a43fee",
  "placement": 31,
  "time_alive": 311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26:8eb77c81a5fb42138f10c99fc0a43fee",
  "placement": 14,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26:8eb77c81a5fb42138f10c99fc0a43fee",
  "placement": 16,
  "time_alive": 1318,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "7dd255958993494ebe1d427f90d1b55e:83f90459347c4895b209cd3e8daf0a26:8eb77c81a5fb42138f10c99fc0a43fee",
  "placement": 8,
  "time_alive": 1441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "0aab7acce4f34ad293730c8b2c4fb274:3db8914db7c94c3ba0b95e042735f527:a23b4287d19c43cd825102ec74c3a075",
  "placement": 18,
  "time_alive": 1212,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "0aab7acce4f34ad293730c8b2c4fb274:3db8914db7c94c3ba0b95e042735f527:a23b4287d19c43cd825102ec74c3a075",
  "placement": 25,
  "time_alive": 968,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "0aab7acce4f34ad293730c8b2c4fb274:3db8914db7c94c3ba0b95e042735f527:a23b4287d19c43cd825102ec74c3a075",
  "placement": 31,
  "time_alive": 181,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "0aab7acce4f34ad293730c8b2c4fb274:3db8914db7c94c3ba0b95e042735f527:a23b4287d19c43cd825102ec74c3a075",
  "placement": 23,
  "time_alive": 706,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "0aab7acce4f34ad293730c8b2c4fb274:3db8914db7c94c3ba0b95e042735f527:a23b4287d19c43cd825102ec74c3a075",
  "placement": 18,
  "time_alive": 1280,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "899a53ec258c4e8bacbd3daae1cc5a10:8e5ca8680e26446282b260cd4952ba96:94facdf1ad544b1e85443f82e83ea6c0",
  "placement": 6,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "899a53ec258c4e8bacbd3daae1cc5a10:8e5ca8680e26446282b260cd4952ba96:94facdf1ad544b1e85443f82e83ea6c0",
  "placement": 19,
  "time_alive": 1278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "899a53ec258c4e8bacbd3daae1cc5a10:8e5ca8680e26446282b260cd4952ba96:94facdf1ad544b1e85443f82e83ea6c0",
  "placement": 13,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "899a53ec258c4e8bacbd3daae1cc5a10:8e5ca8680e26446282b260cd4952ba96:94facdf1ad544b1e85443f82e83ea6c0",
  "placement": 20,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "899a53ec258c4e8bacbd3daae1cc5a10:8e5ca8680e26446282b260cd4952ba96:94facdf1ad544b1e85443f82e83ea6c0",
  "placement": 17,
  "time_alive": 1300,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "899a53ec258c4e8bacbd3daae1cc5a10:8e5ca8680e26446282b260cd4952ba96:94facdf1ad544b1e85443f82e83ea6c0",
  "placement": 19,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 31,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 29,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 19,
  "time_alive": 1189,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 10,
  "time_alive": 1378,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 21,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "06f5d4ccd79848268f0aeed769104190:29718c20fe714802b9eadc0547edef9a:d24b55c5258648d28cc2ca59650e99e4",
  "placement": 27,
  "time_alive": 429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "4ee3676fdd224e46b9eae2e4f4aa53db:90568899c9c642f0a1803f33f651762e:d2f1e9c74a644f91ac20b7f98668fd24",
  "placement": 12,
  "time_alive": 1292,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "4ee3676fdd224e46b9eae2e4f4aa53db:90568899c9c642f0a1803f33f651762e:d2f1e9c74a644f91ac20b7f98668fd24",
  "placement": 25,
  "time_alive": 935,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "4ee3676fdd224e46b9eae2e4f4aa53db:90568899c9c642f0a1803f33f651762e:d2f1e9c74a644f91ac20b7f98668fd24",
  "placement": 29,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "4ee3676fdd224e46b9eae2e4f4aa53db:90568899c9c642f0a1803f33f651762e:d2f1e9c74a644f91ac20b7f98668fd24",
  "placement": 18,
  "time_alive": 1195,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "4ee3676fdd224e46b9eae2e4f4aa53db:90568899c9c642f0a1803f33f651762e:d2f1e9c74a644f91ac20b7f98668fd24",
  "placement": 25,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "4ee3676fdd224e46b9eae2e4f4aa53db:90568899c9c642f0a1803f33f651762e:d2f1e9c74a644f91ac20b7f98668fd24",
  "placement": 30,
  "time_alive": 169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 21,
  "time_alive": 1071,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 28,
  "time_alive": 330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 32,
  "time_alive": 187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 26,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 32,
  "time_alive": 67,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "06e30542e6b7400e9cc28c47b73e9f90:9d83c7adaa39474586eac0a9217ff764:b87b6d3ba03644119e7463e8d5825dc8",
  "placement": 26,
  "time_alive": 496,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 28,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 31,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 18,
  "time_alive": 1278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 21,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 18,
  "time_alive": 1291,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "39f4d1f15c15404e9405124023615997:a2cc21c327d34d2899e8bda93f1cd40b:fe25cec25b72444fb3fe981230a55d38",
  "placement": 23,
  "time_alive": 918,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "1c402a3ca07949bfb8283e5e074489f3:459cc1d17c3d42b6b2602c418673737d:a4cb3abc7fb849568f72314183e38a99",
  "placement": 27,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "1c402a3ca07949bfb8283e5e074489f3:459cc1d17c3d42b6b2602c418673737d:a4cb3abc7fb849568f72314183e38a99",
  "placement": 21,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "1c402a3ca07949bfb8283e5e074489f3:459cc1d17c3d42b6b2602c418673737d:a4cb3abc7fb849568f72314183e38a99",
  "placement": 27,
  "time_alive": 951,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "1c402a3ca07949bfb8283e5e074489f3:459cc1d17c3d42b6b2602c418673737d:a4cb3abc7fb849568f72314183e38a99",
  "placement": 28,
  "time_alive": 532,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "1c402a3ca07949bfb8283e5e074489f3:459cc1d17c3d42b6b2602c418673737d:a4cb3abc7fb849568f72314183e38a99",
  "placement": 26,
  "time_alive": 384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e4d6ac2-e5a5-405f-9274-e8cc7f084936",
  "team_id": "1c019e7e27dc40828ad9dbb79e36fcb4:adbf829f38424845b88e5b8ec7ae3628:fd6759e655b14b8181232a29b879a98f",
  "placement": 24,
  "time_alive": 1016,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "1c019e7e27dc40828ad9dbb79e36fcb4:adbf829f38424845b88e5b8ec7ae3628:fd6759e655b14b8181232a29b879a98f",
  "placement": 24,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "46fc9260-60ef-4310-ab59-1f96bca6076b",
  "team_id": "1c019e7e27dc40828ad9dbb79e36fcb4:adbf829f38424845b88e5b8ec7ae3628:fd6759e655b14b8181232a29b879a98f",
  "placement": 20,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77718933-6604-4f88-8088-061571278492",
  "team_id": "1c019e7e27dc40828ad9dbb79e36fcb4:adbf829f38424845b88e5b8ec7ae3628:fd6759e655b14b8181232a29b879a98f",
  "placement": 29,
  "time_alive": 529,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "063a8e63-e905-47b2-a57b-328fa96de67e",
  "team_id": "1c019e7e27dc40828ad9dbb79e36fcb4:adbf829f38424845b88e5b8ec7ae3628:fd6759e655b14b8181232a29b879a98f",
  "placement": 30,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "1c019e7e27dc40828ad9dbb79e36fcb4:adbf829f38424845b88e5b8ec7ae3628:fd6759e655b14b8181232a29b879a98f",
  "placement": 32,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43e03d69-0d3a-48c2-9ace-0afea3bc04cb",
  "team_id": "176a97db247049c08a25fc5e9b23c527:ba76afb6abab48e897180bfcdbcd0f7a:bb39c048d05b4e99b3c25ad2c4f881ef",
  "placement": 27,
  "time_alive": 604,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989d5995-3835-48ad-8cd2-5ce73176e3d5",
  "team_id": "176a97db247049c08a25fc5e9b23c527:ba76afb6abab48e897180bfcdbcd0f7a:bb39c048d05b4e99b3c25ad2c4f881ef",
  "placement": 28,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1455,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1419,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1450,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1492,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 3,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 7,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 3,
  "time_alive": 1443,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 2,
  "time_alive": 1507,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 31,
  "time_alive": 295,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 7,
  "time_alive": 1424,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 1,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 11,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 4,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 11,
  "time_alive": 1380,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 28,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 2,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 2,
  "time_alive": 1489,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 4,
  "time_alive": 1467,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 2,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 6,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 18,
  "time_alive": 1305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 16,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 19,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 1,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 8,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 1,
  "time_alive": 1507,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 25,
  "time_alive": 930,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 8,
  "time_alive": 1413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 10,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 2,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 22,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 30,
  "time_alive": 387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 3,
  "time_alive": 1448,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 19,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 6,
  "time_alive": 1440,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 3,
  "time_alive": 1472,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 6,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 20,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 6,
  "time_alive": 1417,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 4,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 7,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 18,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 11,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 3,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 13,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 12,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 17,
  "time_alive": 1282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 5,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 24,
  "time_alive": 958,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 28,
  "time_alive": 724,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 7,
  "time_alive": 1396,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 3,
  "time_alive": 1479,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 5,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 10,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 14,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 5,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 15,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 10,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 4,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 6,
  "time_alive": 1449,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 9,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 16,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 5,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 17,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 11,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 8,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 5,
  "time_alive": 1439,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 18,
  "time_alive": 1292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 27,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 21,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 13,
  "time_alive": 1365,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 9,
  "time_alive": 1400,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 13,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 7,
  "time_alive": 1426,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 26,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 11,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 9,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 16,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 29,
  "time_alive": 802,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 13,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 4,
  "time_alive": 1420,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 13,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 12,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 14,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 10,
  "time_alive": 1352,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 12,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 9,
  "time_alive": 1372,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 26,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 28,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 19,
  "time_alive": 1160,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "07746c220e4349208aa00dbc21547bda:3677791ad44a4d4c8634de1c0ebbb9d1:bdbf9102fdda408abeee3b06c900cde8",
  "placement": 25,
  "time_alive": 918,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "07746c220e4349208aa00dbc21547bda:3677791ad44a4d4c8634de1c0ebbb9d1:bdbf9102fdda408abeee3b06c900cde8",
  "placement": 15,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "07746c220e4349208aa00dbc21547bda:3677791ad44a4d4c8634de1c0ebbb9d1:bdbf9102fdda408abeee3b06c900cde8",
  "placement": 8,
  "time_alive": 1374,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "07746c220e4349208aa00dbc21547bda:3677791ad44a4d4c8634de1c0ebbb9d1:bdbf9102fdda408abeee3b06c900cde8",
  "placement": 5,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "07746c220e4349208aa00dbc21547bda:3677791ad44a4d4c8634de1c0ebbb9d1:bdbf9102fdda408abeee3b06c900cde8",
  "placement": 30,
  "time_alive": 630,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "07746c220e4349208aa00dbc21547bda:3677791ad44a4d4c8634de1c0ebbb9d1:bdbf9102fdda408abeee3b06c900cde8",
  "placement": 25,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "31f57533f0314fb7bb5078c42ec630c4:4392bf61ea5c4f329098acec81c008c9:ac94d6f89b384010923c91bd5dcf3368",
  "placement": 12,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "31f57533f0314fb7bb5078c42ec630c4:4392bf61ea5c4f329098acec81c008c9:ac94d6f89b384010923c91bd5dcf3368",
  "placement": 9,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "31f57533f0314fb7bb5078c42ec630c4:4392bf61ea5c4f329098acec81c008c9:ac94d6f89b384010923c91bd5dcf3368",
  "placement": 33,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "31f57533f0314fb7bb5078c42ec630c4:4392bf61ea5c4f329098acec81c008c9:ac94d6f89b384010923c91bd5dcf3368",
  "placement": 32,
  "time_alive": 107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "31f57533f0314fb7bb5078c42ec630c4:4392bf61ea5c4f329098acec81c008c9:ac94d6f89b384010923c91bd5dcf3368",
  "placement": 23,
  "time_alive": 1086,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "31f57533f0314fb7bb5078c42ec630c4:4392bf61ea5c4f329098acec81c008c9:ac94d6f89b384010923c91bd5dcf3368",
  "placement": 12,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "32aaaa11086343209cf332ad59c36628:5d2117601757495abfd2d817285ccb66:c24a0f20e2be4fdb8c4e6585d90e9cec",
  "placement": 17,
  "time_alive": 1205,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "32aaaa11086343209cf332ad59c36628:5d2117601757495abfd2d817285ccb66:c24a0f20e2be4fdb8c4e6585d90e9cec",
  "placement": 10,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "32aaaa11086343209cf332ad59c36628:5d2117601757495abfd2d817285ccb66:c24a0f20e2be4fdb8c4e6585d90e9cec",
  "placement": 16,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "32aaaa11086343209cf332ad59c36628:5d2117601757495abfd2d817285ccb66:c24a0f20e2be4fdb8c4e6585d90e9cec",
  "placement": 30,
  "time_alive": 563,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "32aaaa11086343209cf332ad59c36628:5d2117601757495abfd2d817285ccb66:c24a0f20e2be4fdb8c4e6585d90e9cec",
  "placement": 22,
  "time_alive": 1136,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "32aaaa11086343209cf332ad59c36628:5d2117601757495abfd2d817285ccb66:c24a0f20e2be4fdb8c4e6585d90e9cec",
  "placement": 17,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "07bae03eaa424035aa040c20f4626db1:2c9b97d9e07b418c82ca7721426f6511:dd04261f614d4ae7b34bcbf7b19aa46e",
  "placement": 28,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "07bae03eaa424035aa040c20f4626db1:2c9b97d9e07b418c82ca7721426f6511:dd04261f614d4ae7b34bcbf7b19aa46e",
  "placement": 22,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "07bae03eaa424035aa040c20f4626db1:2c9b97d9e07b418c82ca7721426f6511:dd04261f614d4ae7b34bcbf7b19aa46e",
  "placement": 2,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "07bae03eaa424035aa040c20f4626db1:2c9b97d9e07b418c82ca7721426f6511:dd04261f614d4ae7b34bcbf7b19aa46e",
  "placement": 23,
  "time_alive": 973,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "07bae03eaa424035aa040c20f4626db1:2c9b97d9e07b418c82ca7721426f6511:dd04261f614d4ae7b34bcbf7b19aa46e",
  "placement": 27,
  "time_alive": 920,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "07bae03eaa424035aa040c20f4626db1:2c9b97d9e07b418c82ca7721426f6511:dd04261f614d4ae7b34bcbf7b19aa46e",
  "placement": 21,
  "time_alive": 992,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 21,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 25,
  "time_alive": 937,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 14,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 15,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 13,
  "time_alive": 1355,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "05e9739e9c02496c820f5e1680671000:86e823e2a9d5444297abf42e040976b0:f848617547a04b7b983627aca7ead365",
  "placement": 15,
  "time_alive": 1313,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "05e9739e9c02496c820f5e1680671000:86e823e2a9d5444297abf42e040976b0:f848617547a04b7b983627aca7ead365",
  "placement": 29,
  "time_alive": 579,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "05e9739e9c02496c820f5e1680671000:86e823e2a9d5444297abf42e040976b0:f848617547a04b7b983627aca7ead365",
  "placement": 20,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "05e9739e9c02496c820f5e1680671000:86e823e2a9d5444297abf42e040976b0:f848617547a04b7b983627aca7ead365",
  "placement": 9,
  "time_alive": 1411,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "05e9739e9c02496c820f5e1680671000:86e823e2a9d5444297abf42e040976b0:f848617547a04b7b983627aca7ead365",
  "placement": 18,
  "time_alive": 1279,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "05e9739e9c02496c820f5e1680671000:86e823e2a9d5444297abf42e040976b0:f848617547a04b7b983627aca7ead365",
  "placement": 27,
  "time_alive": 449,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "13179b0b9b8c4ac3bc46b366a0f4f117:1d7d294ffa044319b9e09d37956b29e3:70b3d62f200b4c0ab95405cd294a4aa4",
  "placement": 16,
  "time_alive": 1309,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "13179b0b9b8c4ac3bc46b366a0f4f117:1d7d294ffa044319b9e09d37956b29e3:70b3d62f200b4c0ab95405cd294a4aa4",
  "placement": 23,
  "time_alive": 1124,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "13179b0b9b8c4ac3bc46b366a0f4f117:1d7d294ffa044319b9e09d37956b29e3:70b3d62f200b4c0ab95405cd294a4aa4",
  "placement": 29,
  "time_alive": 785,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "13179b0b9b8c4ac3bc46b366a0f4f117:1d7d294ffa044319b9e09d37956b29e3:70b3d62f200b4c0ab95405cd294a4aa4",
  "placement": 6,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "13179b0b9b8c4ac3bc46b366a0f4f117:1d7d294ffa044319b9e09d37956b29e3:70b3d62f200b4c0ab95405cd294a4aa4",
  "placement": 21,
  "time_alive": 1184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "13179b0b9b8c4ac3bc46b366a0f4f117:1d7d294ffa044319b9e09d37956b29e3:70b3d62f200b4c0ab95405cd294a4aa4",
  "placement": 31,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 18,
  "time_alive": 1192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 4,
  "time_alive": 1493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 11,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 22,
  "time_alive": 1045,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 26,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "4079c0a6bff843ae963f491b85fec49b:9680b27def9147999e13f9a2c49a7402:ec04121f188a4e2190480dc384b47e3d",
  "placement": 15,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "389966b1d11d4fefa2b001079381d352:5eccbfe71fd74833a60a274ce06bdb05:7af5d67cddd34253be7ccb1cfdc0f883",
  "placement": 7,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "389966b1d11d4fefa2b001079381d352:5eccbfe71fd74833a60a274ce06bdb05:7af5d67cddd34253be7ccb1cfdc0f883",
  "placement": 19,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "389966b1d11d4fefa2b001079381d352:5eccbfe71fd74833a60a274ce06bdb05:7af5d67cddd34253be7ccb1cfdc0f883",
  "placement": 21,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "389966b1d11d4fefa2b001079381d352:5eccbfe71fd74833a60a274ce06bdb05:7af5d67cddd34253be7ccb1cfdc0f883",
  "placement": 28,
  "time_alive": 780,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "389966b1d11d4fefa2b001079381d352:5eccbfe71fd74833a60a274ce06bdb05:7af5d67cddd34253be7ccb1cfdc0f883",
  "placement": 16,
  "time_alive": 1291,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "389966b1d11d4fefa2b001079381d352:5eccbfe71fd74833a60a274ce06bdb05:7af5d67cddd34253be7ccb1cfdc0f883",
  "placement": 26,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 23,
  "time_alive": 973,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 24,
  "time_alive": 1118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 17,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 14,
  "time_alive": 1332,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 14,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "2fa0f20fc7bd45b5af1c777c662911ef:95efd5fb69dc4dbbba2cac69a2f0af61:be7a67e620c744ac9bebe233eb0c6ecc",
  "placement": 24,
  "time_alive": 938,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "75382e1678d84b359c4ce657fa2c20f5:8260ea6554b84b979cc91cfd1b0a7922:9ecb14c6d41d4e07ab0978e110ef9e4a",
  "placement": 33,
  "time_alive": 234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "75382e1678d84b359c4ce657fa2c20f5:8260ea6554b84b979cc91cfd1b0a7922:9ecb14c6d41d4e07ab0978e110ef9e4a",
  "placement": 14,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "75382e1678d84b359c4ce657fa2c20f5:8260ea6554b84b979cc91cfd1b0a7922:9ecb14c6d41d4e07ab0978e110ef9e4a",
  "placement": 19,
  "time_alive": 1301,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "75382e1678d84b359c4ce657fa2c20f5:8260ea6554b84b979cc91cfd1b0a7922:9ecb14c6d41d4e07ab0978e110ef9e4a",
  "placement": 20,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "75382e1678d84b359c4ce657fa2c20f5:8260ea6554b84b979cc91cfd1b0a7922:9ecb14c6d41d4e07ab0978e110ef9e4a",
  "placement": 20,
  "time_alive": 1271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "75382e1678d84b359c4ce657fa2c20f5:8260ea6554b84b979cc91cfd1b0a7922:9ecb14c6d41d4e07ab0978e110ef9e4a",
  "placement": 30,
  "time_alive": 243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "6c28b91513a04d4f9ad1a1347b8a32b5:94f304bf1f184abbbe1d693f3f14ecf3:a29614b974844a82b1fec5cdda5bf750",
  "placement": 27,
  "time_alive": 905,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "6c28b91513a04d4f9ad1a1347b8a32b5:94f304bf1f184abbbe1d693f3f14ecf3:a29614b974844a82b1fec5cdda5bf750",
  "placement": 26,
  "time_alive": 894,
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
    