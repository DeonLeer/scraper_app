const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 24,
  "time_alive": 1087,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 5,
  "time_alive": 1422,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 2,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1021,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 5,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 12,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 17,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 10,
  "time_alive": 1427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 15,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 11,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 4,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 14,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 31,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 23,
  "time_alive": 1089,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 1,
  "time_alive": 1483,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 13,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 14,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 24,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 2,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 5,
  "time_alive": 1461,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 2,
  "time_alive": 1512,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 30,
  "time_alive": 672,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 14,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 19,
  "time_alive": 1269,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 25,
  "time_alive": 1008,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 10,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 8,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 6,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 2,
  "time_alive": 1501,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 19,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 12,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 4,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 8,
  "time_alive": 1438,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 13,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 5,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 7,
  "time_alive": 1443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 16,
  "time_alive": 1288,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 9,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "439e741737a54167821c99741b6a1369:dc451c899522405d84373c6e93f72881:fe86111711b449a6a41ab6b8f6a618ce",
  "placement": 16,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 7,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 7,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 25,
  "time_alive": 1035,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 16,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 12,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 24,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 12,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 22,
  "time_alive": 1103,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 1,
  "time_alive": 1508,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 7,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 10,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "1cea31aae8e840798764ae1812fc09c9:c6242764ab20411dae77829ee1ce39a4:f7d7566162fc4e65af40d412746b9457",
  "placement": 4,
  "time_alive": 1509,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 21,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 33,
  "time_alive": 149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 7,
  "time_alive": 1429,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 22,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 3,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 3,
  "time_alive": 1462,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 15,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 8,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 14,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 18,
  "time_alive": 1238,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 19,
  "time_alive": 1160,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "13ea722c898f4f0a8bc49e267e5fa7b9:f025243621ac482a859cc6d460bcfc93:f47c7388c357462cad63a7c4d12ae633",
  "placement": 9,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 4,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 22,
  "time_alive": 1173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 9,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 27,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 24,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 5,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 23,
  "time_alive": 1149,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 18,
  "time_alive": 1269,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 9,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 1,
  "time_alive": 1478,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 15,
  "time_alive": 1357,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "12424e08a7ab47ac8fffbc3fa8a966e9:bfd5df2d6f9940f78dc88c9af150a107:e365d9b305e5437fadae1ae1582c134d",
  "placement": 15,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 28,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 3,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 6,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 6,
  "time_alive": 1454,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 9,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 8,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 31,
  "time_alive": 492,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 9,
  "time_alive": 1415,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 32,
  "time_alive": 256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 27,
  "time_alive": 497,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 33,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "0936feb69d234f999aefb246b20ec49e:a83014f91e0c406da2c9840c015f3400:f8eeece803924b9093db2812e6772743",
  "placement": 14,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 29,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 26,
  "time_alive": 955,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 3,
  "time_alive": 1477,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 23,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 17,
  "time_alive": 1255,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 12,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 8,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 28,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 13,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 5,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "1029158771f74d2d9712f2b69ea3c181:50f8b0646a1945aa8b47d25fe221903d:c91d3ba5a5164b1e8bfd3fcc156856d0",
  "placement": 1,
  "time_alive": 1530,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 6,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 2,
  "time_alive": 1509,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 24,
  "time_alive": 1069,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 8,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 7,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 9,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 27,
  "time_alive": 876,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 25,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 4,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 31,
  "time_alive": 131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 25,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "97f4071a528d4999942b44c8ddbb32b5:c69da325fa1a4e9487ebbd2d2c82e4e5:f767b4cff36441fb83a6873163f8bfb2",
  "placement": 24,
  "time_alive": 708,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 26,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 23,
  "time_alive": 1140,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 5,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 25,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 4,
  "time_alive": 1457,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 15,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 6,
  "time_alive": 1452,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 15,
  "time_alive": 1375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 15,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 9,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 4,
  "time_alive": 1469,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "3f4bd217fbb84a5883f529c4fec7f4ca:778648d1521f4e6bb4222d16997ea1fd:a129c5e9430a4df5b15112551ed643f8",
  "placement": 11,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 23,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 6,
  "time_alive": 1460,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 4,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 13,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 16,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 20,
  "time_alive": 1306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 2,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 23,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 19,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 25,
  "time_alive": 690,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 6,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "28876949ba4c4bb29a89ebcb1986a5db:ac924f441cb94f27b7bbd23a0fdbb9a2:bf1bfec16aa64f4cb717ff4a267d7752",
  "placement": 7,
  "time_alive": 1474,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 17,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 9,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 8,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 7,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 14,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 21,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 9,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 11,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 13,
  "time_alive": 1409,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 14,
  "time_alive": 1338,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 11,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "d0695e43a6c44f90b775282dddd6d970:dcc3be5c46ba415a9c6a68eef03e23dd:dce03d1c45aa47ebb3cf44a161395922",
  "placement": 26,
  "time_alive": 553,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 3,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 13,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 20,
  "time_alive": 1208,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 18,
  "time_alive": 1327,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 22,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 16,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 13,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 12,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 28,
  "time_alive": 766,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 3,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 29,
  "time_alive": 335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "da5494905e1547b89045269240ff2b50:f1d86387f4304eb396071611b61f17cb:fc2e48e58c23479c9c678976f87c33a0",
  "placement": 20,
  "time_alive": 1222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 11,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 11,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 13,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 28,
  "time_alive": 724,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 13,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 26,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 10,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 13,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 12,
  "time_alive": 1414,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 15,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 14,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "1977a9ca0e2446778f3af453494b858c:1ee17d101de04f9bbde91c240e2f4a0f:73b5617b1fed4b3b97f4f377924acb1c",
  "placement": 29,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 20,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 30,
  "time_alive": 787,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 10,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 12,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 25,
  "time_alive": 1028,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 28,
  "time_alive": 761,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 19,
  "time_alive": 1241,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 3,
  "time_alive": 1482,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 18,
  "time_alive": 1241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 13,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067:858aef64300f443084e59972491b821d:f9b82506465e4fafa7dc94dcb431bcba",
  "placement": 10,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 13,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 16,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 19,
  "time_alive": 1305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 17,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 23,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 33,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 22,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 6,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 11,
  "time_alive": 1419,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 29,
  "time_alive": 391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 16,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "3392bd540032489da6c083c0a72d8b38:8dc3d34ddf6940288d72dec86f7e7e72:a8fb52a615814c459516416714439bd4",
  "placement": 31,
  "time_alive": 102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 25,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 15,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 18,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 21,
  "time_alive": 1252,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 19,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 19,
  "time_alive": 1334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 28,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 29,
  "time_alive": 413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 5,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 20,
  "time_alive": 1194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 27,
  "time_alive": 440,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "071d5877276749babefb5b673fc4fac5:ba6848ae9cc84e54b92cb85ec8ffa3fb:fc26bac129e541c19f34ac3d9721ca64",
  "placement": 2,
  "time_alive": 1530,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 15,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 17,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 29,
  "time_alive": 756,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 14,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 31,
  "time_alive": 623,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 23,
  "time_alive": 1174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 7,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 16,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 23,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 8,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607:2aef873885f1461ca0d58b0ca1159750:7169c5271eb24d53bda6678baa62892b",
  "placement": 20,
  "time_alive": 1147,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 16,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 20,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 2,
  "time_alive": 1510,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 20,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 18,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 30,
  "time_alive": 691,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 26,
  "time_alive": 884,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 26,
  "time_alive": 940,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 28,
  "time_alive": 405,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 22,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "4d1134d36f4640f2aa2903604b6a0777:64eb14695d60461689800059accee106:90b5c3a60223423cabc5de692585bd80",
  "placement": 17,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 18,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 31,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 23,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 6,
  "time_alive": 1447,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 31,
  "time_alive": 381,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 20,
  "time_alive": 1175,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 24,
  "time_alive": 1010,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 22,
  "time_alive": 1115,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 24,
  "time_alive": 1072,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 17,
  "time_alive": 1343,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "23a12273086e42f59ce23c135f3b317d:4b91612d102b441b99c2c9e7c311e81f:bffc8d08bec94c5caa245df5899cb692",
  "placement": 28,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 32,
  "time_alive": 344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 25,
  "time_alive": 956,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 31,
  "time_alive": 256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 29,
  "time_alive": 305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 26,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 25,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 11,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 20,
  "time_alive": 1216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 20,
  "time_alive": 1158,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 22,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 28,
  "time_alive": 387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "00450a5a239545278d5950f98e26dab5:750440283a2240ac8f85c86c795f9763:af0a3a8435464a88a1a8f010f30b71be",
  "placement": 8,
  "time_alive": 1461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 19,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 21,
  "time_alive": 1188,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 26,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 11,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 11,
  "time_alive": 1407,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 22,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 33,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 31,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 27,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 19,
  "time_alive": 1238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 32,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "9d753f5abe9b43fa9915ff04a54ca3f0:a5aaedd61c4840e4a27651c163967f02:b587b451162d442dbf68935a6efe9af3",
  "placement": 19,
  "time_alive": 1266,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 30,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 18,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 16,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 20,
  "time_alive": 1311,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 30,
  "time_alive": 781,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 10,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 26,
  "time_alive": 929,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 17,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 30,
  "time_alive": 337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 26,
  "time_alive": 505,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 30,
  "time_alive": 300,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "077343a20e474723aecc78d877aec8d3:18d9353296ad4724849b153c6ddcd137:38aadce4d8f949448d2afed695360de9",
  "placement": 18,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 10,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 29,
  "time_alive": 839,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 15,
  "time_alive": 1343,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 31,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 33,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 32,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 32,
  "time_alive": 468,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 30,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 16,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 30,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 21,
  "time_alive": 1139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "3ae546cb600e4b2996de340d02b81ddb:803c263c083143e6b103c6e390696823:9af7baa13e8e40e0a4ade45735de9d45",
  "placement": 30,
  "time_alive": 205,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 31,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 32,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 30,
  "time_alive": 441,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 30,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 32,
  "time_alive": 623,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 17,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 16,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 32,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 33,
  "time_alive": 155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 11,
  "time_alive": 1360,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 23,
  "time_alive": 1079,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "845125a51f2d4d0cbddba2263641040f:8712f8745deb444388d536bc9e1ca0f0:a7686b36a09944adad11ccae478c3399",
  "placement": 27,
  "time_alive": 439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 22,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 27,
  "time_alive": 852,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eb2f8ffa-c897-4290-8534-2ad04a1ab9c6",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 24,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 21,
  "time_alive": 1166,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 29,
  "time_alive": 722,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 18,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 27,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 29,
  "time_alive": 762,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 17,
  "time_alive": 1261,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 24,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9c677089-0250-4ede-bb0e-3eaa7488bfbb",
  "team_id": "a0fdaa7f1a7d484499609b6bb9f76713:b80eb002f0ca47e5981078c1c23d4af9:c53e12f62db043b2b3e167760909f8f6",
  "placement": 25,
  "time_alive": 631,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6a968e6-b8ed-4106-80dd-f1939b5b7c7b",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 27,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9afb4c82-c386-4c0b-9c04-6328cb2c69f0",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 28,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cd7e4ad6-c640-46a3-b3b2-ecbb9ce05e1f",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 33,
  "time_alive": 182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "421b8244-2b5f-4b15-96ab-9321ba897453",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 29,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "989fbf40-ad55-499f-987d-05341ae8b25a",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8c52ad51-9c29-4fee-8fcb-a4b236a78a03",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 17,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2dd164c5-0341-421d-8b26-bc8e46cfdf7d",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 33,
  "time_alive": 133,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "37f26c9c-05e3-49ba-ba42-c9b2eb76a474",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 17,
  "time_alive": 1257,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6cb0f2c2-cc33-4062-a79c-cc79e5c50f61",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 32,
  "time_alive": 117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d26e7437-b973-4b07-8d0b-900253bae68a",
  "team_id": "20f09ab1da63401e94c69feb43242ce7:5f611fda1a7148b5b07de73955655854:dae007daf84f4c4a977f333c255a419e",
  "placement": 31,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1494,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 2,
  "time_alive": 1507,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1460,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1519,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1477,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1474,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1435,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1489,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1506,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 26,
  "time_alive": 775,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1478,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 6,
  "time_alive": 1426,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1507,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 28,
  "time_alive": 857,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1519,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 17,
  "time_alive": 1267,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 4,
  "time_alive": 1451,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 10,
  "time_alive": 1393,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 7,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 5,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1488,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 1,
  "time_alive": 1525,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 7,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 5,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 4,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 4,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 9,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 5,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 8,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 12,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 13,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 1,
  "time_alive": 1514,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 16,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 5,
  "time_alive": 1476,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 4,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 4,
  "time_alive": 1476,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 3,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 5,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 8,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 18,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 3,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 6,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 16,
  "time_alive": 1340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 16,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 17,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 2,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 15,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 12,
  "time_alive": 1372,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 15,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 24,
  "time_alive": 978,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 7,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 2,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 6,
  "time_alive": 1424,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 13,
  "time_alive": 1357,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 9,
  "time_alive": 1419,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 18,
  "time_alive": 1275,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 8,
  "time_alive": 1438,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 13,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 5,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 9,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 17,
  "time_alive": 1184,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 8,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 24,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 7,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 13,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 2,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 6,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 10,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 12,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 3,
  "time_alive": 1509,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 8,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 16,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 9,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 26,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 13,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 6,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 7,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 8,
  "time_alive": 1421,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 3,
  "time_alive": 1486,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 2,
  "time_alive": 1514,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 19,
  "time_alive": 1236,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 4,
  "time_alive": 1488,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 17,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 3,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 5,
  "time_alive": 1480,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 6,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 10,
  "time_alive": 1407,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 12,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 21,
  "time_alive": 1079,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 9,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 8,
  "time_alive": 1432,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 19,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 13,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 9,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 14,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 14,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 6,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 2,
  "time_alive": 1460,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 21,
  "time_alive": 1138,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 21,
  "time_alive": 1152,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 2,
  "time_alive": 1474,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 31,
  "time_alive": 401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 27,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 26,
  "time_alive": 675,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 31,
  "time_alive": 506,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 12,
  "time_alive": 1387,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "8c2cf7b1e63a47b3a189ec2e3c929c2c:dd4158876a6d48649aa574c8af61cceb:fb1c6888052843e3b8fe543a2cc69f2d",
  "placement": 6,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 10,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 25,
  "time_alive": 888,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 7,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 14,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 14,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 9,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 3,
  "time_alive": 1444,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 5,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 8,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 21,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 23,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "22ed4bdfba91496aa7d8a5990f31fa54:e1f90941c308448c9288332750148b3d:e256124d31564fb881d77857d9fee45d",
  "placement": 13,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 28,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 13,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 3,
  "time_alive": 1447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 26,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 9,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 26,
  "time_alive": 864,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 7,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 20,
  "time_alive": 1178,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 11,
  "time_alive": 1352,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 5,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 17,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "32c1acc0c4a342f58f70338b29f442c4:37c8cbef6a2a4f53a07038eeb81827f6:d0156930d1f548939eff0831c95eec7c",
  "placement": 10,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 23,
  "time_alive": 959,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 24,
  "time_alive": 904,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 32,
  "time_alive": 129,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 31,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 8,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 29,
  "time_alive": 690,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 1,
  "time_alive": 1471,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 2,
  "time_alive": 1489,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 32,
  "time_alive": 78,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 33,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 14,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "8744c25cf9ba420fb5b2725308823639:ba20ba775b6b4e30896dc87d93d42e9b:c307ea0e2ff949a2b547b79838c665a9",
  "placement": 11,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 18,
  "time_alive": 1261,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 8,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 9,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 6,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 26,
  "time_alive": 887,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 17,
  "time_alive": 1316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 5,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 28,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 6,
  "time_alive": 1458,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 9,
  "time_alive": 1438,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 19,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "34af930f6d4c495cb872b229f30a15ad:491da741f42949c1b49df51205e03a64:a3eee3d21bc34c75a09d86b997958675",
  "placement": 21,
  "time_alive": 1102,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 32,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 21,
  "time_alive": 1009,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 12,
  "time_alive": 1340,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 4,
  "time_alive": 1465,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 10,
  "time_alive": 1345,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 22,
  "time_alive": 983,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 33,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 33,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 13,
  "time_alive": 1336,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 3,
  "time_alive": 1485,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 22,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "2d278d9d695740ce9b57231f74ab338e:d6c35d0f0d88453599cbb1875cf2c925:f44ebe6e70c94da0800a2f882ac9e26d",
  "placement": 33,
  "time_alive": 153,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 2,
  "time_alive": 1494,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 16,
  "time_alive": 1358,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 17,
  "time_alive": 1247,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 12,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 14,
  "time_alive": 1374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 16,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 10,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 15,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 7,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 20,
  "time_alive": 1296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "16c0d5717de0414fa5501a7cd1abc91f:8b5fec933cd7444fb90295f36419bd33:8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 32,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 13,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 28,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 15,
  "time_alive": 1287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 27,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 1,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 30,
  "time_alive": 558,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 28,
  "time_alive": 670,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 31,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 23,
  "time_alive": 959,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 30,
  "time_alive": 615,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 10,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "011679fd795c46e78c6d49346460cdff:82450558d6da490aa044fd8aa71d76c5:ae0a8de557bf46a5994c41e0b5784e67",
  "placement": 2,
  "time_alive": 1478,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 11,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 10,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 14,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 22,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 4,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 11,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 22,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 11,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 9,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 10,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 24,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "47357f2065884a469537f478728c22d8:693124d04a9d439c967675d9e156758a:af5e354532f64ea69fb53772e39b0340",
  "placement": 22,
  "time_alive": 997,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 22,
  "time_alive": 978,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 7,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 25,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 20,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 24,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 16,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 29,
  "time_alive": 615,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 30,
  "time_alive": 545,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 24,
  "time_alive": 893,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 2,
  "time_alive": 1488,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 11,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "3906d482a7224681bde5eaafe4a54e60:74b949b2d5d34752a6555ae891a4e886:cb40e363a0404f47ab852131332cdc0d",
  "placement": 16,
  "time_alive": 1333,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 19,
  "time_alive": 1137,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 11,
  "time_alive": 1431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 21,
  "time_alive": 1069,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 11,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 29,
  "time_alive": 345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 10,
  "time_alive": 1384,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 17,
  "time_alive": 1297,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 12,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 17,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 11,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 27,
  "time_alive": 747,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da:46f8b81ecba843ff9ae4cb1c45695344:8c54d5ee92554d818c96a7f7d01a9b9b",
  "placement": 24,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 30,
  "time_alive": 300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 23,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 16,
  "time_alive": 1249,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 19,
  "time_alive": 1199,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 13,
  "time_alive": 1337,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 28,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 19,
  "time_alive": 1217,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 32,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 6,
  "time_alive": 1474,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 30,
  "time_alive": 341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "4356be3924ce4cf680a91fe4713c383a:c92bd2bf2246407b80369c4107a0ccf1:e95d9fece4cf405da1929cb87a8139b2",
  "placement": 3,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 21,
  "time_alive": 1106,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 27,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 19,
  "time_alive": 1172,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 25,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 16,
  "time_alive": 1299,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 20,
  "time_alive": 1144,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 14,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 17,
  "time_alive": 1250,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 14,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 15,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 16,
  "time_alive": 1332,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "593d132d1e184c4ba8360b4efab330da:643f9f2ee8ae4d0bb46f86be228832ed:b8aed22b01ed406fbfff6656ac7e8d75",
  "placement": 9,
  "time_alive": 1386,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 17,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 14,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 11,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 5,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 25,
  "time_alive": 918,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 27,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 18,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 22,
  "time_alive": 1136,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 27,
  "time_alive": 488,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 22,
  "time_alive": 1154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 6,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "067b730d0619499ba4b05d36a746f193:5d98762c7d7e4eddbefbc6bdef991a32:908c2c3f030d4a089b8163bfa3cf9868",
  "placement": 19,
  "time_alive": 1245,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 31,
  "time_alive": 268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 32,
  "time_alive": 281,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 20,
  "time_alive": 1149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 29,
  "time_alive": 459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 32,
  "time_alive": 91,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 5,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 11,
  "time_alive": 1372,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 14,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 20,
  "time_alive": 1228,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 23,
  "time_alive": 1138,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 18,
  "time_alive": 1323,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "0f416d82a7534730b9a3e21d5d3ae78f:2e57d91568f34291a1690f3d90e3f3b6:b2996c557e794c21853bce538b96de0f",
  "placement": 27,
  "time_alive": 367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 24,
  "time_alive": 950,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 18,
  "time_alive": 1097,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 10,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 17,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 11,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 15,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 32,
  "time_alive": 263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 18,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 28,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 4,
  "time_alive": 1482,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 29,
  "time_alive": 398,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "bccf458e0a2a490995ca8d68d0519696:df2542f3d23144a0a2966f1ff264afe3:ebd08e0fe46f415682f2cd175ca54977",
  "placement": 23,
  "time_alive": 994,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 29,
  "time_alive": 343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 30,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 27,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 3,
  "time_alive": 1478,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 15,
  "time_alive": 1312,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 18,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 27,
  "time_alive": 693,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 21,
  "time_alive": 1168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 25,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 27,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 31,
  "time_alive": 326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "10ddb540be0044a6a2feeef1b13c1102:2115718290b5492bafac3d15d92b2029:8ef098a144904ff2985d985485ba1cda",
  "placement": 30,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 25,
  "time_alive": 943,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 31,
  "time_alive": 828,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 29,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 23,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 30,
  "time_alive": 274,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 12,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 26,
  "time_alive": 778,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 25,
  "time_alive": 1090,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 7,
  "time_alive": 1457,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 28,
  "time_alive": 770,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 15,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "161c4fe30ba745919cba8b35dddac482:4e807e3cbc034b9f81867cf316a7f5fc:cd5a633365c84d1da3c30cf97b5c21ff",
  "placement": 12,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 15,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 20,
  "time_alive": 1013,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 23,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 18,
  "time_alive": 1227,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 19,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 24,
  "time_alive": 933,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 24,
  "time_alive": 957,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 19,
  "time_alive": 1206,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 22,
  "time_alive": 1184,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 32,
  "time_alive": 317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 7,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "6fa024b0e13d44be9b6d299d1e38ac0c:b584d2d7c77b4011b056dafeea27acdb:f05e7e8131ef4dfcb839c22257372713",
  "placement": 28,
  "time_alive": 294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 7,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 22,
  "time_alive": 988,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 22,
  "time_alive": 1041,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 16,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 27,
  "time_alive": 863,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 25,
  "time_alive": 924,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 25,
  "time_alive": 816,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 26,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 21,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 14,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "3faf340971ab45358992b1bab482568f:c62ff5f58a094519a52f2a80988613cb:c76cea50dc2d4329b1de2e12d5850eb8",
  "placement": 18,
  "time_alive": 1248,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 20,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 19,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 18,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 15,
  "time_alive": 1368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 28,
  "time_alive": 802,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 19,
  "time_alive": 1285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 15,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 24,
  "time_alive": 1099,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 4,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 18,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 26,
  "time_alive": 933,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "12ef6bc5508b486b9c73926de7a08d92:997e0c68556a414d894110f8900a8423:fa9f765b684846acb441e75284017468",
  "placement": 25,
  "time_alive": 619,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "8d597bc4185e421d8012337c651309c0:a211adde9e914a0e9a4da08c5824b4ee:d7c4e3bba68c478e9d488b725cb3b51c",
  "placement": 23,
  "time_alive": 1008,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "8d597bc4185e421d8012337c651309c0:a211adde9e914a0e9a4da08c5824b4ee:d7c4e3bba68c478e9d488b725cb3b51c",
  "placement": 4,
  "time_alive": 1475,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "8d597bc4185e421d8012337c651309c0:a211adde9e914a0e9a4da08c5824b4ee:d7c4e3bba68c478e9d488b725cb3b51c",
  "placement": 31,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "8d597bc4185e421d8012337c651309c0:a211adde9e914a0e9a4da08c5824b4ee:d7c4e3bba68c478e9d488b725cb3b51c",
  "placement": 29,
  "time_alive": 767,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "8d597bc4185e421d8012337c651309c0:a211adde9e914a0e9a4da08c5824b4ee:d7c4e3bba68c478e9d488b725cb3b51c",
  "placement": 21,
  "time_alive": 1179,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "8d597bc4185e421d8012337c651309c0:a211adde9e914a0e9a4da08c5824b4ee:d7c4e3bba68c478e9d488b725cb3b51c",
  "placement": 29,
  "time_alive": 229,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 8,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 26,
  "time_alive": 886,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 13,
  "time_alive": 1322,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 28,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 20,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 23,
  "time_alive": 983,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 20,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 29,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 30,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 24,
  "time_alive": 969,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 32,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "36fd9996d07348cd8a27f899a025faae:4f759c1cf6df49c4976aff15f5f882d3:bfb053a8047c4a159b3b69078205ac78",
  "placement": 31,
  "time_alive": 175,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 26,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 12,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 30,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 32,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 31,
  "time_alive": 207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 32,
  "time_alive": 194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 21,
  "time_alive": 1167,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 15,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 29,
  "time_alive": 192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 25,
  "time_alive": 949,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 25,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "0d19c6560727474aa88559af4786d088:8aec5960217841cd8c73b1aa88a4e5a8:b2a724257bcb4beb9b56d84bf7b99ccb",
  "placement": 20,
  "time_alive": 1174,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d0f49e43-53c1-49ae-a492-a70b9019f8e7",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 27,
  "time_alive": 887,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54637761-5927-494c-ad10-0cb04f8e3890",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 29,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b532494e-b35e-47cd-8c24-184df066e693",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 31,
  "time_alive": 429,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2452b103-b780-4550-8a45-4775d975d2bf",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 30,
  "time_alive": 429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b157c19-686b-4d82-8f3d-9807a40eaf93",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 23,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "62cf85ea-67b8-4493-983a-38f6581322d7",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 31,
  "time_alive": 464,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3fc11d50-c952-414d-9514-6f4165a19f67",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 30,
  "time_alive": 503,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ead70082-3ddb-4fbe-be3b-f052f273b8d6",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 23,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "df3153c0-d2e9-4b97-af10-a5b11c288370",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 12,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f01bae69-20b7-4316-a6e6-89ff1de3c3c5",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 20,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7fe93217-4934-4985-a3ab-f7fcbf94cbbb",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 28,
  "time_alive": 678,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42c413d0-789b-45a2-b7d1-9579eaedcce2",
  "team_id": "126bb281b2ec482b93688d0688110538:3f54f62ef36241f6a9b5a17103ab0888:9a6555aa72ef465eaf01d15241d50849",
  "placement": 26,
  "time_alive": 458,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1509,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1524,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 8,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 15,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1490,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1508,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1492,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 24,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1499,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 18,
  "time_alive": 1319,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 22,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 5,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 2,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 3,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 9,
  "time_alive": 1412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 3,
  "time_alive": 1529,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 3,
  "time_alive": 1444,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 19,
  "time_alive": 1298,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 6,
  "time_alive": 1474,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 6,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 12,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 22,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 13,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 9,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 13,
  "time_alive": 1396,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 1,
  "time_alive": 1523,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 6,
  "time_alive": 1491,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 18,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 5,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 23,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 7,
  "time_alive": 1414,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 3,
  "time_alive": 1478,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 14,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 2,
  "time_alive": 1518,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 14,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 6,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 1,
  "time_alive": 1529,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 13,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1482,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 12,
  "time_alive": 1374,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 14,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 10,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 23,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 27,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 1,
  "time_alive": 1520,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 7,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 2,
  "time_alive": 1523,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 8,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 24,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 8,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 22,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 9,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 19,
  "time_alive": 1285,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 3,
  "time_alive": 1486,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 17,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 2,
  "time_alive": 1524,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 7,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 5,
  "time_alive": 1512,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 17,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 15,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 8,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 5,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 18,
  "time_alive": 1247,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 4,
  "time_alive": 1492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 18,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 11,
  "time_alive": 1384,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 15,
  "time_alive": 1363,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 10,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 30,
  "time_alive": 660,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 6,
  "time_alive": 1432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 4,
  "time_alive": 1495,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 2,
  "time_alive": 1492,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 16,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 16,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 3,
  "time_alive": 1498,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 5,
  "time_alive": 1478,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 18,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 7,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 6,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 5,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 4,
  "time_alive": 1516,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 26,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 25,
  "time_alive": 880,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 10,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 22,
  "time_alive": 1140,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 2,
  "time_alive": 1505,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 4,
  "time_alive": 1479,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 12,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 4,
  "time_alive": 1487,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 16,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 3,
  "time_alive": 1480,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 9,
  "time_alive": 1436,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 2,
  "time_alive": 1490,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 30,
  "time_alive": 496,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 25,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 30,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 7,
  "time_alive": 1433,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "17d61e75dd7d44ff84fd2009ffdaf977:246f03fa13ac4dd6a4eb3f1e2630aeff:b4d717a51f2b4481ae755120a9dd4484",
  "placement": 17,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 11,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 8,
  "time_alive": 1444,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 10,
  "time_alive": 1414,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 11,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 13,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 15,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 14,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 21,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 1,
  "time_alive": 1479,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 29,
  "time_alive": 348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 11,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "314f0887173d4030a659573a6a020bc1:cf49f62ef0e84a4298a393bb8d9b8728:e4d5245d8b3045fe9b2be7e68824ba0d",
  "placement": 7,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 7,
  "time_alive": 1452,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 3,
  "time_alive": 1503,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 11,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 12,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 25,
  "time_alive": 987,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 25,
  "time_alive": 1064,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 10,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 16,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 26,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 6,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 27,
  "time_alive": 665,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "569634de011b426295acbd21f3c7632d:b6bf84f673cc4d1c9590997106a2bb5d:e5d822ce4e844915991357d34cb0d901",
  "placement": 1,
  "time_alive": 1518,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 4,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 14,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 30,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 13,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 2,
  "time_alive": 1529,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 10,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 20,
  "time_alive": 1290,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 7,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 8,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 20,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 12,
  "time_alive": 1399,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "48590a259be64bb598091e8ff4dd5e47:90a9e0d34e334e3bb2259063b2f8e3ad:f1f9c4d000eb4fa78d6dc7152849c735",
  "placement": 16,
  "time_alive": 1358,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 2,
  "time_alive": 1509,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 19,
  "time_alive": 1273,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 25,
  "time_alive": 1021,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 18,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 7,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 23,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 22,
  "time_alive": 1268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 11,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 2,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 10,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 8,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "0f50a1603c0342e28773d901ccb57b89:5f030a94b0e04803a2cc957f469d7c23:9e53e06f12ad4e6aba6846e39b34f654",
  "placement": 14,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 21,
  "time_alive": 1191,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 12,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 31,
  "time_alive": 578,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 20,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 11,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 12,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 24,
  "time_alive": 1120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 5,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 4,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 9,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 6,
  "time_alive": 1459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "cc383e693def4c0e831b285f97dbf299:d30230ffecf94ad5b4614884fcf255cd:d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 9,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 8,
  "time_alive": 1448,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 20,
  "time_alive": 1147,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 23,
  "time_alive": 1087,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 32,
  "time_alive": 215,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 28,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 31,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 3,
  "time_alive": 1506,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 15,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 10,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 2,
  "time_alive": 1499,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 15,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "91029cdef1434d17a0e73f5d1313c3cf:ce6a547eadf54e7bb3cc2a878192ec21:f6b9302087224fb1861e336019e9223b",
  "placement": 3,
  "time_alive": 1500,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 6,
  "time_alive": 1454,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 10,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 22,
  "time_alive": 1096,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 17,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 16,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 7,
  "time_alive": 1419,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 17,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 9,
  "time_alive": 1429,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 13,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 11,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 19,
  "time_alive": 1244,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "33fa1077be4f4abe9a1ab37021a0c392:368d2f7a442c407fa26448c9aa10fc5a:b72e0314f03e4b999452ca5242899408",
  "placement": 20,
  "time_alive": 1171,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 16,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 16,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 5,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 14,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 20,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 4,
  "time_alive": 1440,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 11,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 13,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 14,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 4,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 23,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "0d982f45d2424896a1abf9d88fab7962:1830cf93914c40949d5c788d9cf0d6bb:a33b59ffa21b48adade8b773183e75ff",
  "placement": 28,
  "time_alive": 476,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 10,
  "time_alive": 1436,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 13,
  "time_alive": 1358,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 27,
  "time_alive": 1001,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 22,
  "time_alive": 1140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 12,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 19,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 9,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 24,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 28,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 22,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 1,
  "time_alive": 1505,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "3791757d17304ea5a163631b345ddf4c:547e91945c404dbba299395c7ab5a9d5:6eb9034d65274e0185fa85a4ac22fa3f",
  "placement": 31,
  "time_alive": 271,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 9,
  "time_alive": 1447,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 26,
  "time_alive": 942,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 18,
  "time_alive": 1241,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 4,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 21,
  "time_alive": 1142,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 9,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 7,
  "time_alive": 1435,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 18,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 18,
  "time_alive": 1312,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 27,
  "time_alive": 745,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 32,
  "time_alive": 97,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "3d7ea6ada48f4872acde34e2149f9d7d:3f42591a3c734c1fbd6e61f92e7dd3eb:cbc97c01924d47f0919edd1ff2321b54",
  "placement": 11,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 30,
  "time_alive": 537,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 31,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 20,
  "time_alive": 1157,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 27,
  "time_alive": 833,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 14,
  "time_alive": 1379,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 14,
  "time_alive": 1360,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 6,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 20,
  "time_alive": 1145,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 27,
  "time_alive": 937,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 28,
  "time_alive": 480,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 16,
  "time_alive": 1352,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "4acefca3bb174edabf72988632827191:8aa03e3c5d9b4e9a961cd3bfd0b19336:aad3c7bca17945acb44e59f32adb237b",
  "placement": 12,
  "time_alive": 1385,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 19,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 27,
  "time_alive": 929,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 17,
  "time_alive": 1296,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 15,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 18,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 20,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 12,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 3,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 19,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 7,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 20,
  "time_alive": 1234,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "02d3f2d1178a4a80926bd4b2a930e0db:44e24373be324775b57aafe239dd0802:82fba9345b2c400b9c30d2c443038dd7",
  "placement": 13,
  "time_alive": 1379,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 29,
  "time_alive": 634,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 5,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 4,
  "time_alive": 1456,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 33,
  "time_alive": 104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 29,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 13,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 31,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 26,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 25,
  "time_alive": 1117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 23,
  "time_alive": 1159,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 31,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "3cef088e6362448cb920819e2d15cd85:3f429aacd44f4a1c83dca963097bd010:4651cbe1e28243109bf089c06a930847",
  "placement": 15,
  "time_alive": 1360,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 31,
  "time_alive": 168,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 21,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 32,
  "time_alive": 304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 25,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 10,
  "time_alive": 1432,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 30,
  "time_alive": 425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 2,
  "time_alive": 1508,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 19,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 17,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 15,
  "time_alive": 1376,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 17,
  "time_alive": 1336,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "0db2c1c50154427ba1ce396b91d266a8:4cfa2f01f5da4ccabca02a14fd4f4afa:768ac9ccc68c42a3af2521c86e7a061e",
  "placement": 24,
  "time_alive": 1108,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 24,
  "time_alive": 980,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 18,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 12,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 19,
  "time_alive": 1240,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 31,
  "time_alive": 189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 33,
  "time_alive": 345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 16,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 28,
  "time_alive": 485,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 31,
  "time_alive": 433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 8,
  "time_alive": 1445,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 26,
  "time_alive": 842,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "251d113d05e140278ebc145996caad9e:2e95a90b41fa4783be1df35844ffcba4:c8f1286cb7bc4b0a8f08bb5b4faf589d",
  "placement": 8,
  "time_alive": 1424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 22,
  "time_alive": 1163,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 22,
  "time_alive": 1105,
  "elims": 1,
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
    