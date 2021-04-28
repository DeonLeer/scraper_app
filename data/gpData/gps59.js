const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 3,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 7,
  "time_alive": 1499,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 28,
  "time_alive": 781,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 10,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 26,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 13,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 26,
  "time_alive": 733,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 12,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 24,
  "time_alive": 1004,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 32,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 33,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 8,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 23,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 29,
  "time_alive": 414,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 6,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 14,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 11,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 18,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 8,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 7,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 29,
  "time_alive": 768,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 18,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 7,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 18,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 15,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 11,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 13,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 14,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 27,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 24,
  "time_alive": 1127,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 19,
  "time_alive": 1237,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 15,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 6,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 17,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 9,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 6,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 14,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 26,
  "time_alive": 909,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 31,
  "time_alive": 440,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 21,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 28,
  "time_alive": 673,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 28,
  "time_alive": 626,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 5,
  "time_alive": 1476,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 12,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 20,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 12,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 20,
  "time_alive": 1149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 24,
  "time_alive": 782,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 30,
  "time_alive": 561,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 25,
  "time_alive": 1134,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 4,
  "time_alive": 1465,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 24,
  "time_alive": 1131,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 16,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 17,
  "time_alive": 1222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 3,
  "time_alive": 1524,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 23,
  "time_alive": 1178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 30,
  "time_alive": 411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 4,
  "time_alive": 1453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 4,
  "time_alive": 1525,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 22,
  "time_alive": 1148,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 17,
  "time_alive": 1239,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 18,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 23,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 14,
  "time_alive": 1374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 20,
  "time_alive": 1124,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 5,
  "time_alive": 1464,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 19,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 22,
  "time_alive": 661,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 28,
  "time_alive": 833,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 21,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 7,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 28,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 8,
  "time_alive": 1416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 26,
  "time_alive": 960,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 3,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 23,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 18,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 18,
  "time_alive": 1242,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 15,
  "time_alive": 1375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 25,
  "time_alive": 497,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 21,
  "time_alive": 1139,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 2,
  "time_alive": 1558,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 25,
  "time_alive": 991,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 7,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 22,
  "time_alive": 998,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 16,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 20,
  "time_alive": 1185,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 24,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 6,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 27,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 29,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 32,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 17,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 32,
  "time_alive": 137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 8,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 33,
  "time_alive": 109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 28,
  "time_alive": 844,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 33,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 6,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 20,
  "time_alive": 1232,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 29,
  "time_alive": 903,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 22,
  "time_alive": 1039,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 32,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 27,
  "time_alive": 480,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 12,
  "time_alive": 1379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 16,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 17,
  "time_alive": 1287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 5,
  "time_alive": 1482,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 15,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 25,
  "time_alive": 1010,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 19,
  "time_alive": 1187,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 11,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 28,
  "time_alive": 918,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 17,
  "time_alive": 1313,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 28,
  "time_alive": 873,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 28,
  "time_alive": 473,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 29,
  "time_alive": 485,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 25,
  "time_alive": 773,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 5,
  "time_alive": 1481,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 20,
  "time_alive": 1165,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 20,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 27,
  "time_alive": 729,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 21,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 12,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 15,
  "time_alive": 1351,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 30,
  "time_alive": 468,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 18,
  "time_alive": 1325,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 26,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 22,
  "time_alive": 898,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 31,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 32,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 23,
  "time_alive": 969,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 31,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 25,
  "time_alive": 818,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "0013311b517c474cb79fe15790610ff3:3fa7e73acccd419099355b6b3d172d4f:f8e36d87d9544ab0bc659b58aa9bd1f4",
  "placement": 26,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 16,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 19,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 11,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 24,
  "time_alive": 502,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 27,
  "time_alive": 854,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 19,
  "time_alive": 1241,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 23,
  "time_alive": 1143,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 12,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 20,
  "time_alive": 1270,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 21,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "13ff01593b7348928a90f2b59da670d3:2b648319f4c443b89d0000ba7fa994e1:8a71724a32c14322b748a46e6ba16543",
  "placement": 27,
  "time_alive": 696,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 33,
  "time_alive": 487,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 13,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 13,
  "time_alive": 1389,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 20,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 24,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 31,
  "time_alive": 259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 16,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 29,
  "time_alive": 802,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 19,
  "time_alive": 1164,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 29,
  "time_alive": 408,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 11,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 29,
  "time_alive": 377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 26,
  "time_alive": 929,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 907,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 24,
  "time_alive": 1166,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 26,
  "time_alive": 494,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 16,
  "time_alive": 1327,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 33,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 10,
  "time_alive": 1443,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 19,
  "time_alive": 1221,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 31,
  "time_alive": 744,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 22,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 31,
  "time_alive": 393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 25,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "169235b0-8d02-4ed3-ab35-283352ac81f8",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 25,
  "time_alive": 962,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0f29f1af-f697-4ef0-a6a3-6c8e104cd288",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 21,
  "time_alive": 1102,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03be06ac-93d0-4ff7-ac75-8d49245e40e4",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 16,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11979f81-b68b-452b-b7ae-46a1eeb4bff0",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 21,
  "time_alive": 893,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c036597-1628-45f7-9ecb-501d64442a84",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 25,
  "time_alive": 995,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "05fceef1-1f87-4b14-ac92-406768e74d6b",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 28,
  "time_alive": 429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "135ab22d-4bfd-4b63-84fc-2dcdf937428e",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 32,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "73c34cca-6669-4f04-ab4f-f4b8e063bf48",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 17,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "72c86e06-696e-49d7-9917-7129ec4c5620",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 32,
  "time_alive": 332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41b5e2b6-93ce-4acd-b556-cd3e43dcb5ae",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 32,
  "time_alive": 161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d1cd72e-be7c-4832-87f1-3aa49c3f553b",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 33,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abd5f826-ae67-4c44-939f-dd05c61deb57",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556:5ca2f57fd4564f98a2c4967166f7222e:9680b27def9147999e13f9a2c49a7402",
  "placement": 31,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1502,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 19,
  "time_alive": 1280,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1474,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 17,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1533,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1476,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1532,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1482,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 5,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 4,
  "time_alive": 1484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 2,
  "time_alive": 1502,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 10,
  "time_alive": 1413,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 20,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 6,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 2,
  "time_alive": 1540,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1487,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 7,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1522,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1497,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 2,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 1,
  "time_alive": 1494,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 6,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 2,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1458,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 16,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1510,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 9,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 3,
  "time_alive": 1503,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 2,
  "time_alive": 1522,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 12,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 4,
  "time_alive": 1467,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 6,
  "time_alive": 1467,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 20,
  "time_alive": 1215,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 22,
  "time_alive": 1182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 5,
  "time_alive": 1474,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1476,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 1,
  "time_alive": 1526,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 11,
  "time_alive": 1439,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 27,
  "time_alive": 300,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 17,
  "time_alive": 1296,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 18,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 2,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "1ae73eb60d1a4bed839e6690f87f5163:679f00c2433447e69fe0f9a1baab23a9:ada12ed94480435f89a1d9d7ea85a63d",
  "placement": 3,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 3,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 18,
  "time_alive": 1252,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 6,
  "time_alive": 1472,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 22,
  "time_alive": 1179,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 29,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 1,
  "time_alive": 1540,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 6,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 2,
  "time_alive": 1532,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 20,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 5,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "7d81d175b22d4ac385bf88fbb98b7257:acc9309a24ff411581a753aa2054fd7c:d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 7,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 13,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 9,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 4,
  "time_alive": 1483,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 4,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 25,
  "time_alive": 1122,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 7,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 14,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 12,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 25,
  "time_alive": 903,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1516,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 22,
  "time_alive": 1149,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 5,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 7,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 5,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 18,
  "time_alive": 1246,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 13,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 4,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 2,
  "time_alive": 1526,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 23,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 5,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 15,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 19,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 8,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a:8810f7b49b484bc3992e78e4cda05d76:939ac1586e384d1c8363e6ee49124e52",
  "placement": 8,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 9,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 17,
  "time_alive": 1335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 13,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 9,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 33,
  "time_alive": 148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 3,
  "time_alive": 1524,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 3,
  "time_alive": 1540,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 7,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 16,
  "time_alive": 1303,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 6,
  "time_alive": 1451,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 17,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "8095f4f4d33d48bb81bd3fb0a047ceaf:84afe8633308425f8269f94cc5c152b6:b0a7e840560e4b79b4483afd02c63237",
  "placement": 10,
  "time_alive": 1396,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 4,
  "time_alive": 1494,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 16,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 7,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 24,
  "time_alive": 1133,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 7,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 12,
  "time_alive": 1403,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 25,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 23,
  "time_alive": 1004,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 10,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 31,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "256dade0efbc4962aba2e2fa53c0cb7c:951acca5846d45dfaf7cf8ada5c56fa1:b5126124813b4a168347e9119236840d",
  "placement": 2,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 10,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 1,
  "time_alive": 1520,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 10,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 24,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 21,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 10,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 23,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 4,
  "time_alive": 1485,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "01a80c2a1fca4dcb80665afff876d977:185e2699a4c3491ab36918670d09717b:517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 12,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 8,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 2,
  "time_alive": 1494,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 31,
  "time_alive": 706,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 14,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 20,
  "time_alive": 1214,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 10,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 17,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 6,
  "time_alive": 1449,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 11,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 6,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "133825a98ece4a04a410b02ad99b46b2:7ddb4150d33e4849af65028ad7407237:b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 16,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 11,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 8,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 28,
  "time_alive": 887,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 11,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 27,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 10,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 9,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 4,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 12,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 12,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 15,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "0a829a6be92c437ab0f626f0909f22ea:4bcff805b2b640d7998a5fc9be958dbf:b2b0fbd1cf4e4b51b01d83f8c5d03cc0",
  "placement": 23,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 10,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 12,
  "time_alive": 1389,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 5,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 32,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 2,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 32,
  "time_alive": 168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 15,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 32,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 10,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 22,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 16,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "18f421b50754411f86c60ff6b89aa812:af65b468a9764fcab47876f40836e6c3:edd63da92a5c46dab17f688e82063490",
  "placement": 20,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 18,
  "time_alive": 1301,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 28,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 20,
  "time_alive": 1228,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 3,
  "time_alive": 1490,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 15,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 6,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 16,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 4,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 16,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 7,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "16f62e6eae95476eaba1b71576178819:1d313c1dd01e410597a4aff0e63ca24a:205de81f5e7d4171b4433f1d0e2c5ece",
  "placement": 22,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 29,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 14,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 30,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 8,
  "time_alive": 1454,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 30,
  "time_alive": 536,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 15,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 12,
  "time_alive": 1435,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 20,
  "time_alive": 1226,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 11,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 5,
  "time_alive": 1475,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "341128be51804cdebde3b18847d51939:8baf28eab51548e69232d03509c13382:f2a3b26df9514fac90bf56304a512f62",
  "placement": 13,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 14,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 26,
  "time_alive": 963,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 23,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 12,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 9,
  "time_alive": 1443,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 11,
  "time_alive": 1418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 13,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 24,
  "time_alive": 1047,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 5,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 7,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "5b9c44b8c24447c5b5314b2e4a6db887:eb9b94f732b54240afc13e5f8d267e7f:f07209e0fe1c4d9fb4a28f6be4192932",
  "placement": 18,
  "time_alive": 1256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 27,
  "time_alive": 919,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 10,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 16,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 15,
  "time_alive": 1360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 21,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 18,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 16,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 2,
  "time_alive": 1487,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 27,
  "time_alive": 781,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 21,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 24,
  "time_alive": 1119,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "c5dba93373204939831770188d9bd221:dba719cb87f34cc4874f7437e94a46e7:dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 6,
  "time_alive": 1445,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 15,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 24,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 19,
  "time_alive": 1229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 22,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 16,
  "time_alive": 1388,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 25,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 13,
  "time_alive": 1356,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 8,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 14,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 3,
  "time_alive": 1495,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f:d4e9094cbad547e5a3498476dc62fd1b:d873c20be2014719b37a3d4e9999a983",
  "placement": 13,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 25,
  "time_alive": 1017,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 6,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 24,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 16,
  "time_alive": 1339,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 12,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 9,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 19,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 18,
  "time_alive": 1327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 14,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 28,
  "time_alive": 653,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 26,
  "time_alive": 738,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "1d7d294ffa044319b9e09d37956b29e3:35476aab7fa1457b92050ee6fea9e796:8cc7ed426e6e455287d352a866fcf02b",
  "placement": 26,
  "time_alive": 456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 22,
  "time_alive": 1101,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 29,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 29,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 25,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 8,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 4,
  "time_alive": 1497,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 20,
  "time_alive": 1304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 15,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 31,
  "time_alive": 238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 24,
  "time_alive": 993,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 11,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc:ac336a2f604f4d4195b16e422b18c9d6:cf8adf98830a443aa2c7c8b47487d75e",
  "placement": 27,
  "time_alive": 393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 19,
  "time_alive": 1294,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 7,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 17,
  "time_alive": 1275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 17,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 18,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 27,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 8,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 14,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 13,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 9,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "0119db46561b469797df2fed1153c8fc:8065b091e641465dac0ffc8bf088fa43:9b920a0684234c9e9b10b996ec6ea026",
  "placement": 19,
  "time_alive": 1219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 23,
  "time_alive": 1073,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 30,
  "time_alive": 402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 3,
  "time_alive": 1493,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 28,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 28,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 23,
  "time_alive": 1020,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 18,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 11,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 26,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 29,
  "time_alive": 434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 25,
  "time_alive": 849,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "5c241d61e1ca4788a913a5ad7149f65a:88aa191f71c44cfdb39f0c2482f1149d:fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 9,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 20,
  "time_alive": 1195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 32,
  "time_alive": 159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 33,
  "time_alive": 107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 7,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 32,
  "time_alive": 278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 14,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 31,
  "time_alive": 177,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 8,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 33,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 17,
  "time_alive": 1357,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 19,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "0024edd3fcd6491f86297ddb76281dc0:a4116979cb3b49ae8c1db843cdafa66f:d933c662555a4405b84b628ca7339f3a",
  "placement": 17,
  "time_alive": 1298,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 21,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 21,
  "time_alive": 1203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 9,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 14,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 23,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 28,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 7,
  "time_alive": 1485,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 18,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 9,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 27,
  "time_alive": 654,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d:e6eb3d526fb642b6b56e91e763a7aa66:ebd5e74947244405b8a5ad337d9cd607",
  "placement": 24,
  "time_alive": 525,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 24,
  "time_alive": 1031,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 27,
  "time_alive": 961,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 11,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 23,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 13,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 8,
  "time_alive": 1450,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 21,
  "time_alive": 1197,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 9,
  "time_alive": 1405,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 26,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 29,
  "time_alive": 544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "52bc15431e79497eb535f39ec61f07c1:d47b6402fdad444d8f9761f8b75d5fd1:e1b76b7232bd472b91c79647323e8f5a",
  "placement": 31,
  "time_alive": 163,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 12,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 19,
  "time_alive": 1234,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 8,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 27,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 11,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 26,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 25,
  "time_alive": 954,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 19,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 24,
  "time_alive": 980,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 21,
  "time_alive": 1152,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "8b42f09372e2428487a910ed2d34cea0:b34be6dc423f48259d1df810ff645e1a:e3f4866bade84267abec24c822efa5cf",
  "placement": 28,
  "time_alive": 392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 16,
  "time_alive": 1335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 23,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 25,
  "time_alive": 1156,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 30,
  "time_alive": 332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 31,
  "time_alive": 527,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 5,
  "time_alive": 1470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 26,
  "time_alive": 921,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 26,
  "time_alive": 315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 19,
  "time_alive": 1175,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 15,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 14,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "06f1e09103924dcab7bbe0391aa2fe0c:ac3ad646c3034049a4b6b952730d5632:ee4181da43fd4b18b6a9c9fd30687a80",
  "placement": 15,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 22,
  "time_alive": 1188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 14,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 20,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 19,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 30,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 28,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 30,
  "time_alive": 131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 22,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 8,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 32,
  "time_alive": 289,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "0c8b473f88bf4d7e803e4fbcd562cda3:939b46fd8aaa453bbcae3d1ab183e7a0:fcbdfec8d37f439dafd3876686ec68d3",
  "placement": 14,
  "time_alive": 1340,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 30,
  "time_alive": 693,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 11,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 31,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 6,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 33,
  "time_alive": 132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 29,
  "time_alive": 241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 31,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 33,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "399286cdb88c4a68b27d94280db11941:5102cc29f0814c6fb8d0ee4e20781dce:5abd6282fc164a62a8503dee6781a41f",
  "placement": 32,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 13,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 21,
  "time_alive": 1185,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 26,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 24,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 19,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 30,
  "time_alive": 208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 29,
  "time_alive": 228,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 29,
  "time_alive": 369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 27,
  "time_alive": 850,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 28,
  "time_alive": 654,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "177e5745b77841998c779a435387dd7d:b282228edbc24f6fa9293ce1703fa6c5:b2a1058b2dd8466d9c3aab22c0606553",
  "placement": 25,
  "time_alive": 494,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 28,
  "time_alive": 910,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 15,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 26,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 29,
  "time_alive": 455,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 26,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 13,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 24,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 28,
  "time_alive": 552,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 31,
  "time_alive": 272,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 30,
  "time_alive": 383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "6d61144f4849444786e8bf2cc73834d2:747b5257a4284db78f0c0fcf42b2d475:91fb7b3449c940108f8caa6cb2fb2631",
  "placement": 30,
  "time_alive": 254,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 25,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 27,
  "time_alive": 910,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 18,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 29,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 31,
  "time_alive": 298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 27,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 22,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 13,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 30,
  "time_alive": 428,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 23,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d:ce5405cac26642a797168defdc5a1926:f7642e2b5e6a43e7b5dbb1885278900e",
  "placement": 29,
  "time_alive": 326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "66546263-6f08-43f7-8460-69b78bc9830b",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 26,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8809252f-13f3-44d9-8bb9-0613f20cb179",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 31,
  "time_alive": 355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5027016a-7315-4dd9-bf3a-a1384f6e3b48",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 15,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4e98ccfe-f88f-48bf-9730-0803570a6d2d",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 21,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36075757-9864-44e7-a88e-65133bf562c6",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 17,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "96fd5cf6-22cd-42c3-a0f9-32ca6cd08b4a",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 21,
  "time_alive": 1183,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "95b12617-6a27-49f1-ab79-77f670ef9182",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 22,
  "time_alive": 1186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e9c09e3-f09f-4950-adf3-fcc8f6f9b129",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 28,
  "time_alive": 273,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3a83964f-c1eb-44ed-89ba-265a5a89c3b2",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 30,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cba38856-5f18-4cc9-bfce-983e304d9ea8",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 25,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64617123-2db0-465f-9572-8c50fe1ce5e1",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 18,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c806c2d-8393-431a-ac72-4315848b7909",
  "team_id": "584922c931764834bd81a2e608183cdc:a2f8fb1b785347698b21f932d324eba2:fe1cfcf99f6b4f05ab8f41ad6402c3e5",
  "placement": 21,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 6,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1476,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 7,
  "time_alive": 1424,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1478,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 17,
  "time_alive": 1247,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 6,
  "time_alive": 1493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1468,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 2,
  "time_alive": 1506,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1480,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1520,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 9,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 17,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 5,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 6,
  "time_alive": 1444,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 6,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 8,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 1,
  "time_alive": 1511,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 16,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 3,
  "time_alive": 1467,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 1,
  "time_alive": 1506,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 9,
  "time_alive": 1396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 11,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "2970c129b41d4373a875cea459c1a19c:6552f35011b34bfa92f1eeb4bb76fd05:7c0e7c438f1d4bb7bf6aba65426eb220",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 19,
  "time_alive": 1285,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 1,
  "time_alive": 1524,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 16,
  "time_alive": 1322,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 31,
  "time_alive": 183,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 15,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 7,
  "time_alive": 1435,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 7,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 20,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 8,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 3,
  "time_alive": 1455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 7,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "38c4dd7a03784c31b2256c37f880c68e:56cac96821b44473a545754da6146752:f6510208be3546ebb6e6df8fe19c62eb",
  "placement": 1,
  "time_alive": 1494,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 5,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 2,
  "time_alive": 1524,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 2,
  "time_alive": 1476,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 24,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 18,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 9,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 15,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 12,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 14,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 15,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 2,
  "time_alive": 1520,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed:c90e8c91e7c240da9b99a10db204ae23:e173a262484d4bd29b081c993c505785",
  "placement": 2,
  "time_alive": 1494,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 15,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 4,
  "time_alive": 1484,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 20,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 7,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 3,
  "time_alive": 1483,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 9,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 27,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 11,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 4,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "6eeb88fef202442c9645a9609e557e87:addf33c9380f45bdbe7b66ebfc0a9e82:f4b918cfe0654eca898f2143665e899a",
  "placement": 5,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 1,
  "time_alive": 1500,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 8,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 13,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 18,
  "time_alive": 1245,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 2,
  "time_alive": 1478,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 12,
  "time_alive": 1370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 11,
  "time_alive": 1396,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 9,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 5,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 11,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 13,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "59fdfc414bde4cbc898e67fd1fc5b7dc:941f52e5d8fe425ea876b547b6a177ce:a871de2181ba402eb4e506adefca8fd4",
  "placement": 18,
  "time_alive": 1322,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 4,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 19,
  "time_alive": 1203,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 3,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 2,
  "time_alive": 1482,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 9,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 18,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 24,
  "time_alive": 1007,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 16,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 3,
  "time_alive": 1455,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 12,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 30,
  "time_alive": 302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "0aef1dba578e435ba4ab5f1b14b72bb6:3897ce4d52e34ea6882bfe077db7f5d5:a0c85adce26c4808972bcfb983576ed2",
  "placement": 3,
  "time_alive": 1488,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 31,
  "time_alive": 424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 12,
  "time_alive": 1422,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 9,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 8,
  "time_alive": 1422,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 11,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 5,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 30,
  "time_alive": 138,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 2,
  "time_alive": 1468,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 6,
  "time_alive": 1436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 19,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 3,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "7874eb514eb642248bbc12576db975ce:8eb77c81a5fb42138f10c99fc0a43fee:8f70b28514654de79990b01aef245109",
  "placement": 7,
  "time_alive": 1469,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 7,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 14,
  "time_alive": 1393,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 23,
  "time_alive": 1009,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 1,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 10,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 13,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 26,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 5,
  "time_alive": 1443,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 15,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 5,
  "time_alive": 1437,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 4,
  "time_alive": 1474,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf:1c39ddb4cf3e4973b6f0e5bf1a4b419e:a1b25cfc6f294d55825a03b5443baaed",
  "placement": 15,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 13,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 15,
  "time_alive": 1312,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 10,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 3,
  "time_alive": 1471,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 16,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 6,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 4,
  "time_alive": 1506,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 18,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 17,
  "time_alive": 1352,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 7,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 14,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96:9081de6131204168ac7f73fb7a174952:a444846fa45d4206878cb789a629c126",
  "placement": 6,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 21,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 11,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 17,
  "time_alive": 1234,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 5,
  "time_alive": 1443,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 13,
  "time_alive": 1340,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 2,
  "time_alive": 1511,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 17,
  "time_alive": 1293,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 6,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 16,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 8,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 15,
  "time_alive": 1363,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "258907a88a7242978e73ebc353b60cf8:376fc61c36114d6a8ea5db25c74ec5fd:853bbff098e249038760ae39dfae5924",
  "placement": 21,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 3,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 9,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 30,
  "time_alive": 446,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 4,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 25,
  "time_alive": 1115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 24,
  "time_alive": 921,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 5,
  "time_alive": 1505,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 14,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 9,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 14,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 19,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46:48877ef7a3fe43bcbdf656f90857e4d0:91fdc2ec08984e2bbc0b2e1d41e8fd01",
  "placement": 14,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 9,
  "time_alive": 1415,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 13,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 8,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 25,
  "time_alive": 947,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 5,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 19,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 21,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 7,
  "time_alive": 1428,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 4,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 13,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 22,
  "time_alive": 1020,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "b6e6bbbb3949461ba4c1a466d0c24cf2:d4f1927f9eaa42e0ae3f5dfcc6b61b9d:df22b4b9b22b40f88b563db462bfea22",
  "placement": 10,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 18,
  "time_alive": 1330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 10,
  "time_alive": 1440,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 14,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 9,
  "time_alive": 1412,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 12,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 16,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 2,
  "time_alive": 1524,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 26,
  "time_alive": 942,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 19,
  "time_alive": 1221,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 2,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 18,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "1d6540464d7941968099c4737cb55587:8913629aa8bf4c0282de2e7e17c1e661:d9ec487830a942a6bf322dbb066a7a74",
  "placement": 17,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 16,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 7,
  "time_alive": 1449,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 4,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 15,
  "time_alive": 1315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 21,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 26,
  "time_alive": 752,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 1,
  "time_alive": 1524,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 28,
  "time_alive": 626,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 23,
  "time_alive": 1096,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 23,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 10,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "13ee67e67f734319ac5faaa28c9452df:1de579fa0ebd4fb49051ef46afb37826:3aa14ab8f1d64ac5a02c5a7559362a6c",
  "placement": 13,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 2,
  "time_alive": 1500,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 16,
  "time_alive": 1243,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 26,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 21,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 13,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 20,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 6,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 9,
  "time_alive": 1417,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "58bde9b6296441b7a8e2244434e103c3:ad431d56c78e4123b4ed8cadeb492d5e:c3915f3aba04441bae67890758a1d420",
  "placement": 11,
  "time_alive": 1432,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 10,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 20,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 15,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 14,
  "time_alive": 1317,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 31,
  "time_alive": 340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 25,
  "time_alive": 798,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 3,
  "time_alive": 1511,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 10,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 10,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 16,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 26,
  "time_alive": 918,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "4789f42e87c742dd998d203b8585ed26:8df231e2ee1a4159a10e9ea3791a81ac:961d4c2b86b24bfcae5bb504d5c4be73",
  "placement": 28,
  "time_alive": 329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 8,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 25,
  "time_alive": 919,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 11,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 22,
  "time_alive": 1212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 4,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 4,
  "time_alive": 1473,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 10,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 29,
  "time_alive": 573,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 26,
  "time_alive": 662,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 25,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 16,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "27ccc9f2de894fdc9b098aca1b14a59c:2d851cfde69b44bdbc574726dba1a854:6d5a0e9d550e448198e1ac7902b2758d",
  "placement": 19,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 20,
  "time_alive": 1221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 17,
  "time_alive": 1232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 26,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 10,
  "time_alive": 1377,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 23,
  "time_alive": 1178,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 8,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 18,
  "time_alive": 1257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 11,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 29,
  "time_alive": 502,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 10,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 8,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "474e305d75d341919bab32fb5c4650d1:71e8eb4d8ba14e579cdcd79843248433:c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 24,
  "time_alive": 981,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 27,
  "time_alive": 871,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 7,
  "time_alive": 1435,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 13,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 20,
  "time_alive": 1244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 20,
  "time_alive": 1154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 14,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 8,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 18,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 29,
  "time_alive": 231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 21,
  "time_alive": 1034,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "36737831e5c742dbb03718b61b694733:47f7557b1cae48dcb4deee8fdbcbb365:dc7e982f647941c98f1bc303823106cc",
  "placement": 4,
  "time_alive": 1480,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 24,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 21,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 29,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 20,
  "time_alive": 1233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 3,
  "time_alive": 1450,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 22,
  "time_alive": 1122,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 13,
  "time_alive": 1367,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 21,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 13,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 26,
  "time_alive": 568,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 25,
  "time_alive": 925,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "186a7dbf166e4b23b55e5475749c75f1:4079c0a6bff843ae963f491b85fec49b:ec04121f188a4e2190480dc384b47e3d",
  "placement": 8,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 29,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 28,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 22,
  "time_alive": 1082,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 26,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 14,
  "time_alive": 1340,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 31,
  "time_alive": 315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 22,
  "time_alive": 1103,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 7,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 17,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 29,
  "time_alive": 485,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "6635e5b0260b49c7b57efef694ffec91:77591e40164649cb9c0e9ce84555cc21:84e34469503843a599c12020628b918a",
  "placement": 30,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 25,
  "time_alive": 1041,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 26,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 27,
  "time_alive": 870,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 30,
  "time_alive": 252,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 32,
  "time_alive": 204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 10,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 19,
  "time_alive": 1171,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 23,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 28,
  "time_alive": 534,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 18,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 6,
  "time_alive": 1442,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "0dfdec72bb89429ebfdd450fc3aa650c:6f0c6edecb2b4e63b3c701931725969b:8059ef43472e4015bb5dc5244c72b48e",
  "placement": 25,
  "time_alive": 563,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 28,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 30,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 18,
  "time_alive": 1186,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 27,
  "time_alive": 800,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 29,
  "time_alive": 602,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 27,
  "time_alive": 486,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 8,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 19,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 12,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 24,
  "time_alive": 1088,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 23,
  "time_alive": 1015,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "4a368bc629a5429cae564e37d28649c3:580f8a2593154c4d818334435b1e2d13:d2e520a33ef74f42832f265559dd393b",
  "placement": 16,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 22,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 6,
  "time_alive": 1454,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 5,
  "time_alive": 1455,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 21,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 24,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 14,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 23,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 24,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 21,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 22,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 27,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "2d86ff8b95a14a62b5ffd8a757042169:3a19c4f6b72446a3bf27805102418ace:7c705f8224d14b8d89c54c11e11d3023",
  "placement": 22,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 11,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 18,
  "time_alive": 1216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 31,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 23,
  "time_alive": 1183,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 22,
  "time_alive": 1186,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 15,
  "time_alive": 1336,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 20,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 15,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 24,
  "time_alive": 1072,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 20,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 28,
  "time_alive": 572,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "10de347e6cdd498e897bc5e187794d98:69e6215424954cb6a8b580bcd0f4097b:e5f2e65e78974fc98d61ba81c82f79ef",
  "placement": 26,
  "time_alive": 549,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 30,
  "time_alive": 621,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 23,
  "time_alive": 1060,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 25,
  "time_alive": 921,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 29,
  "time_alive": 261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 19,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 11,
  "time_alive": 1372,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 28,
  "time_alive": 496,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 22,
  "time_alive": 1211,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 25,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 20,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "69ae4a0ce75f4e439563db06e5d11253:b858fa905b044179ac4d64dce5c5caaf:dd50d22e1403420ca8a08ed7f5607538",
  "placement": 20,
  "time_alive": 1250,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 19,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 16,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 6,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "9f26462a3da649aab1fd7426163faefc:ca8288e8ac2b4cedbe537c52af6509d9:df3e45a1acb645748de9d735c1bb562d",
  "placement": 32,
  "time_alive": 204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 27,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 31,
  "time_alive": 638,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 24,
  "time_alive": 1007,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 32,
  "time_alive": 137,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 28,
  "time_alive": 769,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 30,
  "time_alive": 342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 25,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 25,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 22,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 28,
  "time_alive": 323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 12,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "2be35931b6424e908be60ec88cfce420:9380e3e84e204762b479c7da68c3e7e6:ca5cea26f8b64ac6aac3c30e457cb0f9",
  "placement": 29,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 26,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 24,
  "time_alive": 1011,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 21,
  "time_alive": 1126,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 28,
  "time_alive": 450,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 23,
  "time_alive": 988,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 29,
  "time_alive": 323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 30,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 30,
  "time_alive": 486,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 27,
  "time_alive": 465,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 17,
  "time_alive": 1246,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "8a8d8a3b43f84e79bc9955e6c65e9046:ba838fd3653f42399d8f8298b1abbf62:d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 23,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 28,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 19,
  "time_alive": 1235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 17,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "4ff014492756492e8cd0fce71c030a79:834d2a57e7534998987f32161f4c3214:e0f0d8f634b94ffa8be9a1326472c94f",
  "placement": 28,
  "time_alive": 431,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2f9de9fa-0cd2-49ad-ba7b-6d7f830f8f83",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 23,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0b299c5a-d55b-409c-95f0-d8fad8d1e707",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 22,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ddc06d0-dccb-4abf-a448-0f35c4fedd07",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 32,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "06b9a200-251f-441f-b26c-43837a5608b0",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 17,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "037e83ca-30ab-4b9c-bcb5-4da24980159d",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 30,
  "time_alive": 408,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d5b33f85-c7fc-49ee-ab40-b7994c93a0c5",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 29,
  "time_alive": 419,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0c989d-2995-425b-af18-d0ab17b8dfe1",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 27,
  "time_alive": 530,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1ead4e32-078a-496f-9678-1c56d2d0f84a",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 17,
  "time_alive": 1338,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9eb95655-9050-4ad9-be8e-dd9544704768",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 27,
  "time_alive": 611,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e31b3d1-67b8-4bf2-b3b4-5a4c87d6e182",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 21,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "1a3660a4f8284adb810ea9aed3b5eea9:82210ca40af74bbebe424195c4954349:9157d81d5ad94eaba1592069da3df047",
  "placement": 24,
  "time_alive": 971,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56599e89-5a2f-4a98-a779-6d6968298b9f",
  "team_id": "34bb05dfecd64acdb21c754ae9b7fcbd:cdc62c7e029541599d7d2dc147063c0c:d1a4a6d2c7eb42e8a2d0b871091a39f0",
  "placement": 31,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "11e7c510-3195-4e20-9d41-730769968eb9",
  "team_id": "34bb05dfecd64acdb21c754ae9b7fcbd:cdc62c7e029541599d7d2dc147063c0c:d1a4a6d2c7eb42e8a2d0b871091a39f0",
  "placement": 27,
  "time_alive": 422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 2,
  "time_alive": 1539,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1517,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 10,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1509,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 5,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 23,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 3,
  "time_alive": 1533,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1488,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 18,
  "time_alive": 1215,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 8,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 8,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "2280a17c6cce46e791004b545156c9d6:714363a2e4d3426090aca59f76489981:e6ead8c880d645a7b21a7787da048336",
  "placement": 4,
  "time_alive": 1501,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1539,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 30,
  "time_alive": 258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 23,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1492,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1519,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 1,
  "time_alive": 1542,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1346,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 24,
  "time_alive": 1028,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 5,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 7,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "000b828ce2904e63b1b0dd5a5b8f67e2:366227707b494963b0236f75fd060374:c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 28,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 14,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1545,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 9,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1475,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 9,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 17,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 10,
  "time_alive": 1361,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 15,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 4,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 3,
  "time_alive": 1493,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "22b05da17e9b460d9874e6426f271e45:3a99d915aff54fbe821c0335cd3a7199:4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 1,
  "time_alive": 1542,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 11,
  "time_alive": 1448,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 6,
  "time_alive": 1467,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 1,
  "time_alive": 1551,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 33,
  "time_alive": 164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 7,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 2,
  "time_alive": 1519,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 14,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 16,
  "time_alive": 1318,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 14,
  "time_alive": 1330,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 2,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1c540b51-8bfb-4ac6-950d-7ba7b2f5eb03",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 12,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57244fef-41ec-40e5-8c1a-dcb426fbd4a5",
  "team_id": "21ed08e8652845a789fa672be388cfb2:6fdeb1b5b9574726a0b1906b25a0a35e:dc5f2f9565be4673a138731ab6451a43",
  "placement": 15,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a2117f1-6e55-46e8-be63-bacf0facd249",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 9,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc83f0a-1f25-41af-9719-cdf643f36e86",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 2,
  "time_alive": 1520,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "57a285e3-71d5-4121-b6aa-92a516628b6f",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 4,
  "time_alive": 1537,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6de4b645-4b29-41c6-89b5-e36a7b9afe56",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 11,
  "time_alive": 1444,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70889ca0-3e27-43ce-bb1b-f10f9baadb87",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 4,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7fd44734-c322-4b01-95cc-665e32e00a58",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 7,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c487fb2-92a1-47d1-8766-737a8c2964ea",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 11,
  "time_alive": 1456,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87fdfe4c-3bcf-4d12-b612-01b0b8f91739",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 4,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0c15e983-cce0-4d6e-a2f7-8bd4cf8917c5",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 5,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c929872-1b2a-4628-b0fa-cefe466afcad",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80:52ce93aa9096448aba204e702e17244d:c20b43b4064b4c45b6fddf6c687231b6",
  "placement": 18,
  "time_alive": 1184,
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
    