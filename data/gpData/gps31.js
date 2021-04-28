const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "5aa562b6dd86457499166365359de823",
  "placement": 42,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 91,
  "time_alive": 494,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 59,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 77,
  "time_alive": 690,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 39,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 65,
  "time_alive": 1061,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "2be35931b6424e908be60ec88cfce420",
  "placement": 37,
  "time_alive": 1321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 54,
  "time_alive": 1194,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 18,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 87,
  "time_alive": 514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "6ca2a17dd553472eaa548430a0f538cc",
  "placement": 82,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 23,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 90,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 91,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 69,
  "time_alive": 923,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 95,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "d43f20f2a479437c8f5004a3e5e6a42a",
  "placement": 50,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 95,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 70,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 17,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 91,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 53,
  "time_alive": 1218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "b44f84f59c4c46e2bc5eb4810638d88b",
  "placement": 95,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 77,
  "time_alive": 862,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 52,
  "time_alive": 1217,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 60,
  "time_alive": 1110,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 78,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 73,
  "time_alive": 796,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "23330e8fc1374e82a65fca6d59074e35",
  "placement": 65,
  "time_alive": 803,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 67,
  "time_alive": 944,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 84,
  "time_alive": 821,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 83,
  "time_alive": 509,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 59,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 93,
  "time_alive": 199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "7d505d6fe1f9425ea603bc7e85ced581",
  "placement": 40,
  "time_alive": 1313,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 40,
  "time_alive": 1329,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 91,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 69,
  "time_alive": 980,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 94,
  "time_alive": 261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 66,
  "time_alive": 1060,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "9330dee4547840f1b56d6a46ddf9aef5",
  "placement": 71,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 37,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 89,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 82,
  "time_alive": 515,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 44,
  "time_alive": 1294,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 46,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "939b46fd8aaa453bbcae3d1ab183e7a0",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 73,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 26,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 59,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 62,
  "time_alive": 1053,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 54,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "a920b3f4e7354086abe5024d15e78302",
  "placement": 78,
  "time_alive": 562,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 65,
  "time_alive": 989,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 97,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 54,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 53,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 41,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "9342a25f5b134d7d9e417b6c4c5a6ef0",
  "placement": 51,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 34,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 88,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 44,
  "time_alive": 1307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 51,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 81,
  "time_alive": 600,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "df8fcdc56cf34f3591ad176b875bfad4",
  "placement": 86,
  "time_alive": 302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 97,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 95,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 71,
  "time_alive": 934,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 43,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "8f70b28514654de79990b01aef245109",
  "placement": 61,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 94,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 60,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 41,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 79,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 84,
  "time_alive": 508,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "47a298a5947e441692cd6415b6e4968f",
  "placement": 59,
  "time_alive": 1048,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 42,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 65,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 84,
  "time_alive": 502,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 66,
  "time_alive": 976,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 83,
  "time_alive": 519,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "5985cfd8348441beb0c1d7d3fcbac556",
  "placement": 85,
  "time_alive": 335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 84,
  "time_alive": 810,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 50,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 76,
  "time_alive": 730,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 86,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 85,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "72a3aaaa0b984b9faada1bbfc02ffb3d",
  "placement": 92,
  "time_alive": 247,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 58,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 61,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 61,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 96,
  "time_alive": 213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 87,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "f32dc0d40fc7497883d71ce6ffe0fdbd",
  "placement": 91,
  "time_alive": 253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0897d3ff-1a77-4371-8d8f-cd574432340e",
  "team_id": "cc4cb027072649bdbc255765b2d2026b",
  "placement": 90,
  "time_alive": 543,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04f64671-4ee6-4e51-be91-a41861fdaace",
  "team_id": "cc4cb027072649bdbc255765b2d2026b",
  "placement": 94,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "cc4cb027072649bdbc255765b2d2026b",
  "placement": 92,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "cc4cb027072649bdbc255765b2d2026b",
  "placement": 52,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ee89265-9afc-49e0-8467-ec193eafb5a8",
  "team_id": "cc4cb027072649bdbc255765b2d2026b",
  "placement": 92,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "092331bc-03e8-49f3-8f2d-5896b9de1fba",
  "team_id": "cc4cb027072649bdbc255765b2d2026b",
  "placement": 87,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b9cf3e6-f0f4-4b83-8e51-ee5d538e459f",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 85,
  "time_alive": 476,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1ef3dd2d-ac08-450d-ba2a-75cd9eb3bac0",
  "team_id": "e80d9438f2a24a7faa933ca6f96c43dc",
  "placement": 98,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 2,
  "time_alive": 1534,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 81,
  "time_alive": 808,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 30,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 5,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 12,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "90dc8344426a4ae4ab4fc963f289d95f",
  "placement": 24,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 7,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 14,
  "time_alive": 1468,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 11,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 10,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 14,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "f2a3b26df9514fac90bf56304a512f62",
  "placement": 94,
  "time_alive": 152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 19,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 15,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 5,
  "time_alive": 1500,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 31,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 2,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "679f00c2433447e69fe0f9a1baab23a9",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 89,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 1,
  "time_alive": 1521,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 62,
  "time_alive": 1002,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 1,
  "time_alive": 1542,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 97,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "c5d3e52150b8419f88d416bfe49bcfc9",
  "placement": 36,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 90,
  "time_alive": 387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 97,
  "time_alive": 224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 12,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 15,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 1,
  "time_alive": 1515,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "c3915f3aba04441bae67890758a1d420",
  "placement": 19,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 18,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 3,
  "time_alive": 1518,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 28,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 67,
  "time_alive": 953,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 44,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "e1b76b7232bd472b91c79647323e8f5a",
  "placement": 9,
  "time_alive": 1465,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 5,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 23,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 7,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 80,
  "time_alive": 703,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 53,
  "time_alive": 1176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "366227707b494963b0236f75fd060374",
  "placement": 10,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 35,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 11,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 8,
  "time_alive": 1473,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 32,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 4,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "21ed08e8652845a789fa672be388cfb2",
  "placement": 41,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 49,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 46,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 1,
  "time_alive": 1520,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 44,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 17,
  "time_alive": 1408,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "8baf28eab51548e69232d03509c13382",
  "placement": 27,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 17,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 87,
  "time_alive": 757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 4,
  "time_alive": 1505,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 30,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 68,
  "time_alive": 910,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "25ea1e72f3034595aeb2b52cc68d7f96",
  "placement": 6,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 61,
  "time_alive": 1105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 13,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 60,
  "time_alive": 1032,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 14,
  "time_alive": 1425,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 58,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "2970c129b41d4373a875cea459c1a19c",
  "placement": 4,
  "time_alive": 1493,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 26,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 32,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 15,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 53,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 34,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "6667290e7fbb4db3a4509185467e29d9",
  "placement": 2,
  "time_alive": 1531,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 10,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 10,
  "time_alive": 1474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 67,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 79,
  "time_alive": 747,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 19,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "9b920a0684234c9e9b10b996ec6ea026",
  "placement": 7,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 3,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 84,
  "time_alive": 798,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 13,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 12,
  "time_alive": 1442,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 62,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "c40b933c94824e84964174642db6d813",
  "placement": 38,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 1,
  "time_alive": 1534,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 93,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 33,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 93,
  "time_alive": 202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 22,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "7f23febb7bca447db2c6596085556d4a",
  "placement": 75,
  "time_alive": 552,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 37,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 47,
  "time_alive": 1220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 19,
  "time_alive": 1390,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 16,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 40,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "67c79fb1197841bfa011c6c0148ec54a",
  "placement": 5,
  "time_alive": 1489,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 34,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 80,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 21,
  "time_alive": 1387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 4,
  "time_alive": 1532,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 10,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "1fd7e8d1020648189b3b6f92d8370e80",
  "placement": 72,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 54,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 60,
  "time_alive": 1155,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 52,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 73,
  "time_alive": 857,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 43,
  "time_alive": 1296,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "e6ead8c880d645a7b21a7787da048336",
  "placement": 1,
  "time_alive": 1531,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 96,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 94,
  "time_alive": 316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 2,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 2,
  "time_alive": 1542,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 55,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "3a99d915aff54fbe821c0335cd3a7199",
  "placement": 97,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 28,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 59,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 16,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 24,
  "time_alive": 1400,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 36,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "baef867e29f74e42930fd1bef818fe16",
  "placement": 13,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 13,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 37,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 32,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 22,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 47,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "891ab7310e3b4dbca60349054686035c",
  "placement": 14,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 73,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 49,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 6,
  "time_alive": 1495,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 50,
  "time_alive": 1206,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 16,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "181beaa62fab430596ecc32ac20c6491",
  "placement": 18,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 88,
  "time_alive": 777,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 36,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 3,
  "time_alive": 1517,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 78,
  "time_alive": 776,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 57,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "88aa191f71c44cfdb39f0c2482f1149d",
  "placement": 3,
  "time_alive": 1501,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 33,
  "time_alive": 1370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 40,
  "time_alive": 1317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 34,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 17,
  "time_alive": 1420,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 20,
  "time_alive": 1399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "c90e8c91e7c240da9b99a10db204ae23",
  "placement": 21,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 11,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 73,
  "time_alive": 916,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 81,
  "time_alive": 741,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 28,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 8,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "941f52e5d8fe425ea876b547b6a177ce",
  "placement": 55,
  "time_alive": 1161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 53,
  "time_alive": 1173,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 25,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 54,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 35,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 5,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "2919796b91aa41a7bed9da84d5e12919",
  "placement": 23,
  "time_alive": 1427,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 95,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 48,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 87,
  "time_alive": 510,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 19,
  "time_alive": 1412,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 24,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "259a3ac2e19b44e6b2f28f4261c7477d",
  "placement": 22,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 36,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 5,
  "time_alive": 1504,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 45,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 90,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 15,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "ca8288e8ac2b4cedbe537c52af6509d9",
  "placement": 32,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 23,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 8,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 57,
  "time_alive": 1047,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 66,
  "time_alive": 958,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 37,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "b0a7e840560e4b79b4483afd02c63237",
  "placement": 11,
  "time_alive": 1463,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 72,
  "time_alive": 906,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 12,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 26,
  "time_alive": 1371,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 65,
  "time_alive": 982,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 21,
  "time_alive": 1390,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "d8bba7ba981d47eb83d6de7e74d934f4",
  "placement": 79,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 51,
  "time_alive": 1206,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 17,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 61,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 58,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 11,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "b5126124813b4a168347e9119236840d",
  "placement": 30,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 30,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 38,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 17,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 55,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 23,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "f4b918cfe0654eca898f2143665e899a",
  "placement": 47,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 43,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 41,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 63,
  "time_alive": 995,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 40,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 6,
  "time_alive": 1469,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "8bba52a84f2a415792288bac379695a2",
  "placement": 17,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 6,
  "time_alive": 1479,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 69,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 55,
  "time_alive": 1121,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 6,
  "time_alive": 1484,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 32,
  "time_alive": 1336,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "22b05da17e9b460d9874e6426f271e45",
  "placement": 44,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 41,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 52,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 59,
  "time_alive": 1033,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 75,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 13,
  "time_alive": 1417,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "939ac1586e384d1c8363e6ee49124e52",
  "placement": 12,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 22,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 76,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 23,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 3,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 85,
  "time_alive": 570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "4789f42e87c742dd998d203b8585ed26",
  "placement": 83,
  "time_alive": 425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 27,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 6,
  "time_alive": 1497,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 20,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 33,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 81,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "ee30c24b8b22406f8fd82a6dbe8c3841",
  "placement": 59,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 99,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 96,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 100,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 9,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 66,
  "time_alive": 952,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "8d5e4aa63aca4a1195a8a6910867234a",
  "placement": 8,
  "time_alive": 1482,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 44,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 16,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 86,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 39,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 7,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "714363a2e4d3426090aca59f76489981",
  "placement": 77,
  "time_alive": 531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 15,
  "time_alive": 1432,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 70,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 40,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 18,
  "time_alive": 1413,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 83,
  "time_alive": 589,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "eb9b94f732b54240afc13e5f8d267e7f",
  "placement": 37,
  "time_alive": 1359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 21,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 22,
  "time_alive": 1425,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 43,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 70,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 42,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "f59581518f68499982f8495197fb2fd4",
  "placement": 26,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 20,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 44,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 91,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 38,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 25,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "58bde9b6296441b7a8e2244434e103c3",
  "placement": 28,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 50,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 56,
  "time_alive": 1159,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 95,
  "time_alive": 315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 25,
  "time_alive": 1400,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 28,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "0af8a2f5a00f49358578e93a2b62b2c4",
  "placement": 31,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 52,
  "time_alive": 1201,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 29,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 82,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 29,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 9,
  "time_alive": 1451,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "48877ef7a3fe43bcbdf656f90857e4d0",
  "placement": 35,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 4,
  "time_alive": 1505,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 88,
  "time_alive": 721,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 42,
  "time_alive": 1301,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 81,
  "time_alive": 701,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 84,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "52ce93aa9096448aba204e702e17244d",
  "placement": 45,
  "time_alive": 1315,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 70,
  "time_alive": 954,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 82,
  "time_alive": 806,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 47,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 26,
  "time_alive": 1388,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 86,
  "time_alive": 566,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "82210ca40af74bbebe424195c4954349",
  "placement": 15,
  "time_alive": 1455,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 39,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 7,
  "time_alive": 1486,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 66,
  "time_alive": 933,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 46,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 63,
  "time_alive": 1023,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "0461599e5bc14ce3a8191219c2c196bd",
  "placement": 76,
  "time_alive": 550,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 71,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 4,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 49,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 37,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 82,
  "time_alive": 590,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "8810f7b49b484bc3992e78e4cda05d76",
  "placement": 85,
  "time_alive": 391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 77,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 28,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 51,
  "time_alive": 1189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 59,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 3,
  "time_alive": 1479,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "88d7c859cf4c4371af3ee047539bcefb",
  "placement": 67,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 94,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 2,
  "time_alive": 1521,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 99,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 97,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 75,
  "time_alive": 743,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "341128be51804cdebde3b18847d51939",
  "placement": 64,
  "time_alive": 846,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 42,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 24,
  "time_alive": 1415,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 41,
  "time_alive": 1304,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 27,
  "time_alive": 1383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 60,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "6eeb88fef202442c9645a9609e557e87",
  "placement": 73,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 12,
  "time_alive": 1441,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 19,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 89,
  "time_alive": 461,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 36,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 77,
  "time_alive": 701,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "fd5a68f8f02d46efbd29b2f8faabb501",
  "placement": 60,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 78,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 71,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 44,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 8,
  "time_alive": 1466,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 67,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "584922c931764834bd81a2e608183cdc",
  "placement": 25,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 8,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 55,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 85,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 60,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 72,
  "time_alive": 820,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "69e6215424954cb6a8b580bcd0f4097b",
  "placement": 16,
  "time_alive": 1454,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 63,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 18,
  "time_alive": 1451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 48,
  "time_alive": 1208,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 96,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 65,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "ad431d56c78e4123b4ed8cadeb492d5e",
  "placement": 20,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 9,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 98,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 25,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 48,
  "time_alive": 1234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 51,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "6552f35011b34bfa92f1eeb4bb76fd05",
  "placement": 69,
  "time_alive": 688,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 27,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 14,
  "time_alive": 1425,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 82,
  "time_alive": 678,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 18,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "d5fb0d83e853411bbb52362eb5df0e31",
  "placement": 58,
  "time_alive": 1079,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 56,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 35,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 36,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 56,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 31,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "177e5745b77841998c779a435387dd7d",
  "placement": 46,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 31,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 65,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 24,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 69,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 27,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "dba719cb87f34cc4874f7437e94a46e7",
  "placement": 56,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 97,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 66,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 9,
  "time_alive": 1467,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 72,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 48,
  "time_alive": 1189,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "df22b4b9b22b40f88b563db462bfea22",
  "placement": 39,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 45,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 42,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 77,
  "time_alive": 803,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 71,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 29,
  "time_alive": 1362,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "01a80c2a1fca4dcb80665afff876d977",
  "placement": 71,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 9,
  "time_alive": 1482,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 39,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 64,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 38,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "8fd8453465e8442dac28469f46816ca4",
  "placement": 88,
  "time_alive": 355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 84,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 64,
  "time_alive": 1097,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 22,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 21,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 46,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "84e34469503843a599c12020628b918a",
  "placement": 51,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 29,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 57,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 72,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 13,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 61,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "185e2699a4c3491ab36918670d09717b",
  "placement": 80,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 16,
  "time_alive": 1427,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 78,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 58,
  "time_alive": 1046,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 87,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 73,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "85261a68806849d88666d1d04bc62be1",
  "placement": 43,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 58,
  "time_alive": 1139,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 74,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 35,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 49,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 30,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "e84714dde0e6403da707894cc96bc7f9",
  "placement": 63,
  "time_alive": 847,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 24,
  "time_alive": 1395,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 34,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 65,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 84,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 49,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "52bc15431e79497eb535f39ec61f07c1",
  "placement": 74,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 40,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 100,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 10,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 99,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 88,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "1b57112f8bea4fe28de710fabfed01bf",
  "placement": 61,
  "time_alive": 881,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 60,
  "time_alive": 1109,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 68,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 68,
  "time_alive": 897,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 11,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "3fa7e73acccd419099355b6b3d172d4f",
  "placement": 100,
  "time_alive": 81,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 32,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 89,
  "time_alive": 673,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 96,
  "time_alive": 203,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 100,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 45,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "4a38f9dea0ac49fea013fefd7418cdfa",
  "placement": 29,
  "time_alive": 1404,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 69,
  "time_alive": 985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 85,
  "time_alive": 797,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 31,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 23,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 56,
  "time_alive": 1116,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "e6eb3d526fb642b6b56e91e763a7aa66",
  "placement": 65,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 47,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 51,
  "time_alive": 1170,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 94,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 7,
  "time_alive": 1482,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 87,
  "time_alive": 560,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "d9ec487830a942a6bf322dbb066a7a74",
  "placement": 81,
  "time_alive": 444,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 25,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 39,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 78,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 85,
  "time_alive": 535,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 54,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "8cde1a0c6a60407da0197979da606a67",
  "placement": 42,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 80,
  "time_alive": 845,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 21,
  "time_alive": 1426,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 98,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 20,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 93,
  "time_alive": 264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "dc5f2f9565be4673a138731ab6451a43",
  "placement": 84,
  "time_alive": 397,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 83,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 43,
  "time_alive": 1269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 18,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 57,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 59,
  "time_alive": 1089,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "426d17c5568d45afb784c14f5cbd7e8a",
  "placement": 93,
  "time_alive": 266,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 59,
  "time_alive": 1124,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 20,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 93,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 91,
  "time_alive": 220,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 70,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "461df2a74eed48b091b2b6e5c12235df",
  "placement": 50,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 14,
  "time_alive": 1438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 50,
  "time_alive": 1204,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 70,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 89,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 79,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "81c17afbac874a4fa90b564a6e9b04bc",
  "placement": 54,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 46,
  "time_alive": 1331,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 33,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 27,
  "time_alive": 1371,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 92,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 64,
  "time_alive": 970,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "253627e85dc147549beec70e17de29e8",
  "placement": 95,
  "time_alive": 144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 68,
  "time_alive": 986,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 61,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 64,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 41,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 71,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "474e305d75d341919bab32fb5c4650d1",
  "placement": 87,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 57,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 54,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 84,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 83,
  "time_alive": 638,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 50,
  "time_alive": 1188,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "9f26462a3da649aab1fd7426163faefc",
  "placement": 33,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 64,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 79,
  "time_alive": 820,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 97,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 54,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 41,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "7874eb514eb642248bbc12576db975ce",
  "placement": 40,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 48,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 62,
  "time_alive": 1119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 50,
  "time_alive": 1200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 47,
  "time_alive": 1243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 35,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "de2ae5c29c034da2853dbc1352aba6e2",
  "placement": 89,
  "time_alive": 350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 62,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 95,
  "time_alive": 275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 79,
  "time_alive": 770,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 43,
  "time_alive": 1310,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 95,
  "time_alive": 199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "fc02ed69e6e541d895789a66e4013fb7",
  "placement": 86,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 76,
  "time_alive": 867,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 91,
  "time_alive": 491,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 37,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 34,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 52,
  "time_alive": 1179,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "dcc5f4df088a4bcab4058b9b0fb2f97c",
  "placement": 91,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 85,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 31,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 38,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 88,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 91,
  "time_alive": 359,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "399286cdb88c4a68b27d94280db11941",
  "placement": 62,
  "time_alive": 859,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 74,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 63,
  "time_alive": 1103,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 76,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 62,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 39,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "4bcff805b2b640d7998a5fc9be958dbf",
  "placement": 49,
  "time_alive": 1297,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 91,
  "time_alive": 276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 92,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 75,
  "time_alive": 846,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 52,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 33,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "84afe8633308425f8269f94cc5c152b6",
  "placement": 52,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 87,
  "time_alive": 800,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 26,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 73,
  "time_alive": 874,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 77,
  "time_alive": 802,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 90,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "4b32c4b7fb8944d3a4527f48c2a2d62b",
  "placement": 68,
  "time_alive": 772,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 75,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 83,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 53,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 74,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 26,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "958c3c74915f4a0f933484ea0d54cb85",
  "placement": 53,
  "time_alive": 1181,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 66,
  "time_alive": 1012,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 30,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 74,
  "time_alive": 863,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 76,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 74,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "57eed6e8cc2f42f8b26bb8b0229e50ed",
  "placement": 70,
  "time_alive": 684,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 55,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 75,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 88,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 42,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 76,
  "time_alive": 717,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "cfc552b6e941439ba8fcaf090aa28e74",
  "placement": 48,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 67,
  "time_alive": 1003,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 72,
  "time_alive": 924,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 92,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 63,
  "time_alive": 1005,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 69,
  "time_alive": 876,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "1cad86e5c84e4732ac8f82fca140ef46",
  "placement": 78,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 81,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 86,
  "time_alive": 781,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 29,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 45,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 78,
  "time_alive": 631,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "dc3a72a4d0a14c3a988ae180c97f57d9",
  "placement": 82,
  "time_alive": 430,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 82,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 77,
  "time_alive": 868,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 46,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 68,
  "time_alive": 905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 89,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "36737831e5c742dbb03718b61b694733",
  "placement": 57,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 38,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 99,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 56,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 95,
  "time_alive": 166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 94,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "3d0e78fc58ae4bd8a9c52f6fb0bce3e4",
  "placement": 90,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 92,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 53,
  "time_alive": 1167,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 80,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 61,
  "time_alive": 1025,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "39527ee818bb4c2c9a289e5178d4da27",
  "placement": 99,
  "time_alive": 119,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 65,
  "time_alive": 1015,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 67,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 83,
  "time_alive": 668,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 86,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 96,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "fb1a495ad7434eaebbfbda664e296e91",
  "placement": 66,
  "time_alive": 814,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 86,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 58,
  "time_alive": 1156,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 69,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 98,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "517914ce500c4fc2a3365f78afb6e6a5",
  "placement": 80,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 79,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 45,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 90,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 94,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 92,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "376fc61c36114d6a8ea5db25c74ec5fd",
  "placement": 92,
  "time_alive": 266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d2a6440-4dfe-4b79-ae66-85736451955e",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 93,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "059d5f27-4b2a-40e5-9e75-2c0f6b8f7022",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 90,
  "time_alive": 624,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0944fc61-7dd3-4025-a930-a96d369382db",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 71,
  "time_alive": 884,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "061cc446-7e5c-42e0-92fd-f711d80fd7ab",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 51,
  "time_alive": 1199,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06be0c3e-e50b-450f-9cef-22d1c7874abc",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 98,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "04a338ac-8017-4e23-bfb3-d25a4c44ff72",
  "team_id": "f4b4e02a5a0d48278f46a566fa1dcf03",
  "placement": 96,
  "time_alive": 137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 1,
  "time_alive": 1537,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 8,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 2,
  "time_alive": 1527,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 1,
  "time_alive": 1534,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 96,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "195e2825b1ab45358fdf1ee6f6e5b3f1",
  "placement": 99,
  "time_alive": 97,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 38,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 3,
  "time_alive": 1451,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 1,
  "time_alive": 1527,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 32,
  "time_alive": 1356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 4,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "89626ebf70374e92840e995065175c4d",
  "placement": 27,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 19,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 9,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 6,
  "time_alive": 1503,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 43,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 43,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "0c50c1a8041d47fd968b0043f5f678a2",
  "placement": 1,
  "time_alive": 1563,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 16,
  "time_alive": 1431,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 6,
  "time_alive": 1438,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 86,
  "time_alive": 655,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 97,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 7,
  "time_alive": 1470,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "324ef012cb284ea1a403ac2d0d037323",
  "placement": 10,
  "time_alive": 1451,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 57,
  "time_alive": 1195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 4,
  "time_alive": 1450,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 4,
  "time_alive": 1508,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 10,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 50,
  "time_alive": 1219,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "ed182650a19c49fe950f578081acf428",
  "placement": 34,
  "time_alive": 1333,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 33,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 22,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 3,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 60,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 1,
  "time_alive": 1515,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "b6bcccd2151948f4b9f0159cd700352a",
  "placement": 48,
  "time_alive": 1196,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 10,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 50,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 5,
  "time_alive": 1505,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 16,
  "time_alive": 1469,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 32,
  "time_alive": 1345,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "1ce87f590ed8483fa5c95dbad0a60628",
  "placement": 49,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 9,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 42,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 16,
  "time_alive": 1433,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 2,
  "time_alive": 1534,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 59,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "77f4a786037043648a8dbfb094ff9f96",
  "placement": 55,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 22,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 1,
  "time_alive": 1470,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 67,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 13,
  "time_alive": 1485,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 85,
  "time_alive": 571,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "b11392cbf71a4bcba1ad470dae8543d8",
  "placement": 30,
  "time_alive": 1346,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 4,
  "time_alive": 1480,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 95,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 99,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 3,
  "time_alive": 1527,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 10,
  "time_alive": 1441,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "5b51706ed37647678d3ef6a2d9631bee",
  "placement": 74,
  "time_alive": 481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 18,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 44,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 34,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 20,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 12,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "96e380a28591400fbf36016c2cf03a7f",
  "placement": 66,
  "time_alive": 744,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 6,
  "time_alive": 1472,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 2,
  "time_alive": 1470,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 7,
  "time_alive": 1475,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 63,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 56,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "24daa3b1a4ca43bcb1fcf96d32e84032",
  "placement": 88,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 98,
  "time_alive": 138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 85,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 10,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 14,
  "time_alive": 1473,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 3,
  "time_alive": 1506,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "dd8c6752f17e47eb8ae5607271b41aec",
  "placement": 17,
  "time_alive": 1409,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 13,
  "time_alive": 1434,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 5,
  "time_alive": 1447,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 69,
  "time_alive": 952,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 18,
  "time_alive": 1452,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 46,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "b2d8d81941654fbfb6371a669ec8e126",
  "placement": 32,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 52,
  "time_alive": 1216,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 65,
  "time_alive": 1017,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 88,
  "time_alive": 460,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 55,
  "time_alive": 1193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 2,
  "time_alive": 1515,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "358fa59245fe4e098d0647eea677cb6b",
  "placement": 6,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 2,
  "time_alive": 1537,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 68,
  "time_alive": 986,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 92,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 37,
  "time_alive": 1330,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 49,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "631618f231bd47299cd61efff0a37bff",
  "placement": 8,
  "time_alive": 1494,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 5,
  "time_alive": 1477,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 24,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 55,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 74,
  "time_alive": 816,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 36,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "f6eefd2d46ed4ab0a3c0de45abc62abb",
  "placement": 12,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 20,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 31,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 20,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 29,
  "time_alive": 1387,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 18,
  "time_alive": 1404,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "9b1a091fd83c4cb692d0af14727c0be9",
  "placement": 47,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 91,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 35,
  "time_alive": 1375,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 13,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 9,
  "time_alive": 1501,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 9,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "dc2a7f57b67c43e49d64727c113f3480",
  "placement": 50,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 51,
  "time_alive": 1218,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 39,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 15,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 8,
  "time_alive": 1502,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 16,
  "time_alive": 1407,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "5feb2f052cc447f581fe53749e6c06b4",
  "placement": 28,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 89,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 14,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 72,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 26,
  "time_alive": 1416,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 64,
  "time_alive": 938,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "9f44f3da946d468db2bbba22db9b5100",
  "placement": 3,
  "time_alive": 1547,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 73,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 10,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 59,
  "time_alive": 1103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 4,
  "time_alive": 1521,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 79,
  "time_alive": 690,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "b496a8d32d194a29926ba0522b2ef860",
  "placement": 5,
  "time_alive": 1535,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 43,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 11,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 24,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 39,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 81,
  "time_alive": 651,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "8d01b94378ff4f71898033b5754b7352",
  "placement": 23,
  "time_alive": 1386,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 34,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 29,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 29,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 45,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 23,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "197d9c9072234e04aeb7462146c184a6",
  "placement": 14,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 47,
  "time_alive": 1271,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 34,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 91,
  "time_alive": 321,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 19,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 69,
  "time_alive": 866,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "f746c973535746eaa0a9beb3e04a4434",
  "placement": 4,
  "time_alive": 1540,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 56,
  "time_alive": 1195,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 49,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 50,
  "time_alive": 1204,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 6,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 28,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "6877dd88ea8248a89d02d1bac0ed50b5",
  "placement": 19,
  "time_alive": 1399,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "841ca75cd463421da2fc154426182c88",
  "placement": 14,
  "time_alive": 1433,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "841ca75cd463421da2fc154426182c88",
  "placement": 80,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "841ca75cd463421da2fc154426182c88",
  "placement": 19,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "841ca75cd463421da2fc154426182c88",
  "placement": 7,
  "time_alive": 1507,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "841ca75cd463421da2fc154426182c88",
  "placement": 42,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "841ca75cd463421da2fc154426182c88",
  "placement": 77,
  "time_alive": 426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 94,
  "time_alive": 176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 7,
  "time_alive": 1433,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 28,
  "time_alive": 1373,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 98,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 37,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a",
  "placement": 9,
  "time_alive": 1472,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 39,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 46,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 8,
  "time_alive": 1458,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 25,
  "time_alive": 1424,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 39,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "0b93adbc755642bc8a17aa345b954b17",
  "placement": 26,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 77,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 19,
  "time_alive": 1396,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 63,
  "time_alive": 1033,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 12,
  "time_alive": 1490,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 33,
  "time_alive": 1343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "f78ac8c957ac4db7b76747d350618f88",
  "placement": 33,
  "time_alive": 1339,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 21,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 21,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 25,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 100,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 24,
  "time_alive": 1390,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 56,
  "time_alive": 986,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "10cd6867eb5b4698832007b954e4fb76",
  "placement": 7,
  "time_alive": 1467,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "10cd6867eb5b4698832007b954e4fb76",
  "placement": 71,
  "time_alive": 949,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "10cd6867eb5b4698832007b954e4fb76",
  "placement": 43,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "10cd6867eb5b4698832007b954e4fb76",
  "placement": 27,
  "time_alive": 1413,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "10cd6867eb5b4698832007b954e4fb76",
  "placement": 40,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "10cd6867eb5b4698832007b954e4fb76",
  "placement": 18,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 3,
  "time_alive": 1494,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 70,
  "time_alive": 955,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 42,
  "time_alive": 1318,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 35,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 51,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "25ada6e530dd49bbb567ba0beb91e654",
  "placement": 68,
  "time_alive": 700,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 58,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 53,
  "time_alive": 1126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 70,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 30,
  "time_alive": 1369,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 90,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 2,
  "time_alive": 1563,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 28,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 92,
  "time_alive": 247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 73,
  "time_alive": 900,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 36,
  "time_alive": 1331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 19,
  "time_alive": 1403,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "9b591309e74749b7a76993667ee3b494",
  "placement": 16,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 37,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 59,
  "time_alive": 1095,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 14,
  "time_alive": 1435,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 53,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 13,
  "time_alive": 1430,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "1044fabbf3e14ac2882e607e88167252",
  "placement": 39,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 72,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 23,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 11,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 86,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 8,
  "time_alive": 1455,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7",
  "placement": 43,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 29,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 15,
  "time_alive": 1412,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 28,
  "time_alive": 1403,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 52,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 37,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "2e95c24ea8f9418089c4ef06a954a294",
  "placement": 76,
  "time_alive": 896,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "2e95c24ea8f9418089c4ef06a954a294",
  "placement": 75,
  "time_alive": 898,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "2e95c24ea8f9418089c4ef06a954a294",
  "placement": 9,
  "time_alive": 1450,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "2e95c24ea8f9418089c4ef06a954a294",
  "placement": 33,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "2e95c24ea8f9418089c4ef06a954a294",
  "placement": 6,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "2e95c24ea8f9418089c4ef06a954a294",
  "placement": 84,
  "time_alive": 321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 68,
  "time_alive": 1017,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 28,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 31,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 24,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 14,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "54c9432cf0844b2e820108c247775080",
  "placement": 58,
  "time_alive": 919,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 93,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 33,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 36,
  "time_alive": 1352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 72,
  "time_alive": 843,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 17,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "10494c34cb1b477ab7dd3b32d6ab61c5",
  "placement": 7,
  "time_alive": 1498,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 71,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 12,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 79,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 15,
  "time_alive": 1470,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 75,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "4ac428afed144b8192e7250bfa395b22",
  "placement": 22,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "bc26230ea468465d976e88950071fe53",
  "placement": 41,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "bc26230ea468465d976e88950071fe53",
  "placement": 32,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "bc26230ea468465d976e88950071fe53",
  "placement": 87,
  "time_alive": 520,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "bc26230ea468465d976e88950071fe53",
  "placement": 64,
  "time_alive": 1090,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "bc26230ea468465d976e88950071fe53",
  "placement": 76,
  "time_alive": 760,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "bc26230ea468465d976e88950071fe53",
  "placement": 15,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 92,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 40,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 32,
  "time_alive": 1366,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 76,
  "time_alive": 753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 61,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "12e380f3079243a3a521c7e963b19bd9",
  "placement": 13,
  "time_alive": 1427,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144",
  "placement": 32,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144",
  "placement": 17,
  "time_alive": 1400,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144",
  "placement": 40,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144",
  "placement": 70,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144",
  "placement": 47,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "0b75e65b54a5467a9f86f218b2bb7144",
  "placement": 41,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 37,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 12,
  "time_alive": 1442,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 51,
  "time_alive": 1226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 65,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "585ef117f6e341e5ac6f10f309b1db23",
  "placement": 59,
  "time_alive": 902,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 11,
  "time_alive": 1443,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 43,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 54,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 17,
  "time_alive": 1465,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 53,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 36,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 44,
  "time_alive": 1316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 18,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 66,
  "time_alive": 959,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 58,
  "time_alive": 1128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 29,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "19c7231e452545baa9ee6efd52ca7289",
  "placement": 46,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 53,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 83,
  "time_alive": 732,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 21,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 23,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 83,
  "time_alive": 618,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "f4de20bd088a409c9035b2ba277e226c",
  "placement": 24,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 79,
  "time_alive": 849,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 38,
  "time_alive": 1364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021c456f-9696-414d-9539-7a4415e86f83",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 60,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "08ce554b-e1af-4138-9872-b0c3e15c0ff5",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 59,
  "time_alive": 1122,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "097ab9e9-cc8c-4f43-a36f-ce56eb4b3517",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 11,
  "time_alive": 1435,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0796bf49-b020-4e85-8cdf-d5fcf17e9906",
  "team_id": "af5163194d754769899c5d68941c57ed",
  "placement": 57,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b4935e5-4b45-46b9-8a1c-36e4f2450778",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 24,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0cfa15e2-a5bb-452e-9fba-cfb3d86e5600",
  "team_id": "ca54194e9c4c47bca1258d5336840d3f",
  "placement": 45,
  "time_alive": 1336,
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
    