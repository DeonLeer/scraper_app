const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 12,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 20,
  "time_alive": 721,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 7,
  "time_alive": 1446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 15,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 3,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 22,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 4,
  "time_alive": 1469,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 25,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 13,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 21,
  "time_alive": 1221,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 4,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 14,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 7,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "05525376dfb84a678be68920cae53d1e:45131b61c97340049deeef91a1cc3ad2:c5b6616935fb45d8a424c81bbe914fd2",
  "placement": 9,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 16,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 8,
  "time_alive": 1421,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 7,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 24,
  "time_alive": 992,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 12,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 9,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 1,
  "time_alive": 1505,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 20,
  "time_alive": 1231,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 18,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 28,
  "time_alive": 682,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 18,
  "time_alive": 1228,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 22,
  "time_alive": 593,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 12,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 20,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 25,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 32,
  "time_alive": 253,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 3,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 21,
  "time_alive": 1085,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 31,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 1,
  "time_alive": 1531,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 5,
  "time_alive": 1426,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 9,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 11,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 12,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 8,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 16,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 17,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 20,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 5,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 7,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 7,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 15,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 5,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 9,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 6,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 10,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 10,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 24,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 12,
  "time_alive": 1384,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 26,
  "time_alive": 852,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 24,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 27,
  "time_alive": 672,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 11,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 3,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 6,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 19,
  "time_alive": 1225,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "37037bd442cb48999f22d70f585a8428:8eda6ef13c084b7ab763adf7076fb019:a811a94137d94a59bec4ea99b234706c",
  "placement": 2,
  "time_alive": 1496,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 2,
  "time_alive": 1526,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 6,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 1,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 21,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 25,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 15,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 4,
  "time_alive": 1484,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 12,
  "time_alive": 1453,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 19,
  "time_alive": 1280,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 19,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 10,
  "time_alive": 1420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 14,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 18,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 26,
  "time_alive": 913,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 15,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 9,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1436,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 1,
  "time_alive": 1538,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 17,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 26,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 13,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 21,
  "time_alive": 1035,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 16,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 28,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 4,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 31,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 26,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 10,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 8,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 16,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 16,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 14,
  "time_alive": 1375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 4,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 28,
  "time_alive": 790,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 30,
  "time_alive": 519,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 19,
  "time_alive": 1330,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 30,
  "time_alive": 470,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 18,
  "time_alive": 1227,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 15,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 20,
  "time_alive": 1172,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 2,
  "time_alive": 1531,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 6,
  "time_alive": 1413,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 23,
  "time_alive": 1136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 27,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 5,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 21,
  "time_alive": 1149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 11,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 14,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 5,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 23,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 12,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 2,
  "time_alive": 1505,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 30,
  "time_alive": 250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 28,
  "time_alive": 610,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 29,
  "time_alive": 644,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 25,
  "time_alive": 934,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 25,
  "time_alive": 540,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 5,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 23,
  "time_alive": 1106,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 16,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 6,
  "time_alive": 1439,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 9,
  "time_alive": 1410,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 5,
  "time_alive": 1470,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 18,
  "time_alive": 1239,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 17,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 17,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 31,
  "time_alive": 401,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 32,
  "time_alive": 106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 30,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 13,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 9,
  "time_alive": 1413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 20,
  "time_alive": 1172,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 14,
  "time_alive": 1378,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 21,
  "time_alive": 1299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 22,
  "time_alive": 1027,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 24,
  "time_alive": 981,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 24,
  "time_alive": 853,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 8,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 27,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 8,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "2a4e5417368f4bb3be7d39f93d325fa1:cbba077419234d6a91ba0209c93fcf87:d68106ccdf6c44b990162e7b811b4572",
  "placement": 7,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 23,
  "time_alive": 1046,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 5,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 10,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 7,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 16,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 6,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 23,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 25,
  "time_alive": 598,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 21,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 15,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 17,
  "time_alive": 1232,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 27,
  "time_alive": 396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 9,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 13,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 11,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 28,
  "time_alive": 547,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 28,
  "time_alive": 503,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 23,
  "time_alive": 946,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 8,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 9,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 22,
  "time_alive": 1141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 11,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 16,
  "time_alive": 1246,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 10,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 15,
  "time_alive": 1358,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 17,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 27,
  "time_alive": 833,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 16,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 18,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 3,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 29,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 25,
  "time_alive": 980,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 8,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 23,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 17,
  "time_alive": 1106,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 17,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 21,
  "time_alive": 1172,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 13,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 10,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 33,
  "time_alive": 232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 30,
  "time_alive": 373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 12,
  "time_alive": 1392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 19,
  "time_alive": 1234,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 31,
  "time_alive": 237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 30,
  "time_alive": 617,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 4,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "470ab8f8a81742b89c1054979874ea20:48632da8c3bd478199f341acfa38c722:6a5639065762462585e4344a85e955f5",
  "placement": 32,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 11,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 22,
  "time_alive": 1122,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 21,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 22,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 9,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 28,
  "time_alive": 422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 20,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 3,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 24,
  "time_alive": 1001,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 23,
  "time_alive": 590,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 14,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 24,
  "time_alive": 1075,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 18,
  "time_alive": 1207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 27,
  "time_alive": 574,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 17,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 27,
  "time_alive": 629,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 3,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 18,
  "time_alive": 1323,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 13,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 16,
  "time_alive": 1374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 14,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "23fc5737dc254f6899db9d68c192e445:63be206b2bdf42809c0c027a88ec904d:a7c40a8621464ca387c3791595c07c25",
  "placement": 24,
  "time_alive": 584,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 33,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 29,
  "time_alive": 769,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 23,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 11,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 24,
  "time_alive": 1063,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 33,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 30,
  "time_alive": 283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 8,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 11,
  "time_alive": 1391,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 22,
  "time_alive": 1217,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "0779e59c489b497794889ffb473c56ff:2d39b1b6356d40019c5ae5dfd278c4f9:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 29,
  "time_alive": 194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 32,
  "time_alive": 265,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 27,
  "time_alive": 856,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 5,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 23,
  "time_alive": 1003,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 19,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 29,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 28,
  "time_alive": 566,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 32,
  "time_alive": 186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 23,
  "time_alive": 1068,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 26,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 20,
  "time_alive": 1063,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 4,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 22,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 25,
  "time_alive": 1063,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 28,
  "time_alive": 677,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 29,
  "time_alive": 466,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 11,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 26,
  "time_alive": 814,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 22,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 26,
  "time_alive": 593,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 33,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 20,
  "time_alive": 1226,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 15,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:cca85c0be20d4ef49e02061dc8d800da:dc0241c1424b4703839a1d33e7560866",
  "placement": 8,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 20,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 31,
  "time_alive": 441,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 19,
  "time_alive": 1176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 17,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 32,
  "time_alive": 280,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 19,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 26,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 14,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 15,
  "time_alive": 1374,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 24,
  "time_alive": 1098,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 22,
  "time_alive": 1014,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 31,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 31,
  "time_alive": 400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 28,
  "time_alive": 783,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 32,
  "time_alive": 361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 30,
  "time_alive": 295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 29,
  "time_alive": 498,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 17,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 10,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 30,
  "time_alive": 240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 25,
  "time_alive": 1081,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 26,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "6d5f7466b22b4a55a75d52562bead029:908ac95f405d4306b9c4e404f7df3087:c3b5d17676bd43179eabbedca781c8e0",
  "placement": 28,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 24,
  "time_alive": 1040,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 26,
  "time_alive": 876,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 31,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 13,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 32,
  "time_alive": 282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 29,
  "time_alive": 519,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 23,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 29,
  "time_alive": 319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 21,
  "time_alive": 1223,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 29,
  "time_alive": 436,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "75925a4e9f3642f883e4724ea326be74:b3fc262d0a9f4c27a956da83cb6b6e6d:e9cae34779214baf899750052bafda4d",
  "placement": 33,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 26,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 30,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 33,
  "time_alive": 355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 33,
  "time_alive": 138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 31,
  "time_alive": 416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 31,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 20,
  "time_alive": 1174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 33,
  "time_alive": 163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 27,
  "time_alive": 796,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 32,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 31,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 19,
  "time_alive": 1006,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 27,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 14,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 22,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 25,
  "time_alive": 927,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 30,
  "time_alive": 464,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 28,
  "time_alive": 504,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 19,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 31,
  "time_alive": 207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 32,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 33,
  "time_alive": 220,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 30,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:40fe925f5f784e0ca929ae54012f8657:5a5a74a9bd414b6d9f12b53f78061cf8",
  "placement": 21,
  "time_alive": 716,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 2,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 6,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 16,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 1,
  "time_alive": 1504,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 9,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 7,
  "time_alive": 1466,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 1,
  "time_alive": 1454,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 5,
  "time_alive": 1475,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 3,
  "time_alive": 1461,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 20,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 14,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 1,
  "time_alive": 1505,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 12,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 2,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 23,
  "time_alive": 1039,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 20,
  "time_alive": 1210,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 11,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 1,
  "time_alive": 1523,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 26,
  "time_alive": 758,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 17,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 9,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 1,
  "time_alive": 1486,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 2,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 9,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 6,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 5,
  "time_alive": 1440,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 4,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 11,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 10,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 10,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 5,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 1,
  "time_alive": 1511,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 20,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 7,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 8,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 8,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 3,
  "time_alive": 1491,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 23,
  "time_alive": 1100,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 18,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 7,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 2,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 5,
  "time_alive": 1467,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 4,
  "time_alive": 1440,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 7,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 8,
  "time_alive": 1412,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 6,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 7,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 13,
  "time_alive": 1372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 10,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 10,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 5,
  "time_alive": 1456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 12,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 13,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 18,
  "time_alive": 1237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 6,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 3,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 20,
  "time_alive": 1220,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 2,
  "time_alive": 1454,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 20,
  "time_alive": 1192,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 11,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 4,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 3,
  "time_alive": 1471,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 5,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 4,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 10,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 9,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 8,
  "time_alive": 1432,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 33,
  "time_alive": 105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 6,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 10,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 7,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 26,
  "time_alive": 445,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 22,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 3,
  "time_alive": 1460,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 1,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 25,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 2,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 8,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 15,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 12,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 17,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 12,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 1,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 5,
  "time_alive": 1438,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 32,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 7,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 17,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 17,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 1,
  "time_alive": 1485,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 13,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 24,
  "time_alive": 1131,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 2,
  "time_alive": 1523,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 3,
  "time_alive": 1450,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 19,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 17,
  "time_alive": 1196,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 9,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 17,
  "time_alive": 1327,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:7272644e563943c8ad873451118ebb19:f54583872aac451ab31ce647035fa030",
  "placement": 11,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 32,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 32,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 15,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 6,
  "time_alive": 1438,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 23,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 17,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 28,
  "time_alive": 721,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 32,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 13,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 2,
  "time_alive": 1486,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 1,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 2,
  "time_alive": 1505,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 11,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 4,
  "time_alive": 1443,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 22,
  "time_alive": 1039,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 5,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 3,
  "time_alive": 1465,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 11,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 10,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 14,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 33,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 15,
  "time_alive": 1336,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 6,
  "time_alive": 1430,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 14,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 33,
  "time_alive": 84,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 30,
  "time_alive": 524,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 28,
  "time_alive": 887,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 2,
  "time_alive": 1504,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 1,
  "time_alive": 1470,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 3,
  "time_alive": 1478,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 27,
  "time_alive": 748,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 4,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 30,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 14,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 30,
  "time_alive": 257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 16,
  "time_alive": 1348,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 13,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 11,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 3,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 26,
  "time_alive": 504,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 12,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 15,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 14,
  "time_alive": 1381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 3,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 26,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 24,
  "time_alive": 657,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 5,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:89b92ae21b704054bd7a94a8391b4301:b3f83c102b724b1c8c2a359964734f5e",
  "placement": 10,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 15,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 16,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 8,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 4,
  "time_alive": 1451,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 21,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 13,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 18,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 6,
  "time_alive": 1474,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 6,
  "time_alive": 1430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 3,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 16,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 22,
  "time_alive": 910,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 5,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 12,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 13,
  "time_alive": 1386,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 28,
  "time_alive": 350,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 19,
  "time_alive": 1221,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 22,
  "time_alive": 985,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 19,
  "time_alive": 1263,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 16,
  "time_alive": 1329,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 4,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 28,
  "time_alive": 365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 28,
  "time_alive": 323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 29,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 20,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 8,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 7,
  "time_alive": 1445,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 16,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 27,
  "time_alive": 766,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 9,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 15,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 28,
  "time_alive": 799,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 16,
  "time_alive": 1199,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 13,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 29,
  "time_alive": 264,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "0f538ed9099f4897a24c53a84a9fdc47:421ee330e08d4e70b55b9a021c45d52b:e1d37d1843e54434aeeb627b5065b5e2",
  "placement": 18,
  "time_alive": 1295,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 22,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 21,
  "time_alive": 1185,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 12,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 23,
  "time_alive": 1155,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 5,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 20,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 24,
  "time_alive": 1009,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 13,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 10,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 10,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 9,
  "time_alive": 1409,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "486e13b881ae4adfb80f5cef391c3ec1:5449af976bfb4de3b73ae4c3ff626016:88f8d8a6b8854080b2feb98973ef05dd",
  "placement": 25,
  "time_alive": 658,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 25,
  "time_alive": 893,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 19,
  "time_alive": 1230,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 29,
  "time_alive": 509,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 25,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 31,
  "time_alive": 315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 28,
  "time_alive": 492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 8,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 2,
  "time_alive": 1511,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 14,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 16,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 11,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "61a2a5c8bdac42718fdcfffd970eb774:8783d27ac1a744d281f572166bd6a23d:df2e1ca4b094413fba4e3ed75a695695",
  "placement": 19,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 19,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 15,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 9,
  "time_alive": 1413,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 22,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 6,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 25,
  "time_alive": 864,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 7,
  "time_alive": 1409,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 22,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 27,
  "time_alive": 707,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 27,
  "time_alive": 441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 23,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "34c89fcbe4914bd8acd7674eb6aab778:721ee9ce20cc4e66b337157222aa2008:9cf21fc3d1594fd78073475b8721884b",
  "placement": 6,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 16,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 20,
  "time_alive": 1208,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 25,
  "time_alive": 943,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 33,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 7,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 27,
  "time_alive": 503,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 16,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 19,
  "time_alive": 1110,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 12,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 10,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "07e55f50750a436a9096a8e047980d09:9ce95ede3b154c7fb4de9243201ead3e:e4a21f91b56b48b5b8e4c073f708857e",
  "placement": 28,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 30,
  "time_alive": 753,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 29,
  "time_alive": 662,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 21,
  "time_alive": 1104,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 30,
  "time_alive": 299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 33,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 6,
  "time_alive": 1466,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 31,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 8,
  "time_alive": 1447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 12,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 18,
  "time_alive": 1286,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 24,
  "time_alive": 916,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "5d87687d76fc45ebac620deb7cc8ac85:5f38f888b5f0418cb59f4ce36be60ec6:d50854cb204740f4b58938ea7f659411",
  "placement": 32,
  "time_alive": 103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 9,
  "time_alive": 1433,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 24,
  "time_alive": 1061,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 27,
  "time_alive": 888,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 18,
  "time_alive": 1236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 18,
  "time_alive": 1262,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 18,
  "time_alive": 1245,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 21,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 30,
  "time_alive": 452,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 5,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 23,
  "time_alive": 1085,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 27,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 12,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 18,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 7,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 20,
  "time_alive": 1108,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 15,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 30,
  "time_alive": 342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 26,
  "time_alive": 854,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 12,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 26,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 21,
  "time_alive": 1034,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 19,
  "time_alive": 1199,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 18,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "36afab16268d4bd6a7cf5d66ae9e5a62:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 17,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 21,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 9,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 11,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 24,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 14,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 16,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 29,
  "time_alive": 439,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 15,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 23,
  "time_alive": 914,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 25,
  "time_alive": 550,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 19,
  "time_alive": 1268,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e:7b055f9946b0483d911c6dbafd8ab425:bd5a3044248742fd895cba3353ae1be9",
  "placement": 20,
  "time_alive": 1148,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 31,
  "time_alive": 376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 28,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 33,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 14,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 25,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 29,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 9,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 9,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 29,
  "time_alive": 300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 21,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 15,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "019de15597f441fd991d8697ca029743:14e7d69c4b094d4c8ed01508b8d95938:309646eea2c24ba082340bd6bd4fcc06",
  "placement": 24,
  "time_alive": 800,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 14,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 13,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 17,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 21,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 16,
  "time_alive": 1351,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 24,
  "time_alive": 914,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 33,
  "time_alive": 189,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 23,
  "time_alive": 1137,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 15,
  "time_alive": 1244,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 32,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 20,
  "time_alive": 1248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "459949b50a1d4442b8d2a9435106bd9f:7e00341a9f3444718b027fb6b800b0da:8fa6505583834b1faa184a891acf0680",
  "placement": 31,
  "time_alive": 115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 23,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 26,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 19,
  "time_alive": 1130,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 19,
  "time_alive": 1233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 26,
  "time_alive": 852,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 21,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 30,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 29,
  "time_alive": 550,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 18,
  "time_alive": 1179,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 8,
  "time_alive": 1387,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 13,
  "time_alive": 1388,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "036a737a688d436bbce811af92b11a4b:c7dcb25acd764926933ab202d78811ed:fb9f9a347cbd43e0abdeafc2f7e370a1",
  "placement": 27,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 27,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 31,
  "time_alive": 460,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 14,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 10,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 17,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 32,
  "time_alive": 282,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 23,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 31,
  "time_alive": 320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 24,
  "time_alive": 909,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 30,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 25,
  "time_alive": 458,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:615fc0ff930f4c78ab9c7d8e2e8d4e6c:e86d6219838c48908746a904860b93c2",
  "placement": 21,
  "time_alive": 1103,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 29,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 3,
  "time_alive": 1451,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 26,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 32,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 29,
  "time_alive": 371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 31,
  "time_alive": 302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 32,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 33,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 31,
  "time_alive": 244,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 17,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6:a35a7a7190d84531b7c2c71dc525c614:e2e9086972594800b5c025eed52294bb",
  "placement": 33,
  "time_alive": 97,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 28,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 33,
  "time_alive": 117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 31,
  "time_alive": 350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 29,
  "time_alive": 344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 32,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 14,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 22,
  "time_alive": 1207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 25,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 25,
  "time_alive": 865,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 22,
  "time_alive": 1143,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 12,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "0407f7627433471a90b008a3ddd12f88:e033f41ca03545579a78d8d21fbcb49b:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 23,
  "time_alive": 885,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 26,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 14,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 30,
  "time_alive": 401,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 17,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 13,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 30,
  "time_alive": 385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 20,
  "time_alive": 1239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 27,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 28,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 31,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 21,
  "time_alive": 1211,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 15,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 24,
  "time_alive": 907,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 22,
  "time_alive": 1143,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 32,
  "time_alive": 293,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 31,
  "time_alive": 224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 22,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 19,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 11,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 18,
  "time_alive": 1315,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 32,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dd672e97-7191-4e76-9d1c-29e2036fb64c",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 29,
  "time_alive": 306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 31,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 30,
  "time_alive": 121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "195a5d74-c92d-4dd9-ab21-afe04ff850e2",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 7,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "aa9c6661-aa11-4ee9-a33b-48a599c9e74a",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9d7d8a43-3f78-4075-bd94-4171aa8c6163",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 24,
  "time_alive": 978,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c2deee4-c1d4-4e8c-a337-6550ab60b78f",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 27,
  "time_alive": 459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c0ab7778-cbf4-4877-b769-5404b79b0378",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 28,
  "time_alive": 611,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2764c8c-985b-465b-9c8e-7bb2d0d3d485",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 23,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f57f50f5-7118-4a75-a879-6fc7891621f1",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 25,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cf662dcd-d704-43d7-8211-088e45a99785",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 24,
  "time_alive": 1004,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dff5b7cd-98f8-45d2-93c2-dd7d30673b79",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 22,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37c6a34a-3003-4586-b913-99c5909d32a7",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 26,
  "time_alive": 407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a7de3c0d-9f1a-4b22-86b5-47e796999e6b",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 26,
  "time_alive": 613,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 23,
  "time_alive": 1096,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1476,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1539,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1476,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 15,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 4,
  "time_alive": 1468,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 7,
  "time_alive": 1416,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1488,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 14,
  "time_alive": 1380,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 17,
  "time_alive": 1177,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1503,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 7,
  "time_alive": 1470,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 25,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 9,
  "time_alive": 1419,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 20,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 28,
  "time_alive": 322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 11,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 13,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 15,
  "time_alive": 1338,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1488,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1490,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 2,
  "time_alive": 1468,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 5,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 27,
  "time_alive": 974,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 18,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 2,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1442,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1506,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 16,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 1,
  "time_alive": 1478,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 13,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 11,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1457,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 5,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 12,
  "time_alive": 1422,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 18,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 3,
  "time_alive": 1478,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 16,
  "time_alive": 1320,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 11,
  "time_alive": 1404,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 6,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 14,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 15,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 14,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 5,
  "time_alive": 1462,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 10,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 4,
  "time_alive": 1453,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 13,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 29,
  "time_alive": 669,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 12,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 1,
  "time_alive": 1494,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 5,
  "time_alive": 1439,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 17,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 5,
  "time_alive": 1441,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 2,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 8,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 16,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 8,
  "time_alive": 1408,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 26,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 31,
  "time_alive": 486,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 21,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 19,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 28,
  "time_alive": 406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 2,
  "time_alive": 1520,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 29,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 28,
  "time_alive": 461,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 3,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 2,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 23,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 3,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "7af11e7b44e44125b796c7c7da34363b:c5ecd40641b6459097e363e810769448:f9f799677d8a47668f32ae99f38866e0",
  "placement": 1,
  "time_alive": 1468,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 14,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 6,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 27,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 5,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 8,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 1,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 3,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 21,
  "time_alive": 1011,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 10,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 4,
  "time_alive": 1474,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 23,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "3ae8a6f2a3ed47199107e1695e568b6a:c001682f7b234a4e96ae0fca725b8679:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 20,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 7,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 9,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 10,
  "time_alive": 1409,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 14,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 17,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 12,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 13,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 12,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 6,
  "time_alive": 1422,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 15,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 6,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "3c11588f12bc4c5ab964eef1a9d84064:f4162fca83b54f598bd62524518df701:ffbb0eff7cf0433f8cbf9b5b30d57202",
  "placement": 14,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 20,
  "time_alive": 1139,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 1,
  "time_alive": 1527,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 11,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 24,
  "time_alive": 1102,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 1,
  "time_alive": 1520,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 16,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 19,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 7,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 24,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 24,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 9,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "27ad826215ac4a9caa73a1a5139384bf:2bfec55de5a347c69bfca2d04e539ac1:48a10d6404c649198c8cf382f12253bc",
  "placement": 18,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 2,
  "time_alive": 1503,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 11,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 16,
  "time_alive": 1319,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 6,
  "time_alive": 1429,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 13,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 18,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 27,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 8,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 4,
  "time_alive": 1438,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 19,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 18,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "8ab633c15a1e4dfabd99718cbff3e645:91aa308676d04069862bcefa7a16d7a6:dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 16,
  "time_alive": 1200,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 3,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 28,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 5,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 7,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 9,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 10,
  "time_alive": 1446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 18,
  "time_alive": 1254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 11,
  "time_alive": 1406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 17,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 6,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 19,
  "time_alive": 1313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 29,
  "time_alive": 351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 8,
  "time_alive": 1450,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 9,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 18,
  "time_alive": 1239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 18,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 21,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 10,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 20,
  "time_alive": 1205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 11,
  "time_alive": 1399,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 12,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 5,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "925521bb87d543dd8872cb68034afce0:9787496d9fe64f46a5107753919068d4:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 10,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 4,
  "time_alive": 1477,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 10,
  "time_alive": 1431,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 7,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 10,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 28,
  "time_alive": 851,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 14,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 26,
  "time_alive": 1075,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 19,
  "time_alive": 1268,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 12,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 7,
  "time_alive": 1432,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 20,
  "time_alive": 1233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 13,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 30,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 3,
  "time_alive": 1495,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 15,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 11,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 19,
  "time_alive": 1263,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 11,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 1,
  "time_alive": 1497,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 6,
  "time_alive": 1454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 31,
  "time_alive": 445,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 17,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 21,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:31856a400dee4467b2ab7e9524f03acf",
  "placement": 15,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 32,
  "time_alive": 285,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 24,
  "time_alive": 1041,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 2,
  "time_alive": 1539,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 8,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 10,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 23,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 17,
  "time_alive": 1270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 9,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 22,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 14,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 28,
  "time_alive": 433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 6,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 15,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 13,
  "time_alive": 1396,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 21,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 7,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 6,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 26,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 29,
  "time_alive": 610,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 26,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 2,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:a3a0270f15d34ef096076d01318d5eda:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 7,
  "time_alive": 1440,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 29,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 2,
  "time_alive": 1527,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 22,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 4,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 22,
  "time_alive": 1042,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 5,
  "time_alive": 1489,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 4,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 28,
  "time_alive": 578,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 20,
  "time_alive": 1214,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 25,
  "time_alive": 1120,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 30,
  "time_alive": 304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 9,
  "time_alive": 1409,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 22,
  "time_alive": 1097,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 26,
  "time_alive": 974,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 31,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 32,
  "time_alive": 137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 32,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 26,
  "time_alive": 413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 20,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 5,
  "time_alive": 1458,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 1,
  "time_alive": 1474,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 22,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 12,
  "time_alive": 1387,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 27,
  "time_alive": 646,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 21,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 20,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 32,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 13,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 2,
  "time_alive": 1497,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 29,
  "time_alive": 437,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 23,
  "time_alive": 1123,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 3,
  "time_alive": 1481,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 15,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 3,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 19,
  "time_alive": 1145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 19,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 17,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 13,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 26,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 3,
  "time_alive": 1512,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 12,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 24,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 16,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 9,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 13,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 25,
  "time_alive": 867,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 17,
  "time_alive": 1214,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 4,
  "time_alive": 1486,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 8,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 23,
  "time_alive": 1141,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 29,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 8,
  "time_alive": 1456,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 21,
  "time_alive": 1169,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 32,
  "time_alive": 156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 19,
  "time_alive": 1229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 30,
  "time_alive": 388,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 27,
  "time_alive": 544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 32,
  "time_alive": 130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 24,
  "time_alive": 1050,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 14,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 14,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 7,
  "time_alive": 1426,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 20,
  "time_alive": 1253,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 31,
  "time_alive": 250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 17,
  "time_alive": 1340,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 28,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 21,
  "time_alive": 1191,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 7,
  "time_alive": 1419,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "0143748734634079b060e5d871106f4a:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 24,
  "time_alive": 906,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 26,
  "time_alive": 917,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 30,
  "time_alive": 453,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 4,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 22,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 16,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 22,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 23,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 23,
  "time_alive": 996,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 3,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 13,
  "time_alive": 1383,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 22,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "5a2430acdb5742da9a5b9994273b6695:c55f92adc30347dab903c1ec4c7fa3d3:f33c1e2eee0f49308fda771610ac07e9",
  "placement": 12,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 11,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 16,
  "time_alive": 1366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 13,
  "time_alive": 1357,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 26,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 6,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 19,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 32,
  "time_alive": 242,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 16,
  "time_alive": 1375,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 32,
  "time_alive": 194,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 32,
  "time_alive": 135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13fec864-9552-47b6-83a1-cd1ee7d83906",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 11,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "400a7dca-7ce9-4d31-8fc6-3f55df5aa789",
  "team_id": "6a6419213a5e4a93b5302b7050f86604:781c9df9b5f1483a9d06de87be5467aa:bdc773427c734889adf20d0e119098be",
  "placement": 19,
  "time_alive": 1131,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c0f36b9-bc89-4d53-a484-0890d9bfc147",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 25,
  "time_alive": 1015,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "be66a7b2-ac2b-4034-9013-3e77053694de",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 17,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8d40d810-2b69-4b0d-a0c4-29f6013eaebc",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 26,
  "time_alive": 926,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54d559ae-8c2a-476c-9f3a-ed82d80d1327",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 19,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ae42ed1f-4c64-4226-8ced-5f75dbb47c3f",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 3,
  "time_alive": 1474,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bc152474-c959-40f3-95f6-527bb3787006",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 9,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8d7de30e-97be-4a29-9638-4784d3c7dd5f",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 9,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8a8332c2-f069-441a-a8ed-56c5529dbb6d",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 27,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c7946ba-63d6-4911-8fb8-1d5b2cb7ed59",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 18,
  "time_alive": 1240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "61c459e6-9ffb-491f-b5c8-0388213694f1",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 8,
  "time_alive": 1420,
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
    