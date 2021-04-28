const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 76,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 29,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 71,
  "time_alive": 882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 46,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "9cd77d61613244699e3dfb7815f59cf9",
  "placement": 33,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 11,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 69,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 51,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 47,
  "time_alive": 1246,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 80,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "1ab7fb2a0c8e432e9e22265a2833bf47",
  "placement": 12,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "1ab7fb2a0c8e432e9e22265a2833bf47",
  "placement": 56,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "1ab7fb2a0c8e432e9e22265a2833bf47",
  "placement": 85,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "1ab7fb2a0c8e432e9e22265a2833bf47",
  "placement": 52,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "1ab7fb2a0c8e432e9e22265a2833bf47",
  "placement": 35,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "1ab7fb2a0c8e432e9e22265a2833bf47",
  "placement": 55,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "ac238793d30a4146ab4848a106aeaa4f",
  "placement": 41,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "ac238793d30a4146ab4848a106aeaa4f",
  "placement": 92,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "ac238793d30a4146ab4848a106aeaa4f",
  "placement": 54,
  "time_alive": 1149,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "ac238793d30a4146ab4848a106aeaa4f",
  "placement": 19,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "ac238793d30a4146ab4848a106aeaa4f",
  "placement": 54,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "ac238793d30a4146ab4848a106aeaa4f",
  "placement": 84,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 7,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 90,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "727c87a88c7d480b8d06f4d4a3988b96",
  "placement": 83,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "727c87a88c7d480b8d06f4d4a3988b96",
  "placement": 50,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "727c87a88c7d480b8d06f4d4a3988b96",
  "placement": 72,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "727c87a88c7d480b8d06f4d4a3988b96",
  "placement": 93,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "727c87a88c7d480b8d06f4d4a3988b96",
  "placement": 33,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "727c87a88c7d480b8d06f4d4a3988b96",
  "placement": 11,
  "time_alive": 1446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "f46830a576b74f8e8f2ce46ad7e5c707",
  "placement": 78,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "f46830a576b74f8e8f2ce46ad7e5c707",
  "placement": 72,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "f46830a576b74f8e8f2ce46ad7e5c707",
  "placement": 91,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "f46830a576b74f8e8f2ce46ad7e5c707",
  "placement": 77,
  "time_alive": 756,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "f46830a576b74f8e8f2ce46ad7e5c707",
  "placement": 49,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "f46830a576b74f8e8f2ce46ad7e5c707",
  "placement": 10,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 29,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 89,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 69,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 54,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 26,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "5e404c2add164a8ba629652aabff94be",
  "placement": 51,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 30,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 52,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 59,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 24,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "d24166035e7b4b8cae002b0b05b47c82",
  "placement": 48,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 90,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 54,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 100,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 92,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 28,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f",
  "placement": 30,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "bace3260dd5648f19e33d6eae8fc69dc",
  "placement": 51,
  "time_alive": 1159,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "bace3260dd5648f19e33d6eae8fc69dc",
  "placement": 53,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "bace3260dd5648f19e33d6eae8fc69dc",
  "placement": 82,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "bace3260dd5648f19e33d6eae8fc69dc",
  "placement": 67,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "bace3260dd5648f19e33d6eae8fc69dc",
  "placement": 34,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "bace3260dd5648f19e33d6eae8fc69dc",
  "placement": 38,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 43,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 83,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 67,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 62,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 29,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 64,
  "time_alive": 841,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 54,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 39,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 44,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 51,
  "time_alive": 1211,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 63,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "5a85b2f2ceca4e34a936d3114190556c",
  "placement": 70,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 89,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 58,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 88,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 27,
  "time_alive": 1366,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 74,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 79,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "34a647a761814f1f8b797cca9d5e4b6e",
  "placement": 99,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "34a647a761814f1f8b797cca9d5e4b6e",
  "placement": 30,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "34a647a761814f1f8b797cca9d5e4b6e",
  "placement": 81,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "34a647a761814f1f8b797cca9d5e4b6e",
  "placement": 88,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "34a647a761814f1f8b797cca9d5e4b6e",
  "placement": 53,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "34a647a761814f1f8b797cca9d5e4b6e",
  "placement": 63,
  "time_alive": 856,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 74,
  "time_alive": 672,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 25,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 61,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 70,
  "time_alive": 904,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 87,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 58,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "4c82c1abda324809a67a2c1619c3ed81",
  "placement": 40,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "4c82c1abda324809a67a2c1619c3ed81",
  "placement": 88,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "4c82c1abda324809a67a2c1619c3ed81",
  "placement": 35,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "4c82c1abda324809a67a2c1619c3ed81",
  "placement": 63,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "4c82c1abda324809a67a2c1619c3ed81",
  "placement": 88,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "4c82c1abda324809a67a2c1619c3ed81",
  "placement": 60,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 52,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 42,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 84,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 28,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 61,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 57,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 72,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 85,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 63,
  "time_alive": 1001,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 91,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 48,
  "time_alive": 1223,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 93,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 35,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 77,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 57,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 89,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 58,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 49,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "b3fc262d0a9f4c27a956da83cb6b6e6d",
  "placement": 95,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "b3fc262d0a9f4c27a956da83cb6b6e6d",
  "placement": 95,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "b3fc262d0a9f4c27a956da83cb6b6e6d",
  "placement": 71,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "b3fc262d0a9f4c27a956da83cb6b6e6d",
  "placement": 86,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "b3fc262d0a9f4c27a956da83cb6b6e6d",
  "placement": 76,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "b3fc262d0a9f4c27a956da83cb6b6e6d",
  "placement": 29,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "8366152d2c2d4021a47963144eb4b08b",
  "placement": 53,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "8366152d2c2d4021a47963144eb4b08b",
  "placement": 78,
  "time_alive": 640,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "8366152d2c2d4021a47963144eb4b08b",
  "placement": 60,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "8366152d2c2d4021a47963144eb4b08b",
  "placement": 35,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "8366152d2c2d4021a47963144eb4b08b",
  "placement": 84,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "8366152d2c2d4021a47963144eb4b08b",
  "placement": 80,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 92,
  "time_alive": 129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 99,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 58,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 75,
  "time_alive": 793,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 95,
  "time_alive": 145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 89,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 96,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 63,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 46,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 57,
  "time_alive": 1158,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 66,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 76,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "f512b51de0b440428df97f2be7ef71dd",
  "placement": 49,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "f512b51de0b440428df97f2be7ef71dd",
  "placement": 46,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "f512b51de0b440428df97f2be7ef71dd",
  "placement": 62,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "f512b51de0b440428df97f2be7ef71dd",
  "placement": 94,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "f512b51de0b440428df97f2be7ef71dd",
  "placement": 94,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "f512b51de0b440428df97f2be7ef71dd",
  "placement": 85,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 59,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 93,
  "time_alive": 222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a",
  "placement": 64,
  "time_alive": 990,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 87,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 98,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 93,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 58,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 98,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 59,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 61,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 96,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 94,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 99,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 70,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 88,
  "time_alive": 198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 63,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 59,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 78,
  "time_alive": 545,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 95,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 73,
  "time_alive": 750,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "81b5dff316fd4660809fc00c84ae0135",
  "placement": 96,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 94,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 100,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 65,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 83,
  "time_alive": 500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 64,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "a46c3a48d0554aaf8fa2a068e0e711a0",
  "placement": 77,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "a65ef67e8f594c0b858cbeeaea85ed6a",
  "placement": 76,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "a65ef67e8f594c0b858cbeeaea85ed6a",
  "placement": 91,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "a65ef67e8f594c0b858cbeeaea85ed6a",
  "placement": 92,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "a65ef67e8f594c0b858cbeeaea85ed6a",
  "placement": 55,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "a65ef67e8f594c0b858cbeeaea85ed6a",
  "placement": 91,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "a65ef67e8f594c0b858cbeeaea85ed6a",
  "placement": 87,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 70,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 84,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 90,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 78,
  "time_alive": 732,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 92,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb",
  "placement": 97,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 56,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 60,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 75,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 50,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 93,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 94,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "e5975f8399454227b6a39afa72aeea1f",
  "placement": 73,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "e5975f8399454227b6a39afa72aeea1f",
  "placement": 81,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "e5975f8399454227b6a39afa72aeea1f",
  "placement": 55,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "e5975f8399454227b6a39afa72aeea1f",
  "placement": 61,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "e5975f8399454227b6a39afa72aeea1f",
  "placement": 55,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "e5975f8399454227b6a39afa72aeea1f",
  "placement": 86,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0225f10a-926f-4e6e-bf17-a5216c559a67",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 85,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00365b18-16b5-4f14-9b98-738b596a6e62",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 73,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01fbf803-b351-46bc-b9e2-fd4b165d9540",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "035f6250-dd0a-42a0-ba39-1f7a6cfd8142",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 98,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00b90537-80f6-49ea-8be2-01e071df1c66",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 96,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f99128-2bb7-4cc5-aaa3-2369a51c6e6e",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 90,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 20,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 22,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 1,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 4,
  "time_alive": 1481,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 49,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 25,
  "time_alive": 1375,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 11,
  "time_alive": 1411,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 71,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 33,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 1,
  "time_alive": 1513,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 2,
  "time_alive": 1514,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 68,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 19,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 17,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 12,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 56,
  "time_alive": 1100,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 1,
  "time_alive": 1514,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51",
  "placement": 11,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 4,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 18,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 23,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 15,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 50,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 9,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 2,
  "time_alive": 1465,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 21,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 7,
  "time_alive": 1505,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 68,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 21,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c58424ab87e448299dfe99fb169a18e7",
  "placement": 54,
  "time_alive": 1048,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 5,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 62,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 18,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 6,
  "time_alive": 1466,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "69adb6e736f34640a7e5bdf6754e664f",
  "placement": 31,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 1,
  "time_alive": 1465,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 45,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 2,
  "time_alive": 1534,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 61,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 64,
  "time_alive": 1030,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 94,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 46,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 4,
  "time_alive": 1474,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 15,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 26,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 23,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 61,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 60,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 1,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 37,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 85,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 5,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 30,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 69,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 14,
  "time_alive": 1463,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 8,
  "time_alive": 1438,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 54,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 74,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 63,
  "time_alive": 1013,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 32,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 10,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 33,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 14,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 33,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 14,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 8,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 38,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 19,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 27,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 78,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 18,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 15,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 58,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 71,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 16,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 6,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 23,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 54,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 48,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 25,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 52,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 1,
  "time_alive": 1511,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 37,
  "time_alive": 1301,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 2,
  "time_alive": 1514,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 26,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 87,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7",
  "placement": 69,
  "time_alive": 637,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 54,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 36,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 28,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 42,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 12,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 4,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 26,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 76,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 3,
  "time_alive": 1533,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 14,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 34,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 28,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 62,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 11,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 85,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 79,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 46,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "d1ff45f922bf41fe8a9abfd613b4597c",
  "placement": 2,
  "time_alive": 1511,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 53,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 3,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 34,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 78,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "87eaf852ee8b447b841a6b002706a6e0",
  "placement": 18,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 67,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 9,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 46,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 3,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 20,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 53,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 31,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 6,
  "time_alive": 1470,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 69,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 49,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "70dcf43be77042caa80462d6286d7b98",
  "placement": 44,
  "time_alive": 1247,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 77,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 27,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 49,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 16,
  "time_alive": 1413,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 61,
  "time_alive": 1061,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 16,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 74,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 55,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 18,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 20,
  "time_alive": 1394,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 30,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "a68f8155f6b54fa5bb5ba4012463dcad",
  "placement": 36,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 85,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 46,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 6,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 51,
  "time_alive": 1139,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 89,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "d3d0d93c44494122806a2c0e5d45621e",
  "placement": 3,
  "time_alive": 1502,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 16,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 49,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 42,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 60,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 3,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 23,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 8,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 97,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 22,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 9,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 60,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 12,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 25,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 16,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 72,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 66,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 35,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 9,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 90,
  "time_alive": 526,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 19,
  "time_alive": 1427,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 90,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 51,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 46,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 7,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 38,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 66,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 64,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 29,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "d68106ccdf6c44b990162e7b811b4572",
  "placement": 19,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "548318d492554e67b14485d615e499d9",
  "placement": 71,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "548318d492554e67b14485d615e499d9",
  "placement": 85,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "548318d492554e67b14485d615e499d9",
  "placement": 63,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "548318d492554e67b14485d615e499d9",
  "placement": 2,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "548318d492554e67b14485d615e499d9",
  "placement": 15,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "548318d492554e67b14485d615e499d9",
  "placement": 39,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 3,
  "time_alive": 1451,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 89,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 84,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 81,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 19,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 32,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "2ff48b59e2ae4adcbb231af367083816",
  "placement": 32,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "2ff48b59e2ae4adcbb231af367083816",
  "placement": 75,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "2ff48b59e2ae4adcbb231af367083816",
  "placement": 74,
  "time_alive": 751,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "2ff48b59e2ae4adcbb231af367083816",
  "placement": 5,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "2ff48b59e2ae4adcbb231af367083816",
  "placement": 63,
  "time_alive": 1031,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "2ff48b59e2ae4adcbb231af367083816",
  "placement": 34,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 61,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 99,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 9,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 73,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 73,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 8,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 35,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 59,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 24,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 87,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 26,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 15,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 73,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 56,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 11,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 46,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 4,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "fe742f5ec10245f888803fd8b47b5724",
  "placement": 56,
  "time_alive": 1041,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 72,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 19,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 17,
  "time_alive": 1450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 53,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 18,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "6157ffbf1ff74fccb4a35685c13b6062",
  "placement": 27,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "5c19f19057a54c2e8117819de44123ef",
  "placement": 52,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "5c19f19057a54c2e8117819de44123ef",
  "placement": 28,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "5c19f19057a54c2e8117819de44123ef",
  "placement": 23,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "5c19f19057a54c2e8117819de44123ef",
  "placement": 11,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "5c19f19057a54c2e8117819de44123ef",
  "placement": 73,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "b113cff792584acdbc1b34fc3001c5a8",
  "placement": 27,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "b113cff792584acdbc1b34fc3001c5a8",
  "placement": 79,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "b113cff792584acdbc1b34fc3001c5a8",
  "placement": 8,
  "time_alive": 1496,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "b113cff792584acdbc1b34fc3001c5a8",
  "placement": 38,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "b113cff792584acdbc1b34fc3001c5a8",
  "placement": 45,
  "time_alive": 1291,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "b113cff792584acdbc1b34fc3001c5a8",
  "placement": 77,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "07ce1491733b4f91ab329ad86ad5de92",
  "placement": 79,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "07ce1491733b4f91ab329ad86ad5de92",
  "placement": 12,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "07ce1491733b4f91ab329ad86ad5de92",
  "placement": 91,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "07ce1491733b4f91ab329ad86ad5de92",
  "placement": 48,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "07ce1491733b4f91ab329ad86ad5de92",
  "placement": 58,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "07ce1491733b4f91ab329ad86ad5de92",
  "placement": 7,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 24,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 70,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 57,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 31,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 9,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 62,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 17,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 83,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 21,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 55,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 53,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "7bf3c3d1a34e41c199881db4756845ef",
  "placement": 13,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 57,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 65,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 27,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 10,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 13,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "df7190339aa5450abbed05c9cdf93a9e",
  "placement": 50,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 48,
  "time_alive": 1223,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 58,
  "time_alive": 1159,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 30,
  "time_alive": 1384,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 72,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 62,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 75,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 36,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 14,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 32,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 74,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 25,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "70142717f92e4b86b123e082dc57be53",
  "placement": 40,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 91,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 5,
  "time_alive": 1510,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 32,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 96,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8d3ef709526f481abed82126176b1098",
  "placement": 67,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 45,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 29,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 39,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 54,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "5853c28eb45c4bf3bf145b66fd2d5ff6",
  "placement": 22,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 10,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 40,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 43,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 21,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 75,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 45,
  "time_alive": 1246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 15,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 25,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 76,
  "time_alive": 636,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 80,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8ef1dd0379d84815bcd7d321818831de",
  "placement": 59,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "01883811accb4798b735e4b28d781b2f",
  "placement": 38,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "01883811accb4798b735e4b28d781b2f",
  "placement": 73,
  "time_alive": 873,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "01883811accb4798b735e4b28d781b2f",
  "placement": 81,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "01883811accb4798b735e4b28d781b2f",
  "placement": 69,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "01883811accb4798b735e4b28d781b2f",
  "placement": 5,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "01883811accb4798b735e4b28d781b2f",
  "placement": 86,
  "time_alive": 280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 81,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 53,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 25,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 50,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 30,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 56,
  "time_alive": 1101,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 67,
  "time_alive": 942,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 67,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 58,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 22,
  "time_alive": 1393,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 47,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 34,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 7,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 65,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 85,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "bc7141afb13045ec911a0960d89463e5",
  "placement": 26,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "e4a7e7e9e62a4de8894ba8a14a326714",
  "placement": 75,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "e4a7e7e9e62a4de8894ba8a14a326714",
  "placement": 43,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "e4a7e7e9e62a4de8894ba8a14a326714",
  "placement": 40,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "e4a7e7e9e62a4de8894ba8a14a326714",
  "placement": 45,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "e4a7e7e9e62a4de8894ba8a14a326714",
  "placement": 36,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "e4a7e7e9e62a4de8894ba8a14a326714",
  "placement": 17,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "815c53c3f9cf4f9e96b104544f10a6c5",
  "placement": 69,
  "time_alive": 933,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "815c53c3f9cf4f9e96b104544f10a6c5",
  "placement": 98,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "815c53c3f9cf4f9e96b104544f10a6c5",
  "placement": 47,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "815c53c3f9cf4f9e96b104544f10a6c5",
  "placement": 28,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "815c53c3f9cf4f9e96b104544f10a6c5",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "815c53c3f9cf4f9e96b104544f10a6c5",
  "placement": 10,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d",
  "placement": 49,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d",
  "placement": 64,
  "time_alive": 1010,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d",
  "placement": 16,
  "time_alive": 1451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d",
  "placement": 86,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d",
  "placement": 7,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d",
  "placement": 71,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 41,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 88,
  "time_alive": 566,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 94,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 6,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 40,
  "time_alive": 1320,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "25a6264790f742ecbf177e19db1f1f47",
  "placement": 84,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "d76ac843370e46e1bc86049bd3a556cf",
  "placement": 64,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "d76ac843370e46e1bc86049bd3a556cf",
  "placement": 82,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "d76ac843370e46e1bc86049bd3a556cf",
  "placement": 90,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "d76ac843370e46e1bc86049bd3a556cf",
  "placement": 22,
  "time_alive": 1387,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "d76ac843370e46e1bc86049bd3a556cf",
  "placement": 33,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "d76ac843370e46e1bc86049bd3a556cf",
  "placement": 21,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "3f206d1f7030431b958ae369c4707014",
  "placement": 58,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "3f206d1f7030431b958ae369c4707014",
  "placement": 62,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "3f206d1f7030431b958ae369c4707014",
  "placement": 35,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "3f206d1f7030431b958ae369c4707014",
  "placement": 39,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "3f206d1f7030431b958ae369c4707014",
  "placement": 74,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "3f206d1f7030431b958ae369c4707014",
  "placement": 14,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 47,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 5,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 73,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 83,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 78,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 29,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 28,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 57,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 44,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 66,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 48,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "e749d68886b9491fb912f90ce837498c",
  "placement": 57,
  "time_alive": 987,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "ee22be17f32e46e5abae255d7a8f0c14",
  "placement": 78,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "ee22be17f32e46e5abae255d7a8f0c14",
  "placement": 92,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "ee22be17f32e46e5abae255d7a8f0c14",
  "placement": 4,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "ee22be17f32e46e5abae255d7a8f0c14",
  "placement": 43,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "ee22be17f32e46e5abae255d7a8f0c14",
  "placement": 72,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "ee22be17f32e46e5abae255d7a8f0c14",
  "placement": 58,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 40,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 24,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 29,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 89,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 44,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "ca36e50b4d0e46cbbac3812cbcf884ad",
  "placement": 52,
  "time_alive": 1160,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "b3f83c102b724b1c8c2a359964734f5e",
  "placement": 22,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "b3f83c102b724b1c8c2a359964734f5e",
  "placement": 47,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "b3f83c102b724b1c8c2a359964734f5e",
  "placement": 56,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "b3f83c102b724b1c8c2a359964734f5e",
  "placement": 17,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "b3f83c102b724b1c8c2a359964734f5e",
  "placement": 90,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "b3f83c102b724b1c8c2a359964734f5e",
  "placement": 51,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 13,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 26,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 44,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 38,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "947e170c34b54aa2833b067b982010e3",
  "placement": 81,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "39cc38783dfe4e4cb89d51eb5a9447a0",
  "placement": 6,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "39cc38783dfe4e4cb89d51eb5a9447a0",
  "placement": 74,
  "time_alive": 868,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "39cc38783dfe4e4cb89d51eb5a9447a0",
  "placement": 88,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "39cc38783dfe4e4cb89d51eb5a9447a0",
  "placement": 75,
  "time_alive": 824,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "39cc38783dfe4e4cb89d51eb5a9447a0",
  "placement": 70,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "39cc38783dfe4e4cb89d51eb5a9447a0",
  "placement": 88,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 98,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 77,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 7,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 28,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8d1f83e42f82466b81a8232df271651e",
  "placement": 65,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 86,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 86,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 80,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 10,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 24,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 29,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 72,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 89,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 62,
  "time_alive": 997,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 8,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 98,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 39,
  "time_alive": 1277,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 41,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 52,
  "time_alive": 1170,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 91,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "02d15625b4c34aedb459714dbe6e7989",
  "placement": 48,
  "time_alive": 1221,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 42,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 84,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 20,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 88,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 35,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 72,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 93,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 48,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 64,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 36,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 68,
  "time_alive": 916,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 64,
  "time_alive": 809,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 95,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 33,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 50,
  "time_alive": 1179,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 70,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 55,
  "time_alive": 1161,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 37,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 12,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 81,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 70,
  "time_alive": 899,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 65,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 71,
  "time_alive": 853,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "bbd82284344b4fd0b50fe1d461431047",
  "placement": 80,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 65,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 52,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 71,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 11,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 76,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 55,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 55,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 10,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 83,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 67,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 65,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 87,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 84,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 20,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 75,
  "time_alive": 710,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 27,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 88,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8e91b5368ea64220b6d852f96d972846",
  "placement": 85,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 90,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 68,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 54,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 13,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 41,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5",
  "placement": 63,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8231f589e4a74d969c0c504d574731ed",
  "placement": 66,
  "time_alive": 968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8231f589e4a74d969c0c504d574731ed",
  "placement": 13,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8231f589e4a74d969c0c504d574731ed",
  "placement": 61,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8231f589e4a74d969c0c504d574731ed",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8231f589e4a74d969c0c504d574731ed",
  "placement": 77,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8231f589e4a74d969c0c504d574731ed",
  "placement": 38,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 21,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 66,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 31,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 40,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 82,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "3dd83d95182849b9b63a3d1415a911b5",
  "placement": 94,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "3dd83d95182849b9b63a3d1415a911b5",
  "placement": 78,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "3dd83d95182849b9b63a3d1415a911b5",
  "placement": 13,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "3dd83d95182849b9b63a3d1415a911b5",
  "placement": 29,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "3dd83d95182849b9b63a3d1415a911b5",
  "placement": 47,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "3dd83d95182849b9b63a3d1415a911b5",
  "placement": 79,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0",
  "placement": 96,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0",
  "placement": 51,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0",
  "placement": 92,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0",
  "placement": 24,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0",
  "placement": 86,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0",
  "placement": 20,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 68,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 34,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 87,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 80,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 17,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "870123fbc51c49fdb18696e7a257b7f5",
  "placement": 83,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 50,
  "time_alive": 1211,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 63,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 53,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 34,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 43,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 93,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 33,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 80,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 93,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 30,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 32,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 60,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8adc09b3c22e440e87fb2792f59ea45e",
  "placement": 44,
  "time_alive": 1243,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8adc09b3c22e440e87fb2792f59ea45e",
  "placement": 44,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8adc09b3c22e440e87fb2792f59ea45e",
  "placement": 77,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8adc09b3c22e440e87fb2792f59ea45e",
  "placement": 47,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8adc09b3c22e440e87fb2792f59ea45e",
  "placement": 83,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8adc09b3c22e440e87fb2792f59ea45e",
  "placement": 70,
  "time_alive": 634,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 43,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 35,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 41,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "fb2a48ca200a4f7fb739690a1755001d",
  "placement": 41,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 80,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 94,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 45,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 96,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 99,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "aadf156486f0425db79e7b75d376dd95",
  "placement": 49,
  "time_alive": 1202,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 87,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 42,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 82,
  "time_alive": 409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 76,
  "time_alive": 824,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 59,
  "time_alive": 1067,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 42,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 70,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 23,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 79,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 52,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 84,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 95,
  "time_alive": 137,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 89,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 95,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 37,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 59,
  "time_alive": 1079,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 98,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 91,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 97,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 39,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 60,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 84,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 94,
  "time_alive": 223,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "9538d344051d48cfbe3cc6d93ace8869",
  "placement": 97,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 59,
  "time_alive": 1075,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 93,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 55,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 77,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 57,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "1f30187dd013437bb48617762fd9f011",
  "placement": 92,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 99,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 96,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 51,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 95,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 95,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "cfb6f90de26d4fbab41fb3c0b2faf320",
  "placement": 41,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "1994cc13b2854efc930b648d21706bca",
  "placement": 76,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "1994cc13b2854efc930b648d21706bca",
  "placement": 37,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "1994cc13b2854efc930b648d21706bca",
  "placement": 57,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "1994cc13b2854efc930b648d21706bca",
  "placement": 97,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "1994cc13b2854efc930b648d21706bca",
  "placement": 90,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "e1078a0fe9f946b19f6a203ce1ae1fb4",
  "placement": 88,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "e1078a0fe9f946b19f6a203ce1ae1fb4",
  "placement": 60,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "e1078a0fe9f946b19f6a203ce1ae1fb4",
  "placement": 36,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "e1078a0fe9f946b19f6a203ce1ae1fb4",
  "placement": 63,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "e1078a0fe9f946b19f6a203ce1ae1fb4",
  "placement": 92,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "e1078a0fe9f946b19f6a203ce1ae1fb4",
  "placement": 76,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 83,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 87,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 94,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 67,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 66,
  "time_alive": 731,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 51,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 91,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 86,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 92,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 69,
  "time_alive": 914,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 89,
  "time_alive": 202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "38e973e823a24643bc4336159496cc9a",
  "placement": 82,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "38e973e823a24643bc4336159496cc9a",
  "placement": 68,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "38e973e823a24643bc4336159496cc9a",
  "placement": 82,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "38e973e823a24643bc4336159496cc9a",
  "placement": 79,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "38e973e823a24643bc4336159496cc9a",
  "placement": 43,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 100,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 50,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 78,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 93,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 81,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 99,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05dc4381-df99-4105-aead-0dbe0442b844",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 92,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b569018-6ac5-42a0-900e-7a89aa83a4f3",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 61,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05675383-0d1d-4c57-967a-926855d7c198",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 59,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f8d168-a3f9-4f3b-be5e-8f163cf6c455",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 91,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05e042fe-5126-459c-a3e4-41cab244caee",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 82,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ba17bf-bb1c-496d-8390-51eebc877dcb",
  "team_id": "8521fe2d0db24484b8e005f4719f2291",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 4,
  "time_alive": 1485,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1562,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 93,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 8,
  "time_alive": 1486,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 10,
  "time_alive": 1459,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 41,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 2,
  "time_alive": 1512,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 78,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 14,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 1,
  "time_alive": 1526,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 56,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 69,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 13,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 12,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 4,
  "time_alive": 1519,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 94,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 24,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b",
  "placement": 5,
  "time_alive": 1492,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 83,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 14,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 12,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 44,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 26,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8",
  "placement": 10,
  "time_alive": 1470,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 14,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 71,
  "time_alive": 759,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 16,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 4,
  "time_alive": 1514,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 14,
  "time_alive": 1427,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 96,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 8,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 42,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 22,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 19,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 16,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 45,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 2,
  "time_alive": 1562,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 22,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 6,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 20,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 31,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 91,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 19,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 1,
  "time_alive": 1536,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 65,
  "time_alive": 1030,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 51,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 19,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 86,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 7,
  "time_alive": 1463,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 40,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 7,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 29,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 17,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 16,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 11,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 96,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 46,
  "time_alive": 1292,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 72,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 15,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 75,
  "time_alive": 673,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 30,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 18,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 38,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "0a5c24defd1f4810be4592a179482d93",
  "placement": 6,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 64,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 97,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 25,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 17,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 9,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 4,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 58,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 9,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 26,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 5,
  "time_alive": 1507,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 21,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 29,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 60,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 18,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 15,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 30,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 60,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 15,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 20,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 27,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 23,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 29,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 3,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 86,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 27,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 81,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 2,
  "time_alive": 1536,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 78,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "8bd1f40d430c4bd980672d253fbab307",
  "placement": 8,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 7,
  "time_alive": 1457,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 94,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 41,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 63,
  "time_alive": 1043,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 25,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 25,
  "time_alive": 1387,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 37,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 20,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 31,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 31,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 54,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1502,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 65,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 5,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 69,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 1,
  "time_alive": 1502,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 38,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 6,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 33,
  "time_alive": 1356,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 81,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 6,
  "time_alive": 1478,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "b2efa308e20b467c8b13c510677d77e7",
  "placement": 53,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 40,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 10,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 56,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 2,
  "time_alive": 1526,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 55,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 48,
  "time_alive": 1205,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 88,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 17,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 99,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 9,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 23,
  "time_alive": 1398,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 65,
  "time_alive": 931,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 29,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 48,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 75,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 2,
  "time_alive": 1502,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 28,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 98,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 10,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 27,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 11,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "f84249f3202947ddbce9b345783afbb8",
  "placement": 13,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 35,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 41,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 20,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 52,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 7,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e",
  "placement": 12,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 72,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 36,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 96,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 49,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 8,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 11,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 80,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 53,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 6,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 3,
  "time_alive": 1524,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 79,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6",
  "placement": 18,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 39,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 8,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 52,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 83,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 69,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 7,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 55,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 47,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 8,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 28,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 13,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 74,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 23,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 16,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 19,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 38,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 41,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 42,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 51,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 44,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 74,
  "time_alive": 798,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 32,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "dba2e05bb5a6493ab7e1dd154ba9921a",
  "placement": 3,
  "time_alive": 1500,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 19,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 66,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 7,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 19,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 53,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "5b26cee7e80c4f8fb85980c55f013941",
  "placement": 73,
  "time_alive": 703,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 54,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 5,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 18,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 14,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 96,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "ae768fbcaec7485090a922f939e9b9c8",
  "placement": 46,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 76,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 77,
  "time_alive": 616,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 62,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 47,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 72,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "3e2cf3b1772c4e2abb42b6fed89c0323",
  "placement": 1,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 1,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 29,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c20f07-5846-4827-9299-5cd7e6d883cf",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 72,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a274a2-9a39-4ab4-9b79-e9ecbc271401",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 66,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00e71644-4f59-4b30-814e-040bb5a5726d",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 97,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02c5c4b3-ecf2-4c55-8f4a-4d5a144e866e",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 90,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00bf74b3-8a65-409b-b025-eb6b765e7dbd",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1505,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0218b018-212e-4632-8741-435ba03a34cd",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 51,
  "time_alive": 1238,
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
    