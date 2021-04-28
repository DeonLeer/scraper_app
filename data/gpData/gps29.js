const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "12a481bd362d4fcb824698aa39ac6242",
  "placement": 91,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 70,
  "time_alive": 738,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 44,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 11,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 52,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 51,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 25,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 35,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 13,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 23,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 72,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 63,
  "time_alive": 782,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "b158e0ecc3cf4125a71eac3d6f2c1fef",
  "placement": 45,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "b158e0ecc3cf4125a71eac3d6f2c1fef",
  "placement": 63,
  "time_alive": 1136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "b158e0ecc3cf4125a71eac3d6f2c1fef",
  "placement": 64,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "b158e0ecc3cf4125a71eac3d6f2c1fef",
  "placement": 28,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "b158e0ecc3cf4125a71eac3d6f2c1fef",
  "placement": 44,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "b158e0ecc3cf4125a71eac3d6f2c1fef",
  "placement": 3,
  "time_alive": 1471,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 84,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 27,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 60,
  "time_alive": 1053,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 40,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 50,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 29,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "0c9c482352364ba6837f21b98d0091b7",
  "placement": 16,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "0c9c482352364ba6837f21b98d0091b7",
  "placement": 64,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "0c9c482352364ba6837f21b98d0091b7",
  "placement": 37,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "0c9c482352364ba6837f21b98d0091b7",
  "placement": 25,
  "time_alive": 1363,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "0c9c482352364ba6837f21b98d0091b7",
  "placement": 58,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "0c9c482352364ba6837f21b98d0091b7",
  "placement": 54,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 42,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 86,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 83,
  "time_alive": 340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 27,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 13,
  "time_alive": 1447,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 80,
  "time_alive": 302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 40,
  "time_alive": 1332,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 68,
  "time_alive": 986,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 95,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 95,
  "time_alive": 123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 72,
  "time_alive": 682,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 5,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 92,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 61,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 89,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 6,
  "time_alive": 1454,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 56,
  "time_alive": 1153,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 88,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 65,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 80,
  "time_alive": 714,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 18,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 30,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 37,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 81,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 37,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 28,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 39,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 60,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 77,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 23,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 4,
  "time_alive": 1540,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 42,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 72,
  "time_alive": 602,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 49,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 65,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 56,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 50,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 60,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 76,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 20,
  "time_alive": 1382,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 92,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 12,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 32,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 40,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 8,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 66,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 61,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "8046d86bd40d4f749c5775e4e27361cf",
  "placement": 55,
  "time_alive": 919,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 55,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 84,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 32,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 2,
  "time_alive": 1536,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 74,
  "time_alive": 516,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 53,
  "time_alive": 999,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 85,
  "time_alive": 342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 3,
  "time_alive": 1514,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 73,
  "time_alive": 579,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 75,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 90,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 51,
  "time_alive": 1224,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 41,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 31,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 71,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 29,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 37,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "06f5d4ccd79848268f0aeed769104190",
  "placement": 44,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "06f5d4ccd79848268f0aeed769104190",
  "placement": 35,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "06f5d4ccd79848268f0aeed769104190",
  "placement": 17,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "06f5d4ccd79848268f0aeed769104190",
  "placement": 53,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "06f5d4ccd79848268f0aeed769104190",
  "placement": 27,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "06f5d4ccd79848268f0aeed769104190",
  "placement": 76,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 38,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 82,
  "time_alive": 644,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 15,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 90,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 25,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 73,
  "time_alive": 557,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 24,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 48,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 96,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 50,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 20,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "ab64e49e04734ca19303b8f61dcea09c",
  "placement": 48,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 60,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 20,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 45,
  "time_alive": 1256,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 44,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 57,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "93d9b61ac0b14ba5a41f36459b11d4ba",
  "placement": 60,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 19,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 94,
  "time_alive": 313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 25,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 59,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 64,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "b473156b459e4ac9a737a790d443ee55",
  "placement": 36,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 82,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 72,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 48,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 31,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 22,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1",
  "placement": 19,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 36,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 15,
  "time_alive": 1422,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 68,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 80,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 55,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "9f5e408381ab4e6e862fb472bbc439ac",
  "placement": 49,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 81,
  "time_alive": 451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 30,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 92,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 10,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 47,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 87,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 49,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 75,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 24,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 37,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 32,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a",
  "placement": 26,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 78,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 22,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 30,
  "time_alive": 1381,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 89,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 85,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 69,
  "time_alive": 621,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 11,
  "time_alive": 1506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 65,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 78,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 21,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 68,
  "time_alive": 901,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 70,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 95,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 37,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 40,
  "time_alive": 1301,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 46,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 91,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 74,
  "time_alive": 535,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 79,
  "time_alive": 499,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 49,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 79,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 26,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 13,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 87,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 87,
  "time_alive": 461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 51,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 9,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 41,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 15,
  "time_alive": 1480,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 95,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 47,
  "time_alive": 1247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 48,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 84,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 78,
  "time_alive": 384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 41,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 96,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 91,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 29,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 48,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 92,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 99,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 47,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 58,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 93,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 16,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 64,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 33,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 77,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 93,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 88,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 80,
  "time_alive": 444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 32,
  "time_alive": 1334,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 53,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 17,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 53,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 68,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "9e529e04395647b5b65a3d46bc115354",
  "placement": 78,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 91,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 21,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 85,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 86,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 27,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 67,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 71,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 77,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 58,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 40,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 39,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 34,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 51,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 57,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 54,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 62,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 34,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 57,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 34,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 65,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 73,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 83,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 61,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 98,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 82,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 96,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 12,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 66,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 88,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 54,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 50,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 62,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 28,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 68,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 30,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 73,
  "time_alive": 882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 66,
  "time_alive": 757,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 70,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 64,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 83,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 67,
  "time_alive": 744,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 81,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 46,
  "time_alive": 1284,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 42,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 73,
  "time_alive": 678,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 46,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 87,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 78,
  "time_alive": 430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 89,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 35,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 52,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 45,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 69,
  "time_alive": 702,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 42,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 63,
  "time_alive": 1071,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 94,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 29,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 31,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 91,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 95,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 62,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 94,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 70,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 42,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 47,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 67,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "a9efa3f9aea140159f506ae6924fa02b",
  "placement": 33,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 76,
  "time_alive": 569,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 97,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 74,
  "time_alive": 506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 66,
  "time_alive": 976,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 57,
  "time_alive": 878,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "ab43812ecf7845b28ab860a27a8918a5",
  "placement": 68,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "ab43812ecf7845b28ab860a27a8918a5",
  "placement": 78,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "ab43812ecf7845b28ab860a27a8918a5",
  "placement": 70,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "ab43812ecf7845b28ab860a27a8918a5",
  "placement": 56,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "ab43812ecf7845b28ab860a27a8918a5",
  "placement": 33,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "ab43812ecf7845b28ab860a27a8918a5",
  "placement": 43,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 90,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 69,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 33,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 51,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 82,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 93,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "70ca551af4c44ae3b1ceecba19d1e642",
  "placement": 63,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "70ca551af4c44ae3b1ceecba19d1e642",
  "placement": 52,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "70ca551af4c44ae3b1ceecba19d1e642",
  "placement": 52,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "70ca551af4c44ae3b1ceecba19d1e642",
  "placement": 67,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "70ca551af4c44ae3b1ceecba19d1e642",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "70ca551af4c44ae3b1ceecba19d1e642",
  "placement": 47,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 72,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 58,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 88,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 63,
  "time_alive": 1027,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 86,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 82,
  "time_alive": 271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 93,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 100,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 80,
  "time_alive": 426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 77,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 71,
  "time_alive": 705,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 46,
  "time_alive": 1224,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 74,
  "time_alive": 576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 53,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 56,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 94,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 52,
  "time_alive": 1098,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 62,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 59,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 44,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 61,
  "time_alive": 1062,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 81,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 85,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "8fcffecbb6dc4a9c88b898632286297c",
  "placement": 83,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "8fcffecbb6dc4a9c88b898632286297c",
  "placement": 76,
  "time_alive": 786,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "8fcffecbb6dc4a9c88b898632286297c",
  "placement": 84,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "8fcffecbb6dc4a9c88b898632286297c",
  "placement": 55,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "8fcffecbb6dc4a9c88b898632286297c",
  "placement": 75,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "8fcffecbb6dc4a9c88b898632286297c",
  "placement": 84,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 80,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 62,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 71,
  "time_alive": 661,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 82,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 79,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "86e823e2a9d5444297abf42e040976b0",
  "placement": 75,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "4278cc06a59d44a1b412043de8b84044",
  "placement": 89,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "4278cc06a59d44a1b412043de8b84044",
  "placement": 38,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "4278cc06a59d44a1b412043de8b84044",
  "placement": 87,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "bacfe956cee64f71b6a5d6868058b812",
  "placement": 59,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "bacfe956cee64f71b6a5d6868058b812",
  "placement": 93,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "bacfe956cee64f71b6a5d6868058b812",
  "placement": 86,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03a4aa37-cef4-4a99-ae73-a6747c9ca261",
  "team_id": "bacfe956cee64f71b6a5d6868058b812",
  "placement": 43,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e1705bb-4800-4630-86e8-cec1a530c02e",
  "team_id": "bacfe956cee64f71b6a5d6868058b812",
  "placement": 88,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06423475-4a6f-4032-a85d-c4c7baaccd8e",
  "team_id": "bacfe956cee64f71b6a5d6868058b812",
  "placement": 86,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 71,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 92,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1338045f-1c04-4096-b241-ed5156746210",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 62,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d28c1d4-d74e-430e-80cd-f070eb7a35b1",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 77,
  "time_alive": 563,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0160f4c7-5376-488a-92c9-b90facf27054",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 89,
  "time_alive": 427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 3,
  "time_alive": 1539,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 1,
  "time_alive": 1551,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 14,
  "time_alive": 1419,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 1,
  "time_alive": 1549,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 85,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "beb01a91030e44ef8fe4aa0ae32a94c5",
  "placement": 19,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 12,
  "time_alive": 1470,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 27,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 4,
  "time_alive": 1522,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 38,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 7,
  "time_alive": 1471,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "d47b6402fdad444d8f9761f8b75d5fd1",
  "placement": 30,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 71,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 6,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 25,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 10,
  "time_alive": 1508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 39,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 1,
  "time_alive": 1543,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 26,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 12,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 3,
  "time_alive": 1535,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 3,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 44,
  "time_alive": 948,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 15,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 21,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 2,
  "time_alive": 1537,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 30,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 12,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887",
  "placement": 7,
  "time_alive": 1504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 62,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 14,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 10,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 3,
  "time_alive": 1539,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 51,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 13,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 28,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 2,
  "time_alive": 1551,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 20,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 5,
  "time_alive": 1530,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 77,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "acc9309a24ff411581a753aa2054fd7c",
  "placement": 23,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 4,
  "time_alive": 1533,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 37,
  "time_alive": 1330,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 6,
  "time_alive": 1505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 23,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 32,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 49,
  "time_alive": 853,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 2,
  "time_alive": 1551,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 88,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 5,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 57,
  "time_alive": 925,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 21,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 67,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 10,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 46,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 47,
  "time_alive": 1201,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 10,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 5,
  "time_alive": 1510,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 54,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 1,
  "time_alive": 1537,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 4,
  "time_alive": 1536,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 87,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 12,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 92,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 78,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 48,
  "time_alive": 1198,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 6,
  "time_alive": 1473,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "f08aad629bf040d6beb78c7aea8e0a1f",
  "placement": 9,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 10,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 3,
  "time_alive": 1529,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 56,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 28,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 30,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 69,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 13,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 62,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 12,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 73,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 4,
  "time_alive": 1514,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 31,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 34,
  "time_alive": 1350,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 60,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 13,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 20,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 11,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 47,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 52,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 13,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 41,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 5,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "addf33c9380f45bdbe7b66ebfc0a9e82",
  "placement": 14,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 22,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 43,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 24,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 6,
  "time_alive": 1524,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 69,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 8,
  "time_alive": 1504,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 80,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 9,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 51,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 15,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 21,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 88,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 28,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 23,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 14,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 73,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 2,
  "time_alive": 1543,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 11,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 82,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 31,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 63,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 9,
  "time_alive": 1454,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 16,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 17,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 16,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 17,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 11,
  "time_alive": 1499,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 41,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 20,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 17,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 61,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 16,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 29,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 14,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 13,
  "time_alive": 1441,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 28,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 49,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 45,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 35,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 69,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 47,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 20,
  "time_alive": 1417,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 25,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 20,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 32,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 83,
  "time_alive": 317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 22,
  "time_alive": 1396,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 37,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 56,
  "time_alive": 709,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a",
  "placement": 15,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 8,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 35,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 91,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 22,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 8,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 90,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1551,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 5,
  "time_alive": 1510,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 82,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 93,
  "time_alive": 135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 94,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 77,
  "time_alive": 365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "5dc8ef401fee41bd8013f527d96f4928",
  "placement": 53,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "5dc8ef401fee41bd8013f527d96f4928",
  "placement": 20,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "5dc8ef401fee41bd8013f527d96f4928",
  "placement": 32,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "5dc8ef401fee41bd8013f527d96f4928",
  "placement": 15,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "5dc8ef401fee41bd8013f527d96f4928",
  "placement": 34,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "5dc8ef401fee41bd8013f527d96f4928",
  "placement": 22,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 94,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 70,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 70,
  "time_alive": 813,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1517,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1522,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 91,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 63,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 24,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 15,
  "time_alive": 1413,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 95,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 29,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 79,
  "time_alive": 342,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 36,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 9,
  "time_alive": 1474,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 72,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 21,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 78,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 31,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 56,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 4,
  "time_alive": 1516,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 59,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 12,
  "time_alive": 1476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 23,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 73,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 19,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 43,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 24,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 22,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "0119db46561b469797df2fed1153c8fc",
  "placement": 27,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 90,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 68,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 30,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 27,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 67,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 3,
  "time_alive": 1519,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 29,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 61,
  "time_alive": 1038,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 36,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 50,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 11,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 10,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 7,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 80,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 40,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 33,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 43,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 37,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 63,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 70,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 61,
  "time_alive": 626,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 52,
  "time_alive": 793,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 58,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 44,
  "time_alive": 1305,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 35,
  "time_alive": 1342,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 34,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 66,
  "time_alive": 575,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 56,
  "time_alive": 675,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "7ee1fbdd983b4da1b267b0fdee49d27c",
  "placement": 29,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "7ee1fbdd983b4da1b267b0fdee49d27c",
  "placement": 8,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "7ee1fbdd983b4da1b267b0fdee49d27c",
  "placement": 87,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "7ee1fbdd983b4da1b267b0fdee49d27c",
  "placement": 18,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "7ee1fbdd983b4da1b267b0fdee49d27c",
  "placement": 89,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "251695c93d6545ae8e36fef3fdda20c0",
  "placement": 25,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "251695c93d6545ae8e36fef3fdda20c0",
  "placement": 39,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "251695c93d6545ae8e36fef3fdda20c0",
  "placement": 51,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "251695c93d6545ae8e36fef3fdda20c0",
  "placement": 35,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "251695c93d6545ae8e36fef3fdda20c0",
  "placement": 38,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "251695c93d6545ae8e36fef3fdda20c0",
  "placement": 34,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 23,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 79,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 47,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 40,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 26,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "e3f4866bade84267abec24c822efa5cf",
  "placement": 24,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 42,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 32,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 7,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 58,
  "time_alive": 889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 58,
  "time_alive": 683,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 46,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "1bc5057b9e7243adb9681a8ceef8e8ce",
  "placement": 6,
  "time_alive": 1505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "1bc5057b9e7243adb9681a8ceef8e8ce",
  "placement": 81,
  "time_alive": 463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "1bc5057b9e7243adb9681a8ceef8e8ce",
  "placement": 49,
  "time_alive": 1199,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "1bc5057b9e7243adb9681a8ceef8e8ce",
  "placement": 74,
  "time_alive": 519,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "1bc5057b9e7243adb9681a8ceef8e8ce",
  "placement": 71,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "1bc5057b9e7243adb9681a8ceef8e8ce",
  "placement": 25,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 5,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 57,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 97,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 64,
  "time_alive": 700,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 24,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "7ef62bda5a344086997189ef9a47807b",
  "placement": 86,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 16,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 56,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 66,
  "time_alive": 1044,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 36,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 60,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0",
  "placement": 61,
  "time_alive": 592,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 77,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 55,
  "time_alive": 1144,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 19,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 42,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 37,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 26,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 51,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 15,
  "time_alive": 1436,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 71,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 44,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 28,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 62,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 35,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 64,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 44,
  "time_alive": 1269,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 7,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "83f90459347c4895b209cd3e8daf0a26",
  "placement": 36,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 30,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 36,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 67,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 43,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 35,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7",
  "placement": 18,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "6f55caacdecd4a709be5a8d1ae4cde99",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "6f55caacdecd4a709be5a8d1ae4cde99",
  "placement": 73,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "6f55caacdecd4a709be5a8d1ae4cde99",
  "placement": 64,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "6f55caacdecd4a709be5a8d1ae4cde99",
  "placement": 62,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "6f55caacdecd4a709be5a8d1ae4cde99",
  "placement": 17,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "6f55caacdecd4a709be5a8d1ae4cde99",
  "placement": 6,
  "time_alive": 1505,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 27,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 19,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 75,
  "time_alive": 527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 82,
  "time_alive": 383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 59,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 71,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 40,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 46,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 68,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 59,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 13,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 50,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 87,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 84,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 79,
  "time_alive": 413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 2,
  "time_alive": 1549,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 64,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 54,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "82c0098f001a46739350eb40e2f84f2e",
  "placement": 68,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "82c0098f001a46739350eb40e2f84f2e",
  "placement": 11,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "82c0098f001a46739350eb40e2f84f2e",
  "placement": 45,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "82c0098f001a46739350eb40e2f84f2e",
  "placement": 68,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "82c0098f001a46739350eb40e2f84f2e",
  "placement": 83,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "82c0098f001a46739350eb40e2f84f2e",
  "placement": 37,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 92,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 42,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 61,
  "time_alive": 1127,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 9,
  "time_alive": 1511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 91,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 28,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 44,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 23,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 39,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 69,
  "time_alive": 590,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 48,
  "time_alive": 959,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 33,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 74,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 66,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 48,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 26,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 14,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 75,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 72,
  "time_alive": 884,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 85,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 52,
  "time_alive": 1178,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 75,
  "time_alive": 486,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 4,
  "time_alive": 1498,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "834d2a57e7534998987f32161f4c3214",
  "placement": 83,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 97,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 60,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 74,
  "time_alive": 552,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 79,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 2,
  "time_alive": 1522,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 80,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 93,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 25,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 50,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 39,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 70,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "f9674478b4ef45ecb451935be1bccbb0",
  "placement": 38,
  "time_alive": 1214,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "c031d801602a46c39fc3e370e02bf4b6",
  "placement": 48,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "c031d801602a46c39fc3e370e02bf4b6",
  "placement": 89,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "c031d801602a46c39fc3e370e02bf4b6",
  "placement": 73,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "c031d801602a46c39fc3e370e02bf4b6",
  "placement": 19,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "c031d801602a46c39fc3e370e02bf4b6",
  "placement": 80,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "c031d801602a46c39fc3e370e02bf4b6",
  "placement": 17,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 21,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 97,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 76,
  "time_alive": 506,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 83,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 62,
  "time_alive": 615,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 36,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 64,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 69,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 27,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 16,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 86,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 74,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 9,
  "time_alive": 1500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 62,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 46,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 72,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 40,
  "time_alive": 1097,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 24,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 71,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 34,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 18,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 89,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 88,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 33,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 74,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 33,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 78,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 52,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2",
  "placement": 47,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 59,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 72,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 88,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 17,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 53,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "52e54bdb08e741faa5d0150ea64e9fbb",
  "placement": 70,
  "time_alive": 449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 67,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 22,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 94,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 29,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 44,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 76,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 70,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 8,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 54,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 80,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 42,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 65,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 82,
  "time_alive": 443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 53,
  "time_alive": 1170,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 26,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 67,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 54,
  "time_alive": 836,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "ebd5e74947244405b8a5ad337d9cd607",
  "placement": 78,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 38,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 31,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 42,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 53,
  "time_alive": 1075,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 84,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 49,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "9081de6131204168ac7f73fb7a174952",
  "placement": 25,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 39,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 77,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 56,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 47,
  "time_alive": 1022,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 66,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "534847f0d3de4d73a4811185d3e5f78f",
  "placement": 66,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "534847f0d3de4d73a4811185d3e5f78f",
  "placement": 87,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "534847f0d3de4d73a4811185d3e5f78f",
  "placement": 16,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "534847f0d3de4d73a4811185d3e5f78f",
  "placement": 45,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "534847f0d3de4d73a4811185d3e5f78f",
  "placement": 75,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "534847f0d3de4d73a4811185d3e5f78f",
  "placement": 42,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 83,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 18,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 86,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 55,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 57,
  "time_alive": 708,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 58,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 50,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 50,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 29,
  "time_alive": 1365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 60,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 76,
  "time_alive": 327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 51,
  "time_alive": 802,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 43,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 38,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 98,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 31,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 49,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 85,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 61,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 45,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 18,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 77,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 68,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "2280a17c6cce46e791004b545156c9d6",
  "placement": 55,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 57,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 58,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 85,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 94,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 19,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 93,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 96,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 98,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 41,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 90,
  "time_alive": 193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 79,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 48,
  "time_alive": 899,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "6d7b9fdc263a4f4a97fc61169245c2bd",
  "placement": 45,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "6d7b9fdc263a4f4a97fc61169245c2bd",
  "placement": 86,
  "time_alive": 285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "6d7b9fdc263a4f4a97fc61169245c2bd",
  "placement": 31,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "6d7b9fdc263a4f4a97fc61169245c2bd",
  "placement": 41,
  "time_alive": 1064,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 78,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 91,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 57,
  "time_alive": 1161,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 92,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 95,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 39,
  "time_alive": 1100,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 46,
  "time_alive": 1235,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 93,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 96,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 97,
  "time_alive": 79,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 50,
  "time_alive": 880,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "29defa412eca45c48b29e69390ea4a7d",
  "placement": 92,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 91,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 30,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 37,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 84,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 92,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 53,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "fec3abb03e994bafad1f8e6590b77c7a",
  "placement": 60,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "fec3abb03e994bafad1f8e6590b77c7a",
  "placement": 65,
  "time_alive": 927,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "fec3abb03e994bafad1f8e6590b77c7a",
  "placement": 55,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "fec3abb03e994bafad1f8e6590b77c7a",
  "placement": 54,
  "time_alive": 1072,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "fec3abb03e994bafad1f8e6590b77c7a",
  "placement": 88,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "fec3abb03e994bafad1f8e6590b77c7a",
  "placement": 60,
  "time_alive": 595,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "88922e45dc2b48dd99e38e6f95a28f41",
  "placement": 55,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "88922e45dc2b48dd99e38e6f95a28f41",
  "placement": 48,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "88922e45dc2b48dd99e38e6f95a28f41",
  "placement": 58,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "88922e45dc2b48dd99e38e6f95a28f41",
  "placement": 86,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "88922e45dc2b48dd99e38e6f95a28f41",
  "placement": 55,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "88922e45dc2b48dd99e38e6f95a28f41",
  "placement": 45,
  "time_alive": 942,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "c6c308261ec44407b0a4ca2397be47eb",
  "placement": 95,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "c6c308261ec44407b0a4ca2397be47eb",
  "placement": 26,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "c6c308261ec44407b0a4ca2397be47eb",
  "placement": 69,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "c6c308261ec44407b0a4ca2397be47eb",
  "placement": 71,
  "time_alive": 549,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "c6c308261ec44407b0a4ca2397be47eb",
  "placement": 65,
  "time_alive": 587,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "c6c308261ec44407b0a4ca2397be47eb",
  "placement": 82,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "21ec816b002148d6b1e91a9ac910dca7",
  "placement": 73,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "21ec816b002148d6b1e91a9ac910dca7",
  "placement": 94,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "21ec816b002148d6b1e91a9ac910dca7",
  "placement": 65,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "21ec816b002148d6b1e91a9ac910dca7",
  "placement": 65,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "21ec816b002148d6b1e91a9ac910dca7",
  "placement": 40,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "21ec816b002148d6b1e91a9ac910dca7",
  "placement": 72,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "9f89fbf4816549adbfe40dc4480fcbec",
  "placement": 65,
  "time_alive": 1142,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "9f89fbf4816549adbfe40dc4480fcbec",
  "placement": 80,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "9f89fbf4816549adbfe40dc4480fcbec",
  "placement": 88,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "9f89fbf4816549adbfe40dc4480fcbec",
  "placement": 43,
  "time_alive": 1125,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "9f89fbf4816549adbfe40dc4480fcbec",
  "placement": 87,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "936dd1b096f744f889a147c8c181826e",
  "placement": 89,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "936dd1b096f744f889a147c8c181826e",
  "placement": 67,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "936dd1b096f744f889a147c8c181826e",
  "placement": 87,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "936dd1b096f744f889a147c8c181826e",
  "placement": 72,
  "time_alive": 534,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "936dd1b096f744f889a147c8c181826e",
  "placement": 27,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "936dd1b096f744f889a147c8c181826e",
  "placement": 84,
  "time_alive": 244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "ba7e9dd5cd8d4528af3e859db01a8829",
  "placement": 85,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "ba7e9dd5cd8d4528af3e859db01a8829",
  "placement": 59,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "ba7e9dd5cd8d4528af3e859db01a8829",
  "placement": 89,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "ba7e9dd5cd8d4528af3e859db01a8829",
  "placement": 96,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "ba7e9dd5cd8d4528af3e859db01a8829",
  "placement": 33,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "ba7e9dd5cd8d4528af3e859db01a8829",
  "placement": 59,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 76,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 63,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 81,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 76,
  "time_alive": 480,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 63,
  "time_alive": 611,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "3073efe9c046499dae71b5b0192db4d8",
  "placement": 84,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "3073efe9c046499dae71b5b0192db4d8",
  "placement": 75,
  "time_alive": 780,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "3073efe9c046499dae71b5b0192db4d8",
  "placement": 53,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "3073efe9c046499dae71b5b0192db4d8",
  "placement": 89,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "3073efe9c046499dae71b5b0192db4d8",
  "placement": 90,
  "time_alive": 170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "3073efe9c046499dae71b5b0192db4d8",
  "placement": 81,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "17851a5d383c45c6973f616a94c13801",
  "placement": 76,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "17851a5d383c45c6973f616a94c13801",
  "placement": 84,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "17851a5d383c45c6973f616a94c13801",
  "placement": 81,
  "time_alive": 407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "17851a5d383c45c6973f616a94c13801",
  "placement": 46,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "17851a5d383c45c6973f616a94c13801",
  "placement": 57,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 79,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 51,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 92,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 52,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 82,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 64,
  "time_alive": 531,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "ba83adcabbf242f8b560fc13fde1db7c",
  "placement": 49,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "ba83adcabbf242f8b560fc13fde1db7c",
  "placement": 90,
  "time_alive": 180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "ba83adcabbf242f8b560fc13fde1db7c",
  "placement": 83,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "ba83adcabbf242f8b560fc13fde1db7c",
  "placement": 85,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "ba83adcabbf242f8b560fc13fde1db7c",
  "placement": 81,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "ba83adcabbf242f8b560fc13fde1db7c",
  "placement": 68,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "03b366d6497146dc848189f9401fe109",
  "placement": 54,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "03b366d6497146dc848189f9401fe109",
  "placement": 77,
  "time_alive": 636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "03b366d6497146dc848189f9401fe109",
  "placement": 95,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "03b366d6497146dc848189f9401fe109",
  "placement": 66,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "03b366d6497146dc848189f9401fe109",
  "placement": 74,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 75,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 78,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "c63c5a303c7b40e89a1ef24b9d24ef9b",
  "placement": 93,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 81,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06674bdf-3dbf-44fb-8fcf-a7d36d3a1dcc",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 96,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0dfcc37a-d2c9-46be-9cb3-2df22c90c2e5",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 90,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f2ac2-81a9-4cbb-be9f-224952a74059",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 91,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "16142d28-0580-488d-9b19-2896b77bb564",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 93,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0802972c-cc94-4370-a7a7-46463962f61f",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 63,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0f588baa-eb10-4743-9572-febef20c649e",
  "team_id": "eb08a39e6028449385a9c7e04de83f54",
  "placement": 86,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 1,
  "time_alive": 1505,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 58,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 4,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 37,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 52,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 33,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 16,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 28,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 1,
  "time_alive": 1529,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 88,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 73,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 29,
  "time_alive": 1355,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 96,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 2,
  "time_alive": 1531,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 88,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 34,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 16,
  "time_alive": 1432,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 70,
  "time_alive": 921,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 6,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 8,
  "time_alive": 1480,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 44,
  "time_alive": 1306,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 60,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 14,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 12,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 3,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 57,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 37,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 11,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 69,
  "time_alive": 884,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 38,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 74,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1519,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 85,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 15,
  "time_alive": 1432,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 56,
  "time_alive": 1070,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 46,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 2,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 46,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 2,
  "time_alive": 1529,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 96,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 24,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 9,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 22,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 1,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 45,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 70,
  "time_alive": 973,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 85,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 26,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 1,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 97,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 98,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 90,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 11,
  "time_alive": 1452,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 66,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 77,
  "time_alive": 885,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 54,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 5,
  "time_alive": 1489,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 8,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 3,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 4,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 7,
  "time_alive": 1472,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 56,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 97,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 97,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 9,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05f59286-820a-4c76-90b9-5157e6f800c3",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 14,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13f9fe2f-e151-40ca-91ca-53f25a95dbdb",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 20,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2e9391e1-581a-4104-ab26-c00da4d39bc9",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 12,
  "time_alive": 1468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12e347e9-bc0b-43c1-be3e-7583ca02af8a",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 11,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09f7d257-7a03-4a73-8bb5-43618c397a94",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 45,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "196a80da-6eb8-41e9-bf75-5d48548131a9",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 42,
  "time_alive": 1307,
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
    