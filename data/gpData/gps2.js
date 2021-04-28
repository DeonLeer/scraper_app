const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 19,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 67,
  "time_alive": 1021,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 16,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 30,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 80,
  "time_alive": 473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 11,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 72,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 21,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 44,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 29,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 91,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 52,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 40,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 80,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 27,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 84,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 78,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 79,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 15,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 8,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 38,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 66,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 50,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 28,
  "time_alive": 1230,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 96,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 69,
  "time_alive": 1004,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 18,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 37,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 9,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 83,
  "time_alive": 436,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 24,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 51,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 62,
  "time_alive": 1048,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 53,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 98,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "ded75fa3bfb64c35a960270863127015",
  "placement": 24,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 69,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 93,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 42,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 72,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 66,
  "time_alive": 904,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 59,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 80,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 64,
  "time_alive": 968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 47,
  "time_alive": 1220,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 24,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 21,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 30,
  "time_alive": 1220,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 66,
  "time_alive": 1025,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 43,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 58,
  "time_alive": 1084,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 51,
  "time_alive": 1072,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 12,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 36,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 31,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 97,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 63,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 20,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 45,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "5159be897d8b419c97ea4b9a21d015fa",
  "placement": 73,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 50,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 57,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 100,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 55,
  "time_alive": 1049,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 63,
  "time_alive": 1027,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 24,
  "time_alive": 1339,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 6,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 96,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 46,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 41,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 69,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "e64534056f264f40af69ec87d0644027",
  "placement": 32,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 79,
  "time_alive": 611,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 30,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 40,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 13,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 14,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 25,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 90,
  "time_alive": 422,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 34,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 32,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 64,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 87,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1",
  "placement": 76,
  "time_alive": 413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 63,
  "time_alive": 1046,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 64,
  "time_alive": 1054,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 30,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 90,
  "time_alive": 358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 76,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 44,
  "time_alive": 1180,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 94,
  "time_alive": 273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 14,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 53,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 88,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 56,
  "time_alive": 1010,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "9f7de92d4cac429695e4a1b6d4569e46",
  "placement": 79,
  "time_alive": 378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 45,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 91,
  "time_alive": 362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 85,
  "time_alive": 258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 22,
  "time_alive": 1296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 85,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 97,
  "time_alive": 65,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 82,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 95,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 98,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 4,
  "time_alive": 1412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 24,
  "time_alive": 1293,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 64,
  "time_alive": 678,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 9,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 10,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 32,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 21,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 84,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 57,
  "time_alive": 980,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 81,
  "time_alive": 716,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 89,
  "time_alive": 419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 95,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 81,
  "time_alive": 392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "a14ddcabdb414d5f95dce353edd15b8f",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 34,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 88,
  "time_alive": 415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 77,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 50,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 30,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 22,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 58,
  "time_alive": 981,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 32,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 48,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 76,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 8,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "c463a13ee7c944249ca86aa288188028",
  "placement": 40,
  "time_alive": 1060,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 60,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 60,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 13,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 75,
  "time_alive": 764,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 53,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 49,
  "time_alive": 1067,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 37,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 62,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 66,
  "time_alive": 993,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 62,
  "time_alive": 945,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 62,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6",
  "placement": 33,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 92,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 83,
  "time_alive": 556,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 87,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 23,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 36,
  "time_alive": 1249,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 73,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 71,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 48,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 86,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 30,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 65,
  "time_alive": 755,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "5d43e5dd854d413ea9cfe193285a1e52",
  "placement": 67,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 33,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 78,
  "time_alive": 648,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 44,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 62,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 38,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 89,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 54,
  "time_alive": 1086,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 33,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 22,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 70,
  "time_alive": 710,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 83,
  "time_alive": 364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "bf9a368f3ff64e16a045b46fca537627",
  "placement": 86,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 86,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 71,
  "time_alive": 847,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 45,
  "time_alive": 1202,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 42,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 92,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 3,
  "time_alive": 1416,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 57,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 85,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 33,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 85,
  "time_alive": 337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 65,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 81,
  "time_alive": 596,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 41,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 88,
  "time_alive": 397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 31,
  "time_alive": 1266,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 47,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 48,
  "time_alive": 1174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 56,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 79,
  "time_alive": 621,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 74,
  "time_alive": 637,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 59,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "524b4209ae3648eba7dc972b7d1dc8eb",
  "placement": 58,
  "time_alive": 826,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 25,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 85,
  "time_alive": 455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 80,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 66,
  "time_alive": 908,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 49,
  "time_alive": 1134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 70,
  "time_alive": 867,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 84,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 80,
  "time_alive": 412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 48,
  "time_alive": 1130,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261",
  "placement": 48,
  "time_alive": 995,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 70,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 61,
  "time_alive": 1076,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 91,
  "time_alive": 231,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 73,
  "time_alive": 797,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 82,
  "time_alive": 372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 37,
  "time_alive": 1214,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 61,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 55,
  "time_alive": 1134,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 51,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 57,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 89,
  "time_alive": 255,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "23df14f270bd492095edb24472a482f1",
  "placement": 84,
  "time_alive": 337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 80,
  "time_alive": 605,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 77,
  "time_alive": 704,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 89,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 94,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 83,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 69,
  "time_alive": 650,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 97,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 71,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 59,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 60,
  "time_alive": 875,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "b9ca414d77564fe29c9c72f01acc8695",
  "placement": 92,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 95,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 72,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 83,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 41,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 28,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 75,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 98,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 88,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 92,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 50,
  "time_alive": 1106,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 25,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "261333f17ecf42cb98022c87baaef306",
  "placement": 98,
  "time_alive": 92,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 23,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 75,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 75,
  "time_alive": 412,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 53,
  "time_alive": 1069,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 13,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 93,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 56,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 100,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 89,
  "time_alive": 310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 46,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 37,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "0a9fd8d8631c4776924e564b9386db32",
  "placement": 94,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 82,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 72,
  "time_alive": 512,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 76,
  "time_alive": 715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 45,
  "time_alive": 1178,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 18,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 100,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 81,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 27,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 55,
  "time_alive": 1077,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 73,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "97ac5aa73cc04b38a7d161b45d48d46b",
  "placement": 93,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 75,
  "time_alive": 719,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 79,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 55,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 82,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 68,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 40,
  "time_alive": 1194,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 93,
  "time_alive": 285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 45,
  "time_alive": 1211,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 69,
  "time_alive": 887,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 67,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 70,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 62,
  "time_alive": 726,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 90,
  "time_alive": 308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 56,
  "time_alive": 1149,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 37,
  "time_alive": 1270,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 92,
  "time_alive": 332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 90,
  "time_alive": 279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 62,
  "time_alive": 921,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 89,
  "time_alive": 428,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 72,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 85,
  "time_alive": 396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 61,
  "time_alive": 985,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 85,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "204b7eaba1254164936b7c307256d56f",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 67,
  "time_alive": 978,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 94,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 94,
  "time_alive": 182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 86,
  "time_alive": 446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 79,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 88,
  "time_alive": 263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 79,
  "time_alive": 771,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 54,
  "time_alive": 1154,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 91,
  "time_alive": 279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 79,
  "time_alive": 435,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 92,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 83,
  "time_alive": 349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 68,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 82,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 59,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 99,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 73,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 81,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 74,
  "time_alive": 838,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 99,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 99,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 98,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 26,
  "time_alive": 1282,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 53,
  "time_alive": 916,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 51,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 52,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 82,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 78,
  "time_alive": 670,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 29,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 74,
  "time_alive": 604,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 47,
  "time_alive": 1197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 94,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 64,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 83,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 43,
  "time_alive": 1168,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "fde7e5a732234af48ae3e41c74ccead4",
  "placement": 80,
  "time_alive": 375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 99,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 89,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 49,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 61,
  "time_alive": 964,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 44,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 98,
  "time_alive": 53,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 59,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 92,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 90,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 87,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 31,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "8904b895bf5446c7bdf51f987b60c935",
  "placement": 65,
  "time_alive": 623,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 93,
  "time_alive": 211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 76,
  "time_alive": 734,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 93,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 71,
  "time_alive": 833,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 96,
  "time_alive": 52,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 92,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 40,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 13,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 82,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 97,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 99,
  "time_alive": 81,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "05525376dfb84a678be68920cae53d1e",
  "placement": 90,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 58,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 33,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 100,
  "time_alive": 66,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 54,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 78,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 70,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 85,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 16,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 72,
  "time_alive": 675,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 64,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041",
  "placement": 46,
  "time_alive": 1013,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 61,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 96,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 70,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 89,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 86,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 41,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 88,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 58,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 33,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 68,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 82,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "3c3d16595832452cb24cda87eb1c4c36",
  "placement": 59,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 1,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 8,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 23,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 27,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 98,
  "time_alive": 38,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 9,
  "time_alive": 1372,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1452,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 2,
  "time_alive": 1378,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 23,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 17,
  "time_alive": 1330,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 4,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8",
  "placement": 2,
  "time_alive": 1428,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 38,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 93,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 54,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 6,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 2,
  "time_alive": 1439,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 1,
  "time_alive": 1404,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 91,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 77,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 85,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 2,
  "time_alive": 1397,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 19,
  "time_alive": 1333,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "bae21bcc52734522bd773f5d9b712734",
  "placement": 19,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 70,
  "time_alive": 825,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 58,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 1,
  "time_alive": 1457,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 30,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 4,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 95,
  "time_alive": 113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 15,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 17,
  "time_alive": 1297,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 80,
  "time_alive": 514,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 68,
  "time_alive": 760,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 2,
  "time_alive": 1454,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "44a112b04dc240cbba85518f99b7ff35",
  "placement": 63,
  "time_alive": 687,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 36,
  "time_alive": 1287,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 89,
  "time_alive": 276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 29,
  "time_alive": 1311,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 72,
  "time_alive": 841,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 62,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 8,
  "time_alive": 1381,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 1,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 93,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 8,
  "time_alive": 1342,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 4,
  "time_alive": 1393,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 50,
  "time_alive": 1151,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "b76a2c65b723478aa42a328bff8319c8",
  "placement": 38,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 91,
  "time_alive": 198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 75,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 46,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 1,
  "time_alive": 1463,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 49,
  "time_alive": 1168,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 21,
  "time_alive": 1317,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 23,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 1,
  "time_alive": 1378,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 17,
  "time_alive": 1301,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 25,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 71,
  "time_alive": 773,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "c07d728876a2486bb6ac06dd45b22505",
  "placement": 58,
  "time_alive": 747,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 8,
  "time_alive": 1367,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 82,
  "time_alive": 735,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 18,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 18,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 33,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 40,
  "time_alive": 1254,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 18,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1376,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 75,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 64,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 7,
  "time_alive": 1408,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "501b47666d0b42609ba72a04c2cdc300",
  "placement": 5,
  "time_alive": 1321,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 83,
  "time_alive": 469,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 37,
  "time_alive": 1273,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 14,
  "time_alive": 1377,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 3,
  "time_alive": 1459,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 15,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 74,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 2,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 4,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 38,
  "time_alive": 1249,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 18,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 36,
  "time_alive": 1260,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "2dd649dff7294ff1b5b50a94d5aec230",
  "placement": 17,
  "time_alive": 1279,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 18,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 17,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1392,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 49,
  "time_alive": 1164,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 3,
  "time_alive": 1382,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 6,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1416,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 10,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 28,
  "time_alive": 1278,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 50,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 16,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "b3956d8d751347f280d599eb69a1f292",
  "placement": 11,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 82,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 6,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 28,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 14,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 31,
  "time_alive": 1289,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 83,
  "time_alive": 471,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 14,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 61,
  "time_alive": 1055,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 81,
  "time_alive": 476,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 7,
  "time_alive": 1377,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 72,
  "time_alive": 751,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "c31c186ab48142b796d8cf87158b110c",
  "placement": 7,
  "time_alive": 1317,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 48,
  "time_alive": 1191,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 34,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 35,
  "time_alive": 1286,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 25,
  "time_alive": 1320,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 21,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 57,
  "time_alive": 985,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 6,
  "time_alive": 1430,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 28,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 5,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 14,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 17,
  "time_alive": 1347,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "c51739c00bec413684cc01a1dd113e66",
  "placement": 6,
  "time_alive": 1318,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 13,
  "time_alive": 1348,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 9,
  "time_alive": 1413,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 33,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 71,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 14,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 12,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 17,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 27,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 13,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 5,
  "time_alive": 1390,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 13,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "447fb739f8484d5c923c21614ed63d86",
  "placement": 34,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 11,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 26,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 40,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 87,
  "time_alive": 490,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 65,
  "time_alive": 976,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 29,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 25,
  "time_alive": 1353,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 15,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 9,
  "time_alive": 1330,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 95,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 35,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0",
  "placement": 1,
  "time_alive": 1428,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 71,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 5,
  "time_alive": 1463,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 83,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 64,
  "time_alive": 1005,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 54,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 22,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 8,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 8,
  "time_alive": 1324,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 68,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 1,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 81,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "845c762391ab4b029767c50f13f92a07",
  "placement": 10,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 19,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 70,
  "time_alive": 847,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 8,
  "time_alive": 1406,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 27,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 54,
  "time_alive": 1017,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 16,
  "time_alive": 1388,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 25,
  "time_alive": 1279,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 64,
  "time_alive": 869,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 10,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 56,
  "time_alive": 1017,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 47,
  "time_alive": 1005,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 44,
  "time_alive": 1255,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 71,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 76,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 17,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 1,
  "time_alive": 1439,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 51,
  "time_alive": 1121,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 13,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 18,
  "time_alive": 1295,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 11,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 94,
  "time_alive": 179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 37,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "fb46493d75c8465b88c60e35d879e142",
  "placement": 22,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 33,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 46,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 22,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 28,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 10,
  "time_alive": 1348,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 13,
  "time_alive": 1360,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 72,
  "time_alive": 888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 95,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 53,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 6,
  "time_alive": 1384,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 29,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 15,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 67,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 10,
  "time_alive": 1396,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 21,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 23,
  "time_alive": 1311,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 78,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 70,
  "time_alive": 955,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 21,
  "time_alive": 1290,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 70,
  "time_alive": 801,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 89,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 38,
  "time_alive": 1222,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "b1f965ee44ce403aae5aaa7e2ab20875",
  "placement": 23,
  "time_alive": 1259,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 80,
  "time_alive": 648,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 29,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 5,
  "time_alive": 1431,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 28,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 2,
  "time_alive": 1404,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 84,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 5,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 42,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 37,
  "time_alive": 1240,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 82,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "69edf025fb4f4ceaa21581e11ef92899",
  "placement": 78,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 26,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 47,
  "time_alive": 1181,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 27,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 7,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 6,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 69,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 55,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 75,
  "time_alive": 530,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 1,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 28,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 15,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "60f9ba46b57c4d979c0caa5fbde7e072",
  "placement": 14,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 5,
  "time_alive": 1386,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 50,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 51,
  "time_alive": 1155,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 42,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 17,
  "time_alive": 1323,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 42,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 90,
  "time_alive": 369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 84,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 45,
  "time_alive": 1158,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 71,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 58,
  "time_alive": 1008,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "b04403f1a3474fc59f439a22b5bbde66",
  "placement": 21,
  "time_alive": 1272,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 14,
  "time_alive": 1345,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 13,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 7,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 89,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 84,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 5,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 28,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 96,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 43,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 67,
  "time_alive": 775,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 65,
  "time_alive": 842,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46",
  "placement": 16,
  "time_alive": 1280,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 15,
  "time_alive": 1342,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 23,
  "time_alive": 1345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 34,
  "time_alive": 1289,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 54,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 5,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 81,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 58,
  "time_alive": 1066,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 57,
  "time_alive": 1090,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 62,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 51,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 6,
  "time_alive": 1408,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "2408817916da4300af180e2917578d46",
  "placement": 49,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 3,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 54,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 24,
  "time_alive": 1346,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 75,
  "time_alive": 783,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 25,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 59,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 74,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 9,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 10,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 26,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 21,
  "time_alive": 1315,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "7dfdfc8bd60246f6844ba076cdb22de7",
  "placement": 42,
  "time_alive": 1140,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 31,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 3,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 84,
  "time_alive": 414,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 65,
  "time_alive": 1002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 47,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 15,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 5,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 82,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 73,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 11,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 8,
  "time_alive": 1403,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "2987a7edce3d4e77b3755422a86528e8",
  "placement": 66,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 94,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 62,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 47,
  "time_alive": 1208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 45,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 11,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 86,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 3,
  "time_alive": 1452,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 39,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 92,
  "time_alive": 181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 92,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 1,
  "time_alive": 1454,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "41143f5b6776452a8f75fdf1c95748c3",
  "placement": 36,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 93,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 45,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 5,
  "time_alive": 1436,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 80,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 4,
  "time_alive": 1401,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 12,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 91,
  "time_alive": 265,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 33,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 84,
  "time_alive": 334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 25,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "ddcad38f85c245b785c8812e7592a6a7",
  "placement": 48,
  "time_alive": 991,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 7,
  "time_alive": 1379,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 99,
  "time_alive": 48,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 20,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 44,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 36,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 3,
  "time_alive": 1401,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 24,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 87,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 79,
  "time_alive": 578,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 19,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 63,
  "time_alive": 873,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 29,
  "time_alive": 1223,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 64,
  "time_alive": 930,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 32,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 3,
  "time_alive": 1445,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 60,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 96,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 36,
  "time_alive": 1267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 57,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 16,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 29,
  "time_alive": 1276,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 3,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 27,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "f278627e1d7a405bb08ad0bbfa42fbff",
  "placement": 24,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 22,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 48,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 61,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 4,
  "time_alive": 1439,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 9,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 39,
  "time_alive": 1255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 76,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 13,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 4,
  "time_alive": 1359,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 42,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 28,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "245cd346263c435cbc7d230afa466fe5",
  "placement": 61,
  "time_alive": 698,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 28,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 36,
  "time_alive": 1276,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 17,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 39,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 77,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 63,
  "time_alive": 873,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 31,
  "time_alive": 1327,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 56,
  "time_alive": 1090,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 7,
  "time_alive": 1344,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 40,
  "time_alive": 1227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 57,
  "time_alive": 1009,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "6421b6febc38480e9e37d4adbd40d4ee",
  "placement": 59,
  "time_alive": 724,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 68,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 33,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 13,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 19,
  "time_alive": 1317,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 92,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 7,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 98,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 95,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 36,
  "time_alive": 1248,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 77,
  "time_alive": 643,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "c0b74ba27a36427f88ee7063a43c203b",
  "placement": 75,
  "time_alive": 462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 61,
  "time_alive": 1043,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 1,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 62,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 96,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 79,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 93,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 64,
  "time_alive": 979,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 73,
  "time_alive": 597,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 22,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 78,
  "time_alive": 424,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 33,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "3e2a14d6ed0d404da24bfafc7b77d51a",
  "placement": 9,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 40,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 85,
  "time_alive": 485,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 16,
  "time_alive": 1369,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 80,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 41,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 35,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 9,
  "time_alive": 1420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 14,
  "time_alive": 1304,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 21,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 52,
  "time_alive": 1109,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "362094acb2f9460eaec47b035b351f0d",
  "placement": 4,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 52,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 22,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 25,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 57,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 70,
  "time_alive": 891,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 19,
  "time_alive": 1346,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 79,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 24,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 61,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 27,
  "time_alive": 1299,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 47,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 65,
  "time_alive": 671,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 78,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 16,
  "time_alive": 1365,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 45,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 56,
  "time_alive": 1070,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 53,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 7,
  "time_alive": 1384,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 38,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 43,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 71,
  "time_alive": 795,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 79,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 34,
  "time_alive": 1264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "c76b125b30b94badba8a5952b3729fe6",
  "placement": 37,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 89,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 2,
  "time_alive": 1499,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 87,
  "time_alive": 330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 73,
  "time_alive": 814,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 81,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 27,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 80,
  "time_alive": 795,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 30,
  "time_alive": 1267,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 57,
  "time_alive": 931,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 96,
  "time_alive": 159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 89,
  "time_alive": 316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "55821865a6564698966b29c78f044506",
  "placement": 96,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 10,
  "time_alive": 1360,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 12,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 8,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 76,
  "time_alive": 759,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 97,
  "time_alive": 93,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 70,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 21,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 65,
  "time_alive": 1000,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 37,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 16,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 11,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "12e3c9749791404e84152b33f3b78a1b",
  "placement": 74,
  "time_alive": 501,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 84,
  "time_alive": 353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 41,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 69,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 50,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 56,
  "time_alive": 1080,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 75,
  "time_alive": 750,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 67,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 12,
  "time_alive": 1309,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 77,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 59,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 5,
  "time_alive": 1411,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "8425aa001a81455b837aeef950c7b280",
  "placement": 8,
  "time_alive": 1312,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 2,
  "time_alive": 1426,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 43,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 92,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 43,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 12,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 84,
  "time_alive": 463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 22,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 92,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 46,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 83,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 98,
  "time_alive": 88,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae",
  "placement": 20,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 6,
  "time_alive": 1380,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 44,
  "time_alive": 1187,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 68,
  "time_alive": 897,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 20,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 44,
  "time_alive": 1210,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 48,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 81,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 14,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 66,
  "time_alive": 811,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 76,
  "time_alive": 667,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "a048d652928747a5ae9661c8e6a935c5",
  "placement": 56,
  "time_alive": 757,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 37,
  "time_alive": 1285,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 63,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 89,
  "time_alive": 300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 46,
  "time_alive": 1182,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 76,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 68,
  "time_alive": 843,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 98,
  "time_alive": 86,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 7,
  "time_alive": 1324,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 35,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 61,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 97,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "1b34b2109d474c18b6b0d006e8ac5f86",
  "placement": 3,
  "time_alive": 1340,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 16,
  "time_alive": 1338,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 55,
  "time_alive": 1101,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 38,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 32,
  "time_alive": 1281,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 95,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 76,
  "time_alive": 741,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 82,
  "time_alive": 689,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 71,
  "time_alive": 672,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 39,
  "time_alive": 1243,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 44,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 49,
  "time_alive": 1154,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2",
  "placement": 28,
  "time_alive": 1229,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 21,
  "time_alive": 1328,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 66,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 21,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 66,
  "time_alive": 997,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 16,
  "time_alive": 1325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 37,
  "time_alive": 1263,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 46,
  "time_alive": 1221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 19,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 26,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 70,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 9,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "256d6d5722e74ad08526a7af57e6c649",
  "placement": 71,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 39,
  "time_alive": 1266,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 40,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 12,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 9,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 55,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 61,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 92,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 42,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 67,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 58,
  "time_alive": 1042,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 61,
  "time_alive": 926,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd",
  "placement": 35,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 34,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 14,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 96,
  "time_alive": 106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 16,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 66,
  "time_alive": 959,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 20,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 89,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 70,
  "time_alive": 731,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 72,
  "time_alive": 755,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 8,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 20,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 94,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 4,
  "time_alive": 1390,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 65,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 75,
  "time_alive": 698,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 22,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 93,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 16,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 78,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 89,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 44,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 29,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 64,
  "time_alive": 846,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "7874d83d65e14c398a4d4fbcb230cc52",
  "placement": 87,
  "time_alive": 232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 35,
  "time_alive": 1287,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 27,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 6,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 70,
  "time_alive": 870,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 32,
  "time_alive": 1287,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 14,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 32,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 22,
  "time_alive": 1288,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 34,
  "time_alive": 1266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 45,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 74,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "b344ec81f391431ab0eb4cdc740d0ce2",
  "placement": 51,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 63,
  "time_alive": 998,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 79,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 39,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 86,
  "time_alive": 497,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 73,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 66,
  "time_alive": 857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 27,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 55,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 20,
  "time_alive": 1298,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 63,
  "time_alive": 904,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 14,
  "time_alive": 1373,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "4f1ba5901fb2486b92bc87e52b489db3",
  "placement": 44,
  "time_alive": 1042,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 20,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 88,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 80,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 10,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 34,
  "time_alive": 1277,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 97,
  "time_alive": 49,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 41,
  "time_alive": 1281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 34,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 15,
  "time_alive": 1307,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 24,
  "time_alive": 1309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 69,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "20ced8a927154503a17dc29d8ac018e0",
  "placement": 70,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 30,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 51,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 4,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 91,
  "time_alive": 267,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 24,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 48,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 52,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 32,
  "time_alive": 1254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 31,
  "time_alive": 1271,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 38,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 10,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "e39a7ad249fc4b67ab4849ca23d0e804",
  "placement": 30,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 75,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 19,
  "time_alive": 1360,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 42,
  "time_alive": 1251,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 61,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 71,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 53,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 88,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 36,
  "time_alive": 1236,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 21,
  "time_alive": 1294,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 12,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 42,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "fc770d107e5e436691dcc43c6f6221ab",
  "placement": 18,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 23,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 31,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 56,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 20,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 8,
  "time_alive": 1353,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 52,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 59,
  "time_alive": 1050,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 74,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 89,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 90,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 22,
  "time_alive": 1312,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "0c37a64d86734032be2b1fb78a61574a",
  "placement": 68,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 45,
  "time_alive": 1232,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 74,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 57,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "15d864c5-4692-477a-855a-ff7b650370f7",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 38,
  "time_alive": 1269,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "113e99ac-8c6f-4434-8a18-2e7d1fbd297b",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 48,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2f7e8ec9-5b62-43dc-8793-391b6ec0d4e8",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 87,
  "time_alive": 322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "384b7eb7-e002-4b57-a3e9-9e1cf5b59afe",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 49,
  "time_alive": 1191,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "13193aed-172b-4e28-98ec-1e819dc7d77b",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 11,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c6e2f85-2420-43f7-b8d3-717a97e4eb6a",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 65,
  "time_alive": 859,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "c7f31fdf-a97b-4f0f-84ba-8839e0066b7c",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 74,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3387b8ac-caff-40fa-a15f-7bc036f0c65e",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 54,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1722541e-58a7-424f-903b-60c8f0d9efa8",
  "team_id": "789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 31,
  "time_alive": 1215,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "7d3e16af-81ec-4a47-954b-3405f8e8bd9a",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 25,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2aed24d4-3476-4f2c-b5de-0fa12f2a656e",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 20,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4cca6798-6f77-4d3f-8949-c5c824d9ccdd",
  "team_id": "e82015b2753a4b288d13562eecf882be",
  "placement": 66,
  "time_alive": 1053,
  "elims": 0,
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
    