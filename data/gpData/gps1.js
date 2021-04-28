const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 65,
  "time_alive": 943,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 30,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 32,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 29,
  "time_alive": 1291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 56,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 58,
  "time_alive": 925,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 95,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 38,
  "time_alive": 1226,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 51,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 63,
  "time_alive": 1035,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 95,
  "time_alive": 194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 96,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 95,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 63,
  "time_alive": 948,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 75,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 33,
  "time_alive": 1272,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 55,
  "time_alive": 1093,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 72,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 56,
  "time_alive": 1052,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "14caafa7dc964c28b80096bcd5b38e30",
  "placement": 51,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 17,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 99,
  "time_alive": 43,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 66,
  "time_alive": 901,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 45,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 21,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 55,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 69,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 98,
  "time_alive": 80,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 98,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 96,
  "time_alive": 75,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 80,
  "time_alive": 506,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "2d91ad40c7384c8a9c12c4c295450d78",
  "placement": 65,
  "time_alive": 565,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 24,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 71,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 75,
  "time_alive": 761,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 38,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 42,
  "time_alive": 1230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 33,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 90,
  "time_alive": 323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 72,
  "time_alive": 696,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 69,
  "time_alive": 885,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 48,
  "time_alive": 1028,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 48,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "d15f6dc83259428099b0dba7b80dbeb9",
  "placement": 62,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 93,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 70,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 99,
  "time_alive": 65,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 86,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 50,
  "time_alive": 1171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 36,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 21,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 76,
  "time_alive": 619,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 47,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 60,
  "time_alive": 917,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 28,
  "time_alive": 1269,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "f014bdea7d754e14ba37683e1cb34b73",
  "placement": 48,
  "time_alive": 1105,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 57,
  "time_alive": 1095,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 57,
  "time_alive": 1067,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 29,
  "time_alive": 1291,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 85,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 45,
  "time_alive": 1198,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 81,
  "time_alive": 490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 36,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 79,
  "time_alive": 585,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 91,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "34c81b0125b7441ca703915866722400",
  "placement": 96,
  "time_alive": 96,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 33,
  "time_alive": 1282,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 42,
  "time_alive": 1260,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 41,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 81,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 97,
  "time_alive": 82,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 89,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 94,
  "time_alive": 226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 91,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 87,
  "time_alive": 355,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 87,
  "time_alive": 365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 94,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "6398f134fe1b4612be72eba99f429dbd",
  "placement": 82,
  "time_alive": 228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 36,
  "time_alive": 1276,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 86,
  "time_alive": 430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 86,
  "time_alive": 538,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 82,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 46,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 51,
  "time_alive": 1107,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 88,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 36,
  "time_alive": 1267,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 64,
  "time_alive": 916,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 30,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "97d666bb164b47ee90e3bc8c21884103",
  "placement": 85,
  "time_alive": 377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 96,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 16,
  "time_alive": 1368,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 58,
  "time_alive": 988,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 28,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 99,
  "time_alive": 54,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 92,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 50,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 85,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 76,
  "time_alive": 653,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 44,
  "time_alive": 1129,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "0936feb69d234f999aefb246b20ec49e",
  "placement": 84,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 46,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 24,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 53,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 13,
  "time_alive": 1359,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 85,
  "time_alive": 370,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 58,
  "time_alive": 1038,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 41,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 82,
  "time_alive": 488,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 88,
  "time_alive": 339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 94,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "755e79e93df44c7b885f008b2ad34d91",
  "placement": 74,
  "time_alive": 610,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 70,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 94,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 94,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 68,
  "time_alive": 889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 73,
  "time_alive": 684,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 82,
  "time_alive": 480,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 70,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 67,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 95,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 93,
  "time_alive": 169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 92,
  "time_alive": 207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "11d7c9cfcc6f48699112274d12f6c607",
  "placement": 79,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 68,
  "time_alive": 868,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 97,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 42,
  "time_alive": 1179,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 83,
  "time_alive": 324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 93,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 93,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 95,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 63,
  "time_alive": 1031,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 91,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "4b919532dca140eda4d686d945872a03",
  "placement": 92,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 99,
  "time_alive": 68,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 51,
  "time_alive": 1150,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 84,
  "time_alive": 560,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 92,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 96,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 59,
  "time_alive": 977,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 98,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 84,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 73,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 36,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 42,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "dce03d1c45aa47ebb3cf44a161395922",
  "placement": 94,
  "time_alive": 94,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 63,
  "time_alive": 956,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 96,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 80,
  "time_alive": 664,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 37,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 30,
  "time_alive": 1281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 74,
  "time_alive": 663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 62,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 88,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 65,
  "time_alive": 913,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 88,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 37,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "439e741737a54167821c99741b6a1369",
  "placement": 53,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 88,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 78,
  "time_alive": 664,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 98,
  "time_alive": 68,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 97,
  "time_alive": 84,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 81,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 94,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2ef76643-13d8-418c-aeac-9bfa248390f9",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 96,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "932146b8-3801-440a-a3bd-7c2e107f08bf",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 94,
  "time_alive": 204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "71b69a61-4dd6-4b4f-bd36-6dac9e315be0",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 92,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "50626efe-dcd4-4d74-b319-82f2820c2977",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 53,
  "time_alive": 992,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "7dfbb066-7dfd-448c-a2f2-06bdad93a9ff",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 97,
  "time_alive": 91,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "6fa54062-4145-45dd-8282-765abc93a0c7",
  "team_id": "73495b10b096425e89747f94613ef4c3",
  "placement": 84,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0e4f5a7f-6c13-47d8-839e-9b8a9fc66cdf",
  "team_id": "b59b19aa274c458db95255b0d9553094",
  "placement": 98,
  "time_alive": 71,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "66f9b058-faea-4e40-9b0d-a38e9d1ca7d4",
  "team_id": "b59b19aa274c458db95255b0d9553094",
  "placement": 95,
  "time_alive": 195,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0c2f36be-7c73-4b3b-9bd9-dd25699e1c15",
  "team_id": "b59b19aa274c458db95255b0d9553094",
  "placement": 82,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f17f18a-b2f9-4a98-9a52-d43108004798",
  "team_id": "b59b19aa274c458db95255b0d9553094",
  "placement": 80,
  "time_alive": 398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0eb56061-186f-45e9-bd7a-0a9771a5ab89",
  "team_id": "b59b19aa274c458db95255b0d9553094",
  "placement": 86,
  "time_alive": 356,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1015efbe-d125-43af-af18-782e4545b7f7",
  "team_id": "b59b19aa274c458db95255b0d9553094",
  "placement": 88,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 4,
  "time_alive": 1409,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 54,
  "time_alive": 1166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 2,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 3,
  "time_alive": 1445,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 3,
  "time_alive": 1396,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 4,
  "time_alive": 1448,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 78,
  "time_alive": 804,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 7,
  "time_alive": 1389,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 1,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 13,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 77,
  "time_alive": 436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "862a829593db4771a9965076bf1621b7",
  "placement": 10,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 5,
  "time_alive": 1390,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 6,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 11,
  "time_alive": 1396,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 38,
  "time_alive": 1185,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 65,
  "time_alive": 956,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 9,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 45,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 86,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 7,
  "time_alive": 1422,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 89,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 53,
  "time_alive": 1041,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "60f4e001139e4f7a9fed954acf54d238",
  "placement": 13,
  "time_alive": 1294,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 38,
  "time_alive": 1260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 39,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 4,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 1,
  "time_alive": 1455,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 25,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 21,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 1,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 12,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 5,
  "time_alive": 1433,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 59,
  "time_alive": 1034,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 23,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "ce85174826c04d4f90d278800dafc68b",
  "placement": 49,
  "time_alive": 971,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 81,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 26,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 96,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 4,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 62,
  "time_alive": 1031,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 84,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1354,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1487,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 40,
  "time_alive": 1254,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 56,
  "time_alive": 1072,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 2,
  "time_alive": 1430,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 11,
  "time_alive": 1299,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 18,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 16,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 36,
  "time_alive": 1274,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 29,
  "time_alive": 1268,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 23,
  "time_alive": 1314,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1503,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 44,
  "time_alive": 1211,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 10,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 3,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 15,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 80,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "8a9f8de89ec04ae09755781697a30577",
  "placement": 7,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 58,
  "time_alive": 1083,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 36,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 43,
  "time_alive": 1256,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 27,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 15,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 3,
  "time_alive": 1487,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 19,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 40,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 11,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 47,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 7,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "30b5202b37e0499f89cb094fa7849afd",
  "placement": 1,
  "time_alive": 1370,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 44,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 4,
  "time_alive": 1408,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 3,
  "time_alive": 1459,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 16,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 55,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 30,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 5,
  "time_alive": 1380,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 9,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 30,
  "time_alive": 1340,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 11,
  "time_alive": 1349,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 10,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 51,
  "time_alive": 929,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 22,
  "time_alive": 1325,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 97,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 62,
  "time_alive": 1027,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 81,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 48,
  "time_alive": 1166,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 66,
  "time_alive": 713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 4,
  "time_alive": 1382,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 16,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 61,
  "time_alive": 1054,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 3,
  "time_alive": 1425,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 46,
  "time_alive": 1151,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 96,
  "time_alive": 111,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 1,
  "time_alive": 1431,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 90,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 66,
  "time_alive": 891,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 65,
  "time_alive": 935,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 26,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 14,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 50,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 24,
  "time_alive": 1330,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 45,
  "time_alive": 1231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 26,
  "time_alive": 1302,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 1,
  "time_alive": 1430,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb",
  "placement": 20,
  "time_alive": 1267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 39,
  "time_alive": 1260,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 15,
  "time_alive": 1361,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 76,
  "time_alive": 406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 91,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 17,
  "time_alive": 1328,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 5,
  "time_alive": 1425,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 16,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 44,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 20,
  "time_alive": 1364,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 23,
  "time_alive": 1306,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 14,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 2,
  "time_alive": 1370,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 88,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 87,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 19,
  "time_alive": 1364,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 52,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 42,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 13,
  "time_alive": 1380,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 53,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 2,
  "time_alive": 1487,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 2,
  "time_alive": 1506,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 28,
  "time_alive": 1292,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 90,
  "time_alive": 237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "f5783ecc4b074396aad638fd7baa1c89",
  "placement": 12,
  "time_alive": 1298,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 29,
  "time_alive": 1299,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 42,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 52,
  "time_alive": 1168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 70,
  "time_alive": 849,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 5,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 34,
  "time_alive": 1268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 7,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 93,
  "time_alive": 320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 31,
  "time_alive": 1340,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 2,
  "time_alive": 1459,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 44,
  "time_alive": 1166,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 3,
  "time_alive": 1356,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 10,
  "time_alive": 1359,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 92,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 1,
  "time_alive": 1468,
  "elims": 10,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 24,
  "time_alive": 1290,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 27,
  "time_alive": 1296,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 85,
  "time_alive": 316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 38,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 75,
  "time_alive": 839,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 65,
  "time_alive": 1021,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 99,
  "time_alive": 89,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 81,
  "time_alive": 374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 14,
  "time_alive": 1290,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 52,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 46,
  "time_alive": 1244,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 56,
  "time_alive": 1132,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 17,
  "time_alive": 1319,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 7,
  "time_alive": 1377,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 90,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 2,
  "time_alive": 1435,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 80,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 78,
  "time_alive": 646,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 5,
  "time_alive": 1404,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 51,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 5,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 73,
  "time_alive": 743,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 74,
  "time_alive": 762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 23,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 8,
  "time_alive": 1385,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 91,
  "time_alive": 271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 6,
  "time_alive": 1420,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 9,
  "time_alive": 1364,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 67,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 8,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 78,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 4,
  "time_alive": 1378,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "9032a26b8a7845dd991841581182a1dd",
  "placement": 50,
  "time_alive": 945,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 87,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 9,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 65,
  "time_alive": 907,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 34,
  "time_alive": 1252,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 1,
  "time_alive": 1427,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 87,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 62,
  "time_alive": 965,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 63,
  "time_alive": 972,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 35,
  "time_alive": 1318,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 84,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 61,
  "time_alive": 871,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 66,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 35,
  "time_alive": 1267,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 1,
  "time_alive": 1454,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 64,
  "time_alive": 975,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 15,
  "time_alive": 1353,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 19,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 8,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 22,
  "time_alive": 1334,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 43,
  "time_alive": 1284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 34,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 32,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 20,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "6836c1ada1494eefa005aac3604892d3",
  "placement": 41,
  "time_alive": 1059,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 72,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 70,
  "time_alive": 886,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 97,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 80,
  "time_alive": 627,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 8,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 48,
  "time_alive": 1147,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 3,
  "time_alive": 1432,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 39,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 55,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 8,
  "time_alive": 1365,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 95,
  "time_alive": 149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "7b72b0f938b2436f9ede554db15d5058",
  "placement": 45,
  "time_alive": 1019,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 2,
  "time_alive": 1431,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 44,
  "time_alive": 1252,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 35,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 9,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 71,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 27,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 43,
  "time_alive": 1212,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 6,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 23,
  "time_alive": 1357,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 36,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 55,
  "time_alive": 1020,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "47ecd7b3aaac451cae8eac732283793b",
  "placement": 22,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 8,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 25,
  "time_alive": 1322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 7,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 5,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 24,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 16,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 84,
  "time_alive": 573,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 46,
  "time_alive": 1210,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 43,
  "time_alive": 1242,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 49,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 16,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e",
  "placement": 63,
  "time_alive": 692,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 62,
  "time_alive": 1048,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 11,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 28,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 14,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 70,
  "time_alive": 848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 68,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 75,
  "time_alive": 831,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 87,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 49,
  "time_alive": 1206,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 6,
  "time_alive": 1398,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 13,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "95b8c65a16ec4322824da21fe511371a",
  "placement": 42,
  "time_alive": 1051,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 7,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 24,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 78,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 59,
  "time_alive": 998,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 33,
  "time_alive": 1259,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 32,
  "time_alive": 1277,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 42,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 22,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 18,
  "time_alive": 1367,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 54,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 34,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 9,
  "time_alive": 1303,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 21,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 86,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 10,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 2,
  "time_alive": 1455,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 46,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 7,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 67,
  "time_alive": 925,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 78,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 36,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 60,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 78,
  "time_alive": 432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "3a21b075f43c4fefab5a1f34f386950e",
  "placement": 61,
  "time_alive": 776,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 17,
  "time_alive": 1343,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 2,
  "time_alive": 1454,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 47,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 74,
  "time_alive": 792,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 69,
  "time_alive": 854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 53,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 13,
  "time_alive": 1356,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 20,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 72,
  "time_alive": 834,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 52,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 67,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 34,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 30,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 68,
  "time_alive": 1011,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 12,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 46,
  "time_alive": 1142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 16,
  "time_alive": 1332,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 43,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 26,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 83,
  "time_alive": 681,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 10,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 37,
  "time_alive": 1246,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 27,
  "time_alive": 1282,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "2e931c83e41a41bf91dd046a506c0bb4",
  "placement": 17,
  "time_alive": 1283,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 97,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 7,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 25,
  "time_alive": 1343,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 64,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 26,
  "time_alive": 1329,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 23,
  "time_alive": 1333,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 31,
  "time_alive": 1314,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 75,
  "time_alive": 720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 51,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 49,
  "time_alive": 1115,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5",
  "placement": 4,
  "time_alive": 1349,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 78,
  "time_alive": 621,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 33,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 6,
  "time_alive": 1444,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 20,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 47,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 17,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 95,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 49,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 24,
  "time_alive": 1352,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 44,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 15,
  "time_alive": 1316,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "58e879def6184b8ebd7b1f09be8b4ea0",
  "placement": 43,
  "time_alive": 1037,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 76,
  "time_alive": 642,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 21,
  "time_alive": 1331,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 73,
  "time_alive": 505,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 12,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 60,
  "time_alive": 1058,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 10,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 60,
  "time_alive": 967,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 30,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 81,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 34,
  "time_alive": 1256,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 11,
  "time_alive": 1340,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "5aff6b2d7827462993fdc563295956c2",
  "placement": 31,
  "time_alive": 1207,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 83,
  "time_alive": 559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 40,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 20,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 36,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 2,
  "time_alive": 1427,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 61,
  "time_alive": 957,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 25,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 27,
  "time_alive": 1324,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 25,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 45,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 18,
  "time_alive": 1307,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 78,
  "time_alive": 387,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 43,
  "time_alive": 1213,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 37,
  "time_alive": 1275,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 21,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 49,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 21,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 38,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 39,
  "time_alive": 1223,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 38,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 42,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 7,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 36,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 56,
  "time_alive": 854,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 42,
  "time_alive": 1234,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 59,
  "time_alive": 1095,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 17,
  "time_alive": 1365,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 26,
  "time_alive": 1279,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 64,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 15,
  "time_alive": 1368,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 29,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 77,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 39,
  "time_alive": 1296,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 69,
  "time_alive": 725,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 52,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 23,
  "time_alive": 1256,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 36,
  "time_alive": 1264,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 41,
  "time_alive": 1258,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 60,
  "time_alive": 1036,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 11,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 10,
  "time_alive": 1351,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 55,
  "time_alive": 996,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 65,
  "time_alive": 960,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 35,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 28,
  "time_alive": 1342,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 21,
  "time_alive": 1309,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 66,
  "time_alive": 743,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "6833f282e0d14b0987ad0df26378e6cb",
  "placement": 26,
  "time_alive": 1243,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 49,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 66,
  "time_alive": 1040,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 53,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 63,
  "time_alive": 948,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 56,
  "time_alive": 1092,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 31,
  "time_alive": 1282,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 83,
  "time_alive": 603,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 4,
  "time_alive": 1415,
  "elims": 12,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 93,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 96,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 40,
  "time_alive": 1216,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "470ab8f8a81742b89c1054979874ea20",
  "placement": 82,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 89,
  "time_alive": 381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 22,
  "time_alive": 1325,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 71,
  "time_alive": 593,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 67,
  "time_alive": 872,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 94,
  "time_alive": 211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 70,
  "time_alive": 632,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 18,
  "time_alive": 1344,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 15,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 56,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 95,
  "time_alive": 186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 96,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 91,
  "time_alive": 166,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 31,
  "time_alive": 1280,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 19,
  "time_alive": 1338,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 51,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 44,
  "time_alive": 1174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 59,
  "time_alive": 1075,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 64,
  "time_alive": 826,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 21,
  "time_alive": 1334,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 61,
  "time_alive": 1057,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 73,
  "time_alive": 830,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 75,
  "time_alive": 587,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 17,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "4936acba77404957962521b0146f6640",
  "placement": 16,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 64,
  "time_alive": 1045,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 98,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 5,
  "time_alive": 1455,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 6,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 97,
  "time_alive": 41,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 51,
  "time_alive": 1052,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 55,
  "time_alive": 1079,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 65,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 29,
  "time_alive": 1341,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 48,
  "time_alive": 1115,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 39,
  "time_alive": 1219,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "fbc52b1997cb40c7ade823360c605915",
  "placement": 55,
  "time_alive": 871,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 11,
  "time_alive": 1354,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 35,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 92,
  "time_alive": 229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 93,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 75,
  "time_alive": 779,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 80,
  "time_alive": 493,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 36,
  "time_alive": 1248,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 66,
  "time_alive": 954,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 70,
  "time_alive": 882,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 10,
  "time_alive": 1358,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 30,
  "time_alive": 1268,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 87,
  "time_alive": 317,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 85,
  "time_alive": 532,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 62,
  "time_alive": 1075,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 95,
  "time_alive": 174,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 43,
  "time_alive": 1176,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 51,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 60,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 10,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 25,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 4,
  "time_alive": 1439,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 17,
  "time_alive": 1325,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 71,
  "time_alive": 680,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "ccbe4029364f4e3aa0fe8f3c907f23ca",
  "placement": 47,
  "time_alive": 996,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 46,
  "time_alive": 1185,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 5,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 84,
  "time_alive": 306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 31,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 57,
  "time_alive": 1090,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 67,
  "time_alive": 700,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 69,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 84,
  "time_alive": 607,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 83,
  "time_alive": 489,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 39,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 42,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 38,
  "time_alive": 1133,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 15,
  "time_alive": 1347,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 63,
  "time_alive": 1064,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 34,
  "time_alive": 1284,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 60,
  "time_alive": 987,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 52,
  "time_alive": 1113,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 19,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 91,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 57,
  "time_alive": 1104,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 13,
  "time_alive": 1395,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 12,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 29,
  "time_alive": 1270,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "59ffc9121c6d43f099a89025b1470723",
  "placement": 35,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 84,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 49,
  "time_alive": 1202,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 63,
  "time_alive": 988,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 19,
  "time_alive": 1306,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 41,
  "time_alive": 1196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 54,
  "time_alive": 1004,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 51,
  "time_alive": 1116,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 11,
  "time_alive": 1383,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 26,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 40,
  "time_alive": 1231,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 47,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 36,
  "time_alive": 1145,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 47,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 23,
  "time_alive": 1324,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 15,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 10,
  "time_alive": 1374,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 35,
  "time_alive": 1253,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 33,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 33,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 68,
  "time_alive": 931,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 87,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 16,
  "time_alive": 1325,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 58,
  "time_alive": 963,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 44,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 77,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 65,
  "time_alive": 1051,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 8,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 69,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 32,
  "time_alive": 1262,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 1,
  "time_alive": 1503,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 96,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 52,
  "time_alive": 1159,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 54,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 19,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 22,
  "time_alive": 1305,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "cc383e693def4c0e831b285f97dbf299",
  "placement": 74,
  "time_alive": 507,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 12,
  "time_alive": 1351,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 95,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 61,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 85,
  "time_alive": 467,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 93,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 71,
  "time_alive": 613,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 86,
  "time_alive": 509,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 28,
  "time_alive": 1322,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 68,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 9,
  "time_alive": 1361,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 97,
  "time_alive": 104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 29,
  "time_alive": 1226,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 24,
  "time_alive": 1321,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 13,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 81,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 56,
  "time_alive": 1040,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 22,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 35,
  "time_alive": 1263,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 34,
  "time_alive": 1291,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 74,
  "time_alive": 844,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 74,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 63,
  "time_alive": 892,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 9,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 77,
  "time_alive": 393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 74,
  "time_alive": 739,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 31,
  "time_alive": 1298,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 50,
  "time_alive": 1170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 7,
  "time_alive": 1399,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 89,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 56,
  "time_alive": 988,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 57,
  "time_alive": 1045,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 79,
  "time_alive": 787,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 15,
  "time_alive": 1388,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 92,
  "time_alive": 281,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 86,
  "time_alive": 314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "88776fcf62aa4ce78caf671291739cc3",
  "placement": 69,
  "time_alive": 572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 16,
  "time_alive": 1345,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 18,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 22,
  "time_alive": 1357,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 47,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 20,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 39,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 28,
  "time_alive": 1312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 59,
  "time_alive": 1091,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 37,
  "time_alive": 1300,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 35,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 32,
  "time_alive": 1265,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 18,
  "time_alive": 1274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 57,
  "time_alive": 1091,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 20,
  "time_alive": 1332,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 9,
  "time_alive": 1414,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 48,
  "time_alive": 1094,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 77,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 91,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 85,
  "time_alive": 522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 29,
  "time_alive": 1317,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 97,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 43,
  "time_alive": 1204,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 54,
  "time_alive": 1035,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "915d32de572741389e657ddbd6ad6271",
  "placement": 88,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 56,
  "time_alive": 1098,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 68,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 95,
  "time_alive": 227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 43,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 58,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 68,
  "time_alive": 922,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 73,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 6,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 25,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 19,
  "time_alive": 1306,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "4e4af55e6d1d4369a02c020ed6b2b602",
  "placement": 8,
  "time_alive": 1304,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 48,
  "time_alive": 1178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 45,
  "time_alive": 1249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 69,
  "time_alive": 662,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 40,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 92,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 12,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 8,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 37,
  "time_alive": 1300,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 50,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 33,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 3,
  "time_alive": 1421,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "897945edbfb34a448539ace11d5e4154",
  "placement": 39,
  "time_alive": 1132,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 13,
  "time_alive": 1351,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 50,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 54,
  "time_alive": 1149,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 28,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 87,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 76,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 30,
  "time_alive": 1299,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 5,
  "time_alive": 1392,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 52,
  "time_alive": 1133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 65,
  "time_alive": 855,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 57,
  "time_alive": 1003,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "454bd129a28a4b89ba569a45a1c15602",
  "placement": 72,
  "time_alive": 528,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 55,
  "time_alive": 1106,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 3,
  "time_alive": 1429,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 99,
  "time_alive": 158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 96,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 37,
  "time_alive": 1248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 23,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 17,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 17,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 60,
  "time_alive": 1057,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 86,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 63,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "8efc798684d642dc8ef04fd2c3cd3324",
  "placement": 27,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 32,
  "time_alive": 1272,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 34,
  "time_alive": 1286,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 31,
  "time_alive": 1295,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 45,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 40,
  "time_alive": 1207,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 94,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 35,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 50,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 77,
  "time_alive": 478,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 72,
  "time_alive": 658,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "ec478bf726d84f0b877cdfdc5b722616",
  "placement": 19,
  "time_alive": 1267,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 53,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 12,
  "time_alive": 1365,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 38,
  "time_alive": 1266,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 79,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 34,
  "time_alive": 1259,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 82,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 52,
  "time_alive": 1112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 82,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 21,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 27,
  "time_alive": 1298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 5,
  "time_alive": 1375,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "e9e67ae175c64eb696fd44090191cd1e",
  "placement": 57,
  "time_alive": 853,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 41,
  "time_alive": 1238,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 51,
  "time_alive": 1177,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 90,
  "time_alive": 233,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 58,
  "time_alive": 1008,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 74,
  "time_alive": 800,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 63,
  "time_alive": 879,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 12,
  "time_alive": 1358,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 53,
  "time_alive": 1157,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 58,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 71,
  "time_alive": 709,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 28,
  "time_alive": 1275,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "6270332276484214ad418c7827e93d2c",
  "placement": 70,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 6,
  "time_alive": 1387,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 27,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 57,
  "time_alive": 1131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 98,
  "time_alive": 190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 39,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 77,
  "time_alive": 583,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 32,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 42,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 41,
  "time_alive": 1247,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 73,
  "time_alive": 672,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 88,
  "time_alive": 268,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 21,
  "time_alive": 1265,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 27,
  "time_alive": 1302,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 8,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 29,
  "time_alive": 1318,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 32,
  "time_alive": 1261,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 72,
  "time_alive": 817,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 46,
  "time_alive": 1173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 63,
  "time_alive": 962,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 98,
  "time_alive": 197,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 17,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 90,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 76,
  "time_alive": 457,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 81,
  "time_alive": 370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 59,
  "time_alive": 1070,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 53,
  "time_alive": 1175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 39,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 33,
  "time_alive": 1256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 4,
  "time_alive": 1388,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 42,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 64,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 18,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 67,
  "time_alive": 950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 38,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 84,
  "time_alive": 354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 68,
  "time_alive": 577,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 91,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 28,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 14,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 18,
  "time_alive": 1315,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 18,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 20,
  "time_alive": 1346,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 20,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 36,
  "time_alive": 1303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 94,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 14,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 38,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 97,
  "time_alive": 103,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 94,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 29,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 86,
  "time_alive": 257,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 35,
  "time_alive": 1225,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 95,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 95,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 99,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 90,
  "time_alive": 402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 12,
  "time_alive": 1397,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 42,
  "time_alive": 1214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 6,
  "time_alive": 1375,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 54,
  "time_alive": 873,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 98,
  "time_alive": 156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 48,
  "time_alive": 1213,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 74,
  "time_alive": 474,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 77,
  "time_alive": 700,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 6,
  "time_alive": 1382,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 86,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 46,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 47,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 96,
  "time_alive": 185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 18,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 35,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "e2011ff1bc324b22a850c0551ceb0267",
  "placement": 75,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 71,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 38,
  "time_alive": 1271,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 98,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 54,
  "time_alive": 1063,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 50,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 65,
  "time_alive": 714,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 27,
  "time_alive": 1317,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 60,
  "time_alive": 1088,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 80,
  "time_alive": 608,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 22,
  "time_alive": 1309,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 12,
  "time_alive": 1335,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "7004cd495bd34662945c508d118f65a7",
  "placement": 15,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 54,
  "time_alive": 1130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 32,
  "time_alive": 1287,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 26,
  "time_alive": 1342,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 68,
  "time_alive": 860,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 61,
  "time_alive": 1049,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 45,
  "time_alive": 1180,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 73,
  "time_alive": 852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 26,
  "time_alive": 1326,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 77,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 58,
  "time_alive": 1062,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 75,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 6,
  "time_alive": 1329,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 14,
  "time_alive": 1348,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 73,
  "time_alive": 812,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 24,
  "time_alive": 1346,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 97,
  "time_alive": 210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 11,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 96,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 77,
  "time_alive": 816,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 91,
  "time_alive": 361,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 76,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 31,
  "time_alive": 1280,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 79,
  "time_alive": 431,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "097615f47d924e4c9d7324fd8680a44d",
  "placement": 71,
  "time_alive": 548,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 3,
  "time_alive": 1423,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 17,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 79,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 57,
  "time_alive": 1009,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 49,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 28,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 66,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 41,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 88,
  "time_alive": 346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 82,
  "time_alive": 385,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 94,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e",
  "placement": 37,
  "time_alive": 1138,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 28,
  "time_alive": 1302,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 14,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 88,
  "time_alive": 235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 39,
  "time_alive": 1183,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 81,
  "time_alive": 408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 29,
  "time_alive": 1308,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 76,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 23,
  "time_alive": 1333,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 19,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 94,
  "time_alive": 269,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 41,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63",
  "placement": 60,
  "time_alive": 793,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 37,
  "time_alive": 1261,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 84,
  "time_alive": 512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 46,
  "time_alive": 1190,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 83,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 67,
  "time_alive": 902,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 52,
  "time_alive": 1018,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 41,
  "time_alive": 1217,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 76,
  "time_alive": 829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 71,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 1,
  "time_alive": 1459,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "05d9620c5190493db11a901b9c9c8d7f",
  "placement": 68,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 20,
  "time_alive": 1329,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 55,
  "time_alive": 1162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 48,
  "time_alive": 1179,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 87,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 88,
  "time_alive": 284,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 50,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 87,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 69,
  "time_alive": 899,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 9,
  "time_alive": 1403,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 93,
  "time_alive": 277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 74,
  "time_alive": 526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "a0bbb624bd5b46418d8da19441f0b183",
  "placement": 25,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "bd16911e-1599-4069-a2a4-e1c59472bf8d",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 26,
  "time_alive": 1305,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05a44409-0538-49d7-a686-84004cd81adf",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 47,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "235a13a7-677a-4812-a79e-210c0d347dbd",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 67,
  "time_alive": 803,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1b114118-aaaa-441c-8943-58b2c6e9dd00",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 25,
  "time_alive": 1289,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "4b556c36-1838-4381-b2d2-da70712af589",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 58,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8e4e411b-1531-460f-bc13-f4d20153244d",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 72,
  "time_alive": 609,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01e9ae6d-2b0f-4253-a940-927a0ca9fc38",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 11,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "06fbe42f-8384-4f96-8622-d0e0b84dc40a",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 19,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "2432f52a-caec-487d-9338-20d0c17c3cae",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 14,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3aa3941e-3603-42e3-be93-c3df1b9e53b7",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 91,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d1c03ac-1471-4731-b231-8eabb077e5df",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 93,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "323657b5-179a-4979-80d5-e3d3413b83ad",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 89,
  "time_alive": 218,
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
    