const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "6c28b91513a04d4f9ad1a1347b8a32b5:94f304bf1f184abbbe1d693f3f14ecf3:a29614b974844a82b1fec5cdda5bf750",
  "placement": 10,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "6c28b91513a04d4f9ad1a1347b8a32b5:94f304bf1f184abbbe1d693f3f14ecf3:a29614b974844a82b1fec5cdda5bf750",
  "placement": 27,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "6c28b91513a04d4f9ad1a1347b8a32b5:94f304bf1f184abbbe1d693f3f14ecf3:a29614b974844a82b1fec5cdda5bf750",
  "placement": 29,
  "time_alive": 635,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "6c28b91513a04d4f9ad1a1347b8a32b5:94f304bf1f184abbbe1d693f3f14ecf3:a29614b974844a82b1fec5cdda5bf750",
  "placement": 20,
  "time_alive": 1085,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "72af70f71230400796da6baa73f9a515:a625dcc6aaef48f88fbc2da7ddca20d8:e1d6f0bd1961425fa7e8f1534bb521e4",
  "placement": 30,
  "time_alive": 378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "72af70f71230400796da6baa73f9a515:a625dcc6aaef48f88fbc2da7ddca20d8:e1d6f0bd1961425fa7e8f1534bb521e4",
  "placement": 31,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "72af70f71230400796da6baa73f9a515:a625dcc6aaef48f88fbc2da7ddca20d8:e1d6f0bd1961425fa7e8f1534bb521e4",
  "placement": 22,
  "time_alive": 1117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "72af70f71230400796da6baa73f9a515:a625dcc6aaef48f88fbc2da7ddca20d8:e1d6f0bd1961425fa7e8f1534bb521e4",
  "placement": 24,
  "time_alive": 945,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "72af70f71230400796da6baa73f9a515:a625dcc6aaef48f88fbc2da7ddca20d8:e1d6f0bd1961425fa7e8f1534bb521e4",
  "placement": 8,
  "time_alive": 1425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "72af70f71230400796da6baa73f9a515:a625dcc6aaef48f88fbc2da7ddca20d8:e1d6f0bd1961425fa7e8f1534bb521e4",
  "placement": 23,
  "time_alive": 976,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa:3cdbaa407bbd47fa9b95c8b1fc4986b6:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 20,
  "time_alive": 1132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa:3cdbaa407bbd47fa9b95c8b1fc4986b6:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 17,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa:3cdbaa407bbd47fa9b95c8b1fc4986b6:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 30,
  "time_alive": 785,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa:3cdbaa407bbd47fa9b95c8b1fc4986b6:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 18,
  "time_alive": 1262,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa:3cdbaa407bbd47fa9b95c8b1fc4986b6:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 33,
  "time_alive": 68,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "3b92e62f76d1400680019f34e6edb3aa:3cdbaa407bbd47fa9b95c8b1fc4986b6:a67c2698eb8341a09c4b4755e74c24f4",
  "placement": 22,
  "time_alive": 991,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "8e2b483988414b969dd5c2157a769d83:932ff032682a4d6ba19957a703b60878:aa0334a3fb3045c191f791eb8761397a",
  "placement": 31,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "8e2b483988414b969dd5c2157a769d83:932ff032682a4d6ba19957a703b60878:aa0334a3fb3045c191f791eb8761397a",
  "placement": 21,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "8e2b483988414b969dd5c2157a769d83:932ff032682a4d6ba19957a703b60878:aa0334a3fb3045c191f791eb8761397a",
  "placement": 12,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "8e2b483988414b969dd5c2157a769d83:932ff032682a4d6ba19957a703b60878:aa0334a3fb3045c191f791eb8761397a",
  "placement": 31,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "8e2b483988414b969dd5c2157a769d83:932ff032682a4d6ba19957a703b60878:aa0334a3fb3045c191f791eb8761397a",
  "placement": 31,
  "time_alive": 269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "8e2b483988414b969dd5c2157a769d83:932ff032682a4d6ba19957a703b60878:aa0334a3fb3045c191f791eb8761397a",
  "placement": 33,
  "time_alive": 81,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "185acc9fb67045cabde4f82ae413f34d:6531e0e49dc748e4a86a2fe2f35b3802:7b30152750b14335af7c4c9341343b77",
  "placement": 26,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "185acc9fb67045cabde4f82ae413f34d:6531e0e49dc748e4a86a2fe2f35b3802:7b30152750b14335af7c4c9341343b77",
  "placement": 33,
  "time_alive": 130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "185acc9fb67045cabde4f82ae413f34d:6531e0e49dc748e4a86a2fe2f35b3802:7b30152750b14335af7c4c9341343b77",
  "placement": 32,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "185acc9fb67045cabde4f82ae413f34d:6531e0e49dc748e4a86a2fe2f35b3802:7b30152750b14335af7c4c9341343b77",
  "placement": 15,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "185acc9fb67045cabde4f82ae413f34d:6531e0e49dc748e4a86a2fe2f35b3802:7b30152750b14335af7c4c9341343b77",
  "placement": 24,
  "time_alive": 983,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "185acc9fb67045cabde4f82ae413f34d:6531e0e49dc748e4a86a2fe2f35b3802:7b30152750b14335af7c4c9341343b77",
  "placement": 32,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "04069f351b4340258b119af266b8b961:333d674223fe459d886ef3b868243b70:ff69a6922e654e3ab594a38139055d1a",
  "placement": 19,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "04069f351b4340258b119af266b8b961:333d674223fe459d886ef3b868243b70:ff69a6922e654e3ab594a38139055d1a",
  "placement": 27,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "04069f351b4340258b119af266b8b961:333d674223fe459d886ef3b868243b70:ff69a6922e654e3ab594a38139055d1a",
  "placement": 24,
  "time_alive": 949,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "04069f351b4340258b119af266b8b961:333d674223fe459d886ef3b868243b70:ff69a6922e654e3ab594a38139055d1a",
  "placement": 29,
  "time_alive": 747,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "04069f351b4340258b119af266b8b961:333d674223fe459d886ef3b868243b70:ff69a6922e654e3ab594a38139055d1a",
  "placement": 32,
  "time_alive": 175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "04069f351b4340258b119af266b8b961:333d674223fe459d886ef3b868243b70:ff69a6922e654e3ab594a38139055d1a",
  "placement": 28,
  "time_alive": 311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1d84ff89-ff67-4ca4-8ba1-db393808d7a0",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 32,
  "time_alive": 255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27a737ee-1d8c-480a-a76c-cf5d0392d060",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 32,
  "time_alive": 179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2ed3a8d1-35f0-455a-99c9-af58bf720c51",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 23,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e0bf10ff-4956-4369-8c8a-db148bd29a91",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 25,
  "time_alive": 896,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c90e9e1-7f84-4fdb-95b2-75eabdc9cc3c",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 25,
  "time_alive": 969,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0be4dd12-c30e-4e39-9b9d-793687c2d65d",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 29,
  "time_alive": 289,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 3,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 3,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 3,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 1,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 4,
  "time_alive": 1437,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 1,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 12,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 2,
  "time_alive": 1488,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 10,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 5,
  "time_alive": 1426,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 7,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 2,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 18,
  "time_alive": 1290,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 19,
  "time_alive": 1292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 1,
  "time_alive": 1464,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 7,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 3,
  "time_alive": 1454,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 8,
  "time_alive": 1436,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 4,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 1,
  "time_alive": 1488,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 8,
  "time_alive": 1387,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 10,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 1,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 32,
  "time_alive": 115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 11,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 6,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 2,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 15,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 11,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 7,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 9,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 5,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 24,
  "time_alive": 1059,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 4,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 2,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 16,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 10,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 5,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 6,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1400,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 5,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 2,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 4,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 4,
  "time_alive": 1427,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 21,
  "time_alive": 1149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 28,
  "time_alive": 623,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 17,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 7,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 9,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 17,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 2,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 5,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 21,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 16,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 10,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 12,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 20,
  "time_alive": 1217,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 12,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 3,
  "time_alive": 1477,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 20,
  "time_alive": 1213,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 15,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 23,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 3,
  "time_alive": 1444,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 6,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 26,
  "time_alive": 601,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 15,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 29,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 6,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 8,
  "time_alive": 1406,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 14,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 1,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 22,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 29,
  "time_alive": 424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 19,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 23,
  "time_alive": 810,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 23,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 21,
  "time_alive": 1163,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 29,
  "time_alive": 681,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 12,
  "time_alive": 1346,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 14,
  "time_alive": 1343,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 10,
  "time_alive": 1405,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 24,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 23,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 30,
  "time_alive": 484,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 11,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 10,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 6,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 31,
  "time_alive": 818,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 8,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 7,
  "time_alive": 1390,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 30,
  "time_alive": 418,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 30,
  "time_alive": 478,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 19,
  "time_alive": 1120,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:8fd8453465e8442dac28469f46816ca4:f0066109ce1149d0970c6d835cfac019",
  "placement": 6,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:8fd8453465e8442dac28469f46816ca4:f0066109ce1149d0970c6d835cfac019",
  "placement": 24,
  "time_alive": 1086,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:8fd8453465e8442dac28469f46816ca4:f0066109ce1149d0970c6d835cfac019",
  "placement": 16,
  "time_alive": 1311,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:8fd8453465e8442dac28469f46816ca4:f0066109ce1149d0970c6d835cfac019",
  "placement": 9,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:8fd8453465e8442dac28469f46816ca4:f0066109ce1149d0970c6d835cfac019",
  "placement": 32,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:8fd8453465e8442dac28469f46816ca4:f0066109ce1149d0970c6d835cfac019",
  "placement": 25,
  "time_alive": 625,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 14,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 26,
  "time_alive": 878,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 14,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 18,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 20,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "5102cc29f0814c6fb8d0ee4e20781dce:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 9,
  "time_alive": 1410,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "0fcade72c5dc48338d23e9f8a834fda0:3d0e78fc58ae4bd8a9c52f6fb0bce3e4:8065b091e641465dac0ffc8bf088fa43",
  "placement": 22,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "0fcade72c5dc48338d23e9f8a834fda0:3d0e78fc58ae4bd8a9c52f6fb0bce3e4:8065b091e641465dac0ffc8bf088fa43",
  "placement": 7,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "0fcade72c5dc48338d23e9f8a834fda0:3d0e78fc58ae4bd8a9c52f6fb0bce3e4:8065b091e641465dac0ffc8bf088fa43",
  "placement": 13,
  "time_alive": 1354,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "0fcade72c5dc48338d23e9f8a834fda0:3d0e78fc58ae4bd8a9c52f6fb0bce3e4:8065b091e641465dac0ffc8bf088fa43",
  "placement": 27,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "0fcade72c5dc48338d23e9f8a834fda0:3d0e78fc58ae4bd8a9c52f6fb0bce3e4:8065b091e641465dac0ffc8bf088fa43",
  "placement": 21,
  "time_alive": 1142,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "0fcade72c5dc48338d23e9f8a834fda0:3d0e78fc58ae4bd8a9c52f6fb0bce3e4:8065b091e641465dac0ffc8bf088fa43",
  "placement": 12,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "0f96d1a2fb084b96967b861dbad8b111:6f0c6edecb2b4e63b3c701931725969b:71a23f93ace4416b93f291e33a773912",
  "placement": 32,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "0f96d1a2fb084b96967b861dbad8b111:6f0c6edecb2b4e63b3c701931725969b:71a23f93ace4416b93f291e33a773912",
  "placement": 18,
  "time_alive": 1320,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "0f96d1a2fb084b96967b861dbad8b111:6f0c6edecb2b4e63b3c701931725969b:71a23f93ace4416b93f291e33a773912",
  "placement": 15,
  "time_alive": 1320,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "0f96d1a2fb084b96967b861dbad8b111:6f0c6edecb2b4e63b3c701931725969b:71a23f93ace4416b93f291e33a773912",
  "placement": 26,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "0f96d1a2fb084b96967b861dbad8b111:6f0c6edecb2b4e63b3c701931725969b:71a23f93ace4416b93f291e33a773912",
  "placement": 13,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "0f96d1a2fb084b96967b861dbad8b111:6f0c6edecb2b4e63b3c701931725969b:71a23f93ace4416b93f291e33a773912",
  "placement": 13,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 14,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 9,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 13,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 26,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "181beaa62fab430596ecc32ac20c6491:939ac1586e384d1c8363e6ee49124e52:dba719cb87f34cc4874f7437e94a46e7",
  "placement": 11,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 8,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 11,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 18,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 25,
  "time_alive": 949,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "229b232a492a4590a309516d98bcdedc:53876b274ed94a7ebdce5544749e000f:d32f85a70f4542548b43566f23bb4b43",
  "placement": 27,
  "time_alive": 556,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 5,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 17,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 21,
  "time_alive": 1135,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 16,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 16,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "3a768c2780564ae981d69b3c1e5ec81f:9ead84f6ac5d4461ad15efed052b3658:f486066c22ad4ba7be004a9b65d88866",
  "placement": 33,
  "time_alive": 68,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 13,
  "time_alive": 1351,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 25,
  "time_alive": 1072,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 26,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 19,
  "time_alive": 1228,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 29,
  "time_alive": 533,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:854c7e22b8434780b1da33572a6ca15d:a06d4a7ff632456db1bf3de6d2840a1b",
  "placement": 31,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "353072a5b8d3419e8aadb98c5d2a9806:6678f9ac1c3a41268cc5c00bdcb58d73:88e8db94e6484180bfe836f3f1d6af2f",
  "placement": 25,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "353072a5b8d3419e8aadb98c5d2a9806:6678f9ac1c3a41268cc5c00bdcb58d73:88e8db94e6484180bfe836f3f1d6af2f",
  "placement": 28,
  "time_alive": 696,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "353072a5b8d3419e8aadb98c5d2a9806:6678f9ac1c3a41268cc5c00bdcb58d73:88e8db94e6484180bfe836f3f1d6af2f",
  "placement": 32,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "353072a5b8d3419e8aadb98c5d2a9806:6678f9ac1c3a41268cc5c00bdcb58d73:88e8db94e6484180bfe836f3f1d6af2f",
  "placement": 24,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "353072a5b8d3419e8aadb98c5d2a9806:6678f9ac1c3a41268cc5c00bdcb58d73:88e8db94e6484180bfe836f3f1d6af2f",
  "placement": 31,
  "time_alive": 336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "353072a5b8d3419e8aadb98c5d2a9806:6678f9ac1c3a41268cc5c00bdcb58d73:88e8db94e6484180bfe836f3f1d6af2f",
  "placement": 4,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 26,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 12,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 11,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 31,
  "time_alive": 394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 27,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 20,
  "time_alive": 1087,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "a3d810d9e7554c6eaf3b180a76986e1a:d4eea1f0eebe462493f329d62c900c7c:d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 17,
  "time_alive": 1311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "a3d810d9e7554c6eaf3b180a76986e1a:d4eea1f0eebe462493f329d62c900c7c:d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 27,
  "time_alive": 789,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "a3d810d9e7554c6eaf3b180a76986e1a:d4eea1f0eebe462493f329d62c900c7c:d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 25,
  "time_alive": 911,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "a3d810d9e7554c6eaf3b180a76986e1a:d4eea1f0eebe462493f329d62c900c7c:d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 8,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "a3d810d9e7554c6eaf3b180a76986e1a:d4eea1f0eebe462493f329d62c900c7c:d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 15,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "a3d810d9e7554c6eaf3b180a76986e1a:d4eea1f0eebe462493f329d62c900c7c:d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 30,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 30,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 30,
  "time_alive": 213,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 28,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 25,
  "time_alive": 1009,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 24,
  "time_alive": 1071,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "cc4cb027072649bdbc255765b2d2026b:e6eb3d526fb642b6b56e91e763a7aa66:fea76287335e4c77a90f149f058aa67e",
  "placement": 18,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "91732c96e29c400684f468671badbfed:cdc62c7e029541599d7d2dc147063c0c:e8a0b3c295d34e9a8cf87e575ee7b878",
  "placement": 19,
  "time_alive": 1269,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "91732c96e29c400684f468671badbfed:cdc62c7e029541599d7d2dc147063c0c:e8a0b3c295d34e9a8cf87e575ee7b878",
  "placement": 16,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "91732c96e29c400684f468671badbfed:cdc62c7e029541599d7d2dc147063c0c:e8a0b3c295d34e9a8cf87e575ee7b878",
  "placement": 22,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "91732c96e29c400684f468671badbfed:cdc62c7e029541599d7d2dc147063c0c:e8a0b3c295d34e9a8cf87e575ee7b878",
  "placement": 23,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "91732c96e29c400684f468671badbfed:cdc62c7e029541599d7d2dc147063c0c:e8a0b3c295d34e9a8cf87e575ee7b878",
  "placement": 23,
  "time_alive": 1076,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "91732c96e29c400684f468671badbfed:cdc62c7e029541599d7d2dc147063c0c:e8a0b3c295d34e9a8cf87e575ee7b878",
  "placement": 28,
  "time_alive": 475,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "4a368bc629a5429cae564e37d28649c3:c68ee0b3025249b5bdc6010a7876ca8d:d2e520a33ef74f42832f265559dd393b",
  "placement": 28,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "4a368bc629a5429cae564e37d28649c3:c68ee0b3025249b5bdc6010a7876ca8d:d2e520a33ef74f42832f265559dd393b",
  "placement": 20,
  "time_alive": 1276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "4a368bc629a5429cae564e37d28649c3:c68ee0b3025249b5bdc6010a7876ca8d:d2e520a33ef74f42832f265559dd393b",
  "placement": 19,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "4a368bc629a5429cae564e37d28649c3:c68ee0b3025249b5bdc6010a7876ca8d:d2e520a33ef74f42832f265559dd393b",
  "placement": 33,
  "time_alive": 192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "4a368bc629a5429cae564e37d28649c3:c68ee0b3025249b5bdc6010a7876ca8d:d2e520a33ef74f42832f265559dd393b",
  "placement": 22,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "4a368bc629a5429cae564e37d28649c3:c68ee0b3025249b5bdc6010a7876ca8d:d2e520a33ef74f42832f265559dd393b",
  "placement": 15,
  "time_alive": 1325,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "1b0014a4acb44790bac196c0a3b90d84:b36f4dc850cd4a85b5b1517751b52e89:e100a0900c074a8d86c0441d7f4dace8",
  "placement": 33,
  "time_alive": 67,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "1b0014a4acb44790bac196c0a3b90d84:b36f4dc850cd4a85b5b1517751b52e89:e100a0900c074a8d86c0441d7f4dace8",
  "placement": 32,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "1b0014a4acb44790bac196c0a3b90d84:b36f4dc850cd4a85b5b1517751b52e89:e100a0900c074a8d86c0441d7f4dace8",
  "placement": 31,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "1b0014a4acb44790bac196c0a3b90d84:b36f4dc850cd4a85b5b1517751b52e89:e100a0900c074a8d86c0441d7f4dace8",
  "placement": 28,
  "time_alive": 426,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "1b0014a4acb44790bac196c0a3b90d84:b36f4dc850cd4a85b5b1517751b52e89:e100a0900c074a8d86c0441d7f4dace8",
  "placement": 17,
  "time_alive": 1301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "1b0014a4acb44790bac196c0a3b90d84:b36f4dc850cd4a85b5b1517751b52e89:e100a0900c074a8d86c0441d7f4dace8",
  "placement": 22,
  "time_alive": 1029,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "267ff62f07074aceae2b022174b719bc:7541b266f96c4aaf8636f24fc6e99da7:ce5405cac26642a797168defdc5a1926",
  "placement": 21,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "267ff62f07074aceae2b022174b719bc:7541b266f96c4aaf8636f24fc6e99da7:ce5405cac26642a797168defdc5a1926",
  "placement": 31,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "267ff62f07074aceae2b022174b719bc:7541b266f96c4aaf8636f24fc6e99da7:ce5405cac26642a797168defdc5a1926",
  "placement": 33,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "267ff62f07074aceae2b022174b719bc:7541b266f96c4aaf8636f24fc6e99da7:ce5405cac26642a797168defdc5a1926",
  "placement": 17,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "267ff62f07074aceae2b022174b719bc:7541b266f96c4aaf8636f24fc6e99da7:ce5405cac26642a797168defdc5a1926",
  "placement": 18,
  "time_alive": 1276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "267ff62f07074aceae2b022174b719bc:7541b266f96c4aaf8636f24fc6e99da7:ce5405cac26642a797168defdc5a1926",
  "placement": 24,
  "time_alive": 632,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "dc186fb4-aa0f-4e0e-9484-964607a50edf",
  "team_id": "36737831e5c742dbb03718b61b694733:d323e21b29e3462ca402616d474aff71:f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 29,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b0c65bb-7d4e-4320-972a-e1b9f23e286b",
  "team_id": "36737831e5c742dbb03718b61b694733:d323e21b29e3462ca402616d474aff71:f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 33,
  "time_alive": 97,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "16590f2f-872c-45ed-8303-e69255654bc0",
  "team_id": "36737831e5c742dbb03718b61b694733:d323e21b29e3462ca402616d474aff71:f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "fdfa38a0-ee3c-46df-9364-4d0146c0e2e0",
  "team_id": "36737831e5c742dbb03718b61b694733:d323e21b29e3462ca402616d474aff71:f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 32,
  "time_alive": 213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e64faa9-f5fc-402a-b343-7a01529238cd",
  "team_id": "36737831e5c742dbb03718b61b694733:d323e21b29e3462ca402616d474aff71:f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 33,
  "time_alive": 93,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "491d3711-283d-4a4c-ae2f-ee47649fa103",
  "team_id": "36737831e5c742dbb03718b61b694733:d323e21b29e3462ca402616d474aff71:f7605e17e41244b9bd185a2b6f7d0452",
  "placement": 29,
  "time_alive": 400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 8,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 2,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 19,
  "time_alive": 1164,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 7,
  "time_alive": 1409,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 3,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 3,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 4,
  "time_alive": 1447,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 30,
  "time_alive": 732,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 16,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 14,
  "time_alive": 1312,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 12,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "22b05da17e9b460d9874e6426f271e45:4b32c4b7fb8944d3a4527f48c2a2d62b:6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 2,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 4,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 18,
  "time_alive": 1228,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 9,
  "time_alive": 1415,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 1,
  "time_alive": 1469,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 1,
  "time_alive": 1457,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 9,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 10,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 24,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 4,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 1,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 15,
  "time_alive": 1302,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:9f26462a3da649aab1fd7426163faefc:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 5,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 30,
  "time_alive": 149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 6,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 1,
  "time_alive": 1464,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 33,
  "time_alive": 67,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 32,
  "time_alive": 435,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 25,
  "time_alive": 973,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 3,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 5,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 31,
  "time_alive": 155,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 10,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 1,
  "time_alive": 1479,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd:1b57112f8bea4fe28de710fabfed01bf:5aa562b6dd86457499166365359de823",
  "placement": 11,
  "time_alive": 1318,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 6,
  "time_alive": 1396,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 1,
  "time_alive": 1517,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 6,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 23,
  "time_alive": 1097,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 8,
  "time_alive": 1375,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 21,
  "time_alive": 1139,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 27,
  "time_alive": 453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 26,
  "time_alive": 925,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 19,
  "time_alive": 1211,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 27,
  "time_alive": 746,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 2,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "2970c129b41d4373a875cea459c1a19c:3a99d915aff54fbe821c0335cd3a7199:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 7,
  "time_alive": 1360,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 1,
  "time_alive": 1468,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 12,
  "time_alive": 1350,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 8,
  "time_alive": 1419,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 12,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 28,
  "time_alive": 754,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 27,
  "time_alive": 770,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 28,
  "time_alive": 429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 7,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 8,
  "time_alive": 1388,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 33,
  "time_alive": 87,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 3,
  "time_alive": 1454,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "399286cdb88c4a68b27d94280db11941:5abd6282fc164a62a8503dee6781a41f:826b69ac0c6e48b88db3d6286b370bff",
  "placement": 16,
  "time_alive": 1216,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 19,
  "time_alive": 1260,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 4,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 16,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 19,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 5,
  "time_alive": 1444,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 17,
  "time_alive": 1290,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 11,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 3,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 19,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 11,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 20,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 31,
  "time_alive": 701,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 4,
  "time_alive": 1454,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 13,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 2,
  "time_alive": 1487,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 21,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 17,
  "time_alive": 1251,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 7,
  "time_alive": 1426,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "6cd37ba580194a39a83a3f4aaf55e209:7d81d175b22d4ac385bf88fbb98b7257:941f52e5d8fe425ea876b547b6a177ce",
  "placement": 4,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 17,
  "time_alive": 1297,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 22,
  "time_alive": 1117,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 21,
  "time_alive": 1157,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 32,
  "time_alive": 122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 5,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 1,
  "time_alive": 1482,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 9,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 8,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 33,
  "time_alive": 92,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 26,
  "time_alive": 785,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 6,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:9b920a0684234c9e9b10b996ec6ea026:b0a7e840560e4b79b4483afd02c63237",
  "placement": 3,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 16,
  "time_alive": 1304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 8,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 13,
  "time_alive": 1386,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 24,
  "time_alive": 915,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 10,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 6,
  "time_alive": 1433,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 20,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 1,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 9,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 7,
  "time_alive": 1374,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 14,
  "time_alive": 1311,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:bed2db2fc79740fa8a6571827787c62d",
  "placement": 12,
  "time_alive": 1303,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 13,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 4,
  "time_alive": 1404,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 2,
  "time_alive": 1482,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 17,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 17,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 7,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 9,
  "time_alive": 1414,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 18,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 18,
  "time_alive": 1273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 25,
  "time_alive": 484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 29,
  "time_alive": 424,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 9,
  "time_alive": 1382,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 17,
  "time_alive": 1299,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 8,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 23,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 18,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 5,
  "time_alive": 1418,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 12,
  "time_alive": 1332,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 16,
  "time_alive": 1285,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44:7548b39fc9a74c84aa9dadd3c8b844db:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 1,
  "time_alive": 1443,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 11,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 7,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 5,
  "time_alive": 1441,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 5,
  "time_alive": 1438,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 6,
  "time_alive": 1391,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 13,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 16,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 12,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 30,
  "time_alive": 162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 18,
  "time_alive": 1214,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 26,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa:ca8288e8ac2b4cedbe537c52af6509d9:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 31,
  "time_alive": 236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 5,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 24,
  "time_alive": 1085,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 14,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 2,
  "time_alive": 1469,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 24,
  "time_alive": 987,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 15,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 6,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 4,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 22,
  "time_alive": 990,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 31,
  "time_alive": 355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 13,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "185e2699a4c3491ab36918670d09717b:25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952",
  "placement": 10,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 2,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 16,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 31,
  "time_alive": 223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 12,
  "time_alive": 1338,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 20,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 25,
  "time_alive": 962,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 11,
  "time_alive": 1381,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 13,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 11,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 22,
  "time_alive": 1093,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 23,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 12,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 15,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 11,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 17,
  "time_alive": 1262,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 2,
  "time_alive": 1504,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 22,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 1,
  "time_alive": 1462,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 13,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 20,
  "time_alive": 1077,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "5ad3c078f6564007b6b6ac541fa14931:5b9c44b8c24447c5b5314b2e4a6db887:b1b1e484fc484d88a713c68be3c9c6ba",
  "placement": 21,
  "time_alive": 1109,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 9,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 15,
  "time_alive": 1321,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 2,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 25,
  "time_alive": 881,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 22,
  "time_alive": 1097,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 7,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 8,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 9,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 24,
  "time_alive": 942,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 4,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 27,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "6eeb88fef202442c9645a9609e557e87:a871de2181ba402eb4e506adefca8fd4:f2a3b26df9514fac90bf56304a512f62",
  "placement": 20,
  "time_alive": 1165,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 20,
  "time_alive": 1202,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 13,
  "time_alive": 1339,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 30,
  "time_alive": 380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 4,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 18,
  "time_alive": 1297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 32,
  "time_alive": 212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 22,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 19,
  "time_alive": 1234,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 2,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 5,
  "time_alive": 1398,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 32,
  "time_alive": 121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "84cc7bf1a30c4e90a537878cb8089c3a:8d533832b5b64108962748e9d1c34fef:a0c85adce26c4808972bcfb983576ed2",
  "placement": 32,
  "time_alive": 224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 11,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 17,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 26,
  "time_alive": 684,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 23,
  "time_alive": 1096,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 18,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 15,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 10,
  "time_alive": 1384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 6,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 2,
  "time_alive": 1448,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 22,
  "time_alive": 967,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:3aa14ab8f1d64ac5a02c5a7559362a6c:8cde1a0c6a60407da0197979da606a67",
  "placement": 26,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 7,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 20,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 11,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 14,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 16,
  "time_alive": 1297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 12,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 6,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 14,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 25,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 5,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "93fe4782684147d4a2f4c77276b179c4:a305affeb6ed4ba28db4e6907362b0dd:ba838fd3653f42399d8f8298b1abbf62",
  "placement": 14,
  "time_alive": 1271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 24,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 10,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 7,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 10,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 20,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 10,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 7,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 16,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 15,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 23,
  "time_alive": 1032,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 25,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "4ca98f4f36174ff28a37dab540fff22c:82210ca40af74bbebe424195c4954349:a444846fa45d4206878cb789a629c126",
  "placement": 6,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 14,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 29,
  "time_alive": 246,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 25,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 28,
  "time_alive": 337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 15,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 23,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 23,
  "time_alive": 1088,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 12,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 9,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 23,
  "time_alive": 961,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:8baf28eab51548e69232d03509c13382",
  "placement": 23,
  "time_alive": 1082,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 15,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 5,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 10,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 22,
  "time_alive": 1100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 30,
  "time_alive": 713,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 22,
  "time_alive": 1061,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 21,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 25,
  "time_alive": 937,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 3,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 16,
  "time_alive": 1284,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 21,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:e84714dde0e6403da707894cc96bc7f9",
  "placement": 30,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 27,
  "time_alive": 455,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 16,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 4,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 3,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 25,
  "time_alive": 953,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 29,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 19,
  "time_alive": 1318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 14,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 21,
  "time_alive": 1083,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 18,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "205de81f5e7d4171b4433f1d0e2c5ece:84e34469503843a599c12020628b918a:ac3ad646c3034049a4b6b952730d5632",
  "placement": 19,
  "time_alive": 1184,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 9,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 28,
  "time_alive": 765,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 21,
  "time_alive": 1106,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 26,
  "time_alive": 827,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 14,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 29,
  "time_alive": 789,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 18,
  "time_alive": 1270,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 20,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 8,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "951acca5846d45dfaf7cf8ada5c56fa1:acc9309a24ff411581a753aa2054fd7c:b5126124813b4a168347e9119236840d",
  "placement": 9,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 12,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 30,
  "time_alive": 191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 32,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 19,
  "time_alive": 1229,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 13,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 31,
  "time_alive": 287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 24,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 20,
  "time_alive": 1217,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 11,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 6,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 28,
  "time_alive": 654,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "47f7557b1cae48dcb4deee8fdbcbb365:580f8a2593154c4d818334435b1e2d13:a2f0ca0cce2d4d3c878d529d324beb58",
  "placement": 24,
  "time_alive": 1048,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 26,
  "time_alive": 515,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 26,
  "time_alive": 471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 18,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 17,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 21,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 12,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 11,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 31,
  "time_alive": 390,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 10,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 22,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 4,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b:ce56e00886754c04a2115573d6ce0e03",
  "placement": 15,
  "time_alive": 1254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 21,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 32,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 31,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 6,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 2,
  "time_alive": 1457,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 30,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 32,
  "time_alive": 190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 33,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 32,
  "time_alive": 105,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 28,
  "time_alive": 578,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 31,
  "time_alive": 275,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 28,
  "time_alive": 602,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 10,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 14,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 23,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 29,
  "time_alive": 332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 29,
  "time_alive": 731,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 33,
  "time_alive": 106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 14,
  "time_alive": 1379,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 28,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 29,
  "time_alive": 447,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 30,
  "time_alive": 462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 24,
  "time_alive": 958,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd:55a2688d2bdd49faa8483b6ca2d7e367:5ca2f57fd4564f98a2c4967166f7222e",
  "placement": 8,
  "time_alive": 1334,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 31,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 31,
  "time_alive": 179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 15,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 13,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 16,
  "time_alive": 1310,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 28,
  "time_alive": 366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 30,
  "time_alive": 292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 15,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 20,
  "time_alive": 1207,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 24,
  "time_alive": 941,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 17,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "4da6e5d9b3a741d68b0ea7f2fd3c18a9:c5d3e52150b8419f88d416bfe49bcfc9:f4b918cfe0654eca898f2143665e899a",
  "placement": 17,
  "time_alive": 1192,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 28,
  "time_alive": 334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 28,
  "time_alive": 332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 24,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 30,
  "time_alive": 229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 33,
  "time_alive": 278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 5,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 31,
  "time_alive": 260,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 21,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 23,
  "time_alive": 953,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 29,
  "time_alive": 547,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 29,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "2afde1c9761640e8af64ef08e786a6d4:91fdc2ec08984e2bbc0b2e1d41e8fd01:eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 29,
  "time_alive": 474,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 22,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 23,
  "time_alive": 1091,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 26,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 18,
  "time_alive": 1284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 7,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 11,
  "time_alive": 1374,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 18,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 32,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 26,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 19,
  "time_alive": 1172,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 33,
  "time_alive": 103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "0013311b517c474cb79fe15790610ff3:c6d0ba5d0b21444499f3465e24a937fa:d4e9094cbad547e5a3498476dc62fd1b",
  "placement": 27,
  "time_alive": 785,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 29,
  "time_alive": 310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 17,
  "time_alive": 1292,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 27,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 27,
  "time_alive": 658,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 27,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 24,
  "time_alive": 978,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 26,
  "time_alive": 669,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 13,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 28,
  "time_alive": 460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 32,
  "time_alive": 311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 30,
  "time_alive": 344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "2be35931b6424e908be60ec88cfce420:932741962df4481a8b1e6ae082627feb:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 33,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ab12b83-421a-42ff-9564-501dce283508",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 25,
  "time_alive": 835,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "17d27d4d-7152-4796-8fbe-31d90b6d4a60",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 27,
  "time_alive": 350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0776d7ca-cabb-40d4-868c-904849e322ad",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 22,
  "time_alive": 1142,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "84d74e00-55fb-4957-92d6-967b468eb15f",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 14,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "39fa65b2-7c12-40a5-85d6-0eae3226603a",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 19,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b752bc6-7744-48d3-9d1c-063f2a27a1b8",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 26,
  "time_alive": 886,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bfb8726-a3ad-4f3a-9700-e4987b84e884",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 29,
  "time_alive": 308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8970784e-46b6-42d7-9479-ec91e186209c",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 27,
  "time_alive": 896,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6418df86-25dd-4b44-9a57-e4eea3543f1f",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 25,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b327af0-1c29-4692-ae77-a87f4d6d8b99",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 15,
  "time_alive": 1295,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8505b717-f953-4cb3-bf80-46f459e1ffe5",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 19,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51be836f-7bfc-4ee3-a59e-693e2d13e36b",
  "team_id": "56275d34ca754ab0b291229ddd5d9144:7a19436e3bd142349684c8ca5128a91e:7cd41f25ed8f47aba9f4ac3b77165290",
  "placement": 25,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "30034d35d5b74f91b1b1ef31434962eb:6ca2a17dd553472eaa548430a0f538cc:b4649d512c5946c89a6e94ba673ae2e7",
  "placement": 1,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:8a5850193be2436cb2aa91195113694a:c5e68ee678e1497caab5f02fb34a88dc",
  "placement": 5,
  "time_alive": 1417,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "8059ef43472e4015bb5dc5244c72b48e:a8283b60eec4412f816d8ae02b24f3f6:f07f8cf1c3044fa7bd0d4eb09df611d5",
  "placement": 3,
  "time_alive": 1431,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "6c5c1985a0d94cbcb6f383319e86214e:93d9b61ac0b14ba5a41f36459b11d4ba:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 8,
  "time_alive": 1392,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0:642f9dd9fffe4b5c83df246f4e41b16f:936dd1b096f744f889a147c8c181826e",
  "placement": 2,
  "time_alive": 1439,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "0119db46561b469797df2fed1153c8fc:8cc7ed426e6e455287d352a866fcf02b:9380e3e84e204762b479c7da68c3e7e6",
  "placement": 10,
  "time_alive": 1377,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 4,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "3f113bbb213549f3b6093b57b75181dd:8dbf0dfcbfac419bafd0b7305d006b00:d9800f0d5b4e4bb0a924db5096af844c",
  "placement": 7,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "33c3e4d92548488ca4d0ea0d2633ff8a:8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6",
  "placement": 9,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "1d313c1dd01e410597a4aff0e63ca24a:77591e40164649cb9c0e9ce84555cc21:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 11,
  "time_alive": 1342,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "a6f0a0547deb447d95781a944e6eeebd:addf33c9380f45bdbe7b66ebfc0a9e82:fc02ed69e6e541d895789a66e4013fb7",
  "placement": 15,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "18f421b50754411f86c60ff6b89aa812:1d6540464d7941968099c4737cb55587:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 13,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "3105d6d8bbaf4de085ebd8267795b4d0:39d16e036dee41189859354be7ef02bf:e744a5f1546e44059d7895a64ba1ccd5",
  "placement": 14,
  "time_alive": 1324,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "18209fbe75c64054adacbcc9ed214f44:bf6f38f1170f44749201950c0970e7da:d2267d9a0b0e4201a7857f914d6e3af9",
  "placement": 17,
  "time_alive": 1298,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "0a6ca9171fc845c5aa5512af677a348b:7b0e316bf98a42ccbe29aed88848bfe7:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 26,
  "time_alive": 851,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "8bba52a84f2a415792288bac379695a2:9e529e04395647b5b65a3d46bc115354:cd347929307d4e8ab340035678bd3119",
  "placement": 12,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "228adc281fa94915b0a0686b56edc8ff:7ca495fabad1429bb2a8cfed61772cc0:d5d3543a5a7041439f76ff14dc4046af",
  "placement": 16,
  "time_alive": 1298,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:d64a69f2f7f643df8885a819084e5ff0",
  "placement": 21,
  "time_alive": 1122,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 6,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 28,
  "time_alive": 789,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "05c7e9e9c18c4340bfc7f1a960edf7ac:69ae4a0ce75f4e439563db06e5d11253:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 30,
  "time_alive": 371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5:7ab1c30d279641dda02b1e88e2644eb0:f9923b2ef938419e9f14338b84cfb488",
  "placement": 18,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:6635e5b0260b49c7b57efef694ffec91:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 19,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "7fb2897373ed497bba51161a6c1a7da7:b49070b60e9d405c89ea2c17b8173574:d94fe36a0a1246dc86e4ff229ef863f7",
  "placement": 20,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "7874eb514eb642248bbc12576db975ce:c5dba93373204939831770188d9bd221:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 22,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d:dbc014857ea8438c9fa09ecf7c649508:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 23,
  "time_alive": 1070,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "258907a88a7242978e73ebc353b60cf8:853bbff098e249038760ae39dfae5924:baef867e29f74e42930fd1bef818fe16",
  "placement": 24,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:beb01a91030e44ef8fe4aa0ae32a94c5:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 25,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 27,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "35476aab7fa1457b92050ee6fea9e796:d1a4a6d2c7eb42e8a2d0b871091a39f0:dc7e982f647941c98f1bc303823106cc",
  "placement": 29,
  "time_alive": 453,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0b6a774-e106-4c75-9281-b359dd9f24cd",
  "team_id": "17ed098c788841e18aa01819e1f291cd:ba2f8068238a40468630ef63b7b5a793:bff5b1eb6d3e47fd914997cc56eda4c6",
  "placement": 31,
  "time_alive": 289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 14,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 4,
  "time_alive": 1487,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 4,
  "time_alive": 1540,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 6,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1434,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1505,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 3,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 3,
  "time_alive": 1504,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 12,
  "time_alive": 1445,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 2,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 6,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 6,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 1,
  "time_alive": 1523,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 1,
  "time_alive": 1551,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 18,
  "time_alive": 1186,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 21,
  "time_alive": 1138,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 33,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 32,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 23,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 19,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 8,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 24,
  "time_alive": 1043,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 8,
  "time_alive": 1395,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1505,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 4,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 23,
  "time_alive": 995,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 5,
  "time_alive": 1537,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 13,
  "time_alive": 1434,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 2,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 26,
  "time_alive": 413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 5,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 20,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 1,
  "time_alive": 1551,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 12,
  "time_alive": 1438,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 17,
  "time_alive": 1241,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 9,
  "time_alive": 1413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 10,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 8,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 3,
  "time_alive": 1545,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 23,
  "time_alive": 1070,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 11,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 3,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 19,
  "time_alive": 1235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1551,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 6,
  "time_alive": 1507,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 25,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 7,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 14,
  "time_alive": 1305,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 6,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 10,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 19,
  "time_alive": 1141,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 30,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 3,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 16,
  "time_alive": 1296,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 17,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 17,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 2,
  "time_alive": 1551,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 8,
  "time_alive": 1457,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 16,
  "time_alive": 1296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 10,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 9,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 9,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 21,
  "time_alive": 1017,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 26,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 5,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 7,
  "time_alive": 1429,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1523,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 12,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 17,
  "time_alive": 1301,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 15,
  "time_alive": 1352,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 24,
  "time_alive": 970,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 4,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 29,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 11,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 15,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 1,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 14,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 13,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 24,
  "time_alive": 790,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 22,
  "time_alive": 1086,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 22,
  "time_alive": 644,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 24,
  "time_alive": 1124,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 18,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 9,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 5,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 21,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 5,
  "time_alive": 1450,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 22,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 16,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 30,
  "time_alive": 209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 18,
  "time_alive": 1280,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 4,
  "time_alive": 1423,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 8,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 25,
  "time_alive": 995,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 6,
  "time_alive": 1457,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 13,
  "time_alive": 1397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1509,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 26,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 18,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 20,
  "time_alive": 1219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 5,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 10,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 16,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 19,
  "time_alive": 1198,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 11,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 11,
  "time_alive": 1386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 13,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 14,
  "time_alive": 1394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 14,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 9,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 19,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 15,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 22,
  "time_alive": 1008,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 16,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 10,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 25,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 12,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 32,
  "time_alive": 151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 21,
  "time_alive": 1039,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 23,
  "time_alive": 830,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 7,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 23,
  "time_alive": 985,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 20,
  "time_alive": 766,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 13,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 26,
  "time_alive": 677,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 11,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 31,
  "time_alive": 189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 31,
  "time_alive": 335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 29,
  "time_alive": 338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 12,
  "time_alive": 1378,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 25,
  "time_alive": 774,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 26,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 29,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 10,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 25,
  "time_alive": 543,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 30,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 24,
  "time_alive": 988,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 27,
  "time_alive": 309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 9,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 27,
  "time_alive": 710,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 15,
  "time_alive": 1298,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 8,
  "time_alive": 1397,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 27,
  "time_alive": 540,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 22,
  "time_alive": 859,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 19,
  "time_alive": 1172,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 20,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 31,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 27,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 32,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 7,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 17,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 29,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 24,
  "time_alive": 569,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 18,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 28,
  "time_alive": 463,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 20,
  "time_alive": 1021,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 4,
  "time_alive": 1480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 22,
  "time_alive": 1127,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 30,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 31,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 30,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 33,
  "time_alive": 128,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 33,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 12,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 23,
  "time_alive": 603,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "2ab69d9dde954f2fada991047028776b:43f28921b9b546b38791602c53a3f01f:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 26,
  "time_alive": 941,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "2ab69d9dde954f2fada991047028776b:43f28921b9b546b38791602c53a3f01f:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 14,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "2ab69d9dde954f2fada991047028776b:43f28921b9b546b38791602c53a3f01f:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 28,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "2ab69d9dde954f2fada991047028776b:43f28921b9b546b38791602c53a3f01f:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 11,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "2ab69d9dde954f2fada991047028776b:43f28921b9b546b38791602c53a3f01f:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 32,
  "time_alive": 210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "2ab69d9dde954f2fada991047028776b:43f28921b9b546b38791602c53a3f01f:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 21,
  "time_alive": 713,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 28,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 15,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 25,
  "time_alive": 448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 32,
  "time_alive": 173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 18,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 16,
  "time_alive": 1314,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 291,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 214,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 28,
  "time_alive": 411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 13,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 17,
  "time_alive": 1256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02ce5d84-2481-4cf3-8337-a2b8e2319d0b",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 21,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0301eb20-f067-46c9-a936-86bf8c4f0e87",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 31,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 31,
  "time_alive": 209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 27,
  "time_alive": 696,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 28,
  "time_alive": 392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 28,
  "time_alive": 355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0081d159-6ffd-48d2-b694-33d69e0560b0",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 32,
  "time_alive": 166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ced7ba0-a023-47f7-acc9-d2d9fc84241f",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 20,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05dc2ea1-ea35-4e88-81ea-5e81d0f39a31",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 30,
  "time_alive": 353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "07556ca4-cba2-47c8-94d9-d08977d1da5d",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 27,
  "time_alive": 362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 10,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 5,
  "time_alive": 1460,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1521,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1474,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1465,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 15,
  "time_alive": 1239,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 7,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 19,
  "time_alive": 959,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 24,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 2,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 3,
  "time_alive": 1489,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 6,
  "time_alive": 1404,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 19,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 10,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 2,
  "time_alive": 1487,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 9,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 7,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 8,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 11,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 9,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 5,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 7,
  "time_alive": 1405,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 28,
  "time_alive": 326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 20,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 10,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 3,
  "time_alive": 1437,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 4,
  "time_alive": 1419,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 1,
  "time_alive": 1496,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 31,
  "time_alive": 92,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 4,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 30,
  "time_alive": 217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 32,
  "time_alive": 94,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 3,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 12,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 17,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 22,
  "time_alive": 1072,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 2,
  "time_alive": 1465,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 8,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 6,
  "time_alive": 1397,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 21,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 11,
  "time_alive": 1390,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 30,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 5,
  "time_alive": 1409,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 33,
  "time_alive": 77,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 23,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 10,
  "time_alive": 1388,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 6,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 10,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 4,
  "time_alive": 1418,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 28,
  "time_alive": 458,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 11,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 13,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 21,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 3,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 17,
  "time_alive": 1243,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 4,
  "time_alive": 1387,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 9,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 22,
  "time_alive": 1074,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 16,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 25,
  "time_alive": 762,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 3,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 5,
  "time_alive": 1386,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 14,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 15,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 20,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 12,
  "time_alive": 1314,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 28,
  "time_alive": 551,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 1,
  "time_alive": 1443,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 7,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 6,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 19,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 18,
  "time_alive": 1295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 24,
  "time_alive": 928,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 2,
  "time_alive": 1443,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 20,
  "time_alive": 1224,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 8,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 8,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 7,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 18,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 6,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 19,
  "time_alive": 1228,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 18,
  "time_alive": 1236,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 2,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 13,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 14,
  "time_alive": 1297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 15,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 17,
  "time_alive": 1231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 4,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 14,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 16,
  "time_alive": 1250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 11,
  "time_alive": 1323,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 12,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 20,
  "time_alive": 1117,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 10,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 15,
  "time_alive": 1307,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 6,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 22,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 30,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 15,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 29,
  "time_alive": 462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 15,
  "time_alive": 1278,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 13,
  "time_alive": 1299,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c910129-9645-4652-8aa3-353c07617ec6",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 3,
  "time_alive": 969,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 8,
  "time_alive": 1393,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 26,
  "time_alive": 801,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 13,
  "time_alive": 1384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 17,
  "time_alive": 1295,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 8,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 13,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 4,
  "time_alive": 1461,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 25,
  "time_alive": 786,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 11,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 22,
  "time_alive": 1045,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 30,
  "time_alive": 305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 27,
  "time_alive": 501,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 23,
  "time_alive": 946,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 26,
  "time_alive": 596,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 9,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 9,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 12,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 18,
  "time_alive": 1229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 27,
  "time_alive": 780,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 2,
  "time_alive": 1521,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 13,
  "time_alive": 1313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 23,
  "time_alive": 948,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 23,
  "time_alive": 922,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 21,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 11,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 14,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 23,
  "time_alive": 797,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 14,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 27,
  "time_alive": 518,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 29,
  "time_alive": 183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 30,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 31,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 31,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 26,
  "time_alive": 781,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c910129-9645-4652-8aa3-353c07617ec6",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 1,
  "time_alive": 1030,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 22,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 16,
  "time_alive": 1296,
  "elims": 4,
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
    