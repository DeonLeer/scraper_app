const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 56,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 48,
  "time_alive": 1237,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 80,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 14,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 80,
  "time_alive": 791,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 76,
  "time_alive": 823,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 30,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "2c19b2bbcba14c5e83236926c6e58b39",
  "placement": 43,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 67,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 82,
  "time_alive": 672,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 41,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 16,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 23,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 51,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 54,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "5b804cf9aec94180821570a64c165cf4",
  "placement": 78,
  "time_alive": 471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 62,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 65,
  "time_alive": 1008,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 20,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 26,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 46,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 73,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 63,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "4db8f3b5194f4172a8526f0703a416d5",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 38,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 3,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 67,
  "time_alive": 894,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 64,
  "time_alive": 1006,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 68,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 85,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 41,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 75,
  "time_alive": 612,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 71,
  "time_alive": 899,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 39,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 16,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 43,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 19,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 98,
  "time_alive": 87,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 65,
  "time_alive": 990,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 58,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 80,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 90,
  "time_alive": 480,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 27,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 31,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 95,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 14,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 62,
  "time_alive": 1082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 66,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 57,
  "time_alive": 1116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 8,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 34,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 71,
  "time_alive": 926,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 52,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 26,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 96,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 46,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 86,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 37,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 88,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 44,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 23,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 54,
  "time_alive": 1174,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 91,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 35,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 89,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 6,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 57,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 53,
  "time_alive": 1141,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 82,
  "time_alive": 544,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 76,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 65,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 59,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 93,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 97,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 31,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 97,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 87,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 10,
  "time_alive": 1441,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 30,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 57,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 52,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 33,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 41,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 58,
  "time_alive": 1100,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 25,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "7acec9b50df6480398027d71731aabbf",
  "placement": 50,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 97,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 81,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 29,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 76,
  "time_alive": 858,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 85,
  "time_alive": 510,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 49,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 16,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "dbdd0724e8d04ed19dc4fbe996b8d173",
  "placement": 34,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 44,
  "time_alive": 1228,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 98,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 97,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 70,
  "time_alive": 921,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 58,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 7,
  "time_alive": 1470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 32,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 52,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 31,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 84,
  "time_alive": 652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 81,
  "time_alive": 632,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 52,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 35,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 25,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 66,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "2d0950ef69fc4f3db914dad9fcb2fc6d",
  "placement": 57,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 66,
  "time_alive": 1021,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 53,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 30,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 80,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 38,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 79,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 19,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ef5ff4a702e64ca6a463083f187cc2a9",
  "placement": 64,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 73,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 86,
  "time_alive": 627,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 18,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 19,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 77,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 93,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 77,
  "time_alive": 673,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "b58986e7344a46619b4e8508463b198c",
  "placement": 81,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 81,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 23,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 19,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 95,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 64,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 34,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 78,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "b49902cbd1b44fb48907a2586bc8280b",
  "placement": 94,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 37,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 52,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 58,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 61,
  "time_alive": 1078,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 65,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 86,
  "time_alive": 423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 33,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "7a978eacf71042fb8b3ae02932f70614",
  "placement": 29,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 17,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 60,
  "time_alive": 1135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 59,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 40,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 36,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 48,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 83,
  "time_alive": 536,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "77a2495cdae842dbb573795774e95e31",
  "placement": 71,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 98,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 85,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 62,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 24,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 73,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 54,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 7,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "fa81291771cf4b90ae1b444d727df46e",
  "placement": 60,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 95,
  "time_alive": 468,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 72,
  "time_alive": 883,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 94,
  "time_alive": 253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 20,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 54,
  "time_alive": 1138,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 32,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 72,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "088fd72c21a249498149d4e753006247",
  "placement": 90,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 28,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 93,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 90,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 75,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 81,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 29,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 37,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "81d2ebefc102431cbb8ca0c9693cc642",
  "placement": 51,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 9,
  "time_alive": 1438,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 50,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 83,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 85,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 99,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 84,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "d7be4f89778b4c61ac0a98e6c95ba099",
  "placement": 55,
  "time_alive": 1133,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 87,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 80,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 72,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 74,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 37,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 61,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 40,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "8bf410cb45c045a0b8efcf7ec0c0b14d",
  "placement": 13,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 24,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 62,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 34,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 100,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 81,
  "time_alive": 645,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 56,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "6705252cb24b4ef08a1a464363e4abde",
  "placement": 82,
  "time_alive": 413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 54,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 55,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 71,
  "time_alive": 867,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 12,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 72,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 52,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 71,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "64b9b28ccdc0482abfaac6266306248c",
  "placement": 91,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 5,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 79,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 51,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 86,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 70,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 43,
  "time_alive": 1265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 91,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "9252349b219b463d9eb26d8946f357bf",
  "placement": 93,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 32,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 40,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 54,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 67,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 44,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 40,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 61,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "da589d3557224582b9094375290bf0ed",
  "placement": 89,
  "time_alive": 297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 51,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 61,
  "time_alive": 1117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 88,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 82,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 47,
  "time_alive": 1208,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 18,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 55,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "01bcd2740f334fe1b7bdaec427994511",
  "placement": 36,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 48,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 89,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 25,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 46,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 97,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 62,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 47,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "af5bb73ca1de4061a1cf6e186d6b1c0b",
  "placement": 84,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 21,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 78,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 77,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 57,
  "time_alive": 1146,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 51,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 60,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 44,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 70,
  "time_alive": 699,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 86,
  "time_alive": 823,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 51,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 63,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 58,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 69,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 88,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 14,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700",
  "placement": 92,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 19,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 77,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 73,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 77,
  "time_alive": 856,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 78,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 75,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "8e66bee5c50b44869a16e3d59c270894",
  "placement": 62,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 22,
  "time_alive": 1385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 63,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 79,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 88,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 61,
  "time_alive": 1073,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 45,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 86,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "34a81ff07d214bd9b3e96504ee9d4962",
  "placement": 59,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 70,
  "time_alive": 919,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 99,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 96,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 35,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 75,
  "time_alive": 867,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 96,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 80,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 88,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 84,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 69,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 75,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 36,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 91,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 77,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 94,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "0cb19c787c994be1b0595786c1f62d47",
  "placement": 37,
  "time_alive": 1354,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 82,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 45,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 47,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 73,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 50,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 70,
  "time_alive": 937,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 53,
  "time_alive": 1183,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "0365bdf415e14386957195b0ecd8487c",
  "placement": 72,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 78,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 26,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 61,
  "time_alive": 1042,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 93,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 86,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 89,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 90,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "7abcbf346948458280f12e381a8e1832",
  "placement": 95,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 92,
  "time_alive": 728,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 49,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 55,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 30,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 53,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 91,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 76,
  "time_alive": 689,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "ac93a141290349afa522f0ba8ddc3715",
  "placement": 96,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 45,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 74,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 84,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 87,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 59,
  "time_alive": 1114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 84,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 60,
  "time_alive": 1092,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 74,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 97,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 69,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 54,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 89,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 82,
  "time_alive": 628,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 69,
  "time_alive": 887,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "76b369b495544d138ff60e26d32897f9",
  "placement": 83,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 90,
  "time_alive": 801,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 100,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 92,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 48,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 94,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 95,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01229121-c97e-4d69-b9c3-9c7fb40cd536",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 57,
  "time_alive": 1114,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 86,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "006ad139-90e3-47b8-8f4e-3d68bb6d485a",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 49,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092f0c7e-d7ce-478d-ab91-8fcdfc16a43d",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 71,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05ac24e9-368d-4943-8277-38ec6124934a",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 68,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "074b7e84-53a1-4e20-95a6-d4d049cc97a1",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 55,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02336ee0-8495-4fa7-b8a7-d1cda1ce5455",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 93,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02442ff1-4793-4787-827c-ff1ed107eb34",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "095d6613-6013-422c-80fc-573b6059e1b2",
  "team_id": "6bad2aa8c8214543b151f0c23ba1cedf",
  "placement": 73,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 6,
  "time_alive": 1502,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 51,
  "time_alive": 1283,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 41,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1531,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 6,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 4,
  "time_alive": 1481,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 10,
  "time_alive": 1476,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 12,
  "time_alive": 1462,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 9,
  "time_alive": 1503,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 29,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 5,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 1,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 37,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 58,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 3,
  "time_alive": 1529,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 5,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "4ae8cf3d65f740d49680e768a8d72391",
  "placement": 15,
  "time_alive": 1404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 15,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 3,
  "time_alive": 1530,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 22,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 42,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 2,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "f767b4cff36441fb83a6873163f8bfb2",
  "placement": 9,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 24,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 5,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 1,
  "time_alive": 1536,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 12,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 35,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "d30230ffecf94ad5b4614884fcf255cd",
  "placement": 24,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 80,
  "time_alive": 766,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 30,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 3,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 4,
  "time_alive": 1528,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 14,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "5dd3674a930d4538bdf998759b95c0cc",
  "placement": 12,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 14,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 11,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 11,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 58,
  "time_alive": 1145,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 19,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 16,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 94,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 1,
  "time_alive": 1531,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 29,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 20,
  "time_alive": 1459,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 1,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 72,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 19,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 97,
  "time_alive": 155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 6,
  "time_alive": 1522,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 17,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 61,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 2,
  "time_alive": 1524,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 63,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 48,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 25,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 11,
  "time_alive": 1458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 6,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 59,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 31,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 16,
  "time_alive": 1443,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 24,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 47,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 2,
  "time_alive": 1509,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 11,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 95,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 20,
  "time_alive": 1434,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 36,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 32,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "3b06ba4fc85242a5ae5e66abbd98ea08",
  "placement": 20,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 9,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 19,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 77,
  "time_alive": 829,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 40,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 44,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 8,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 17,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 2,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 25,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 94,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 89,
  "time_alive": 217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "8e9a79684aec42e990c3dca87521ad9b",
  "placement": 18,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 18,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 54,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 8,
  "time_alive": 1488,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 54,
  "time_alive": 1157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 8,
  "time_alive": 1468,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 53,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 61,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 73,
  "time_alive": 850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 2,
  "time_alive": 1536,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 31,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 26,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "0f390cff5a5241b8b8a6667f8bfe8d65",
  "placement": 25,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 35,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 50,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 19,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 5,
  "time_alive": 1524,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 48,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "336ab331628044619724361709cd23bf",
  "placement": 22,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 20,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 35,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 13,
  "time_alive": 1459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 16,
  "time_alive": 1473,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 61,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "7f00d80625a24d31bd5872019acbb88c",
  "placement": 81,
  "time_alive": 544,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 3,
  "time_alive": 1517,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 52,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 10,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 67,
  "time_alive": 954,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 58,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "4d892d4c07944b60b01a6da65a22ed21",
  "placement": 7,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 8,
  "time_alive": 1495,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 9,
  "time_alive": 1495,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 91,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 28,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 94,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 52,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 4,
  "time_alive": 1508,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 40,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 24,
  "time_alive": 1407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 13,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "b0687775cb14439799d0120f53d67778",
  "placement": 65,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 53,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 24,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 90,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 11,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 30,
  "time_alive": 1394,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 38,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 83,
  "time_alive": 561,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 89,
  "time_alive": 515,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 7,
  "time_alive": 1489,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 8,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 37,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "2511603ed9a5419f933870f91b984a21",
  "placement": 69,
  "time_alive": 858,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 42,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1467,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 21,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1477,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 74,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 70,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 99,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 70,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 9,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 17,
  "time_alive": 1473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 46,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb",
  "placement": 11,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 22,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 85,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 70,
  "time_alive": 899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 86,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 7,
  "time_alive": 1477,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 27,
  "time_alive": 1384,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 38,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 90,
  "time_alive": 376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 66,
  "time_alive": 966,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 10,
  "time_alive": 1460,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "4d52f60ffed24a31be23f32439eb285b",
  "placement": 13,
  "time_alive": 1409,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 5,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 92,
  "time_alive": 322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 78,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 10,
  "time_alive": 1501,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 50,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a3dd7923e3b4400091159ecdceb0c449",
  "placement": 43,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 87,
  "time_alive": 460,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 91,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 17,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 13,
  "time_alive": 1485,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 24,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 75,
  "time_alive": 621,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 57,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 45,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 5,
  "time_alive": 1493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 92,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 15,
  "time_alive": 1440,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 54,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 32,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 94,
  "time_alive": 282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 82,
  "time_alive": 774,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 18,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 16,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "7c45bd29f2224eb7af7673ffd222beb3",
  "placement": 30,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 58,
  "time_alive": 1148,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 6,
  "time_alive": 1509,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 46,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 44,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 41,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "c374da870c4745bf8cbc53c3978eadc6",
  "placement": 33,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 78,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 14,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 71,
  "time_alive": 874,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 22,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 63,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "829b509f26964205acf10f463a743a14",
  "placement": 29,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 30,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 12,
  "time_alive": 1491,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 26,
  "time_alive": 1397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 33,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 78,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 58,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 49,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 42,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 94,
  "time_alive": 262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 34,
  "time_alive": 1373,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 4,
  "time_alive": 1492,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "d94a396d14584886bbab0cb6dce96fa8",
  "placement": 85,
  "time_alive": 458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 73,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 59,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 28,
  "time_alive": 1376,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 96,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 87,
  "time_alive": 305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "5f41699036514527a2d5c9a4ab7ac7fa",
  "placement": 1,
  "time_alive": 1509,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 66,
  "time_alive": 1060,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 18,
  "time_alive": 1448,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 88,
  "time_alive": 625,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 64,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 85,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "898aa1d15d3644c0b4b93db4d58b5866",
  "placement": 3,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 23,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 46,
  "time_alive": 1330,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 31,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 61,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 39,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "669d255a8f3b425b844697fe9257c43d",
  "placement": 10,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 37,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 26,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 66,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 14,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 59,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6",
  "placement": 42,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 40,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 16,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 81,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 72,
  "time_alive": 848,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 9,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "c62fd294dcd243208e87017e186ad4cc",
  "placement": 86,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 7,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 64,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 84,
  "time_alive": 679,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 7,
  "time_alive": 1516,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 83,
  "time_alive": 404,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 71,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 64,
  "time_alive": 1122,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 13,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 27,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 75,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 36,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "fd28e0b2822e4f6c99856ce6ea02b9a6",
  "placement": 67,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 56,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 4,
  "time_alive": 1525,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 40,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 69,
  "time_alive": 905,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 92,
  "time_alive": 141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "b4dd2c18e86649d58fd7d5480c192304",
  "placement": 28,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 27,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 32,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 14,
  "time_alive": 1449,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 80,
  "time_alive": 504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 53,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 46,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 79,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 74,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 34,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 70,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 3,
  "time_alive": 1492,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9",
  "placement": 48,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 13,
  "time_alive": 1472,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 76,
  "time_alive": 816,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 87,
  "time_alive": 641,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 26,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 77,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 80,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 69,
  "time_alive": 922,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 10,
  "time_alive": 1492,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 51,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 62,
  "time_alive": 1108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 86,
  "time_alive": 329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "78b7d587fe9145ed9c5472999e5e10dc",
  "placement": 14,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 90,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 100,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 32,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 2,
  "time_alive": 1531,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a7a0d378c5af429c8c56d11ba16c1bb5",
  "placement": 66,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 96,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 22,
  "time_alive": 1436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 4,
  "time_alive": 1498,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 71,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 73,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "247a94da748a4530b9d587565c9587d5",
  "placement": 74,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 21,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 55,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 49,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 46,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "f5e61b9a6e2a4f2aa9fce74a0b5860e7",
  "placement": 12,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da",
  "placement": 33,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da",
  "placement": 38,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da",
  "placement": 79,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da",
  "placement": 89,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da",
  "placement": 18,
  "time_alive": 1432,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "35b7de8022064a2c8f8a97a071cc81da",
  "placement": 32,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "124961ecda584b8c9a4b344114aa3715",
  "placement": 45,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "124961ecda584b8c9a4b344114aa3715",
  "placement": 66,
  "time_alive": 1111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "124961ecda584b8c9a4b344114aa3715",
  "placement": 23,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "124961ecda584b8c9a4b344114aa3715",
  "placement": 60,
  "time_alive": 1141,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "124961ecda584b8c9a4b344114aa3715",
  "placement": 70,
  "time_alive": 879,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "124961ecda584b8c9a4b344114aa3715",
  "placement": 19,
  "time_alive": 1391,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 84,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 23,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 80,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 77,
  "time_alive": 552,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 69,
  "time_alive": 981,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 39,
  "time_alive": 1349,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 16,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 28,
  "time_alive": 1410,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 85,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "3fb44adba289439b84d40b5bc8964122",
  "placement": 87,
  "time_alive": 289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 70,
  "time_alive": 914,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 86,
  "time_alive": 637,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 55,
  "time_alive": 1111,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 32,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 75,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "e6a4fa7ef5314a678e1e9d6191c17fe5",
  "placement": 17,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 25,
  "time_alive": 1429,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 77,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 47,
  "time_alive": 1240,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 55,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 23,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "420776fcae9e4d6e88b40dfb2daea630",
  "placement": 77,
  "time_alive": 597,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 63,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 82,
  "time_alive": 758,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 76,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 27,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 25,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "36c43327deea4841bd7cadbfe662d8b6",
  "placement": 40,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 85,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 62,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 18,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 82,
  "time_alive": 451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 21,
  "time_alive": 1423,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "b7bc1c1e13874d9b9f47c452241c52e2",
  "placement": 45,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 26,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 56,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 38,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 29,
  "time_alive": 1398,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 82,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a0b4479395364e0a9979014867c6835d",
  "placement": 66,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 55,
  "time_alive": 1152,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 39,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 52,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 30,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 51,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "42664b0ddab14482add283c14026faea",
  "placement": 26,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 67,
  "time_alive": 1008,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 96,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 15,
  "time_alive": 1444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 19,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 56,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "42a0e67667af4dbc9b6769a069227807",
  "placement": 92,
  "time_alive": 121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 34,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 72,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 74,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 38,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 88,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a8fb52a615814c459516416714439bd4",
  "placement": 21,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 43,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 41,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 43,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 47,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 22,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "ac65546008b64c8fbf75e596225ebde4",
  "placement": 87,
  "time_alive": 439,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 48,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 36,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 97,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 93,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 27,
  "time_alive": 1401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "f69ba17b96de40cf937d264f052f6652",
  "placement": 34,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 60,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 17,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 57,
  "time_alive": 1097,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 51,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 38,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "205afc681a324533907d65f72933f116",
  "placement": 68,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 12,
  "time_alive": 1474,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 75,
  "time_alive": 827,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 33,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 59,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 72,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "28a71edd292342e4b6fd9fba56b75ebc",
  "placement": 73,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a39887890b4b4041b35f47b2cb60b248",
  "placement": 31,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a39887890b4b4041b35f47b2cb60b248",
  "placement": 47,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a39887890b4b4041b35f47b2cb60b248",
  "placement": 35,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a39887890b4b4041b35f47b2cb60b248",
  "placement": 73,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a39887890b4b4041b35f47b2cb60b248",
  "placement": 65,
  "time_alive": 1062,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a39887890b4b4041b35f47b2cb60b248",
  "placement": 55,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 52,
  "time_alive": 1161,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 29,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 60,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 76,
  "time_alive": 594,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 40,
  "time_alive": 1340,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "72ea58d5d80f493c91949cff6bc332a3",
  "placement": 83,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "8992727586fa45d9960336a40b2a686e",
  "placement": 92,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "8992727586fa45d9960336a40b2a686e",
  "placement": 8,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "8992727586fa45d9960336a40b2a686e",
  "placement": 64,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "8992727586fa45d9960336a40b2a686e",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "8992727586fa45d9960336a40b2a686e",
  "placement": 62,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "8992727586fa45d9960336a40b2a686e",
  "placement": 91,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 50,
  "time_alive": 1164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 21,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 42,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 43,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 91,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "3275d124096b4de0b12dd78d524111d3",
  "placement": 84,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 72,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 25,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 67,
  "time_alive": 977,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 41,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 64,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "12367c497be945b593933af780d76551",
  "placement": 47,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 29,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 20,
  "time_alive": 1442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 56,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 90,
  "time_alive": 206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 49,
  "time_alive": 1257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "2b9fb49929344c3d8fb60c0d1d0fc067",
  "placement": 90,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 71,
  "time_alive": 902,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 33,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 44,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 57,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 81,
  "time_alive": 446,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 41,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 65,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 27,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 89,
  "time_alive": 592,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 49,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "60378b7e065647e8bda9b87ac4368811",
  "placement": 33,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "b5f7ba6dce9d48779103acd45b40f50d",
  "placement": 28,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "b5f7ba6dce9d48779103acd45b40f50d",
  "placement": 44,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "b5f7ba6dce9d48779103acd45b40f50d",
  "placement": 53,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "b5f7ba6dce9d48779103acd45b40f50d",
  "placement": 53,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "b5f7ba6dce9d48779103acd45b40f50d",
  "placement": 34,
  "time_alive": 1386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "b5f7ba6dce9d48779103acd45b40f50d",
  "placement": 79,
  "time_alive": 562,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "daee5c965bb34772866061a09a180691",
  "placement": 47,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "daee5c965bb34772866061a09a180691",
  "placement": 61,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "daee5c965bb34772866061a09a180691",
  "placement": 30,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "daee5c965bb34772866061a09a180691",
  "placement": 85,
  "time_alive": 342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "daee5c965bb34772866061a09a180691",
  "placement": 54,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "daee5c965bb34772866061a09a180691",
  "placement": 35,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 93,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 53,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 63,
  "time_alive": 1018,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 74,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 28,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 36,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 95,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 79,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 73,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 37,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 67,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "db5f3582caed47b18d3bd1a69571e944",
  "placement": 23,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 76,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 99,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 92,
  "time_alive": 419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 45,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 31,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "16b920cd3dd9497aa817288da5e5b1d3",
  "placement": 82,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9",
  "placement": 44,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9",
  "placement": 87,
  "time_alive": 597,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9",
  "placement": 75,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9",
  "placement": 23,
  "time_alive": 1430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9",
  "placement": 79,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "34754b87e60a4676b2ac5d04435f83c9",
  "placement": 64,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 82,
  "time_alive": 754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 34,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 39,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 79,
  "time_alive": 528,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 71,
  "time_alive": 875,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "3ce9c64d8286489480d1aceeb206589a",
  "placement": 49,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 91,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 60,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 96,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 95,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 20,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "55e75bc484ae48aca604b2d3d9e203fb",
  "placement": 59,
  "time_alive": 1150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 81,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 81,
  "time_alive": 768,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 54,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 21,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 60,
  "time_alive": 1110,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "e256124d31564fb881d77857d9fee45d",
  "placement": 88,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 86,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 71,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 37,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 56,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 90,
  "time_alive": 206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 37,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 41,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 78,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 68,
  "time_alive": 927,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 50,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 80,
  "time_alive": 448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 31,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 46,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 83,
  "time_alive": 695,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 36,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 78,
  "time_alive": 544,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "09a2ea47bf2a4082981f21cdf557e113",
  "placement": 57,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 88,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 88,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 50,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 39,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 68,
  "time_alive": 1050,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "6e8a9c7428e14f62bc3f2e03b070a8db",
  "placement": 44,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 68,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 48,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 45,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 65,
  "time_alive": 991,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 52,
  "time_alive": 1183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "4baf838180fa44faa2c8f9746e3abf89",
  "placement": 76,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "a495b3406d90400895a6036b971813a4",
  "placement": 51,
  "time_alive": 1163,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "a495b3406d90400895a6036b971813a4",
  "placement": 57,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "a495b3406d90400895a6036b971813a4",
  "placement": 62,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "a495b3406d90400895a6036b971813a4",
  "placement": 48,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "a495b3406d90400895a6036b971813a4",
  "placement": 57,
  "time_alive": 1126,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "a495b3406d90400895a6036b971813a4",
  "placement": 89,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 39,
  "time_alive": 1323,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 80,
  "time_alive": 794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 65,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 52,
  "time_alive": 1200,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 93,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 51,
  "time_alive": 1233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 98,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 58,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 69,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 35,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 84,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 63,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 97,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 43,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 59,
  "time_alive": 1067,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "09c5b6f745db42cfaa0526d86b1d15cb",
  "placement": 81,
  "time_alive": 493,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 77,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 49,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 95,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 88,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 45,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "acfc51361aff4c968f3d95dac5dce379",
  "placement": 78,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 36,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 68,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 86,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 68,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 76,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 50,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "cd3a819b76d44b719a425dd02ffd542d",
  "placement": 74,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "cd3a819b76d44b719a425dd02ffd542d",
  "placement": 93,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "cd3a819b76d44b719a425dd02ffd542d",
  "placement": 61,
  "time_alive": 1039,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "cd3a819b76d44b719a425dd02ffd542d",
  "placement": 84,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "cd3a819b76d44b719a425dd02ffd542d",
  "placement": 42,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "cd3a819b76d44b719a425dd02ffd542d",
  "placement": 60,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 89,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 65,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 72,
  "time_alive": 865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 63,
  "time_alive": 1040,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 55,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "93630d88fb4b4d249491132bd080bd87",
  "placement": 56,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "0601d03341f44403995a457466cf3bdf",
  "placement": 75,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "0601d03341f44403995a457466cf3bdf",
  "placement": 67,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "0601d03341f44403995a457466cf3bdf",
  "placement": 83,
  "time_alive": 718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "0601d03341f44403995a457466cf3bdf",
  "placement": 83,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "07ae6877-fd8a-4157-86a9-19697c22e669",
  "team_id": "0601d03341f44403995a457466cf3bdf",
  "placement": 43,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "02f0c17b-f57b-400c-8ad4-13c609922a33",
  "team_id": "0601d03341f44403995a457466cf3bdf",
  "placement": 62,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 54,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8",
  "placement": 84,
  "time_alive": 685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "17676b42-5c09-4339-85c5-d2b3cbc36ef0",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 62,
  "time_alive": 1127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 69,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "88e9cba819cf4580b7d4d45f343dac31",
  "placement": 93,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06a66152-fcf4-4f17-b6cb-cd86bb2adae3",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 98,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05707f12-3169-41dd-9e02-3f6350f55fc0",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 98,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ad9ac2-1d59-4fb6-b3a7-050ff02b01ec",
  "team_id": "c5cf2a8aa24649768f1edd9a880d41e9",
  "placement": 91,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 82,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 15,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 1,
  "time_alive": 1532,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 1,
  "time_alive": 1546,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 1,
  "time_alive": 1545,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 12,
  "time_alive": 1431,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 11,
  "time_alive": 1449,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 4,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 9,
  "time_alive": 1449,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 43,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 54,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "f088192824034fcaac6b421cb8499490",
  "placement": 6,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 42,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 9,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 15,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 2,
  "time_alive": 1546,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 8,
  "time_alive": 1486,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "ea3fac816e08412698982711b838f27a",
  "placement": 75,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 58,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 25,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 46,
  "time_alive": 1261,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 25,
  "time_alive": 1363,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 20,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70",
  "placement": 3,
  "time_alive": 1510,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 5,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 51,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 19,
  "time_alive": 1409,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 77,
  "time_alive": 821,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 14,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "9868429b133a42b8a43f737887da4673",
  "placement": 4,
  "time_alive": 1497,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 19,
  "time_alive": 1425,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 57,
  "time_alive": 1142,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 2,
  "time_alive": 1532,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 23,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 11,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 72,
  "time_alive": 471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 87,
  "time_alive": 458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 11,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 84,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 39,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 31,
  "time_alive": 1368,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "efd4b17204c346aaa1672add49529a6c",
  "placement": 2,
  "time_alive": 1538,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 18,
  "time_alive": 1427,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 31,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 4,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 50,
  "time_alive": 1157,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 55,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "9f687e479cad4be18dad868bea874c20",
  "placement": 7,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 21,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 14,
  "time_alive": 1420,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 53,
  "time_alive": 1193,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 16,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 22,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 18,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 90,
  "time_alive": 316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 12,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 12,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 66,
  "time_alive": 935,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 10,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 35,
  "time_alive": 1350,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 8,
  "time_alive": 1467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 3,
  "time_alive": 1488,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 38,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 82,
  "time_alive": 686,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 46,
  "time_alive": 1294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "b47ad8c4d637496eba7cafb8f081107d",
  "placement": 8,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 35,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 5,
  "time_alive": 1465,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 86,
  "time_alive": 691,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 11,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 16,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "c0ab19f7e25d4aa9bbadf5719bf3692f",
  "placement": 29,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 17,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 1,
  "time_alive": 1492,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 91,
  "time_alive": 327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 84,
  "time_alive": 654,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "063227a1-4c8a-482a-928f-b49da7f126d1",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 18,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "043250c2-7383-43c4-9128-8746c33edb3c",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 93,
  "time_alive": 155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c560c11-5da7-4070-819b-cfc7622be7f2",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 80,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09edc0cb-dbff-4b6c-89cd-43b53fe3cfc9",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 23,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "12540df7-22c5-4568-9f7d-e9b14ec12997",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 7,
  "time_alive": 1466,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "142245f1-efa6-4266-8230-5d7adbbf02b3",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d",
  "placement": 6,
  "time_alive": 1468,
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
    