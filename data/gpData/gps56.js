const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 15,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 25,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 10,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 30,
  "time_alive": 426,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 4,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 23,
  "time_alive": 966,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 10,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 8,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 15,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 7,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 8,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 7,
  "time_alive": 1414,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 3,
  "time_alive": 1498,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 30,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 27,
  "time_alive": 606,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 7,
  "time_alive": 1470,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 22,
  "time_alive": 1047,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 11,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 20,
  "time_alive": 1119,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 12,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 1,
  "time_alive": 1521,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 6,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 9,
  "time_alive": 1413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 11,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 10,
  "time_alive": 1434,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 7,
  "time_alive": 1430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 4,
  "time_alive": 1494,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 6,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 17,
  "time_alive": 1269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 20,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 19,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 5,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 13,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 21,
  "time_alive": 1158,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 2,
  "time_alive": 1524,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 14,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 4,
  "time_alive": 1493,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 2,
  "time_alive": 1492,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 5,
  "time_alive": 1488,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 10,
  "time_alive": 1460,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 6,
  "time_alive": 1456,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 6,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 18,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 11,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 19,
  "time_alive": 1177,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 9,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 24,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 20,
  "time_alive": 1215,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 7,
  "time_alive": 1468,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 9,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 12,
  "time_alive": 1411,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 15,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 25,
  "time_alive": 638,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 6,
  "time_alive": 1467,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 24,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 30,
  "time_alive": 855,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 20,
  "time_alive": 1170,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 12,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1503,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 16,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 9,
  "time_alive": 1446,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 8,
  "time_alive": 1463,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 9,
  "time_alive": 1442,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 3,
  "time_alive": 1527,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 9,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 18,
  "time_alive": 1216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 21,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 28,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 26,
  "time_alive": 693,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 20,
  "time_alive": 1223,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 8,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 6,
  "time_alive": 1453,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 18,
  "time_alive": 1337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 21,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 18,
  "time_alive": 1242,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 16,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 14,
  "time_alive": 1334,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 2,
  "time_alive": 1489,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 5,
  "time_alive": 1478,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 25,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 4,
  "time_alive": 1471,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 25,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 27,
  "time_alive": 748,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 10,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 6,
  "time_alive": 1470,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 20,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 20,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 7,
  "time_alive": 1480,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 24,
  "time_alive": 768,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 24,
  "time_alive": 971,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 4,
  "time_alive": 1480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 29,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 21,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1469,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 19,
  "time_alive": 1280,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 18,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 22,
  "time_alive": 1111,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 24,
  "time_alive": 983,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 10,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 31,
  "time_alive": 242,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 26,
  "time_alive": 922,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 2,
  "time_alive": 1521,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 11,
  "time_alive": 1415,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 17,
  "time_alive": 1291,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 22,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "6e58fa482f6b47f788859f5ff0aba5ff:b58a836baa0a4ed6ad9d20ff811e5f61:f9543eabd4bc42b0acf763889726be7b",
  "placement": 6,
  "time_alive": 1478,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 1,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 21,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 18,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 14,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 28,
  "time_alive": 699,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 17,
  "time_alive": 1320,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 27,
  "time_alive": 912,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 28,
  "time_alive": 835,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 31,
  "time_alive": 726,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 6,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 4,
  "time_alive": 1435,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "28d5e85114de464fb2145347c6a9e6a5:6f700f21fc4640678d7601ff4f30a7bd:d42281c6e5834fc8871850d4f4ca566c",
  "placement": 21,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 9,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 1,
  "time_alive": 1516,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 19,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 13,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 13,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 21,
  "time_alive": 1078,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 20,
  "time_alive": 1099,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 26,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 23,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 32,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 10,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 16,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 15,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 31,
  "time_alive": 182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 14,
  "time_alive": 1440,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 29,
  "time_alive": 353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 25,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 29,
  "time_alive": 264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 3,
  "time_alive": 1480,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 14,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 14,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 31,
  "time_alive": 236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 31,
  "time_alive": 136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 7,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 14,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 23,
  "time_alive": 1080,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 1,
  "time_alive": 1529,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 15,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 8,
  "time_alive": 1458,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 8,
  "time_alive": 1395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 22,
  "time_alive": 1032,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 18,
  "time_alive": 1200,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 20,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 28,
  "time_alive": 533,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 29,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 22,
  "time_alive": 1133,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 23,
  "time_alive": 1038,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 25,
  "time_alive": 847,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 18,
  "time_alive": 1127,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 15,
  "time_alive": 1325,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 32,
  "time_alive": 260,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 8,
  "time_alive": 1445,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 32,
  "time_alive": 164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 5,
  "time_alive": 1454,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 27,
  "time_alive": 321,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 24,
  "time_alive": 892,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 5,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 12,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 25,
  "time_alive": 894,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 28,
  "time_alive": 382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 32,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 28,
  "time_alive": 316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 4,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 17,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 24,
  "time_alive": 969,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 30,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 30,
  "time_alive": 150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 20,
  "time_alive": 1238,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 33,
  "time_alive": 147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 12,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 173,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 10,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 10,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 8,
  "time_alive": 1427,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 33,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 13,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 24,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 3,
  "time_alive": 1501,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 13,
  "time_alive": 1441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 11,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 27,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 27,
  "time_alive": 417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 29,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 20,
  "time_alive": 1167,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 27,
  "time_alive": 864,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 16,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 6,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 29,
  "time_alive": 575,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 26,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 15,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 17,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 14,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 22,
  "time_alive": 996,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 25,
  "time_alive": 954,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 22,
  "time_alive": 1156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 10,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 12,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 18,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 12,
  "time_alive": 1419,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 13,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 14,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 5,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 16,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 31,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 30,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 23,
  "time_alive": 973,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 29,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 16,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 18,
  "time_alive": 1259,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 19,
  "time_alive": 1249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 25,
  "time_alive": 780,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 28,
  "time_alive": 290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 28,
  "time_alive": 333,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 32,
  "time_alive": 333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 27,
  "time_alive": 447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 19,
  "time_alive": 1070,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 6,
  "time_alive": 1405,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 28,
  "time_alive": 821,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 11,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 18,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 24,
  "time_alive": 795,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 28,
  "time_alive": 156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 28,
  "time_alive": 731,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 27,
  "time_alive": 914,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 25,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 27,
  "time_alive": 539,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 30,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 24,
  "time_alive": 909,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 2,
  "time_alive": 1489,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 30,
  "time_alive": 781,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 31,
  "time_alive": 782,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 13,
  "time_alive": 1394,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 29,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 26,
  "time_alive": 623,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 18,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 22,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 19,
  "time_alive": 1187,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 31,
  "time_alive": 412,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 8,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 22,
  "time_alive": 971,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 33,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 13,
  "time_alive": 1331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 19,
  "time_alive": 1185,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 14,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 8,
  "time_alive": 1413,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "928dad76b83d46069914f80b11225e09:9be9ee9996864a58aacd949deaa758da:aa2a526e83474c4eb7c4da868f475ecc",
  "placement": 17,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 31,
  "time_alive": 182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 26,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 3,
  "time_alive": 1521,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 21,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 17,
  "time_alive": 1254,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 16,
  "time_alive": 1321,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 21,
  "time_alive": 1043,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 23,
  "time_alive": 1119,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 26,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 27,
  "time_alive": 616,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 29,
  "time_alive": 151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "26b25348d4874ce2b073edec113b927a:3b4679738dee4ffcb720ddb97b018bea:b5ec098deccf467a9e25e4f79e70f01e",
  "placement": 22,
  "time_alive": 1105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 29,
  "time_alive": 277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 26,
  "time_alive": 663,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 23,
  "time_alive": 990,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 30,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 11,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 15,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 16,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 12,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 19,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 23,
  "time_alive": 1149,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "1c7421111ff8417991d64a5b0840e11c:77742956832445d4a67f515ff4ed014e:f3bfad7a6fcb4d4da1c9c666259d01ec",
  "placement": 23,
  "time_alive": 974,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 21,
  "time_alive": 1213,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 30,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 24,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 31,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 29,
  "time_alive": 442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 26,
  "time_alive": 475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 31,
  "time_alive": 578,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 32,
  "time_alive": 282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 15,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 22,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 13,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 30,
  "time_alive": 328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52c6d500-8d67-4b95-900a-e08ef526d4ea",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 23,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "60882822-919e-47d9-99cd-1a9412567518",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 20,
  "time_alive": 1163,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "59b065a8-51d2-437d-b7b3-fe84cb12a2e6",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 29,
  "time_alive": 493,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "600829e3-5610-43ba-81dd-ca137090b927",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 26,
  "time_alive": 823,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "115e23b4-3410-479f-8bec-1f1c2abc76d9",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 21,
  "time_alive": 990,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "828208c3-2184-479c-a0d0-44460da34dd6",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 23,
  "time_alive": 932,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cc594674-3794-4db2-ab4e-f905c0398b08",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 16,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "17ad7b6a-66f8-4600-ab67-86b407f59a63",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 27,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8eb1e654-1c6f-4732-bf83-9a7d0efe9f06",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 22,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6325a50d-577a-43b5-8633-bc31aca4ac50",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 25,
  "time_alive": 756,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6af98aa5-4fad-40d7-85ac-30f790639c89",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 16,
  "time_alive": 1327,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1deb7931-9eff-44b8-b3c1-e8e9c72376cf",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 31,
  "time_alive": 170,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1440,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1451,
  "elims": 22,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 9,
  "time_alive": 1372,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1516,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1482,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 5,
  "time_alive": 1461,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 22,
  "time_alive": 1005,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1521,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 4,
  "time_alive": 1471,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 24,
  "time_alive": 738,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1455,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1462,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 5,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 5,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 1,
  "time_alive": 1512,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 4,
  "time_alive": 1497,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 3,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 8,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 1,
  "time_alive": 1484,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 29,
  "time_alive": 818,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 10,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 3,
  "time_alive": 1447,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 10,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "aef2f152e93d4711affac66e8396b40c:e683820643814a5a8bbd788f83ec15e9:e83a3734a729473ca0c97dc9fd2cb14f",
  "placement": 11,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1481,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 8,
  "time_alive": 1408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 5,
  "time_alive": 1480,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 3,
  "time_alive": 1501,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 13,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 16,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 2,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 2,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 13,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 1,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 2,
  "time_alive": 1464,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 3,
  "time_alive": 1516,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 9,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 11,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 5,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 4,
  "time_alive": 1480,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 4,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 3,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 6,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 7,
  "time_alive": 1434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 9,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 25,
  "time_alive": 823,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 14,
  "time_alive": 1280,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 11,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 2,
  "time_alive": 1451,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 3,
  "time_alive": 1507,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 10,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 8,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 7,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 6,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 16,
  "time_alive": 1318,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 21,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 10,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 6,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "3bde7dc87a8344df9c048081834ec367:65bab1452ad34a4481716b464ddd3800:9f687e479cad4be18dad868bea874c20",
  "placement": 12,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 7,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 3,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 8,
  "time_alive": 1419,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 28,
  "time_alive": 761,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 26,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 25,
  "time_alive": 945,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 8,
  "time_alive": 1386,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 17,
  "time_alive": 1270,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 3,
  "time_alive": 1477,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 7,
  "time_alive": 1419,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 9,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "4fed0ae3456e49a8bdfdfb12a1e2c89f:5f41699036514527a2d5c9a4ab7ac7fa:b76a2c65b723478aa42a328bff8319c8",
  "placement": 6,
  "time_alive": 1427,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 1,
  "time_alive": 1522,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 20,
  "time_alive": 1227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 4,
  "time_alive": 1480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 1,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 3,
  "time_alive": 1486,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 9,
  "time_alive": 1427,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 15,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 4,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 21,
  "time_alive": 1196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 18,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 28,
  "time_alive": 891,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 4,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 7,
  "time_alive": 1421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 7,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 7,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 9,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 9,
  "time_alive": 1382,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 13,
  "time_alive": 1383,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 20,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 5,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 2,
  "time_alive": 1483,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "94f549da32e846a0ada9cdbaaee821f4:dab647b7bcfd466888449fb52dc62381:dd083afbe4c943f6b59d12100e0d2e20",
  "placement": 21,
  "time_alive": 640,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 15,
  "time_alive": 1353,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 7,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 12,
  "time_alive": 1354,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 18,
  "time_alive": 1325,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 12,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 12,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 5,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 2,
  "time_alive": 1521,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 6,
  "time_alive": 1435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 25,
  "time_alive": 653,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 3,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "07596e788a63431abd57a06955c723cf:1b34b2109d474c18b6b0d006e8ac5f86:ea770393e6474a96bb5b3130088ea9a6",
  "placement": 4,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 2,
  "time_alive": 1522,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 32,
  "time_alive": 120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 27,
  "time_alive": 743,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 6,
  "time_alive": 1474,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 22,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 2,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 12,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 8,
  "time_alive": 1443,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 13,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 14,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 5,
  "time_alive": 1467,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3:7bb03ea08e16445bbe0784104bffa43f:e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 7,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 17,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 30,
  "time_alive": 157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 19,
  "time_alive": 1162,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 20,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 18,
  "time_alive": 1346,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 1,
  "time_alive": 1492,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 29,
  "time_alive": 311,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 31,
  "time_alive": 418,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 29,
  "time_alive": 256,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 2,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 4,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "3eb6b27826e94b04ba911597cdab0eb8:9534e1914025417385ca482c49da982d:d717b1ff0c924aabba85745ded15bad3",
  "placement": 5,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 6,
  "time_alive": 1461,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 13,
  "time_alive": 1382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 20,
  "time_alive": 1154,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 2,
  "time_alive": 1516,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 10,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 13,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 13,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 22,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 1,
  "time_alive": 1521,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 11,
  "time_alive": 1373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 17,
  "time_alive": 1300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "0be1bf3882254e53a9bed5e5ea6f1df5:e89063a11df7478c90772749c7005252:f088192824034fcaac6b421cb8499490",
  "placement": 10,
  "time_alive": 1394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 32,
  "time_alive": 395,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 6,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 30,
  "time_alive": 455,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 9,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 28,
  "time_alive": 712,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 31,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 7,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 3,
  "time_alive": 1494,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 5,
  "time_alive": 1464,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 8,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 20,
  "time_alive": 1212,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "1ff03424e3ff4d5d9a0147fb389f13a2:a48f656128234f10ad175605ddd314ab:f2f12d293b554d5b91a605a2e93dfbc6",
  "placement": 20,
  "time_alive": 737,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 11,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 2,
  "time_alive": 1512,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 31,
  "time_alive": 551,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 9,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 10,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 19,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 10,
  "time_alive": 1416,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 8,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 6,
  "time_alive": 1430,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 18,
  "time_alive": 1299,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "420df92347464bd0add659245e0a3529:6f46854557e5445c8dffb8f391afa041:a3dd7923e3b4400091159ecdceb0c449",
  "placement": 9,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 10,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 10,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 6,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 8,
  "time_alive": 1463,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 16,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 6,
  "time_alive": 1455,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 14,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 14,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 27,
  "time_alive": 547,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 28,
  "time_alive": 318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 14,
  "time_alive": 1357,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "1d76efb096df4c84a7c4efd1384385d9:9eb55168ce5741e4a71d43930e27fe73:eaf3fd55bc6846599e3c28079e7659d8",
  "placement": 17,
  "time_alive": 1190,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 24,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 16,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 13,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 22,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 11,
  "time_alive": 1419,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 24,
  "time_alive": 953,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 4,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 5,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 14,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 18,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 8,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6:40c8cd7106d642cf996ae35a0b1e1ff6:d8819e67905e434a9bf2794556e71a4b",
  "placement": 19,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 19,
  "time_alive": 1265,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 22,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 10,
  "time_alive": 1370,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 14,
  "time_alive": 1375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 24,
  "time_alive": 885,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 18,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 15,
  "time_alive": 1324,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 12,
  "time_alive": 1399,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 22,
  "time_alive": 1143,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 17,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 11,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "50540efffd544c4298d1452d32b1a7b3:7295fa2d21044b0ba6c7da89e805ab50:fc269cd936ba41aabd7bdcc440e8b6e6",
  "placement": 8,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 13,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 17,
  "time_alive": 1303,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 33,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 23,
  "time_alive": 955,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 22,
  "time_alive": 991,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 16,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 20,
  "time_alive": 1139,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 1,
  "time_alive": 1459,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 12,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9:3c7bb11e804446b29674eab428cff2e9:e09dbef7f50441bda13871bc12868408",
  "placement": 24,
  "time_alive": 430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 12,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 25,
  "time_alive": 1108,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 22,
  "time_alive": 957,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 19,
  "time_alive": 1184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 17,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 11,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 26,
  "time_alive": 433,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 27,
  "time_alive": 924,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 18,
  "time_alive": 1346,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 22,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 16,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "685ce9891d164d84aa41c5ffb98de56f:909f7e99bd7f432b8ab5acac447c3689:b8a231e313a24bb6b99e44a841060499",
  "placement": 1,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 27,
  "time_alive": 929,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 27,
  "time_alive": 444,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 31,
  "time_alive": 415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 16,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 30,
  "time_alive": 291,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 19,
  "time_alive": 1060,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 11,
  "time_alive": 1375,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 11,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 11,
  "time_alive": 1402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 16,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 13,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "62593e47e78546dc880b21316d9cb3f7:9b279a6794c94644864b591931b1e6a0:f7e47a6b22e647ba837bbde38bcfa4c5",
  "placement": 13,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 29,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 12,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 16,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 24,
  "time_alive": 959,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 20,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 23,
  "time_alive": 982,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 18,
  "time_alive": 1315,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 7,
  "time_alive": 1452,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 9,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 24,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "63e56052f8cd4fb3a73b4f938c768168:c314669446a84d42a152bfaead959a49:d4dd11c5711d4b24820fb7d644b49597",
  "placement": 15,
  "time_alive": 1245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 9,
  "time_alive": 1428,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 28,
  "time_alive": 280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 29,
  "time_alive": 497,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 32,
  "time_alive": 325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 15,
  "time_alive": 1225,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 24,
  "time_alive": 1099,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 19,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 21,
  "time_alive": 1043,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 22,
  "time_alive": 1150,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "02945a61f23b452197bdc236f906befa:73ddba3de1a64dc494645112921d8649:af65ba63f2f5424490b5894d768e3bf7",
  "placement": 23,
  "time_alive": 452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 18,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 21,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 15,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 21,
  "time_alive": 1168,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 31,
  "time_alive": 284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 17,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 10,
  "time_alive": 1380,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 19,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 17,
  "time_alive": 1354,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 12,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 15,
  "time_alive": 1325,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "6b0c773393a445ca9e4d77b2eb384ff3:985b1fa89d4e4286ab2d9fa029aad8e9:ddb9faee505347fe918a3de1bcede5f4",
  "placement": 25,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 20,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 14,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 18,
  "time_alive": 1289,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 17,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 6,
  "time_alive": 1452,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 27,
  "time_alive": 898,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 25,
  "time_alive": 471,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 21,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 31,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 30,
  "time_alive": 201,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "0610088d19ef47d68de8b7505a059d07:63bb4255f7904c93a7ac63da7170ea14:8a51fb8a1cd94217bc2cd5b9cd3bbd59",
  "placement": 26,
  "time_alive": 691,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 16,
  "time_alive": 1336,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 31,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 28,
  "time_alive": 571,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 13,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 14,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 28,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 30,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 32,
  "time_alive": 240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 26,
  "time_alive": 711,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 19,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "5a6b70cdf8fe498d900e39c4a10ef2ee:bb2488874b244355a232e2474286515e:c9be3209d8bb4d5dab9e73cb7a20fc8f",
  "placement": 28,
  "time_alive": 243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 31,
  "time_alive": 769,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 29,
  "time_alive": 207,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 14,
  "time_alive": 1320,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 11,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 27,
  "time_alive": 746,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 23,
  "time_alive": 971,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 26,
  "time_alive": 1004,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 16,
  "time_alive": 1355,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 29,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 23,
  "time_alive": 978,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "2bc8a02797854f2eb089087a5c853aae:bfef93495ebd4a2da692012e20d285fc:f03863657eef45b6bb70461e5406ec39",
  "placement": 16,
  "time_alive": 1214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 14,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 17,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 23,
  "time_alive": 946,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 27,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 33,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 20,
  "time_alive": 1030,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 21,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 15,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 20,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 19,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "adb99985-60cf-42bc-aa88-1860e1ae52aa",
  "team_id": "3c2b96dff28d4f78971373866af0958f:6b71744010f5425ca0e993bb2d3c3d5f:916b578b078f479899969be16b181113",
  "placement": 22,
  "time_alive": 556,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 30,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 19,
  "time_alive": 1255,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 21,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 30,
  "time_alive": 563,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 21,
  "time_alive": 996,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 21,
  "time_alive": 1006,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 24,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 23,
  "time_alive": 1108,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 30,
  "time_alive": 242,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 26,
  "time_alive": 549,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "baec69fb099f4a2f8d4a27cab470cfb0:c4ae88b9254f407a852376fea3cd8f01:fefd09013f3a4325b09252d72655cd42",
  "placement": 27,
  "time_alive": 407,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 21,
  "time_alive": 1159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 18,
  "time_alive": 1260,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 26,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 25,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 29,
  "time_alive": 616,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 14,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 28,
  "time_alive": 370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 18,
  "time_alive": 1251,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 23,
  "time_alive": 1114,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 23,
  "time_alive": 830,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "51d49522-828c-482e-bd33-f9f9f08b57c3",
  "team_id": "1afee84db3ec4438b0f430db3fc9ec49:2652e3fe14b344bf8edbeee7c3de5554:c4cd4c394a1c44a584688ce3f9eef8fe",
  "placement": 29,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb:6843ac0865ce4de9a36973c877ea9a5f:a087272d68f54e00bfc403f246741012",
  "placement": 25,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb:6843ac0865ce4de9a36973c877ea9a5f:a087272d68f54e00bfc403f246741012",
  "placement": 24,
  "time_alive": 1115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb:6843ac0865ce4de9a36973c877ea9a5f:a087272d68f54e00bfc403f246741012",
  "placement": 24,
  "time_alive": 930,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb:6843ac0865ce4de9a36973c877ea9a5f:a087272d68f54e00bfc403f246741012",
  "placement": 15,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb:6843ac0865ce4de9a36973c877ea9a5f:a087272d68f54e00bfc403f246741012",
  "placement": 25,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "52c35ccc15e44a1d96b72c39e5f551fb:6843ac0865ce4de9a36973c877ea9a5f:a087272d68f54e00bfc403f246741012",
  "placement": 32,
  "time_alive": 259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 23,
  "time_alive": 1155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 23,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 23,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 26,
  "time_alive": 922,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 17,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 30,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 25,
  "time_alive": 788,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "780402fe-9040-4635-ba45-2fe46e078cd6",
  "team_id": "0608183cde7c4f9cb5fef1f0e7bb83cd:0fbfe425fa214deeabb2b520ed260777:d6f055f621b64761a4269ad5a7c20223",
  "placement": 27,
  "time_alive": 338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 25,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 29,
  "time_alive": 747,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 19,
  "time_alive": 1254,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 30,
  "time_alive": 559,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 27,
  "time_alive": 432,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 25,
  "time_alive": 1027,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "4941b4f8b8454434aaa5edbd7bc157c6:aaee93ab02c94cab8f133ace198d0987:d40f519e0dd44a74906da9c13359357a",
  "placement": 28,
  "time_alive": 357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7febf0a-7131-4315-804c-05c12dc70714",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 26,
  "time_alive": 1115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "deeff861-ad61-4511-8423-d67831174ccd",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 26,
  "time_alive": 788,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ed0f21aa-af4f-4ab8-95c5-092d5c80362f",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 32,
  "time_alive": 319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5133bc88-e83c-4a73-81a9-183dfd0b53ca",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 26,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3bae94ca-c7a2-4512-81b4-425c2f6ee3bd",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 32,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67c8b7c6-4ecf-4152-8d6b-aa4f3e24e8f0",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 33,
  "time_alive": 236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "52841f7a-5acd-4666-a8d7-d9765e811018",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 20,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e827488d-a83b-4c2e-ad00-72d180ef6844",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 28,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ad2673f4-613f-4ec6-b7f7-04249f0257bb",
  "team_id": "3cb8e12df7114332889bc024655bcc92:91decf069dc74a93b62161c684ee07b5:cf162c06dbcb4c7b839fae3ea82893dc",
  "placement": 24,
  "time_alive": 1024,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 6,
  "time_alive": 1471,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 25,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 1,
  "time_alive": 1532,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 1006,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 9,
  "time_alive": 1428,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 1,
  "time_alive": 1523,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 12,
  "time_alive": 1418,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 5,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 1,
  "time_alive": 1518,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 26,
  "time_alive": 373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 6,
  "time_alive": 1405,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 3,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 12,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 5,
  "time_alive": 1520,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 6,
  "time_alive": 1475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 7,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 21,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 4,
  "time_alive": 1480,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 11,
  "time_alive": 1421,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 8,
  "time_alive": 1425,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 3,
  "time_alive": 1415,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "2f03d8595af740fba08f6aadb345b3ba:78b86dacef144a209f1986aafc7f360c:fc770d107e5e436691dcc43c6f6221ab",
  "placement": 2,
  "time_alive": 1439,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 4,
  "time_alive": 1495,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 1,
  "time_alive": 1508,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 7,
  "time_alive": 1478,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 8,
  "time_alive": 1434,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 3,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 4,
  "time_alive": 1503,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1381,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 14,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 27,
  "time_alive": 438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 24,
  "time_alive": 462,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 16,
  "time_alive": 1253,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 11,
  "time_alive": 1407,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 4,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 30,
  "time_alive": 420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 2,
  "time_alive": 1522,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1517,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 24,
  "time_alive": 1116,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1511,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 21,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 10,
  "time_alive": 1436,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 2,
  "time_alive": 1482,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 17,
  "time_alive": 841,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 17,
  "time_alive": 1172,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 1,
  "time_alive": 1512,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 6,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 4,
  "time_alive": 1521,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 14,
  "time_alive": 1377,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 4,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 20,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 9,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 10,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 12,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 6,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 5,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 4,
  "time_alive": 1424,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 8,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 8,
  "time_alive": 1438,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 10,
  "time_alive": 1416,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 4,
  "time_alive": 1498,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 20,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 8,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 10,
  "time_alive": 1432,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 9,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 3,
  "time_alive": 1513,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 9,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 1,
  "time_alive": 1423,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "12e3c9749791404e84152b33f3b78a1b:6e8a9c7428e14f62bc3f2e03b070a8db:b6a0ca8b12ed4c0dbbb51a801cf8721b",
  "placement": 19,
  "time_alive": 979,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 5,
  "time_alive": 1467,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 19,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 11,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 8,
  "time_alive": 1462,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 5,
  "time_alive": 1472,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 7,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 3,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 4,
  "time_alive": 1491,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 14,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 2,
  "time_alive": 1423,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 1,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 9,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 2,
  "time_alive": 1508,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 31,
  "time_alive": 293,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 18,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 19,
  "time_alive": 1243,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 3,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 24,
  "time_alive": 971,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 13,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 6,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 4,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 14,
  "time_alive": 1258,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 20,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 5,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 3,
  "time_alive": 1493,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 2,
  "time_alive": 1532,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 25,
  "time_alive": 1002,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 15,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 17,
  "time_alive": 1343,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 22,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 15,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 8,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 18,
  "time_alive": 1183,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 4,
  "time_alive": 1406,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "3b1b2adebaa7494a8062d1f77634eb87:4e50c48f25564c659a6cf1f83d76cccc:dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 3,
  "time_alive": 1437,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 32,
  "time_alive": 153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 32,
  "time_alive": 205,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 25,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 7,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 27,
  "time_alive": 576,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 6,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 31,
  "time_alive": 673,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 7,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 2,
  "time_alive": 1518,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 1,
  "time_alive": 1482,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 13,
  "time_alive": 1259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "578a9c9f052d42ce9c34815466a09e6b:8723f8c420c44c9f883c13401217f948:c76b125b30b94badba8a5952b3729fe6",
  "placement": 12,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 10,
  "time_alive": 1434,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 17,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 12,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 10,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 17,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 6,
  "time_alive": 1465,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 1,
  "time_alive": 1452,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 21,
  "time_alive": 1174,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 5,
  "time_alive": 1451,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 8,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "1c962b5c9f354385be99435c82cc6821:2b6b05d79b3846dcbb071056b2a2e043:bd0782f0093f48f28654b30fd5ebb8d2",
  "placement": 13,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 12,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 9,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 3,
  "time_alive": 1530,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 3,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 13,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 13,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 13,
  "time_alive": 1409,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 26,
  "time_alive": 860,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 13,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 17,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 6,
  "time_alive": 1383,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "17d1ea692a3a413693ec6355186f7c52:df05948988584f2f8ac965491f6897d7:f1fb2d247a2e410d8523f2a592bba893",
  "placement": 26,
  "time_alive": 497,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 14,
  "time_alive": 1351,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 27,
  "time_alive": 996,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 29,
  "time_alive": 424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 28,
  "time_alive": 683,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 2,
  "time_alive": 1517,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 15,
  "time_alive": 1346,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 16,
  "time_alive": 1342,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 16,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 9,
  "time_alive": 1444,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 27,
  "time_alive": 306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 11,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "077cb8845a764181b5f8cf3f4d6c3150:530039b311924e889067b973aba24c91:f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 5,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 18,
  "time_alive": 1225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 13,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 6,
  "time_alive": 1516,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 27,
  "time_alive": 725,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 6,
  "time_alive": 1470,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 18,
  "time_alive": 1334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 11,
  "time_alive": 1424,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 4,
  "time_alive": 1441,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 17,
  "time_alive": 1215,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 10,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 7,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "20e7e63dddb24f758c75b060fe5d4663:cbdaa26286a94c4ab492ecab5de7954d:f2ba0d11a1fc4fceaadc8fa7a0d06a35",
  "placement": 21,
  "time_alive": 783,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 26,
  "time_alive": 389,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 22,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 8,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 33,
  "time_alive": 245,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 5,
  "time_alive": 1480,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 16,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 3,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 27,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 5,
  "time_alive": 1480,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 19,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 32,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "44c46f57d5fd4eb9a6820fb66e328308:cd6987f427634f0fac159a4b85bc62d7:d156bdc8436e44bdb3e5a6ef2073b75b",
  "placement": 14,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 2,
  "time_alive": 1512,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 14,
  "time_alive": 1356,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 17,
  "time_alive": 1288,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 29,
  "time_alive": 506,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 14,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 22,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 2,
  "time_alive": 1511,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 12,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 32,
  "time_alive": 188,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 21,
  "time_alive": 1043,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 31,
  "time_alive": 217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "5a2fc7594aaa49458c71454b2c591712:6baa58b2ef714c1d82ec16948212a4df:86dce499042442e78a2b131cba105d16",
  "placement": 23,
  "time_alive": 588,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 13,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 20,
  "time_alive": 1252,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 23,
  "time_alive": 997,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 5,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 31,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 31,
  "time_alive": 319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 21,
  "time_alive": 1118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 18,
  "time_alive": 1342,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 23,
  "time_alive": 671,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 3,
  "time_alive": 1478,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 19,
  "time_alive": 761,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "8f57d78bcd964eb7a3cd86ed6d978618:d26316ae99e14fce917372902d441098:e94b3144a90a4660b2411c31445d5765",
  "placement": 7,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 30,
  "time_alive": 218,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 30,
  "time_alive": 628,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 33,
  "time_alive": 214,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 1,
  "time_alive": 1522,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 18,
  "time_alive": 1245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 29,
  "time_alive": 635,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 25,
  "time_alive": 953,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 23,
  "time_alive": 990,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 22,
  "time_alive": 1131,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 26,
  "time_alive": 330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 9,
  "time_alive": 1346,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "0c7657d0a27f429aafb3201ed9191456:0cc2a50c2c9a4059a79d92bf61b69a9a:4028293462474e398a9505b40a39bfb9",
  "placement": 18,
  "time_alive": 1043,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 17,
  "time_alive": 1237,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 10,
  "time_alive": 1419,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 9,
  "time_alive": 1430,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 17,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 21,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 33,
  "time_alive": 256,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 27,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 33,
  "time_alive": 105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 24,
  "time_alive": 583,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 7,
  "time_alive": 1439,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 12,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "0fd375eddadc4436a542b2bf83aba445:6351ede7c6f54fefa27c533bf7f38047:6e9b4b52f2bc41f2a2e784851babadeb",
  "placement": 9,
  "time_alive": 1379,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 15,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 28,
  "time_alive": 519,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 22,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 23,
  "time_alive": 1141,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 2,
  "time_alive": 1523,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 15,
  "time_alive": 1375,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 8,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 19,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 22,
  "time_alive": 1030,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 15,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "43971d9b20124d64ac361ac30b151ae7:6377fb09b1b84e1da77f7662930c2958:db5f3582caed47b18d3bd1a69571e944",
  "placement": 8,
  "time_alive": 1390,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 27,
  "time_alive": 349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 11,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 9,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 11,
  "time_alive": 1399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 9,
  "time_alive": 1399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 8,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 20,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 16,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 16,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 20,
  "time_alive": 750,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "15704a5669b24b0ebd7e3b16560e4894:b3c5e13103eb4c849ebfe2ba0151489f:d1b01dbcae96440086f415027cd29e9d",
  "placement": 22,
  "time_alive": 621,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 29,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 29,
  "time_alive": 842,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 16,
  "time_alive": 1294,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 30,
  "time_alive": 319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 32,
  "time_alive": 269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 14,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 17,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 6,
  "time_alive": 1432,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 26,
  "time_alive": 488,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 13,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 18,
  "time_alive": 841,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "168aec015e944eac9272b013ea1bac1b:8e07108bd40c4b9e9f0064f83335157d:cd1fb7243641436fac1e6d6b52e4aa04",
  "placement": 10,
  "time_alive": 1353,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 19,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 26,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 26,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 15,
  "time_alive": 1357,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 12,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 27,
  "time_alive": 713,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 5,
  "time_alive": 1480,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 30,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 14,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 32,
  "time_alive": 100,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 28,
  "time_alive": 336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "3ce9c64d8286489480d1aceeb206589a:630eaf75b35e4381a4f2c5bbd3f87fb4:fbb21b38e9d8477db3c53ceff8dbba9d",
  "placement": 11,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 20,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 18,
  "time_alive": 1324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 27,
  "time_alive": 696,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 23,
  "time_alive": 1144,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 30,
  "time_alive": 393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 7,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 26,
  "time_alive": 868,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 2,
  "time_alive": 1452,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 25,
  "time_alive": 528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 20,
  "time_alive": 1109,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 25,
  "time_alive": 380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "1b5e5afbb49d4a599e36853445c8f0fa:562e5af8add546368533288e54eca1a7:a68c877808594282b5f1191337bd1e00",
  "placement": 28,
  "time_alive": 204,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 22,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 21,
  "time_alive": 1237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 18,
  "time_alive": 1255,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 21,
  "time_alive": 1214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 26,
  "time_alive": 772,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 11,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 32,
  "time_alive": 495,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 29,
  "time_alive": 238,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 7,
  "time_alive": 1450,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 25,
  "time_alive": 605,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 10,
  "time_alive": 1342,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "058457b42af74971b54d04469e900196:06c7faddb8b24811ac7ba75eeabc9639:4eec40931c284bc1acb914f4a9c20983",
  "placement": 27,
  "time_alive": 496,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 16,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 28,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 21,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 13,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 10,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 10,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 20,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 17,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 28,
  "time_alive": 384,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 23,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 23,
  "time_alive": 535,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "1272cf016aca48f0b004da0ca8f5e992:9090b8465e6a4a70bbf7527e10b5be86:e7a672930f2a4e44a24be3cdb0678bea",
  "placement": 30,
  "time_alive": 126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 7,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 7,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 24,
  "time_alive": 830,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 19,
  "time_alive": 1288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 28,
  "time_alive": 551,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 26,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 29,
  "time_alive": 810,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 31,
  "time_alive": 196,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 33,
  "time_alive": 186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "07b51253cbe048fd95fe89e268b50485:1bfd869378c542b4b5931566b93e6a1d:fd6e15a59d4443939e426df36251cb62",
  "placement": 30,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 28,
  "time_alive": 340,
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
    