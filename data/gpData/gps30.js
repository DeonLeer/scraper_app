const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 2,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 69,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 90,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 67,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 1,
  "time_alive": 1510,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 78,
  "time_alive": 675,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 93,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 38,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 25,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 24,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 28,
  "time_alive": 1380,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 43,
  "time_alive": 1303,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 19,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 49,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 75,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 28,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 3,
  "time_alive": 1504,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 71,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 3,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 70,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 21,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 9,
  "time_alive": 1459,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 77,
  "time_alive": 809,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 76,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 7,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 31,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 40,
  "time_alive": 1331,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 55,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 38,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 21,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 22,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 12,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 74,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 3,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 84,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 93,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 50,
  "time_alive": 1238,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 14,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 73,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 12,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 64,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 18,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 96,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 46,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 6,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 17,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 81,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 4,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 6,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 88,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 26,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 7,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 49,
  "time_alive": 1220,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 75,
  "time_alive": 705,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 69,
  "time_alive": 983,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 10,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 7,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 25,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 78,
  "time_alive": 675,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 70,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 16,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 55,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 9,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 66,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 32,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 20,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 47,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 5,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 63,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 18,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 40,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 91,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 45,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 89,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 82,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 22,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 95,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 1,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 57,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 27,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 34,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 47,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 10,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 51,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 89,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 13,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 91,
  "time_alive": 484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 54,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 94,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 5,
  "time_alive": 1498,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 55,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 8,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 78,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 65,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 6,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 80,
  "time_alive": 628,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 78,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 85,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 5,
  "time_alive": 1517,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 7,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 95,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 24,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 63,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 45,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 52,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 2,
  "time_alive": 1510,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 66,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 36,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 26,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 23,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 35,
  "time_alive": 1343,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 67,
  "time_alive": 1007,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 61,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 10,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 86,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 65,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 95,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 73,
  "time_alive": 871,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 7,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 67,
  "time_alive": 1029,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 47,
  "time_alive": 1295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 31,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 50,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 36,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 10,
  "time_alive": 1467,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 53,
  "time_alive": 1211,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 84,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 29,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 10,
  "time_alive": 1451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 71,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 25,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 51,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 71,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 50,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 78,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 30,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 2,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 37,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 73,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 10,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 16,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 82,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 37,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 23,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 9,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 14,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 56,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 90,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 17,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 32,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 44,
  "time_alive": 1285,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 32,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 44,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 87,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 85,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 82,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 35,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 14,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 76,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 17,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 30,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 87,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 47,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 27,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 20,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 12,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 20,
  "time_alive": 1396,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 75,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 67,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 58,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 27,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 27,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 34,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 39,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 77,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 77,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 5,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 34,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 61,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 23,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 59,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 87,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 21,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 19,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 95,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 19,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 11,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 54,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 55,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 62,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 18,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 16,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 92,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 75,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 15,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 54,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 51,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 84,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 6,
  "time_alive": 1470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 4,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 30,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 27,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 91,
  "time_alive": 596,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 98,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 23,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 91,
  "time_alive": 378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 44,
  "time_alive": 1300,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 21,
  "time_alive": 1386,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 90,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 81,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 48,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 25,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 67,
  "time_alive": 895,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 72,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 4,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 43,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 71,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 23,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 94,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 18,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 74,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 62,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 28,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 73,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 24,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 62,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 15,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 59,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 46,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 28,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 37,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 87,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 19,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 84,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 41,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 33,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 15,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 21,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 65,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 65,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "77591e40164649cb9c0e9ce84555cc21",
  "placement": 40,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "77591e40164649cb9c0e9ce84555cc21",
  "placement": 60,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "77591e40164649cb9c0e9ce84555cc21",
  "placement": 22,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "77591e40164649cb9c0e9ce84555cc21",
  "placement": 91,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "77591e40164649cb9c0e9ce84555cc21",
  "placement": 48,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "77591e40164649cb9c0e9ce84555cc21",
  "placement": 6,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 43,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 17,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 41,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 42,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 43,
  "time_alive": 1271,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "d24b55c5258648d28cc2ca59650e99e4",
  "placement": 68,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 60,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 35,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 64,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 36,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 9,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 63,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 83,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 34,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 85,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 8,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 29,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "18f421b50754411f86c60ff6b89aa812",
  "placement": 50,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 8,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 43,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 52,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 93,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 18,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 98,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 35,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 80,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 4,
  "time_alive": 1517,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 60,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 39,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 49,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 36,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 13,
  "time_alive": 1466,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 64,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 31,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 60,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 94,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 11,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 61,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 26,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 58,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "8cc7ed426e6e455287d352a866fcf02b",
  "placement": 53,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 39,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 64,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 24,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 20,
  "time_alive": 1407,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 79,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 88,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 75,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 41,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 37,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 73,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 19,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 26,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 68,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 97,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 20,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 70,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 22,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 92,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 11,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 65,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 17,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 90,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 72,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 82,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 31,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 67,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 76,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 38,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 47,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "71e8eb4d8ba14e579cdcd79843248433",
  "placement": 13,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 15,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 45,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 72,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 80,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 33,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 36,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 5,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 78,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 83,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 51,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 63,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "d2e520a33ef74f42832f265559dd393b",
  "placement": 23,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "35476aab7fa1457b92050ee6fea9e796",
  "placement": 82,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "35476aab7fa1457b92050ee6fea9e796",
  "placement": 28,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "35476aab7fa1457b92050ee6fea9e796",
  "placement": 38,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "35476aab7fa1457b92050ee6fea9e796",
  "placement": 94,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "35476aab7fa1457b92050ee6fea9e796",
  "placement": 42,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "35476aab7fa1457b92050ee6fea9e796",
  "placement": 33,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 98,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 29,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 96,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 13,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "258907a88a7242978e73ebc353b60cf8",
  "placement": 39,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 88,
  "time_alive": 694,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 40,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 60,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 68,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 16,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "4c7c27aa11db4334aa4191c563ab424e",
  "placement": 40,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 13,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 21,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 80,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 83,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 46,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 54,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 59,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 25,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 32,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 63,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 61,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "c5dba93373204939831770188d9bd221",
  "placement": 22,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 52,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 30,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 88,
  "time_alive": 525,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 84,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 26,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 57,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 84,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 57,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 58,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 75,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 83,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 8,
  "time_alive": 1474,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 25,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 44,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 66,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 59,
  "time_alive": 1153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 74,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "1c39ddb4cf3e4973b6f0e5bf1a4b419e",
  "placement": 38,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 87,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 48,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 42,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 72,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 12,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 45,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 49,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 81,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 27,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 33,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 86,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 48,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 32,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 56,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 30,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 57,
  "time_alive": 1167,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 93,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "8f7bd23bb1474fa198b4c061eb154ee7",
  "placement": 64,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 74,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 54,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 94,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 53,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 14,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "98709dbd5d8c414fbfe097412632e6e4",
  "placement": 58,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 63,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 99,
  "time_alive": 129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 69,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 13,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 57,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "eb112e1adf024b4abb88832c6def5b0e",
  "placement": 62,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 44,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 98,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 19,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 92,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 41,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 91,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 62,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 48,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 46,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 41,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "1de579fa0ebd4fb49051ef46afb37826",
  "placement": 47,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 81,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 50,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 49,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 76,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 50,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "a66b050fad5247b8ad30440dc5cf71a2",
  "placement": 31,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "f07908784ae1470e9b8fed52de11c343",
  "placement": 92,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "f07908784ae1470e9b8fed52de11c343",
  "placement": 15,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "f07908784ae1470e9b8fed52de11c343",
  "placement": 68,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "f07908784ae1470e9b8fed52de11c343",
  "placement": 79,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "f07908784ae1470e9b8fed52de11c343",
  "placement": 53,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "f07908784ae1470e9b8fed52de11c343",
  "placement": 96,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 56,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 53,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 39,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 29,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 69,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "d6f3c840b4324dc99b3d93998764f1fa",
  "placement": 83,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 58,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 66,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 86,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 40,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 52,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "27c6e3b27bb545799cdc646c2557dc93",
  "placement": 29,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 48,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 79,
  "time_alive": 755,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 31,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 68,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 77,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 76,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 72,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 95,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 49,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 66,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 35,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "038ff0d381da408fa87f5072996d50dc",
  "placement": 42,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "038ff0d381da408fa87f5072996d50dc",
  "placement": 79,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "038ff0d381da408fa87f5072996d50dc",
  "placement": 53,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "038ff0d381da408fa87f5072996d50dc",
  "placement": 34,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "038ff0d381da408fa87f5072996d50dc",
  "placement": 55,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "038ff0d381da408fa87f5072996d50dc",
  "placement": 74,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 80,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 94,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 96,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 43,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 17,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "1a397c32b529406e8d75fcf6b3797954",
  "placement": 97,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 71,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 68,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 36,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 69,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 86,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 86,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 61,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 89,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 62,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 87,
  "time_alive": 537,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "dc7e982f647941c98f1bc303823106cc",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 79,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 76,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 51,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 30,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 80,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "d64f3108139f4b12a4d7807b8903df12",
  "placement": 72,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 77,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 93,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 93,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 61,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 35,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 81,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 65,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 59,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 70,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 86,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 51,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 59,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 90,
  "time_alive": 599,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 83,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 71,
  "time_alive": 885,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 81,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 89,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 89,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 97,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 92,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 55,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 82,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 64,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 95,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 92,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 89,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 85,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "8b42f09372e2428487a910ed2d34cea0",
  "placement": 79,
  "time_alive": 659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 11,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 21,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 4,
  "time_alive": 1479,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 3,
  "time_alive": 1528,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 60,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 3,
  "time_alive": 1523,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 7,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 20,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 50,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 2,
  "time_alive": 1535,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 22,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 14,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 6,
  "time_alive": 1533,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 39,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 9,
  "time_alive": 1480,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 10,
  "time_alive": 1467,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 7,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 3,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 7,
  "time_alive": 1517,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 67,
  "time_alive": 1029,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 14,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 82,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 2,
  "time_alive": 1539,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 4,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 18,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 28,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 61,
  "time_alive": 1055,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 4,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 5,
  "time_alive": 1478,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 9,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 35,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 37,
  "time_alive": 1328,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 15,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 75,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 9,
  "time_alive": 1464,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 87,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1548,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 75,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 28,
  "time_alive": 1406,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 11,
  "time_alive": 1460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 14,
  "time_alive": 1465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 53,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 23,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 16,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 2,
  "time_alive": 1553,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 43,
  "time_alive": 1278,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 32,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 80,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 11,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 4,
  "time_alive": 1499,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 19,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 73,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 45,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 22,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 2,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 68,
  "time_alive": 954,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 28,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 46,
  "time_alive": 1255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 79,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 79,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 56,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 20,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 6,
  "time_alive": 1478,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 1,
  "time_alive": 1539,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 68,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 31,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 3,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 26,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 71,
  "time_alive": 828,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1442,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 10,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 16,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 13,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 64,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 56,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 27,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 27,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 15,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 10,
  "time_alive": 1444,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 22,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 39,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 69,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 39,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 17,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 63,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 1,
  "time_alive": 1535,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 32,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 59,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 69,
  "time_alive": 1001,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 1,
  "time_alive": 1493,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 19,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 34,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 76,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 12,
  "time_alive": 1468,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 48,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 88,
  "time_alive": 368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 23,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 27,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 44,
  "time_alive": 1274,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 13,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 2,
  "time_alive": 1548,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 72,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 73,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 79,
  "time_alive": 627,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 68,
  "time_alive": 779,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 8,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 10,
  "time_alive": 1491,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 12,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 90,
  "time_alive": 385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 88,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 36,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 75,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 24,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 70,
  "time_alive": 941,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 24,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 33,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 19,
  "time_alive": 1397,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 70,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 23,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 6,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 29,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 20,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 39,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 78,
  "time_alive": 860,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 19,
  "time_alive": 1436,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 12,
  "time_alive": 1467,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 38,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 20,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 24,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 58,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 55,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 5,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 62,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 16,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 48,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 43,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 7,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 6,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 70,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 30,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 89,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 4,
  "time_alive": 1539,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 93,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 41,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 18,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 98,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 47,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 73,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 47,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 34,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 3,
  "time_alive": 1542,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 38,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 16,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 62,
  "time_alive": 1097,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 36,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 18,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 8,
  "time_alive": 1474,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 79,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 15,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 13,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 81,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 54,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 49,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 15,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 52,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 40,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 40,
  "time_alive": 1314,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 63,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 42,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 4,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 26,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 76,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 31,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 13,
  "time_alive": 1462,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 67,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 25,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 43,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 14,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 33,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 17,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 74,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 57,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 2,
  "time_alive": 1553,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 75,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 22,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 84,
  "time_alive": 711,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 64,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 47,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 51,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 12,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 58,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 8,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 23,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 60,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 62,
  "time_alive": 1098,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 3,
  "time_alive": 1544,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 74,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 75,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 63,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 45,
  "time_alive": 1259,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 18,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 11,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 49,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 46,
  "time_alive": 1243,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 89,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 28,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 53,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 28,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 29,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 92,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 7,
  "time_alive": 1476,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 17,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 17,
  "time_alive": 1456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 37,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 9,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 47,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 52,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 18,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 1,
  "time_alive": 1553,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 63,
  "time_alive": 1051,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 89,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 88,
  "time_alive": 452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 94,
  "time_alive": 197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 22,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 63,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 5,
  "time_alive": 1538,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 66,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 55,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 17,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 63,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 56,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 33,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 65,
  "time_alive": 1048,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 10,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 40,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 24,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 81,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 64,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 45,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 93,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 1,
  "time_alive": 1553,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 66,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 69,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 8,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 27,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 36,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 77,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 83,
  "time_alive": 360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 72,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 81,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 5,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 49,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 13,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 54,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 20,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 67,
  "time_alive": 1041,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 20,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 77,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 15,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 96,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 21,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 46,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 32,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 42,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 29,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 44,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 39,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 8,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 60,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 16,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 72,
  "time_alive": 698,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 93,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 41,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 38,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 7,
  "time_alive": 1485,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 31,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 80,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 46,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 72,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 14,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 69,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 33,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 83,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 44,
  "time_alive": 1283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 90,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 40,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 24,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 8,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 25,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 57,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 15,
  "time_alive": 1434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 25,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 57,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 75,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "00f16755170f40faa51639981ae05196",
  "placement": 92,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "00f16755170f40faa51639981ae05196",
  "placement": 55,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "00f16755170f40faa51639981ae05196",
  "placement": 51,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "00f16755170f40faa51639981ae05196",
  "placement": 57,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "00f16755170f40faa51639981ae05196",
  "placement": 5,
  "time_alive": 1485,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "00f16755170f40faa51639981ae05196",
  "placement": 49,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 22,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 45,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 78,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 35,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 58,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 26,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 25,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 64,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 32,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 12,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 81,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 29,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 54,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 46,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 21,
  "time_alive": 1435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 26,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 55,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 57,
  "time_alive": 1140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 34,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 24,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 70,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 80,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 31,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 61,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 77,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 62,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 27,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 55,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "cd347929307d4e8ab340035678bd3119",
  "placement": 10,
  "time_alive": 1462,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "1de68fb7d5474345a187ae732bddfaac",
  "placement": 5,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "1de68fb7d5474345a187ae732bddfaac",
  "placement": 96,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "1de68fb7d5474345a187ae732bddfaac",
  "placement": 21,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "1de68fb7d5474345a187ae732bddfaac",
  "placement": 67,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "1de68fb7d5474345a187ae732bddfaac",
  "placement": 96,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "1de68fb7d5474345a187ae732bddfaac",
  "placement": 94,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 64,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 49,
  "time_alive": 1231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 26,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 82,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 78,
  "time_alive": 634,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 23,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 36,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 83,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 25,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 72,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 29,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 64,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 33,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 29,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 58,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 37,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 84,
  "time_alive": 359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 49,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 35,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 38,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 76,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 34,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 55,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 86,
  "time_alive": 749,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 19,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 45,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 50,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "2114947d297a457a96defa0083eb9366",
  "placement": 58,
  "time_alive": 1058,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 96,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 9,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 43,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 85,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 59,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "3d592d2fa74b471d94bd2c05e3d9caf1",
  "placement": 56,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 82,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 47,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 79,
  "time_alive": 627,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 11,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 36,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "a1b25cfc6f294d55825a03b5443baaed",
  "placement": 70,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 38,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 74,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 57,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 30,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 47,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "d33d4f46c2af4d0db93cc14a2c617f66",
  "placement": 35,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 86,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 94,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 89,
  "time_alive": 446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 48,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "ba838fd3653f42399d8f8298b1abbf62",
  "placement": 6,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 71,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 36,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 87,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 71,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 91,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 13,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 28,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 30,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 81,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "a0c85adce26c4808972bcfb983576ed2",
  "placement": 43,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 31,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 32,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 42,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 80,
  "time_alive": 817,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 90,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "853bbff098e249038760ae39dfae5924",
  "placement": 52,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 88,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 92,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 16,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 74,
  "time_alive": 866,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 86,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 67,
  "time_alive": 786,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 6,
  "time_alive": 1491,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 71,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 97,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "56eeaa7109664e87a3ad223c9055cc6d",
  "placement": 88,
  "time_alive": 290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 60,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 82,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 68,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 31,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "d4f1927f9eaa42e0ae3f5dfcc6b61b9d",
  "placement": 41,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 41,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 66,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 34,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 33,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 44,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 90,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "a9287d829cc9452db65c6d8ffa920d36",
  "placement": 76,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "a9287d829cc9452db65c6d8ffa920d36",
  "placement": 56,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "a9287d829cc9452db65c6d8ffa920d36",
  "placement": 80,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "a9287d829cc9452db65c6d8ffa920d36",
  "placement": 97,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "a9287d829cc9452db65c6d8ffa920d36",
  "placement": 25,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "a9287d829cc9452db65c6d8ffa920d36",
  "placement": 21,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 85,
  "time_alive": 790,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 85,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 30,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 83,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 45,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257",
  "placement": 62,
  "time_alive": 845,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "bc36c53d586e467ab5f2d6912304f7b8",
  "placement": 66,
  "time_alive": 946,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "bc36c53d586e467ab5f2d6912304f7b8",
  "placement": 87,
  "time_alive": 683,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "bc36c53d586e467ab5f2d6912304f7b8",
  "placement": 98,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "bc36c53d586e467ab5f2d6912304f7b8",
  "placement": 76,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "bc36c53d586e467ab5f2d6912304f7b8",
  "placement": 14,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "bc36c53d586e467ab5f2d6912304f7b8",
  "placement": 89,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 74,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 38,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 53,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 56,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 30,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "380fe28677414280b3b6a663b4dcec79",
  "placement": 77,
  "time_alive": 563,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 19,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 78,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 96,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 95,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 68,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 32,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 98,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 68,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 73,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 65,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 11,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 74,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 30,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 93,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 86,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 50,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 61,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "13ee67e67f734319ac5faaa28c9452df",
  "placement": 48,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 50,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 27,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 48,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 48,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 72,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 93,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 80,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 42,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 52,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 51,
  "time_alive": 1231,
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
    