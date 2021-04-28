const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 8,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 13,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 5,
  "time_alive": 1493,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 27,
  "time_alive": 606,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 11,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 2,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 7,
  "time_alive": 1468,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 2,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 14,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 16,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 2,
  "time_alive": 1511,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "29acfd9b2dd54b6baaa851178dbb4fa9:451eb3f920d34e7a8532d69d9bd2a1df:6a8225ab5f3f4132b46d8d415020ba6c",
  "placement": 24,
  "time_alive": 1001,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 17,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1481,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 2,
  "time_alive": 1525,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 24,
  "time_alive": 1010,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 23,
  "time_alive": 1085,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 33,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 26,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 19,
  "time_alive": 1259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 7,
  "time_alive": 1477,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 8,
  "time_alive": 1435,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 8,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 7,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 16,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 14,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 31,
  "time_alive": 361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 26,
  "time_alive": 645,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 26,
  "time_alive": 898,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 3,
  "time_alive": 1448,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 22,
  "time_alive": 1151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 24,
  "time_alive": 894,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 13,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 3,
  "time_alive": 1477,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 13,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:ba3172fcc3864e298b467e172327179f:e92283ff558543f6b182d64196082092",
  "placement": 23,
  "time_alive": 1009,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "34fd1a7f87c74c3b96d58e4e87e118f1:6ac4c1be87ef4f5e895e9e0a98730a1e:d3cc020895e64af48507287c6e4f359d",
  "placement": 18,
  "time_alive": 1272,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "34fd1a7f87c74c3b96d58e4e87e118f1:6ac4c1be87ef4f5e895e9e0a98730a1e:d3cc020895e64af48507287c6e4f359d",
  "placement": 18,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "34fd1a7f87c74c3b96d58e4e87e118f1:6ac4c1be87ef4f5e895e9e0a98730a1e:d3cc020895e64af48507287c6e4f359d",
  "placement": 10,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "34fd1a7f87c74c3b96d58e4e87e118f1:6ac4c1be87ef4f5e895e9e0a98730a1e:d3cc020895e64af48507287c6e4f359d",
  "placement": 7,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "34fd1a7f87c74c3b96d58e4e87e118f1:6ac4c1be87ef4f5e895e9e0a98730a1e:d3cc020895e64af48507287c6e4f359d",
  "placement": 7,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "34fd1a7f87c74c3b96d58e4e87e118f1:6ac4c1be87ef4f5e895e9e0a98730a1e:d3cc020895e64af48507287c6e4f359d",
  "placement": 13,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 14,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 25,
  "time_alive": 720,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 22,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 18,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 27,
  "time_alive": 838,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "7b3afcb832de4dec86f641729cdf58ac:cacd469667b84aa0a2214f6cfe6f3ca0:f2e2031fee374b2599a235bba51e6bfc",
  "placement": 21,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 10,
  "time_alive": 1423,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 3,
  "time_alive": 1475,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 9,
  "time_alive": 1443,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 20,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 21,
  "time_alive": 1157,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 18,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 31,
  "time_alive": 177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 31,
  "time_alive": 141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 6,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 22,
  "time_alive": 1149,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 29,
  "time_alive": 463,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e:c1fb4441de8d42219f7cc2e2d024627e:f0189f5b2cbb4b24a6849a89e83c53d4",
  "placement": 22,
  "time_alive": 1027,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 27,
  "time_alive": 742,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 9,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 18,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 21,
  "time_alive": 1229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 6,
  "time_alive": 1471,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "6d683e6d1c18418f8c6337b8d9ba2925:7399d949084a4cf392eae9a9dca947b0:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 20,
  "time_alive": 1207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 32,
  "time_alive": 88,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 5,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 26,
  "time_alive": 864,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 11,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 17,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:4a13295183184622a50bfa77c61687cc:6fe91627358247fd97ed2a5c0d1cd8d2",
  "placement": 10,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 19,
  "time_alive": 1238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 28,
  "time_alive": 492,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 24,
  "time_alive": 947,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 9,
  "time_alive": 1435,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 25,
  "time_alive": 946,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 28,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 16,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 17,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 19,
  "time_alive": 1268,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 14,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 27,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "1dd038a262814a2da71f9f620f182848:24a1d5f3289a48d8bf30bba4e6385a58:c64d3bbc05ec43ef8a9d0c6f437207a5",
  "placement": 23,
  "time_alive": 1146,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "1dd038a262814a2da71f9f620f182848:24a1d5f3289a48d8bf30bba4e6385a58:c64d3bbc05ec43ef8a9d0c6f437207a5",
  "placement": 12,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "1dd038a262814a2da71f9f620f182848:24a1d5f3289a48d8bf30bba4e6385a58:c64d3bbc05ec43ef8a9d0c6f437207a5",
  "placement": 32,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "1dd038a262814a2da71f9f620f182848:24a1d5f3289a48d8bf30bba4e6385a58:c64d3bbc05ec43ef8a9d0c6f437207a5",
  "placement": 31,
  "time_alive": 304,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "1dd038a262814a2da71f9f620f182848:24a1d5f3289a48d8bf30bba4e6385a58:c64d3bbc05ec43ef8a9d0c6f437207a5",
  "placement": 33,
  "time_alive": 211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "1dd038a262814a2da71f9f620f182848:24a1d5f3289a48d8bf30bba4e6385a58:c64d3bbc05ec43ef8a9d0c6f437207a5",
  "placement": 30,
  "time_alive": 718,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 20,
  "time_alive": 1200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 26,
  "time_alive": 632,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 29,
  "time_alive": 391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 16,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "17ba76e234ee49038185c4fce00ce60d:b7e8e4529dfd4fe5838b41e751de8152:bb72e1c07a034b87b74268fc81c820b0",
  "placement": 15,
  "time_alive": 1294,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2df8298c-3fbc-4c4b-9f68-4de7bec15989",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 21,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b18eeee-cf1e-4fd6-b2eb-1a3a6be8cf47",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 8,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 28,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 30,
  "time_alive": 334,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 32,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:612ff85ffc2047029e3acdbe9578e452:961833efaec54854ab287d215dd828cb",
  "placement": 26,
  "time_alive": 943,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 28,
  "time_alive": 453,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 22,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 12,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 25,
  "time_alive": 723,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 24,
  "time_alive": 970,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "7af9aeff4baa45599aa04cdda6843846:9d103b6a5ee64ef2b9dcb5ff8685c315:a76fc7a6d21b4b30881e76579eb5ff2b",
  "placement": 12,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 30,
  "time_alive": 194,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 30,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 15,
  "time_alive": 1365,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 32,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 20,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "568ba67f4a844084bd0131e13b77d7be:795463e9bc6f46f7acd00d674fc1e22c:dcdf08d1a49844849fa545b355908d26",
  "placement": 6,
  "time_alive": 1384,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 24,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 27,
  "time_alive": 519,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 27,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 15,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 12,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 29,
  "time_alive": 763,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "394dbe7a81f64c518bca4452799b7efb:7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4",
  "placement": 29,
  "time_alive": 345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "394dbe7a81f64c518bca4452799b7efb:7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4",
  "placement": 21,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "394dbe7a81f64c518bca4452799b7efb:7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4",
  "placement": 21,
  "time_alive": 1162,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "394dbe7a81f64c518bca4452799b7efb:7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4",
  "placement": 14,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "394dbe7a81f64c518bca4452799b7efb:7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4",
  "placement": 19,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "394dbe7a81f64c518bca4452799b7efb:7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4",
  "placement": 31,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a93e193d-eaa9-4235-a71a-471e2c514425",
  "team_id": "1853757c5169451f9812ed0af1bbf3d7:3dd83d95182849b9b63a3d1415a911b5:8b10d5f02bbf4264bfcd298fe0e2c5ca",
  "placement": 25,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7f8b0d7e-4a65-471d-afd2-4978fd7c2ccd",
  "team_id": "1853757c5169451f9812ed0af1bbf3d7:3dd83d95182849b9b63a3d1415a911b5:8b10d5f02bbf4264bfcd298fe0e2c5ca",
  "placement": 29,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "43c7eb85-f85a-4fa5-a84a-3b7805784b83",
  "team_id": "1853757c5169451f9812ed0af1bbf3d7:3dd83d95182849b9b63a3d1415a911b5:8b10d5f02bbf4264bfcd298fe0e2c5ca",
  "placement": 29,
  "time_alive": 568,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c201d6-42c6-4a96-8995-5e487050e877",
  "team_id": "1853757c5169451f9812ed0af1bbf3d7:3dd83d95182849b9b63a3d1415a911b5:8b10d5f02bbf4264bfcd298fe0e2c5ca",
  "placement": 23,
  "time_alive": 1052,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "928f903b-ecd0-48c7-9bab-c4378217ae32",
  "team_id": "1853757c5169451f9812ed0af1bbf3d7:3dd83d95182849b9b63a3d1415a911b5:8b10d5f02bbf4264bfcd298fe0e2c5ca",
  "placement": 28,
  "time_alive": 558,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cb73579b-333e-4956-aec2-c3ff53e373dd",
  "team_id": "1853757c5169451f9812ed0af1bbf3d7:3dd83d95182849b9b63a3d1415a911b5:8b10d5f02bbf4264bfcd298fe0e2c5ca",
  "placement": 19,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 3,
  "time_alive": 1476,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 6,
  "time_alive": 1470,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 2,
  "time_alive": 1512,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 3,
  "time_alive": 1482,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 9,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 11,
  "time_alive": 1615,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 7,
  "time_alive": 1470,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 8,
  "time_alive": 1433,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 9,
  "time_alive": 1433,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 6,
  "time_alive": 1531,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 4,
  "time_alive": 1483,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 5,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 2,
  "time_alive": 1531,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 4,
  "time_alive": 1482,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1512,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1499,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 20,
  "time_alive": 1161,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 9,
  "time_alive": 1666,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 16,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 15,
  "time_alive": 1385,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 3,
  "time_alive": 1493,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 5,
  "time_alive": 1549,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 3,
  "time_alive": 1498,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 13,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 10,
  "time_alive": 1405,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 23,
  "time_alive": 1162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 4,
  "time_alive": 1489,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 21,
  "time_alive": 1158,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 10,
  "time_alive": 1345,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 20,
  "time_alive": 1223,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1558,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 16,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1499,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1580,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 16,
  "time_alive": 1315,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 13,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 5,
  "time_alive": 1478,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 5,
  "time_alive": 1478,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 22,
  "time_alive": 1149,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 3,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1712,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1558,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1499,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1559,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 7,
  "time_alive": 1443,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:d54c789f3a6e455182e2dbb3b404ef03:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 19,
  "time_alive": 1056,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 6,
  "time_alive": 1462,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 2,
  "time_alive": 1507,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 13,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 24,
  "time_alive": 982,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 30,
  "time_alive": 417,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 2,
  "time_alive": 1717,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 19,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 6,
  "time_alive": 1448,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 4,
  "time_alive": 1479,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 1,
  "time_alive": 1580,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 21,
  "time_alive": 1167,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "dd9a2b7225b54f9f990443d173807349:f5783ecc4b074396aad638fd7baa1c89:fbc52b1997cb40c7ade823360c605915",
  "placement": 3,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 17,
  "time_alive": 1251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 10,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 18,
  "time_alive": 1222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 4,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 5,
  "time_alive": 1415,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1717,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 6,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 4,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 10,
  "time_alive": 1480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 16,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 14,
  "time_alive": 1374,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 12,
  "time_alive": 1375,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 29,
  "time_alive": 783,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1440,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 2,
  "time_alive": 1469,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 8,
  "time_alive": 1668,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 12,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 14,
  "time_alive": 1390,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 10,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 27,
  "time_alive": 813,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "9fca471401a743cbbb71ea31dc252473:a7c903e72e0c44e4be2e9c99e66296cc:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 2,
  "time_alive": 1500,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 1,
  "time_alive": 1531,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 20,
  "time_alive": 1258,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 27,
  "time_alive": 658,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 12,
  "time_alive": 1389,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 1,
  "time_alive": 1469,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 18,
  "time_alive": 1457,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 29,
  "time_alive": 776,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 5,
  "time_alive": 1465,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1507,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 6,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 10,
  "time_alive": 1416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 18,
  "time_alive": 1221,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 24,
  "time_alive": 1140,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 8,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 14,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 8,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 19,
  "time_alive": 1246,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 13,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 8,
  "time_alive": 1436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 19,
  "time_alive": 1267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 9,
  "time_alive": 1407,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 6,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 4,
  "time_alive": 1474,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 7,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 7,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 24,
  "time_alive": 1008,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 7,
  "time_alive": 1690,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 28,
  "time_alive": 829,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 21,
  "time_alive": 1128,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 32,
  "time_alive": 368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 12,
  "time_alive": 1467,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 11,
  "time_alive": 1389,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 1,
  "time_alive": 1500,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 9,
  "time_alive": 1434,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 11,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 28,
  "time_alive": 434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 17,
  "time_alive": 1327,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 17,
  "time_alive": 1254,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 21,
  "time_alive": 1165,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 4,
  "time_alive": 1522,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 9,
  "time_alive": 1425,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 7,
  "time_alive": 1449,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 14,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 14,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 8,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1447,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 17,
  "time_alive": 1348,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 12,
  "time_alive": 1378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 16,
  "time_alive": 1330,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 26,
  "time_alive": 969,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 24,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 5,
  "time_alive": 1505,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 3,
  "time_alive": 1481,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 6,
  "time_alive": 1450,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 11,
  "time_alive": 1474,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 5,
  "time_alive": 1471,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 20,
  "time_alive": 1015,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 25,
  "time_alive": 1118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 25,
  "time_alive": 829,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 27,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 18,
  "time_alive": 1231,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1697,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1532,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 27,
  "time_alive": 867,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1467,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1573,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 19,
  "time_alive": 1207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 18,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 31,
  "time_alive": 370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 3,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 33,
  "time_alive": 155,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 32,
  "time_alive": 231,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 6,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 14,
  "time_alive": 1587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 31,
  "time_alive": 285,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 7,
  "time_alive": 1443,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 11,
  "time_alive": 1430,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 15,
  "time_alive": 1438,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 12,
  "time_alive": 1386,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 12,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 16,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 12,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 10,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 2,
  "time_alive": 1499,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 22,
  "time_alive": 1111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 10,
  "time_alive": 1645,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 8,
  "time_alive": 1462,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 10,
  "time_alive": 1417,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 25,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 17,
  "time_alive": 1392,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 17,
  "time_alive": 1243,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 21,
  "time_alive": 1004,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 15,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 26,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 3,
  "time_alive": 1497,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 10,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 28,
  "time_alive": 877,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 6,
  "time_alive": 1693,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 23,
  "time_alive": 1115,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 13,
  "time_alive": 1391,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 12,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 28,
  "time_alive": 440,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 26,
  "time_alive": 866,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 4,
  "time_alive": 1486,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 5,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 22,
  "time_alive": 938,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 23,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 13,
  "time_alive": 1299,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 15,
  "time_alive": 1580,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 24,
  "time_alive": 964,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 2,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 15,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 16,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 8,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 30,
  "time_alive": 343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 14,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 1,
  "time_alive": 1507,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 14,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 18,
  "time_alive": 1262,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 14,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 13,
  "time_alive": 1596,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 15,
  "time_alive": 1359,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 18,
  "time_alive": 1241,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 14,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 13,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 24,
  "time_alive": 985,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "212208c844e145e0bb69874ec438f080:76cd448896b243e6a083f2d0bddde1da:81b5dff316fd4660809fc00c84ae0135",
  "placement": 25,
  "time_alive": 874,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 23,
  "time_alive": 1135,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 9,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 9,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 5,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 4,
  "time_alive": 1438,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 27,
  "time_alive": 527,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 17,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 23,
  "time_alive": 971,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 17,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 18,
  "time_alive": 1295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 22,
  "time_alive": 1000,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f:81d933d1e99843d6bf68d97e0ce84d63:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 15,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 30,
  "time_alive": 378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 32,
  "time_alive": 308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 31,
  "time_alive": 204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 8,
  "time_alive": 1398,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 27,
  "time_alive": 903,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 3,
  "time_alive": 1717,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 21,
  "time_alive": 1175,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 30,
  "time_alive": 544,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 24,
  "time_alive": 994,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 30,
  "time_alive": 340,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 31,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:9d2fb127cc4348b8bd675f6fd57278f7:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 26,
  "time_alive": 708,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 19,
  "time_alive": 1209,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 8,
  "time_alive": 1438,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 21,
  "time_alive": 1016,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 28,
  "time_alive": 384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 11,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 26,
  "time_alive": 991,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 20,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 19,
  "time_alive": 1233,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 18,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 23,
  "time_alive": 1088,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 10,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "bc7141afb13045ec911a0960d89463e5:c92e2e955db64d739c68ad3ada6b9ca7:eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 11,
  "time_alive": 1402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 29,
  "time_alive": 394,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 21,
  "time_alive": 1242,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 26,
  "time_alive": 798,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 19,
  "time_alive": 1254,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 29,
  "time_alive": 454,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 17,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 9,
  "time_alive": 1453,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 26,
  "time_alive": 879,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 23,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 20,
  "time_alive": 1098,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 15,
  "time_alive": 1310,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 31,
  "time_alive": 258,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 22,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 18,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 20,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 20,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 33,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 29,
  "time_alive": 362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 10,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 20,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 13,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 7,
  "time_alive": 1518,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 29,
  "time_alive": 728,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 9,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 33,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 22,
  "time_alive": 1164,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 30,
  "time_alive": 290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 26,
  "time_alive": 684,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 12,
  "time_alive": 1307,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 23,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 14,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 12,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 29,
  "time_alive": 611,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 22,
  "time_alive": 1091,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 33,
  "time_alive": 124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:96d981a3f4164de8a5c20fdfcdc16c5f:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 7,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 28,
  "time_alive": 471,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 16,
  "time_alive": 1355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 29,
  "time_alive": 346,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 7,
  "time_alive": 1403,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 7,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 16,
  "time_alive": 1528,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 11,
  "time_alive": 1429,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 28,
  "time_alive": 598,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 16,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 24,
  "time_alive": 1063,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 20,
  "time_alive": 1187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "6acb13f8377342cf8ced4e92b6ac83c9:8bf3d01c6bb54c16a589fd07c1b575f3:bb4d6660b86c4a65be469e61c9dcf375",
  "placement": 27,
  "time_alive": 652,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 24,
  "time_alive": 1058,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 14,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 32,
  "time_alive": 185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 30,
  "time_alive": 314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 31,
  "time_alive": 315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 33,
  "time_alive": 172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 18,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 17,
  "time_alive": 1349,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 19,
  "time_alive": 1277,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 29,
  "time_alive": 399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 2,
  "time_alive": 1502,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "2dfc71015e5349ee938b57a94d205587:4c1f24079a434127885a1da3256fb41c:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 24,
  "time_alive": 943,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 7,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 31,
  "time_alive": 432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 19,
  "time_alive": 1205,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 33,
  "time_alive": 211,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 32,
  "time_alive": 279,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 12,
  "time_alive": 1604,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 30,
  "time_alive": 690,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 32,
  "time_alive": 378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 22,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 26,
  "time_alive": 798,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 32,
  "time_alive": 219,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "7ed5cb3d2e1945a1a9b9ffaf73564d53:ae27e992f1504153b74b340c0b9bbfc2:b113cff792584acdbc1b34fc3001c5a8",
  "placement": 23,
  "time_alive": 963,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 27,
  "time_alive": 719,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 30,
  "time_alive": 484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 16,
  "time_alive": 1262,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 31,
  "time_alive": 281,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 25,
  "time_alive": 1006,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 32,
  "time_alive": 172,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 33,
  "time_alive": 236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 29,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 31,
  "time_alive": 412,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 9,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 30,
  "time_alive": 504,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:10bccc182cca49388ff1c72b475999bc:843d8aef62654618b4c745ddd4b6dc12",
  "placement": 32,
  "time_alive": 198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 25,
  "time_alive": 852,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 13,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 15,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 9,
  "time_alive": 1398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 19,
  "time_alive": 1211,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 22,
  "time_alive": 1126,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 25,
  "time_alive": 901,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 25,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 28,
  "time_alive": 785,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 25,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 25,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 22,
  "time_alive": 1003,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 26,
  "time_alive": 803,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 27,
  "time_alive": 849,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 24,
  "time_alive": 889,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 29,
  "time_alive": 380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 23,
  "time_alive": 1011,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 25,
  "time_alive": 1058,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 32,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 22,
  "time_alive": 1024,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 20,
  "time_alive": 1159,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 27,
  "time_alive": 689,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 28,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 17,
  "time_alive": 1161,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 32,
  "time_alive": 334,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 28,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 23,
  "time_alive": 903,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 13,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 21,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 30,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 27,
  "time_alive": 863,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 24,
  "time_alive": 935,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 26,
  "time_alive": 817,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 21,
  "time_alive": 1095,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 13,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "5f5eb409ed864fda859716259f18af71:dbb44919ad0d47bc90af6f971adce20b:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 29,
  "time_alive": 359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 21,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 33,
  "time_alive": 298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 17,
  "time_alive": 1248,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 15,
  "time_alive": 1337,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 16,
  "time_alive": 1290,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 31,
  "time_alive": 250,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 26,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 31,
  "time_alive": 449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 30,
  "time_alive": 570,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 32,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 23,
  "time_alive": 999,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:8dfe8748d1b94f2fb7406fd548177305:c715a4e542434529ae927e7d29943575",
  "placement": 28,
  "time_alive": 382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "e6106fb2-8482-4d1b-8a8d-da953c4f8e94",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 20,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2a679f38-a9eb-476c-a2d8-e9ac41ef673c",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 19,
  "time_alive": 1304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3ca40f01-46ad-4f5a-a858-b9875cfd7aa6",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 11,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a058ad-6dd9-45f4-b753-d8fe6072ad74",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 25,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67e8b67e-12d7-4db2-8a53-780969169f0c",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 15,
  "time_alive": 1294,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "981321c3-982d-477e-ae48-1911d17188d5",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 28,
  "time_alive": 515,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "36b5e838-88a5-4cff-86ef-2bcfec87c419",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 22,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "213fd00c-07bf-46d1-aa5c-34dbd5e35a03",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 33,
  "time_alive": 190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1b09fe89-2c4a-4387-ba0f-61e6d1362d75",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 33,
  "time_alive": 162,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1e7a31a9-27a8-4e41-8a28-43478b6f1b03",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 31,
  "time_alive": 322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3e2c6c3c-09e7-4586-a187-adf5c92bb1b0",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 18,
  "time_alive": 1229,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "834b16e4-4f90-45c2-bb12-aeaae9c58bd6",
  "team_id": "05bc93103c4d4065875084840928cf50:33398a0f21b7447fafacaef9f1a5e929:87444c6ddd71439a8300eb6a2f2613aa",
  "placement": 33,
  "time_alive": 110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1556,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 19,
  "time_alive": 1222,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1545,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 5,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 21,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 26,
  "time_alive": 680,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1485,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 8,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 3,
  "time_alive": 1510,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1515,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:862a829593db4771a9965076bf1621b7:95b8c65a16ec4322824da21fe511371a",
  "placement": 17,
  "time_alive": 1245,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 7,
  "time_alive": 1479,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 10,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 21,
  "time_alive": 1150,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 6,
  "time_alive": 1450,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 4,
  "time_alive": 1477,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 5,
  "time_alive": 1496,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 12,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 24,
  "time_alive": 1127,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 14,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 9,
  "time_alive": 1452,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 32,
  "time_alive": 279,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:4bd84f96405b43caaed077fcbc0e0dd2:6cf91453d6a2426a90a09ab5eb1cf3cb",
  "placement": 1,
  "time_alive": 1503,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 10,
  "time_alive": 1443,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 12,
  "time_alive": 1417,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 14,
  "time_alive": 1374,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1515,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 11,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1514,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 24,
  "time_alive": 948,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 4,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 15,
  "time_alive": 1342,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 5,
  "time_alive": 1498,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 19,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:b4695df986e4426a90b08279d169675f:ef0106457410430bbbd501bf4930a54e",
  "placement": 14,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 11,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 3,
  "time_alive": 1518,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 11,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 19,
  "time_alive": 1310,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 3,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 6,
  "time_alive": 1466,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 6,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 5,
  "time_alive": 1446,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 25,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 11,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 8,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:60f4e001139e4f7a9fed954acf54d238:c5a0ef01f92f4355ae9f93a118ccacc9",
  "placement": 6,
  "time_alive": 1437,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 5,
  "time_alive": 1504,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 4,
  "time_alive": 1532,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 15,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 25,
  "time_alive": 675,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 8,
  "time_alive": 1444,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 9,
  "time_alive": 1422,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 25,
  "time_alive": 1093,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 21,
  "time_alive": 1182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 1,
  "time_alive": 1515,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 7,
  "time_alive": 1475,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:bd5c68b6315f4aa2936b10587060a944:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 3,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 3,
  "time_alive": 1545,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 11,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 5,
  "time_alive": 1500,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 3,
  "time_alive": 1501,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 5,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 16,
  "time_alive": 1346,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 5,
  "time_alive": 1451,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 2,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 23,
  "time_alive": 1101,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 10,
  "time_alive": 1448,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 20,
  "time_alive": 1197,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 9,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 16,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 5,
  "time_alive": 1499,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 17,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 20,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 2,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 17,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 3,
  "time_alive": 1478,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 18,
  "time_alive": 1256,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 7,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 18,
  "time_alive": 1253,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 4,
  "time_alive": 1507,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:ade2bf24eb7f42188069ddaab62da007:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 2,
  "time_alive": 1503,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 14,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 6,
  "time_alive": 1491,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 12,
  "time_alive": 1398,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 13,
  "time_alive": 1367,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 6,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 9,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 28,
  "time_alive": 600,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 9,
  "time_alive": 1398,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 24,
  "time_alive": 1084,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 6,
  "time_alive": 1479,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 2,
  "time_alive": 1515,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 4,
  "time_alive": 1462,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 8,
  "time_alive": 1466,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 20,
  "time_alive": 1200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 7,
  "time_alive": 1451,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 10,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 8,
  "time_alive": 1467,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 4,
  "time_alive": 1497,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 13,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 6,
  "time_alive": 1441,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 28,
  "time_alive": 807,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 8,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 12,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "acb537b9b2c742cd9384d8a8c66df20f:ca36e50b4d0e46cbbac3812cbcf884ad:dc0d7fee106c44ea8ad0509e9152785d",
  "placement": 11,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 25,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 1,
  "time_alive": 1544,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 3,
  "time_alive": 1542,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 11,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 10,
  "time_alive": 1452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 22,
  "time_alive": 1079,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 8,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 2,
  "time_alive": 1515,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 25,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 25,
  "time_alive": 925,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 13,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 30,
  "time_alive": 501,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1544,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1545,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 9,
  "time_alive": 1425,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 23,
  "time_alive": 731,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 11,
  "time_alive": 1422,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 14,
  "time_alive": 1350,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 19,
  "time_alive": 1243,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 19,
  "time_alive": 1229,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 29,
  "time_alive": 475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 26,
  "time_alive": 906,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 33,
  "time_alive": 94,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1556,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 28,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 10,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 29,
  "time_alive": 531,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 16,
  "time_alive": 1401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 31,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 21,
  "time_alive": 1159,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 31,
  "time_alive": 733,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 3,
  "time_alive": 1481,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1515,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 6,
  "time_alive": 1483,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 22,
  "time_alive": 996,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 32,
  "time_alive": 226,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 14,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 26,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 30,
  "time_alive": 498,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 22,
  "time_alive": 873,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 3,
  "time_alive": 1508,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 1,
  "time_alive": 1480,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 20,
  "time_alive": 1203,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 12,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 15,
  "time_alive": 1345,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 13,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:69dff74b667e436e9ed5c2a3f91aaf99:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 16,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 24,
  "time_alive": 898,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 18,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 6,
  "time_alive": 1489,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 2,
  "time_alive": 1515,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 19,
  "time_alive": 1357,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 2,
  "time_alive": 1514,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 27,
  "time_alive": 662,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 11,
  "time_alive": 1383,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 9,
  "time_alive": 1400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 22,
  "time_alive": 1107,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 22,
  "time_alive": 1035,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:6836c1ada1494eefa005aac3604892d3:d0b41961bcb6483e9af6f567931a135e",
  "placement": 20,
  "time_alive": 1105,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 29,
  "time_alive": 534,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 22,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 13,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 28,
  "time_alive": 577,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 7,
  "time_alive": 1470,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 13,
  "time_alive": 1382,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 7,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 3,
  "time_alive": 1477,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 18,
  "time_alive": 1240,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 17,
  "time_alive": 1326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 5,
  "time_alive": 1502,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "8bd1f40d430c4bd980672d253fbab307:cac98cff201c4719972c450901d178fa:d82bbe3019c04e789f949c081f2dea87",
  "placement": 8,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 6,
  "time_alive": 1484,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 15,
  "time_alive": 1388,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 16,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 7,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 17,
  "time_alive": 1369,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 22,
  "time_alive": 983,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 30,
  "time_alive": 258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 30,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 10,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 32,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 10,
  "time_alive": 1440,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:454bd129a28a4b89ba569a45a1c15602:922888934f6c48b6ad33258584c1f688",
  "placement": 5,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 26,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 29,
  "time_alive": 311,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 32,
  "time_alive": 204,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 25,
  "time_alive": 999,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 20,
  "time_alive": 1107,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 30,
  "time_alive": 200,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 4,
  "time_alive": 1475,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 14,
  "time_alive": 1368,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 1,
  "time_alive": 1515,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 24,
  "time_alive": 936,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 14,
  "time_alive": 1413,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:8904b895bf5446c7bdf51f987b60c935:b9ca414d77564fe29c9c72f01acc8695",
  "placement": 24,
  "time_alive": 911,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 9,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 25,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 9,
  "time_alive": 1418,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 14,
  "time_alive": 1357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 13,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 12,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 20,
  "time_alive": 1220,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 26,
  "time_alive": 941,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 32,
  "time_alive": 247,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 26,
  "time_alive": 833,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 9,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "587e08bbdb5145739d1fd689370c04d9:71728635b8fc4ddc898bc68929bc49a5:7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 15,
  "time_alive": 1370,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 20,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 13,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 23,
  "time_alive": 953,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 8,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 1,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 27,
  "time_alive": 295,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 16,
  "time_alive": 1319,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 27,
  "time_alive": 816,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 23,
  "time_alive": 1094,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 16,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "00d4e4e53f604734b361cd2ce70f53c8:61adf5120f704284bc8929a6b1355020:aa6e9fc100084a70836ddcab3630f302",
  "placement": 25,
  "time_alive": 736,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 18,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 4,
  "time_alive": 1508,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 15,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 31,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 9,
  "time_alive": 1462,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 20,
  "time_alive": 1083,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 18,
  "time_alive": 1224,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 21,
  "time_alive": 1157,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 5,
  "time_alive": 1466,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 20,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 29,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "602b2091b56248cebda76748731900a5:9a7cc53a11134bd2847b0dc3115577c7:9fff533d35134b07a509a703028a96a3",
  "placement": 12,
  "time_alive": 1400,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 7,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 30,
  "time_alive": 738,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 16,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 33,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 29,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 10,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 27,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 16,
  "time_alive": 1324,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 4,
  "time_alive": 1500,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 24,
  "time_alive": 935,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:b1543bbdcd50428e8201d431b18d8717:dceb4df9878547ecb8be93224cff30d0",
  "placement": 21,
  "time_alive": 1042,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 23,
  "time_alive": 1062,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 9,
  "time_alive": 1442,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 19,
  "time_alive": 1327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 27,
  "time_alive": 634,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 12,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 7,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 32,
  "time_alive": 161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 13,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 11,
  "time_alive": 1356,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 19,
  "time_alive": 1183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 17,
  "time_alive": 1341,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "08d602a575664bca8213e3fa7e171dd6:8516ac20f6e34eaa929ff300662da56c:c8fb959c9bde4c15bbbd41847f3defaa",
  "placement": 32,
  "time_alive": 192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 27,
  "time_alive": 670,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 26,
  "time_alive": 795,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 18,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 17,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 14,
  "time_alive": 1415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 25,
  "time_alive": 557,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 17,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 12,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 22,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 7,
  "time_alive": 1460,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 11,
  "time_alive": 1436,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "6b836e37e489476ea1f64c8d4216bf7c:8e5be0cf8f9c45a1bea1e65421a1d5cb:c4be94dcc9a0436e94b588d81575a0fe",
  "placement": 7,
  "time_alive": 1428,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 15,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 23,
  "time_alive": 1119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 31,
  "time_alive": 504,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 24,
  "time_alive": 1003,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 28,
  "time_alive": 570,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 10,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 25,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 32,
  "time_alive": 553,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 29,
  "time_alive": 794,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 27,
  "time_alive": 682,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 3,
  "time_alive": 1510,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "097f2fda0f744277bafe11a52a9f6890:3268d65abf1f402cb1e71b8b9c238ec2:8cea967916e44a7890b124d941109ab9",
  "placement": 10,
  "time_alive": 1405,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 28,
  "time_alive": 597,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 31,
  "time_alive": 226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 28,
  "time_alive": 784,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 18,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 18,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 18,
  "time_alive": 1303,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 11,
  "time_alive": 1383,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 7,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 13,
  "time_alive": 1346,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 21,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 21,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "16220a13485949bdbbb1cb44e1836cf1:41ecfd92a1df47e2b203a87a25246417:5cd2eda17ddf46c490b8a451573b1ebc",
  "placement": 23,
  "time_alive": 950,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 12,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 32,
  "time_alive": 96,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 33,
  "time_alive": 145,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 32,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 29,
  "time_alive": 439,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 32,
  "time_alive": 87,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 33,
  "time_alive": 93,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 29,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 6,
  "time_alive": 1463,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 30,
  "time_alive": 439,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 23,
  "time_alive": 944,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 18,
  "time_alive": 1225,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 30,
  "time_alive": 271,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 8,
  "time_alive": 1443,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 22,
  "time_alive": 1095,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 30,
  "time_alive": 420,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 15,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 8,
  "time_alive": 1426,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 15,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 20,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 16,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 27,
  "time_alive": 774,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "aadf156486f0425db79e7b75d376dd95:d0e55410fe1349eda0e9f3844e627a10:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 28,
  "time_alive": 501,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 19,
  "time_alive": 1237,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 16,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 24,
  "time_alive": 877,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 12,
  "time_alive": 1391,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 27,
  "time_alive": 577,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 24,
  "time_alive": 676,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 31,
  "time_alive": 181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 23,
  "time_alive": 1128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 4,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 31,
  "time_alive": 396,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 15,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "0dbb69ecc2dc46b9a2144b5eba986c3e:93ec163b7a994b75868508b62f1b910e:b2efa308e20b467c8b13c510677d77e7",
  "placement": 31,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 29,
  "time_alive": 770,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 4,
  "time_alive": 1500,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 31,
  "time_alive": 378,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 26,
  "time_alive": 453,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 19,
  "time_alive": 1222,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 10,
  "time_alive": 1394,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 33,
  "time_alive": 228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 14,
  "time_alive": 1355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 33,
  "time_alive": 84,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "1c369fe439f7489d901a94d4b8237230:30cbb0e29eee40acb29a7a820caf7319:93afd209580643a6a4346c6acfaddf47",
  "placement": 30,
  "time_alive": 416,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 22,
  "time_alive": 1132,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 21,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 20,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 21,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 32,
  "time_alive": 183,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 23,
  "time_alive": 843,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 2,
  "time_alive": 1480,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 16,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 30,
  "time_alive": 641,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 13,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 30,
  "time_alive": 412,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "5476f255b263409abf16fd23f78d7201:5807931560e44719ae24638acc76e7e6:d5b1e80fb226439dad306ace401f6a9f",
  "placement": 29,
  "time_alive": 422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 17,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 27,
  "time_alive": 436,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 25,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 26,
  "time_alive": 598,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 19,
  "time_alive": 1132,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 23,
  "time_alive": 1020,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 17,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 26,
  "time_alive": 887,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 12,
  "time_alive": 1406,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 18,
  "time_alive": 1314,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "7af3f6f44e244451adfaafc93dec86f7:8158df8ff10542ce934114b53a1e880e:9f75d9bfc0d9480bbf5ceaecaf222fe5",
  "placement": 19,
  "time_alive": 1222,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "bf9a368f3ff64e16a045b46fca537627:ce85174826c04d4f90d278800dafc68b:d2010070f055409d970571f7e049df80",
  "placement": 4,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 13,
  "time_alive": 1393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 24,
  "time_alive": 887,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 23,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 15,
  "time_alive": 1408,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 21,
  "time_alive": 987,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 15,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 28,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 17,
  "time_alive": 1250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 28,
  "time_alive": 625,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 28,
  "time_alive": 527,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "55b5fd8bc35d42b18701f2ab734f7b93:64da011caee7418aae12e178fd0fecc6:f8ab7d09b6e94f368d31084995ac8e21",
  "placement": 26,
  "time_alive": 634,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c560c87-3aa1-4084-b7c4-cf138f4d3a70",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 31,
  "time_alive": 249,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "65ff3c7d-6a03-4f50-8126-9e3b6f05cb91",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 17,
  "time_alive": 1352,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b522fdb2-c3d7-4580-a71f-fcdb27f91878",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 27,
  "time_alive": 816,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "71e83442-4b48-4aa0-8764-b3254d3157e5",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 26,
  "time_alive": 801,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c5a0ab94-08ee-48b3-866e-71136d4304c7",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 24,
  "time_alive": 679,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "27af9543-6b5c-4dc0-b3a1-43f315886b46",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 28,
  "time_alive": 276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b1388c8-a07e-4dac-b9c1-889ada9f992d",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 29,
  "time_alive": 272,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4a54e477-3492-4908-83bd-3d55bdb2bc73",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 33,
  "time_alive": 260,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4074cf3b-34ca-48f4-aef8-6a2c4ff5a5b3",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 31,
  "time_alive": 604,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ac9c205f-977a-4c4d-9bb8-98de44e5c862",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 33,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8dfbe11d-af6c-4bc5-87af-65e74ae15dd4",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 31,
  "time_alive": 368,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9ff94c17-ca4e-4d21-bc81-6bfcb4aaeb6a",
  "team_id": "067b094e00f24b43b3a6601e5bd7163b:82138966dede4c51a899d78a84a23cb2:e0a6a687b53d42da9b329f877de27e4b",
  "placement": 27,
  "time_alive": 630,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1526,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 2,
  "time_alive": 1481,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 12,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 4,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 2,
  "time_alive": 1538,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 15,
  "time_alive": 1360,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1517,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 9,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 18,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1493,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 26,
  "time_alive": 537,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 19,
  "time_alive": 1192,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 1,
  "time_alive": 1481,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 2,
  "time_alive": 1497,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 8,
  "time_alive": 1417,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 20,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 4,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 5,
  "time_alive": 1479,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 5,
  "time_alive": 1488,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 1,
  "time_alive": 1493,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 17,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 6,
  "time_alive": 1467,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "07169d79b42145de903f0d6a3b88d565:0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa",
  "placement": 15,
  "time_alive": 1346,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 3,
  "time_alive": 1484,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 4,
  "time_alive": 1486,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1502,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1515,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 11,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 11,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 4,
  "time_alive": 1498,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 12,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 2,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 13,
  "time_alive": 1330,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "1d9b66233b95498788166964034501e4:2b3da27c62d14887bd6daa865df33487:e1983d4364b443febd24a698f021e8d9",
  "placement": 1,
  "time_alive": 1496,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 4,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 3,
  "time_alive": 1453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 8,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1502,
  "elims": 19,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 14,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 18,
  "time_alive": 1314,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 14,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 7,
  "time_alive": 1484,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 24,
  "time_alive": 996,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 1,
  "time_alive": 1485,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 2,
  "time_alive": 1493,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "3c65e61b2cca4c6fa87e87afea1c5ad5:7b72b0f938b2436f9ede554db15d5058:8a9f8de89ec04ae09755781697a30577",
  "placement": 13,
  "time_alive": 1371,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 25,
  "time_alive": 1037,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 12,
  "time_alive": 1362,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 6,
  "time_alive": 1484,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 13,
  "time_alive": 1378,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 1,
  "time_alive": 1515,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 14,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 25,
  "time_alive": 873,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 27,
  "time_alive": 521,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 7,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 12,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 3,
  "time_alive": 1490,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "803ae2cf372b422498943ea8a215d75e:9032a26b8a7845dd991841581182a1dd:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 18,
  "time_alive": 1033,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 6,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 18,
  "time_alive": 1338,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 29,
  "time_alive": 619,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 19,
  "time_alive": 1176,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 27,
  "time_alive": 718,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 10,
  "time_alive": 1420,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 6,
  "time_alive": 1444,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 22,
  "time_alive": 1182,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 2,
  "time_alive": 1493,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 10,
  "time_alive": 1410,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b702503b-f23e-4990-aa71-1d8fe23e9905",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 5,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "669f2e92-6ebc-4c3e-bc6b-c33bca230702",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 3,
  "time_alive": 1470,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "21e7ed21-5b9d-4d63-a8a3-0fd49eb6d453",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 29,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f6fe3306-2842-4002-a7d5-88050f2bb1b8",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6d121c1e-d78d-4b2b-96fa-1b7949a72640",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 9,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10f7c9fb-5b1f-4870-a107-28082076c55b",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 3,
  "time_alive": 1485,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ae3033e1-a736-4896-b680-ac298092de46",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 8,
  "time_alive": 1412,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bb50d97f-13cb-4730-a963-a81c71f8c863",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 13,
  "time_alive": 1403,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a1e9fc95-67b0-4a13-b6fe-dd2dcd55e316",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 10,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a4277d8b-afb1-4341-a2b8-cc25a7b0f94f",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 13,
  "time_alive": 1449,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86f79adf-7bf0-4efa-95a7-d81b2358c141",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 10,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f8d94716-3400-4044-9e10-1e5eb031644a",
  "team_id": "0a5c24defd1f4810be4592a179482d93:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 7,
  "time_alive": 1425,
  "elims": 5,
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
    