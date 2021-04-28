const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 71,
  "time_alive": 890,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 91,
  "time_alive": 332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 3,
  "time_alive": 1510,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c277e0dc2e0e46ff86a8502ff5d277af",
  "placement": 88,
  "time_alive": 179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 94,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 8,
  "time_alive": 1473,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 95,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 56,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 23,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c410cae6ac9e475f957e3e4a7cd6c246",
  "placement": 90,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 57,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 71,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 30,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 8,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 84,
  "time_alive": 533,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 64,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 31,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 17,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 54,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 24,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 69,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d",
  "placement": 66,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 62,
  "time_alive": 1128,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 38,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 15,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 70,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "fe834448c96c4fc7b55c63d63f1f5007",
  "placement": 38,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "00a07f4e45df4a699b8e167a9b02337d",
  "placement": 60,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "00a07f4e45df4a699b8e167a9b02337d",
  "placement": 25,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "00a07f4e45df4a699b8e167a9b02337d",
  "placement": 32,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "00a07f4e45df4a699b8e167a9b02337d",
  "placement": 55,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "00a07f4e45df4a699b8e167a9b02337d",
  "placement": 40,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "00a07f4e45df4a699b8e167a9b02337d",
  "placement": 44,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "89d07e428af9437c87eff50239479ff1",
  "placement": 45,
  "time_alive": 1283,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "89d07e428af9437c87eff50239479ff1",
  "placement": 69,
  "time_alive": 937,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "89d07e428af9437c87eff50239479ff1",
  "placement": 42,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "89d07e428af9437c87eff50239479ff1",
  "placement": 10,
  "time_alive": 1480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "89d07e428af9437c87eff50239479ff1",
  "placement": 66,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "89d07e428af9437c87eff50239479ff1",
  "placement": 56,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 17,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 88,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 45,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 63,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 47,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "8319abff1f80414c851ed5cc1408b82c",
  "placement": 28,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 73,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 14,
  "time_alive": 1432,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 74,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 96,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 96,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "125ce2dfb194453184551649f77c5d1b",
  "placement": 25,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5200046cea474474914e15dc53a37d16",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5200046cea474474914e15dc53a37d16",
  "placement": 23,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5200046cea474474914e15dc53a37d16",
  "placement": 66,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5200046cea474474914e15dc53a37d16",
  "placement": 37,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5200046cea474474914e15dc53a37d16",
  "placement": 41,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5200046cea474474914e15dc53a37d16",
  "placement": 29,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 39,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 54,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 15,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 89,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 73,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5214fb17e2cf47f296cd23a0eb40826d",
  "placement": 43,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 21,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 34,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 97,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 12,
  "time_alive": 1466,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 95,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 96,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "d6348e8e1ecd4586ad231493441e8d73",
  "placement": 6,
  "time_alive": 1504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "d6348e8e1ecd4586ad231493441e8d73",
  "placement": 86,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "d6348e8e1ecd4586ad231493441e8d73",
  "placement": 84,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "d6348e8e1ecd4586ad231493441e8d73",
  "placement": 42,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "d6348e8e1ecd4586ad231493441e8d73",
  "placement": 37,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "d6348e8e1ecd4586ad231493441e8d73",
  "placement": 33,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 40,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 61,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 12,
  "time_alive": 1454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 33,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 44,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5db6a109e91f46ecb682cd696158d4de",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 30,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 45,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 78,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 50,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 27,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "50f8b0646a1945aa8b47d25fe221903d",
  "placement": 59,
  "time_alive": 1074,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "ad2cba17800941a88ee5d803406bb336",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "ad2cba17800941a88ee5d803406bb336",
  "placement": 50,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "ad2cba17800941a88ee5d803406bb336",
  "placement": 22,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "ad2cba17800941a88ee5d803406bb336",
  "placement": 28,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "ad2cba17800941a88ee5d803406bb336",
  "placement": 57,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "ad2cba17800941a88ee5d803406bb336",
  "placement": 61,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 54,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 55,
  "time_alive": 1108,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 44,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 66,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 76,
  "time_alive": 725,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 35,
  "time_alive": 1366,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "3f005870c1f84b93afa5cee13a5e0cbc",
  "placement": 26,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "3f005870c1f84b93afa5cee13a5e0cbc",
  "placement": 56,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "3f005870c1f84b93afa5cee13a5e0cbc",
  "placement": 58,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "3f005870c1f84b93afa5cee13a5e0cbc",
  "placement": 80,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "3f005870c1f84b93afa5cee13a5e0cbc",
  "placement": 58,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "3f005870c1f84b93afa5cee13a5e0cbc",
  "placement": 19,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 29,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 29,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 60,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 48,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 53,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d",
  "placement": 45,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 42,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 62,
  "time_alive": 998,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 88,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 34,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 33,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "1ee17d101de04f9bbde91c240e2f4a0f",
  "placement": 67,
  "time_alive": 671,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 58,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 13,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 69,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 84,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 52,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "46f8b81ecba843ff9ae4cb1c45695344",
  "placement": 81,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 66,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 9,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 96,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 74,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 87,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "5d98762c7d7e4eddbefbc6bdef991a32",
  "placement": 84,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 43,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 77,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 20,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 46,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 63,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "e943dbe706b041ac852de2b55b6108a5",
  "placement": 80,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 27,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 44,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 57,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 27,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 89,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "3747a0e217984e399aefc25c5cfb16dd",
  "placement": 70,
  "time_alive": 550,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c51c735ef2844af0854b407b71eb46bb",
  "placement": 53,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c51c735ef2844af0854b407b71eb46bb",
  "placement": 74,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c51c735ef2844af0854b407b71eb46bb",
  "placement": 92,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c51c735ef2844af0854b407b71eb46bb",
  "placement": 44,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c51c735ef2844af0854b407b71eb46bb",
  "placement": 12,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c51c735ef2844af0854b407b71eb46bb",
  "placement": 51,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 55,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 27,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 28,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 58,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 80,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c541c31baf354e63b3eda6cacfd4ca1b",
  "placement": 58,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 18,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 21,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 80,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 77,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 74,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "0da11626da7a437a981844aac9d5c6cc",
  "placement": 78,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 48,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 59,
  "time_alive": 1061,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 85,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 68,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 55,
  "time_alive": 1182,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "35a8327c7d584226befe0bf73d02085a",
  "placement": 50,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 76,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 49,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 87,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 25,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 72,
  "time_alive": 765,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 77,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 78,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 64,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 18,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 64,
  "time_alive": 1091,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 61,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 76,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "66aa68887bdc4d859f8ebf1e80a13d93",
  "placement": 90,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "66aa68887bdc4d859f8ebf1e80a13d93",
  "placement": 39,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "66aa68887bdc4d859f8ebf1e80a13d93",
  "placement": 50,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "66aa68887bdc4d859f8ebf1e80a13d93",
  "placement": 41,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "66aa68887bdc4d859f8ebf1e80a13d93",
  "placement": 67,
  "time_alive": 986,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "66aa68887bdc4d859f8ebf1e80a13d93",
  "placement": 75,
  "time_alive": 407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 91,
  "time_alive": 511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 63,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 55,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 35,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 26,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "3854fae12d9244b6933cef2a094674e1",
  "placement": 65,
  "time_alive": 739,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 80,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 78,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 46,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 94,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 25,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "f56eee5df71940c183f7f345496689d9",
  "placement": 37,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "62073ef4f65742a2b76508b01399f618",
  "placement": 85,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "62073ef4f65742a2b76508b01399f618",
  "placement": 83,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "62073ef4f65742a2b76508b01399f618",
  "placement": 93,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "62073ef4f65742a2b76508b01399f618",
  "placement": 81,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "62073ef4f65742a2b76508b01399f618",
  "placement": 15,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "62073ef4f65742a2b76508b01399f618",
  "placement": 39,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "7725708dedd34af0a6fecb14b114dc7b",
  "placement": 71,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "7725708dedd34af0a6fecb14b114dc7b",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "7725708dedd34af0a6fecb14b114dc7b",
  "placement": 24,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "7725708dedd34af0a6fecb14b114dc7b",
  "placement": 76,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "7725708dedd34af0a6fecb14b114dc7b",
  "placement": 31,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "7725708dedd34af0a6fecb14b114dc7b",
  "placement": 41,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 32,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 72,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 76,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 47,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "8622a80e47404409a9098ac6996c7dc9",
  "placement": 51,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 95,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 15,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 91,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 92,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 88,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "f4ffe3aef8bc4393b0e6df06d93da77b",
  "placement": 82,
  "time_alive": 277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 72,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 67,
  "time_alive": 948,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 62,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 87,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "bd65d9e0ac424df6978f7978943e6c9b",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c46280a1f1984177bd6caca3d6f1bdf8",
  "placement": 88,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c46280a1f1984177bd6caca3d6f1bdf8",
  "placement": 51,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c46280a1f1984177bd6caca3d6f1bdf8",
  "placement": 56,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c46280a1f1984177bd6caca3d6f1bdf8",
  "placement": 26,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c46280a1f1984177bd6caca3d6f1bdf8",
  "placement": 46,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c46280a1f1984177bd6caca3d6f1bdf8",
  "placement": 68,
  "time_alive": 634,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a6e351e322224c12a80c420450c75480",
  "placement": 70,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a6e351e322224c12a80c420450c75480",
  "placement": 76,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a6e351e322224c12a80c420450c75480",
  "placement": 39,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "a6e351e322224c12a80c420450c75480",
  "placement": 51,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "a6e351e322224c12a80c420450c75480",
  "placement": 34,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "a6e351e322224c12a80c420450c75480",
  "placement": 48,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 63,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 90,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 19,
  "time_alive": 1418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 59,
  "time_alive": 1131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 48,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "cf49f62ef0e84a4298a393bb8d9b8728",
  "placement": 93,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 64,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 92,
  "time_alive": 496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 81,
  "time_alive": 833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 82,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 38,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "d7f53eedbb1742bf8ffdea7492b10e7b",
  "placement": 85,
  "time_alive": 215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 74,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 75,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 33,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 72,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 93,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "ec755cf0df0244e59dc4840688c900a1",
  "placement": 72,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "223944a4082e4dc7b4c7c15e2203a39c",
  "placement": 52,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "223944a4082e4dc7b4c7c15e2203a39c",
  "placement": 68,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "223944a4082e4dc7b4c7c15e2203a39c",
  "placement": 26,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "223944a4082e4dc7b4c7c15e2203a39c",
  "placement": 98,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "223944a4082e4dc7b4c7c15e2203a39c",
  "placement": 54,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "223944a4082e4dc7b4c7c15e2203a39c",
  "placement": 69,
  "time_alive": 616,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 77,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 48,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 61,
  "time_alive": 1105,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 95,
  "time_alive": 205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 62,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "4e807e3cbc034b9f81867cf316a7f5fc",
  "placement": 52,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 51,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 52,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 52,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 60,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 49,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "bbd235432e784221a609b7cb6ef46538",
  "placement": 95,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "c8cd8b09768a49b3a5a9add2f5677d2f",
  "placement": 61,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "c8cd8b09768a49b3a5a9add2f5677d2f",
  "placement": 79,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "c8cd8b09768a49b3a5a9add2f5677d2f",
  "placement": 41,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "c8cd8b09768a49b3a5a9add2f5677d2f",
  "placement": 78,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "c8cd8b09768a49b3a5a9add2f5677d2f",
  "placement": 35,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "c8cd8b09768a49b3a5a9add2f5677d2f",
  "placement": 79,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 93,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 84,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 77,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 29,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 68,
  "time_alive": 886,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "097ef58636454f91ba3c5415be38a8d3",
  "placement": 86,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 84,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 93,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 89,
  "time_alive": 597,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 85,
  "time_alive": 453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 86,
  "time_alive": 376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "2664aa6009d7437193e402ea026ae82e",
  "placement": 94,
  "time_alive": 115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "ba6848ae9cc84e54b92cb85ec8ffa3fb",
  "placement": 92,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "ba6848ae9cc84e54b92cb85ec8ffa3fb",
  "placement": 58,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "ba6848ae9cc84e54b92cb85ec8ffa3fb",
  "placement": 53,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "ba6848ae9cc84e54b92cb85ec8ffa3fb",
  "placement": 93,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0227bfcb-870b-4b76-af15-9b333f3f4f56",
  "team_id": "ba6848ae9cc84e54b92cb85ec8ffa3fb",
  "placement": 91,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "03fe7e8b-7584-48f0-a8b3-370b8cff76c4",
  "team_id": "ba6848ae9cc84e54b92cb85ec8ffa3fb",
  "placement": 42,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 83,
  "time_alive": 830,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075c2cbf-502c-4e82-81fa-96facc0d7e6e",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 94,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 94,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "00836f73-2f4a-4862-a3f4-6f2d223fcd8b",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 97,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "093b8e35-ba94-49ec-ba39-1bd0e729d3bd",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 98,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d617fd5-0668-4c07-8248-4c15b07cb1fa",
  "team_id": "47b267022066422aa9b6a7f3fbd9170a",
  "placement": 97,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 2,
  "time_alive": 1535,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 44,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 98,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 4,
  "time_alive": 1472,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 9,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "b5eded1141724d66920d69e2e7127cbb",
  "placement": 2,
  "time_alive": 1513,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 15,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 9,
  "time_alive": 1482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 2,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 29,
  "time_alive": 1360,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 12,
  "time_alive": 1446,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "827abb1cd9fb4618991425c2d3ba9b76",
  "placement": 39,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 19,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 17,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 21,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 48,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 1,
  "time_alive": 1534,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 21,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 60,
  "time_alive": 1094,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 3,
  "time_alive": 1511,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 41,
  "time_alive": 1312,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 18,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 23,
  "time_alive": 1411,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "3e999b2dbb0b46a490289ba783142bff",
  "placement": 12,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 7,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 70,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 5,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 2,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 81,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 11,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 28,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 36,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 14,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 1,
  "time_alive": 1491,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 28,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "dd3acde2f2b644f98ccb062dbe48bb44",
  "placement": 32,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 25,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 16,
  "time_alive": 1453,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 45,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 28,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 3,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "8a45b95121bd40b9aa916a2349601c74",
  "placement": 34,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 32,
  "time_alive": 1366,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 45,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 81,
  "time_alive": 433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 47,
  "time_alive": 1258,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 2,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "5f2f4a9cfead43709221233aefb1e23d",
  "placement": 3,
  "time_alive": 1505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 3,
  "time_alive": 1527,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 12,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 12,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 51,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 32,
  "time_alive": 1355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "f2e5730073c2417ba33d36bbc3fa4590",
  "placement": 75,
  "time_alive": 525,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 64,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 83,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 17,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 54,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "5a3728830d834bd78307cfe968ce374f",
  "placement": 4,
  "time_alive": 1493,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 35,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 8,
  "time_alive": 1484,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 65,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 19,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 43,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "ba20ba775b6b4e30896dc87d93d42e9b",
  "placement": 13,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 61,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 20,
  "time_alive": 1443,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 51,
  "time_alive": 1175,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 36,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 63,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "675950bde95a49379dc37e298194cf1b",
  "placement": 1,
  "time_alive": 1513,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 54,
  "time_alive": 1145,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 6,
  "time_alive": 1501,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 44,
  "time_alive": 1264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 13,
  "time_alive": 1428,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 11,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "d0e05ee8ff4e49d88759866b15273026",
  "placement": 82,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 16,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 31,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 39,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 32,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 8,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "1a19c2efa5a64cc3ba99862b1b951d0c",
  "placement": 40,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 12,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 49,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 47,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 3,
  "time_alive": 1475,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 17,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c",
  "placement": 79,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 35,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 43,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 12,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 22,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "21737c3345d64e388860f1a17a4701b0",
  "placement": 48,
  "time_alive": 1259,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 96,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 10,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 82,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 5,
  "time_alive": 1468,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 5,
  "time_alive": 1491,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e",
  "placement": 73,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 46,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 29,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 1,
  "time_alive": 1518,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 55,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 55,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "48590a259be64bb598091e8ff4dd5e47",
  "placement": 20,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 89,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 48,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 11,
  "time_alive": 1453,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 34,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 84,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "1af42bc704e84fa28403759f44106c9e",
  "placement": 6,
  "time_alive": 1485,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 14,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 21,
  "time_alive": 1437,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 19,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 72,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 68,
  "time_alive": 824,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 94,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 71,
  "time_alive": 882,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 27,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 33,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 15,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 70,
  "time_alive": 767,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "c69da325fa1a4e9487ebbd2d2c82e4e5",
  "placement": 27,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 39,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 14,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 92,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 62,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 89,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "7961a2766c47482286b73546d1758150",
  "placement": 5,
  "time_alive": 1486,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 8,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 39,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 16,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 27,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 83,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "5c322612c2664c0cbadb6fdfc9dde04e",
  "placement": 45,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 17,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 42,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 35,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 57,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 27,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 24,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 1,
  "time_alive": 1535,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 68,
  "time_alive": 908,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 93,
  "time_alive": 129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 41,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 60,
  "time_alive": 1135,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 93,
  "time_alive": 126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 47,
  "time_alive": 1250,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 4,
  "time_alive": 1507,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 22,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 16,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 87,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 80,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 31,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 2,
  "time_alive": 1523,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 91,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 76,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 20,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "48e70ffdd47446f99e4275e16c15ecb6",
  "placement": 38,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 34,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 38,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 8,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 29,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590",
  "placement": 15,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 11,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 76,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 64,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 9,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 58,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 9,
  "time_alive": 1477,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 4,
  "time_alive": 1513,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 28,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 54,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 49,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 42,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "81015fc5e9df43c2988508c176637fad",
  "placement": 67,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 20,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 51,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 27,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 39,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 16,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 33,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 57,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 32,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 18,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 31,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 30,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "47759f160f6644c2a735b626a6fab849",
  "placement": 18,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 48,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 73,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 10,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 26,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 36,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "f754778b1abb404e8e857ce8ff9b9eca",
  "placement": 25,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 87,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 15,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 40,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 23,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 71,
  "time_alive": 754,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 10,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 76,
  "time_alive": 842,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 7,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 34,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 25,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 72,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "71179d8d43094f329facd9f0f8c5fa31",
  "placement": 78,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 22,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 94,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 3,
  "time_alive": 1507,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 50,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 59,
  "time_alive": 1167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8",
  "placement": 47,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 27,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 24,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 20,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 58,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 66,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 23,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 67,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 61,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 15,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 44,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 24,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 19,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 53,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 93,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 4,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 59,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 25,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "b4d717a51f2b4481ae755120a9dd4484",
  "placement": 46,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 13,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 25,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 37,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 37,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 37,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 85,
  "time_alive": 574,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 23,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 38,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 85,
  "time_alive": 437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 6,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "3ac14c44c55844f786d337418d30c6d5",
  "placement": 90,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 55,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 42,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 71,
  "time_alive": 908,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 34,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 7,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 18,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 46,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 46,
  "time_alive": 1233,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 52,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 15,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 54,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 30,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 18,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 55,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 8,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 65,
  "time_alive": 947,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "0a3aac36b59545d484f4a0e2718ee4a7",
  "placement": 42,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 82,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 88,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 73,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 78,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 4,
  "time_alive": 1504,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "d460c1acb698427490fda7c1df156b52",
  "placement": 16,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 62,
  "time_alive": 1028,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 67,
  "time_alive": 911,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 13,
  "time_alive": 1450,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 35,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 47,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "17613e0679bd490e807e1d9322b999cc",
  "placement": 30,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 5,
  "time_alive": 1510,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 74,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 62,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 98,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 19,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 92,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 72,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 11,
  "time_alive": 1476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 56,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 82,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 21,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "92e735371156465d80e89329af8b6432",
  "placement": 26,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 13,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 83,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 63,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 94,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 14,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "91fc3dc6d497443996cf3d6c447db25f",
  "placement": 35,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 6,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 79,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 37,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 22,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 48,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "4df2a089a6b9433a953d2851186d42c3",
  "placement": 62,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 24,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 5,
  "time_alive": 1507,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 49,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 88,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 62,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "a1fd4005c38b4378ad41efe521ad3244",
  "placement": 43,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 70,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 69,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 59,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 7,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 97,
  "time_alive": 110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "33d643abdeaa4a44a5dc9b91325ba027",
  "placement": 8,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "5a0c9c534ba34fc3bba22ba634d547ba",
  "placement": 44,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "5a0c9c534ba34fc3bba22ba634d547ba",
  "placement": 25,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "5a0c9c534ba34fc3bba22ba634d547ba",
  "placement": 28,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "5a0c9c534ba34fc3bba22ba634d547ba",
  "placement": 40,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "5a0c9c534ba34fc3bba22ba634d547ba",
  "placement": 41,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "5a0c9c534ba34fc3bba22ba634d547ba",
  "placement": 58,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 23,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 19,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 74,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 45,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 49,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "e814bb4f3d76466f8d19db02db7d8743",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 63,
  "time_alive": 1006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 58,
  "time_alive": 1095,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 17,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 90,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 50,
  "time_alive": 1227,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "3736de3c0eb043649fac15ec1025ff08",
  "placement": 84,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 9,
  "time_alive": 1496,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 66,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 24,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 92,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 88,
  "time_alive": 220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "00305d46885743f4b3bae606acb1af38",
  "placement": 88,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 29,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 52,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 29,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 30,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 69,
  "time_alive": 793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "be21fc5e3d894560aa29966d29b6c674",
  "placement": 55,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 42,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 33,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 36,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 61,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 78,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30",
  "placement": 17,
  "time_alive": 1424,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 82,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 94,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 10,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 46,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 22,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 56,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 55,
  "time_alive": 1120,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 52,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 21,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 90,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "bc2831b194554e5b8f66b200cce47aa9",
  "placement": 14,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "7f341e9824224d909d8b746e25ebb6d1",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "7f341e9824224d909d8b746e25ebb6d1",
  "placement": 63,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "7f341e9824224d909d8b746e25ebb6d1",
  "placement": 57,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "7f341e9824224d909d8b746e25ebb6d1",
  "placement": 14,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "7f341e9824224d909d8b746e25ebb6d1",
  "placement": 39,
  "time_alive": 1339,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "7f341e9824224d909d8b746e25ebb6d1",
  "placement": 51,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 38,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 100,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 6,
  "time_alive": 1490,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 83,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 44,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 61,
  "time_alive": 1086,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 33,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 77,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 9,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 43,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 56,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 56,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 58,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 81,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 23,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 54,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 33,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102",
  "placement": 66,
  "time_alive": 919,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 79,
  "time_alive": 826,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 90,
  "time_alive": 472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 32,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 86,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 67,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0",
  "placement": 29,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 91,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 34,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 42,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 31,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "aafddb387f6b4002b7aafd1192783db3",
  "placement": 36,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 74,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 54,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 85,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 69,
  "time_alive": 976,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 13,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "34e1b5c56fdc46b18a4b0cf95fffe020",
  "placement": 52,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 51,
  "time_alive": 1216,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 22,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 78,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 24,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977",
  "placement": 73,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 10,
  "time_alive": 1484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 37,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 60,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 67,
  "time_alive": 989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 63,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 86,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 26,
  "time_alive": 1404,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 80,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 66,
  "time_alive": 993,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 53,
  "time_alive": 1197,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "6912e2bf03244d289da3dfc331f845a0",
  "placement": 65,
  "time_alive": 981,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 50,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 43,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 30,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 80,
  "time_alive": 752,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 40,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "da840bb800cb47678c73711cb85acc55",
  "placement": 41,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "cbf299288c3143d3aad81cf939738a32",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "cbf299288c3143d3aad81cf939738a32",
  "placement": 89,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "cbf299288c3143d3aad81cf939738a32",
  "placement": 97,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "cbf299288c3143d3aad81cf939738a32",
  "placement": 60,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "cbf299288c3143d3aad81cf939738a32",
  "placement": 7,
  "time_alive": 1476,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "cbf299288c3143d3aad81cf939738a32",
  "placement": 89,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 40,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 40,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 50,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 56,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 51,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 59,
  "time_alive": 1116,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 92,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 92,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 66,
  "time_alive": 979,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 20,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 38,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "28f2d4207f9142838351f610815012e1",
  "placement": 71,
  "time_alive": 732,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 41,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 84,
  "time_alive": 794,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 58,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 38,
  "time_alive": 1330,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 77,
  "time_alive": 588,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "85995ec7044a4450a3c355cf3dd470ff",
  "placement": 76,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 88,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 30,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 26,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 70,
  "time_alive": 975,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 91,
  "time_alive": 146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "bb0b0d3955174eb0822397ce4a2be0ca",
  "placement": 95,
  "time_alive": 109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 80,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 86,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 86,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 6,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 75,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "6013037612e84b6a9732ef218d92d95f",
  "placement": 64,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 94,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 97,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 7,
  "time_alive": 1488,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 91,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 76,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "1029158771f74d2d9712f2b69ea3c181",
  "placement": 50,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 68,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 98,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 89,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 99,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 10,
  "time_alive": 1462,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "e77c4d99f3244cafad36abde03d9b3ec",
  "placement": 74,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 73,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 80,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 77,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 77,
  "time_alive": 853,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 18,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "c30726e222dd41b39354a15d30057ae8",
  "placement": 60,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 37,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 85,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 69,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 46,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 74,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "909f7e99bd7f432b8ab5acac447c3689",
  "placement": 31,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 52,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 53,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 72,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 53,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 79,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "00f096488bfd429fb2e9bc4218dd9b39",
  "placement": 49,
  "time_alive": 1235,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 99,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 47,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 84,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "e60ad7e389fa4b6b847c0dba4454b885",
  "placement": 28,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "11026cd0202c454fb44850177530ca65",
  "placement": 95,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "11026cd0202c454fb44850177530ca65",
  "placement": 99,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "11026cd0202c454fb44850177530ca65",
  "placement": 87,
  "time_alive": 266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "11026cd0202c454fb44850177530ca65",
  "placement": 11,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "11026cd0202c454fb44850177530ca65",
  "placement": 86,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "11026cd0202c454fb44850177530ca65",
  "placement": 83,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 45,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 57,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 79,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 33,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 94,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 44,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 59,
  "time_alive": 1096,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 72,
  "time_alive": 892,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 67,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "d5d4da0180644a1cb030686518ba99e7",
  "placement": 81,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 81,
  "time_alive": 788,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 65,
  "time_alive": 929,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 88,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 87,
  "time_alive": 402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "bfb053a8047c4a159b3b69078205ac78",
  "placement": 91,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 75,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 41,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 70,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 75,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 64,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "19d2d3eb4ecb4de693bb600b16821a09",
  "placement": 70,
  "time_alive": 776,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 78,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 78,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 48,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 74,
  "time_alive": 857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 82,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 68,
  "time_alive": 874,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 100,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 95,
  "time_alive": 258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 75,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 93,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 35,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "780c8202899642eeae42283b437f3d1a",
  "placement": 72,
  "time_alive": 633,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 96,
  "time_alive": 240,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 68,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 63,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "51da8a03128f464cb570a55e83c9708f",
  "placement": 92,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 66,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 75,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 31,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 73,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 85,
  "time_alive": 286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "da5494905e1547b89045269240ff2b50",
  "placement": 87,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 69,
  "time_alive": 941,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 91,
  "time_alive": 462,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 53,
  "time_alive": 1171,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 79,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 45,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "b2996c557e794c21853bce538b96de0f",
  "placement": 81,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 77,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 71,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 61,
  "time_alive": 1100,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 68,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 57,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "6b6d722e3d89412cae23daf1fe43923e",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 49,
  "time_alive": 1237,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 59,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 95,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "7ce93ad59fdd4fd587cdb370c3ba71e6",
  "placement": 95,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 90,
  "time_alive": 333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 56,
  "time_alive": 1107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 71,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 96,
  "time_alive": 131,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 98,
  "time_alive": 79,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 86,
  "time_alive": 198,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "c6a46f029fe94b2e8c27d968048499de",
  "placement": 83,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "c6a46f029fe94b2e8c27d968048499de",
  "placement": 62,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "c6a46f029fe94b2e8c27d968048499de",
  "placement": 84,
  "time_alive": 366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "c6a46f029fe94b2e8c27d968048499de",
  "placement": 65,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "c6a46f029fe94b2e8c27d968048499de",
  "placement": 80,
  "time_alive": 409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "c6a46f029fe94b2e8c27d968048499de",
  "placement": 69,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 93,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 60,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 64,
  "time_alive": 1010,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 93,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "77f4ca21813c454cb3aa880801aa6bfc",
  "placement": 85,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "9f7b2ef0a3ab479fabdcab618384e93b",
  "placement": 65,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "9f7b2ef0a3ab479fabdcab618384e93b",
  "placement": 64,
  "time_alive": 965,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "9f7b2ef0a3ab479fabdcab618384e93b",
  "placement": 90,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "9f7b2ef0a3ab479fabdcab618384e93b",
  "placement": 97,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "9f7b2ef0a3ab479fabdcab618384e93b",
  "placement": 61,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06819581-6a61-4dc3-ae16-fb0166fd628d",
  "team_id": "9f7b2ef0a3ab479fabdcab618384e93b",
  "placement": 77,
  "time_alive": 421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14a4e574-61d1-4618-ab33-16d275acec2c",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 84,
  "time_alive": 601,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c20f48f-fad5-48ac-ae2b-fced2f59db22",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 87,
  "time_alive": 703,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07884c34-0dfb-4324-b5da-c5d623819f63",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 76,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07b21f87-4373-45b9-94ed-c6a8f64db36c",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 89,
  "time_alive": 324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "099736b5-80c3-4673-bb43-12e76fe15c8d",
  "team_id": "a3d2d282cfa142638f751d1ef1995d77",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 17,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 3,
  "time_alive": 1490,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 16,
  "time_alive": 1437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 68,
  "time_alive": 976,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 10,
  "time_alive": 1451,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 29,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 60,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 1,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 17,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 8,
  "time_alive": 1452,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 18,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "1f8478d659a24107b0c693d279d81b95",
  "placement": 61,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 6,
  "time_alive": 1477,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 9,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 94,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 11,
  "time_alive": 1444,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 9,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db",
  "placement": 31,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 24,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 18,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 66,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 47,
  "time_alive": 1262,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 8,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "6f3ebc481092450aaf883aa49722914f",
  "placement": 6,
  "time_alive": 1449,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 80,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 18,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 7,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 14,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 66,
  "time_alive": 883,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 81,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 26,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 2,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 53,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "2e57d91568f34291a1690f3d90e3f3b6",
  "placement": 1,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 11,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 22,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 72,
  "time_alive": 915,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 3,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 76,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9",
  "placement": 8,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 27,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 24,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 31,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 27,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "d3d25f74cbf846ec9359446bfa92f637",
  "placement": 3,
  "time_alive": 1472,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 49,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 4,
  "time_alive": 1500,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 5,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 29,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "6a9cac46f17b4bb28fccf82875fdb13a",
  "placement": 28,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 25,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 13,
  "time_alive": 1444,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 1,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 58,
  "time_alive": 1116,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 79,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "bfd5df2d6f9940f78dc88c9af150a107",
  "placement": 44,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 34,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 6,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 35,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 73,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 1,
  "time_alive": 1501,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "dc451c899522405d84373c6e93f72881",
  "placement": 86,
  "time_alive": 401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 4,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 61,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 20,
  "time_alive": 1384,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 5,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 67,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 7,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 38,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 15,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 62,
  "time_alive": 1111,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 16,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "aad3c7bca17945acb44e59f32adb237b",
  "placement": 18,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 8,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 16,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 28,
  "time_alive": 1389,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 66,
  "time_alive": 1058,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 33,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "1e2a90f05f504aa98ea5e02d5680bead",
  "placement": 26,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 10,
  "time_alive": 1457,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 10,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 48,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 67,
  "time_alive": 1052,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 30,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "3906d482a7224681bde5eaafe4a54e60",
  "placement": 32,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 1,
  "time_alive": 1506,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 94,
  "time_alive": 440,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 86,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 28,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 25,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "55bc54bf712c4395b819842b880452cd",
  "placement": 11,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 21,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 30,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 31,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 38,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 34,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "08be24f0bb4541bc9d1a91e3f0f16017",
  "placement": 15,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 45,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02da31bf-122c-43b4-b9b3-0a954c9dadc0",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 72,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06e8561a-fe65-4e02-9750-b92fa6569266",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 2,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "075cb93a-23cf-4bc2-a164-7f04054864fe",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 40,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "029f26b7-1d12-47be-8952-b3434daa5bbb",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 6,
  "time_alive": 1484,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09229993-d492-4555-a3aa-a42f075ff2bf",
  "team_id": "d228a2e3f5a648c682cdc6a7f42bd6cf",
  "placement": 33,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02d978fa-ef12-4f0d-bbd5-090a3e16086b",
  "team_id": "c3b1898a728844808067252350e5288a",
  "placement": 38,
  "time_alive": 1318,
  "elims": 2,
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
    