const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 63,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "5b490832f3ee45efa0b485aa5b04bd3b",
  "placement": 86,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "5b490832f3ee45efa0b485aa5b04bd3b",
  "placement": 38,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "5b490832f3ee45efa0b485aa5b04bd3b",
  "placement": 91,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "5b490832f3ee45efa0b485aa5b04bd3b",
  "placement": 51,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "5b490832f3ee45efa0b485aa5b04bd3b",
  "placement": 38,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "5b490832f3ee45efa0b485aa5b04bd3b",
  "placement": 22,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 8,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 72,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 89,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 90,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "c7913b4b42654e2491b756025aa00c49",
  "placement": 77,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 31,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 61,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 52,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 57,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 62,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "92fb9de246d54069890b9918fd6df4b4",
  "placement": 66,
  "time_alive": 628,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 98,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 13,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 95,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 82,
  "time_alive": 375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "774c237938e94d5ea17f27174add5585",
  "placement": 61,
  "time_alive": 812,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 28,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 73,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 32,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 83,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 80,
  "time_alive": 456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 69,
  "time_alive": 490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "6b4251fd0af14538ad4659dafda9715f",
  "placement": 73,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "6b4251fd0af14538ad4659dafda9715f",
  "placement": 67,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "6b4251fd0af14538ad4659dafda9715f",
  "placement": 26,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "6b4251fd0af14538ad4659dafda9715f",
  "placement": 62,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "6b4251fd0af14538ad4659dafda9715f",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "6b4251fd0af14538ad4659dafda9715f",
  "placement": 59,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 45,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 50,
  "time_alive": 1209,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 85,
  "time_alive": 340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 81,
  "time_alive": 439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 74,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 67,
  "time_alive": 981,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 28,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 90,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 75,
  "time_alive": 735,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 98,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "3371028fa5454fddaa972592dc8db8d1",
  "placement": 88,
  "time_alive": 193,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "08d4b3f8f6f841b3ada0442a7eb36cfd",
  "placement": 53,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "08d4b3f8f6f841b3ada0442a7eb36cfd",
  "placement": 53,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "08d4b3f8f6f841b3ada0442a7eb36cfd",
  "placement": 51,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "08d4b3f8f6f841b3ada0442a7eb36cfd",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "08d4b3f8f6f841b3ada0442a7eb36cfd",
  "placement": 58,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "08d4b3f8f6f841b3ada0442a7eb36cfd",
  "placement": 37,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 87,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 55,
  "time_alive": 1145,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 76,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 67,
  "time_alive": 928,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 61,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "cbeaf9aa540745a99cc30ea5df39e2ff",
  "placement": 25,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "0de97b61e5a3448cba327afb89ab99a5",
  "placement": 21,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "0de97b61e5a3448cba327afb89ab99a5",
  "placement": 45,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "0de97b61e5a3448cba327afb89ab99a5",
  "placement": 85,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "0de97b61e5a3448cba327afb89ab99a5",
  "placement": 77,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "0de97b61e5a3448cba327afb89ab99a5",
  "placement": 56,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "0de97b61e5a3448cba327afb89ab99a5",
  "placement": 94,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 51,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 84,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 77,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 28,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 94,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "529cce0158ad4101aed5e7a2756f10d7",
  "placement": 84,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 57,
  "time_alive": 1095,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 93,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 42,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 73,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 77,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "7cfb2ea24d8c4075b8e01cd85a88e7ac",
  "placement": 44,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 44,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 33,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 66,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 80,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 89,
  "time_alive": 272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "f9ede9b00b3f45ffad5cd18625848a1b",
  "placement": 73,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "b09163f37bfe4b75a6322c49cb0c3c8e",
  "placement": 85,
  "time_alive": 682,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "b09163f37bfe4b75a6322c49cb0c3c8e",
  "placement": 97,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "b09163f37bfe4b75a6322c49cb0c3c8e",
  "placement": 60,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "b09163f37bfe4b75a6322c49cb0c3c8e",
  "placement": 31,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "b09163f37bfe4b75a6322c49cb0c3c8e",
  "placement": 47,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "b09163f37bfe4b75a6322c49cb0c3c8e",
  "placement": 72,
  "time_alive": 410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 88,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 40,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 85,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "0dd7df9b9234455cabc4014a85299df3",
  "placement": 33,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 47,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 56,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 86,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 74,
  "time_alive": 746,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 86,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 70,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 70,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 81,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 87,
  "time_alive": 479,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 88,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 27,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 64,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 88,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 77,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 81,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 64,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "89f0fb21178d46ab9b601ee2a8653100",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 55,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 88,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 79,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 84,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "7f43737d72f842eab659fbe1ff85b4df",
  "placement": 30,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "08b89277f6ab4408a326a388ac0b8277",
  "placement": 49,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "08b89277f6ab4408a326a388ac0b8277",
  "placement": 71,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "08b89277f6ab4408a326a388ac0b8277",
  "placement": 55,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "08b89277f6ab4408a326a388ac0b8277",
  "placement": 88,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "08b89277f6ab4408a326a388ac0b8277",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "9ce95ede3b154c7fb4de9243201ead3e",
  "placement": 82,
  "time_alive": 782,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "9ce95ede3b154c7fb4de9243201ead3e",
  "placement": 82,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "9ce95ede3b154c7fb4de9243201ead3e",
  "placement": 96,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "9ce95ede3b154c7fb4de9243201ead3e",
  "placement": 58,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "9ce95ede3b154c7fb4de9243201ead3e",
  "placement": 67,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "9ce95ede3b154c7fb4de9243201ead3e",
  "placement": 87,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 74,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 90,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 61,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 91,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 82,
  "time_alive": 405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "c6cab05d382c4befaf51fd583a64836a",
  "placement": 81,
  "time_alive": 277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 89,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 62,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 68,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 66,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 75,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "b6e201a22eb74435911db1156e657942",
  "placement": 92,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "1f5bcac2003546148d4d64ad51af9849",
  "placement": 97,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "1f5bcac2003546148d4d64ad51af9849",
  "placement": 70,
  "time_alive": 981,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "1f5bcac2003546148d4d64ad51af9849",
  "placement": 83,
  "time_alive": 640,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "1f5bcac2003546148d4d64ad51af9849",
  "placement": 95,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "1f5bcac2003546148d4d64ad51af9849",
  "placement": 95,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "1f5bcac2003546148d4d64ad51af9849",
  "placement": 80,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 94,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 86,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 74,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 41,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 84,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01729895-8eb6-4980-94e9-7a5d383d46fd",
  "team_id": "ee983d3187b94524b31fdeb1858c1fa4",
  "placement": 96,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09bb714d-66db-45b2-a47e-75bea51b99be",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 77,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "150f6af1-0c9e-4cab-b5ec-d4390b7f47c6",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 74,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0579bc5b-1aac-44d0-be14-7d1dfd5cefd3",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 93,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b861fb6-21c8-4e72-81d5-a39ae9309c1c",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 86,
  "time_alive": 283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "046937ae-43f3-43aa-96d6-99c204e28401",
  "team_id": "60482087e02a4fdea8abb8887295d178",
  "placement": 93,
  "time_alive": 201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 97,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 1,
  "time_alive": 1542,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 87,
  "time_alive": 305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 1,
  "time_alive": 1497,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 10,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 68,
  "time_alive": 509,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 17,
  "time_alive": 1412,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 6,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 31,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1497,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 89,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 68,
  "time_alive": 776,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 5,
  "time_alive": 1475,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 16,
  "time_alive": 1441,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 22,
  "time_alive": 1401,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 6,
  "time_alive": 1481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 77,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 2,
  "time_alive": 1542,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 4,
  "time_alive": 1509,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 18,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "810f0c98be5049358c75d75ec627d748",
  "placement": 11,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 15,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 18,
  "time_alive": 1413,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 85,
  "time_alive": 373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 6,
  "time_alive": 1446,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 71,
  "time_alive": 636,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 42,
  "time_alive": 1175,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 5,
  "time_alive": 1525,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 73,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 51,
  "time_alive": 1092,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 20,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 66,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 16,
  "time_alive": 1436,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 87,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 22,
  "time_alive": 1393,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 9,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 5,
  "time_alive": 1452,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 57,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "a811a94137d94a59bec4ea99b234706c",
  "placement": 49,
  "time_alive": 960,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 4,
  "time_alive": 1526,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 10,
  "time_alive": 1443,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 84,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 74,
  "time_alive": 565,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 98,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c46136087164417ba7ba5f69c679ea59",
  "placement": 10,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 10,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 76,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 56,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 32,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 5,
  "time_alive": 1486,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "b4695df986e4426a90b08279d169675f",
  "placement": 20,
  "time_alive": 1424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 18,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 44,
  "time_alive": 1225,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 3,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 7,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 41,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 30,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 11,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 89,
  "time_alive": 371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 2,
  "time_alive": 1522,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 84,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 19,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 3,
  "time_alive": 1511,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 31,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 12,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 37,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 23,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 4,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c33ebd57cce04e18a313996e176b42ac",
  "placement": 35,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 7,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 15,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 20,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 65,
  "time_alive": 822,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 64,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 7,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 9,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 7,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 60,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 33,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 38,
  "time_alive": 1351,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 22,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 19,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 31,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 53,
  "time_alive": 1019,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 82,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 2,
  "time_alive": 1510,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 46,
  "time_alive": 1103,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 56,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 9,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 1,
  "time_alive": 1522,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 62,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 43,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c57c6b8fb23f48d08dd586e1927a227a",
  "placement": 38,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 24,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 61,
  "time_alive": 1067,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 33,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 81,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 19,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 47,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 81,
  "time_alive": 523,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 11,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 55,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 1,
  "time_alive": 1510,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 69,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 3,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 68,
  "time_alive": 958,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 18,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 76,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 33,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 24,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 8,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 12,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 55,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 31,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 90,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 59,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 39,
  "time_alive": 1325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 11,
  "time_alive": 1422,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 15,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 93,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 74,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 16,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 42,
  "time_alive": 1265,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 26,
  "time_alive": 1393,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 50,
  "time_alive": 955,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 39,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 24,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 46,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 69,
  "time_alive": 736,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 28,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "6feb4bd885b44bf8a6ce3b986d35407f",
  "placement": 5,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 22,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 72,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 75,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 37,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 3,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "925521bb87d543dd8872cb68034afce0",
  "placement": 29,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 1,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 49,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 44,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 25,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 68,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "a35a7a7190d84531b7c2c71dc525c614",
  "placement": 74,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 77,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 8,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 6,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 63,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "7e9151f558ec465491d31219c6a81de9",
  "placement": 59,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 76,
  "time_alive": 584,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 11,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 21,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 16,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 9,
  "time_alive": 1468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "1052e8f818d64aa8b78f7e1f10b51c1b",
  "placement": 94,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 14,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 27,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 54,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 30,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 36,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 34,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 21,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 15,
  "time_alive": 1445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 70,
  "time_alive": 685,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 8,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 60,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 73,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 37,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 97,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 61,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 69,
  "time_alive": 699,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "8dfe8748d1b94f2fb7406fd548177305",
  "placement": 1,
  "time_alive": 1519,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 2,
  "time_alive": 1531,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 27,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 72,
  "time_alive": 702,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 42,
  "time_alive": 1307,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 46,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "61adf5120f704284bc8929a6b1355020",
  "placement": 87,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 30,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 20,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 86,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 31,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 12,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "baf9ef84165b40a481e03da6a482ad62",
  "placement": 39,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 41,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 39,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 12,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 50,
  "time_alive": 1239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 27,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 13,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 71,
  "time_alive": 731,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 4,
  "time_alive": 1517,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 17,
  "time_alive": 1428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 34,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 25,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 67,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 37,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 47,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 70,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 27,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 79,
  "time_alive": 508,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "a9716111ba114088b2a04484e94c2b40",
  "placement": 8,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 20,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 97,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 95,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 17,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 86,
  "time_alive": 357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 17,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 28,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 28,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 76,
  "time_alive": 677,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 73,
  "time_alive": 617,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 72,
  "time_alive": 635,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 33,
  "time_alive": 1348,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 23,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 36,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 26,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 67,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 22,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 57,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 42,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 94,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 22,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 94,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 24,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "e033f41ca03545579a78d8d21fbcb49b",
  "placement": 14,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 29,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 46,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 40,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 56,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 54,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "4c1f24079a434127885a1da3256fb41c",
  "placement": 4,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 8,
  "time_alive": 1494,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 66,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 50,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 10,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 58,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "da953ab85f06481399da8279c8c83a1b",
  "placement": 66,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 40,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 32,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 14,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 18,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 50,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "a63334cf385146fc8198cac55cad610c",
  "placement": 72,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 62,
  "time_alive": 939,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 53,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 25,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 29,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 75,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "218c198ef122461f885deaf8baff6496",
  "placement": 12,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 25,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 99,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 77,
  "time_alive": 620,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 72,
  "time_alive": 622,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 49,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "781c9df9b5f1483a9d06de87be5467aa",
  "placement": 2,
  "time_alive": 1519,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 6,
  "time_alive": 1516,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 17,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 47,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 28,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 76,
  "time_alive": 521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 97,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 14,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 87,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 5,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 99,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 35,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "dbb8001e75c24082a080e35c4cfc6fe5",
  "placement": 54,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 46,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 30,
  "time_alive": 1363,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 54,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 24,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 90,
  "time_alive": 307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 25,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 98,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 92,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 13,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 14,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 60,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 41,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 16,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 23,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 43,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 63,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c591a47ff87641f8ba9223702134d249",
  "placement": 28,
  "time_alive": 1378,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 12,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 86,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 36,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 40,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 78,
  "time_alive": 511,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267",
  "placement": 45,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "9d62534a73f54b77bc8d2a9b1ca541e9",
  "placement": 86,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "9d62534a73f54b77bc8d2a9b1ca541e9",
  "placement": 19,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "9d62534a73f54b77bc8d2a9b1ca541e9",
  "placement": 49,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "9d62534a73f54b77bc8d2a9b1ca541e9",
  "placement": 44,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "9d62534a73f54b77bc8d2a9b1ca541e9",
  "placement": 51,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "9d62534a73f54b77bc8d2a9b1ca541e9",
  "placement": 9,
  "time_alive": 1454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 89,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 77,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 30,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 58,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 11,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 63,
  "time_alive": 618,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 91,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 35,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 43,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 75,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 29,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c1f04f92b8284d43a6259bbcff1db302",
  "placement": 21,
  "time_alive": 1420,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 65,
  "time_alive": 871,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 13,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 68,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 90,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 17,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "86fb292b84e24cbc859b85a8151b8e48",
  "placement": 88,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 79,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 51,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 38,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 8,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 82,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 26,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 52,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 93,
  "time_alive": 299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 32,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 15,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 37,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "21fa6dc671514c38ac85019541d85e4d",
  "placement": 32,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 55,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 69,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 26,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 14,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 71,
  "time_alive": 475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "dbf1d985658143cfb18fbdacfeef6f10",
  "placement": 48,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "dbf1d985658143cfb18fbdacfeef6f10",
  "placement": 50,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "dbf1d985658143cfb18fbdacfeef6f10",
  "placement": 28,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "dbf1d985658143cfb18fbdacfeef6f10",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "dbf1d985658143cfb18fbdacfeef6f10",
  "placement": 16,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "dbf1d985658143cfb18fbdacfeef6f10",
  "placement": 56,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 53,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 41,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 48,
  "time_alive": 1152,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 83,
  "time_alive": 360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 88,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "819b7338773f4cb8956fd59443fe23b7",
  "placement": 6,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 35,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 34,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 55,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 85,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 7,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "eb4cc0f9c9474d599befa08c88e7912b",
  "placement": 53,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 32,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 52,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 29,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 78,
  "time_alive": 459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 70,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 61,
  "time_alive": 636,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 43,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 26,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 79,
  "time_alive": 608,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 60,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 99,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 37,
  "time_alive": 1328,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 64,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 29,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 23,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 47,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 65,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "341c179499594c18924bb1e421347321",
  "placement": 73,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 81,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 45,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 10,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 30,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 56,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "829a5bc5114c4de4aaa6e7b9c921d387",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 80,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 65,
  "time_alive": 997,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 71,
  "time_alive": 724,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 71,
  "time_alive": 676,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 47,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 15,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a",
  "placement": 13,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a",
  "placement": 67,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a",
  "placement": 35,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a",
  "placement": 86,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a",
  "placement": 44,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a",
  "placement": 52,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 33,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 56,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 19,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 57,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 52,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "eb50ea68022d49088da1ae4d8d68485a",
  "placement": 34,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 54,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 60,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 45,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 19,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 36,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "dd4fbfb4917b4ce4a269a5da1aafa069",
  "placement": 84,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 44,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 75,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 65,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 46,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 20,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c92e2e955db64d739c68ad3ada6b9ca7",
  "placement": 75,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 82,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 38,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 58,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 9,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 77,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 62,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 75,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 96,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 83,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 4,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 53,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 58,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 61,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 69,
  "time_alive": 935,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 96,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 92,
  "time_alive": 222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 13,
  "time_alive": 1435,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "6a21dc791c364723a1bf809f9b2af4ba",
  "placement": 95,
  "time_alive": 166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 60,
  "time_alive": 1040,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 40,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 61,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 66,
  "time_alive": 790,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 42,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 43,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "8cbd69791dd540499f44d31ac2e929d4",
  "placement": 3,
  "time_alive": 1534,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "8cbd69791dd540499f44d31ac2e929d4",
  "placement": 90,
  "time_alive": 271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "8cbd69791dd540499f44d31ac2e929d4",
  "placement": 80,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "8cbd69791dd540499f44d31ac2e929d4",
  "placement": 80,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "8cbd69791dd540499f44d31ac2e929d4",
  "placement": 55,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 95,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 7,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 68,
  "time_alive": 763,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 74,
  "time_alive": 555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "9dd5548a10ad490896703f1d80ad4e4a",
  "placement": 47,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 69,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 70,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 39,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 40,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "23fc5737dc254f6899db9d68c192e445",
  "placement": 48,
  "time_alive": 1036,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 78,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 74,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 98,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 21,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 67,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "0e949f4fe9bf4d16ba4ae7eff663630f",
  "placement": 18,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 93,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 62,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 57,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 93,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 31,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "bd5c68b6315f4aa2936b10587060a944",
  "placement": 27,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 45,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 63,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 24,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 95,
  "time_alive": 148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 100,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "017e9dad135e4656ae62417f7f57a913",
  "placement": 64,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 85,
  "time_alive": 278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 48,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 89,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 36,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 21,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "f03ce6916e704f3b8c8c526b107cb9d3",
  "placement": 82,
  "time_alive": 333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 49,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 91,
  "time_alive": 352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 64,
  "time_alive": 892,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 45,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 92,
  "time_alive": 254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "23d02bb5b6874e25910404f4c7ee0a04",
  "placement": 65,
  "time_alive": 527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 70,
  "time_alive": 746,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 84,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 82,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 87,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 73,
  "time_alive": 581,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 23,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 84,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 54,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 66,
  "time_alive": 844,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 13,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 96,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "a1ec9b9ea9b542ac96e97484a8b1c396",
  "placement": 85,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 21,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 42,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 88,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 79,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 97,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 70,
  "time_alive": 486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 72,
  "time_alive": 684,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 82,
  "time_alive": 518,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 91,
  "time_alive": 266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 48,
  "time_alive": 1253,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 85,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 86,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 59,
  "time_alive": 1058,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 78,
  "time_alive": 624,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 52,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 51,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 84,
  "time_alive": 411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "8eda6ef13c084b7ab763adf7076fb019",
  "placement": 44,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 66,
  "time_alive": 846,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 43,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 73,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 41,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 89,
  "time_alive": 310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 76,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 50,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 57,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 81,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 38,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "bf27322351234bc19f2c41833539bbbd",
  "placement": 90,
  "time_alive": 219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 96,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 88,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 59,
  "time_alive": 976,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 89,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 45,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 51,
  "time_alive": 953,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "ea0825effa254d7a95888a6a96f3191d",
  "placement": 67,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "ea0825effa254d7a95888a6a96f3191d",
  "placement": 25,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "ea0825effa254d7a95888a6a96f3191d",
  "placement": 93,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "ea0825effa254d7a95888a6a96f3191d",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "ea0825effa254d7a95888a6a96f3191d",
  "placement": 62,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "ea0825effa254d7a95888a6a96f3191d",
  "placement": 81,
  "time_alive": 340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 94,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 100,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 62,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 77,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 32,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "1ec3f858012e4489be1e7da8cf86874e",
  "placement": 91,
  "time_alive": 211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 92,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 80,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 41,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 91,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 94,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "5f600927ef274dc382b10401ba9b346b",
  "placement": 40,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 36,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 83,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 74,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 81,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 95,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "881f4d75aa3046c5b648a73aea641e69",
  "placement": 83,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 63,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 71,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 88,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 61,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 80,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 55,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 64,
  "time_alive": 1024,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 78,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 52,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 93,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "b1543bbdcd50428e8201d431b18d8717",
  "placement": 96,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "eae197872a7f45c5aa44aa00da95ce90",
  "placement": 58,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "eae197872a7f45c5aa44aa00da95ce90",
  "placement": 85,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "eae197872a7f45c5aa44aa00da95ce90",
  "placement": 92,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "eae197872a7f45c5aa44aa00da95ce90",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "eae197872a7f45c5aa44aa00da95ce90",
  "placement": 48,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "eae197872a7f45c5aa44aa00da95ce90",
  "placement": 100,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 95,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 58,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 80,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 59,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 83,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 92,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "3227a9d645ab4478b51b09b9d96c7650",
  "placement": 88,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "3227a9d645ab4478b51b09b9d96c7650",
  "placement": 98,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "3227a9d645ab4478b51b09b9d96c7650",
  "placement": 63,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "3227a9d645ab4478b51b09b9d96c7650",
  "placement": 64,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "3227a9d645ab4478b51b09b9d96c7650",
  "placement": 59,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "3227a9d645ab4478b51b09b9d96c7650",
  "placement": 79,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 83,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 90,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 67,
  "time_alive": 842,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 49,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 87,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 78,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "015031c0-a48b-46eb-9489-7db3744b8e76",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 57,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "039ddae9-8a9d-41a9-b13c-6d4e8cc346dd",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 79,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03c3a5ec-0f91-43cc-8fd6-384afc5eb3f7",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00cc4061-cdfd-471e-832b-25267b5d9bfd",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 96,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "018e2ae9-aa41-4e8c-8c23-91475a9004a4",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 91,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "002c7acf-2c27-41f7-884b-224778aaf292",
  "team_id": "e90dfc38f97f41259bd34e01a210e884",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 12,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 5,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 84,
  "time_alive": 579,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1507,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1502,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 37,
  "time_alive": 1274,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 33,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 1,
  "time_alive": 1490,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 6,
  "time_alive": 1437,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 30,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 22,
  "time_alive": 1382,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 21,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 69,
  "time_alive": 960,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 11,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 78,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 2,
  "time_alive": 1507,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 2,
  "time_alive": 1502,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "aa6e9fc100084a70836ddcab3630f302",
  "placement": 1,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 2,
  "time_alive": 1504,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 4,
  "time_alive": 1458,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 73,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 12,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 51,
  "time_alive": 1021,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 87,
  "time_alive": 708,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 17,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 1,
  "time_alive": 1473,
  "elims": 11,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 37,
  "time_alive": 1352,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 38,
  "time_alive": 1246,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 24,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 2,
  "time_alive": 1490,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 33,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 11,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 35,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "1ec30c9532074b6583f075c27c7bef27",
  "placement": 11,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 3,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 77,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 14,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 5,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 61,
  "time_alive": 884,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 77,
  "time_alive": 412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 4,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 22,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 69,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 25,
  "time_alive": 1382,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 23,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "ebac60e883df47f6a933096780b5ee64",
  "placement": 17,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 14,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 8,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 80,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 4,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 68,
  "time_alive": 767,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 75,
  "time_alive": 448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 35,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 41,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 72,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 3,
  "time_alive": 1494,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 59,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 27,
  "time_alive": 1359,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 1,
  "time_alive": 1504,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 23,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 90,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 54,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 24,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 60,
  "time_alive": 756,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 23,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 82,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 74,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 19,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 6,
  "time_alive": 1477,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2",
  "placement": 31,
  "time_alive": 1319,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 13,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 21,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 22,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 10,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 87,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "dceb4df9878547ecb8be93224cff30d0",
  "placement": 55,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 89,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 32,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 10,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 6,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "661a2e3e58f548ef9a96a9b713b211d6",
  "placement": 13,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 36,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 49,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 5,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 94,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 25,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 10,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 11,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 15,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 95,
  "time_alive": 196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 48,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 10,
  "time_alive": 1457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "01dd92135b9a4ed696608da904b62de9",
  "placement": 28,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 68,
  "time_alive": 984,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 29,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 7,
  "time_alive": 1433,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 23,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 19,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4541376e70834ca28d69d617a0fdcdae",
  "placement": 59,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 50,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 47,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 7,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 33,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 7,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 73,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 16,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 9,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 53,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 16,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 14,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 9,
  "time_alive": 1437,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 10,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 40,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 37,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 11,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 42,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 20,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 86,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 93,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 69,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 4,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4172fd19461c4a3d8dcd087c8376bb71",
  "placement": 3,
  "time_alive": 1477,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 7,
  "time_alive": 1443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 60,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 15,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 55,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 8,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "681ce40a032d4c028c25c10e0fd2e7a4",
  "placement": 12,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 21,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 34,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 89,
  "time_alive": 447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 17,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 14,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b",
  "placement": 26,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 18,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 87,
  "time_alive": 625,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 25,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 67,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 5,
  "time_alive": 1478,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "fa3c338e8ed8401abae0a9b3eebf3270",
  "placement": 40,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 16,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 54,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 2,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 36,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 55,
  "time_alive": 1075,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "e2e9086972594800b5c025eed52294bb",
  "placement": 24,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 19,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 76,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 37,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 8,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 81,
  "time_alive": 567,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9",
  "placement": 4,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 22,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 92,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 85,
  "time_alive": 579,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 14,
  "time_alive": 1428,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 53,
  "time_alive": 1203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 15,
  "time_alive": 1407,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 43,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 14,
  "time_alive": 1408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 48,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 56,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 13,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 32,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 5,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 96,
  "time_alive": 287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 8,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 45,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630",
  "placement": 52,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 28,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 28,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 50,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 92,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 32,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3",
  "placement": 6,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 98,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 18,
  "time_alive": 1391,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 3,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 50,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 44,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "8bf3d01c6bb54c16a589fd07c1b575f3",
  "placement": 43,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 66,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 7,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 11,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 72,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 86,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "4d3397db96a741f2a1b37f189bfcbd6b",
  "placement": 16,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 10,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 57,
  "time_alive": 1108,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 36,
  "time_alive": 1347,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 39,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 36,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "c1fb4441de8d42219f7cc2e2d024627e",
  "placement": 84,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 30,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 19,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 56,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 13,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 30,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 76,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 70,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 13,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 85,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 78,
  "time_alive": 599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 2,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 88,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 66,
  "time_alive": 977,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 24,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 9,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "67c2821aeda440ee8c80123c5c0a4d8c",
  "placement": 9,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "aa95527551534d0dbf5ec11193af76ef",
  "placement": 85,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "aa95527551534d0dbf5ec11193af76ef",
  "placement": 3,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "aa95527551534d0dbf5ec11193af76ef",
  "placement": 81,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "aa95527551534d0dbf5ec11193af76ef",
  "placement": 75,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "aa95527551534d0dbf5ec11193af76ef",
  "placement": 46,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "aa95527551534d0dbf5ec11193af76ef",
  "placement": 5,
  "time_alive": 1469,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 26,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 81,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 24,
  "time_alive": 1378,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 80,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 3,
  "time_alive": 1495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 49,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 6,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 91,
  "time_alive": 464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 52,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 95,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 18,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 45,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "fbf5b6a6ca464b4e95852027bf1c8457",
  "placement": 34,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "fbf5b6a6ca464b4e95852027bf1c8457",
  "placement": 20,
  "time_alive": 1386,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "fbf5b6a6ca464b4e95852027bf1c8457",
  "placement": 42,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "fbf5b6a6ca464b4e95852027bf1c8457",
  "placement": 68,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "fbf5b6a6ca464b4e95852027bf1c8457",
  "placement": 38,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0514249a-ccff-49d9-b5f1-f9ac5fc450cf",
  "team_id": "fbf5b6a6ca464b4e95852027bf1c8457",
  "placement": 22,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c663ef5-cfce-41e4-b1f3-39fb2ad205d0",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 42,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a2f407e-0210-4d25-87d9-060fbeab03b2",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 90,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c71239c-1bdb-408b-a9c5-0646fa0f8905",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 75,
  "time_alive": 850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0ce21bfd-867f-46e7-a821-5a584c090766",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 12,
  "time_alive": 1437,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0bcbedf0-8d5c-43df-93eb-bfb1859e7feb",
  "team_id": "4c1e24926fa9458e8ea9a36e9afd3e3e",
  "placement": 21,
  "time_alive": 1387,
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
    