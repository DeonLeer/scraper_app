const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 33,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 76,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 16,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "45e08251dee84008bb8e969bd1c3e844",
  "placement": 20,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 30,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 16,
  "time_alive": 1420,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 8,
  "time_alive": 1449,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 41,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 59,
  "time_alive": 1053,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 29,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 14,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 53,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 18,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 11,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 22,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "89271aa128b2495f9645055561bbfeca",
  "placement": 60,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 21,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 36,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 13,
  "time_alive": 1434,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 37,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 10,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "ac215ba6aeab493895eed2156df714df",
  "placement": 67,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 20,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 46,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 7,
  "time_alive": 1458,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 29,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 32,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5",
  "placement": 43,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 87,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 1,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 30,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 59,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 82,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "eb44968f1f0a457882c3419a8303665f",
  "placement": 19,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 39,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 58,
  "time_alive": 1165,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 19,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 66,
  "time_alive": 1026,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 7,
  "time_alive": 1460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "1155c2ded4c74899956e94a208c16fa2",
  "placement": 22,
  "time_alive": 1408,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 13,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 28,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 27,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 53,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 18,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac",
  "placement": 21,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e88e3a9fb6a24db2b554b6851277081e",
  "placement": 17,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e88e3a9fb6a24db2b554b6851277081e",
  "placement": 29,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e88e3a9fb6a24db2b554b6851277081e",
  "placement": 14,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e88e3a9fb6a24db2b554b6851277081e",
  "placement": 8,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "e88e3a9fb6a24db2b554b6851277081e",
  "placement": 68,
  "time_alive": 778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e88e3a9fb6a24db2b554b6851277081e",
  "placement": 42,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 77,
  "time_alive": 804,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 17,
  "time_alive": 1384,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 6,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 76,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "7c67a0fed9e34d55bbe79119ef42ee81",
  "placement": 12,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 81,
  "time_alive": 861,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 25,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 16,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 31,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 28,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "d3850e6a1f174029b90e6796662bb076",
  "placement": 36,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 70,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 96,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 2,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 46,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 4,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 41,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "49ea8e499e744a43b0a4c489520f8566",
  "placement": 43,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "49ea8e499e744a43b0a4c489520f8566",
  "placement": 54,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "49ea8e499e744a43b0a4c489520f8566",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "49ea8e499e744a43b0a4c489520f8566",
  "placement": 65,
  "time_alive": 1096,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "49ea8e499e744a43b0a4c489520f8566",
  "placement": 1,
  "time_alive": 1539,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "49ea8e499e744a43b0a4c489520f8566",
  "placement": 89,
  "time_alive": 116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "3628c9e2aaef4f52ac8861b59a3b60d4",
  "placement": 27,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "3628c9e2aaef4f52ac8861b59a3b60d4",
  "placement": 38,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "3628c9e2aaef4f52ac8861b59a3b60d4",
  "placement": 82,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "3628c9e2aaef4f52ac8861b59a3b60d4",
  "placement": 34,
  "time_alive": 1328,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "3628c9e2aaef4f52ac8861b59a3b60d4",
  "placement": 56,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "3628c9e2aaef4f52ac8861b59a3b60d4",
  "placement": 4,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 5,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 61,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 21,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 25,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 72,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "7ae5a4d3e6e9404ab61f7890dc7989e9",
  "placement": 44,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 9,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 8,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 89,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 82,
  "time_alive": 490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 12,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a",
  "placement": 79,
  "time_alive": 299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 58,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 88,
  "time_alive": 381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 28,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 17,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 67,
  "time_alive": 784,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 13,
  "time_alive": 1448,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 35,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 9,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 88,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 50,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 71,
  "time_alive": 584,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a",
  "placement": 6,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 88,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 10,
  "time_alive": 1447,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 36,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 24,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 77,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "8c3f9932720443e2a653e979a03a6b0b",
  "placement": 34,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 83,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 2,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 55,
  "time_alive": 1163,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 28,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 75,
  "time_alive": 501,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d",
  "placement": 85,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "159b075383e948f388b31ad8d3f3bb7b",
  "placement": 8,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "159b075383e948f388b31ad8d3f3bb7b",
  "placement": 73,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "159b075383e948f388b31ad8d3f3bb7b",
  "placement": 4,
  "time_alive": 1485,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "159b075383e948f388b31ad8d3f3bb7b",
  "placement": 47,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "159b075383e948f388b31ad8d3f3bb7b",
  "placement": 79,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "159b075383e948f388b31ad8d3f3bb7b",
  "placement": 68,
  "time_alive": 518,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "73778460df074e728b6a0cf98949b8fc",
  "placement": 28,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "73778460df074e728b6a0cf98949b8fc",
  "placement": 59,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "73778460df074e728b6a0cf98949b8fc",
  "placement": 29,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "73778460df074e728b6a0cf98949b8fc",
  "placement": 14,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "73778460df074e728b6a0cf98949b8fc",
  "placement": 46,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "73778460df074e728b6a0cf98949b8fc",
  "placement": 45,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 73,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 76,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 15,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 36,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 24,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "86b5ed33648a4957b1985d8e07231077",
  "placement": 28,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "2cefb40efc444cc6aa296c0508b1db3b",
  "placement": 84,
  "time_alive": 734,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "2cefb40efc444cc6aa296c0508b1db3b",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "2cefb40efc444cc6aa296c0508b1db3b",
  "placement": 11,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "2cefb40efc444cc6aa296c0508b1db3b",
  "placement": 94,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "2cefb40efc444cc6aa296c0508b1db3b",
  "placement": 50,
  "time_alive": 1221,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "2cefb40efc444cc6aa296c0508b1db3b",
  "placement": 80,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "349b1affb2f2430788f2c46cf8c4f026",
  "placement": 92,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "349b1affb2f2430788f2c46cf8c4f026",
  "placement": 98,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "349b1affb2f2430788f2c46cf8c4f026",
  "placement": 39,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "349b1affb2f2430788f2c46cf8c4f026",
  "placement": 23,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "349b1affb2f2430788f2c46cf8c4f026",
  "placement": 33,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "349b1affb2f2430788f2c46cf8c4f026",
  "placement": 10,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 16,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 37,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 66,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 73,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 9,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "945c6ff0b3334516b28a074daf1a8357",
  "placement": 63,
  "time_alive": 639,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c926f3604f294e86b3e00ae250ae6a0d",
  "placement": 11,
  "time_alive": 1412,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c926f3604f294e86b3e00ae250ae6a0d",
  "placement": 21,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c926f3604f294e86b3e00ae250ae6a0d",
  "placement": 76,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c926f3604f294e86b3e00ae250ae6a0d",
  "placement": 72,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c926f3604f294e86b3e00ae250ae6a0d",
  "placement": 47,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "c926f3604f294e86b3e00ae250ae6a0d",
  "placement": 33,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 34,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 95,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 16,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 92,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "b9da513afc174d9b9e090d4aa59b58d0",
  "placement": 24,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 53,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 3,
  "time_alive": 1516,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 65,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 62,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 53,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "4e74235e13de4a759aa8db6305734b5c",
  "placement": 53,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 38,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 31,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 42,
  "time_alive": 1288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 38,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 43,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "a84fd642eff845ed937a2a691962cc01",
  "placement": 25,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 61,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 69,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 63,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 2,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 30,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "963f9b7a90d44bcebb138447744c2a48",
  "placement": 56,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 26,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 15,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 51,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 74,
  "time_alive": 811,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 91,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "9f389fe834cc4bc3b6715276553f49cc",
  "placement": 26,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 54,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 22,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 38,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 48,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 63,
  "time_alive": 944,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 72,
  "time_alive": 388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 37,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 56,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 24,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 70,
  "time_alive": 921,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 23,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 78,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "054226c2cce5425da33da8b32f93b177",
  "placement": 89,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "054226c2cce5425da33da8b32f93b177",
  "placement": 79,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "054226c2cce5425da33da8b32f93b177",
  "placement": 73,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "054226c2cce5425da33da8b32f93b177",
  "placement": 27,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "054226c2cce5425da33da8b32f93b177",
  "placement": 48,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "054226c2cce5425da33da8b32f93b177",
  "placement": 8,
  "time_alive": 1474,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 50,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 40,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 45,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 69,
  "time_alive": 763,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "9391533faf794986b88893947721caf8",
  "placement": 75,
  "time_alive": 325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 96,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 51,
  "time_alive": 1217,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 22,
  "time_alive": 1377,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 52,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 61,
  "time_alive": 1039,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "9416e99e63c3496e904a5b8b9832d953",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 41,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 18,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 35,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 86,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 88,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 51,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 82,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 20,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 79,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 30,
  "time_alive": 1345,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 90,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e32a4199f988419f9680dd697edb384c",
  "placement": 39,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 25,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 81,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 93,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 26,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 46,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 36,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 57,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 59,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 57,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 26,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "3f84cbcc9e13455397e9c1a3854f359d",
  "placement": 58,
  "time_alive": 873,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "032b5cbda33f4344ac2651361b4d7b59",
  "placement": 86,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "032b5cbda33f4344ac2651361b4d7b59",
  "placement": 39,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "032b5cbda33f4344ac2651361b4d7b59",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "032b5cbda33f4344ac2651361b4d7b59",
  "placement": 21,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "032b5cbda33f4344ac2651361b4d7b59",
  "placement": 40,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "25561b45562642fc88e6a0ed994815ea",
  "placement": 63,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "25561b45562642fc88e6a0ed994815ea",
  "placement": 12,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "25561b45562642fc88e6a0ed994815ea",
  "placement": 45,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "25561b45562642fc88e6a0ed994815ea",
  "placement": 44,
  "time_alive": 1303,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "25561b45562642fc88e6a0ed994815ea",
  "placement": 52,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "25561b45562642fc88e6a0ed994815ea",
  "placement": 62,
  "time_alive": 684,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 55,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 80,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 26,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 56,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 20,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "cea95e2cf494461295a34057e8d42ae4",
  "placement": 35,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 74,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 33,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 80,
  "time_alive": 785,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 55,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 40,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "006a75058ab743e1821f2fb46322badf",
  "placement": 31,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "3dd96bb7b3424ff9961ee7ecc5096839",
  "placement": 31,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "3dd96bb7b3424ff9961ee7ecc5096839",
  "placement": 97,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "3dd96bb7b3424ff9961ee7ecc5096839",
  "placement": 86,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "3dd96bb7b3424ff9961ee7ecc5096839",
  "placement": 21,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "3dd96bb7b3424ff9961ee7ecc5096839",
  "placement": 34,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "3dd96bb7b3424ff9961ee7ecc5096839",
  "placement": 83,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 46,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 32,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 60,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 33,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 45,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "c0f99eb3f168409597a5a6ad0eacc28b",
  "placement": 74,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 52,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 72,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 23,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 61,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 64,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "8e94c4adc9474b4db8dd1ed2ccf7bb50",
  "placement": 30,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 48,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 60,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 75,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 15,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 60,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "499c4c862ed244adb0dd50f0126cb1ec",
  "placement": 65,
  "time_alive": 613,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 47,
  "time_alive": 1306,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 44,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 54,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 71,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 37,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "948c5f8ed7e643a9ac23c1c1339ce229",
  "placement": 93,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 67,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 61,
  "time_alive": 1076,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 63,
  "time_alive": 1107,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 96,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "2abfa7a17cfc48018d865991460eb728",
  "placement": 16,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "47d88e3720634139a557ddd4568c218f",
  "placement": 49,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "47d88e3720634139a557ddd4568c218f",
  "placement": 63,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "47d88e3720634139a557ddd4568c218f",
  "placement": 92,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "47d88e3720634139a557ddd4568c218f",
  "placement": 84,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "47d88e3720634139a557ddd4568c218f",
  "placement": 17,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "47d88e3720634139a557ddd4568c218f",
  "placement": 27,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 15,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 52,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 91,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 85,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 73,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "ef1421ac6e8541f0887b22e74f94329c",
  "placement": 77,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 78,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 68,
  "time_alive": 938,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 62,
  "time_alive": 1067,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 89,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 86,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "f9018512a7d3484ba0eed05ebb9982a3",
  "placement": 14,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 90,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 23,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 53,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 93,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 38,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "4767134f5813437e9645a5e5e5089ff7",
  "placement": 68,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "4767134f5813437e9645a5e5e5089ff7",
  "placement": 47,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "4767134f5813437e9645a5e5e5089ff7",
  "placement": 32,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "4767134f5813437e9645a5e5e5089ff7",
  "placement": 87,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "4767134f5813437e9645a5e5e5089ff7",
  "placement": 39,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "4767134f5813437e9645a5e5e5089ff7",
  "placement": 90,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 59,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 92,
  "time_alive": 251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 69,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 13,
  "time_alive": 1423,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "f625018bcb05464a8a28bdeebf431030",
  "placement": 57,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 57,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 27,
  "time_alive": 1383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 74,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 51,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 36,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "61ef70e2855f47d7b74748010dfcb764",
  "placement": 87,
  "time_alive": 145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 64,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 90,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 20,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 54,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 66,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "a18385ca79334efea63fafbd5c65fdd9",
  "placement": 55,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 95,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 78,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 48,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 67,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 35,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "36232fd4c028417a837cf6146017a8b9",
  "placement": 49,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070",
  "placement": 50,
  "time_alive": 1228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070",
  "placement": 71,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070",
  "placement": 70,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "3c7ec190adc94c0b827fa505b6ab5070",
  "placement": 20,
  "time_alive": 1398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 65,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 89,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 81,
  "time_alive": 705,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 58,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 84,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 37,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653",
  "placement": 72,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653",
  "placement": 74,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653",
  "placement": 94,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653",
  "placement": 75,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653",
  "placement": 42,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653",
  "placement": 61,
  "time_alive": 749,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 62,
  "time_alive": 1123,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 82,
  "time_alive": 699,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 64,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 79,
  "time_alive": 623,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 41,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "431ff64c581a49b2897b8cd2a266e0da",
  "placement": 94,
  "time_alive": 98,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 76,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 87,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 90,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 91,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 80,
  "time_alive": 344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e",
  "placement": 23,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681",
  "placement": 85,
  "time_alive": 723,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681",
  "placement": 57,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681",
  "placement": 64,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681",
  "placement": 57,
  "time_alive": 1094,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681",
  "placement": 69,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 66,
  "time_alive": 1085,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 41,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 56,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 81,
  "time_alive": 527,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 78,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "1bd6de0680b840588f0e1fb8aa7fa88f",
  "placement": 92,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "3fd7313c34484d0eb3e333801f519fed",
  "placement": 93,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "3fd7313c34484d0eb3e333801f519fed",
  "placement": 34,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "3fd7313c34484d0eb3e333801f519fed",
  "placement": 71,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "3fd7313c34484d0eb3e333801f519fed",
  "placement": 77,
  "time_alive": 687,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "3fd7313c34484d0eb3e333801f519fed",
  "placement": 83,
  "time_alive": 318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "3fd7313c34484d0eb3e333801f519fed",
  "placement": 91,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 45,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 83,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 67,
  "time_alive": 993,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 69,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 58,
  "time_alive": 1065,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "91b8524ee59249b489b4164ffb7fef23",
  "placement": 73,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 44,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 93,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 83,
  "time_alive": 609,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 68,
  "time_alive": 1019,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 51,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 86,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "0120afaa203c4527867b7cb14d1df466",
  "placement": 71,
  "time_alive": 907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "0120afaa203c4527867b7cb14d1df466",
  "placement": 55,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "0120afaa203c4527867b7cb14d1df466",
  "placement": 41,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "0120afaa203c4527867b7cb14d1df466",
  "placement": 98,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "0120afaa203c4527867b7cb14d1df466",
  "placement": 70,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "0120afaa203c4527867b7cb14d1df466",
  "placement": 76,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 91,
  "time_alive": 382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 91,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 44,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 88,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 38,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "55c4b45cdaea4a15abd4c0a9beba9a7b",
  "placement": 84,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 94,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 84,
  "time_alive": 629,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 77,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 90,
  "time_alive": 209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "80b391cfeaa04569aaf5499b058e3556",
  "placement": 65,
  "time_alive": 838,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "6846bbb974784822bc168686879d7559",
  "placement": 80,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "6846bbb974784822bc168686879d7559",
  "placement": 86,
  "time_alive": 553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "6846bbb974784822bc168686879d7559",
  "placement": 50,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "6846bbb974784822bc168686879d7559",
  "placement": 97,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "6846bbb974784822bc168686879d7559",
  "placement": 81,
  "time_alive": 344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "6846bbb974784822bc168686879d7559",
  "placement": 70,
  "time_alive": 483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 42,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 45,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 95,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 92,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 93,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 33,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 64,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 84,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 95,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 95,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 95,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "b4c91eed02904f809cc009bb56a2c099",
  "placement": 79,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "b4c91eed02904f809cc009bb56a2c099",
  "placement": 65,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "b4c91eed02904f809cc009bb56a2c099",
  "placement": 87,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "b4c91eed02904f809cc009bb56a2c099",
  "placement": 83,
  "time_alive": 456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "b4c91eed02904f809cc009bb56a2c099",
  "placement": 87,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 75,
  "time_alive": 894,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 70,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 80,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 85,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "9a3fc3c68b9f4bc18db229c8ac78fa7c",
  "placement": 88,
  "time_alive": 123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "cbb84b78c0a74d63bdf93c1627163683",
  "placement": 99,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "cbb84b78c0a74d63bdf93c1627163683",
  "placement": 62,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "cbb84b78c0a74d63bdf93c1627163683",
  "placement": 72,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "cbb84b78c0a74d63bdf93c1627163683",
  "placement": 96,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "cbb84b78c0a74d63bdf93c1627163683",
  "placement": 94,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "cbb84b78c0a74d63bdf93c1627163683",
  "placement": 66,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "c7ed3d6aaae7423787d129158bbe992f",
  "placement": 77,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "c7ed3d6aaae7423787d129158bbe992f",
  "placement": 94,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "c7ed3d6aaae7423787d129158bbe992f",
  "placement": 85,
  "time_alive": 541,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "c7ed3d6aaae7423787d129158bbe992f",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "c7ed3d6aaae7423787d129158bbe992f",
  "placement": 74,
  "time_alive": 562,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12962d07-9e47-4784-8116-0ca81779946f",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 97,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d12b605-ccfa-4c2a-b1bd-e21e6503f83b",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 99,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b6751be-bfdd-4d3e-bddf-f714d681773e",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 52,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0a831ae4-078d-406f-9c71-d767bcb4f79d",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 78,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09a727ac-cbd8-43a4-91b0-33811200f05e",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 89,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0fbd38df-cf44-483c-b566-49a7a3ed69b6",
  "team_id": "e387a2afa50f4add8e2f047a821f6c8e",
  "placement": 81,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1517,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 30,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1538,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 6,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 3,
  "time_alive": 1526,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "e8788121e9634a0291707b7772b10502",
  "placement": 32,
  "time_alive": 1361,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 2,
  "time_alive": 1517,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 26,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 14,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 21,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 19,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 5,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 59,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 4,
  "time_alive": 1503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 16,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 19,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 27,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "6ef53e85807543659893a02940723ada",
  "placement": 1,
  "time_alive": 1525,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 8,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 11,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 2,
  "time_alive": 1538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 13,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 7,
  "time_alive": 1497,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9b333e3d949449309ba8c8a1c491b102",
  "placement": 33,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 68,
  "time_alive": 1023,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 14,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 17,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 1,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 4,
  "time_alive": 1497,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 17,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 3,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 5,
  "time_alive": 1499,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 49,
  "time_alive": 1232,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 9,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "10c829f7666942d8ada85183c993c4e3",
  "placement": 25,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 9,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 23,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 13,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 4,
  "time_alive": 1503,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 74,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b",
  "placement": 9,
  "time_alive": 1462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 38,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 1,
  "time_alive": 1532,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 11,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 63,
  "time_alive": 1122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 63,
  "time_alive": 1017,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "dfadab81e6444305b6400244155921ed",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 5,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 22,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 32,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 18,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 35,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "38fd93fda3994a8c81007524b101b197",
  "placement": 42,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 70,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 5,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 7,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 35,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 18,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 69,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 79,
  "time_alive": 621,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1481,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 37,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 28,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 21,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "e75e2f2763044da6a97788622c17dc0d",
  "placement": 2,
  "time_alive": 1525,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 16,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 17,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 18,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 16,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 31,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 18,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 35,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 45,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 4,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 7,
  "time_alive": 1471,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 44,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 39,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 18,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 91,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 53,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 8,
  "time_alive": 1469,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 22,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "11e9dfb6a53c4071b8d0370632add032",
  "placement": 7,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 6,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 57,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 55,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 5,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 13,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "ada746fa490947b0b61f815560563da3",
  "placement": 59,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 15,
  "time_alive": 1415,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 10,
  "time_alive": 1435,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 47,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 40,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "3d17c3d6238c469d9109f831a8d89079",
  "placement": 86,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 10,
  "time_alive": 1463,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 8,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 69,
  "time_alive": 835,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 58,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 16,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "844e6b183f0f41deb6fbaab10434c2e3",
  "placement": 60,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 73,
  "time_alive": 735,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 46,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 12,
  "time_alive": 1450,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 24,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 15,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "43f28921b9b546b38791602c53a3f01f",
  "placement": 12,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 50,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 96,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 6,
  "time_alive": 1498,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 48,
  "time_alive": 1236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 6,
  "time_alive": 1512,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4",
  "placement": 71,
  "time_alive": 480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 22,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 70,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 8,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 11,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 38,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "1b84196666a046fb863f059caf9fcc10",
  "placement": 58,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 36,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 36,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 62,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 1,
  "time_alive": 1530,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 54,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "cc653779964c4f9188d29e15a6465a61",
  "placement": 70,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 25,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 41,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 54,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 64,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 5,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "cce29348ddef41eb8547376d057ba002",
  "placement": 23,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 21,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 58,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 30,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 3,
  "time_alive": 1521,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 60,
  "time_alive": 1073,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 77,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 7,
  "time_alive": 1483,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 76,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 10,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 39,
  "time_alive": 1320,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "caade4c08f27413aba5daee9f68c0bbc",
  "placement": 78,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 62,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 79,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 3,
  "time_alive": 1519,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 54,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 11,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "17a55115aca04a99be849a5079e04cee",
  "placement": 61,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 53,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 49,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 9,
  "time_alive": 1461,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 14,
  "time_alive": 1435,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 59,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "432c6271f0904d4bb750e0cda115f194",
  "placement": 50,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 4,
  "time_alive": 1507,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 44,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 20,
  "time_alive": 1403,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 76,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 93,
  "time_alive": 132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9ea8d0bc12924d978c2b08e2a016e801",
  "placement": 64,
  "time_alive": 779,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 40,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 25,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 28,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 88,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 83,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "698fd3dbe1574531bea942120d144b78",
  "placement": 6,
  "time_alive": 1486,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 31,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 19,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 23,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 71,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 73,
  "time_alive": 700,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "f9dafbfdb6ce4041bafdabb5d4991aa3",
  "placement": 24,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 77,
  "time_alive": 655,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 20,
  "time_alive": 1387,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 64,
  "time_alive": 982,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c35edc7307ab482084bf91ad96121267",
  "placement": 22,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 11,
  "time_alive": 1452,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 65,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 38,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 15,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 72,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c281963c174543b19c7da65490821223",
  "placement": 68,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 55,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 34,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 22,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 17,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 39,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "08be3cbc3dfe41119f444346b4295f44",
  "placement": 38,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 97,
  "time_alive": 124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 21,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 46,
  "time_alive": 1229,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 44,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 20,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "b7f0c73dd97748568b3231adc4163314",
  "placement": 15,
  "time_alive": 1414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 76,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 62,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 21,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 8,
  "time_alive": 1472,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 67,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 32,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 43,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 57,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 45,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 25,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "4900a25c46914fe1a71b0fb1437b4833",
  "placement": 37,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 98,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 72,
  "time_alive": 865,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 91,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 37,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 4,
  "time_alive": 1519,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "28ac9ecd909e4d789e826e678c6057aa",
  "placement": 26,
  "time_alive": 1382,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 66,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 9,
  "time_alive": 1445,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 85,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 78,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 26,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "84657b35a87c4fcab5c9d5b31b6f5c30",
  "placement": 17,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 3,
  "time_alive": 1509,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 61,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 65,
  "time_alive": 1069,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 65,
  "time_alive": 972,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9557f347d59c480da7da151a88580c55",
  "placement": 47,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 30,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 51,
  "time_alive": 1215,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 87,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 30,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 12,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 49,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 27,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 29,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 74,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 74,
  "time_alive": 649,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 17,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 45,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 41,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 69,
  "time_alive": 1029,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 78,
  "time_alive": 640,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 9,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 53,
  "time_alive": 1160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c3af6081629641e6af8b3706e82570cc",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 47,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 15,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 24,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 25,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 42,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "5c1dba9a27654a239d6c645922df2fd9",
  "placement": 95,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 78,
  "time_alive": 625,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 97,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 64,
  "time_alive": 959,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 23,
  "time_alive": 1385,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 14,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "dd5b818516e5413ca643876cc109cac7",
  "placement": 51,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 33,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 40,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 73,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 22,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 84,
  "time_alive": 356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c790033e250a4049b89bb44fef84b9c4",
  "placement": 19,
  "time_alive": 1405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 69,
  "time_alive": 922,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 16,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 29,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 55,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 33,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "02ce1029c071498f90fba6dc95006005",
  "placement": 56,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 91,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 55,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 88,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 42,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 2,
  "time_alive": 1527,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "c805eec2ef744e0c9f3ad285067ccac3",
  "placement": 36,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 43,
  "time_alive": 1310,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 32,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 27,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 86,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 28,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 91,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 54,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 39,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 48,
  "time_alive": 1219,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 41,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 45,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "96a831605b9642f8af449b25e5d9296e",
  "placement": 16,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 89,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 53,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 79,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 2,
  "time_alive": 1530,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 62,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "2b6ecf5cd48846b5bb684c4e29822357",
  "placement": 34,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 75,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 86,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 15,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 27,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 58,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 21,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "abbabbc2195847f59b51202859077ca2",
  "placement": 13,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "abbabbc2195847f59b51202859077ca2",
  "placement": 33,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "abbabbc2195847f59b51202859077ca2",
  "placement": 72,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "abbabbc2195847f59b51202859077ca2",
  "placement": 47,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "abbabbc2195847f59b51202859077ca2",
  "placement": 41,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "abbabbc2195847f59b51202859077ca2",
  "placement": 30,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 63,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 54,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 44,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 26,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 48,
  "time_alive": 1233,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "130eed7e8e544e3697ae75ebeaf1ca9f",
  "placement": 35,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 52,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 12,
  "time_alive": 1410,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 86,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 43,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 46,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "7e45ef7a03ce47e2bc8ccd0441bab4f1",
  "placement": 44,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 37,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 13,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 43,
  "time_alive": 1290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 56,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 57,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a",
  "placement": 82,
  "time_alive": 256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 71,
  "time_alive": 864,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 98,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 35,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 36,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 61,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "931711d25486490c92c44c5520929ec8",
  "placement": 20,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "95b410826f0248d2b07a7dfd7e34a72d",
  "placement": 72,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "95b410826f0248d2b07a7dfd7e34a72d",
  "placement": 48,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "95b410826f0248d2b07a7dfd7e34a72d",
  "placement": 45,
  "time_alive": 1236,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "95b410826f0248d2b07a7dfd7e34a72d",
  "placement": 98,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "95b410826f0248d2b07a7dfd7e34a72d",
  "placement": 91,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "95b410826f0248d2b07a7dfd7e34a72d",
  "placement": 48,
  "time_alive": 1211,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 49,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 87,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 77,
  "time_alive": 656,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 95,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 68,
  "time_alive": 906,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "877a0f4d3d9c44299a682ec861fbade6",
  "placement": 8,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 46,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 66,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 33,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 77,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "8f55c2e51c234eb69e18a049d8e0a033",
  "placement": 11,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 83,
  "time_alive": 380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 28,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 39,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 72,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 36,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362",
  "placement": 27,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 88,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 27,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 34,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 84,
  "time_alive": 418,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 10,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7",
  "placement": 79,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 95,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 77,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 63,
  "time_alive": 962,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 80,
  "time_alive": 463,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 23,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 31,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 87,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 2,
  "time_alive": 1532,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 94,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 69,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 76,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9a9d12bae98c4db2885a3809497f6f60",
  "placement": 90,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 44,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 24,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 53,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 37,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "b4c7fcf33b804231bb1dda5d26ac1fde",
  "placement": 52,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "b5660b6bbd0f4b1f8a4bc1f3ad9c2ad6",
  "placement": 90,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "b5660b6bbd0f4b1f8a4bc1f3ad9c2ad6",
  "placement": 85,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "b5660b6bbd0f4b1f8a4bc1f3ad9c2ad6",
  "placement": 26,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "b5660b6bbd0f4b1f8a4bc1f3ad9c2ad6",
  "placement": 12,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "b5660b6bbd0f4b1f8a4bc1f3ad9c2ad6",
  "placement": 56,
  "time_alive": 1110,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "b5660b6bbd0f4b1f8a4bc1f3ad9c2ad6",
  "placement": 72,
  "time_alive": 475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 80,
  "time_alive": 573,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 18,
  "time_alive": 1396,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 41,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 67,
  "time_alive": 955,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 52,
  "time_alive": 1177,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "69f5aaf22d1c4d72ba7da34b8d851bdb",
  "placement": 87,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 34,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 64,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 31,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 66,
  "time_alive": 957,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 43,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "fe45b8f311da44a8b22da2884e8c6e9a",
  "placement": 63,
  "time_alive": 837,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 23,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 31,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 36,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 61,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "e0a1e9e351ca4f7f9f678b3a37a14f47",
  "placement": 81,
  "time_alive": 259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 65,
  "time_alive": 1066,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 37,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 29,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 30,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "faeadb29bb7541a281b8e405dc7346f4",
  "placement": 75,
  "time_alive": 403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 28,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 6,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 83,
  "time_alive": 448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 60,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 94,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "f354eddf45504267b6d4e2740d1178ea",
  "placement": 96,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 12,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 94,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 80,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 79,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 50,
  "time_alive": 1196,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "f8fa56b8624d457288dcff97ee773611",
  "placement": 66,
  "time_alive": 710,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "ad6c7bbbbf354c298141480264bfc4ca",
  "placement": 56,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "ad6c7bbbbf354c298141480264bfc4ca",
  "placement": 93,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "ad6c7bbbbf354c298141480264bfc4ca",
  "placement": 75,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "ad6c7bbbbf354c298141480264bfc4ca",
  "placement": 82,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "ad6c7bbbbf354c298141480264bfc4ca",
  "placement": 29,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "ad6c7bbbbf354c298141480264bfc4ca",
  "placement": 13,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 14,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 52,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 81,
  "time_alive": 575,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 50,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 86,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "148e96aeef1b43c9a27b93ec0faf9e4b",
  "placement": 28,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 93,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 88,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 19,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 57,
  "time_alive": 1180,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 69,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "69424acd083d484baf1fd13fb8ccfb54",
  "placement": 55,
  "time_alive": 1106,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 42,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 75,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 40,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 77,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 34,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 53,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 84,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 90,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 95,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 94,
  "time_alive": 232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 97,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 3,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 19,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 67,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 58,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 90,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 80,
  "time_alive": 440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "a570df2f58964a0499b0ec44d36d8740",
  "placement": 74,
  "time_alive": 426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 57,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 68,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 90,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 34,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 75,
  "time_alive": 581,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "bfb1a0b26387463f8bfb77e177fa00f5",
  "placement": 41,
  "time_alive": 1327,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 24,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 84,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 76,
  "time_alive": 716,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 93,
  "time_alive": 252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 55,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "5345357b290f4fb88c9d1b6f58fb2869",
  "placement": 43,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 58,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 73,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 68,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 96,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 66,
  "time_alive": 947,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "6b0f1dcba07e45bb9467838dee097ed5",
  "placement": 29,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 45,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 92,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 93,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 38,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 24,
  "time_alive": 1361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "e370e2458c2f4d01b58aa3478afe039a",
  "placement": 97,
  "time_alive": 99,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 51,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 47,
  "time_alive": 1274,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 65,
  "time_alive": 923,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 87,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 51,
  "time_alive": 1186,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "ca257fa2e6084f74ae48312d0318a153",
  "placement": 65,
  "time_alive": 775,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 81,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 56,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 50,
  "time_alive": 1209,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 70,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 47,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 57,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 64,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 82,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 60,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 32,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 32,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "8bdc27633bb4476383837ab2adb64a2c",
  "placement": 54,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 94,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 83,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 25,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 73,
  "time_alive": 703,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 89,
  "time_alive": 270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 89,
  "time_alive": 150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 60,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 74,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 61,
  "time_alive": 1088,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 33,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 78,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93",
  "placement": 40,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 67,
  "time_alive": 1032,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 59,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 40,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 81,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "b0bf3dfb3f84401fa22b41d5bbec5ec4",
  "placement": 73,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 20,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 80,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 67,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 52,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 82,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "9d6345a3a93c468cb8b58d1fa9f8026b",
  "placement": 76,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 74,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 63,
  "time_alive": 1093,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 49,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 68,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 67,
  "time_alive": 910,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "a509f50735a346cca41de41370ae98bd",
  "placement": 62,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 95,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 66,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 46,
  "time_alive": 1257,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e21e55-270d-400e-87a4-7059ea9a1588",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 70,
  "time_alive": 755,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "067ecdb3-aa63-45a4-82ef-71c61a0f481f",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 46,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "050650fe-3555-495a-b49e-a5b6ba32f50c",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 61,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01d3d9f5-203e-4d86-bce0-b64e2e644f48",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 71,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01747f55-09c0-4772-ac10-7da05f5c0973",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 51,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05df722e-54d8-4780-9688-3bdf0bf8918e",
  "team_id": "c1d67566270b40ee9efb7d16b1a66e6f",
  "placement": 31,
  "time_alive": 1366,
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
    