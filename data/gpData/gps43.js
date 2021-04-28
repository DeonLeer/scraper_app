const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 60,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 33,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 3,
  "time_alive": 1547,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 40,
  "time_alive": 1277,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 8,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 59,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 11,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 86,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 38,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "1fb89e222dbd4099a80d38fe3a56164a",
  "placement": 78,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 71,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 3,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 30,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 63,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 34,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "85a3a7884e364e64a8430a141078059d",
  "placement": 83,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 51,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 57,
  "time_alive": 1124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 1,
  "time_alive": 1559,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 78,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "8960eae6280d4885a09316366bbca808",
  "placement": 41,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 92,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 50,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 20,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 69,
  "time_alive": 745,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 6,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "5a2522ffb29244ae8db8ee96360e8cdc",
  "placement": 72,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 31,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 40,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 24,
  "time_alive": 1397,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 54,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 87,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "91db8f6efe5e486f8ef5c76fb7f82cd4",
  "placement": 11,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 13,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 28,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 58,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 57,
  "time_alive": 1068,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 35,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 53,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 8,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 18,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 44,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 95,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "be783dac60a34adf83f31997f586c4c1",
  "placement": 53,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 12,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 79,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 40,
  "time_alive": 1332,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 48,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 70,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 57,
  "time_alive": 992,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 79,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 22,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 32,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 34,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 43,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 45,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 56,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 44,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 33,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 17,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 24,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 66,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "9acff2aaeb334a579d735613d08414f0",
  "placement": 18,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "9acff2aaeb334a579d735613d08414f0",
  "placement": 19,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "9acff2aaeb334a579d735613d08414f0",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "9acff2aaeb334a579d735613d08414f0",
  "placement": 52,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "9acff2aaeb334a579d735613d08414f0",
  "placement": 27,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 87,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 94,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 30,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 20,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "591cd9d9d5b047fda9facb81cbfba4f3",
  "placement": 17,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 65,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 53,
  "time_alive": 1154,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 79,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 59,
  "time_alive": 1123,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 13,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 62,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 5,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 56,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 71,
  "time_alive": 765,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 75,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 51,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "dae9deb7a1cd4a8f8f79dab29bad83ac",
  "placement": 76,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 11,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 72,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 84,
  "time_alive": 403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 94,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 91,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "14f2f53e49b446b1adfc3eb1140332d7",
  "placement": 9,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 63,
  "time_alive": 1096,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 33,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 86,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 21,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 40,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 46,
  "time_alive": 1175,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "2538d8062030498dab66e7642fa2f128",
  "placement": 46,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "2538d8062030498dab66e7642fa2f128",
  "placement": 75,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "2538d8062030498dab66e7642fa2f128",
  "placement": 36,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "2538d8062030498dab66e7642fa2f128",
  "placement": 93,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "2538d8062030498dab66e7642fa2f128",
  "placement": 2,
  "time_alive": 1550,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "2538d8062030498dab66e7642fa2f128",
  "placement": 81,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 73,
  "time_alive": 576,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 37,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 29,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 72,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 71,
  "time_alive": 584,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 24,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 67,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 28,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 51,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 37,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "05c4c15e8f88405b9fa8d4b66d9936fd",
  "placement": 21,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 44,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 63,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 17,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 49,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 48,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 87,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "fe3ba40a0cc440d7af5c743aa6aa6e42",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "fe3ba40a0cc440d7af5c743aa6aa6e42",
  "placement": 92,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "fe3ba40a0cc440d7af5c743aa6aa6e42",
  "placement": 23,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "fe3ba40a0cc440d7af5c743aa6aa6e42",
  "placement": 77,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "fe3ba40a0cc440d7af5c743aa6aa6e42",
  "placement": 30,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "fe3ba40a0cc440d7af5c743aa6aa6e42",
  "placement": 74,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 96,
  "time_alive": 87,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 61,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 70,
  "time_alive": 766,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 78,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 11,
  "time_alive": 1453,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "0529e3157ade4a059b83468bd8712142",
  "placement": 63,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 40,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 34,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 40,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 54,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "0e15a25c9f17482ea508c5af5da74c37",
  "placement": 71,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 21,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 62,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 46,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 42,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 64,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 67,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 87,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 23,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 19,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 84,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 88,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 58,
  "time_alive": 970,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 85,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 39,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 59,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 32,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 77,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "cc26b1386db0475bb61b2b223638b44e",
  "placement": 38,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 72,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 14,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 52,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 68,
  "time_alive": 651,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "1f3804764c98409e8349d09794fab1fc",
  "placement": 55,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 69,
  "time_alive": 666,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 68,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 76,
  "time_alive": 632,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 16,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 33,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "162e7c3398784a3abbbf6cfe09b08c87",
  "placement": 88,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 19,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 48,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 61,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 41,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 74,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "01171e3ebd504b5eaebc76d65a26e464",
  "placement": 64,
  "time_alive": 722,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 41,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 82,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 89,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 56,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 35,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 29,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "433c6ecb314d492eb0973dda1efabf43",
  "placement": 50,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "433c6ecb314d492eb0973dda1efabf43",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "433c6ecb314d492eb0973dda1efabf43",
  "placement": 63,
  "time_alive": 1005,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "433c6ecb314d492eb0973dda1efabf43",
  "placement": 31,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "433c6ecb314d492eb0973dda1efabf43",
  "placement": 76,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "433c6ecb314d492eb0973dda1efabf43",
  "placement": 69,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 89,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 96,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 75,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 20,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 69,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 77,
  "time_alive": 291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 90,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 42,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 67,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 68,
  "time_alive": 745,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 53,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "933b34486f244cd9b7c01b36e8290713",
  "placement": 30,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 80,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 60,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 27,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 70,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 86,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "0db6499224da493da640c43ea3068d7e",
  "placement": 31,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 94,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 13,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 73,
  "time_alive": 739,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 65,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 92,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "d3e5a1c8aed44459b234ae9da9f831ae",
  "placement": 70,
  "time_alive": 450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 88,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 64,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 80,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 36,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 82,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "fe968b27786b49229198dc90052c6f7d",
  "placement": 13,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 66,
  "time_alive": 916,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 73,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 92,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 46,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 67,
  "time_alive": 676,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 28,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 51,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 78,
  "time_alive": 580,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 39,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 59,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 89,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "eac81846b41c4732bd7b833bec3cec3d",
  "placement": 95,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "eac81846b41c4732bd7b833bec3cec3d",
  "placement": 45,
  "time_alive": 1254,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "eac81846b41c4732bd7b833bec3cec3d",
  "placement": 90,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "eac81846b41c4732bd7b833bec3cec3d",
  "placement": 55,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "eac81846b41c4732bd7b833bec3cec3d",
  "placement": 29,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "eac81846b41c4732bd7b833bec3cec3d",
  "placement": 48,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "a09e637463a540979d9fb9679ded772a",
  "placement": 82,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "a09e637463a540979d9fb9679ded772a",
  "placement": 91,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "a09e637463a540979d9fb9679ded772a",
  "placement": 21,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "a09e637463a540979d9fb9679ded772a",
  "placement": 92,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "a09e637463a540979d9fb9679ded772a",
  "placement": 31,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "a09e637463a540979d9fb9679ded772a",
  "placement": 52,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "38f60e5f271f4caf8f50bcd8a12759cc",
  "placement": 16,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "38f60e5f271f4caf8f50bcd8a12759cc",
  "placement": 70,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "38f60e5f271f4caf8f50bcd8a12759cc",
  "placement": 87,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "38f60e5f271f4caf8f50bcd8a12759cc",
  "placement": 93,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "38f60e5f271f4caf8f50bcd8a12759cc",
  "placement": 82,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "e0e798cf065045dfa3456d25a9a64712",
  "placement": 77,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "e0e798cf065045dfa3456d25a9a64712",
  "placement": 81,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "e0e798cf065045dfa3456d25a9a64712",
  "placement": 65,
  "time_alive": 977,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "e0e798cf065045dfa3456d25a9a64712",
  "placement": 73,
  "time_alive": 625,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "e0e798cf065045dfa3456d25a9a64712",
  "placement": 39,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "e0e798cf065045dfa3456d25a9a64712",
  "placement": 47,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "47c040d1132a40938d4e8ace3cfeb561",
  "placement": 34,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "47c040d1132a40938d4e8ace3cfeb561",
  "placement": 55,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "47c040d1132a40938d4e8ace3cfeb561",
  "placement": 45,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "47c040d1132a40938d4e8ace3cfeb561",
  "placement": 64,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "47c040d1132a40938d4e8ace3cfeb561",
  "placement": 90,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "47c040d1132a40938d4e8ace3cfeb561",
  "placement": 68,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "7270ddf10ff24cc8810f469d910eb2ca",
  "placement": 48,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "7270ddf10ff24cc8810f469d910eb2ca",
  "placement": 46,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "7270ddf10ff24cc8810f469d910eb2ca",
  "placement": 72,
  "time_alive": 741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "7270ddf10ff24cc8810f469d910eb2ca",
  "placement": 45,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "7270ddf10ff24cc8810f469d910eb2ca",
  "placement": 73,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 47,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 71,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 55,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 61,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 36,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 56,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 59,
  "time_alive": 1130,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 84,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 76,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 94,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91",
  "placement": 39,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 75,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 29,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 41,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 62,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 81,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "cf66cecece8242c7865de1461779dd34",
  "placement": 80,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 91,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 31,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 69,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 82,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 84,
  "time_alive": 213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 79,
  "time_alive": 260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695",
  "placement": 68,
  "time_alive": 761,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695",
  "placement": 74,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695",
  "placement": 85,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695",
  "placement": 80,
  "time_alive": 400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695",
  "placement": 65,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "7c3ad462e0bf4403b770a0c39c7db695",
  "placement": 65,
  "time_alive": 663,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 70,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 58,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 42,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 67,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 83,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 54,
  "time_alive": 1026,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 67,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 88,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 47,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "443632a20f364c6ca9efdf1cc7b0446b",
  "placement": 46,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "071942614da24193a5d4125aac33397b",
  "placement": 85,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "071942614da24193a5d4125aac33397b",
  "placement": 95,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "071942614da24193a5d4125aac33397b",
  "placement": 88,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "071942614da24193a5d4125aac33397b",
  "placement": 85,
  "time_alive": 206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "071942614da24193a5d4125aac33397b",
  "placement": 49,
  "time_alive": 1085,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 58,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 52,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 74,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 53,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 80,
  "time_alive": 325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 84,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "ddc203c5a5c548b89daa5f8d53d94999",
  "placement": 45,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "ddc203c5a5c548b89daa5f8d53d94999",
  "placement": 76,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "ddc203c5a5c548b89daa5f8d53d94999",
  "placement": 66,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "ddc203c5a5c548b89daa5f8d53d94999",
  "placement": 60,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "ddc203c5a5c548b89daa5f8d53d94999",
  "placement": 55,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "888b1a0523aa431db13019d6cf3d1969",
  "placement": 81,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "888b1a0523aa431db13019d6cf3d1969",
  "placement": 83,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "888b1a0523aa431db13019d6cf3d1969",
  "placement": 83,
  "time_alive": 425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "888b1a0523aa431db13019d6cf3d1969",
  "placement": 85,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "888b1a0523aa431db13019d6cf3d1969",
  "placement": 89,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "888b1a0523aa431db13019d6cf3d1969",
  "placement": 42,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "8cbeb5667c8441759dc72ff80223a165",
  "placement": 86,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "8cbeb5667c8441759dc72ff80223a165",
  "placement": 93,
  "time_alive": 190,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "8cbeb5667c8441759dc72ff80223a165",
  "placement": 91,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "8cbeb5667c8441759dc72ff80223a165",
  "placement": 89,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "8cbeb5667c8441759dc72ff80223a165",
  "placement": 44,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "8cbeb5667c8441759dc72ff80223a165",
  "placement": 75,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "6597376f5eb74e08b8635ce87b2d3283",
  "placement": 78,
  "time_alive": 606,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "6597376f5eb74e08b8635ce87b2d3283",
  "placement": 82,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "6597376f5eb74e08b8635ce87b2d3283",
  "placement": 91,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "6597376f5eb74e08b8635ce87b2d3283",
  "placement": 85,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 77,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 57,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "298205fc-56dc-483a-b59d-88ef4649a843",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 79,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 97,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 89,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d40c582-8d03-4330-b4ee-7f173a306568",
  "team_id": "a95a090b1cd94e459f2ade05525c9562",
  "placement": 81,
  "time_alive": 376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 84,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 77,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "285d036b-accc-4285-bc65-064c1ba5e7ca",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 87,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "b76a339154614dcfb8b378569230c2b9",
  "placement": 76,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18edbea7-08ec-45a1-a7d7-84d77fd94be7",
  "team_id": "b76a339154614dcfb8b378569230c2b9",
  "placement": 90,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bd27ee9-f378-4c16-85f6-c96cad033390",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 93,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2d3e1d9d-eb0a-4587-8e18-950f8ab4720f",
  "team_id": "0767c81461f74ab6a724322eba6bfe46",
  "placement": 91,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 1,
  "time_alive": 1460,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 15,
  "time_alive": 1414,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 1,
  "time_alive": 1514,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 67,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "234887ea510f41d48d59e3042f944c6e",
  "placement": 5,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 83,
  "time_alive": 717,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 2,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 25,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 44,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 6,
  "time_alive": 1510,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "04489b66290d48968dde800325510257",
  "placement": 2,
  "time_alive": 1522,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 43,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 25,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 5,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 75,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 1,
  "time_alive": 1530,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "751b62c5014b44f8974ef8f282006d7d",
  "placement": 74,
  "time_alive": 535,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 10,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 40,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1428,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 25,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 24,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "f9aafac773c245bfa96fe2f01ca66880",
  "placement": 8,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 2,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 88,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 1,
  "time_alive": 1511,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 36,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 94,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "8bd4f8216934400da7cb7b3fb975f0ac",
  "placement": 26,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 4,
  "time_alive": 1436,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 8,
  "time_alive": 1442,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 51,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 5,
  "time_alive": 1490,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 84,
  "time_alive": 413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 69,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 8,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 7,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 10,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 35,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 71,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "5a2f9524d3ed465fb351a8e3cf13b846",
  "placement": 6,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 27,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 12,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 14,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 11,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 73,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "16bac63763e14b08abd523b7c8892210",
  "placement": 31,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 42,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 1,
  "time_alive": 1530,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 67,
  "time_alive": 978,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 21,
  "time_alive": 1393,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "af77ed8e101d4f10a0b39ca817ed42c5",
  "placement": 70,
  "time_alive": 853,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 45,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 13,
  "time_alive": 1421,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 24,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 95,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 2,
  "time_alive": 1530,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "1563de9ad193445db5b75e59f6c35c92",
  "placement": 42,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 58,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 71,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 6,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 37,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 3,
  "time_alive": 1516,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "4043db651e2e4cffbb19abd86fba8c7f",
  "placement": 25,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 7,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 76,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 12,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 30,
  "time_alive": 1372,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "50a50695a6814609ae871bd4e4330af6",
  "placement": 55,
  "time_alive": 937,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 14,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 84,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 93,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 4,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "628b982a76ac4290968c95a3108be229",
  "placement": 16,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 33,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 41,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 11,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 18,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 11,
  "time_alive": 1447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43",
  "placement": 20,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 12,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 62,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 50,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 38,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 22,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "12ae0730885348878edd48c82232a5cb",
  "placement": 7,
  "time_alive": 1463,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 6,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 27,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 2,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 26,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 72,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "6bd5558beead46d2bb81e93131b8fb32",
  "placement": 87,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 53,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 73,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 61,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 27,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 8,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "aea98bc2e01b4c87bf9fb4bd75943c30",
  "placement": 1,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 50,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 17,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 73,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 3,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 32,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "ca9a252ee6f248f19695526247f8d902",
  "placement": 11,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 21,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 9,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 52,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 6,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 5,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "db11b4c9c95342eda44b50ca51beb086",
  "placement": 82,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 22,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 69,
  "time_alive": 995,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 2,
  "time_alive": 1514,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 88,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3b5f7b1d627d41428435ac23d214b180",
  "placement": 54,
  "time_alive": 977,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 48,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 5,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 43,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 9,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 68,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "63617d654b8149189dd11747b850d636",
  "placement": 44,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 28,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 18,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 38,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 20,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 31,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "9e9978d609ff48ccbf85acd7757ef46d",
  "placement": 47,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 26,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 42,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 81,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 23,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 42,
  "time_alive": 1307,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "61b0782b1ab54f19b51fdaa64228027e",
  "placement": 4,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 16,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 44,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 18,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "83e9f231efee418fb011134bb93c0a9a",
  "placement": 9,
  "time_alive": 1458,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 18,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 24,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 58,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 32,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 29,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "1553a85739a04ae5aea8c93614351847",
  "placement": 65,
  "time_alive": 764,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 9,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 6,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 94,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 16,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 65,
  "time_alive": 1043,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "54620348e19c4a93b71ca8c16458272b",
  "placement": 70,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 11,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 11,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 19,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 61,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 74,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3f4ea3da8fde4b969d5b3ae1312fdb7d",
  "placement": 32,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 97,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 31,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 41,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 7,
  "time_alive": 1472,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 23,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "0f811aeb458f4b418a852c3a109bd2fa",
  "placement": 57,
  "time_alive": 901,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 73,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 53,
  "time_alive": 1188,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 16,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 57,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 14,
  "time_alive": 1431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3a9835f89d9344e0b244daf79b60148d",
  "placement": 22,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 80,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 50,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 8,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 10,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 12,
  "time_alive": 1440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "55bb8b36a41c400ea76826ad34926391",
  "placement": 61,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 70,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 47,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 56,
  "time_alive": 1113,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 34,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 4,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "15ea8285386b4e27ac72e62dd293da34",
  "placement": 28,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 3,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 39,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 47,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 24,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "6b1e70d29c5a4dee839eac7fe89dbe39",
  "placement": 92,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 38,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 21,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 13,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 14,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 60,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "5970aa492b634898923f3adc1dd4d3bb",
  "placement": 67,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 15,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 65,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 44,
  "time_alive": 1262,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 48,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 25,
  "time_alive": 1391,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "71be8f2ced48498394db684cc6781d54",
  "placement": 80,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 24,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 10,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 60,
  "time_alive": 1025,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 97,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 21,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "444591dde00b4f43af77a49213f6a33d",
  "placement": 63,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 89,
  "time_alive": 391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 16,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 80,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 71,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 9,
  "time_alive": 1475,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "c8d39f69857a49988b379240c7c07f03",
  "placement": 21,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 41,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 36,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 3,
  "time_alive": 1488,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 49,
  "time_alive": 1223,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 86,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "df16ae5918374b4e9538447ef7401167",
  "placement": 56,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 36,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 14,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 28,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 84,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 82,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "b7df1f6dc71d4e4eae135005c8e9b365",
  "placement": 23,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 32,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 33,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 9,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 70,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 69,
  "time_alive": 974,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "a3add78f4b6041e188d935123ec31c11",
  "placement": 46,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 40,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 59,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 83,
  "time_alive": 809,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 22,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 18,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2",
  "placement": 19,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 23,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 52,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 15,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 91,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "9b426065e1d74eb1a954f66f5c1b5650",
  "placement": 3,
  "time_alive": 1499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 19,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 57,
  "time_alive": 1169,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 55,
  "time_alive": 1124,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "6c5c9ad52ed74beba7cceaac4b093da7",
  "placement": 29,
  "time_alive": 1359,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 74,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 26,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 49,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 17,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 40,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "2954185e63c14e7081b94a73abf489aa",
  "placement": 58,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 29,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 95,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 30,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 45,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 19,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "f0683841f3764b69be3da9c828a6fd28",
  "placement": 53,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 96,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 3,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 68,
  "time_alive": 962,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 42,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 66,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 20,
  "time_alive": 1382,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 30,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 84,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 64,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 57,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef",
  "placement": 18,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 54,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 20,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 33,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 47,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 36,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef",
  "placement": 13,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 30,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 56,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 29,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 66,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "abb70c719e3843e4bc70d8c48590c5f0",
  "placement": 12,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 67,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 94,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 83,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 17,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "da60a5a130c4407dbb4521c6d7a7674b",
  "placement": 36,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 39,
  "time_alive": 1301,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 4,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 95,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 39,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 75,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "fe914a09d13c48a7bc802446394863a8",
  "placement": 84,
  "time_alive": 347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 59,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 49,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 4,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 46,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 62,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "2fa701baa4124a608983c666e683a809",
  "placement": 43,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 61,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 15,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 75,
  "time_alive": 865,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 8,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 63,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "d84e02ede74642fb91c65a627162327c",
  "placement": 68,
  "time_alive": 676,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 95,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 34,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 27,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 88,
  "time_alive": 356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 28,
  "time_alive": 1381,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "fc1158d5dc854467bd1d20209521e6ef",
  "placement": 35,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 25,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 61,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 23,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 52,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 27,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "df84fbb27b544a6f8981e0bf3c28aa1b",
  "placement": 41,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 86,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 38,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 74,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 50,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 16,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "8b54573d4a6344409611a28554ee49de",
  "placement": 17,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 5,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 45,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 87,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 19,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 76,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "d0cc77e0f6bb455d82139968e4601c2b",
  "placement": 51,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 69,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 37,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 29,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 68,
  "time_alive": 1061,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 47,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "ed87bebfceb04254bfe5d874198e00d2",
  "placement": 37,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 78,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 79,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 22,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 60,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "8593c412752e4e84815f7b9d151e19c4",
  "placement": 14,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 77,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 19,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 62,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 74,
  "time_alive": 733,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 54,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3f00394b697e46c4a6126c9b492002c1",
  "placement": 10,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 47,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 98,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 82,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 65,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 10,
  "time_alive": 1469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "f70e096e0270452fa78e0f3a56445d72",
  "placement": 34,
  "time_alive": 1341,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 62,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 35,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 21,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 56,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 39,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "bd330896c87c478dad177c2ce55a342f",
  "placement": 49,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 49,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 55,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 78,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 28,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 13,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "78adb2497fc14018b08a085be896fc9c",
  "placement": 72,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 13,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 75,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 26,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 62,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 43,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 77,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 68,
  "time_alive": 1040,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 93,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 54,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 54,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 7,
  "time_alive": 1503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "4043636849724feb8462eebb31f55a66",
  "placement": 71,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 64,
  "time_alive": 1080,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 70,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 46,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 80,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 15,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "786e891e7f974cc2b1bccc8dea22fb5c",
  "placement": 73,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 87,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 23,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 70,
  "time_alive": 908,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 87,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 56,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 59,
  "time_alive": 881,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "830dd19b1a234d7b8293647c2750324e",
  "placement": 31,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "830dd19b1a234d7b8293647c2750324e",
  "placement": 81,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "830dd19b1a234d7b8293647c2750324e",
  "placement": 63,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "830dd19b1a234d7b8293647c2750324e",
  "placement": 72,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "830dd19b1a234d7b8293647c2750324e",
  "placement": 49,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "830dd19b1a234d7b8293647c2750324e",
  "placement": 50,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 44,
  "time_alive": 1248,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 96,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 77,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 13,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 79,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "62ac9f0cd1a545c6aad7f3c43a329c5c",
  "placement": 86,
  "time_alive": 274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 82,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 66,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 37,
  "time_alive": 1349,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 77,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 26,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 27,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "de4a96a73cb54443baf195575ba37f34",
  "placement": 72,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "de4a96a73cb54443baf195575ba37f34",
  "placement": 22,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "de4a96a73cb54443baf195575ba37f34",
  "placement": 35,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "de4a96a73cb54443baf195575ba37f34",
  "placement": 90,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "de4a96a73cb54443baf195575ba37f34",
  "placement": 92,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "de4a96a73cb54443baf195575ba37f34",
  "placement": 40,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 34,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 28,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 36,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 76,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 52,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "db911938355b43a28686877effc40a1f",
  "placement": 33,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 92,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 51,
  "time_alive": 1200,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 7,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 89,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf",
  "placement": 94,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 76,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 67,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 39,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 81,
  "time_alive": 494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 96,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "b9c99565f27c4d48ab284634a0593605",
  "placement": 24,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 17,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 68,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 71,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 63,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 59,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "42e4b15a2b39493f9745917c57747cbc",
  "placement": 75,
  "time_alive": 509,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 94,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 92,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 42,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 73,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 55,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "1925521bf9c74bdd9e3adb1a10d8748d",
  "placement": 15,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 57,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 54,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 97,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 41,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3579bb6400124a89b390d677f5eeedcc",
  "placement": 30,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 71,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 48,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 48,
  "time_alive": 1214,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 53,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 48,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "934aba718a304a7ea4f9bef73e8d415f",
  "placement": 76,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 63,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 29,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 79,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 69,
  "time_alive": 953,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 45,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "8938ee8bc5a1460f90789ff6029a87dd",
  "placement": 90,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 60,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 32,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 76,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 66,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 58,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "1cb7c69373b543399caa3e576002e6d5",
  "placement": 52,
  "time_alive": 993,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 64,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 64,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 82,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 46,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "68914188cac14f77ba0dd9c53b0abd24",
  "placement": 48,
  "time_alive": 1076,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 79,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 46,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 90,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 51,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 50,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "82695b9a2fc14c7da044431d807b2652",
  "placement": 45,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 55,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 82,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 57,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 40,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 61,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "8bcebccfcfb8494a8c73254a5fb6398f",
  "placement": 38,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 52,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 83,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 34,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 92,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 53,
  "time_alive": 1171,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "d792ffb97e8840dbb906ac9c657e5c06",
  "placement": 97,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 88,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 74,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 32,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 33,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 80,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "f061747e7bbe4a49835b4a6390b8bbc7",
  "placement": 62,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 78,
  "time_alive": 877,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 65,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 43,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 44,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "0af5a483261c4490ba8f05f36f23676e",
  "placement": 78,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 75,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 89,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 72,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 30,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c",
  "placement": 79,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 93,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 97,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 69,
  "time_alive": 955,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 98,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 35,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "537f8248a2314f5da091b0bf47bff5bd",
  "placement": 83,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "481fc3e3a08d4f179f63f90a70b1651f",
  "placement": 66,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "481fc3e3a08d4f179f63f90a70b1651f",
  "placement": 63,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "481fc3e3a08d4f179f63f90a70b1651f",
  "placement": 45,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "481fc3e3a08d4f179f63f90a70b1651f",
  "placement": 78,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "481fc3e3a08d4f179f63f90a70b1651f",
  "placement": 51,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "481fc3e3a08d4f179f63f90a70b1651f",
  "placement": 60,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 37,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 90,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 89,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 79,
  "time_alive": 530,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 78,
  "time_alive": 593,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3b1613bf85ce496493ce5773b4e94387",
  "placement": 85,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "ca282fc7770144cfb3bd116572df902a",
  "placement": 81,
  "time_alive": 755,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "ca282fc7770144cfb3bd116572df902a",
  "placement": 85,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "ca282fc7770144cfb3bd116572df902a",
  "placement": 40,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "ca282fc7770144cfb3bd116572df902a",
  "placement": 58,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "ca282fc7770144cfb3bd116572df902a",
  "placement": 87,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "ca282fc7770144cfb3bd116572df902a",
  "placement": 95,
  "time_alive": 136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "d1325df6aae54ee695961ce9bb449b0e",
  "placement": 35,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "d1325df6aae54ee695961ce9bb449b0e",
  "placement": 77,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "d1325df6aae54ee695961ce9bb449b0e",
  "placement": 86,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "d1325df6aae54ee695961ce9bb449b0e",
  "placement": 96,
  "time_alive": 144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "d1325df6aae54ee695961ce9bb449b0e",
  "placement": 90,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "d1325df6aae54ee695961ce9bb449b0e",
  "placement": 91,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 51,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 87,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 59,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 55,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 64,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04",
  "placement": 98,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 85,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 43,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 92,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 85,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 85,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "5c9df99ef47a4113b170ce84e6c16d5d",
  "placement": 39,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 84,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 80,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 91,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 59,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 77,
  "time_alive": 599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "d670f758dfec489198aef3a1fdefcc0b",
  "placement": 64,
  "time_alive": 830,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "e41694a148a14af59505716e8e16f690",
  "placement": 46,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "e41694a148a14af59505716e8e16f690",
  "placement": 58,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "e41694a148a14af59505716e8e16f690",
  "placement": 85,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "e41694a148a14af59505716e8e16f690",
  "placement": 86,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "e41694a148a14af59505716e8e16f690",
  "placement": 89,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "e41694a148a14af59505716e8e16f690",
  "placement": 93,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 91,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 60,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 53,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 93,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 93,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "68377f77087b4d198958c87c23953605",
  "placement": 96,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "0dd0e235c1084893909a1cb2cae844ce",
  "placement": 65,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "0dd0e235c1084893909a1cb2cae844ce",
  "placement": 72,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "0dd0e235c1084893909a1cb2cae844ce",
  "placement": 96,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "0dd0e235c1084893909a1cb2cae844ce",
  "placement": 91,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "0dd0e235c1084893909a1cb2cae844ce",
  "placement": 83,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "0dd0e235c1084893909a1cb2cae844ce",
  "placement": 88,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 91,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 88,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 67,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 81,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "2b57a684bc464b58a1a48f7ac8a0ba7c",
  "placement": 89,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "199b6685-3bb7-41d8-bf6a-35774fcec440",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 90,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "053dc0f8-6f73-4b33-9549-4867d1b49299",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 86,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1cd6c339-a2a6-45b0-b675-bd180c9289e9",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 66,
  "time_alive": 982,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "163e2e84-ac49-465d-9e2e-3ead40f173eb",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 94,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "18dd45cb-556e-479f-bd9d-ae3aa8a2759d",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 95,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "084358cb-749c-4322-be06-3d6418cc5e77",
  "team_id": "19d8700b0f534e42a1cfb8d7d0264b6b",
  "placement": 81,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 42,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 40,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 17,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1553,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 35,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "f1081995d117471d860e5eb41275975c",
  "placement": 2,
  "time_alive": 1553,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 7,
  "time_alive": 1461,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 34,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 1,
  "time_alive": 1536,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 66,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 71,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "5bb3031bf86e4fff8d8b5c0e718bd5aa",
  "placement": 6,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 5,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 3,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 71,
  "time_alive": 899,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 68,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 43,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "6b7d959968ae4cdeaeb725a6be629392",
  "placement": 1,
  "time_alive": 1553,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 34,
  "time_alive": 1365,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 46,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 35,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 19,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 4,
  "time_alive": 1504,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "df54c0fea6a44e38b53feb32cb339532",
  "placement": 20,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 14,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 4,
  "time_alive": 1485,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 22,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 8,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 56,
  "time_alive": 1065,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "aeaab8b8c36744eaaad69334330c282a",
  "placement": 12,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 35,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 20,
  "time_alive": 1403,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 8,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 85,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 2,
  "time_alive": 1528,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "80c96217133c455e9939a0564b986472",
  "placement": 37,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 37,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 12,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 88,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 5,
  "time_alive": 1494,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 22,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "ad53e398b5884b15a797ba0a61658cc4",
  "placement": 3,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 17,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 13,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 15,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 4,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 10,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "545f71fa7ceb4cb69d1841fab080d4b4",
  "placement": 61,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 58,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 76,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 2,
  "time_alive": 1536,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 79,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 1,
  "time_alive": 1528,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "f1173e7a553343c8a478e388d4299266",
  "placement": 7,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1513,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 48,
  "time_alive": 1236,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1553,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 28,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 94,
  "time_alive": 98,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1321c957-bb6e-4026-909b-cb6545c10505",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 68,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "356dedaa-b860-421f-890b-d021785f4e24",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 10,
  "time_alive": 1463,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "382f7713-b818-4e05-8553-e91cc1ac7c7b",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 37,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01b8f349-a8a3-46c2-8063-6248d93071a1",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 12,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "004db7f4-38d0-41e4-aa09-07701c86aec0",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 12,
  "time_alive": 1451,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1e9549c1-4c87-4a9c-a7cc-9ba6e37bdf08",
  "team_id": "211e80233877413186fa4dc49037a554",
  "placement": 75,
  "time_alive": 442,
  "elims": 1,
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
    