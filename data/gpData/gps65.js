const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "d2fe301c-2e57-426d-b42c-40eb3add81e1",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 33,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ce5bf95-2d20-4b40-909f-1b65ca17aaa6",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 28,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d84870d6-fe0b-4376-ae70-392eb57a77d5",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 31,
  "time_alive": 194,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "76588e00-545e-4597-bdfc-3c314f6260d3",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 32,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b4f7d19e-8ce0-4bcb-a228-d6a948d52922",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 33,
  "time_alive": 236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5f10004d-b4c7-4523-a94e-a1b7a66bb7d6",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 32,
  "time_alive": 117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d009507c-18d6-40b7-b688-ef3cb659254e",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 33,
  "time_alive": 116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8687a446-9fa5-4358-9de6-2c195b1abdf8",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 32,
  "time_alive": 256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96bcd598-4f35-41a5-9e81-8a978ec58d5c",
  "team_id": "4b068a62cd8f4cafb2b22ea46797c617:9449ecc042194c4c80d487e79289d072:b7994227be864f4790662e4eecde4b5d",
  "placement": 31,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1441,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 15,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 24,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1503,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 6,
  "time_alive": 1492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 8,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 4,
  "time_alive": 1502,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 10,
  "time_alive": 1415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1475,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 1,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 9,
  "time_alive": 1404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "4b2c69a69d064a0385be93b17765dd41:5d9e60f66bdf4f1db8acb95ea9d637f5:9bfff2827d024147b93c655a204981d1",
  "placement": 11,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 3,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 11,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 7,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 5,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 9,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 4,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1536,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1510,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 15,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 11,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 2,
  "time_alive": 1482,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "4ab6b2663e7d4971965e99476b98d91a:bb425d8158204c68a0d5ced50b1da0b2:e7eed927860f4fbb874cefd09eabeb97",
  "placement": 13,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 5,
  "time_alive": 1469,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 23,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 24,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 1,
  "time_alive": 1503,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 2,
  "time_alive": 1545,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 16,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1514,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 12,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 4,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 3,
  "time_alive": 1473,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 25,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "5027366496ce4254931a2e2f02b1af32:9c0aebee92fc4471ab8101bbe12a1b0d:ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 2,
  "time_alive": 1528,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 6,
  "time_alive": 1386,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 9,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 9,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 3,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 5,
  "time_alive": 1494,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 26,
  "time_alive": 830,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 22,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 6,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 5,
  "time_alive": 1439,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 30,
  "time_alive": 606,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 11,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "85692ee96a4249a3a516cc044111d00a:8f008e74e8624a18ab99ef9757866d56:df13c1a64151456c8dec92058736b8b0",
  "placement": 10,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 10,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 12,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 1,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 6,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 27,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 6,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 26,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 3,
  "time_alive": 1496,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 1,
  "time_alive": 1475,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 25,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 23,
  "time_alive": 895,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "06b8361f18c14519945ddfa410e36110:6e63cf5db70045be877804832b6cf279:ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 4,
  "time_alive": 1510,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 11,
  "time_alive": 1356,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 1,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 3,
  "time_alive": 1446,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 11,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 3,
  "time_alive": 1534,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 11,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 12,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 9,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 20,
  "time_alive": 1137,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 31,
  "time_alive": 602,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 6,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba:85dead5e600741a3bce3b5177d64bbd6:bf9d2a652b524a61825cc3a7d475d1f3",
  "placement": 14,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 2,
  "time_alive": 1441,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 3,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 13,
  "time_alive": 1340,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 16,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 13,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 9,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 13,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 14,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 3,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 27,
  "time_alive": 858,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 1,
  "time_alive": 1482,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "214e163a847741008b115bb2d70f3a11:2d6fd84077564124bcb325053eeb48cb:d8ebd43a089541a2903a092147b0052e",
  "placement": 19,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 13,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 13,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 6,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 12,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 10,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 2,
  "time_alive": 1508,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 19,
  "time_alive": 1241,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 15,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 8,
  "time_alive": 1396,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 24,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 12,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "c2678d22779149458d2774dae35bf90a:e11ab928f4504b9297f53ef6e7e1900a:e28c4c642e5f4a42b80969baaba5bb69",
  "placement": 1,
  "time_alive": 1528,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 4,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 21,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 21,
  "time_alive": 1141,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 8,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 14,
  "time_alive": 1399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 1,
  "time_alive": 1508,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 8,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 7,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 11,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 13,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 17,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "2a68f70abe8e4b6dbf865124302a09f8:5fbd25d4b11b456ebfeeda56d3d6ab17:a5d24766bf784ed6b8745ad195881284",
  "placement": 5,
  "time_alive": 1493,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 8,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 4,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 20,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 11,
  "time_alive": 1423,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 20,
  "time_alive": 1227,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 5,
  "time_alive": 1454,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 21,
  "time_alive": 1130,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 19,
  "time_alive": 1244,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 3,
  "time_alive": 1457,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df:7731bc6b134745c58efeb10e37f81ef0:b3555c6b364c4a52b307a1348dec797b",
  "placement": 9,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 18,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 2,
  "time_alive": 1494,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 25,
  "time_alive": 726,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 19,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 1,
  "time_alive": 1545,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 3,
  "time_alive": 1492,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 10,
  "time_alive": 1476,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 24,
  "time_alive": 1048,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 22,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 9,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 22,
  "time_alive": 960,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "2fe98e6b52f14e7e904456092af67627:b9783bde21354df2815a6a00cbea4ffa:f490d9db8e1b473fb2ad0e15c9e70a45",
  "placement": 21,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 19,
  "time_alive": 1178,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 25,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 20,
  "time_alive": 1142,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 14,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 22,
  "time_alive": 1055,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 7,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 5,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 16,
  "time_alive": 1379,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 14,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 2,
  "time_alive": 1510,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 4,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "46fb9d209462445dbad93f48188f1fed:7b2516c47db348cda12b482cef9e2841:8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 7,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 19,
  "time_alive": 1145,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 22,
  "time_alive": 1151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 2,
  "time_alive": 1468,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 7,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 17,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 25,
  "time_alive": 924,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 1,
  "time_alive": 1536,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 28,
  "time_alive": 654,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 18,
  "time_alive": 1278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 8,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 15,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "44570244b1a3466d8038e1cbb2497baa:6aed9868caaa4764b61d9c6c79ee5e7b:d865131855c741699ca16f4664327507",
  "placement": 22,
  "time_alive": 1274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 17,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 28,
  "time_alive": 368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 25,
  "time_alive": 650,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 22,
  "time_alive": 965,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 18,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 22,
  "time_alive": 1020,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 21,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 1,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 7,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 4,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 10,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "769a91f78c41409db17d45375792713b:c95695e09728493e852418f211c78e28:fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 26,
  "time_alive": 658,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 20,
  "time_alive": 1138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 8,
  "time_alive": 1413,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 28,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 30,
  "time_alive": 254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 28,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 19,
  "time_alive": 1239,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 25,
  "time_alive": 1163,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 8,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 27,
  "time_alive": 379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 7,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 7,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "05d940298beb43f6b1eae3a146a39133:111e535f59cf453b9bc3aa47ef00f20b:ededbcbf84e44c95a4313222515558b7",
  "placement": 3,
  "time_alive": 1525,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 12,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 16,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 31,
  "time_alive": 155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 4,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 24,
  "time_alive": 925,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 20,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 6,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 4,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 10,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 18,
  "time_alive": 1335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 27,
  "time_alive": 720,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e:563b643108fb47c4a42aacdb660c74ec:5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 24,
  "time_alive": 1015,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 7,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 29,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 11,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 28,
  "time_alive": 484,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 7,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 27,
  "time_alive": 703,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 7,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 20,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 23,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 10,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 14,
  "time_alive": 1370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "69ac00ae0a9847afa8b5b0ab81a6b646:dd1f2310a93b4b3693acdb437f60b289:ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 17,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 21,
  "time_alive": 1138,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 30,
  "time_alive": 187,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 18,
  "time_alive": 1239,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 27,
  "time_alive": 492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 4,
  "time_alive": 1506,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 13,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 30,
  "time_alive": 344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 26,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 16,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 15,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 8,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "5d36be140f1b49f2a1a139e57614b5df:be03142be77848bbbf7f43c8517f01a9:c92714f0458649a3998dc5d920cb73bf",
  "placement": 8,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 15,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 7,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 10,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 16,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 28,
  "time_alive": 427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 14,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 21,
  "time_alive": 1202,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 9,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 23,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 29,
  "time_alive": 480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "65aae2744676435981cdac0b48777def:cf6aaf7e77de4d3886227550505d35c9:fc6ad219619346d1a43ac12fabc2c966",
  "placement": 18,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 4,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 31,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 29,
  "time_alive": 355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 26,
  "time_alive": 573,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 30,
  "time_alive": 370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 24,
  "time_alive": 959,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 28,
  "time_alive": 783,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 17,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 6,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 5,
  "time_alive": 1467,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 28,
  "time_alive": 554,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "0de77c0a74e14a96a5218ea0226ace8b:82914fc61c3a4a2188ad43ef128ec8da:d7947383d34b4a1c8dab936994c1865a",
  "placement": 20,
  "time_alive": 1321,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 24,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 12,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 33,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 12,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 33,
  "time_alive": 183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 17,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 13,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 33,
  "time_alive": 181,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 6,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 18,
  "time_alive": 1050,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "5242d902a81742268993ed4d5ac4bebe:a75ed50c546a43a1be81edcdc7eafe07:fef20a3a7e3f4a969ce901c7abea304e",
  "placement": 6,
  "time_alive": 1473,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 10,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 27,
  "time_alive": 447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 14,
  "time_alive": 1333,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 13,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 32,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 29,
  "time_alive": 752,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 32,
  "time_alive": 168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 22,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 12,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 12,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 13,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "1cdab0fa2d47420a9ec4d4772a35798a:5a6a9b7682af4d5d9722a4e0cfd4a93b:870f06400a554e349d3a8cd31c08e5d6",
  "placement": 15,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 27,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 5,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 26,
  "time_alive": 553,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 9,
  "time_alive": 1432,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 23,
  "time_alive": 977,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 18,
  "time_alive": 1264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 27,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 18,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 13,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 32,
  "time_alive": 595,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 21,
  "time_alive": 1011,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "7afbd48019474b448c0ab66317c16336:7c90ba6b9cee4bc9b78c0fac5438211e:f8d85555af4d463f9e633107d56468af",
  "placement": 12,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 9,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 6,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 15,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 24,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 26,
  "time_alive": 913,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 5,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 16,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 19,
  "time_alive": 1271,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 26,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 26,
  "time_alive": 901,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 24,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "3eefa6d350a348ae8a4ce918b21deb51:9716c6ca03c04f36a925bbc4ee9b6e9f:a7373cbefa824aa6adc805c3cd78e7e4",
  "placement": 28,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 16,
  "time_alive": 1275,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 20,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 10,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 19,
  "time_alive": 1215,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 15,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 15,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 11,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 29,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 17,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 22,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 16,
  "time_alive": 1323,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "759528f9f9ef4bb083807f39372a8c22:816a8580365849f184f3a23392d763c9:8569b5586af14c49987b1b37f137daf3",
  "placement": 27,
  "time_alive": 486,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 17,
  "time_alive": 1257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 26,
  "time_alive": 976,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 5,
  "time_alive": 1436,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 31,
  "time_alive": 198,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 33,
  "time_alive": 135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 30,
  "time_alive": 361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 24,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 23,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 25,
  "time_alive": 635,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 17,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 5,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:d2f00d4d262a41ae91203cb896423a57",
  "placement": 29,
  "time_alive": 337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 14,
  "time_alive": 1295,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 25,
  "time_alive": 1005,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 16,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 18,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 20,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 14,
  "time_alive": 1359,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 33,
  "time_alive": 155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 32,
  "time_alive": 187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 29,
  "time_alive": 290,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 28,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 31,
  "time_alive": 440,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "038f53798d634710a14c1c4be4b73700:394908d5888c4e598687f7f4f43594ef:b8b7e427a803403b8c4d0d262c6a01b3",
  "placement": 23,
  "time_alive": 1208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 23,
  "time_alive": 1137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 29,
  "time_alive": 306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 27,
  "time_alive": 428,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 15,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 8,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 21,
  "time_alive": 1143,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 31,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 30,
  "time_alive": 344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 31,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 29,
  "time_alive": 631,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "29b37225302643cf93550f76fcd385a7:4c5630fee6ce4242b7d86d498ae507df:5307fa29487c44cda5249c683015cf44",
  "placement": 30,
  "time_alive": 477,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 28,
  "time_alive": 647,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 26,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 17,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 23,
  "time_alive": 881,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 29,
  "time_alive": 416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 21,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 9,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 11,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 30,
  "time_alive": 273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 20,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 26,
  "time_alive": 746,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713:c5ce222826e140d2baf35b86610c3496:d0c8c025e19f42e09e188f3a26f01004",
  "placement": 31,
  "time_alive": 234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 31,
  "time_alive": 163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 33,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 8,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 29,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 31,
  "time_alive": 335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 17,
  "time_alive": 1314,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 23,
  "time_alive": 1207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 27,
  "time_alive": 757,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 24,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 33,
  "time_alive": 461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2:2f7ecdb9eaa944b48f075c9d62a15903:a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 33,
  "time_alive": 357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 14,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 30,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 23,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 17,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 19,
  "time_alive": 1251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 31,
  "time_alive": 353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 18,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 25,
  "time_alive": 954,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 19,
  "time_alive": 1166,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 16,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 20,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "47f4824c186b4970b41aa96c47090c4a:7cbf737bfe7b42ef9700f79ff582d31e:a01613611d4b42bbb49900c321c5b21a",
  "placement": 16,
  "time_alive": 1406,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 18,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 32,
  "time_alive": 188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8179319c-b19e-4c10-960d-aa55178c9d1d",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 22,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 21,
  "time_alive": 983,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 25,
  "time_alive": 921,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 23,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 15,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 33,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 28,
  "time_alive": 376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 14,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 19,
  "time_alive": 1049,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "8646bbcaa192447aa42a68c08946c9ac:f31f4702dc6548b7a5c9d381a8d81466:f3ff66a0c2d946bb84ae3b0b6a185c9e",
  "placement": 25,
  "time_alive": 831,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c46acfd-cd6d-412a-b64f-0699e6a540a9",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10a67f40-3750-47b3-a82b-f78ef40e5262",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 30,
  "time_alive": 243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "889a0dea-0718-48ee-924d-b5e038e440a6",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a33cc8b-aac9-4f16-8728-63494d3d446d",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dc4eedd1-58b9-4117-bcf0-69a6af051005",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 12,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9ff26bea-56cf-4bfe-be97-a0a4ab3d526c",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 29,
  "time_alive": 686,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf178053-f88e-4694-bfe1-0ab0a1765703",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 31,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e480f3b8-2ea7-4568-872d-947d0ce16863",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4fed9276-5e12-474c-be56-8e51d544cffa",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 21,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19f72abb-550f-4a4f-a1ac-d315d82ae890",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 32,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2aa6c0f3-1fd9-49a4-9f33-cfb232aaba1e",
  "team_id": "3e60b1793f1b4628afbe7d30756cabb1:50bf9a94d04b4ee59d3c75160b28c19b:e718565c51de4ce48654194478984555",
  "placement": 30,
  "time_alive": 261,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1477,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 7,
  "time_alive": 1432,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 11,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1523,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 13,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 4,
  "time_alive": 1463,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 15,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 2,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 14,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 7,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 18,
  "time_alive": 1241,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1501,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1494,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 18,
  "time_alive": 1293,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 10,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1389,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 8,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 24,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1511,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 2,
  "time_alive": 1523,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 9,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 5,
  "time_alive": 1449,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 8,
  "time_alive": 1425,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 18,
  "time_alive": 1259,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 16,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 5,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 8,
  "time_alive": 1327,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "04489b66290d48968dde800325510257:9e9978d609ff48ccbf85acd7757ef46d:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 9,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "04489b66290d48968dde800325510257:9e9978d609ff48ccbf85acd7757ef46d:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 4,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "04489b66290d48968dde800325510257:9e9978d609ff48ccbf85acd7757ef46d:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 7,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "04489b66290d48968dde800325510257:9e9978d609ff48ccbf85acd7757ef46d:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 20,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "04489b66290d48968dde800325510257:9e9978d609ff48ccbf85acd7757ef46d:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 9,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "04489b66290d48968dde800325510257:9e9978d609ff48ccbf85acd7757ef46d:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 12,
  "time_alive": 1304,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 2,
  "time_alive": 1477,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 10,
  "time_alive": 1417,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 5,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 4,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 19,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 16,
  "time_alive": 1284,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 12,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 3,
  "time_alive": 1495,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 12,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 5,
  "time_alive": 1502,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 3,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 14,
  "time_alive": 1296,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 10,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 5,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 21,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 24,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 4,
  "time_alive": 1502,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 3,
  "time_alive": 1382,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 3,
  "time_alive": 1469,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 11,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 14,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 8,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 6,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 19,
  "time_alive": 1236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 14,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 13,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 13,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 2,
  "time_alive": 1516,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 22,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 18,
  "time_alive": 1262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 11,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 2,
  "time_alive": 1501,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 23,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 7,
  "time_alive": 1480,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 13,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 20,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 22,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 14,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 16,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 1,
  "time_alive": 1516,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 20,
  "time_alive": 1215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 2,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 17,
  "time_alive": 1244,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 9,
  "time_alive": 1424,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 25,
  "time_alive": 938,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 17,
  "time_alive": 1319,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 7,
  "time_alive": 1467,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 17,
  "time_alive": 1269,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 7,
  "time_alive": 1414,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 6,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 20,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 19,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 26,
  "time_alive": 551,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 5,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 20,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 12,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 9,
  "time_alive": 1386,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 9,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 17,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 6,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "71be8f2ced48498394db684cc6781d54:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 27,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "71be8f2ced48498394db684cc6781d54:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 19,
  "time_alive": 1262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "71be8f2ced48498394db684cc6781d54:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 6,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "71be8f2ced48498394db684cc6781d54:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 25,
  "time_alive": 840,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "71be8f2ced48498394db684cc6781d54:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 15,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "71be8f2ced48498394db684cc6781d54:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 4,
  "time_alive": 1369,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 13,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 22,
  "time_alive": 1190,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 26,
  "time_alive": 582,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 10,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 8,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 29,
  "time_alive": 482,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 16,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 17,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 8,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 6,
  "time_alive": 1480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 29,
  "time_alive": 274,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 28,
  "time_alive": 485,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 24,
  "time_alive": 1062,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 20,
  "time_alive": 1255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 19,
  "time_alive": 1218,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 32,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 28,
  "time_alive": 347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 10,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 23,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 18,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 11,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 22,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 14,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 15,
  "time_alive": 1288,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 31,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 31,
  "time_alive": 356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 17,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 13,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 18,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 11,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 26,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 33,
  "time_alive": 107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 15,
  "time_alive": 1327,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 26,
  "time_alive": 636,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 31,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 30,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 6,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 21,
  "time_alive": 1199,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 33,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 27,
  "time_alive": 532,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 25,
  "time_alive": 605,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 32,
  "time_alive": 182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 21,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 30,
  "time_alive": 363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 31,
  "time_alive": 200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 29,
  "time_alive": 433,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 27,
  "time_alive": 416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 21,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 15,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 25,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 32,
  "time_alive": 199,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 15,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 16,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 25,
  "time_alive": 800,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13454b02-851a-4e9b-b9c2-890bfd054016",
  "team_id": "4b90cd206c444157a1f28adc9b095471:6ac7fec6eb2c47f8b0060fd506762bab:8593c412752e4e84815f7b9d151e19c4",
  "placement": 19,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "4b90cd206c444157a1f28adc9b095471:6ac7fec6eb2c47f8b0060fd506762bab:8593c412752e4e84815f7b9d151e19c4",
  "placement": 26,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "4b90cd206c444157a1f28adc9b095471:6ac7fec6eb2c47f8b0060fd506762bab:8593c412752e4e84815f7b9d151e19c4",
  "placement": 10,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "4b90cd206c444157a1f28adc9b095471:6ac7fec6eb2c47f8b0060fd506762bab:8593c412752e4e84815f7b9d151e19c4",
  "placement": 30,
  "time_alive": 297,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "4b90cd206c444157a1f28adc9b095471:6ac7fec6eb2c47f8b0060fd506762bab:8593c412752e4e84815f7b9d151e19c4",
  "placement": 32,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "4b90cd206c444157a1f28adc9b095471:6ac7fec6eb2c47f8b0060fd506762bab:8593c412752e4e84815f7b9d151e19c4",
  "placement": 31,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 30,
  "time_alive": 748,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 16,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 27,
  "time_alive": 409,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 28,
  "time_alive": 456,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 11,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "176fb26827254564aa258dfcecd2e9bc:29fd35af23134ef1920fdaeec0c3b520:85e228dec9514aa6847afab8ce3a98d8",
  "placement": 22,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 19,
  "time_alive": 1202,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 23,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 24,
  "time_alive": 1024,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 21,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 21,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 27,
  "time_alive": 524,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 29,
  "time_alive": 408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 29,
  "time_alive": 316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 12,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 23,
  "time_alive": 897,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 26,
  "time_alive": 602,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "211e80233877413186fa4dc49037a554:751b62c5014b44f8974ef8f282006d7d:f1173e7a553343c8a478e388d4299266",
  "placement": 25,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "211e80233877413186fa4dc49037a554:751b62c5014b44f8974ef8f282006d7d:f1173e7a553343c8a478e388d4299266",
  "placement": 32,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "211e80233877413186fa4dc49037a554:751b62c5014b44f8974ef8f282006d7d:f1173e7a553343c8a478e388d4299266",
  "placement": 30,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "211e80233877413186fa4dc49037a554:751b62c5014b44f8974ef8f282006d7d:f1173e7a553343c8a478e388d4299266",
  "placement": 23,
  "time_alive": 1009,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "211e80233877413186fa4dc49037a554:751b62c5014b44f8974ef8f282006d7d:f1173e7a553343c8a478e388d4299266",
  "placement": 30,
  "time_alive": 209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "211e80233877413186fa4dc49037a554:751b62c5014b44f8974ef8f282006d7d:f1173e7a553343c8a478e388d4299266",
  "placement": 24,
  "time_alive": 898,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "41045fd04422469ea83e6b3597e2ef52:ef987dd2ad6e4bfe9eda2404aa70b787:f61a934fcaa344ae88ec232b91deedf1",
  "placement": 28,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "41045fd04422469ea83e6b3597e2ef52:ef987dd2ad6e4bfe9eda2404aa70b787:f61a934fcaa344ae88ec232b91deedf1",
  "placement": 28,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "41045fd04422469ea83e6b3597e2ef52:ef987dd2ad6e4bfe9eda2404aa70b787:f61a934fcaa344ae88ec232b91deedf1",
  "placement": 22,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f443b12-6fe5-4ea4-9409-5951b830626e",
  "team_id": "41045fd04422469ea83e6b3597e2ef52:ef987dd2ad6e4bfe9eda2404aa70b787:f61a934fcaa344ae88ec232b91deedf1",
  "placement": 31,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "461c2ba3-b098-4fb3-9781-078428b04d10",
  "team_id": "41045fd04422469ea83e6b3597e2ef52:ef987dd2ad6e4bfe9eda2404aa70b787:f61a934fcaa344ae88ec232b91deedf1",
  "placement": 24,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "26d3f6d5-3aeb-401b-b6da-2bc701fa616c",
  "team_id": "41045fd04422469ea83e6b3597e2ef52:ef987dd2ad6e4bfe9eda2404aa70b787:f61a934fcaa344ae88ec232b91deedf1",
  "placement": 23,
  "time_alive": 978,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "538cfdaa-dc3e-42dc-8c71-d23a089242d7",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 31,
  "time_alive": 399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "120236e0-75c7-4096-bb40-012b9683798c",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 28,
  "time_alive": 729,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13454b02-851a-4e9b-b9c2-890bfd054016",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 30,
  "time_alive": 252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "db9ec9f2-7344-488d-80c1-853dd9083ab7",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 32,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6e29584f-f141-4b88-8430-a22f59d9cca7",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 27,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12f2c8c8-a739-472d-999c-c51fd20f26b5",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 28,
  "time_alive": 403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 18,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 11,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 6,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1505,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 13,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 7,
  "time_alive": 1475,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 5,
  "time_alive": 1537,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 6,
  "time_alive": 1485,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 9,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1494,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 1,
  "time_alive": 1517,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 5,
  "time_alive": 1472,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 2,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 7,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 23,
  "time_alive": 1059,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 11,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 2,
  "time_alive": 1515,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 17,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 27,
  "time_alive": 643,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 4,
  "time_alive": 1488,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 9,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 7,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 6,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 2,
  "time_alive": 1528,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 16,
  "time_alive": 1359,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 10,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 1,
  "time_alive": 1505,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 14,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 6,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1543,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1527,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 6,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 4,
  "time_alive": 1493,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 16,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1517,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 18,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 25,
  "time_alive": 507,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 19,
  "time_alive": 1210,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 4,
  "time_alive": 1476,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 4,
  "time_alive": 1468,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 1,
  "time_alive": 1574,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1548,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 5,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 14,
  "time_alive": 1392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 8,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1528,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 17,
  "time_alive": 1272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 15,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 3,
  "time_alive": 1491,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 9,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 17,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1542,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 9,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1498,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 18,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 13,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 7,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 8,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 4,
  "time_alive": 1483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 4,
  "time_alive": 1477,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 9,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 16,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 3,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 23,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1548,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 22,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 5,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 14,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 4,
  "time_alive": 1514,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1452,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 1,
  "time_alive": 1494,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 15,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 10,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 4,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 12,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 17,
  "time_alive": 1394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 27,
  "time_alive": 519,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 6,
  "time_alive": 1467,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 6,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 9,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 6,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 15,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 3,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 6,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 3,
  "time_alive": 1478,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 16,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 11,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 13,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 10,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 20,
  "time_alive": 1286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 4,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 17,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 15,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 8,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 9,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 16,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 1,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 20,
  "time_alive": 1212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 10,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 5,
  "time_alive": 1490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 17,
  "time_alive": 1338,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 2,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 13,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 13,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 3,
  "time_alive": 1490,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 17,
  "time_alive": 1300,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 11,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 8,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 9,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 14,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 12,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 11,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 5,
  "time_alive": 1484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 17,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 11,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 31,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 23,
  "time_alive": 805,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 23,
  "time_alive": 941,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 21,
  "time_alive": 1315,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 30,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1515,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 8,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 4,
  "time_alive": 1511,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 7,
  "time_alive": 1460,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 18,
  "time_alive": 1364,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 5,
  "time_alive": 1449,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 14,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1510,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 6,
  "time_alive": 1460,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 5,
  "time_alive": 1474,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 12,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 29,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 29,
  "time_alive": 281,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 30,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 23,
  "time_alive": 1029,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 31,
  "time_alive": 257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 22,
  "time_alive": 1136,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 15,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 3,
  "time_alive": 1527,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 12,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 5,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 10,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 19,
  "time_alive": 1235,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 27,
  "time_alive": 753,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 7,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 16,
  "time_alive": 1403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 29,
  "time_alive": 416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 15,
  "time_alive": 1371,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 3,
  "time_alive": 1492,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 3,
  "time_alive": 1482,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 20,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 11,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 8,
  "time_alive": 1436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 24,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 7,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 11,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 19,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 14,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 12,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 7,
  "time_alive": 1466,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 20,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 12,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 10,
  "time_alive": 1424,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 5,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 11,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 18,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 5,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1409,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 14,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 3,
  "time_alive": 1505,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 12,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 4,
  "time_alive": 1474,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 23,
  "time_alive": 1145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 22,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 14,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 14,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 2,
  "time_alive": 1487,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 14,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 24,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 7,
  "time_alive": 1475,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 3,
  "time_alive": 1492,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 11,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 19,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 10,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 27,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 14,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 12,
  "time_alive": 1379,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 7,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 17,
  "time_alive": 1324,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 12,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 9,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 11,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 18,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 13,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a:8e60e750c4fd4eaca11ebb49686a590a:f24c9bea62d642cebc0f3a53cd714e6d",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 30,
  "time_alive": 377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 16,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 27,
  "time_alive": 404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 29,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 30,
  "time_alive": 293,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 27,
  "time_alive": 444,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 10,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 26,
  "time_alive": 734,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 8,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 2,
  "time_alive": 1498,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 8,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "751b62c5014b44f8974ef8f282006d7d:9e9978d609ff48ccbf85acd7757ef46d:f1173e7a553343c8a478e388d4299266",
  "placement": 29,
  "time_alive": 265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 19,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 26,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 10,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 28,
  "time_alive": 446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 8,
  "time_alive": 1433,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 5,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 15,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 16,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 19,
  "time_alive": 1279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 15,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 17,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 25,
  "time_alive": 762,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 25,
  "time_alive": 915,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 17,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 9,
  "time_alive": 1397,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 16,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 20,
  "time_alive": 1327,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 23,
  "time_alive": 1081,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 18,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 20,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 22,
  "time_alive": 967,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 8,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 10,
  "time_alive": 1441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 21,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 20,
  "time_alive": 1191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 7,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 32,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 30,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 13,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 6,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 30,
  "time_alive": 205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 31,
  "time_alive": 99,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 32,
  "time_alive": 97,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 32,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 23,
  "time_alive": 1110,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 30,
  "time_alive": 241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 16,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 22,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 30,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 21,
  "time_alive": 1178,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 6,
  "time_alive": 1526,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 24,
  "time_alive": 929,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 28,
  "time_alive": 428,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 25,
  "time_alive": 719,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 31,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 22,
  "time_alive": 1153,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 19,
  "time_alive": 1233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 13,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 26,
  "time_alive": 704,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 26,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 25,
  "time_alive": 926,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 19,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 2,
  "time_alive": 1574,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 18,
  "time_alive": 1393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 25,
  "time_alive": 574,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 27,
  "time_alive": 500,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 21,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 25,
  "time_alive": 937,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 26,
  "time_alive": 405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 20,
  "time_alive": 1121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 19,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 18,
  "time_alive": 1303,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 31,
  "time_alive": 116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 25,
  "time_alive": 1019,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 26,
  "time_alive": 824,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 24,
  "time_alive": 756,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 26,
  "time_alive": 667,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "3d36148851f04f1c9b78bb8c872cac41:3f4ea3da8fde4b969d5b3ae1312fdb7d:da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 28,
  "time_alive": 286,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 23,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 28,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 18,
  "time_alive": 1236,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 24,
  "time_alive": 882,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 12,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 26,
  "time_alive": 742,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 24,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 13,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 25,
  "time_alive": 872,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 26,
  "time_alive": 531,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 22,
  "time_alive": 1128,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 23,
  "time_alive": 1042,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 28,
  "time_alive": 533,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 30,
  "time_alive": 776,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 21,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 18,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 22,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 22,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 8,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 21,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 28,
  "time_alive": 442,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 13,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 30,
  "time_alive": 333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 24,
  "time_alive": 876,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 26,
  "time_alive": 562,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 12,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 31,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 25,
  "time_alive": 739,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 25,
  "time_alive": 891,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 28,
  "time_alive": 412,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 13,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 30,
  "time_alive": 274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 31,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 30,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 32,
  "time_alive": 132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "26ab3f991748447486ba80810e2fb903:31f7806aa01648eabd58b9bab3913363:a02c72c72b7e442e82753bc5efe27828",
  "placement": 10,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 32,
  "time_alive": 201,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 24,
  "time_alive": 1073,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 29,
  "time_alive": 312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 21,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 17,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 21,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 23,
  "time_alive": 1162,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 28,
  "time_alive": 575,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 10,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 19,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 16,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 26,
  "time_alive": 676,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 24,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 32,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 28,
  "time_alive": 388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 27,
  "time_alive": 460,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 29,
  "time_alive": 313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 24,
  "time_alive": 1052,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 28,
  "time_alive": 436,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 22,
  "time_alive": 1182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 20,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 31,
  "time_alive": 254,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 24,
  "time_alive": 951,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 8,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 31,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 24,
  "time_alive": 555,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 27,
  "time_alive": 630,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 29,
  "time_alive": 381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 29,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 9,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 29,
  "time_alive": 488,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 9,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 19,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 13,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 29,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 26,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 32,
  "time_alive": 94,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 23,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 20,
  "time_alive": 1145,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 19,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 314,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1dfc787c-0905-4eb0-b841-0dc3d00bc21c",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 27,
  "time_alive": 548,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d3ab738-9e01-43c6-b276-7e04135556bf",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 29,
  "time_alive": 779,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ceb332d-e3bc-4b19-9e67-27758cd1ef5f",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 20,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5078bf59-5ae1-4c06-a130-7ff9255219e7",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 22,
  "time_alive": 972,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ad6b101-3607-45de-91c1-38df2847b1f6",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 28,
  "time_alive": 344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12d57762-52e2-4faa-8111-db99fd983e6b",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 20,
  "time_alive": 1193,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 25,
  "time_alive": 1058,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9d337fda-26f8-46b4-a0c8-df2349a6c8f9",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 18,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "628089ff-5063-43d4-8648-b7e71c11fd81",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 21,
  "time_alive": 1035,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5bc3b6ea-aec0-410d-847d-602b7bd3c203",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 21,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6fd2e3cd-c63f-4217-89bc-bb6de53660b1",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 28,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "341bee1c-1d32-4eae-8eb6-2aa7c3dd20de",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 11,
  "time_alive": 1410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c35e9d8-1d94-493d-b593-e96a1115ffac",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 22,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 9,
  "time_alive": 1428,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 33,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 16,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 2,
  "time_alive": 1525,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1538,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1530,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 5,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1521,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 2,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 10,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 12,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 6,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 4,
  "time_alive": 1506,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 18,
  "time_alive": 1238,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 11,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 6,
  "time_alive": 1497,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 1,
  "time_alive": 1503,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 8,
  "time_alive": 1454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 7,
  "time_alive": 1444,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 10,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 8,
  "time_alive": 1444,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 26,
  "time_alive": 174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1527,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 24,
  "time_alive": 907,
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
    