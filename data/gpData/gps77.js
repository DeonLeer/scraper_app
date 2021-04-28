const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 9,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 16,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 25,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 18,
  "time_alive": 1038,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 16,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 27,
  "time_alive": 381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 28,
  "time_alive": 539,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 21,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 20,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0c910129-9645-4652-8aa3-353c07617ec6",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 2,
  "time_alive": 1030,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 28,
  "time_alive": 175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 18,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 32,
  "time_alive": 85,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 19,
  "time_alive": 1175,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 12,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 21,
  "time_alive": 938,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 17,
  "time_alive": 1294,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 14,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 12,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 21,
  "time_alive": 1090,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 26,
  "time_alive": 830,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 24,
  "time_alive": 846,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 25,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 19,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 23,
  "time_alive": 1156,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 27,
  "time_alive": 731,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 20,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 16,
  "time_alive": 1182,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 26,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 24,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 22,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 26,
  "time_alive": 741,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 29,
  "time_alive": 415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 17,
  "time_alive": 1056,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02bde4ad-8bf1-448c-9aaa-1e4dcb182b51",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 29,
  "time_alive": 142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 25,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 24,
  "time_alive": 1150,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 24,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 27,
  "time_alive": 621,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 29,
  "time_alive": 339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03311016-1513-43bc-92ec-c8167994de0e",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 28,
  "time_alive": 197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04ad904e-173a-424d-ab42-daaab810a4d1",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 29,
  "time_alive": 297,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02723188-f565-40cf-8b12-355ec7c8e531",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 32,
  "time_alive": 121,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007724e6-b190-496d-b487-41aa513fe236",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 32,
  "time_alive": 87,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 31,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "025cdf1a-9668-4039-ac93-c00fd3d33fbb",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 25,
  "time_alive": 823,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 13,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 2,
  "time_alive": 1616,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 11,
  "time_alive": 1315,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 3,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 10,
  "time_alive": 1471,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 1,
  "time_alive": 1575,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 1,
  "time_alive": 1591,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 22,
  "time_alive": 1118,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 4,
  "time_alive": 1460,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 1,
  "time_alive": 1558,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 26,
  "time_alive": 445,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 12,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 29,
  "time_alive": 363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 11,
  "time_alive": 1341,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 6,
  "time_alive": 1399,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 17,
  "time_alive": 1209,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 7,
  "time_alive": 1592,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 4,
  "time_alive": 1522,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 33,
  "time_alive": 120,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 19,
  "time_alive": 1177,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 18,
  "time_alive": 1192,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 2,
  "time_alive": 1558,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 8,
  "time_alive": 1502,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 6,
  "time_alive": 1455,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 16,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 10,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 26,
  "time_alive": 748,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 7,
  "time_alive": 1487,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 2,
  "time_alive": 1706,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 10,
  "time_alive": 1364,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 2,
  "time_alive": 1591,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 1,
  "time_alive": 1616,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 12,
  "time_alive": 1330,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 23,
  "time_alive": 1065,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 23,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 4,
  "time_alive": 1530,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 16,
  "time_alive": 1307,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 7,
  "time_alive": 1354,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1276,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 1,
  "time_alive": 1706,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 15,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 15,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 4,
  "time_alive": 1557,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 13,
  "time_alive": 1294,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 11,
  "time_alive": 1365,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 3,
  "time_alive": 1691,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 29,
  "time_alive": 430,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 10,
  "time_alive": 1374,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 9,
  "time_alive": 1384,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 23,
  "time_alive": 1077,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 16,
  "time_alive": 1263,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 16,
  "time_alive": 1358,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 5,
  "time_alive": 1462,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 6,
  "time_alive": 1472,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 12,
  "time_alive": 1327,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 5,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 13,
  "time_alive": 1323,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 15,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 30,
  "time_alive": 300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 20,
  "time_alive": 1141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 10,
  "time_alive": 1316,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 8,
  "time_alive": 1483,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 22,
  "time_alive": 1078,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 2,
  "time_alive": 1575,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 7,
  "time_alive": 1471,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 7,
  "time_alive": 1437,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 9,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 10,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 17,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 7,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 23,
  "time_alive": 1118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 23,
  "time_alive": 1112,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 1,
  "time_alive": 1552,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 18,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 4,
  "time_alive": 1664,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 11,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 28,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 15,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 3,
  "time_alive": 1534,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 9,
  "time_alive": 1440,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 14,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 24,
  "time_alive": 930,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 18,
  "time_alive": 1284,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 5,
  "time_alive": 1541,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 12,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 4,
  "time_alive": 1515,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 27,
  "time_alive": 418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 9,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 25,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 20,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 5,
  "time_alive": 1509,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 9,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 9,
  "time_alive": 1365,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 3,
  "time_alive": 1582,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 6,
  "time_alive": 1514,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 16,
  "time_alive": 1243,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 22,
  "time_alive": 1103,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 21,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 25,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 19,
  "time_alive": 1204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 3,
  "time_alive": 1569,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 15,
  "time_alive": 1252,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 23,
  "time_alive": 1093,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 12,
  "time_alive": 1435,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 14,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 14,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 14,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 6,
  "time_alive": 1502,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 6,
  "time_alive": 1644,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 19,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 31,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 21,
  "time_alive": 1125,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 2,
  "time_alive": 1552,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 14,
  "time_alive": 1302,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 33,
  "time_alive": 133,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 31,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 17,
  "time_alive": 1296,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 31,
  "time_alive": 213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 17,
  "time_alive": 1197,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 24,
  "time_alive": 1084,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 24,
  "time_alive": 840,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 3,
  "time_alive": 1535,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 5,
  "time_alive": 1503,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 28,
  "time_alive": 738,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 28,
  "time_alive": 545,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 32,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 11,
  "time_alive": 1466,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 20,
  "time_alive": 1125,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 8,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 18,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 8,
  "time_alive": 1348,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 19,
  "time_alive": 1165,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 19,
  "time_alive": 1265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 16,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 12,
  "time_alive": 1335,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 32,
  "time_alive": 193,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 22,
  "time_alive": 1105,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 27,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 31,
  "time_alive": 205,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 26,
  "time_alive": 714,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 32,
  "time_alive": 169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 24,
  "time_alive": 989,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 31,
  "time_alive": 218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 30,
  "time_alive": 263,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 5,
  "time_alive": 1659,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 13,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 25,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 8,
  "time_alive": 1416,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 24,
  "time_alive": 934,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 31,
  "time_alive": 243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 29,
  "time_alive": 284,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 21,
  "time_alive": 1087,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 14,
  "time_alive": 1331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 30,
  "time_alive": 215,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 25,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 21,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 13,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 27,
  "time_alive": 461,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 11,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 13,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 30,
  "time_alive": 301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 25,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 20,
  "time_alive": 1255,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 18,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 20,
  "time_alive": 1172,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 26,
  "time_alive": 791,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 27,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 26,
  "time_alive": 676,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 18,
  "time_alive": 1279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 8,
  "time_alive": 1411,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 30,
  "time_alive": 343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 17,
  "time_alive": 1300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 29,
  "time_alive": 378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 29,
  "time_alive": 501,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 25,
  "time_alive": 800,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 22,
  "time_alive": 1076,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 26,
  "time_alive": 756,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 29,
  "time_alive": 259,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 32,
  "time_alive": 136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 33,
  "time_alive": 137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 30,
  "time_alive": 253,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 17,
  "time_alive": 1193,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "01d70d660c7a4540b528d827f8639b49:14fe59a31ed64748bf47a45db8cd5a48:7cb516dbd325449e86498693a82fd5b7",
  "placement": 27,
  "time_alive": 702,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "01d70d660c7a4540b528d827f8639b49:14fe59a31ed64748bf47a45db8cd5a48:7cb516dbd325449e86498693a82fd5b7",
  "placement": 33,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "01d70d660c7a4540b528d827f8639b49:14fe59a31ed64748bf47a45db8cd5a48:7cb516dbd325449e86498693a82fd5b7",
  "placement": 21,
  "time_alive": 1115,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "01d70d660c7a4540b528d827f8639b49:14fe59a31ed64748bf47a45db8cd5a48:7cb516dbd325449e86498693a82fd5b7",
  "placement": 20,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "01d70d660c7a4540b528d827f8639b49:14fe59a31ed64748bf47a45db8cd5a48:7cb516dbd325449e86498693a82fd5b7",
  "placement": 28,
  "time_alive": 337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "01d70d660c7a4540b528d827f8639b49:14fe59a31ed64748bf47a45db8cd5a48:7cb516dbd325449e86498693a82fd5b7",
  "placement": 28,
  "time_alive": 432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "03aaab45-3db9-4395-88f1-013bc3a3635e",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 24,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "084a545f-8e23-4eeb-b1b5-176b65763ea3",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 27,
  "time_alive": 786,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0077189d-0e03-463f-827e-b240526dc9d5",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 19,
  "time_alive": 1164,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e27e62-8c18-4251-b2a2-f9677bcae551",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 28,
  "time_alive": 553,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e38ec5-b50a-444d-9ab5-d6286dee4eb1",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 32,
  "time_alive": 135,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0a168143-59ed-4ef3-9ac3-de6db539eb89",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 32,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 19,
  "time_alive": 1260,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 5,
  "time_alive": 1442,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 1,
  "time_alive": 1486,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 10,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 3,
  "time_alive": 1454,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "389fbbccd72c49c7a8d865c7a699782b:cc653779964c4f9188d29e15a6465a61:f161fd5c2cb94d45a02b6416c00856e9",
  "placement": 6,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 3,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 7,
  "time_alive": 1412,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 3,
  "time_alive": 1457,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 1,
  "time_alive": 1509,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "266b0993e7a4469eb75879a9b2322277:40c357a7608a47f7b56620ff3a2f8963:77f4a786037043648a8dbfb094ff9f96",
  "placement": 10,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 2,
  "time_alive": 1488,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 1,
  "time_alive": 1489,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 11,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 11,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 13,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "432c6271f0904d4bb750e0cda115f194:8b44883a09524968813986df657da706:9b333e3d949449309ba8c8a1c491b102",
  "placement": 7,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 7,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 4,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 2,
  "time_alive": 1486,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 2,
  "time_alive": 1469,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 17,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "31a4e8a9d5cc4426a3241204873bbba3:49ea8e499e744a43b0a4c489520f8566:748c8add3c034088b89b4bc4d94e3fe2",
  "placement": 22,
  "time_alive": 1031,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 17,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 8,
  "time_alive": 1421,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 29,
  "time_alive": 706,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 1,
  "time_alive": 1469,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 2,
  "time_alive": 1509,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "5c6aa281aece46b2ab0f9452809704f2:89626ebf70374e92840e995065175c4d:c4079131730b46049ef4ba0ac0288d88",
  "placement": 19,
  "time_alive": 1212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 8,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 2,
  "time_alive": 1489,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 15,
  "time_alive": 1326,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 9,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 25,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "ad8d8c4039e342ba99828e3c7b97e973:c3557295012b4bf5a2ef3f20c95134f8:ca257fa2e6084f74ae48312d0318a153",
  "placement": 11,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 9,
  "time_alive": 1417,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 24,
  "time_alive": 938,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 27,
  "time_alive": 816,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 4,
  "time_alive": 1457,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 5,
  "time_alive": 1416,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "20f2d85012ac4379831e6230d910ee2d:4536de2803d84b30a8ba22fd58ab1268:7cb0a6a3705544d4af11a86113bd9931",
  "placement": 3,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 15,
  "time_alive": 1352,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 19,
  "time_alive": 1146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 12,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 5,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 9,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "12e380f3079243a3a521c7e963b19bd9:96a831605b9642f8af449b25e5d9296e:b467bc30b1b244c79455aba58ec70d42",
  "placement": 2,
  "time_alive": 1429,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 16,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 16,
  "time_alive": 1283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 17,
  "time_alive": 1311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 8,
  "time_alive": 1389,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 6,
  "time_alive": 1413,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "02cc96718f654f3082c04a3699d81b44:739c2b0ffad2413eb33c47ae8d41b310:935279f1280d4c50bce5347680e63152",
  "placement": 1,
  "time_alive": 1429,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 14,
  "time_alive": 1363,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 18,
  "time_alive": 1191,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 4,
  "time_alive": 1460,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 12,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "048898c1c44d400f88210ea96ae282a6:421760545cc442a29fda431ca1fe3393:8f486869b3484794a2760437ce3ea188",
  "placement": 4,
  "time_alive": 1411,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 10,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 12,
  "time_alive": 1330,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 5,
  "time_alive": 1453,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 22,
  "time_alive": 1063,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 26,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "2eb8dca132b64e43abe7e81bc8a2c702:3dd96bb7b3424ff9961ee7ecc5096839:7c6d8c3aa32849aba5a7ecaaaf93a294",
  "placement": 15,
  "time_alive": 1326,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 22,
  "time_alive": 1139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 17,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 3,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 7,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 8,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "045cfa0033e44eeea7a65e83083e2de1:28c7690cb4414f1bb7b7884ff13b3534:3d17c3d6238c469d9109f831a8d89079",
  "placement": 12,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 6,
  "time_alive": 1426,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 6,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 8,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 12,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 19,
  "time_alive": 1144,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "27c5711d010a404c98fcc6bc23a1b534:331aaf405d9f40a497d3158716376448:e70c05653d4e403e84d0a6e0ae28315a",
  "placement": 24,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 27,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 10,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 9,
  "time_alive": 1403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 13,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 4,
  "time_alive": 1445,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "8eb31805f0774bbe8fe155ab9d1f4362:9c304b287eea4f08bcf5527f1ca9059f:a84fd642eff845ed937a2a691962cc01",
  "placement": 18,
  "time_alive": 1306,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 13,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 3,
  "time_alive": 1465,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 20,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 24,
  "time_alive": 1053,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 18,
  "time_alive": 1158,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "a509f50735a346cca41de41370ae98bd:be4dd5c02714461d8201001ea99a6685:f2cc74ea09e24cebbf57372a8bded6d8",
  "placement": 5,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 1,
  "time_alive": 1488,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 28,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 22,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 17,
  "time_alive": 1290,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 30,
  "time_alive": 418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "a0d5490610ad4abf80fe67dbe84a944a:c7791ca386dd4ec493480c3497e6fdf6:c792bfa0d7414b839eea0a87bbfeb8cb",
  "placement": 28,
  "time_alive": 609,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 32,
  "time_alive": 689,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 11,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 6,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 15,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 7,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "808a36bf30b2454cbf20d711677b10d2:c2eb271a63aa45e39c80316cc6955886:eea4ed0609b5480996e7496f76c6e3d6",
  "placement": 25,
  "time_alive": 792,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "70a8e8f746674210b2daa53e783f9c53:acb0f6ba8e4741aea7aea1ccc009a0e6:feeed094d56f4f1bb44f17c074c8708e",
  "placement": 5,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "70a8e8f746674210b2daa53e783f9c53:acb0f6ba8e4741aea7aea1ccc009a0e6:feeed094d56f4f1bb44f17c074c8708e",
  "placement": 23,
  "time_alive": 959,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "70a8e8f746674210b2daa53e783f9c53:acb0f6ba8e4741aea7aea1ccc009a0e6:feeed094d56f4f1bb44f17c074c8708e",
  "placement": 10,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "70a8e8f746674210b2daa53e783f9c53:acb0f6ba8e4741aea7aea1ccc009a0e6:feeed094d56f4f1bb44f17c074c8708e",
  "placement": 18,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "70a8e8f746674210b2daa53e783f9c53:acb0f6ba8e4741aea7aea1ccc009a0e6:feeed094d56f4f1bb44f17c074c8708e",
  "placement": 11,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "70a8e8f746674210b2daa53e783f9c53:acb0f6ba8e4741aea7aea1ccc009a0e6:feeed094d56f4f1bb44f17c074c8708e",
  "placement": 8,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "003c2cc168e84b4ca3ecfc3d554ed232:5a1a75c236504c7bb6a452342c30166b:a565ae2c124e4fecbb9b929614701216",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "003c2cc168e84b4ca3ecfc3d554ed232:5a1a75c236504c7bb6a452342c30166b:a565ae2c124e4fecbb9b929614701216",
  "placement": 25,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "003c2cc168e84b4ca3ecfc3d554ed232:5a1a75c236504c7bb6a452342c30166b:a565ae2c124e4fecbb9b929614701216",
  "placement": 14,
  "time_alive": 1341,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "003c2cc168e84b4ca3ecfc3d554ed232:5a1a75c236504c7bb6a452342c30166b:a565ae2c124e4fecbb9b929614701216",
  "placement": 14,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "003c2cc168e84b4ca3ecfc3d554ed232:5a1a75c236504c7bb6a452342c30166b:a565ae2c124e4fecbb9b929614701216",
  "placement": 15,
  "time_alive": 1223,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "003c2cc168e84b4ca3ecfc3d554ed232:5a1a75c236504c7bb6a452342c30166b:a565ae2c124e4fecbb9b929614701216",
  "placement": 30,
  "time_alive": 222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "3b4d55d841ab4de6b01af4f83262fffc:443823861a67499fafe7b073348b28bd:482525c3921a408e9df7d3c103957253",
  "placement": 24,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "3b4d55d841ab4de6b01af4f83262fffc:443823861a67499fafe7b073348b28bd:482525c3921a408e9df7d3c103957253",
  "placement": 26,
  "time_alive": 853,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "3b4d55d841ab4de6b01af4f83262fffc:443823861a67499fafe7b073348b28bd:482525c3921a408e9df7d3c103957253",
  "placement": 21,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "3b4d55d841ab4de6b01af4f83262fffc:443823861a67499fafe7b073348b28bd:482525c3921a408e9df7d3c103957253",
  "placement": 21,
  "time_alive": 1067,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "3b4d55d841ab4de6b01af4f83262fffc:443823861a67499fafe7b073348b28bd:482525c3921a408e9df7d3c103957253",
  "placement": 16,
  "time_alive": 1193,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "3b4d55d841ab4de6b01af4f83262fffc:443823861a67499fafe7b073348b28bd:482525c3921a408e9df7d3c103957253",
  "placement": 9,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "18c159ccd91643738ddab129fad043c1:2da059b673924ac2a1f5151b10fef6c7:d67d63cf79db4879ad040aa41de0d994",
  "placement": 25,
  "time_alive": 1101,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "18c159ccd91643738ddab129fad043c1:2da059b673924ac2a1f5151b10fef6c7:d67d63cf79db4879ad040aa41de0d994",
  "placement": 7,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "18c159ccd91643738ddab129fad043c1:2da059b673924ac2a1f5151b10fef6c7:d67d63cf79db4879ad040aa41de0d994",
  "placement": 13,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "18c159ccd91643738ddab129fad043c1:2da059b673924ac2a1f5151b10fef6c7:d67d63cf79db4879ad040aa41de0d994",
  "placement": 19,
  "time_alive": 1169,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "18c159ccd91643738ddab129fad043c1:2da059b673924ac2a1f5151b10fef6c7:d67d63cf79db4879ad040aa41de0d994",
  "placement": 24,
  "time_alive": 1010,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "18c159ccd91643738ddab129fad043c1:2da059b673924ac2a1f5151b10fef6c7:d67d63cf79db4879ad040aa41de0d994",
  "placement": 21,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 23,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 9,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 19,
  "time_alive": 1285,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 20,
  "time_alive": 1088,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 27,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "77999a7f609d40bbb621223df590b4d2:d41cf08ed9674fe181262fcfee47101e:d42bba03b5d24c7395419268889f744a",
  "placement": 32,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "7e342ec54ff940168cb5a56a0e9080b4:8e76773d4f134835beb71bfe436e8bef:a85a129230c745d5a35b1079a10a6e64",
  "placement": 4,
  "time_alive": 1466,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "7e342ec54ff940168cb5a56a0e9080b4:8e76773d4f134835beb71bfe436e8bef:a85a129230c745d5a35b1079a10a6e64",
  "placement": 15,
  "time_alive": 1293,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "7e342ec54ff940168cb5a56a0e9080b4:8e76773d4f134835beb71bfe436e8bef:a85a129230c745d5a35b1079a10a6e64",
  "placement": 16,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "7e342ec54ff940168cb5a56a0e9080b4:8e76773d4f134835beb71bfe436e8bef:a85a129230c745d5a35b1079a10a6e64",
  "placement": 23,
  "time_alive": 1057,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "7e342ec54ff940168cb5a56a0e9080b4:8e76773d4f134835beb71bfe436e8bef:a85a129230c745d5a35b1079a10a6e64",
  "placement": 23,
  "time_alive": 1062,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "7e342ec54ff940168cb5a56a0e9080b4:8e76773d4f134835beb71bfe436e8bef:a85a129230c745d5a35b1079a10a6e64",
  "placement": 33,
  "time_alive": 139,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "69dc8433ad5d41c09785c516a4286f6e:b6857322e06742709e43f1496087e990:d5241977cfd54959a663ffa25d2cc45d",
  "placement": 18,
  "time_alive": 1308,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "69dc8433ad5d41c09785c516a4286f6e:b6857322e06742709e43f1496087e990:d5241977cfd54959a663ffa25d2cc45d",
  "placement": 21,
  "time_alive": 1014,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "69dc8433ad5d41c09785c516a4286f6e:b6857322e06742709e43f1496087e990:d5241977cfd54959a663ffa25d2cc45d",
  "placement": 24,
  "time_alive": 1065,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "69dc8433ad5d41c09785c516a4286f6e:b6857322e06742709e43f1496087e990:d5241977cfd54959a663ffa25d2cc45d",
  "placement": 6,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "69dc8433ad5d41c09785c516a4286f6e:b6857322e06742709e43f1496087e990:d5241977cfd54959a663ffa25d2cc45d",
  "placement": 22,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "69dc8433ad5d41c09785c516a4286f6e:b6857322e06742709e43f1496087e990:d5241977cfd54959a663ffa25d2cc45d",
  "placement": 20,
  "time_alive": 1185,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "71c262a110ce46c5b9b7576f76438266:e73783778a474d6290e5e35855892906:ed182650a19c49fe950f578081acf428",
  "placement": 20,
  "time_alive": 1149,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "71c262a110ce46c5b9b7576f76438266:e73783778a474d6290e5e35855892906:ed182650a19c49fe950f578081acf428",
  "placement": 14,
  "time_alive": 1320,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "71c262a110ce46c5b9b7576f76438266:e73783778a474d6290e5e35855892906:ed182650a19c49fe950f578081acf428",
  "placement": 23,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "71c262a110ce46c5b9b7576f76438266:e73783778a474d6290e5e35855892906:ed182650a19c49fe950f578081acf428",
  "placement": 16,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "71c262a110ce46c5b9b7576f76438266:e73783778a474d6290e5e35855892906:ed182650a19c49fe950f578081acf428",
  "placement": 29,
  "time_alive": 434,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "71c262a110ce46c5b9b7576f76438266:e73783778a474d6290e5e35855892906:ed182650a19c49fe950f578081acf428",
  "placement": 31,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "42652b66f44e4d6ba34a8b0b3bb8fb76:a698d4f8ef7f45bf9d4f617f45f44afe:fe1d50baf0e64cee80159bea25f0659c",
  "placement": 30,
  "time_alive": 799,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "42652b66f44e4d6ba34a8b0b3bb8fb76:a698d4f8ef7f45bf9d4f617f45f44afe:fe1d50baf0e64cee80159bea25f0659c",
  "placement": 30,
  "time_alive": 351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "42652b66f44e4d6ba34a8b0b3bb8fb76:a698d4f8ef7f45bf9d4f617f45f44afe:fe1d50baf0e64cee80159bea25f0659c",
  "placement": 18,
  "time_alive": 1297,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "42652b66f44e4d6ba34a8b0b3bb8fb76:a698d4f8ef7f45bf9d4f617f45f44afe:fe1d50baf0e64cee80159bea25f0659c",
  "placement": 29,
  "time_alive": 403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "42652b66f44e4d6ba34a8b0b3bb8fb76:a698d4f8ef7f45bf9d4f617f45f44afe:fe1d50baf0e64cee80159bea25f0659c",
  "placement": 10,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "42652b66f44e4d6ba34a8b0b3bb8fb76:a698d4f8ef7f45bf9d4f617f45f44afe:fe1d50baf0e64cee80159bea25f0659c",
  "placement": 26,
  "time_alive": 761,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 26,
  "time_alive": 837,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 32,
  "time_alive": 171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 31,
  "time_alive": 367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 32,
  "time_alive": 149,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 14,
  "time_alive": 1226,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "568524a5ba0b473b9fc2cf476edcdb60:c3a979cca3854978b7a2ec0acc906d5f:e63cc3e6081842bca19fdf2f23d67de2",
  "placement": 23,
  "time_alive": 941,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "0f0098e12cfb44d4a20d62a857b98133:159b075383e948f388b31ad8d3f3bb7b:c869a35824f64d5ca2935a461be501c6",
  "placement": 21,
  "time_alive": 1146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "0f0098e12cfb44d4a20d62a857b98133:159b075383e948f388b31ad8d3f3bb7b:c869a35824f64d5ca2935a461be501c6",
  "placement": 20,
  "time_alive": 1089,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "0f0098e12cfb44d4a20d62a857b98133:159b075383e948f388b31ad8d3f3bb7b:c869a35824f64d5ca2935a461be501c6",
  "placement": 25,
  "time_alive": 984,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "0f0098e12cfb44d4a20d62a857b98133:159b075383e948f388b31ad8d3f3bb7b:c869a35824f64d5ca2935a461be501c6",
  "placement": 26,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "0f0098e12cfb44d4a20d62a857b98133:159b075383e948f388b31ad8d3f3bb7b:c869a35824f64d5ca2935a461be501c6",
  "placement": 31,
  "time_alive": 294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "0f0098e12cfb44d4a20d62a857b98133:159b075383e948f388b31ad8d3f3bb7b:c869a35824f64d5ca2935a461be501c6",
  "placement": 13,
  "time_alive": 1331,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "d3850e6a1f174029b90e6796662bb076:fb3d05d7bdd54bd6b37be992a206ab99:fb81eb1c07df41a887be09c416341df5",
  "placement": 31,
  "time_alive": 790,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "d3850e6a1f174029b90e6796662bb076:fb3d05d7bdd54bd6b37be992a206ab99:fb81eb1c07df41a887be09c416341df5",
  "placement": 22,
  "time_alive": 971,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "d3850e6a1f174029b90e6796662bb076:fb3d05d7bdd54bd6b37be992a206ab99:fb81eb1c07df41a887be09c416341df5",
  "placement": 30,
  "time_alive": 538,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "d3850e6a1f174029b90e6796662bb076:fb3d05d7bdd54bd6b37be992a206ab99:fb81eb1c07df41a887be09c416341df5",
  "placement": 28,
  "time_alive": 459,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "d3850e6a1f174029b90e6796662bb076:fb3d05d7bdd54bd6b37be992a206ab99:fb81eb1c07df41a887be09c416341df5",
  "placement": 21,
  "time_alive": 1112,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "d3850e6a1f174029b90e6796662bb076:fb3d05d7bdd54bd6b37be992a206ab99:fb81eb1c07df41a887be09c416341df5",
  "placement": 14,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:40d94f427e6a4a18a2125abb3c682b72:e0334d87f82d44f2bb1468c1adaedeb7",
  "placement": 33,
  "time_alive": 59,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:40d94f427e6a4a18a2125abb3c682b72:e0334d87f82d44f2bb1468c1adaedeb7",
  "placement": 13,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:40d94f427e6a4a18a2125abb3c682b72:e0334d87f82d44f2bb1468c1adaedeb7",
  "placement": 33,
  "time_alive": 73,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:40d94f427e6a4a18a2125abb3c682b72:e0334d87f82d44f2bb1468c1adaedeb7",
  "placement": 33,
  "time_alive": 129,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:40d94f427e6a4a18a2125abb3c682b72:e0334d87f82d44f2bb1468c1adaedeb7",
  "placement": 33,
  "time_alive": 62,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "2f0b3c29dc394eb1a855250130154a09:40d94f427e6a4a18a2125abb3c682b72:e0334d87f82d44f2bb1468c1adaedeb7",
  "placement": 16,
  "time_alive": 1325,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 12,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 29,
  "time_alive": 807,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 26,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 31,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 28,
  "time_alive": 475,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "05618ac4cbb14a689438e6831cee441a:7cc4e2c919644093b9714763b268847a:cce359ee3a0f479baf8d6916165f17f4",
  "placement": 27,
  "time_alive": 681,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "4251bd2bf6674abc95538beaa145eac0:596a1baa42cf4167aa8af4179a733ea0:f38592652449475ca854bf3f49a9987e",
  "placement": 29,
  "time_alive": 820,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "4251bd2bf6674abc95538beaa145eac0:596a1baa42cf4167aa8af4179a733ea0:f38592652449475ca854bf3f49a9987e",
  "placement": 31,
  "time_alive": 195,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "4251bd2bf6674abc95538beaa145eac0:596a1baa42cf4167aa8af4179a733ea0:f38592652449475ca854bf3f49a9987e",
  "placement": 32,
  "time_alive": 167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "4251bd2bf6674abc95538beaa145eac0:596a1baa42cf4167aa8af4179a733ea0:f38592652449475ca854bf3f49a9987e",
  "placement": 30,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "4251bd2bf6674abc95538beaa145eac0:596a1baa42cf4167aa8af4179a733ea0:f38592652449475ca854bf3f49a9987e",
  "placement": 20,
  "time_alive": 1133,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "4251bd2bf6674abc95538beaa145eac0:596a1baa42cf4167aa8af4179a733ea0:f38592652449475ca854bf3f49a9987e",
  "placement": 17,
  "time_alive": 1309,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5c17bbed-b8a2-493f-821d-9912965fb2a9",
  "team_id": "1dcf41d1ad8043dc8fcac9f428578fde:55d16ac34e734f7d8259e9e0c5c6a583:965747b809844006b1bd6dc2ceadf981",
  "placement": 28,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "70cdaa45-8317-4eaa-b381-7c8a2a726213",
  "team_id": "1dcf41d1ad8043dc8fcac9f428578fde:55d16ac34e734f7d8259e9e0c5c6a583:965747b809844006b1bd6dc2ceadf981",
  "placement": 33,
  "time_alive": 128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a20be2fb-15a8-49a6-a684-ed715d10320a",
  "team_id": "1dcf41d1ad8043dc8fcac9f428578fde:55d16ac34e734f7d8259e9e0c5c6a583:965747b809844006b1bd6dc2ceadf981",
  "placement": 28,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8f1a16fc-bf1f-49d2-87b1-b13ac7365bc4",
  "team_id": "1dcf41d1ad8043dc8fcac9f428578fde:55d16ac34e734f7d8259e9e0c5c6a583:965747b809844006b1bd6dc2ceadf981",
  "placement": 27,
  "time_alive": 833,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9bb62e20-4d27-4a21-99a1-dd22864b5343",
  "team_id": "1dcf41d1ad8043dc8fcac9f428578fde:55d16ac34e734f7d8259e9e0c5c6a583:965747b809844006b1bd6dc2ceadf981",
  "placement": 32,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "53fa46b2-1c16-4029-9213-773c9dd68ac4",
  "team_id": "1dcf41d1ad8043dc8fcac9f428578fde:55d16ac34e734f7d8259e9e0c5c6a583:965747b809844006b1bd6dc2ceadf981",
  "placement": 29,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1453,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 7,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 3,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 1,
  "time_alive": 1407,
  "elims": 20,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 8,
  "time_alive": 1406,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "0fe3ce31bb8247eaa96056d3713572c4:caade4c08f27413aba5daee9f68c0bbc:e8788121e9634a0291707b7772b10502",
  "placement": 17,
  "time_alive": 1208,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 9,
  "time_alive": 1368,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 1,
  "time_alive": 1438,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 9,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 2,
  "time_alive": 1407,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 15,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "033786339d914cb59286221b820fd4bb:24daa3b1a4ca43bcb1fcf96d32e84032:85bf29cb0d8c4be088075adaa5c582d1",
  "placement": 13,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 2,
  "time_alive": 1453,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 4,
  "time_alive": 1393,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 1,
  "time_alive": 1408,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 11,
  "time_alive": 1342,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 21,
  "time_alive": 760,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "59d0981dd5c141e0930d5349c8e3cd0a:7ae5a4d3e6e9404ab61f7890dc7989e9:9391533faf794986b88893947721caf8",
  "placement": 23,
  "time_alive": 693,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 12,
  "time_alive": 1317,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 8,
  "time_alive": 1364,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 24,
  "time_alive": 1122,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 6,
  "time_alive": 1368,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 1,
  "time_alive": 1465,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "188e2f14d9b048ce9a15ab2ac164a339:c805eec2ef744e0c9f3ad285067ccac3:f117ac518170430ba195f04497b157c5",
  "placement": 27,
  "time_alive": 286,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 22,
  "time_alive": 1101,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 9,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 2,
  "time_alive": 1408,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 13,
  "time_alive": 1322,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 12,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "19c7231e452545baa9ee6efd52ca7289:40a1afeb07744c01be8e3a2ed28cd14b:4900a25c46914fe1a71b0fb1437b4833",
  "placement": 15,
  "time_alive": 1247,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 3,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 22,
  "time_alive": 1152,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 25,
  "time_alive": 1117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 3,
  "time_alive": 1401,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 7,
  "time_alive": 1429,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "71c83b2e16d147b28a9a3a60e023ac80:c4d5302be44c4f6dae4168a3cd1069fd:d73cc19152dd413c9f8b29ff122d57af",
  "placement": 9,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 7,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 13,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 16,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 4,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 9,
  "time_alive": 1397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "09a86f2788974614a65a685f654f7bce:29c74268257845f098f6b59867ee88e2:585ef117f6e341e5ac6f10f309b1db23",
  "placement": 4,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 4,
  "time_alive": 1423,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 12,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 18,
  "time_alive": 1279,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 9,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 13,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "2dee203a9b2d4d169fc318fc0cb124b8:4bcad46e7dfc40bfbd06f748fe56ed44:e75e2f2763044da6a97788622c17dc0d",
  "placement": 7,
  "time_alive": 1359,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 6,
  "time_alive": 1404,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 10,
  "time_alive": 1358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 14,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 5,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 4,
  "time_alive": 1445,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "676cbaa314234b8d95ab008c7f7af7b7:dd841614d20d442ba64bd70fa5ff6e03:e9a174753a324766a33c6faf5ce93ab9",
  "placement": 10,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 5,
  "time_alive": 1421,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 28,
  "time_alive": 812,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 22,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 16,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 31,
  "time_alive": 116,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "2530bf79ca9f4a0e91caff1d2834cfda:39a94098c6e14637ac721a1ce3d45eca:e68f308de6ed48f485bbd17ed1b2c172",
  "placement": 1,
  "time_alive": 1493,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 17,
  "time_alive": 1217,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 21,
  "time_alive": 1154,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 11,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 12,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 10,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "1f37489e2e214c91a93ad6911c5ece9b:6a554a98804d42c086a0b1655706a7c0:faeadb29bb7541a281b8e405dc7346f4",
  "placement": 2,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 24,
  "time_alive": 1071,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 2,
  "time_alive": 1438,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 17,
  "time_alive": 1295,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 27,
  "time_alive": 717,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 3,
  "time_alive": 1459,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "70ea358ab80f411d9ca3393caad30e2a:96e380a28591400fbf36016c2cf03a7f:eb54bc2dc192462da7c2226f937cd5b1",
  "placement": 19,
  "time_alive": 1097,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 14,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 19,
  "time_alive": 1162,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 5,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 10,
  "time_alive": 1343,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 6,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "2833f31e54d84eba9f27def1c1da412f:b11392cbf71a4bcba1ad470dae8543d8:cfbf1d5bd60b48b8a6f0c7298e90bf4e",
  "placement": 8,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 10,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 5,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 10,
  "time_alive": 1355,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 22,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 5,
  "time_alive": 1439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "4fd253909e1046ddb31298c26a05cdb5:6bb7d767c2234676b71b20adde95c119:74b1d4db1b964dfa9914f4d6c0654935",
  "placement": 12,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 16,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 30,
  "time_alive": 199,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 4,
  "time_alive": 1399,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 33,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 20,
  "time_alive": 777,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "2f15b07f207645f681bb6e275c2d4ac5:54375d5c8a8f4332988db45c50d12731:f92ec13c3ba04ffdb63210d8f866e45b",
  "placement": 3,
  "time_alive": 1443,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 20,
  "time_alive": 1136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 11,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 21,
  "time_alive": 1164,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 7,
  "time_alive": 1361,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 23,
  "time_alive": 639,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "5120f652137742fc99af021cb17d5563:69a1c5cb05ba4f528b23d573d81c62d8:fd9baeb252064a039467964d1338ab0e",
  "placement": 14,
  "time_alive": 1248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:e02fad6833ae4812a3ca8e82ba65db8c:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 11,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:e02fad6833ae4812a3ca8e82ba65db8c:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 6,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:e02fad6833ae4812a3ca8e82ba65db8c:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 19,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:e02fad6833ae4812a3ca8e82ba65db8c:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 20,
  "time_alive": 1152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:e02fad6833ae4812a3ca8e82ba65db8c:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 11,
  "time_alive": 1380,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "9a7ed892e00b47e2aab6f9a29aa2b670:e02fad6833ae4812a3ca8e82ba65db8c:e370e2458c2f4d01b58aa3478afe039a",
  "placement": 26,
  "time_alive": 294,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "c8a4d20bb7c44b568d9d0db63026c1c2:cbc0d0ee130f4fe89400927df6730c47:dcfb09c72814438abf50e50c803a231c",
  "placement": 8,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "c8a4d20bb7c44b568d9d0db63026c1c2:cbc0d0ee130f4fe89400927df6730c47:dcfb09c72814438abf50e50c803a231c",
  "placement": 18,
  "time_alive": 1167,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "c8a4d20bb7c44b568d9d0db63026c1c2:cbc0d0ee130f4fe89400927df6730c47:dcfb09c72814438abf50e50c803a231c",
  "placement": 15,
  "time_alive": 1312,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "c8a4d20bb7c44b568d9d0db63026c1c2:cbc0d0ee130f4fe89400927df6730c47:dcfb09c72814438abf50e50c803a231c",
  "placement": 18,
  "time_alive": 1232,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "c8a4d20bb7c44b568d9d0db63026c1c2:cbc0d0ee130f4fe89400927df6730c47:dcfb09c72814438abf50e50c803a231c",
  "placement": 17,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "c8a4d20bb7c44b568d9d0db63026c1c2:cbc0d0ee130f4fe89400927df6730c47:dcfb09c72814438abf50e50c803a231c",
  "placement": 11,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 23,
  "time_alive": 1081,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 15,
  "time_alive": 1301,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 30,
  "time_alive": 413,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 31,
  "time_alive": 383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 29,
  "time_alive": 246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "3077145dbdd140d981ae4aef5c626637:872a06bee87a4400815ea26039f7e8db:917c897e23ae402cbff53569105686cf",
  "placement": 5,
  "time_alive": 1408,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 26,
  "time_alive": 938,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 27,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 32,
  "time_alive": 331,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 19,
  "time_alive": 1194,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 2,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "02862bfe71a24f4890a7d6c6fdadcef0:6846bbb974784822bc168686879d7559:deda9ae82ad14c9b876439a40bf2906a",
  "placement": 16,
  "time_alive": 1243,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 19,
  "time_alive": 1171,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 32,
  "time_alive": 92,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 13,
  "time_alive": 1346,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 30,
  "time_alive": 397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 18,
  "time_alive": 1300,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "1dfc42ea614640c9974ff4c2e948411a:976b9e84af8146c38d99be85eeedc4c4:d7f8df89a13845e58feb3d8fc5031a5e",
  "placement": 22,
  "time_alive": 807,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 15,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 24,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 12,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 8,
  "time_alive": 1357,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 22,
  "time_alive": 666,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "5e5e03b47d4943d68a79b71fc5013ce9:dcf3a9928b59405a888895b09da5cebe:e88e3a9fb6a24db2b554b6851277081e",
  "placement": 24,
  "time_alive": 572,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "0982eef8525b40b39d688f31e3f0e85d:69d516ac732a429d9737595aa26884d7:ef4b4096feaa4ccabcc2e0961cd1bc2b",
  "placement": 30,
  "time_alive": 828,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "0982eef8525b40b39d688f31e3f0e85d:69d516ac732a429d9737595aa26884d7:ef4b4096feaa4ccabcc2e0961cd1bc2b",
  "placement": 26,
  "time_alive": 900,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "0982eef8525b40b39d688f31e3f0e85d:69d516ac732a429d9737595aa26884d7:ef4b4096feaa4ccabcc2e0961cd1bc2b",
  "placement": 7,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "0982eef8525b40b39d688f31e3f0e85d:69d516ac732a429d9737595aa26884d7:ef4b4096feaa4ccabcc2e0961cd1bc2b",
  "placement": 14,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "0982eef8525b40b39d688f31e3f0e85d:69d516ac732a429d9737595aa26884d7:ef4b4096feaa4ccabcc2e0961cd1bc2b",
  "placement": 24,
  "time_alive": 456,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "0982eef8525b40b39d688f31e3f0e85d:69d516ac732a429d9737595aa26884d7:ef4b4096feaa4ccabcc2e0961cd1bc2b",
  "placement": 6,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 25,
  "time_alive": 1053,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 20,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 8,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 15,
  "time_alive": 1311,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 14,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "0f2b7d023218444e965770c1d8757a6d:1b84196666a046fb863f059caf9fcc10:b7f0c73dd97748568b3231adc4163314",
  "placement": 18,
  "time_alive": 1119,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "3de406c0445948f99ac56c6278edcdc2:8bdc27633bb4476383837ab2adb64a2c:abe8ed75906c4864860f1229bfefbc10",
  "placement": 33,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "3de406c0445948f99ac56c6278edcdc2:8bdc27633bb4476383837ab2adb64a2c:abe8ed75906c4864860f1229bfefbc10",
  "placement": 31,
  "time_alive": 156,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "3de406c0445948f99ac56c6278edcdc2:8bdc27633bb4476383837ab2adb64a2c:abe8ed75906c4864860f1229bfefbc10",
  "placement": 6,
  "time_alive": 1374,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "3de406c0445948f99ac56c6278edcdc2:8bdc27633bb4476383837ab2adb64a2c:abe8ed75906c4864860f1229bfefbc10",
  "placement": 21,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "3de406c0445948f99ac56c6278edcdc2:8bdc27633bb4476383837ab2adb64a2c:abe8ed75906c4864860f1229bfefbc10",
  "placement": 16,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "3de406c0445948f99ac56c6278edcdc2:8bdc27633bb4476383837ab2adb64a2c:abe8ed75906c4864860f1229bfefbc10",
  "placement": 25,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "280c926993114c5396b3c84b63aea82b:cb77b0afa3a146e99e41065edffb5e67:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 21,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "280c926993114c5396b3c84b63aea82b:cb77b0afa3a146e99e41065edffb5e67:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 3,
  "time_alive": 1428,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "280c926993114c5396b3c84b63aea82b:cb77b0afa3a146e99e41065edffb5e67:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 26,
  "time_alive": 909,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "280c926993114c5396b3c84b63aea82b:cb77b0afa3a146e99e41065edffb5e67:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 29,
  "time_alive": 523,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "280c926993114c5396b3c84b63aea82b:cb77b0afa3a146e99e41065edffb5e67:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 27,
  "time_alive": 345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "280c926993114c5396b3c84b63aea82b:cb77b0afa3a146e99e41065edffb5e67:d81f2aee42a1422c8c1c94fe55925e37",
  "placement": 30,
  "time_alive": 73,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "102d779f9e0544568ea96a5d0fd1a463:6eeac98fb8214cbf9c73f6adb03d8ff0:cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 28,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "102d779f9e0544568ea96a5d0fd1a463:6eeac98fb8214cbf9c73f6adb03d8ff0:cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 23,
  "time_alive": 1149,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "102d779f9e0544568ea96a5d0fd1a463:6eeac98fb8214cbf9c73f6adb03d8ff0:cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 29,
  "time_alive": 572,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "102d779f9e0544568ea96a5d0fd1a463:6eeac98fb8214cbf9c73f6adb03d8ff0:cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 28,
  "time_alive": 550,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "102d779f9e0544568ea96a5d0fd1a463:6eeac98fb8214cbf9c73f6adb03d8ff0:cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 19,
  "time_alive": 982,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "102d779f9e0544568ea96a5d0fd1a463:6eeac98fb8214cbf9c73f6adb03d8ff0:cab2b0ae67ea4ca29cebaf92593c3d23",
  "placement": 20,
  "time_alive": 1072,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 13,
  "time_alive": 1315,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 16,
  "time_alive": 1296,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 28,
  "time_alive": 730,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "8357501fe6b84cc38310b3a39b302a0c:9cd112ba5e0a43ab836b026b861498ed:e830dbf24cec486d96e48b1f3d3b104d",
  "placement": 25,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "05ec0af8783441bf8e2f2d53e1e3647b:838b273fb0ad43d291bb92a9478eafc8:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 32,
  "time_alive": 767,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "05ec0af8783441bf8e2f2d53e1e3647b:838b273fb0ad43d291bb92a9478eafc8:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 25,
  "time_alive": 1089,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "05ec0af8783441bf8e2f2d53e1e3647b:838b273fb0ad43d291bb92a9478eafc8:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 33,
  "time_alive": 112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "05ec0af8783441bf8e2f2d53e1e3647b:838b273fb0ad43d291bb92a9478eafc8:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 17,
  "time_alive": 1244,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "05ec0af8783441bf8e2f2d53e1e3647b:838b273fb0ad43d291bb92a9478eafc8:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 30,
  "time_alive": 242,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "05ec0af8783441bf8e2f2d53e1e3647b:838b273fb0ad43d291bb92a9478eafc8:ed06c4437a454fd5a94b03d0e49e7f84",
  "placement": 28,
  "time_alive": 205,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "5437488987e044d79e421f8492f023f6:8f2eafe6ae6947ad8ade92364094f09c:dc2a7f57b67c43e49d64727c113f3480",
  "placement": 27,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "5437488987e044d79e421f8492f023f6:8f2eafe6ae6947ad8ade92364094f09c:dc2a7f57b67c43e49d64727c113f3480",
  "placement": 17,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "5437488987e044d79e421f8492f023f6:8f2eafe6ae6947ad8ade92364094f09c:dc2a7f57b67c43e49d64727c113f3480",
  "placement": 31,
  "time_alive": 408,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "5437488987e044d79e421f8492f023f6:8f2eafe6ae6947ad8ade92364094f09c:dc2a7f57b67c43e49d64727c113f3480",
  "placement": 32,
  "time_alive": 171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "5437488987e044d79e421f8492f023f6:8f2eafe6ae6947ad8ade92364094f09c:dc2a7f57b67c43e49d64727c113f3480",
  "placement": 28,
  "time_alive": 297,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "5437488987e044d79e421f8492f023f6:8f2eafe6ae6947ad8ade92364094f09c:dc2a7f57b67c43e49d64727c113f3480",
  "placement": 29,
  "time_alive": 174,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 18,
  "time_alive": 1199,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 14,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 20,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 24,
  "time_alive": 967,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "281c11225cc14be2835a2d0d089f708b:9f175e03dcc243a6b905ea6abf2ac619:e27a1fc927b94957a46a0e9dc09f30d8",
  "placement": 25,
  "time_alive": 392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "45e08251dee84008bb8e969bd1c3e844:5dc49fc25a3f4c98b5cd6da0c2f1e511:78adba4307684249b39b8433fd659d00",
  "placement": 31,
  "time_alive": 812,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "042dbacf-b41d-40ba-83e0-cb5839e09981",
  "team_id": "45e08251dee84008bb8e969bd1c3e844:5dc49fc25a3f4c98b5cd6da0c2f1e511:78adba4307684249b39b8433fd659d00",
  "placement": 29,
  "time_alive": 338,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "45e08251dee84008bb8e969bd1c3e844:5dc49fc25a3f4c98b5cd6da0c2f1e511:78adba4307684249b39b8433fd659d00",
  "placement": 23,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "45e08251dee84008bb8e969bd1c3e844:5dc49fc25a3f4c98b5cd6da0c2f1e511:78adba4307684249b39b8433fd659d00",
  "placement": 26,
  "time_alive": 776,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2c561a38-d095-49a5-89e6-0b0e99b0a17e",
  "team_id": "3ab7e674837f4797935634d5d293c360:b0c411b0117a4d9f8902f00bf88123a7:d55954ddb0bf491e8fa78b7ac9179d53",
  "placement": 29,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6b16e69b-446a-4755-ad72-6cfff1c4abec",
  "team_id": "3ab7e674837f4797935634d5d293c360:b0c411b0117a4d9f8902f00bf88123a7:d55954ddb0bf491e8fa78b7ac9179d53",
  "placement": 27,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9980058a-7d49-412a-b4a8-2e70cae70c46",
  "team_id": "3ab7e674837f4797935634d5d293c360:b0c411b0117a4d9f8902f00bf88123a7:d55954ddb0bf491e8fa78b7ac9179d53",
  "placement": 23,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "77d9271c-8643-4cc4-a9a9-157f24b201ac",
  "team_id": "3ab7e674837f4797935634d5d293c360:b0c411b0117a4d9f8902f00bf88123a7:d55954ddb0bf491e8fa78b7ac9179d53",
  "placement": 26,
  "time_alive": 347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8bbf4598-e1fa-420a-ad95-c165fd9eef31",
  "team_id": "3ab7e674837f4797935634d5d293c360:b0c411b0117a4d9f8902f00bf88123a7:d55954ddb0bf491e8fa78b7ac9179d53",
  "placement": 21,
  "time_alive": 1034,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 6,
  "time_alive": 1397,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 2,
  "time_alive": 1491,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 2,
  "time_alive": 1475,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 1,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 10,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "604c555401204be48cce5564f6d10dbd:9b1a091fd83c4cb692d0af14727c0be9:ac5ed6fc5a5f4b7395f151199409fa8a",
  "placement": 8,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 1,
  "time_alive": 1420,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 15,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 6,
  "time_alive": 1424,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 6,
  "time_alive": 1403,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 15,
  "time_alive": 1306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "38fd93fda3994a8c81007524b101b197:be98f1a471c44f7f939edac26d599b20:c776c7eb935e4fd1b91a56c1d093f55a",
  "placement": 1,
  "time_alive": 1425,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 13,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 19,
  "time_alive": 1174,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 1,
  "time_alive": 1475,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 5,
  "time_alive": 1411,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 1,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "840b7e8175c045eb94e25836f274d0b0:931711d25486490c92c44c5520929ec8:bdc4d6a5555c4e6ab0b1fd3e08c19fd1",
  "placement": 4,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 4,
  "time_alive": 1409,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 33,
  "time_alive": 189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 9,
  "time_alive": 1377,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 4,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 14,
  "time_alive": 1341,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "4fccc83e17f1459abeb53f27d4068460:8efe63ad9bdb420e92da9a95a80c689e:c2a761d2e19c472cb1e9aa2d89a30712",
  "placement": 2,
  "time_alive": 1425,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 8,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 5,
  "time_alive": 1447,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 12,
  "time_alive": 1331,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 21,
  "time_alive": 1145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 2,
  "time_alive": 1436,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "0283351fd3b54505a0e523ed402c6886:5fe045499dd2407b93a7bee65f5b0e2f:c9f0141d4b1e4f13a3d996764d158df0",
  "placement": 27,
  "time_alive": 426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 10,
  "time_alive": 1347,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 3,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 21,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 2,
  "time_alive": 1491,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 6,
  "time_alive": 1393,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "2fb7504fbfe7413e8a88408a9dc91653:51312b1c8d614bffacef4e6fea655bb9:def21c70e6ad489f84cbd02409ae6aa7",
  "placement": 23,
  "time_alive": 695,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 2,
  "time_alive": 1420,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 7,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 8,
  "time_alive": 1380,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 9,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 5,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "155b07c7883c488fbfcb5c70fa70b4c3:50add331a8f141439168176249175e4d:e8e58ee1d5564f938e321bf4c7d14114",
  "placement": 14,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 9,
  "time_alive": 1348,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 12,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 3,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 10,
  "time_alive": 1347,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 23,
  "time_alive": 1088,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "4ccb422913c94a4088f484ea874d0983:8b0e3413aaad469394df36a499f3605f:cea95e2cf494461295a34057e8d42ae4",
  "placement": 10,
  "time_alive": 1360,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 19,
  "time_alive": 1215,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 17,
  "time_alive": 1294,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 10,
  "time_alive": 1353,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 7,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 4,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "0612341612fa43eeb4f86f6eb5cf441d:dfadab81e6444305b6400244155921ed:ff906aca7c12455a8035ac6999879579",
  "placement": 5,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 5,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 6,
  "time_alive": 1445,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 11,
  "time_alive": 1337,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 16,
  "time_alive": 1292,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 3,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "a51999d8fdcc439ca1abdcaa839ee78a:aeb4eb2da6264e88b033a46d17d3122f:da0a54e3a4d5497dbd45a92f582589b5",
  "placement": 7,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 3,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 1,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 15,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 14,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 18,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "631618f231bd47299cd61efff0a37bff:844e6b183f0f41deb6fbaab10434c2e3:8476c2d2b5ab4766b1b29fa05ce195a4",
  "placement": 15,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 14,
  "time_alive": 1314,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 4,
  "time_alive": 1479,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 5,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 26,
  "time_alive": 580,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 19,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "08be3cbc3dfe41119f444346b4295f44:89238713d14548159f78a91178e2d6c2:92e92b329cf5421fa7874327db7681ed",
  "placement": 9,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 7,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 10,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 28,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 12,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 22,
  "time_alive": 1112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "45a94535d7174e65a5aeafdac3586ccb:bc26230ea468465d976e88950071fe53:c6f05a57a4ea44beaa6363508f97af3b",
  "placement": 3,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 22,
  "time_alive": 1165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 11,
  "time_alive": 1378,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 22,
  "time_alive": 1129,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 13,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 8,
  "time_alive": 1392,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "2a4fcc07ed794f59974d3067ac09d167:31381e5d45154316b607ffbac9d9dd3a:c3509ec5f975405684c111215f18d41f",
  "placement": 19,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "21538e95652b48bbbc65f298a2861699:3072ad917ca7407cb2ec2fbe6b8e74d3:3b033321f05145d092b2942cd16b7bc2",
  "placement": 12,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "21538e95652b48bbbc65f298a2861699:3072ad917ca7407cb2ec2fbe6b8e74d3:3b033321f05145d092b2942cd16b7bc2",
  "placement": 14,
  "time_alive": 1356,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "21538e95652b48bbbc65f298a2861699:3072ad917ca7407cb2ec2fbe6b8e74d3:3b033321f05145d092b2942cd16b7bc2",
  "placement": 4,
  "time_alive": 1455,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "21538e95652b48bbbc65f298a2861699:3072ad917ca7407cb2ec2fbe6b8e74d3:3b033321f05145d092b2942cd16b7bc2",
  "placement": 28,
  "time_alive": 444,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "21538e95652b48bbbc65f298a2861699:3072ad917ca7407cb2ec2fbe6b8e74d3:3b033321f05145d092b2942cd16b7bc2",
  "placement": 6,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 20,
  "time_alive": 1196,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 26,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 7,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 3,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 13,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "10c829f7666942d8ada85183c993c4e3:cce29348ddef41eb8547376d057ba002:eec1a11de93042be847f249c3536d619",
  "placement": 22,
  "time_alive": 719,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "4a2940fc68704661a1e0fc13216d0097:9ccd630a5a4b4d1384db23805d6441a7:f22e91ef067141ebac162cd99573b9fd",
  "placement": 25,
  "time_alive": 1082,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "4a2940fc68704661a1e0fc13216d0097:9ccd630a5a4b4d1384db23805d6441a7:f22e91ef067141ebac162cd99573b9fd",
  "placement": 9,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "4a2940fc68704661a1e0fc13216d0097:9ccd630a5a4b4d1384db23805d6441a7:f22e91ef067141ebac162cd99573b9fd",
  "placement": 13,
  "time_alive": 1330,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "4a2940fc68704661a1e0fc13216d0097:9ccd630a5a4b4d1384db23805d6441a7:f22e91ef067141ebac162cd99573b9fd",
  "placement": 20,
  "time_alive": 1165,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "4a2940fc68704661a1e0fc13216d0097:9ccd630a5a4b4d1384db23805d6441a7:f22e91ef067141ebac162cd99573b9fd",
  "placement": 29,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "4a2940fc68704661a1e0fc13216d0097:9ccd630a5a4b4d1384db23805d6441a7:f22e91ef067141ebac162cd99573b9fd",
  "placement": 13,
  "time_alive": 1319,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 21,
  "time_alive": 1140,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 18,
  "time_alive": 1211,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 24,
  "time_alive": 1025,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 11,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "203ac405cf9e42ec9b4e022f14d1fa80:ac7a97bbb8f54925b03bf73e89cd3724:b10b4358b2544e9cacaf38be8e895a51",
  "placement": 11,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "0c0760ccad674423ac0c21060b325204:5dfdbb980be8419e9dd8ec882be3deee:f61eef3e00fa47dfa04118282639c9f9",
  "placement": 23,
  "time_alive": 1118,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "0c0760ccad674423ac0c21060b325204:5dfdbb980be8419e9dd8ec882be3deee:f61eef3e00fa47dfa04118282639c9f9",
  "placement": 8,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "0c0760ccad674423ac0c21060b325204:5dfdbb980be8419e9dd8ec882be3deee:f61eef3e00fa47dfa04118282639c9f9",
  "placement": 14,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "0c0760ccad674423ac0c21060b325204:5dfdbb980be8419e9dd8ec882be3deee:f61eef3e00fa47dfa04118282639c9f9",
  "placement": 25,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "0c0760ccad674423ac0c21060b325204:5dfdbb980be8419e9dd8ec882be3deee:f61eef3e00fa47dfa04118282639c9f9",
  "placement": 17,
  "time_alive": 1216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "0c0760ccad674423ac0c21060b325204:5dfdbb980be8419e9dd8ec882be3deee:f61eef3e00fa47dfa04118282639c9f9",
  "placement": 17,
  "time_alive": 1277,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 29,
  "time_alive": 305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 13,
  "time_alive": 1361,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 19,
  "time_alive": 1196,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 28,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 7,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "197d9c9072234e04aeb7462146c184a6:4f0d7b2c836341989dbe6e322f652b00:fc0ee3edaea84148ad91f1f926a42331",
  "placement": 20,
  "time_alive": 1038,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 11,
  "time_alive": 1345,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 31,
  "time_alive": 212,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 32,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 15,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 31,
  "time_alive": 123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "86b5ed33648a4957b1985d8e07231077:8c3f9932720443e2a653e979a03a6b0b:e405ab60af864e76bdd1f3fc3070c11a",
  "placement": 29,
  "time_alive": 391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "3e9028eefdf640d4953c2a28aef414ad:6ae9b6431dcc44c191628b344783d75d:ab6463cd8fa1419fb09b27ebcb964dc3",
  "placement": 17,
  "time_alive": 1301,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "3e9028eefdf640d4953c2a28aef414ad:6ae9b6431dcc44c191628b344783d75d:ab6463cd8fa1419fb09b27ebcb964dc3",
  "placement": 20,
  "time_alive": 1166,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "3e9028eefdf640d4953c2a28aef414ad:6ae9b6431dcc44c191628b344783d75d:ab6463cd8fa1419fb09b27ebcb964dc3",
  "placement": 24,
  "time_alive": 1074,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "3e9028eefdf640d4953c2a28aef414ad:6ae9b6431dcc44c191628b344783d75d:ab6463cd8fa1419fb09b27ebcb964dc3",
  "placement": 11,
  "time_alive": 1332,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "3e9028eefdf640d4953c2a28aef414ad:6ae9b6431dcc44c191628b344783d75d:ab6463cd8fa1419fb09b27ebcb964dc3",
  "placement": 21,
  "time_alive": 1116,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "3e9028eefdf640d4953c2a28aef414ad:6ae9b6431dcc44c191628b344783d75d:ab6463cd8fa1419fb09b27ebcb964dc3",
  "placement": 16,
  "time_alive": 1300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac:895a9b248bfd453780b971c3fbfef8a8:f7a027a3821845429033aa7bed48c092",
  "placement": 18,
  "time_alive": 1288,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac:895a9b248bfd453780b971c3fbfef8a8:f7a027a3821845429033aa7bed48c092",
  "placement": 28,
  "time_alive": 795,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac:895a9b248bfd453780b971c3fbfef8a8:f7a027a3821845429033aa7bed48c092",
  "placement": 25,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac:895a9b248bfd453780b971c3fbfef8a8:f7a027a3821845429033aa7bed48c092",
  "placement": 17,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "82e164d9d0314f81a6f786e85c9cb1ac:895a9b248bfd453780b971c3fbfef8a8:f7a027a3821845429033aa7bed48c092",
  "placement": 9,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "28bf2b3aa8af4e63a5693f6ff60e4de6:7c28969a8f2c40ed9228a8b630b1017a:a836acdd0c624f839e04113cd3a8cc08",
  "placement": 24,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "28bf2b3aa8af4e63a5693f6ff60e4de6:7c28969a8f2c40ed9228a8b630b1017a:a836acdd0c624f839e04113cd3a8cc08",
  "placement": 29,
  "time_alive": 517,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "28bf2b3aa8af4e63a5693f6ff60e4de6:7c28969a8f2c40ed9228a8b630b1017a:a836acdd0c624f839e04113cd3a8cc08",
  "placement": 23,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "28bf2b3aa8af4e63a5693f6ff60e4de6:7c28969a8f2c40ed9228a8b630b1017a:a836acdd0c624f839e04113cd3a8cc08",
  "placement": 8,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "28bf2b3aa8af4e63a5693f6ff60e4de6:7c28969a8f2c40ed9228a8b630b1017a:a836acdd0c624f839e04113cd3a8cc08",
  "placement": 26,
  "time_alive": 705,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "28bf2b3aa8af4e63a5693f6ff60e4de6:7c28969a8f2c40ed9228a8b630b1017a:a836acdd0c624f839e04113cd3a8cc08",
  "placement": 26,
  "time_alive": 567,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "0448a593b98f407d942a6f2a7445de1d:809bc881f46446ecadd163829d5c1fa6:ab74b59df8ff410db45a3658c4feb06c",
  "placement": 15,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "0448a593b98f407d942a6f2a7445de1d:809bc881f46446ecadd163829d5c1fa6:ab74b59df8ff410db45a3658c4feb06c",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "0448a593b98f407d942a6f2a7445de1d:809bc881f46446ecadd163829d5c1fa6:ab74b59df8ff410db45a3658c4feb06c",
  "placement": 27,
  "time_alive": 855,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "0448a593b98f407d942a6f2a7445de1d:809bc881f46446ecadd163829d5c1fa6:ab74b59df8ff410db45a3658c4feb06c",
  "placement": 30,
  "time_alive": 202,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "0448a593b98f407d942a6f2a7445de1d:809bc881f46446ecadd163829d5c1fa6:ab74b59df8ff410db45a3658c4feb06c",
  "placement": 12,
  "time_alive": 1362,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "0448a593b98f407d942a6f2a7445de1d:809bc881f46446ecadd163829d5c1fa6:ab74b59df8ff410db45a3658c4feb06c",
  "placement": 24,
  "time_alive": 685,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "7ac60867a29840cf8ddd41705ea63039:94ffaa21406641a1ac1a2aba0f1fa549:f3a479b27a824aeabac11cb8b27ef6b2",
  "placement": 16,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "7ac60867a29840cf8ddd41705ea63039:94ffaa21406641a1ac1a2aba0f1fa549:f3a479b27a824aeabac11cb8b27ef6b2",
  "placement": 27,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "7ac60867a29840cf8ddd41705ea63039:94ffaa21406641a1ac1a2aba0f1fa549:f3a479b27a824aeabac11cb8b27ef6b2",
  "placement": 16,
  "time_alive": 1292,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "7ac60867a29840cf8ddd41705ea63039:94ffaa21406641a1ac1a2aba0f1fa549:f3a479b27a824aeabac11cb8b27ef6b2",
  "placement": 18,
  "time_alive": 1215,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "7ac60867a29840cf8ddd41705ea63039:94ffaa21406641a1ac1a2aba0f1fa549:f3a479b27a824aeabac11cb8b27ef6b2",
  "placement": 20,
  "time_alive": 1132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "7ac60867a29840cf8ddd41705ea63039:94ffaa21406641a1ac1a2aba0f1fa549:f3a479b27a824aeabac11cb8b27ef6b2",
  "placement": 21,
  "time_alive": 811,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681:841ca75cd463421da2fc154426182c88:b4c91eed02904f809cc009bb56a2c099",
  "placement": 26,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681:841ca75cd463421da2fc154426182c88:b4c91eed02904f809cc009bb56a2c099",
  "placement": 16,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681:841ca75cd463421da2fc154426182c88:b4c91eed02904f809cc009bb56a2c099",
  "placement": 20,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681:841ca75cd463421da2fc154426182c88:b4c91eed02904f809cc009bb56a2c099",
  "placement": 27,
  "time_alive": 365,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681:841ca75cd463421da2fc154426182c88:b4c91eed02904f809cc009bb56a2c099",
  "placement": 16,
  "time_alive": 1300,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "4ca8ddcaf5bf4575b7e6088bfbb24681:841ca75cd463421da2fc154426182c88:b4c91eed02904f809cc009bb56a2c099",
  "placement": 30,
  "time_alive": 335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "8c0e0dcd26144cb489193b4af44a3452:91c2e76fa5fd4ab1aea8b9d6d0609613:c8fc0efa87934512a6613eec60c15683",
  "placement": 27,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "8c0e0dcd26144cb489193b4af44a3452:91c2e76fa5fd4ab1aea8b9d6d0609613:c8fc0efa87934512a6613eec60c15683",
  "placement": 23,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "8c0e0dcd26144cb489193b4af44a3452:91c2e76fa5fd4ab1aea8b9d6d0609613:c8fc0efa87934512a6613eec60c15683",
  "placement": 31,
  "time_alive": 244,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "8c0e0dcd26144cb489193b4af44a3452:91c2e76fa5fd4ab1aea8b9d6d0609613:c8fc0efa87934512a6613eec60c15683",
  "placement": 29,
  "time_alive": 254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "8c0e0dcd26144cb489193b4af44a3452:91c2e76fa5fd4ab1aea8b9d6d0609613:c8fc0efa87934512a6613eec60c15683",
  "placement": 25,
  "time_alive": 903,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "8c0e0dcd26144cb489193b4af44a3452:91c2e76fa5fd4ab1aea8b9d6d0609613:c8fc0efa87934512a6613eec60c15683",
  "placement": 12,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "3fa3a872d4f549259e29dd038e9e2bb6:60fbd5f2849a4052b8817c4e24a0a3ef:65352af521ff44a6a5ca53f0cf6659e4",
  "placement": 32,
  "time_alive": 145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "3fa3a872d4f549259e29dd038e9e2bb6:60fbd5f2849a4052b8817c4e24a0a3ef:65352af521ff44a6a5ca53f0cf6659e4",
  "placement": 18,
  "time_alive": 1283,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "3fa3a872d4f549259e29dd038e9e2bb6:60fbd5f2849a4052b8817c4e24a0a3ef:65352af521ff44a6a5ca53f0cf6659e4",
  "placement": 33,
  "time_alive": 104,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "3fa3a872d4f549259e29dd038e9e2bb6:60fbd5f2849a4052b8817c4e24a0a3ef:65352af521ff44a6a5ca53f0cf6659e4",
  "placement": 23,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "3fa3a872d4f549259e29dd038e9e2bb6:60fbd5f2849a4052b8817c4e24a0a3ef:65352af521ff44a6a5ca53f0cf6659e4",
  "placement": 30,
  "time_alive": 186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "3fa3a872d4f549259e29dd038e9e2bb6:60fbd5f2849a4052b8817c4e24a0a3ef:65352af521ff44a6a5ca53f0cf6659e4",
  "placement": 25,
  "time_alive": 606,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 21,
  "time_alive": 1189,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 24,
  "time_alive": 939,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 17,
  "time_alive": 1286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 19,
  "time_alive": 1188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 27,
  "time_alive": 579,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "075464060e914b95b4f0f8badb34b7ac:3f0866a303b244899938ce50f1c16f73:b73e095e8a2843abbb12ee6ad4e1a6d8",
  "placement": 18,
  "time_alive": 1239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:c135db6b0a1f4db39e35695d74530dd0",
  "placement": 31,
  "time_alive": 150,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:c135db6b0a1f4db39e35695d74530dd0",
  "placement": 30,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:c135db6b0a1f4db39e35695d74530dd0",
  "placement": 26,
  "time_alive": 871,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:c135db6b0a1f4db39e35695d74530dd0",
  "placement": 22,
  "time_alive": 1140,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "006a75058ab743e1821f2fb46322badf:2a13d30aed994f55b3db5c48822e4c94:c135db6b0a1f4db39e35695d74530dd0",
  "placement": 33,
  "time_alive": 84,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 30,
  "time_alive": 274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 25,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 30,
  "time_alive": 247,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 31,
  "time_alive": 170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 24,
  "time_alive": 1081,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "1fa421958c4b4df082382b02f0738e8d:4ce1b409e09a4bfcbe278909c36260a5:a4344a33181c4ded8b915e32ec3a031e",
  "placement": 28,
  "time_alive": 392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e5095cf4-1468-4993-b0ea-1170e31fb847",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 28,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "792bf7e8-c6bc-4db8-9e99-85f3ca132e26",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 32,
  "time_alive": 200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b255298-ea2f-42f1-8d48-8fb5be96dbdf",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 29,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "78eb559e-bb38-456e-a6c2-bb46eb47b665",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 32,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c8c20ac-deb0-4787-a5fe-efdaa8a2643b",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 32,
  "time_alive": 122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "859a8d1c-a8a1-4e3d-ac4c-a034b3769161",
  "team_id": "0120afaa203c4527867b7cb14d1df466:6e46e33fc68d426eb6d69d2c9ed0d213:73778460df074e728b6a0cf98949b8fc",
  "placement": 31,
  "time_alive": 63,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 4,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 7,
  "time_alive": 1413,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1454,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1434,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 1,
  "time_alive": 1475,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "6ef53e85807543659893a02940723ada:9ea8d0bc12924d978c2b08e2a016e801:f8fa56b8624d457288dcff97ee773611",
  "placement": 3,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 2,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 5,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 2,
  "time_alive": 1454,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 16,
  "time_alive": 1283,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 2,
  "time_alive": 1475,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "1f2c1835ee8d47a88584e8d61f9c3059:642e72b8ebd34ab785e5d42fab68cb3d:78b6169906a244b181df06a83e68f2d5",
  "placement": 21,
  "time_alive": 1167,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 31,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 1,
  "time_alive": 1463,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 4,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 23,
  "time_alive": 1101,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 13,
  "time_alive": 1330,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "17a55115aca04a99be849a5079e04cee:84657b35a87c4fcab5c9d5b31b6f5c30:ada746fa490947b0b61f815560563da3",
  "placement": 1,
  "time_alive": 1441,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 28,
  "time_alive": 863,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 13,
  "time_alive": 1331,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 14,
  "time_alive": 1344,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 24,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 5,
  "time_alive": 1382,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "11e9dfb6a53c4071b8d0370632add032:bdb53a8313b547b5828683a1a007f311:f06ab3bb0a8b4f85ba0c72d451952bdd",
  "placement": 2,
  "time_alive": 1441,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 4,
  "time_alive": 1431,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 10,
  "time_alive": 1360,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 20,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 9,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "8d01b94378ff4f71898033b5754b7352:b6bcccd2151948f4b9f0159cd700352a:de6c7277ef1d467a8eb775da65c79c1b",
  "placement": 4,
  "time_alive": 1422,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 3,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 8,
  "time_alive": 1372,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 16,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 30,
  "time_alive": 146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 4,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "00c8bb96856d4bb99fbf0c2830cd15ec:b1b1ceef0fb949e19225ac7843466ba1:fcff6d466aed4351bf4395608001d47e",
  "placement": 12,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 23,
  "time_alive": 1120,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 2,
  "time_alive": 1463,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 6,
  "time_alive": 1418,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 11,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 11,
  "time_alive": 1346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "358fa59245fe4e098d0647eea677cb6b:5feb2f052cc447f581fe53749e6c06b4:c7b338c09d594505975c127e7118e464",
  "placement": 15,
  "time_alive": 1296,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 12,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 20,
  "time_alive": 1192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 7,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 3,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 16,
  "time_alive": 1296,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "0169651243e04e79a989506b3c286aae:3240b994033f42528f6e090c9a765af8:5cc8a5fcbb074fe6a586e07ce574027e",
  "placement": 8,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 9,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 12,
  "time_alive": 1339,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 19,
  "time_alive": 1267,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 15,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 3,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "35fdcd483db6498482b2b3ec954bc4b7:69424acd083d484baf1fd13fb8ccfb54:c23737304a9d4465b2a537c03c7fddc4",
  "placement": 13,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 5,
  "time_alive": 1440,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 28,
  "time_alive": 798,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 29,
  "time_alive": 414,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 27,
  "time_alive": 753,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 6,
  "time_alive": 1381,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "47d88e3720634139a557ddd4568c218f:9256d1cd8edb41d6b69b4cb778df9a62:9f44f3da946d468db2bbba22db9b5100",
  "placement": 6,
  "time_alive": 1403,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 7,
  "time_alive": 1431,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 16,
  "time_alive": 1306,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 25,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 22,
  "time_alive": 1111,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 10,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "5bcdb8217bb04eca93367d79211c92c6:69f1c37a45d84486ba2db0cfa9e0e281:a8a2225691b340cb8f0c534261a529f0",
  "placement": 10,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 33,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 3,
  "time_alive": 1434,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 24,
  "time_alive": 966,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 2,
  "time_alive": 1434,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 28,
  "time_alive": 423,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "14d98cc4e5d8454eba18348d567d4f93:9d6345a3a93c468cb8b58d1fa9f8026b:e9315a3960004d4db8c46841b46fafc6",
  "placement": 27,
  "time_alive": 678,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 1,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 19,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 11,
  "time_alive": 1356,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 18,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 26,
  "time_alive": 945,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "0410098a887c4372986f8b65537e3068:1f0d012ea06e4dd9823daaed7c590331:c371e935468641d69332e5919b0e6f8b",
  "placement": 18,
  "time_alive": 1246,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 25,
  "time_alive": 1055,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 6,
  "time_alive": 1422,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 15,
  "time_alive": 1336,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 25,
  "time_alive": 804,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 30,
  "time_alive": 308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "081a88cf92bf40ad9abb9b8157326815:45d77b081c2c4006bea2b5d36c33a057:7ce71c7373ed490cb59d62d1653c6401",
  "placement": 5,
  "time_alive": 1413,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 6,
  "time_alive": 1432,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 15,
  "time_alive": 1309,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 9,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 19,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 14,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "6c14afe1bebe4df8a58ed49670695bb4:a0aa16e36bca41e7a8ae68e5d04951f5:fdadc216e3784d29be326389ff2bc634",
  "placement": 26,
  "time_alive": 1032,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 18,
  "time_alive": 1223,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 17,
  "time_alive": 1286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 3,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 7,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 33,
  "time_alive": 163,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "ad2c7df621304e8e8dd8019d1533f0a2:c0f99eb3f168409597a5a6ad0eacc28b:cc57a88db28b4370adae26a209c35639",
  "placement": 30,
  "time_alive": 339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 14,
  "time_alive": 1333,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 9,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 33,
  "time_alive": 79,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 17,
  "time_alive": 1280,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 17,
  "time_alive": 1287,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "1a063df5e87449f39eedba68c89cb136:e079e7ea73f44f4e95025b0573ae9c8d:f7a09b732fad40d898c7afe731d8e3e2",
  "placement": 32,
  "time_alive": 123,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 22,
  "time_alive": 1133,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 26,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 18,
  "time_alive": 1312,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 12,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 7,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "38344dfb8f294ddb83a2b7c8bcf42f65:56d464be8dfc42a48ca76d349b429da2:72dfd7b96a3d45f7b66601f2c9a2d1d3",
  "placement": 9,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 19,
  "time_alive": 1196,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 10,
  "time_alive": 1364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 5,
  "time_alive": 1418,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 18,
  "time_alive": 1287,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "33762f5dd5fc4165a92c25dc3e8e67e7:43c0937a1b724e3988ef1e182ecefc23:6533ded271324f63b045220fa442861e",
  "placement": 14,
  "time_alive": 1317,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 8,
  "time_alive": 1417,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 22,
  "time_alive": 1114,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 20,
  "time_alive": 1164,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 13,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 27,
  "time_alive": 868,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "324ef012cb284ea1a403ac2d0d037323:a94afe4c22ec4efda245b226f73a98c5:fde6cabdb6e8484f983b5592e45de24e",
  "placement": 31,
  "time_alive": 256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81:895795424486469c952cd2959cea008e:ae0b5b94271741d48a61cd895d9d3380",
  "placement": 15,
  "time_alive": 1322,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81:895795424486469c952cd2959cea008e:ae0b5b94271741d48a61cd895d9d3380",
  "placement": 25,
  "time_alive": 977,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81:895795424486469c952cd2959cea008e:ae0b5b94271741d48a61cd895d9d3380",
  "placement": 26,
  "time_alive": 844,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81:895795424486469c952cd2959cea008e:ae0b5b94271741d48a61cd895d9d3380",
  "placement": 4,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81:895795424486469c952cd2959cea008e:ae0b5b94271741d48a61cd895d9d3380",
  "placement": 23,
  "time_alive": 1079,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "1f42f4dc9ee741778811b8a391dd7c81:895795424486469c952cd2959cea008e:ae0b5b94271741d48a61cd895d9d3380",
  "placement": 19,
  "time_alive": 1210,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "a1c1329f8e1246129c2a2df412413368:b4c7fcf33b804231bb1dda5d26ac1fde:c02ce3d8396342df8fe27260dee17ce3",
  "placement": 29,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "a1c1329f8e1246129c2a2df412413368:b4c7fcf33b804231bb1dda5d26ac1fde:c02ce3d8396342df8fe27260dee17ce3",
  "placement": 11,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "a1c1329f8e1246129c2a2df412413368:b4c7fcf33b804231bb1dda5d26ac1fde:c02ce3d8396342df8fe27260dee17ce3",
  "placement": 13,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "a1c1329f8e1246129c2a2df412413368:b4c7fcf33b804231bb1dda5d26ac1fde:c02ce3d8396342df8fe27260dee17ce3",
  "placement": 9,
  "time_alive": 1349,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "a1c1329f8e1246129c2a2df412413368:b4c7fcf33b804231bb1dda5d26ac1fde:c02ce3d8396342df8fe27260dee17ce3",
  "placement": 15,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "a1c1329f8e1246129c2a2df412413368:b4c7fcf33b804231bb1dda5d26ac1fde:c02ce3d8396342df8fe27260dee17ce3",
  "placement": 23,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "092b914a8e5d4e9ba37e6713926d85d2:1033d54d12474a8db12815b0ac97a2f8:5bff3bccfa544f9fb70c898dd070169d",
  "placement": 13,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "092b914a8e5d4e9ba37e6713926d85d2:1033d54d12474a8db12815b0ac97a2f8:5bff3bccfa544f9fb70c898dd070169d",
  "placement": 14,
  "time_alive": 1317,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "092b914a8e5d4e9ba37e6713926d85d2:1033d54d12474a8db12815b0ac97a2f8:5bff3bccfa544f9fb70c898dd070169d",
  "placement": 21,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "092b914a8e5d4e9ba37e6713926d85d2:1033d54d12474a8db12815b0ac97a2f8:5bff3bccfa544f9fb70c898dd070169d",
  "placement": 6,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "092b914a8e5d4e9ba37e6713926d85d2:1033d54d12474a8db12815b0ac97a2f8:5bff3bccfa544f9fb70c898dd070169d",
  "placement": 22,
  "time_alive": 1083,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "092b914a8e5d4e9ba37e6713926d85d2:1033d54d12474a8db12815b0ac97a2f8:5bff3bccfa544f9fb70c898dd070169d",
  "placement": 17,
  "time_alive": 1287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "4a3e45b69e2148ea9b7e7cb138e5b93c:b35ca28a66284f9baaaf4925d0deeca9:fb4ba85c7dbd4d27b8676322ca1da195",
  "placement": 20,
  "time_alive": 1147,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "4a3e45b69e2148ea9b7e7cb138e5b93c:b35ca28a66284f9baaaf4925d0deeca9:fb4ba85c7dbd4d27b8676322ca1da195",
  "placement": 21,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "4a3e45b69e2148ea9b7e7cb138e5b93c:b35ca28a66284f9baaaf4925d0deeca9:fb4ba85c7dbd4d27b8676322ca1da195",
  "placement": 22,
  "time_alive": 1109,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "4a3e45b69e2148ea9b7e7cb138e5b93c:b35ca28a66284f9baaaf4925d0deeca9:fb4ba85c7dbd4d27b8676322ca1da195",
  "placement": 10,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "4a3e45b69e2148ea9b7e7cb138e5b93c:b35ca28a66284f9baaaf4925d0deeca9:fb4ba85c7dbd4d27b8676322ca1da195",
  "placement": 12,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "4a3e45b69e2148ea9b7e7cb138e5b93c:b35ca28a66284f9baaaf4925d0deeca9:fb4ba85c7dbd4d27b8676322ca1da195",
  "placement": 20,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "0a9b5986c66740d0bc981c84a26a9138:6e11f1398ece4aca8ed0841a9640d5af:8097ece1f3f14485adcee09ef8368b42",
  "placement": 17,
  "time_alive": 1305,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "0a9b5986c66740d0bc981c84a26a9138:6e11f1398ece4aca8ed0841a9640d5af:8097ece1f3f14485adcee09ef8368b42",
  "placement": 30,
  "time_alive": 316,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "0a9b5986c66740d0bc981c84a26a9138:6e11f1398ece4aca8ed0841a9640d5af:8097ece1f3f14485adcee09ef8368b42",
  "placement": 27,
  "time_alive": 841,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "0a9b5986c66740d0bc981c84a26a9138:6e11f1398ece4aca8ed0841a9640d5af:8097ece1f3f14485adcee09ef8368b42",
  "placement": 21,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "0a9b5986c66740d0bc981c84a26a9138:6e11f1398ece4aca8ed0841a9640d5af:8097ece1f3f14485adcee09ef8368b42",
  "placement": 7,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 21,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 29,
  "time_alive": 355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 12,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 31,
  "time_alive": 84,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 24,
  "time_alive": 1026,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "bcdb2576bbb24f248f995565c8cc244e:c926f3604f294e86b3e00ae250ae6a0d:d23b86d6966c42c39cc76cef80e0b832",
  "placement": 16,
  "time_alive": 1291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 11,
  "time_alive": 1361,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 33,
  "time_alive": 247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 30,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 8,
  "time_alive": 1357,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 32,
  "time_alive": 301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "5fc7f8b28e6f44de906cd645054f278b:bb27c79f37f64b3285838abbce92ca21:cca99398d2c147da8e5e3b1d8eb31937",
  "placement": 29,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d:7ee7658b4f4b4384a7eafe369c8a5c9a:d454a798555044fa8165670e136f4f9a",
  "placement": 32,
  "time_alive": 782,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d:7ee7658b4f4b4384a7eafe369c8a5c9a:d454a798555044fa8165670e136f4f9a",
  "placement": 18,
  "time_alive": 1259,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d:7ee7658b4f4b4384a7eafe369c8a5c9a:d454a798555044fa8165670e136f4f9a",
  "placement": 8,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d:7ee7658b4f4b4384a7eafe369c8a5c9a:d454a798555044fa8165670e136f4f9a",
  "placement": 28,
  "time_alive": 356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d:7ee7658b4f4b4384a7eafe369c8a5c9a:d454a798555044fa8165670e136f4f9a",
  "placement": 31,
  "time_alive": 304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "48c16b7f6f754d3e9c1a2cd86c6ee57d:7ee7658b4f4b4384a7eafe369c8a5c9a:d454a798555044fa8165670e136f4f9a",
  "placement": 25,
  "time_alive": 1036,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 30,
  "time_alive": 832,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 31,
  "time_alive": 289,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21fca17b-b879-40b3-9fa2-4d23d02221d9",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 31,
  "time_alive": 367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "177ec4ae-57cc-4a8c-82e1-e83719408a6b",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 5,
  "time_alive": 1378,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6c210709-e5d0-4de0-b287-e531ece30cde",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 29,
  "time_alive": 383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "90b366b3-4ba2-4e5d-902e-24de86e714d6",
  "team_id": "76fa68a7ee0f471087f3e286af5ea237:e3da2cd672c94c7ead250e7af3c5f6a4:ea6045bb835a409581773770aa813493",
  "placement": 28,
  "time_alive": 388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bfc7a322-2e92-436d-b5df-87bf6d8bc431",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:bf3946cf59ef4c7091e277b7030af7b5",
  "placement": 26,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6a4888fb-f4b8-4da2-8041-ca85263c83b3",
  "team_id": "6408a7e11e0e49648e8b797244610065:8ff51b388f3a447ea71917939a768ce9:bf3946cf59ef4c7091e277b7030af7b5",
  "placement": 32,
  "time_alive": 260,
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
    