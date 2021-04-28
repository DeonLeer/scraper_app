const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 13,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 30,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 20,
  "time_alive": 1301,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 7,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 20,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 10,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 15,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 7,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 21,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 17,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 20,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 6,
  "time_alive": 1460,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 15,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 22,
  "time_alive": 1156,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 14,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 8,
  "time_alive": 1413,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 23,
  "time_alive": 1158,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 16,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 29,
  "time_alive": 264,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 25,
  "time_alive": 1037,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 29,
  "time_alive": 870,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 32,
  "time_alive": 209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 4,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 33,
  "time_alive": 131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 29,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 30,
  "time_alive": 580,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 31,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 14,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 13,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 32,
  "time_alive": 119,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 5,
  "time_alive": 1450,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 12,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 15,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 16,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 27,
  "time_alive": 630,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 21,
  "time_alive": 1016,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 15,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 25,
  "time_alive": 1024,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 26,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 12,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 28,
  "time_alive": 497,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 10,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 4,
  "time_alive": 1467,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 20,
  "time_alive": 1166,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 33,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 28,
  "time_alive": 411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 28,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 26,
  "time_alive": 759,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 33,
  "time_alive": 169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 32,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 32,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 20,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 7,
  "time_alive": 1467,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 24,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 15,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 5,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 30,
  "time_alive": 335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 30,
  "time_alive": 295,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "5273e8f7cb5042b585ef299584f5904d:7cbb6bc621ff410caf742446bbaf4255:aaa6130de0704dbead7ef18acd48dd84",
  "placement": 29,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 30,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 206,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 29,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 30,
  "time_alive": 399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 17,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 33,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 21,
  "time_alive": 1192,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 31,
  "time_alive": 279,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 21,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 1,
  "time_alive": 1529,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 14,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 23,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 27,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 21,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 9,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 28,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 26,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 19,
  "time_alive": 1192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 22,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 7,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 19,
  "time_alive": 1237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 19,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 13,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 25,
  "time_alive": 447,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 26,
  "time_alive": 730,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 26,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 27,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 29,
  "time_alive": 607,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 32,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 30,
  "time_alive": 273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 14,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 31,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 18,
  "time_alive": 1226,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 24,
  "time_alive": 1007,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 21,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 33,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 28,
  "time_alive": 582,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 19,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 24,
  "time_alive": 559,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 20,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 28,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 12,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 25,
  "time_alive": 1000,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 25,
  "time_alive": 714,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 13,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 21,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 27,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 30,
  "time_alive": 354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 24,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 24,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 23,
  "time_alive": 710,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 31,
  "time_alive": 339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 22,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 28,
  "time_alive": 413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 13,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 26,
  "time_alive": 630,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 10,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 32,
  "time_alive": 300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 28,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 28,
  "time_alive": 376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 29,
  "time_alive": 470,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 30,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 16,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 22,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 7,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 26,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 24,
  "time_alive": 1055,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "0051173d5a9340b5bc70b0a27151a282:c5189808a07c49a0b2338d5d8edf245f:e203a372cf0b439d959958b745cb1d2f",
  "placement": 31,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 23,
  "time_alive": 1155,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 19,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 17,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 19,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 27,
  "time_alive": 779,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 22,
  "time_alive": 1091,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 33,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 31,
  "time_alive": 353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 29,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 32,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 24,
  "time_alive": 745,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 20,
  "time_alive": 1128,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e4f4aa89-1262-4d84-86af-ca8ba456d2d7",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 16,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8de40da3-cf39-4ac9-b155-e20db2bfa323",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 24,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50960b8f-30e8-4aa9-aab4-14698e9230f3",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 24,
  "time_alive": 556,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6aca76fb-f90a-4ed6-aa6b-0ccd1af592f0",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 31,
  "time_alive": 294,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24687ba3-b243-4d9e-ad8c-281681ec997d",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 33,
  "time_alive": 101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "320b0a58-38bd-4fbb-af42-2c25a666dc84",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 18,
  "time_alive": 1219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1eb143cf-ff30-48a1-9053-80e74c286c11",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 18,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b71ee3c-5406-4e8a-ad07-26a7e7ee13a1",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 25,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c84341e-7f04-400d-9f9c-5760557742f1",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 23,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "717d5c69-2d52-403d-a08c-0a97d26948a4",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 33,
  "time_alive": 102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7babdc09-4d62-4f87-9eaa-4261c84a3442",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 32,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f65469bb-8e36-4da3-b673-a2354ba4058f",
  "team_id": "01bcd2740f334fe1b7bdaec427994511:75f75929cb5243eeaee7eb6d800be005:f8460e30fed94254a79f269edd231fee",
  "placement": 25,
  "time_alive": 828,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1519,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 25,
  "time_alive": 1006,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 4,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1471,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 5,
  "time_alive": 1490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1502,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1484,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1531,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 9,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 4,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1486,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 15,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 7,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 2,
  "time_alive": 1490,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1526,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 4,
  "time_alive": 1496,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 24,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 4,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 9,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 7,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1519,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1543,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 17,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 9,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1524,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1502,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 11,
  "time_alive": 1372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1359,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 12,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 18,
  "time_alive": 1334,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 8,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 3,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1528,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 14,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1524,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 8,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1434,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 7,
  "time_alive": 1440,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1501,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 11,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 20,
  "time_alive": 1228,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 5,
  "time_alive": 1500,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 18,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1490,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 21,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 20,
  "time_alive": 1214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 3,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1484,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 22,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1523,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 3,
  "time_alive": 1487,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 14,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 12,
  "time_alive": 1442,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 16,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 5,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 8,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1530,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 13,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 26,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 16,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 30,
  "time_alive": 459,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 14,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1498,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1500,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1501,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 22,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 25,
  "time_alive": 973,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 14,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1514,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 28,
  "time_alive": 917,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 12,
  "time_alive": 1359,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 13,
  "time_alive": 1374,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1523,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 2,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 11,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 13,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 26,
  "time_alive": 883,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 6,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 4,
  "time_alive": 1508,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 9,
  "time_alive": 1447,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 7,
  "time_alive": 1470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 12,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 5,
  "time_alive": 1421,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 5,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 20,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 24,
  "time_alive": 942,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 10,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 14,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 12,
  "time_alive": 1448,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 22,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 22,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 1,
  "time_alive": 1530,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 6,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 3,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 18,
  "time_alive": 1230,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 14,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 28,
  "time_alive": 788,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 7,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 4,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 10,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 20,
  "time_alive": 1176,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 7,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 6,
  "time_alive": 1496,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 18,
  "time_alive": 1271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 17,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 10,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 28,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 2,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 3,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 6,
  "time_alive": 1467,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 22,
  "time_alive": 1081,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 25,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 2,
  "time_alive": 1543,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 11,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 17,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 4,
  "time_alive": 1501,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 11,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 9,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 21,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 12,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 25,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 26,
  "time_alive": 848,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 6,
  "time_alive": 1436,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 6,
  "time_alive": 1496,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 4,
  "time_alive": 1529,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 14,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 16,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 16,
  "time_alive": 1335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 12,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 29,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 20,
  "time_alive": 1215,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 6,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 7,
  "time_alive": 1428,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 10,
  "time_alive": 1417,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 16,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 7,
  "time_alive": 1492,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 3,
  "time_alive": 1534,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 21,
  "time_alive": 1116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 2,
  "time_alive": 1528,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 19,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 27,
  "time_alive": 550,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 17,
  "time_alive": 1288,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 3,
  "time_alive": 1454,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 23,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 12,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 21,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 25,
  "time_alive": 938,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 18,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 24,
  "time_alive": 1068,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 9,
  "time_alive": 1421,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 11,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 13,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 19,
  "time_alive": 1170,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 14,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 8,
  "time_alive": 1389,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 11,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 13,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 5,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 17,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1505,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 19,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 23,
  "time_alive": 1111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 12,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 15,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 11,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 32,
  "time_alive": 227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 16,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1442,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 16,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 32,
  "time_alive": 234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 28,
  "time_alive": 545,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 18,
  "time_alive": 1342,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1143,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 10,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 32,
  "time_alive": 368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 33,
  "time_alive": 215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 9,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 32,
  "time_alive": 177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 30,
  "time_alive": 402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 2,
  "time_alive": 1500,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 8,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 15,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 26,
  "time_alive": 925,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 20,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 30,
  "time_alive": 327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 28,
  "time_alive": 425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 6,
  "time_alive": 1452,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 29,
  "time_alive": 654,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 10,
  "time_alive": 1407,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 11,
  "time_alive": 1411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 27,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 17,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 1092,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 11,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 1060,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 5,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 6,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 9,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 1151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 17,
  "time_alive": 1267,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 26,
  "time_alive": 632,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 21,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 15,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 1043,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 26,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 5,
  "time_alive": 1529,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 27,
  "time_alive": 713,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 28,
  "time_alive": 425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 17,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 21,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 16,
  "time_alive": 1297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 27,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 3,
  "time_alive": 1523,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 16,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 28,
  "time_alive": 659,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 24,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 30,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 14,
  "time_alive": 1383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 10,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 19,
  "time_alive": 1233,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 25,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 18,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 4,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 26,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 19,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 6,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 14,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 13,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 31,
  "time_alive": 195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 9,
  "time_alive": 1466,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 15,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 10,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 10,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 16,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 30,
  "time_alive": 789,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 22,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 28,
  "time_alive": 537,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 10,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 3,
  "time_alive": 1516,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 10,
  "time_alive": 1451,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 20,
  "time_alive": 1237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 25,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 11,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 20,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 27,
  "time_alive": 929,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 7,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 27,
  "time_alive": 544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 30,
  "time_alive": 269,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 33,
  "time_alive": 137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 30,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 33,
  "time_alive": 83,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 32,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 8,
  "time_alive": 1468,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 29,
  "time_alive": 408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 15,
  "time_alive": 1304,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 10,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 25,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 17,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 16,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 8,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 19,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 23,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 18,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 12,
  "time_alive": 1388,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 30,
  "time_alive": 293,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 13,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 6,
  "time_alive": 1411,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 32,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 18,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 19,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 30,
  "time_alive": 108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 27,
  "time_alive": 887,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 21,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 24,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 30,
  "time_alive": 299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 21,
  "time_alive": 1194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 32,
  "time_alive": 249,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 7,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 13,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 18,
  "time_alive": 1227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 24,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 5,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 19,
  "time_alive": 1243,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 29,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 29,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 12,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 7,
  "time_alive": 1440,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 26,
  "time_alive": 764,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 22,
  "time_alive": 1092,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 19,
  "time_alive": 1195,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 15,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 21,
  "time_alive": 1176,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 19,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 25,
  "time_alive": 859,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 9,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 20,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 13,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 8,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 13,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 31,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 26,
  "time_alive": 807,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 33,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 30,
  "time_alive": 643,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 15,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 23,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 20,
  "time_alive": 1248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 26,
  "time_alive": 739,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 11,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 31,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 29,
  "time_alive": 410,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 33,
  "time_alive": 142,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 28,
  "time_alive": 386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 25,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 20,
  "time_alive": 1177,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 23,
  "time_alive": 1110,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 17,
  "time_alive": 1258,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 13,
  "time_alive": 1405,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 18,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "4bfa377513e8458a990734d901379365:b975205279d84a75983c03301d24754c:c2f4d8d392d642a3baa16a16205b13e9",
  "placement": 15,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 22,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 17,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 13,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 24,
  "time_alive": 918,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 24,
  "time_alive": 966,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 24,
  "time_alive": 850,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 18,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 19,
  "time_alive": 1220,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 33,
  "time_alive": 229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 22,
  "time_alive": 1100,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 29,
  "time_alive": 538,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 24,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 27,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 31,
  "time_alive": 268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 29,
  "time_alive": 303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 29,
  "time_alive": 379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 33,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 25,
  "time_alive": 1071,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 9,
  "time_alive": 1380,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 24,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 31,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 17,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 28,
  "time_alive": 288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 32,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 33,
  "time_alive": 162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 16,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 27,
  "time_alive": 457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 27,
  "time_alive": 429,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 14,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 31,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 25,
  "time_alive": 898,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 20,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 26,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 32,
  "time_alive": 320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 27,
  "time_alive": 406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 28,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 19,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 30,
  "time_alive": 329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 26,
  "time_alive": 764,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 23,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 23,
  "time_alive": 1043,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 21,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 14,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 29,
  "time_alive": 532,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 27,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 31,
  "time_alive": 326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 29,
  "time_alive": 241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6dcaf459-dcd4-4abf-9382-b528728d305f",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 21,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a0c6851c-0183-4b01-ab1a-17526758b927",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 28,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "83b03914-ae36-4069-9149-692a00e06520",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 32,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "81499331-3bf7-460e-9f1a-43ffd171d1c4",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 31,
  "time_alive": 272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d48ef5c-4aad-4aeb-9e88-132ad05073af",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 33,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52243c6b-0a0e-46af-96a8-34fa0abcaa46",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 31,
  "time_alive": 266,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "390d5139-abcf-4373-997c-9c76594a696a",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 24,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "245ef706-1242-45c1-ae4e-78c5788ea989",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 31,
  "time_alive": 385,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "24058fb2-44ff-424f-b803-90873c642617",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 31,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ca04073-efee-49a0-9539-91d5dd18b603",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 29,
  "time_alive": 521,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a63a231-de3b-43bd-917d-e4c32480ae24",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 23,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "018df9d8-8b99-4eea-8d4e-acd274e58685",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 12,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 6,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1521,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 11,
  "time_alive": 1435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 3,
  "time_alive": 1469,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1462,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1493,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 7,
  "time_alive": 1451,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 6,
  "time_alive": 1424,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 1,
  "time_alive": 1479,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 7,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 16,
  "time_alive": 917,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1490,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 4,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 8,
  "time_alive": 1461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 10,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1524,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 11,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 7,
  "time_alive": 1423,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 3,
  "time_alive": 1522,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1507,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 2,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 6,
  "time_alive": 1464,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 31,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 13,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 6,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 1,
  "time_alive": 1506,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 4,
  "time_alive": 1462,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 4,
  "time_alive": 1490,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 3,
  "time_alive": 1480,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 6,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 11,
  "time_alive": 1393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 5,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 1,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 2,
  "time_alive": 1372,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 14,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 7,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 12,
  "time_alive": 1409,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 1,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 22,
  "time_alive": 1075,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 7,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 3,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 1,
  "time_alive": 1523,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 2,
  "time_alive": 1507,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 4,
  "time_alive": 1476,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 16,
  "time_alive": 1272,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 4,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 2,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 3,
  "time_alive": 1504,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 27,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 6,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 15,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 16,
  "time_alive": 1300,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 2,
  "time_alive": 1523,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 5,
  "time_alive": 1433,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 7,
  "time_alive": 1429,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 10,
  "time_alive": 1417,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 1,
  "time_alive": 1372,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 4,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 11,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 9,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 5,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 32,
  "time_alive": 454,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 2,
  "time_alive": 1493,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 17,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 16,
  "time_alive": 1184,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 7,
  "time_alive": 1413,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 3,
  "time_alive": 1478,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 2,
  "time_alive": 1500,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 14,
  "time_alive": 1117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 31,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 3,
  "time_alive": 1498,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 23,
  "time_alive": 1119,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 7,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 3,
  "time_alive": 1492,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 8,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 10,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 25,
  "time_alive": 996,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 15,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 9,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 23,
  "time_alive": 489,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 9,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 23,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 10,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 2,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 14,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 5,
  "time_alive": 1447,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 2,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 17,
  "time_alive": 1151,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 24,
  "time_alive": 1022,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 11,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 11,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 26,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 3,
  "time_alive": 1469,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 31,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 7,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 20,
  "time_alive": 1215,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 7,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 6,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 13,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 15,
  "time_alive": 1242,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 14,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 13,
  "time_alive": 1388,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 3,
  "time_alive": 1494,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 21,
  "time_alive": 587,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 5,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 30,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 4,
  "time_alive": 1486,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 17,
  "time_alive": 1330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 2,
  "time_alive": 1524,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 16,
  "time_alive": 1257,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 11,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 14,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 3,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 14,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 29,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "01156dfc6e11494ea5c976d2a0c0ac04:1e2a90f05f504aa98ea5e02d5680bead:eab9d91c8c084e42978e06d3f6c904c4",
  "placement": 11,
  "time_alive": 1272,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 8,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 22,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 31,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 8,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 20,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 28,
  "time_alive": 446,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 8,
  "time_alive": 1394,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 8,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 4,
  "time_alive": 1437,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 8,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 14,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "3f5282ef105f4da5970667a6e07988f0:7ce93ad59fdd4fd587cdb370c3ba71e6:f3234220ea8a404bb89f66afce721f76",
  "placement": 9,
  "time_alive": 1285,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 16,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 8,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 5,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 21,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 21,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 18,
  "time_alive": 1290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 6,
  "time_alive": 1454,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 12,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 16,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 5,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "0417c403c40a4a119d7372d6a55b4a08:8e9a79684aec42e990c3dca87521ad9b:e6c4db107f054a4d87843bf653e1a840",
  "placement": 15,
  "time_alive": 960,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 18,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 25,
  "time_alive": 1092,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 2,
  "time_alive": 1506,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 13,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 9,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 20,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 18,
  "time_alive": 1151,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 27,
  "time_alive": 840,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 12,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 4,
  "time_alive": 1486,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "71505451c7e64154bf47dca9661d0ebb:7961a2766c47482286b73546d1758150:bbd235432e784221a609b7cb6ef46538",
  "placement": 20,
  "time_alive": 614,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 11,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 15,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 22,
  "time_alive": 1149,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 6,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 24,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 4,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 21,
  "time_alive": 1165,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 29,
  "time_alive": 480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 20,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 6,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 25,
  "time_alive": 949,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "8ae9871e5e3e46b1986fb68cc0120f99:cb698061fbd34f6e84697367d8a534ce:ffb74ac9396d438c9fe157ea08ab4353",
  "placement": 10,
  "time_alive": 1280,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 21,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 10,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 20,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 25,
  "time_alive": 1056,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 8,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 12,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 18,
  "time_alive": 1228,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 26,
  "time_alive": 477,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 12,
  "time_alive": 1389,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "15e34abd4208430fba48d1d584d10c8a:3ec2b56ee7f94ceba75fd4226c149344:cf51b18fd51b4a65b1e8e4fbd5777d68",
  "placement": 6,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 27,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 13,
  "time_alive": 1413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 16,
  "time_alive": 1363,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 18,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 12,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 24,
  "time_alive": 1019,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 9,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 26,
  "time_alive": 822,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 21,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 9,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 8,
  "time_alive": 1438,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "4226aa534dad4ecf95e351f08bf86524:85995ec7044a4450a3c355cf3dd470ff:fc2af77081224a678aaca1c2dfac23d7",
  "placement": 3,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 15,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 27,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 28,
  "time_alive": 372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 9,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 18,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 13,
  "time_alive": 1338,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 12,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 5,
  "time_alive": 1475,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 26,
  "time_alive": 990,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 10,
  "time_alive": 1395,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 23,
  "time_alive": 1079,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "6912e2bf03244d289da3dfc331f845a0:7b6629618f4e44cca3249fea3311c6b3:ca977120f78c40009e055e240b5af540",
  "placement": 12,
  "time_alive": 1202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 18,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 6,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 24,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 17,
  "time_alive": 1237,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 30,
  "time_alive": 289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 27,
  "time_alive": 548,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 28,
  "time_alive": 561,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 8,
  "time_alive": 1402,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 21,
  "time_alive": 1074,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 15,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "42d3b5fbe5404f5185ab41a2a9a99035:ac93a141290349afa522f0ba8ddc3715:beaa7d16ede54d99a370e070a3356a90",
  "placement": 8,
  "time_alive": 1297,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 20,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 5,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 18,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 19,
  "time_alive": 1303,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 25,
  "time_alive": 932,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 17,
  "time_alive": 1253,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 23,
  "time_alive": 1140,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 9,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 13,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 24,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 22,
  "time_alive": 1111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "350ca401553c436caa03a14fe67a55fc:55027c5b7a484a84a1dc6b12b8d8f150:78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 7,
  "time_alive": 1307,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 2,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 20,
  "time_alive": 1170,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 13,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 22,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 16,
  "time_alive": 1268,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 18,
  "time_alive": 1243,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 30,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 12,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 17,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 31,
  "time_alive": 303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 21,
  "time_alive": 1131,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "0673dbeffbce44a5a03872df61251b39:0c43f0c67a8b4bfcaee63098079b2ba3:6d32cf3fbe604ad0b47a0a66eeca2df2",
  "placement": 22,
  "time_alive": 527,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 32,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 26,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 33,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 32,
  "time_alive": 256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 33,
  "time_alive": 173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 27,
  "time_alive": 639,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 24,
  "time_alive": 1127,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 25,
  "time_alive": 830,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 9,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 32,
  "time_alive": 112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 27,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "1ae2f4eff9b34b208c4c8a6522e2d2cc:2363eee7262647a5a65294a336c2727f:4478cf37111c409ebdd2061952ca8707",
  "placement": 5,
  "time_alive": 1345,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 24,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 24,
  "time_alive": 1138,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 32,
  "time_alive": 308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 31,
  "time_alive": 391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 13,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 19,
  "time_alive": 1123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 30,
  "time_alive": 322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 19,
  "time_alive": 1212,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 13,
  "time_alive": 1387,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c:bd1bd44eca13440ba328e80a1d6d1c89:e5578416483641a593b7e1825e99b4c6",
  "placement": 29,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 17,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 17,
  "time_alive": 1342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 27,
  "time_alive": 385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 14,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 29,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 22,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 28,
  "time_alive": 534,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 4,
  "time_alive": 1496,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 23,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 17,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 17,
  "time_alive": 1245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "21e708cc4dae4037b8f1e0a42fa8c2b0:22d114c7a8c148be8ac51f4796b89fc9:a9e2f2debdbb4f19a12731d1d1b15336",
  "placement": 13,
  "time_alive": 1184,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 19,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 14,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 21,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 21,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 15,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 10,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 5,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 24,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 22,
  "time_alive": 1097,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 20,
  "time_alive": 1121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 18,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "2f5e246a94dd41de83009745647a73a0:7bf2c2400be9438e8f7db11896e23ab5:9c567bd2e76b4654a620a66deb8f9bd7",
  "placement": 27,
  "time_alive": 275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 12,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 12,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 30,
  "time_alive": 328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 11,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 26,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 29,
  "time_alive": 386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 19,
  "time_alive": 1275,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 22,
  "time_alive": 1017,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 28,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 23,
  "time_alive": 1012,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 19,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "5a64560f9b054261b52ff507a0a8a665:cbfa6071b14a43108e99c22313431944:e8bbd5545c084dd19c2b6ece7c90330f",
  "placement": 17,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 26,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 26,
  "time_alive": 502,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 15,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 10,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 14,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 20,
  "time_alive": 1104,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 10,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 18,
  "time_alive": 1215,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 20,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "8ae59c207a7f4f06b5ed6fe48cdf3540:b56c72582796457390a26dea9eb234ca:ef3298d16dca4d6b91fcc8f539220537",
  "placement": 18,
  "time_alive": 785,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 30,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 32,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 15,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 26,
  "time_alive": 1014,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 11,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 33,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 15,
  "time_alive": 1301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 11,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 29,
  "time_alive": 693,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 25,
  "time_alive": 517,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 32,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "4b6aa5bc54054db6a8e1a05a945b64d4:5bf2e3ba99fc432f9f932b03495433b0:b59b19aa274c458db95255b0d9553094",
  "placement": 24,
  "time_alive": 484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 7,
  "time_alive": 1451,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 17,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 29,
  "time_alive": 421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 27,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 31,
  "time_alive": 268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 31,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 31,
  "time_alive": 137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 32,
  "time_alive": 140,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 22,
  "time_alive": 1013,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 26,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "0eebea55a5554a8fba1ee08fe24adf00:af32d73238a446b18472d066154d606a:b5507b4cd7fe43d1b49701e00ab8231e",
  "placement": 19,
  "time_alive": 737,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 10,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 19,
  "time_alive": 1222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 14,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 30,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 28,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 25,
  "time_alive": 855,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 29,
  "time_alive": 475,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 21,
  "time_alive": 1065,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 16,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 28,
  "time_alive": 415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e:abd8d35f55f74d45825bfb0442e0ab84:f2883d2175b441d59e9af9ff95924b22",
  "placement": 31,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 23,
  "time_alive": 1052,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 9,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 25,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 16,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 31,
  "time_alive": 506,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 23,
  "time_alive": 1065,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 25,
  "time_alive": 911,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 27,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 15,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 30,
  "time_alive": 341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 28,
  "time_alive": 756,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "0273c1d21a0a4c05bba33d9a639b9a18:32018a827e85492ba143f5755b998c36:a9bbbea6020b4cbca414b68ed4eef4c3",
  "placement": 25,
  "time_alive": 423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 28,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 28,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 29,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 33,
  "time_alive": 231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 23,
  "time_alive": 1066,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 32,
  "time_alive": 224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 10,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 13,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 31,
  "time_alive": 245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 27,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 30,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "2521536d70924ae98240e2e20c140ccc:752fbff5aafa4d87bea75749aa07a8b4:d47fe1840d1f4850aa34cf70b2d31465",
  "placement": 28,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6:9c8cb45c3e2d4f808b6f3c618574f6ea:b83353b35d494d1a94b573fd09007d9c",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6:9c8cb45c3e2d4f808b6f3c618574f6ea:b83353b35d494d1a94b573fd09007d9c",
  "placement": 19,
  "time_alive": 1259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6:9c8cb45c3e2d4f808b6f3c618574f6ea:b83353b35d494d1a94b573fd09007d9c",
  "placement": 23,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6:9c8cb45c3e2d4f808b6f3c618574f6ea:b83353b35d494d1a94b573fd09007d9c",
  "placement": 30,
  "time_alive": 583,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6:9c8cb45c3e2d4f808b6f3c618574f6ea:b83353b35d494d1a94b573fd09007d9c",
  "placement": 19,
  "time_alive": 1193,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "8b5f32730b6c497fbe05d182298c72d6:9c8cb45c3e2d4f808b6f3c618574f6ea:b83353b35d494d1a94b573fd09007d9c",
  "placement": 22,
  "time_alive": 1145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9f7b4e0-9e64-4262-947e-ec5e83a823f9",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 25,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdd4b556-a02f-478e-9014-a086097b601e",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 29,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3d974aed-b7fb-45df-b59d-f16560b2552d",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 24,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8853019b-0eea-44ab-a889-f669988e12b2",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 28,
  "time_alive": 474,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "837c4090-b2c5-450f-a450-895108911473",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 19,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e8b41d2e-f3ca-4730-8fb9-1814ef3319a9",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 26,
  "time_alive": 845,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d2016264-3c8a-4c02-952e-7b0bcaba0c84",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 32,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a2642599-dc72-4459-af5b-e7858ebcc014",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 30,
  "time_alive": 467,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8fc96fda-a9ad-4843-ab4d-beaa9d5f7e97",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 19,
  "time_alive": 1188,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a007ab68-fccb-4b26-a40c-b74bc906535c",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 29,
  "time_alive": 402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "268e3910-9e4a-4624-9f76-55ecedf8abc0",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 24,
  "time_alive": 979,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf232831-8179-4898-bae6-31027f1179fd",
  "team_id": "1b28243879034a55b33ca26ae39a5a2a:aa799c6214d5419f9c43b8372cf15284:d2ff6803ffb449fc86bfc5a7962d11f4",
  "placement": 30,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1501,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 4,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 22,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 19,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1512,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 4,
  "time_alive": 1449,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 10,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 10,
  "time_alive": 1437,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1478,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 26,
  "time_alive": 564,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 21,
  "time_alive": 1123,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 8,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 5,
  "time_alive": 1471,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 21,
  "time_alive": 1205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 9,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 10,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 14,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 1,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 4,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 6,
  "time_alive": 1445,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 21,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 3,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 3,
  "time_alive": 1514,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 9,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 8,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 14,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 1,
  "time_alive": 1510,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 18,
  "time_alive": 1219,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 6,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 24,
  "time_alive": 1120,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 2,
  "time_alive": 1487,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 3,
  "time_alive": 1502,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 12,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 18,
  "time_alive": 1318,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 5,
  "time_alive": 1492,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 24,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 14,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1492,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 15,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 28,
  "time_alive": 865,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 2,
  "time_alive": 1478,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 29,
  "time_alive": 800,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 1,
  "time_alive": 1487,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 2,
  "time_alive": 1508,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 6,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 7,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 23,
  "time_alive": 757,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 33,
  "time_alive": 342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 10,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 32,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 3,
  "time_alive": 1493,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 5,
  "time_alive": 1450,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 1,
  "time_alive": 1478,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 25,
  "time_alive": 1081,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 21,
  "time_alive": 1144,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 8,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 4,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 12,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 12,
  "time_alive": 1413,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 12,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 1,
  "time_alive": 1509,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 28,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 26,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 27,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 7,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 5,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 7,
  "time_alive": 1432,
  "elims": 6,
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
    