const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 20,
  "time_alive": 1198,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 3,
  "time_alive": 1520,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 4,
  "time_alive": 1526,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 20,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 12,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 15,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 27,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 3,
  "time_alive": 1512,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 4,
  "time_alive": 1519,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 12,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 3,
  "time_alive": 1442,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 13,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 6,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 7,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 23,
  "time_alive": 1119,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 5,
  "time_alive": 1471,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 9,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 1,
  "time_alive": 1533,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 12,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 11,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 27,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 8,
  "time_alive": 1367,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 6,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 11,
  "time_alive": 1375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 22,
  "time_alive": 1096,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 6,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 3,
  "time_alive": 1532,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 4,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 16,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 18,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 16,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 4,
  "time_alive": 1498,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 16,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 5,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 22,
  "time_alive": 1116,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 22,
  "time_alive": 1063,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 14,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 8,
  "time_alive": 1452,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 14,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 17,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 2,
  "time_alive": 1551,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 6,
  "time_alive": 1483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 10,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 14,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 12,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 2,
  "time_alive": 1488,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 19,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 14,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 9,
  "time_alive": 1435,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 25,
  "time_alive": 821,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 24,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 24,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1468,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 17,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 2,
  "time_alive": 1542,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 6,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 8,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 7,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 4,
  "time_alive": 1466,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 21,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 17,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 11,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 22,
  "time_alive": 1214,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 26,
  "time_alive": 930,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 20,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 10,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 20,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 14,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 1,
  "time_alive": 1470,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 1,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 10,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 16,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 6,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 27,
  "time_alive": 506,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 32,
  "time_alive": 186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 29,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 25,
  "time_alive": 1026,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 18,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 6,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 22,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1470,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 16,
  "time_alive": 1280,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 23,
  "time_alive": 1079,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 2,
  "time_alive": 1542,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 5,
  "time_alive": 1507,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 18,
  "time_alive": 1235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 19,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 27,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 6,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 22,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 23,
  "time_alive": 1127,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 21,
  "time_alive": 1133,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 7,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 3,
  "time_alive": 1445,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 15,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 23,
  "time_alive": 1073,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 16,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 29,
  "time_alive": 406,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 28,
  "time_alive": 697,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 31,
  "time_alive": 294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 9,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 16,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 32,
  "time_alive": 296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 10,
  "time_alive": 1377,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 32,
  "time_alive": 164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 27,
  "time_alive": 645,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 5,
  "time_alive": 1493,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 12,
  "time_alive": 1445,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 10,
  "time_alive": 1416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 11,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 17,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 23,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 21,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 13,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 17,
  "time_alive": 1281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 11,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 27,
  "time_alive": 562,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 1,
  "time_alive": 1499,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 17,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 13,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 9,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 5,
  "time_alive": 1514,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 12,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 15,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 24,
  "time_alive": 1051,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 9,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 26,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 21,
  "time_alive": 1064,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 29,
  "time_alive": 461,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 12,
  "time_alive": 1436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 21,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 26,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 1,
  "time_alive": 1520,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 5,
  "time_alive": 1490,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 28,
  "time_alive": 654,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 18,
  "time_alive": 1249,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 30,
  "time_alive": 366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 11,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 20,
  "time_alive": 1202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 9,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 31,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 33,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 10,
  "time_alive": 1477,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 8,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 15,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 22,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 13,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 5,
  "time_alive": 1494,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 25,
  "time_alive": 1014,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 18,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 12,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 10,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 28,
  "time_alive": 480,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 29,
  "time_alive": 557,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 31,
  "time_alive": 345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 30,
  "time_alive": 323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 14,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 19,
  "time_alive": 1280,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 30,
  "time_alive": 263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 17,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 9,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 7,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 21,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 23,
  "time_alive": 936,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 11,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 14,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 19,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 31,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 21,
  "time_alive": 1070,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 14,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 11,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 25,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 7,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 32,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 23,
  "time_alive": 1047,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 29,
  "time_alive": 336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 2,
  "time_alive": 1499,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 18,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 33,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 26,
  "time_alive": 1000,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 18,
  "time_alive": 1374,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 7,
  "time_alive": 1473,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 29,
  "time_alive": 342,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 21,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 5,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 15,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 16,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 25,
  "time_alive": 777,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 13,
  "time_alive": 1390,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 22,
  "time_alive": 1184,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 24,
  "time_alive": 887,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 4,
  "time_alive": 1499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 8,
  "time_alive": 1463,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 27,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 9,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 30,
  "time_alive": 324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 5,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 24,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 15,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 22,
  "time_alive": 1062,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 29,
  "time_alive": 278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 28,
  "time_alive": 865,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 2,
  "time_alive": 1492,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 30,
  "time_alive": 318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 28,
  "time_alive": 619,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 26,
  "time_alive": 911,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 29,
  "time_alive": 528,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 31,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 19,
  "time_alive": 1261,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 19,
  "time_alive": 1250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 22,
  "time_alive": 1158,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 23,
  "time_alive": 909,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 25,
  "time_alive": 1168,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 2,
  "time_alive": 1533,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 22,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 13,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 18,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 20,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 25,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 26,
  "time_alive": 662,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 30,
  "time_alive": 419,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 11,
  "time_alive": 1441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 18,
  "time_alive": 1206,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 19,
  "time_alive": 1233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 6,
  "time_alive": 1502,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 20,
  "time_alive": 1275,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 24,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 6,
  "time_alive": 1480,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 10,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 19,
  "time_alive": 1216,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 13,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 19,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 21,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 20,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 27,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 15,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 23,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 24,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 8,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 19,
  "time_alive": 1263,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 21,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 24,
  "time_alive": 1036,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 31,
  "time_alive": 240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 15,
  "time_alive": 1322,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 17,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 10,
  "time_alive": 1447,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 7,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 8,
  "time_alive": 1444,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 1030,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 29,
  "time_alive": 435,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 12,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 26,
  "time_alive": 928,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 31,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 27,
  "time_alive": 796,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 24,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 26,
  "time_alive": 717,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 26,
  "time_alive": 803,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 8,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 28,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 17,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 30,
  "time_alive": 441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 19,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 26,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 15,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 28,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 32,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 6,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 18,
  "time_alive": 1315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 31,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 30,
  "time_alive": 602,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 16,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 21,
  "time_alive": 1262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 14,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 20,
  "time_alive": 1204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 22,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 25,
  "time_alive": 912,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 4,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 33,
  "time_alive": 85,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 33,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 32,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 13,
  "time_alive": 1425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 31,
  "time_alive": 345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 30,
  "time_alive": 288,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 17,
  "time_alive": 1310,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 28,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 32,
  "time_alive": 216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 28,
  "time_alive": 563,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 7,
  "time_alive": 1484,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 26,
  "time_alive": 685,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 20,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 16,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 26,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 24,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 19,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 23,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 30,
  "time_alive": 319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 17,
  "time_alive": 1273,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 24,
  "time_alive": 911,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 27,
  "time_alive": 584,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 20,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 25,
  "time_alive": 853,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 27,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 21,
  "time_alive": 1224,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 15,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 27,
  "time_alive": 696,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 28,
  "time_alive": 624,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 12,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 16,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 9,
  "time_alive": 1448,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 29,
  "time_alive": 740,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 31,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 7,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 13,
  "time_alive": 1422,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 28,
  "time_alive": 574,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 31,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 29,
  "time_alive": 547,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 29,
  "time_alive": 377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 33,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 20,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 25,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 30,
  "time_alive": 434,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1535,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1500,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 6,
  "time_alive": 1429,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1526,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1484,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1488,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1501,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1497,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 3,
  "time_alive": 1532,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 4,
  "time_alive": 1489,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 5,
  "time_alive": 1432,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 9,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 3,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 24,
  "time_alive": 988,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 4,
  "time_alive": 1467,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "432c6271f0904d4bb750e0cda115f194:59d0981dd5c141e0930d5349c8e3cd0a:cce29348ddef41eb8547376d057ba002",
  "placement": 7,
  "time_alive": 1413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 2,
  "time_alive": 1535,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 11,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 4,
  "time_alive": 1497,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 22,
  "time_alive": 1157,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1448,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 3,
  "time_alive": 1484,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 23,
  "time_alive": 954,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1523,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 22,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1526,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 10,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 23,
  "time_alive": 995,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1460,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1497,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 25,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 10,
  "time_alive": 1432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 23,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 3,
  "time_alive": 1521,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 2,
  "time_alive": 1484,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 12,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 19,
  "time_alive": 1213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 17,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 17,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 5,
  "time_alive": 1476,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 17,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 11,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 28,
  "time_alive": 432,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 11,
  "time_alive": 1372,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 10,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 10,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 12,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 12,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 26,
  "time_alive": 600,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 13,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 12,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 4,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 32,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 17,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 9,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 13,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 4,
  "time_alive": 1461,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 8,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 2,
  "time_alive": 1501,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401:935279f1280d4c50bce5347680e63152",
  "placement": 8,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 10,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 18,
  "time_alive": 1240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 7,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 8,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 5,
  "time_alive": 1461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 13,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 9,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 13,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 33,
  "time_alive": 143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 3,
  "time_alive": 1495,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 28,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 12,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 14,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 5,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 6,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "2be367496be04da4b1f307b6104ab346:6877dd88ea8248a89d02d1bac0ed50b5:9557f347d59c480da7da151a88580c55",
  "placement": 18,
  "time_alive": 1241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 8,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 7,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 2,
  "time_alive": 1498,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 14,
  "time_alive": 1405,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 8,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 6,
  "time_alive": 1415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 8,
  "time_alive": 1434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 21,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 28,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 26,
  "time_alive": 788,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 22,
  "time_alive": 1174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 7,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 12,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 2,
  "time_alive": 1488,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 16,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 3,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 23,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 23,
  "time_alive": 996,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 1,
  "time_alive": 1498,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 21,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 15,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 26,
  "time_alive": 687,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 21,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 28,
  "time_alive": 612,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 27,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 15,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 14,
  "time_alive": 1338,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 5,
  "time_alive": 1487,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 7,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 22,
  "time_alive": 1087,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 23,
  "time_alive": 891,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:28c7690cb4414f1bb7b7884ff13b3534:512ec912e55a4f1f8c47af9878e4ad05",
  "placement": 6,
  "time_alive": 1414,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 29,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 6,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 8,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 19,
  "time_alive": 1215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 9,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 14,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 13,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:71c83b2e16d147b28a9a3a60e023ac80:fc655d21d60f4bc1920901052eccdeba",
  "placement": 27,
  "time_alive": 653,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 20,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 32,
  "time_alive": 318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 31,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 6,
  "time_alive": 1481,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 25,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 7,
  "time_alive": 1408,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 7,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:89238713d14548159f78a91178e2d6c2:df490882a2bf4dd7b2e22d7493d15861",
  "placement": 11,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 9,
  "time_alive": 1425,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 9,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 13,
  "time_alive": 1338,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 25,
  "time_alive": 945,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 6,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 20,
  "time_alive": 1143,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:5c6aa281aece46b2ab0f9452809704f2",
  "placement": 24,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 6,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 2,
  "time_alive": 1500,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 20,
  "time_alive": 1217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 24,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 18,
  "time_alive": 1292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 28,
  "time_alive": 544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 26,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "36ec7e5f38ea4d4ebf0f4f16cf54000f:a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6",
  "placement": 5,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 22,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 27,
  "time_alive": 569,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 11,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 30,
  "time_alive": 429,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 17,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 10,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 29,
  "time_alive": 256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:e33c514d9c4d4e78894e352e158cacb0",
  "placement": 30,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 16,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 16,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 21,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 28,
  "time_alive": 493,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 16,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 18,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 20,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 19,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 21,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 19,
  "time_alive": 1234,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 10,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 20,
  "time_alive": 1221,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 4,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 15,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 31,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 31,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 24,
  "time_alive": 897,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 18,
  "time_alive": 1311,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 32,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 23,
  "time_alive": 1002,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 9,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 14,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "280c926993114c5396b3c84b63aea82b:4ccd08767c324ce6916d7e2714abfec5:81b0d74718864da2afd3ff2882bde779",
  "placement": 16,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 5,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 13,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 24,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 22,
  "time_alive": 1035,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 11,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 17,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 27,
  "time_alive": 739,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 22,
  "time_alive": 1074,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 14,
  "time_alive": 1372,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 31,
  "time_alive": 434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 19,
  "time_alive": 1241,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 27,
  "time_alive": 577,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 27,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 27,
  "time_alive": 613,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 25,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "617052a5fab84809ac3e8baef938963f:af5163194d754769899c5d68941c57ed:b598acd8067c4886a592bde4cc864623",
  "placement": 12,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b4b8db2-f10b-4f64-ba40-338ebde355f9",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 3,
  "time_alive": 1496,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0abbd3ed-1216-4f09-a301-533da1103fd1",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 14,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 24,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 14,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 32,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 31,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 30,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:fd6d7782abe54a45aba4a298827a88f1",
  "placement": 22,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 13,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 30,
  "time_alive": 441,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 29,
  "time_alive": 566,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 20,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 30,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 32,
  "time_alive": 109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 18,
  "time_alive": 1250,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 15,
  "time_alive": 1352,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a013f07-6696-4d67-aba4-4160e8c90171",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 7,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19641f59-6604-4c27-9309-f377deaaf091",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 26,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0abbd3ed-1216-4f09-a301-533da1103fd1",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 21,
  "time_alive": 1202,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 15,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 21,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 33,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 17,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "64a2c2e59f734990824657290b6c3ddb:66d307e926c04be8bd2956c33db88405:dd5b818516e5413ca643876cc109cac7",
  "placement": 24,
  "time_alive": 998,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a013f07-6696-4d67-aba4-4160e8c90171",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 31,
  "time_alive": 193,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0abbd3ed-1216-4f09-a301-533da1103fd1",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 8,
  "time_alive": 1440,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 12,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 33,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 26,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 21,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 31,
  "time_alive": 169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "5c886a8947ae473597747fc548bf1570:9e9a6a241df841fcbaa87798393bce93:f5f410ed67a64f018d28748ba6c1c6b0",
  "placement": 29,
  "time_alive": 397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 30,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 29,
  "time_alive": 457,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 10,
  "time_alive": 1384,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 15,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 21,
  "time_alive": 1174,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 29,
  "time_alive": 269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 32,
  "time_alive": 115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:6cbf2beb1de5498eb9a276a411cd1be2",
  "placement": 20,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 18,
  "time_alive": 1303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 8,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 25,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 16,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 29,
  "time_alive": 372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 19,
  "time_alive": 1326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 24,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "380ac89de5f340a7be821b85ffab5bad:722957a8f7924ec0afaeb3c5971c3014:8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 25,
  "time_alive": 748,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 19,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 20,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 30,
  "time_alive": 266,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 29,
  "time_alive": 451,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 31,
  "time_alive": 255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 31,
  "time_alive": 168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 28,
  "time_alive": 397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 9,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 11,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 28,
  "time_alive": 562,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 16,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 23,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 19,
  "time_alive": 1232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 16,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 11,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "02881e4fe0964ee7bc0e1e39511d3a01:88dc44c02855470690fc51b128130218:f5d4ffab90354b1a9b50067eba0981fe",
  "placement": 26,
  "time_alive": 679,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "38f83d37-7f19-4db0-ae42-b744035d3c85",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 26,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "555509a4-21ba-4455-8ae1-bd8cbbe8b114",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 25,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "99b5782f-3572-4f5c-9d92-fa4a0ab102e9",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 15,
  "time_alive": 1325,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9a1b82e8-3ffb-4efd-a82e-2d2baea061bc",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 18,
  "time_alive": 1277,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2fcfc4af-8ff4-4a88-804a-94c98719c9ba",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 26,
  "time_alive": 634,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0fbaf302-33a9-4297-85e4-4dcf9182eb93",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 25,
  "time_alive": 925,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b6e6b7d6-c120-4ff4-86ea-d42397b7b771",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 30,
  "time_alive": 231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "722e39d7-fb4d-4fb9-ad84-b4d3593e5b4a",
  "team_id": "0993a1bbad8f418980014d66797efdb4:ae22cc0d3cd741899f9503c93dbc8517:eca43e503c654bb88209d418550c7329",
  "placement": 14,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1475,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1505,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1510,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 7,
  "time_alive": 1444,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 4,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1502,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1537,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 5,
  "time_alive": 1444,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1525,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 9,
  "time_alive": 1472,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:9ea8d0bc12924d978c2b08e2a016e801:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1521,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 7,
  "time_alive": 1447,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 13,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 7,
  "time_alive": 1449,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 12,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 9,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 6,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 4,
  "time_alive": 1502,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 10,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 3,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 13,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 17,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 21,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1475,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1505,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 7,
  "time_alive": 1444,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 4,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 5,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 7,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 11,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 15,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 6,
  "time_alive": 1461,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 11,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 20,
  "time_alive": 1250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 3,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 15,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 5,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 2,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 6,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 17,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 20,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 8,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 9,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 2,
  "time_alive": 1556,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "8b44883a09524968813986df657da706:ad2c7df621304e8e8dd8019d1533f0a2:cc57a88db28b4370adae26a209c35639",
  "placement": 2,
  "time_alive": 1521,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 8,
  "time_alive": 1440,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 6,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 27,
  "time_alive": 569,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 30,
  "time_alive": 240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 30,
  "time_alive": 215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 33,
  "time_alive": 84,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 15,
  "time_alive": 1393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 2,
  "time_alive": 1525,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1550,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1:f8fa56b8624d457288dcff97ee773611",
  "placement": 5,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 32,
  "time_alive": 103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 12,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 33,
  "time_alive": 207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 12,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1472,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 25,
  "time_alive": 636,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 8,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 16,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 5,
  "time_alive": 1469,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 1,
  "time_alive": 1556,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:2833f31e54d84eba9f27def1c1da412f:ff906aca7c12455a8035ac6999879579",
  "placement": 32,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 5,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 30,
  "time_alive": 734,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 3,
  "time_alive": 1502,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 19,
  "time_alive": 1215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 15,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 7,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 9,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 6,
  "time_alive": 1492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 9,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 7,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 4,
  "time_alive": 1536,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0c0760ccad674423ac0c21060b325204:5345357b290f4fb88c9d1b6f58fb2869:6533ded271324f63b045220fa442861e",
  "placement": 10,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 26,
  "time_alive": 995,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 8,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 5,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 4,
  "time_alive": 1471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 8,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 19,
  "time_alive": 1242,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 2,
  "time_alive": 1502,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 5,
  "time_alive": 1495,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 6,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 19,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 18,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 12,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 19,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 25,
  "time_alive": 982,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 9,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 28,
  "time_alive": 581,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 3,
  "time_alive": 1460,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 2,
  "time_alive": 1480,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 11,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 12,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 32,
  "time_alive": 287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 14,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 8,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 22,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 15,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 14,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 31,
  "time_alive": 210,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 1,
  "time_alive": 1480,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 10,
  "time_alive": 1390,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 23,
  "time_alive": 1159,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 28,
  "time_alive": 473,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 13,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 29,
  "time_alive": 451,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "033786339d914cb59286221b820fd4bb:b6bcccd2151948f4b9f0159cd700352a:eec1a11de93042be847f249c3536d619",
  "placement": 3,
  "time_alive": 1518,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 15,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 5,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 6,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 8,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 13,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 8,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 26,
  "time_alive": 887,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 9,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 14,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 11,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 27,
  "time_alive": 554,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9:89626ebf70374e92840e995065175c4d:9391533faf794986b88893947721caf8",
  "placement": 20,
  "time_alive": 1191,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 18,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 16,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 11,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 17,
  "time_alive": 1326,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 5,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 24,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 21,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 19,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 1,
  "time_alive": 1486,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 10,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 7,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 21,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 13,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 25,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 3,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 22,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 16,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 29,
  "time_alive": 545,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 2,
  "time_alive": 1537,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 3,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 29,
  "time_alive": 370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 11,
  "time_alive": 1444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4fd253909e1046ddb31298c26a05cdb5:e75e2f2763044da6a97788622c17dc0d",
  "placement": 18,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 16,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 23,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 4,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 13,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 18,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 10,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 4,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 7,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 19,
  "time_alive": 1245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 17,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 8,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:647d5f8d8e6d4396b8e075e469e0444b",
  "placement": 19,
  "time_alive": 1192,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 11,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 17,
  "time_alive": 1333,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 21,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 25,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 6,
  "time_alive": 1454,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 3,
  "time_alive": 1471,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 23,
  "time_alive": 1122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 22,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 4,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 16,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 19,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:5cc8a5fcbb074fe6a586e07ce574027e:96e380a28591400fbf36016c2cf03a7f",
  "placement": 9,
  "time_alive": 1455,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 12,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 31,
  "time_alive": 600,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 22,
  "time_alive": 1155,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 31,
  "time_alive": 232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 10,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 20,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 13,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 26,
  "time_alive": 892,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 13,
  "time_alive": 1387,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 8,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 5,
  "time_alive": 1525,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "6ef53e85807543659893a02940723ada:78b6169906a244b181df06a83e68f2d5:dfadab81e6444305b6400244155921ed",
  "placement": 6,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 4,
  "time_alive": 1482,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 7,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 12,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 10,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 16,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 13,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 25,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 14,
  "time_alive": 1409,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 15,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f",
  "placement": 16,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 11,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 28,
  "time_alive": 466,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 11,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 9,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 26,
  "time_alive": 558,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 3,
  "time_alive": 1489,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 13,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 16,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 21,
  "time_alive": 1008,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 20,
  "time_alive": 1279,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:eb54bc2dc192462da7c2226f937cd5b1:f746c973535746eaa0a9beb3e04a4434",
  "placement": 13,
  "time_alive": 1404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 3,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 29,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 17,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1467,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 17,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 18,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 18,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 8,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 30,
  "time_alive": 366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 14,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 6,
  "time_alive": 1523,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 30,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 9,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 32,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 10,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 26,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 29,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 11,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 12,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 3,
  "time_alive": 1508,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 24,
  "time_alive": 1013,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 25,
  "time_alive": 771,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 28,
  "time_alive": 549,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "43978dba168744c59b15403aff7d1371:86b5ed33648a4957b1985d8e07231077:96a831605b9642f8af449b25e5d9296e",
  "placement": 31,
  "time_alive": 284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 14,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 10,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 20,
  "time_alive": 1231,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 20,
  "time_alive": 1196,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 11,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 20,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 17,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 27,
  "time_alive": 531,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 20,
  "time_alive": 1163,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 12,
  "time_alive": 1428,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "10c829f7666942d8ada85183c993c4e3:c4079131730b46049ef4ba0ac0288d88:caade4c08f27413aba5daee9f68c0bbc",
  "placement": 24,
  "time_alive": 531,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 2,
  "time_alive": 1491,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 27,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 29,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 24,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 14,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 21,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 27,
  "time_alive": 883,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 30,
  "time_alive": 273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 21,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 4,
  "time_alive": 1473,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 33,
  "time_alive": 105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:aff71c86dc7f4a84a2837fd6c5e045c0:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 22,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 17,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1463,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 18,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 18,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 26,
  "time_alive": 602,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 15,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 19,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 29,
  "time_alive": 324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 18,
  "time_alive": 1255,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 22,
  "time_alive": 942,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 31,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "739c2b0ffad2413eb33c47ae8d41b310:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 4,
  "time_alive": 1508,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 6,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 21,
  "time_alive": 1190,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 16,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 33,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 33,
  "time_alive": 124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 14,
  "time_alive": 1343,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 32,
  "time_alive": 274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 31,
  "time_alive": 255,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 26,
  "time_alive": 551,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 28,
  "time_alive": 415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 32,
  "time_alive": 112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:49ea8e499e744a43b0a4c489520f8566",
  "placement": 14,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 23,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 20,
  "time_alive": 1197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 8,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 14,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 27,
  "time_alive": 415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 17,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 24,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 27,
  "time_alive": 727,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 29,
  "time_alive": 427,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 15,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 21,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "13bdbee068b04ac5b6eac7e3748e7714:3b696b9745f44370942096aae08f66bc:f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 7,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 25,
  "time_alive": 1116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 24,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 19,
  "time_alive": 1235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 21,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 19,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 22,
  "time_alive": 1061,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 16,
  "time_alive": 1338,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 28,
  "time_alive": 468,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 12,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 33,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 16,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "a84fd642eff845ed937a2a691962cc01:c25ccfc7e6994676bd823d6cc15c6ece:c790033e250a4049b89bb44fef84b9c4",
  "placement": 26,
  "time_alive": 385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 10,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 26,
  "time_alive": 877,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 30,
  "time_alive": 327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 29,
  "time_alive": 273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 25,
  "time_alive": 704,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 27,
  "time_alive": 305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 30,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 18,
  "time_alive": 1338,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 23,
  "time_alive": 1039,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 24,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 17,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:39a94098c6e14637ac721a1ce3d45eca:c66ef00ccc1d4a8b9197d3bb53be7fdd",
  "placement": 27,
  "time_alive": 341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 24,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 9,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 23,
  "time_alive": 1134,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 16,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 23,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 23,
  "time_alive": 1006,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 15,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 32,
  "time_alive": 245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 33,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 26,
  "time_alive": 581,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:808a36bf30b2454cbf20d711677b10d2:abdb56da839f43fea231293d085d38cb",
  "placement": 25,
  "time_alive": 1066,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 31,
  "time_alive": 104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 18,
  "time_alive": 1233,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 26,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 22,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 28,
  "time_alive": 387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 30,
  "time_alive": 205,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 22,
  "time_alive": 1140,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 10,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 25,
  "time_alive": 929,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 30,
  "time_alive": 362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 24,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2:188e2f14d9b048ce9a15ab2ac164a339:50749c1c18d54afba9a426e3b40077ce",
  "placement": 28,
  "time_alive": 341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 29,
  "time_alive": 283,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 19,
  "time_alive": 1199,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 31,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 23,
  "time_alive": 1156,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 32,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 32,
  "time_alive": 144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 14,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 25,
  "time_alive": 975,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 17,
  "time_alive": 1275,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 23,
  "time_alive": 937,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 22,
  "time_alive": 1200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "0366b3ce63504d9c9876f309ba1b1b09:949f19b45fc24a5a89bbcd55ff460e8f:deb47883705843cfb298953268fac5a1",
  "placement": 25,
  "time_alive": 485,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 28,
  "time_alive": 310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 33,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 13,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 15,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 24,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 29,
  "time_alive": 245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 31,
  "time_alive": 322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 24,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 31,
  "time_alive": 319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 18,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 30,
  "time_alive": 290,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "4536de2803d84b30a8ba22fd58ab1268:4767134f5813437e9645a5e5e5089ff7:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 29,
  "time_alive": 337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 30,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 22,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 24,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 32,
  "time_alive": 168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 20,
  "time_alive": 1225,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 31,
  "time_alive": 171,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 33,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 33,
  "time_alive": 214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 27,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 23,
  "time_alive": 1176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "2cd01e8df0344f1bb5a5bc3e3f35ed77:db3af51c456d41a296f61044d100ce7d:e67db9eeda754294a98022fd9459870b",
  "placement": 15,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "80328a9d-7457-4a07-bd66-f808a1b6b340",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 27,
  "time_alive": 917,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0af98349-2f40-4c80-ac0b-3059c7d317fe",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 28,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "666600ae-a561-4182-ac76-879248e878ce",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 32,
  "time_alive": 273,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1538e132-7b0d-4b89-9e23-8d03e918d17b",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 27,
  "time_alive": 727,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2da3121c-0af6-462b-9243-beb256562a04",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 21,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1168c7c1-ab17-4ec3-b9af-2135cffd65c0",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 28,
  "time_alive": 263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5302a923-2a33-4db6-8da8-48afcde5c810",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 28,
  "time_alive": 820,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1335bde3-db85-48a5-9e51-eb7ced14cc32",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70b0994a-fe11-475c-9077-a7efab9a4b22",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 32,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ba92a78-2168-40f5-b97d-64105cff52a5",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 31,
  "time_alive": 356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e2a4261-80a2-4a57-9c53-406ed6e5ef59",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 26,
  "time_alive": 708,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6247d894-a139-4767-8617-d8ba83d9029e",
  "team_id": "1399f372012d441bae05836af60bde5f:3fa3a872d4f549259e29dd038e9e2bb6:d3e8359577a1470aab3a0c7c754901ac",
  "placement": 23,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7c3063d7-a390-457b-8641-7767fff16734",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 9,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b06e3a9-2862-4a42-a30b-6cc7285def75",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 3,
  "time_alive": 1482,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "218e3343-e043-4fe9-bcf7-d23f8a919215",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1543,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "09467da1-2264-4b31-9e41-c033f3d5fd31",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 15,
  "time_alive": 1363,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "071b48ba-7ead-496c-ae62-584f50db44aa",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1495,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "69cc1bf0-eb1f-4e64-81ba-d9911d5f12ec",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1d5a670a-8952-4be6-8735-d6fd5ee60ed0",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1521,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0a19df72-e30e-4e4c-9fdc-a418488f5dff",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1514,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "12480a47-8ef1-431d-8290-4e9dad447803",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 16,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a83768cc-b4db-4da8-8aee-1816bc9ba6c2",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 11,
  "time_alive": 1404,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3aab881e-1377-464f-b287-deb42ea22a15",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 9,
  "time_alive": 1405,
  "elims": 2,
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
    