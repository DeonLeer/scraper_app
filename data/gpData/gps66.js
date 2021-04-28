const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 18,
  "time_alive": 1370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 15,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1506,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1521,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 7,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 3,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1439,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 1,
  "time_alive": 1527,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 13,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 5,
  "time_alive": 1499,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 13,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 7,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1512,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 9,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 14,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 12,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 16,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 7,
  "time_alive": 1451,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 14,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 8,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 17,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 15,
  "time_alive": 1342,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 15,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 8,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 3,
  "time_alive": 1469,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 20,
  "time_alive": 1223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 6,
  "time_alive": 1444,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 5,
  "time_alive": 1489,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 1,
  "time_alive": 1500,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 18,
  "time_alive": 1236,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 3,
  "time_alive": 1519,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 2,
  "time_alive": 1527,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 20,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 21,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 6,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 7,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 13,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 6,
  "time_alive": 1475,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 5,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 4,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 11,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 17,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 7,
  "time_alive": 1480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 16,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1533,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 4,
  "time_alive": 1489,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1518,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 2,
  "time_alive": 1530,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 26,
  "time_alive": 652,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 16,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 14,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 12,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 13,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 9,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 27,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 1,
  "time_alive": 1527,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 1,
  "time_alive": 1549,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 12,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 23,
  "time_alive": 1138,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 19,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 25,
  "time_alive": 910,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 9,
  "time_alive": 1441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 3,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 17,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 5,
  "time_alive": 1471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 5,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 22,
  "time_alive": 1182,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 8,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 5,
  "time_alive": 1485,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 20,
  "time_alive": 1222,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 13,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 7,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 2,
  "time_alive": 1506,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 15,
  "time_alive": 1366,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 24,
  "time_alive": 855,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 15,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 2,
  "time_alive": 1439,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 4,
  "time_alive": 1494,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 12,
  "time_alive": 1386,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 2,
  "time_alive": 1549,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 28,
  "time_alive": 544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 8,
  "time_alive": 1462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 5,
  "time_alive": 1504,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 14,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 7,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 6,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 10,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 13,
  "time_alive": 1333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 8,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 3,
  "time_alive": 1488,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 10,
  "time_alive": 1446,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1525,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1501,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 17,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 17,
  "time_alive": 1359,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 13,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 15,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 18,
  "time_alive": 1123,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 15,
  "time_alive": 1317,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 5,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 4,
  "time_alive": 1475,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 11,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 8,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 17,
  "time_alive": 1356,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 12,
  "time_alive": 1460,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 8,
  "time_alive": 1424,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 5,
  "time_alive": 1483,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 10,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 23,
  "time_alive": 982,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 21,
  "time_alive": 798,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 22,
  "time_alive": 849,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 29,
  "time_alive": 618,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 15,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 9,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 7,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 2,
  "time_alive": 1538,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 11,
  "time_alive": 1460,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 12,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 10,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 9,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 8,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 4,
  "time_alive": 1480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 25,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 6,
  "time_alive": 1488,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 18,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 7,
  "time_alive": 1488,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 3,
  "time_alive": 1517,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 5,
  "time_alive": 1500,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 14,
  "time_alive": 1448,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 2,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 4,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 26,
  "time_alive": 1076,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 5,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 12,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 11,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 18,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 10,
  "time_alive": 1461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 11,
  "time_alive": 1413,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 18,
  "time_alive": 1314,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 22,
  "time_alive": 1082,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 2,
  "time_alive": 1514,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 9,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 8,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 25,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 14,
  "time_alive": 1369,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 6,
  "time_alive": 1496,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 22,
  "time_alive": 1021,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 9,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 4,
  "time_alive": 1507,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 12,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 8,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 14,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 25,
  "time_alive": 459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 4,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 17,
  "time_alive": 1287,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 29,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 15,
  "time_alive": 1384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 10,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 10,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 16,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 6,
  "time_alive": 1443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 25,
  "time_alive": 515,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 26,
  "time_alive": 416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 1,
  "time_alive": 1514,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 6,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 12,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 20,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 9,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 19,
  "time_alive": 1220,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 6,
  "time_alive": 1483,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 12,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 9,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 4,
  "time_alive": 1453,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 15,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 20,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 18,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 12,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 11,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 18,
  "time_alive": 1235,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 10,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 13,
  "time_alive": 1399,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 27,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 13,
  "time_alive": 1390,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 22,
  "time_alive": 846,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 23,
  "time_alive": 1008,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 11,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 11,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 13,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 17,
  "time_alive": 1303,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 13,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 19,
  "time_alive": 1303,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 25,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 17,
  "time_alive": 1314,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 14,
  "time_alive": 1389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 20,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 19,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 23,
  "time_alive": 926,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 4,
  "time_alive": 1477,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 9,
  "time_alive": 1460,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 23,
  "time_alive": 630,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 6,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 32,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 22,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 23,
  "time_alive": 999,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 29,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 26,
  "time_alive": 257,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 10,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 28,
  "time_alive": 413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 27,
  "time_alive": 393,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 26,
  "time_alive": 552,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 29,
  "time_alive": 167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 14,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 10,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 31,
  "time_alive": 359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 23,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 26,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 16,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 30,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 16,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 21,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 23,
  "time_alive": 869,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 11,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 22,
  "time_alive": 677,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 20,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 19,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 23,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 21,
  "time_alive": 1208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 9,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 28,
  "time_alive": 329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 17,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 18,
  "time_alive": 1332,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 24,
  "time_alive": 567,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 19,
  "time_alive": 1231,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 21,
  "time_alive": 1102,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 14,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "4acc301c2c0e437e89f5c76b4868bb93:b2eb4ad6915e4836bba3ee2adfcc2be8:bae5420d78a54a3caa5030edab1ef7ba",
  "placement": 19,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 33,
  "time_alive": 301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 11,
  "time_alive": 1402,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 29,
  "time_alive": 231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 24,
  "time_alive": 992,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 22,
  "time_alive": 1159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 28,
  "time_alive": 217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 13,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 30,
  "time_alive": 195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 29,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 28,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 24,
  "time_alive": 337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 16,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 21,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 18,
  "time_alive": 1248,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 30,
  "time_alive": 359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 25,
  "time_alive": 775,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 29,
  "time_alive": 189,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 20,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 30,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 25,
  "time_alive": 431,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 28,
  "time_alive": 252,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 19,
  "time_alive": 1005,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "ddd5e51c672b41259879970ccad8aaa5:f86ad0922926454885345da63a833910:ffa685943f8b4292b57b550c8382acb7",
  "placement": 7,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 24,
  "time_alive": 1114,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 20,
  "time_alive": 1177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 26,
  "time_alive": 541,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 16,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 27,
  "time_alive": 412,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 25,
  "time_alive": 262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 22,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 26,
  "time_alive": 448,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 28,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 25,
  "time_alive": 784,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 16,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "1f3804764c98409e8349d09794fab1fc:cd106431c22340f881e11c840cfde64a:ebac25d970374942b3dba139c7cd39f1",
  "placement": 16,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 30,
  "time_alive": 565,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 22,
  "time_alive": 1155,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 30,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 19,
  "time_alive": 1233,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 21,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 23,
  "time_alive": 667,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 28,
  "time_alive": 288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 29,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 21,
  "time_alive": 1129,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 19,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 20,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "ade9b5cb24784a3998d979435c98b68f:cf66cecece8242c7865de1461779dd34:e1aa57283d094b20bf4ddabb09dbcc89",
  "placement": 27,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 23,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 25,
  "time_alive": 820,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 24,
  "time_alive": 1067,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 14,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 24,
  "time_alive": 1047,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 15,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 29,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 19,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 18,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 27,
  "time_alive": 433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 24,
  "time_alive": 555,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 23,
  "time_alive": 369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 28,
  "time_alive": 665,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 30,
  "time_alive": 443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 14,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 25,
  "time_alive": 968,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 24,
  "time_alive": 1001,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 22,
  "time_alive": 1108,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 17,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 20,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "4016f9502ac74b8987ae48ceea1a91b2:791b6a3c9edd43cf8efff883e29ccca9:ae423c9225bb49809c19c8c38e4ed45f",
  "placement": 26,
  "time_alive": 450,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 21,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 17,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 447,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 29,
  "time_alive": 368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 19,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 24,
  "time_alive": 390,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 422,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 431,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 24,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "64543231-8a2c-4d57-bb94-5e0a43aa29a2",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 22,
  "time_alive": 1000,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7547ec48-d59f-4bfc-a143-dee7b71cd20c",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1248b1c7-31bc-413d-8b13-46e9df0767b8",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 21,
  "time_alive": 945,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 15,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 27,
  "time_alive": 660,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 28,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 20,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3018eaae-696c-4d42-8ddf-8ac15e4d1c7f",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 26,
  "time_alive": 750,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "54cdf725-b1ce-45ae-b709-7efd32eafcd2",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 27,
  "time_alive": 227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "142ba076-893e-479f-ac89-07e441a2f96d",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 21,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "79e97837-789f-4959-8e72-0608d67e1e33",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 31,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "121d118d-774f-4c5b-8e08-d3ad07ef71cb",
  "team_id": "18c0195e672d4274b4ee08716294b018:55bb8b36a41c400ea76826ad34926391:a09e637463a540979d9fb9679ded772a",
  "placement": 29,
  "time_alive": 241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 31,
  "time_alive": 531,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 26,
  "time_alive": 661,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51312672-6f92-43c1-88ee-b1a257bd2dec",
  "team_id": "2fa164f8561e43b7acc2293bb3eed71c:7893124e40e243cda052f3af1fe78c6d:d84e02ede74642fb91c65a627162327c",
  "placement": 31,
  "time_alive": 123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63e27488-03be-42fd-bfdc-9f1fd81777e7",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 32,
  "time_alive": 504,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "366210a4-7a12-405d-9794-2a237be3d8e7",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 28,
  "time_alive": 621,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5ea097cf-db66-462b-8abe-831b03c50d64",
  "team_id": "692106cb53304a7291697315edd3e615:b70ae7f360934d52a77e3cd859d78db0:fd3ec90c54264ea6b782a1c41a4cf616",
  "placement": 31,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1502,
  "elims": 19,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 7,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 7,
  "time_alive": 1416,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 5,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 4,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 2,
  "time_alive": 1474,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 6,
  "time_alive": 1492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 5,
  "time_alive": 1490,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 10,
  "time_alive": 1409,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1453,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 7,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "628b982a76ac4290968c95a3108be229:80c96217133c455e9939a0564b986472:f1081995d117471d860e5eb41275975c",
  "placement": 1,
  "time_alive": 1464,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 23,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 1,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 1,
  "time_alive": 1524,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 9,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 3,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 16,
  "time_alive": 1330,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 17,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 4,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 1,
  "time_alive": 1509,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 14,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 1,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "0ad70f78e34f4930b7785228e4731f46:8e0540ab69d04a7f9f01dff74dac99de:f70e096e0270452fa78e0f3a56445d72",
  "placement": 2,
  "time_alive": 1464,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 4,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1500,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 20,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 3,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 1,
  "time_alive": 1447,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 14,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 8,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 2,
  "time_alive": 1526,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 6,
  "time_alive": 1438,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 11,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 10,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "4db06500600e4371bf9f1c56d5e1b6f7:5a2f9524d3ed465fb351a8e3cf13b846:63617d654b8149189dd11747b850d636",
  "placement": 11,
  "time_alive": 1333,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 7,
  "time_alive": 1431,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 18,
  "time_alive": 1243,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 18,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 1,
  "time_alive": 1534,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 6,
  "time_alive": 1409,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 17,
  "time_alive": 1323,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 11,
  "time_alive": 1381,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 7,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 26,
  "time_alive": 668,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 12,
  "time_alive": 1369,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 3,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "16bac63763e14b08abd523b7c8892210:83e9f231efee418fb011134bb93c0a9a:e7a1ec8965a749689b51dbca97c07042",
  "placement": 15,
  "time_alive": 1102,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 3,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 10,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 18,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 1,
  "time_alive": 1474,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 10,
  "time_alive": 1431,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 12,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 7,
  "time_alive": 1379,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 15,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "71be8f2ced48498394db684cc6781d54:af77ed8e101d4f10a0b39ca817ed42c5:b548e5d040ca49fe98f6be25ce2a7305",
  "placement": 3,
  "time_alive": 1461,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 13,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 5,
  "time_alive": 1454,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 8,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 7,
  "time_alive": 1412,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 23,
  "time_alive": 1172,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 3,
  "time_alive": 1461,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 13,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 13,
  "time_alive": 1384,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 18,
  "time_alive": 1308,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 6,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "25961545eb234080830cbb4ad3b98566:50a50695a6814609ae871bd4e4330af6:9c2d505c364d41f8a1ecccdfde604ef7",
  "placement": 22,
  "time_alive": 642,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 2,
  "time_alive": 1502,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 8,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 5,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 4,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 22,
  "time_alive": 1255,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 32,
  "time_alive": 230,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 3,
  "time_alive": 1526,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 27,
  "time_alive": 615,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 8,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 4,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "60cef5341d0e428580447075bad46041:8303a9674286487286ac02e5711e6ae9:e8ab2f32267a4c89b505cbee7c9626a0",
  "placement": 20,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 27,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 3,
  "time_alive": 1458,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 15,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 6,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 5,
  "time_alive": 1424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 7,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 12,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 18,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 3,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 10,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 2,
  "time_alive": 1472,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "be783dac60a34adf83f31997f586c4c1:df16ae5918374b4e9538447ef7401167:fe6342e89aa94ec7903a3bd1088e5aac",
  "placement": 18,
  "time_alive": 923,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 28,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 11,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 4,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 10,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 15,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 25,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 14,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 3,
  "time_alive": 1512,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 4,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 6,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 22,
  "time_alive": 1165,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "390a2005ae7c4ad4b9d1184144c1f0c8:7a70c5dd0c6d45cf8f7ad429ddd29ef2:94582db3215e46f0956a36ba245ab4e1",
  "placement": 7,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 29,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 4,
  "time_alive": 1458,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 6,
  "time_alive": 1417,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 14,
  "time_alive": 1386,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 12,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 11,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 13,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 26,
  "time_alive": 578,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 15,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 3,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 8,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "39d24443105d4b4289d51be1a0d3bb7c:c5f357ab648a427eab44986b1f25f5c6:cc26b1386db0475bb61b2b223638b44e",
  "placement": 13,
  "time_alive": 1313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 32,
  "time_alive": 427,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 26,
  "time_alive": 970,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 21,
  "time_alive": 1191,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 2,
  "time_alive": 1534,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 13,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 21,
  "time_alive": 1179,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 10,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 25,
  "time_alive": 1127,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 4,
  "time_alive": 1433,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 11,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "2bef9dce40204e238254099a69393afe:4e8377c0496a438d970d36c888e5e2ad:998136143df74a9883d006e032f548b3",
  "placement": 6,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 5,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 12,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 17,
  "time_alive": 1330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 16,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 29,
  "time_alive": 583,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 12,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 4,
  "time_alive": 1500,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 21,
  "time_alive": 1068,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 24,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 13,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 5,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "1d36774ca7034b7f891e1156097e8380:45d0d35e7497473c9d28693d3a7014b7:df54c0fea6a44e38b53feb32cb339532",
  "placement": 4,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 11,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 6,
  "time_alive": 1447,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 25,
  "time_alive": 943,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 13,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 9,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 26,
  "time_alive": 774,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 1,
  "time_alive": 1533,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 17,
  "time_alive": 1207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 11,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 21,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 14,
  "time_alive": 1367,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "4e47d907a47841a0a9b356f4f6445d91:aea98bc2e01b4c87bf9fb4bd75943c30:ba1b57c961e94311a7c16a0139bc3f9f",
  "placement": 5,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 20,
  "time_alive": 1170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 31,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 9,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 32,
  "time_alive": 307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 2,
  "time_alive": 1447,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 20,
  "time_alive": 1199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 24,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 27,
  "time_alive": 474,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 2,
  "time_alive": 1509,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 5,
  "time_alive": 1397,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 13,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "0c85d30e0be04f04bcf7ae697bec3608:bd330896c87c478dad177c2ce55a342f:c8d39f69857a49988b379240c7c07f03",
  "placement": 8,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 15,
  "time_alive": 1348,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 21,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 2,
  "time_alive": 1524,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 31,
  "time_alive": 535,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 7,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 23,
  "time_alive": 1127,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 16,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 20,
  "time_alive": 1126,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 17,
  "time_alive": 1326,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 23,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 9,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "85a3a7884e364e64a8430a141078059d:ba34ad89c2d8488ba2f61ef1b57e2e23:d0ebdb12fa9441d7ab257d8079d44c7a",
  "placement": 12,
  "time_alive": 1324,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 8,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 25,
  "time_alive": 979,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 16,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 19,
  "time_alive": 1138,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 13,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 8,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 1,
  "time_alive": 1526,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 18,
  "time_alive": 1326,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 16,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 17,
  "time_alive": 1342,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "143ab2fd5f8d4c05bc8f9864c20851bf:596ff531905244a4b699883dae5691da:ab893cfcedf940fbab9407adf963e79c",
  "placement": 19,
  "time_alive": 901,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 9,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 32,
  "time_alive": 505,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 27,
  "time_alive": 673,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 28,
  "time_alive": 823,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 32,
  "time_alive": 316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 15,
  "time_alive": 1340,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 9,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 25,
  "time_alive": 669,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 19,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 2,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 24,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "2f1415579eb6420aae8c661024295d14:443632a20f364c6ca9efdf1cc7b0446b:cd9c28b6c69a4202884ff56ffa18c6c8",
  "placement": 9,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 24,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 13,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 11,
  "time_alive": 1397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 20,
  "time_alive": 1131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 9,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 5,
  "time_alive": 1497,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 12,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 8,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 30,
  "time_alive": 178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 29,
  "time_alive": 225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "2032ee6c084b4f4fb4a3a06cad7813f3:6b1e70d29c5a4dee839eac7fe89dbe39:fe968b27786b49229198dc90052c6f7d",
  "placement": 14,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 33,
  "time_alive": 290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 24,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 30,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 12,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 10,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 5,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 19,
  "time_alive": 1250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 6,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 16,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 15,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 23,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "3b99d36a30e9494a8c785ccf1fa86f04:8cbeb5667c8441759dc72ff80223a165:ae9bd7153291439fb770ce7e58b561ee",
  "placement": 23,
  "time_alive": 623,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 10,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 9,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 31,
  "time_alive": 257,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 24,
  "time_alive": 986,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 25,
  "time_alive": 1106,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 4,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 18,
  "time_alive": 1341,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 24,
  "time_alive": 726,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 29,
  "time_alive": 163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 27,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 19,
  "time_alive": 1307,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "2e9e2c3c6b1d455f962c94dbe537a8c7:45bc9aaac5884a46a24a7515e9a080e6:4666703d708f4246a3cd84d19e532462",
  "placement": 17,
  "time_alive": 959,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 26,
  "time_alive": 1059,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 27,
  "time_alive": 860,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 29,
  "time_alive": 514,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 26,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 31,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 6,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 20,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 9,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 7,
  "time_alive": 1433,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 26,
  "time_alive": 841,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 16,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "ac7a4e8fbdce4018aa16ed4c9f2d99d2:dc5e5c3834e146d2b48097468fbc4373:f9f06786b69244298a8777d4f4dbe639",
  "placement": 10,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 31,
  "time_alive": 457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 17,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 3,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 26,
  "time_alive": 968,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 18,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 7,
  "time_alive": 1485,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 31,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 9,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 24,
  "time_alive": 1134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 28,
  "time_alive": 512,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "2894e6372cb74c01b59158a4d360dbc5:444591dde00b4f43af77a49213f6a33d:706185466d854789ad3c0578ce0a34c9",
  "placement": 26,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 6,
  "time_alive": 1437,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 29,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 19,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 8,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 17,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 22,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 23,
  "time_alive": 1151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 16,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 5,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 19,
  "time_alive": 1297,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 12,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "a3add78f4b6041e188d935123ec31c11:ba5320c99ef647e9889010cb2b080002:ea224a5a874a492cb677e725fa1c0f8c",
  "placement": 21,
  "time_alive": 793,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 18,
  "time_alive": 1200,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 16,
  "time_alive": 1362,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 24,
  "time_alive": 1009,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 23,
  "time_alive": 992,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 28,
  "time_alive": 806,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 10,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 22,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 8,
  "time_alive": 1448,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 20,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 9,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 20,
  "time_alive": 1196,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "545d5988108e4347b7c8cffd5edb22e2:b99109f41f8d4aba836e3e30e1662ecb:ed59c308baca4fe4ae7199396fc47585",
  "placement": 24,
  "time_alive": 559,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 22,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 30,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 13,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 27,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 21,
  "time_alive": 1284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 19,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 2,
  "time_alive": 1533,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 11,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 23,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 20,
  "time_alive": 1200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 25,
  "time_alive": 1069,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "5639f2b243ee488fb8a31377de8f617e:75d932f1b75444c5830d5cacd2f11ecf:83ed9b3f6c5147cb8d4f0375f1e6e67d",
  "placement": 16,
  "time_alive": 997,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 14,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 22,
  "time_alive": 1118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 14,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 22,
  "time_alive": 1000,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 8,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 21,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 25,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 29,
  "time_alive": 363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 22,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 25,
  "time_alive": 970,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "a95a090b1cd94e459f2ade05525c9562:d9a5fc366b634d8885e4a17b911c96ce:e845b978ac384d5a8e869d8538fe8bce",
  "placement": 27,
  "time_alive": 611,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 12,
  "time_alive": 1401,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 23,
  "time_alive": 1097,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 23,
  "time_alive": 1038,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 11,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 27,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 24,
  "time_alive": 952,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 27,
  "time_alive": 905,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 22,
  "time_alive": 1046,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 14,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 17,
  "time_alive": 1309,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 26,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "3579bb6400124a89b390d677f5eeedcc:99d20891e4c24c8fb7b21751dd80fd08:fe914a09d13c48a7bc802446394863a8",
  "placement": 25,
  "time_alive": 223,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 19,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 10,
  "time_alive": 1400,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 12,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 17,
  "time_alive": 1313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 16,
  "time_alive": 1378,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 28,
  "time_alive": 477,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 29,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 28,
  "time_alive": 431,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 21,
  "time_alive": 1190,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "6901d8d6299a40e48088de710a094cab:9b2abff4b6b4445d8bb2e7500fa6501f:c1ead87c52464a98b771e8b4142b15c6",
  "placement": 29,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 16,
  "time_alive": 1338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 20,
  "time_alive": 1208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 26,
  "time_alive": 834,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 30,
  "time_alive": 599,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 20,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 30,
  "time_alive": 261,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 26,
  "time_alive": 1007,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 23,
  "time_alive": 903,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "6c53fb4f48a1434aae3dc5d5ce978087:857cdacd73b94ecab5342b13d1f09492:c9f7d2e889c9416ca2ae2536ab2f4798",
  "placement": 31,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 17,
  "time_alive": 1247,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 14,
  "time_alive": 1370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 22,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 29,
  "time_alive": 704,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 19,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "8b8c09415d91466cb0f0d41a6613e41c:a2f04d811cb3459780d4201f434bd1b0:b9c99565f27c4d48ab284634a0593605",
  "placement": 27,
  "time_alive": 542,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 21,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 28,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 32,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 33,
  "time_alive": 199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 30,
  "time_alive": 560,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 29,
  "time_alive": 292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 15,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 19,
  "time_alive": 1150,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 28,
  "time_alive": 462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 28,
  "time_alive": 724,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "0284df44a18b4179b49ac7f1b035082d:04db39b0d77d460db1e7c0407abcffcd:f36922410ca04049a9b2ec5cfab9bf55",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 25,
  "time_alive": 1085,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 33,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e8d15a1-36c1-4f23-8737-264405339600",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 28,
  "time_alive": 519,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 18,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 24,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 31,
  "time_alive": 243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b28d66ca-5481-4a9b-b122-565e6c96fec5",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 28,
  "time_alive": 896,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "eed4ee85-2433-4059-bf40-dd5d81a42783",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 30,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b3572c7-2689-43e2-b013-669e13fe303e",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 30,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "55c6d8ab-5c76-4489-ad15-da68fb151358",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 22,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "679efbbc-8f7a-49d1-b22c-8d9b7dcf110a",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 18,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5593cb72-98cb-4e34-b78c-09aa6eb3fe22",
  "team_id": "4043636849724feb8462eebb31f55a66:4d3e24413bb1475fad5a1e41b8aa54da:93298f7723af4c4cb463e8414096232e",
  "placement": 27,
  "time_alive": 110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f2d75cd0-45c9-4dc3-a3a1-a9a2abef6b94",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 30,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "23e747ee-54d1-4bf6-94a7-a4cfd442cb7a",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 19,
  "time_alive": 1219,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "abb992f7-6aeb-47f5-8848-8903916812e1",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 21,
  "time_alive": 1120,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e6505a-d2b3-49d8-9adc-0623339b458a",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 33,
  "time_alive": 225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ddda59ba-ba9e-44a7-b30c-bcbfe7659ae9",
  "team_id": "25b9d45081dc4f64a98268ad86630d5c:3806f2739401420288a26ad401c48d4f:78adb2497fc14018b08a085be896fc9c",
  "placement": 33,
  "time_alive": 152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 3,
  "time_alive": 1526,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 2,
  "time_alive": 1533,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 12,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 5,
  "time_alive": 1522,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 13,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1513,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 15,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 3,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1492,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 19,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 1,
  "time_alive": 1473,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "234887ea510f41d48d59e3042f944c6e:848941c78039476e90e26c5269e880d1:f9aafac773c245bfa96fe2f01ca66880",
  "placement": 4,
  "time_alive": 1299,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 1,
  "time_alive": 1530,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 8,
  "time_alive": 1416,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 11,
  "time_alive": 1389,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 1,
  "time_alive": 1545,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 17,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 2,
  "time_alive": 1513,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 2,
  "time_alive": 1511,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 20,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 10,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 22,
  "time_alive": 894,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 3,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "5a2fec0681fc42d9a5ca7964635935ef:6b7d959968ae4cdeaeb725a6be629392:933b34486f244cd9b7c01b36e8290713",
  "placement": 7,
  "time_alive": 1266,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 5,
  "time_alive": 1501,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 17,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1453,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 27,
  "time_alive": 549,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 25,
  "time_alive": 969,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 23,
  "time_alive": 983,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 9,
  "time_alive": 1427,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 2,
  "time_alive": 1409,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 8,
  "time_alive": 1414,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 1,
  "time_alive": 1503,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 10,
  "time_alive": 1412,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "2fa701baa4124a608983c666e683a809:645f6ea499ae4550a46b111ae8d64115:ad53e398b5884b15a797ba0a61658cc4",
  "placement": 11,
  "time_alive": 1055,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 6,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 9,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1452,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 2,
  "time_alive": 1545,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 12,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 7,
  "time_alive": 1436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 9,
  "time_alive": 1397,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 13,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 3,
  "time_alive": 1486,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 11,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "439901ea973c444c8b1563d74c7e7e59:9553dfcebe82446387f60e33699dc76c:fb591bc241b14a829e126d17b4db8130",
  "placement": 17,
  "time_alive": 818,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1530,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 1,
  "time_alive": 1533,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 10,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 3,
  "time_alive": 1534,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 4,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 12,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 12,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 12,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 2,
  "time_alive": 1503,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 14,
  "time_alive": 1348,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "04489b66290d48968dde800325510257:211e80233877413186fa4dc49037a554:9fbf1b5ce28b4cd19b5235e6844de700",
  "placement": 13,
  "time_alive": 999,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 24,
  "time_alive": 1135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 19,
  "time_alive": 1343,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 14,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 8,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 5,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 13,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 19,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 4,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 2,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 4,
  "time_alive": 1483,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 2,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "3a9835f89d9344e0b244daf79b60148d:72629dda44b84118ba4037fc7216fbf2:db11b4c9c95342eda44b50ca51beb086",
  "placement": 8,
  "time_alive": 1083,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 7,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 20,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 5,
  "time_alive": 1425,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 10,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 8,
  "time_alive": 1427,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 1,
  "time_alive": 1511,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 19,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 18,
  "time_alive": 1239,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 8,
  "time_alive": 1396,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 15,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "1ea200762e4640d0863955b94c6a294d:dae9deb7a1cd4a8f8f79dab29bad83ac:df34aa1dc4b248f5bbfe6f462b64a619",
  "placement": 16,
  "time_alive": 821,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 16,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 3,
  "time_alive": 1526,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 8,
  "time_alive": 1408,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 4,
  "time_alive": 1528,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 10,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 5,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 18,
  "time_alive": 1254,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 8,
  "time_alive": 1399,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 9,
  "time_alive": 1413,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 21,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 19,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "75fa3c8f583345ffa6f8dd9b06566fa3:82981beeb7e948168cd6027fe073184c:e7c42ef5ee4b4fc5846654aa221f01dd",
  "placement": 9,
  "time_alive": 1077,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 13,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 5,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 7,
  "time_alive": 1416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 14,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 1,
  "time_alive": 1509,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 14,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 14,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 1,
  "time_alive": 1409,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 20,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 11,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 22,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "3b5f7b1d627d41428435ac23d214b180:8bd4f8216934400da7cb7b3fb975f0ac:ebf3a89e82b74401b60c1406c8df2e10",
  "placement": 15,
  "time_alive": 834,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 8,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 16,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 9,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 9,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 9,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 8,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 7,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 5,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 20,
  "time_alive": 996,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 20,
  "time_alive": 1129,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "12ae0730885348878edd48c82232a5cb:7329b73ad28746c589ad4de9f880d63d:a1461707ba7446298ac73988af8a11ae",
  "placement": 3,
  "time_alive": 1315,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 20,
  "time_alive": 1234,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 24,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 30,
  "time_alive": 573,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 12,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 2,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 7,
  "time_alive": 1437,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 6,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 10,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 11,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 27,
  "time_alive": 145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "094e23eda0f5458f9ea6e30c1ec5aa43:559695864dea41f0831d6340819b8819:b681f129a70e4bc3976c1b576966fca9",
  "placement": 12,
  "time_alive": 1030,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 11,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 31,
  "time_alive": 654,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 17,
  "time_alive": 1318,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 15,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 26,
  "time_alive": 923,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 6,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 5,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 11,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 6,
  "time_alive": 1433,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 23,
  "time_alive": 606,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 8,
  "time_alive": 1420,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "3dc8a04d75a54c769b816989af9c8fed:64e536df40ee4be4bb109bf2d6fbed43:e17cb818ab5648b1b2eda5177ed19f39",
  "placement": 5,
  "time_alive": 1270,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 18,
  "time_alive": 1252,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 32,
  "time_alive": 603,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 2,
  "time_alive": 1453,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 6,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 20,
  "time_alive": 1200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 15,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 27,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 14,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 7,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 7,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 6,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "38befec997ae46959b31094dec8a7028:5b588f6ee44c4dcc8376e1146da26bc0:7aebdffba5044b24bdb485e473ce66bf",
  "placement": 19,
  "time_alive": 532,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 17,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 13,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 20,
  "time_alive": 1217,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 28,
  "time_alive": 526,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 27,
  "time_alive": 570,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 4,
  "time_alive": 1460,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 11,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 17,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 4,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 10,
  "time_alive": 1384,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 16,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "1da01e1880bf4cef83482af90f5ecbd9:5bb3031bf86e4fff8d8b5c0e718bd5aa:6801018f1e7c4d5cbc11e33b50bc0d22",
  "placement": 2,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 23,
  "time_alive": 1193,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 10,
  "time_alive": 1404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 22,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 9,
  "time_alive": 1437,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 21,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 12,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 22,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 21,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 3,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 9,
  "time_alive": 1386,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 13,
  "time_alive": 1365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "0af5a483261c4490ba8f05f36f23676e:9b426065e1d74eb1a954f66f5c1b5650:ed87bebfceb04254bfe5d874198e00d2",
  "placement": 1,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 10,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 14,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 13,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 11,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 11,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 16,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 5,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 14,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 13,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 5,
  "time_alive": 1448,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "3afd19c70cd24f22bcf70211d3f811d7:d5f1ab2faee14b39a803e874cb447f01:ffc2c0ef05a44b38a73a4816cb70f852",
  "placement": 14,
  "time_alive": 946,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 14,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 6,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 29,
  "time_alive": 683,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 24,
  "time_alive": 1132,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 7,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 24,
  "time_alive": 969,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 20,
  "time_alive": 1203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 6,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 19,
  "time_alive": 1232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 14,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "10354163e217480aaee2f962e0b35295:142011a482b24dc28908fb9cc97ce3f6:74d56dc60f8944bcb3cb08c7ce9808c1",
  "placement": 6,
  "time_alive": 1270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 9,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 4,
  "time_alive": 1460,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 19,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 18,
  "time_alive": 1297,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 3,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 20,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 21,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 25,
  "time_alive": 694,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 25,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 25,
  "time_alive": 414,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 4,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "67b758abc28e4bb48196486c76f7fb77:95b500de22744225ba8664ac6da413fd:f0683841f3764b69be3da9c828a6fd28",
  "placement": 18,
  "time_alive": 639,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 32,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 21,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 16,
  "time_alive": 1339,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 17,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 14,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 10,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 4,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 18,
  "time_alive": 1247,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 15,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 6,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 9,
  "time_alive": 1413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "6b62aed75aba445eb39195a1ad9344f7:99387e45f9154260a6af797e947ef24c:f1f7d1c5e1a647dab8256cf200f9f672",
  "placement": 27,
  "time_alive": 112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 26,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 29,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 6,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 30,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 28,
  "time_alive": 533,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 29,
  "time_alive": 235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 13,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 15,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 21,
  "time_alive": 1106,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 12,
  "time_alive": 1372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 12,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "02cf4765a0d04b1da837df51d509b6ef:537f8248a2314f5da091b0bf47bff5bd:adb209a9cbc147b0b34eda4fb564f59e",
  "placement": 10,
  "time_alive": 1064,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 4,
  "time_alive": 1508,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 12,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 4,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 19,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 15,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 28,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 16,
  "time_alive": 1343,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 28,
  "time_alive": 350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 24,
  "time_alive": 916,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 28,
  "time_alive": 209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 24,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "3f00394b697e46c4a6126c9b492002c1:4043db651e2e4cffbb19abd86fba8c7f:8960eae6280d4885a09316366bbca808",
  "placement": 22,
  "time_alive": 389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 22,
  "time_alive": 1212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 22,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 27,
  "time_alive": 831,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 7,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 23,
  "time_alive": 1133,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 8,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 10,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 23,
  "time_alive": 952,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 23,
  "time_alive": 1005,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 26,
  "time_alive": 383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 18,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "1d01157dbae74d478ce4985df28cd6d7:9f0794698d1d401c9cfc6da1333dea74:bd66922a4b094a11a01677091c96e504",
  "placement": 25,
  "time_alive": 273,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 27,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 7,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 18,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 29,
  "time_alive": 430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 22,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 31,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 3,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 27,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 16,
  "time_alive": 1290,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 24,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 25,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "2325ae5608f84694a3962b9c322e7c5e:49b44b371b10449ca6f52625a16dc724:d771e35a88714351b929ccefba19a0aa",
  "placement": 24,
  "time_alive": 298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 12,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 30,
  "time_alive": 700,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 28,
  "time_alive": 796,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 29,
  "time_alive": 403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e23f9af-d631-4899-934a-1a8cd592f935",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 25,
  "time_alive": 773,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "12abc930-10af-44a6-a0e1-6d495747ab03",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 29,
  "time_alive": 207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90d4e08c-beb4-4d58-b2d0-45e0b730ef71",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 22,
  "time_alive": 971,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2e1fdc4f-5b71-4267-a34a-e732bc507a26",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 29,
  "time_alive": 404,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "251318b0-8d2c-40b7-8d33-55b495066e3a",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 15,
  "time_alive": 1363,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "41d57046-d373-466d-bd98-a242dec967ba",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 23,
  "time_alive": 991,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3b5b334c-473d-4484-9229-4657f2d82f74",
  "team_id": "3b8126b266064008b1548fa19266af2b:d792ffb97e8840dbb906ac9c657e5c06:f07e1707b2e94e81ab99d98f46b4579a",
  "placement": 23,
  "time_alive": 367,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "44a8254b-c239-4ab9-a57a-d53be8790f53",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 21,
  "time_alive": 1232,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bd78030d-3107-4a14-b271-425c0f4bf35d",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 15,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c8a6ee-a847-44e1-b63c-9d9601002a0f",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 21,
  "time_alive": 1207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d721bfa-f55d-4cac-9f76-67ae820b6c65",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 22,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "080f6d4d-662f-4dca-8b1a-4c04339db390",
  "team_id": "15ea8285386b4e27ac72e62dd293da34:1a47ba12da3d4473b6e44ce6804581d1:aeaab8b8c36744eaaad69334330c282a",
  "placement": 6,
  "time_alive": 1438,
  "elims": 7,
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
    