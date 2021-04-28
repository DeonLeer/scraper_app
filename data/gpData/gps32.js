const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 44,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 41,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 62,
  "time_alive": 942,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 31,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "5b339f166cf24e3a901241abcab8ba0b",
  "placement": 8,
  "time_alive": 1466,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "5b339f166cf24e3a901241abcab8ba0b",
  "placement": 61,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "5b339f166cf24e3a901241abcab8ba0b",
  "placement": 74,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "5b339f166cf24e3a901241abcab8ba0b",
  "placement": 40,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "5b339f166cf24e3a901241abcab8ba0b",
  "placement": 91,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "5b339f166cf24e3a901241abcab8ba0b",
  "placement": 82,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "b97876a2f120455184b33168363e2303",
  "placement": 31,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "b97876a2f120455184b33168363e2303",
  "placement": 64,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "b97876a2f120455184b33168363e2303",
  "placement": 62,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "b97876a2f120455184b33168363e2303",
  "placement": 22,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "b97876a2f120455184b33168363e2303",
  "placement": 60,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "b97876a2f120455184b33168363e2303",
  "placement": 45,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "29c98a21db314e45a6a7e2ca2f82823d",
  "placement": 67,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "29c98a21db314e45a6a7e2ca2f82823d",
  "placement": 73,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "29c98a21db314e45a6a7e2ca2f82823d",
  "placement": 38,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "29c98a21db314e45a6a7e2ca2f82823d",
  "placement": 31,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "29c98a21db314e45a6a7e2ca2f82823d",
  "placement": 22,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "29c98a21db314e45a6a7e2ca2f82823d",
  "placement": 65,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 12,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 90,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 18,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 75,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 88,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e079e7ea73f44f4e95025b0573ae9c8d",
  "placement": 79,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "55833e8757314ce5b15fa598cb0628e2",
  "placement": 42,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "55833e8757314ce5b15fa598cb0628e2",
  "placement": 13,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "55833e8757314ce5b15fa598cb0628e2",
  "placement": 39,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "55833e8757314ce5b15fa598cb0628e2",
  "placement": 81,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "55833e8757314ce5b15fa598cb0628e2",
  "placement": 41,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "55833e8757314ce5b15fa598cb0628e2",
  "placement": 75,
  "time_alive": 470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 54,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 81,
  "time_alive": 820,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 90,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 57,
  "time_alive": 1151,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 20,
  "time_alive": 1403,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 73,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "a68dddf9f3344ebfad8a232d91f1d716",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "a68dddf9f3344ebfad8a232d91f1d716",
  "placement": 48,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "a68dddf9f3344ebfad8a232d91f1d716",
  "placement": 51,
  "time_alive": 1198,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "a68dddf9f3344ebfad8a232d91f1d716",
  "placement": 46,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "a68dddf9f3344ebfad8a232d91f1d716",
  "placement": 34,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "a68dddf9f3344ebfad8a232d91f1d716",
  "placement": 72,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 82,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 26,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 46,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 88,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 21,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e2f689ed1c2b419fa2db6a6a07775df0",
  "placement": 69,
  "time_alive": 684,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "4b0d4441fcbb40ffb016873bb6413afe",
  "placement": 97,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "4b0d4441fcbb40ffb016873bb6413afe",
  "placement": 16,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "4b0d4441fcbb40ffb016873bb6413afe",
  "placement": 33,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "4b0d4441fcbb40ffb016873bb6413afe",
  "placement": 54,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "4b0d4441fcbb40ffb016873bb6413afe",
  "placement": 98,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "4b0d4441fcbb40ffb016873bb6413afe",
  "placement": 42,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 49,
  "time_alive": 1252,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 20,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 89,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 78,
  "time_alive": 738,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "fce5d41fd8e24cfb807d6872dca06e84",
  "placement": 29,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "4f6ac03d38954e4a9b284aae3076c656",
  "placement": 62,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "4f6ac03d38954e4a9b284aae3076c656",
  "placement": 82,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "4f6ac03d38954e4a9b284aae3076c656",
  "placement": 94,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "4f6ac03d38954e4a9b284aae3076c656",
  "placement": 5,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "4f6ac03d38954e4a9b284aae3076c656",
  "placement": 67,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "4f6ac03d38954e4a9b284aae3076c656",
  "placement": 71,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 15,
  "time_alive": 1431,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 94,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 77,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 96,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 44,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 96,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 25,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 88,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 47,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 49,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 72,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "68e014886a7f43dbadc3cef323fd3b14",
  "placement": 87,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e56fae26f00846ddad645ace2d08fe9b",
  "placement": 17,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e56fae26f00846ddad645ace2d08fe9b",
  "placement": 58,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e56fae26f00846ddad645ace2d08fe9b",
  "placement": 52,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e56fae26f00846ddad645ace2d08fe9b",
  "placement": 61,
  "time_alive": 1112,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e56fae26f00846ddad645ace2d08fe9b",
  "placement": 82,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e56fae26f00846ddad645ace2d08fe9b",
  "placement": 38,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 23,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 54,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 35,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 66,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 74,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 83,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714",
  "placement": 83,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714",
  "placement": 86,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714",
  "placement": 61,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714",
  "placement": 67,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714",
  "placement": 5,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714",
  "placement": 86,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 30,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 69,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 37,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 42,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 68,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e37398d146f34a319cebd97ae662de70",
  "placement": 63,
  "time_alive": 770,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 45,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 47,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 78,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 50,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 66,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 25,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 80,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 72,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 17,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 47,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 31,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "8983b22b2bc64ff1baf8c8dbb548b0b4",
  "placement": 76,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 99,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 93,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 22,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 79,
  "time_alive": 692,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 15,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 93,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 46,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 66,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 57,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 91,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 30,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 60,
  "time_alive": 870,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "ea264b22b813452ab4d1017797f7fb4c",
  "placement": 88,
  "time_alive": 549,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "ea264b22b813452ab4d1017797f7fb4c",
  "placement": 84,
  "time_alive": 691,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "ea264b22b813452ab4d1017797f7fb4c",
  "placement": 21,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "ea264b22b813452ab4d1017797f7fb4c",
  "placement": 35,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "ea264b22b813452ab4d1017797f7fb4c",
  "placement": 40,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "471803cc23a7444686a3090bf132ff2d",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "471803cc23a7444686a3090bf132ff2d",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "471803cc23a7444686a3090bf132ff2d",
  "placement": 27,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "471803cc23a7444686a3090bf132ff2d",
  "placement": 68,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "471803cc23a7444686a3090bf132ff2d",
  "placement": 55,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "471803cc23a7444686a3090bf132ff2d",
  "placement": 52,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 64,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 30,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 76,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 48,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 25,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 92,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "0dc4c941266b45c18df1b3d4ec98948d",
  "placement": 84,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "0dc4c941266b45c18df1b3d4ec98948d",
  "placement": 91,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "0dc4c941266b45c18df1b3d4ec98948d",
  "placement": 95,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "0dc4c941266b45c18df1b3d4ec98948d",
  "placement": 77,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "0dc4c941266b45c18df1b3d4ec98948d",
  "placement": 63,
  "time_alive": 942,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "0dc4c941266b45c18df1b3d4ec98948d",
  "placement": 11,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "53e87107dc39485db16cb61ea149ae47",
  "placement": 85,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "53e87107dc39485db16cb61ea149ae47",
  "placement": 36,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "53e87107dc39485db16cb61ea149ae47",
  "placement": 80,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "53e87107dc39485db16cb61ea149ae47",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "53e87107dc39485db16cb61ea149ae47",
  "placement": 27,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "53e87107dc39485db16cb61ea149ae47",
  "placement": 51,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "dedc259ae7b448b1a338222fb87da1ce",
  "placement": 48,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "dedc259ae7b448b1a338222fb87da1ce",
  "placement": 89,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "dedc259ae7b448b1a338222fb87da1ce",
  "placement": 26,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "dedc259ae7b448b1a338222fb87da1ce",
  "placement": 52,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "dedc259ae7b448b1a338222fb87da1ce",
  "placement": 57,
  "time_alive": 1051,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "dedc259ae7b448b1a338222fb87da1ce",
  "placement": 85,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 74,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 67,
  "time_alive": 1000,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 68,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 69,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 67,
  "time_alive": 702,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 96,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 62,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 56,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 11,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 70,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "bef4103d987546c4aba0382aeefbd78b",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 40,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 78,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 83,
  "time_alive": 760,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 85,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 84,
  "time_alive": 605,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 54,
  "time_alive": 1066,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 36,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 25,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 82,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 90,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 93,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 98,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 55,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 23,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 94,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 48,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 53,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd",
  "placement": 60,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd",
  "placement": 77,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd",
  "placement": 65,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd",
  "placement": 56,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd",
  "placement": 58,
  "time_alive": 1033,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "2d341d04a26c472faca1a85512e4bbcd",
  "placement": 21,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 95,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 74,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 58,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 87,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 54,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 20,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "d014c6e7c02e4a47969bbc255d881671",
  "placement": 70,
  "time_alive": 964,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "d014c6e7c02e4a47969bbc255d881671",
  "placement": 57,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "d014c6e7c02e4a47969bbc255d881671",
  "placement": 45,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "d014c6e7c02e4a47969bbc255d881671",
  "placement": 73,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "d014c6e7c02e4a47969bbc255d881671",
  "placement": 86,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "d014c6e7c02e4a47969bbc255d881671",
  "placement": 62,
  "time_alive": 777,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 60,
  "time_alive": 1087,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 30,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 83,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 87,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 70,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "7989dd9f0eef4a1188e94599d35e0473",
  "placement": 87,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "7989dd9f0eef4a1188e94599d35e0473",
  "placement": 87,
  "time_alive": 477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "7989dd9f0eef4a1188e94599d35e0473",
  "placement": 49,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "7989dd9f0eef4a1188e94599d35e0473",
  "placement": 84,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "7989dd9f0eef4a1188e94599d35e0473",
  "placement": 77,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "7989dd9f0eef4a1188e94599d35e0473",
  "placement": 61,
  "time_alive": 842,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 63,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 41,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 65,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 95,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "20f2d85012ac4379831e6230d910ee2d",
  "placement": 81,
  "time_alive": 351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e2775d9954924149940830378f217ca6",
  "placement": 90,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e2775d9954924149940830378f217ca6",
  "placement": 63,
  "time_alive": 1072,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e2775d9954924149940830378f217ca6",
  "placement": 96,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e2775d9954924149940830378f217ca6",
  "placement": 34,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e2775d9954924149940830378f217ca6",
  "placement": 92,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e2775d9954924149940830378f217ca6",
  "placement": 78,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e6813bf8fa744b84b7f21079888db857",
  "placement": 65,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e6813bf8fa744b84b7f21079888db857",
  "placement": 41,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e6813bf8fa744b84b7f21079888db857",
  "placement": 85,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e6813bf8fa744b84b7f21079888db857",
  "placement": 44,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e6813bf8fa744b84b7f21079888db857",
  "placement": 45,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e6813bf8fa744b84b7f21079888db857",
  "placement": 97,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 50,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 76,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 71,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 92,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 38,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 64,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 86,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 55,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 64,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 62,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 97,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 44,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 78,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 52,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 53,
  "time_alive": 1165,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 82,
  "time_alive": 472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 99,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 94,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 59,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 79,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 48,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 93,
  "time_alive": 252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 80,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 81,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 27,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 81,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "d73cc19152dd413c9f8b29ff122d57af",
  "placement": 80,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "b4881aaa90554515a547474fdaa6f78b",
  "placement": 61,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "b4881aaa90554515a547474fdaa6f78b",
  "placement": 51,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "b4881aaa90554515a547474fdaa6f78b",
  "placement": 93,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "b4881aaa90554515a547474fdaa6f78b",
  "placement": 95,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "b4881aaa90554515a547474fdaa6f78b",
  "placement": 94,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "b4881aaa90554515a547474fdaa6f78b",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 75,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 56,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 89,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 71,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 71,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 91,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "081a88cf92bf40ad9abb9b8157326815",
  "placement": 69,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "081a88cf92bf40ad9abb9b8157326815",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "081a88cf92bf40ad9abb9b8157326815",
  "placement": 75,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "081a88cf92bf40ad9abb9b8157326815",
  "placement": 78,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "081a88cf92bf40ad9abb9b8157326815",
  "placement": 89,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "081a88cf92bf40ad9abb9b8157326815",
  "placement": 90,
  "time_alive": 191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "6401d54e0550487199b5eb492367a7dc",
  "placement": 66,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "6401d54e0550487199b5eb492367a7dc",
  "placement": 84,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "6401d54e0550487199b5eb492367a7dc",
  "placement": 97,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "6401d54e0550487199b5eb492367a7dc",
  "placement": 99,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "6401d54e0550487199b5eb492367a7dc",
  "placement": 73,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "6401d54e0550487199b5eb492367a7dc",
  "placement": 80,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1528,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1551,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 11,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 70,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 49,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1557,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 35,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 38,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 1,
  "time_alive": 1532,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 25,
  "time_alive": 1411,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 3,
  "time_alive": 1540,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 4,
  "time_alive": 1523,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 3,
  "time_alive": 1510,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 17,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 19,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 1,
  "time_alive": 1535,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 8,
  "time_alive": 1507,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 15,
  "time_alive": 1422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 11,
  "time_alive": 1479,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 19,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 4,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 2,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 5,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 95,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 60,
  "time_alive": 1137,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 32,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1532,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 23,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 14,
  "time_alive": 1485,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 14,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 40,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 23,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 27,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 4,
  "time_alive": 1504,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 2,
  "time_alive": 1549,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 85,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 4,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 2,
  "time_alive": 1551,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 98,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 98,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 18,
  "time_alive": 1471,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 10,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 6,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 48,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 15,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 21,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 11,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 21,
  "time_alive": 1398,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 12,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 14,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 77,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 45,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 6,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 91,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 3,
  "time_alive": 1546,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 45,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 6,
  "time_alive": 1499,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 7,
  "time_alive": 1510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "40c357a7608a47f7b56620ff3a2f8963",
  "placement": 38,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 21,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 11,
  "time_alive": 1487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 18,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 3,
  "time_alive": 1524,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 19,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 44,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 9,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 9,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 7,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 19,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 16,
  "time_alive": 1477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "7ce71c7373ed490cb59d62d1653c6401",
  "placement": 57,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 26,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 15,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 12,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 7,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 69,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1",
  "placement": 66,
  "time_alive": 944,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 2,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 63,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 61,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 10,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 22,
  "time_alive": 1445,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "840b7e8175c045eb94e25836f274d0b0",
  "placement": 17,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 61,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 7,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 29,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 35,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 27,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 8,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 15,
  "time_alive": 1469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 5,
  "time_alive": 1529,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 100,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 80,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 12,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 11,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 87,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 6,
  "time_alive": 1527,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 77,
  "time_alive": 732,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 11,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 6,
  "time_alive": 1521,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "e9315a3960004d4db8c46841b46fafc6",
  "placement": 73,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 43,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 20,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 23,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 73,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 35,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 2,
  "time_alive": 1557,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 5,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 47,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 8,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 75,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 63,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 47,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 10,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 14,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 12,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 46,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 48,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 84,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 16,
  "time_alive": 1458,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 50,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 68,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 4,
  "time_alive": 1537,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "b467bc30b1b244c79455aba58ec70d42",
  "placement": 28,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 27,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 37,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 22,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 14,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 25,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 71,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 63,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 72,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 37,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 60,
  "time_alive": 1051,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 23,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "2da059b673924ac2a1f5151b10fef6c7",
  "placement": 3,
  "time_alive": 1554,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 25,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 97,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 93,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1549,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 26,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 33,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 79,
  "time_alive": 487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 6,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 22,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 59,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 43,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 51,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 40,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 8,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 32,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 33,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 12,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 16,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 84,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 84,
  "time_alive": 438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 64,
  "time_alive": 1039,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 26,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 5,
  "time_alive": 1515,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 86,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 12,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 16,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 34,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 17,
  "time_alive": 1473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 91,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 75,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 41,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 10,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 63,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 52,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2",
  "placement": 25,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 42,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 28,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 56,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 38,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 10,
  "time_alive": 1501,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 60,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 22,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 49,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 68,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 71,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 42,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "d67d63cf79db4879ad040aa41de0d994",
  "placement": 9,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 36,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 85,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 47,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 9,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 73,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 45,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 34,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 46,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 5,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 48,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 94,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 39,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 32,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 13,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 87,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 92,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 50,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 22,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 28,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 51,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 70,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 16,
  "time_alive": 1450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 13,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 36,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 38,
  "time_alive": 1364,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 88,
  "time_alive": 227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 74,
  "time_alive": 822,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 84,
  "time_alive": 366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 29,
  "time_alive": 1411,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "c23737304a9d4465b2a537c03c7fddc4",
  "placement": 78,
  "time_alive": 559,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 66,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 21,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 20,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 26,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 86,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "dc93fa22338a47018298222979a06a66",
  "placement": 31,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 30,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 22,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 43,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 13,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 60,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "653d4cacf09f464380dacc1278b1cfde",
  "placement": 61,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 17,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 93,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 32,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 95,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 21,
  "time_alive": 1445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 41,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 96,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 4,
  "time_alive": 1535,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 41,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 74,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 20,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f59ee4a9c5dc433c931bd2cc781572ed",
  "placement": 55,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 18,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 24,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 66,
  "time_alive": 974,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 57,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 47,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 97,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 88,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 44,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 88,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 27,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 37,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "c02ce3d8396342df8fe27260dee17ce3",
  "placement": 13,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 81,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 36,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 17,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 29,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "6abf6404893f4684a561b5e1f8f1a259",
  "placement": 70,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 26,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 39,
  "time_alive": 1275,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 61,
  "time_alive": 1050,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 48,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 67,
  "time_alive": 941,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 44,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 35,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 33,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 36,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 55,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "8f989d99c6104ab6b944360e7920249f",
  "placement": 47,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 62,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 54,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 51,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 24,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 67,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 18,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 13,
  "time_alive": 1476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 56,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 48,
  "time_alive": 1205,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 44,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 28,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 56,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 41,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 39,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 13,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 40,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 90,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "808a36bf30b2454cbf20d711677b10d2",
  "placement": 46,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 7,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 91,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 94,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 62,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 30,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "18c159ccd91643738ddab129fad043c1",
  "placement": 30,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 29,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 68,
  "time_alive": 925,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 81,
  "time_alive": 524,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 49,
  "time_alive": 1183,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 36,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 53,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 89,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 18,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 92,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 81,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 88,
  "time_alive": 351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 20,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 78,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 8,
  "time_alive": 1510,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 82,
  "time_alive": 511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 56,
  "time_alive": 1080,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 72,
  "time_alive": 698,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "50b35e1c460c4d1a929d3cad9cc2f747",
  "placement": 33,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 14,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 74,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 25,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 55,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 77,
  "time_alive": 517,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 65,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 10,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 34,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 62,
  "time_alive": 1024,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 54,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 57,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "ec63057ab44c457383bd34e4a994cfdf",
  "placement": 40,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 37,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 62,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 57,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 15,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 76,
  "time_alive": 543,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "f7c80b34f7f141b3bfe54cf6dc1cdedb",
  "placement": 68,
  "time_alive": 875,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 23,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 60,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 93,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 17,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 97,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "80048d610361420c9802fa543ccc582a",
  "placement": 32,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 83,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 29,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 80,
  "time_alive": 613,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 67,
  "time_alive": 994,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 89,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 16,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 76,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 70,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 75,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 75,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 9,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "421760545cc442a29fda431ca1fe3393",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 8,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 75,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 72,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 99,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 62,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a",
  "placement": 58,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 67,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 98,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 52,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 41,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 24,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 50,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 30,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 44,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 30,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 74,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 64,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 43,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 83,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 5,
  "time_alive": 1502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 31,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 72,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 31,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 61,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 30,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 86,
  "time_alive": 320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 32,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "91c0e8155ba34eb2b2f88b0d75c2b21a",
  "placement": 77,
  "time_alive": 564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 53,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 78,
  "time_alive": 756,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 26,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 46,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 56,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 29,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 58,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 38,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 45,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 61,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670",
  "placement": 23,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 20,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 45,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 60,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 83,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 34,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 62,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 19,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 42,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 34,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 58,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 65,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 93,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 77,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 97,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 59,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 28,
  "time_alive": 1372,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 58,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "644c178005874e968ba046f5be3010dc",
  "placement": 49,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 49,
  "time_alive": 1246,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 95,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 79,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 94,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 92,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 7,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "33b9ef193f194a2188d43808a6158c81",
  "placement": 68,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "33b9ef193f194a2188d43808a6158c81",
  "placement": 52,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "33b9ef193f194a2188d43808a6158c81",
  "placement": 64,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "33b9ef193f194a2188d43808a6158c81",
  "placement": 20,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "33b9ef193f194a2188d43808a6158c81",
  "placement": 68,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "33b9ef193f194a2188d43808a6158c81",
  "placement": 59,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 92,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 27,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 28,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 59,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 43,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059",
  "placement": 42,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 57,
  "time_alive": 1160,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 57,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 69,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 31,
  "time_alive": 1338,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 64,
  "time_alive": 932,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "35e65ce910b4451e8d6eb444116fa295",
  "placement": 86,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 74,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 99,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 91,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 53,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 15,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8",
  "placement": 88,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 55,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 59,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 21,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 91,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 41,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 37,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 85,
  "time_alive": 246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 94,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 31,
  "time_alive": 1350,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 100,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 99,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 34,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 24,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 50,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 71,
  "time_alive": 865,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 65,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 78,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 54,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 54,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 66,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 49,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 33,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 40,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 69,
  "time_alive": 875,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 90,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 55,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 95,
  "time_alive": 229,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 51,
  "time_alive": 1170,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 95,
  "time_alive": 147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "50749c1c18d54afba9a426e3b40077ce",
  "placement": 79,
  "time_alive": 551,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 72,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 71,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 86,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 85,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 79,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 19,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 25,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 76,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 36,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 47,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 84,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 45,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 58,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 65,
  "time_alive": 1002,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 97,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 81,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "e02fad6833ae4812a3ca8e82ba65db8c",
  "placement": 35,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 39,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 90,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 67,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 66,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 54,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "9e9a6a241df841fcbaa87798393bce93",
  "placement": 50,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 79,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 31,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 40,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 69,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 87,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "2833f31e54d84eba9f27def1c1da412f",
  "placement": 64,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 52,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 80,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 24,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 88,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 93,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "2817ea8fcb764c039ea2ec85d4c3e1d5",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 48,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 77,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 35,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "65af6ff6ec984194a3527a300c10ddae",
  "placement": 37,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 65,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 86,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 96,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 18,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 53,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "d51bff6c759c41f485544a1c2bfc4bac",
  "placement": 94,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 80,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 33,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 85,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 42,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 85,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "9c304b287eea4f08bcf5527f1ca9059f",
  "placement": 87,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 69,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 58,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 82,
  "time_alive": 384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 83,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 69,
  "time_alive": 810,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 89,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 42,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 87,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 44,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 90,
  "time_alive": 199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "016173e8da9546dfad8399d81b71d401",
  "placement": 82,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "016173e8da9546dfad8399d81b71d401",
  "placement": 81,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "016173e8da9546dfad8399d81b71d401",
  "placement": 46,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "016173e8da9546dfad8399d81b71d401",
  "placement": 78,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "016173e8da9546dfad8399d81b71d401",
  "placement": 74,
  "time_alive": 614,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "016173e8da9546dfad8399d81b71d401",
  "placement": 81,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 97,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 67,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 78,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 50,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 66,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 75,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 59,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 55,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 79,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 80,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 84,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 94,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 83,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 63,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 89,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 70,
  "time_alive": 846,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "838b273fb0ad43d291bb92a9478eafc8",
  "placement": 51,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 95,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 92,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 99,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 76,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 39,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 92,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 93,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 87,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 76,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 39,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 71,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 89,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 73,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 82,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 54,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 43,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 63,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 83,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 46,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 89,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 96,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 51,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 82,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 71,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 64,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 73,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 72,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 82,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 76,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 65,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 53,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 90,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "0f2b7d023218444e965770c1d8757a6d",
  "placement": 91,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00f76ec5-f3ca-4a6c-bf2d-df2a42c166fe",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 70,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0139b55c-190f-47ec-b69c-19d1bd57ffc7",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 53,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "030111e8-24ff-4683-8546-f4e02874d482",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 90,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "020d077f-31c3-4d30-8ae6-7dc8c59199a3",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 52,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00a45a33-aa88-4497-b7fb-aa9f41057111",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 98,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00682554-30cb-427f-91c5-ebb9f9d77934",
  "team_id": "895a9b248bfd453780b971c3fbfef8a8",
  "placement": 80,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 4,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 26,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 6,
  "time_alive": 1463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 9,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 14,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "0169651243e04e79a989506b3c286aae",
  "placement": 47,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 19,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 85,
  "time_alive": 573,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 43,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 3,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 25,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e9a174753a324766a33c6faf5ce93ab9",
  "placement": 1,
  "time_alive": 1527,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 69,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 30,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 1,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 1,
  "time_alive": 1485,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 62,
  "time_alive": 1009,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 64,
  "time_alive": 626,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 1,
  "time_alive": 1527,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 49,
  "time_alive": 1228,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 5,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 49,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 44,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "4d46df5b1f3643448338faf8eeb44f69",
  "placement": 48,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 98,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 42,
  "time_alive": 1304,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1492,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 29,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 32,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 29,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 35,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 58,
  "time_alive": 1111,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 35,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 19,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "617052a5fab84809ac3e8baef938963f",
  "placement": 2,
  "time_alive": 1527,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 56,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 6,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 25,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 6,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 59,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 40,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 7,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 12,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 19,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 97,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e9f8bb90253d4a51a7a42bc4f6c48dff",
  "placement": 9,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 7,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 75,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 10,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 22,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 55,
  "time_alive": 1140,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 11,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 18,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 14,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 49,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 2,
  "time_alive": 1539,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 82,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 24,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 40,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 37,
  "time_alive": 1319,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 39,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 8,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 5,
  "time_alive": 1503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 60,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 17,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 11,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "eec1a11de93042be847f249c3536d619",
  "placement": 71,
  "time_alive": 437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 2,
  "time_alive": 1527,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 43,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 78,
  "time_alive": 809,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 60,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 27,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 7,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 12,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 48,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 31,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 32,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 5,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "280c926993114c5396b3c84b63aea82b",
  "placement": 15,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 23,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 13,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 96,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 18,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 15,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 18,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 22,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 66,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 34,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 5,
  "time_alive": 1471,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 54,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 3,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 6,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 19,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 46,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 13,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 31,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "ea3a34ea69274f0eab23698910d0d58c",
  "placement": 17,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 67,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 4,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 47,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 43,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 3,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 54,
  "time_alive": 1115,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 3,
  "time_alive": 1511,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 11,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 68,
  "time_alive": 975,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 42,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 49,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "3867357f38c44a5a904731e4b6eb5f49",
  "placement": 52,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 10,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 24,
  "time_alive": 1387,
  "elims": 2,
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
    