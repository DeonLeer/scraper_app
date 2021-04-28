const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 30,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 25,
  "time_alive": 439,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "09525a55-bf72-4b54-b6ca-e5921f80dcba",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 20,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0284c040-344b-4647-9274-7c65d43c2150",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 27,
  "time_alive": 802,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "04e77f89-6f5c-426d-980d-515b6c1508f4",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 21,
  "time_alive": 979,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "04d29a82-3468-439f-8139-a9c35398449a",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 29,
  "time_alive": 393,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "087873c3-67a0-43da-8011-5fcf846e47f6",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 22,
  "time_alive": 654,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 12,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 4,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 1,
  "time_alive": 1517,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 11,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 4,
  "time_alive": 1420,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 8,
  "time_alive": 1420,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 26,
  "time_alive": 822,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 9,
  "time_alive": 1377,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 3,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 2,
  "time_alive": 1505,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 11,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 4,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 15,
  "time_alive": 1276,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 1,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 10,
  "time_alive": 1392,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 10,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 8,
  "time_alive": 1391,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 29,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 3,
  "time_alive": 1397,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 14,
  "time_alive": 1305,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 26,
  "time_alive": 432,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 19,
  "time_alive": 1254,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 6,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 2,
  "time_alive": 1509,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 4,
  "time_alive": 1394,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 8,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 15,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 4,
  "time_alive": 1471,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 5,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 11,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 8,
  "time_alive": 1370,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 2,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 17,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 18,
  "time_alive": 1298,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 1,
  "time_alive": 1425,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 20,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 23,
  "time_alive": 1034,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 6,
  "time_alive": 1437,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1374,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1422,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1391,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 19,
  "time_alive": 1146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 16,
  "time_alive": 1262,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 3,
  "time_alive": 1452,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1446,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 5,
  "time_alive": 1433,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 15,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 25,
  "time_alive": 564,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 28,
  "time_alive": 814,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 21,
  "time_alive": 1090,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 33,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 7,
  "time_alive": 1404,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 3,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 1,
  "time_alive": 1509,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 2,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 16,
  "time_alive": 1300,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 4,
  "time_alive": 1460,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 9,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 22,
  "time_alive": 1104,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 5,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 23,
  "time_alive": 1054,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 32,
  "time_alive": 117,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 2,
  "time_alive": 1517,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 15,
  "time_alive": 1333,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 10,
  "time_alive": 1385,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 9,
  "time_alive": 1404,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "341c179499594c18924bb1e421347321:60f4e001139e4f7a9fed954acf54d238:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 14,
  "time_alive": 1288,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "341c179499594c18924bb1e421347321:60f4e001139e4f7a9fed954acf54d238:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 28,
  "time_alive": 334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "341c179499594c18924bb1e421347321:60f4e001139e4f7a9fed954acf54d238:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 9,
  "time_alive": 1395,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "341c179499594c18924bb1e421347321:60f4e001139e4f7a9fed954acf54d238:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 12,
  "time_alive": 1375,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "341c179499594c18924bb1e421347321:60f4e001139e4f7a9fed954acf54d238:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 13,
  "time_alive": 1348,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "341c179499594c18924bb1e421347321:60f4e001139e4f7a9fed954acf54d238:9fc74df09ead4e63ac6b7cf191a1622a",
  "placement": 22,
  "time_alive": 1135,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 1,
  "time_alive": 1401,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 26,
  "time_alive": 827,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 12,
  "time_alive": 1380,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 26,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 12,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 15,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 18,
  "time_alive": 1117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 6,
  "time_alive": 1393,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 25,
  "time_alive": 584,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 13,
  "time_alive": 1360,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 2,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 19,
  "time_alive": 1286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:33398a0f21b7447fafacaef9f1a5e929:da08dffbc4dc4efd88ca0b60f2447f1e",
  "placement": 29,
  "time_alive": 797,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:33398a0f21b7447fafacaef9f1a5e929:da08dffbc4dc4efd88ca0b60f2447f1e",
  "placement": 15,
  "time_alive": 1305,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:33398a0f21b7447fafacaef9f1a5e929:da08dffbc4dc4efd88ca0b60f2447f1e",
  "placement": 14,
  "time_alive": 1320,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:33398a0f21b7447fafacaef9f1a5e929:da08dffbc4dc4efd88ca0b60f2447f1e",
  "placement": 1,
  "time_alive": 1505,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:33398a0f21b7447fafacaef9f1a5e929:da08dffbc4dc4efd88ca0b60f2447f1e",
  "placement": 20,
  "time_alive": 1126,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "19851efc06de4a65a7a872cb269cb2d9:33398a0f21b7447fafacaef9f1a5e929:da08dffbc4dc4efd88ca0b60f2447f1e",
  "placement": 13,
  "time_alive": 1371,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:2cc8d7965a52465a8e17662f87c660da:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 9,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:2cc8d7965a52465a8e17662f87c660da:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 27,
  "time_alive": 801,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:2cc8d7965a52465a8e17662f87c660da:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 24,
  "time_alive": 918,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:2cc8d7965a52465a8e17662f87c660da:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 21,
  "time_alive": 1164,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:2cc8d7965a52465a8e17662f87c660da:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 9,
  "time_alive": 1387,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "0a9fd8d8631c4776924e564b9386db32:2cc8d7965a52465a8e17662f87c660da:fde7e5a732234af48ae3e41c74ccead4",
  "placement": 16,
  "time_alive": 1313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 31,
  "time_alive": 257,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 19,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 3,
  "time_alive": 1497,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 23,
  "time_alive": 1025,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 13,
  "time_alive": 1307,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 13,
  "time_alive": 1331,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 16,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 8,
  "time_alive": 1391,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 30,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 26,
  "time_alive": 348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 17,
  "time_alive": 1244,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 12,
  "time_alive": 1357,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 29,
  "time_alive": 327,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 32,
  "time_alive": 81,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 28,
  "time_alive": 701,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 10,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 11,
  "time_alive": 1333,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 24,
  "time_alive": 891,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 13,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 22,
  "time_alive": 1068,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 7,
  "time_alive": 1394,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 18,
  "time_alive": 1287,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 32,
  "time_alive": 227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 31,
  "time_alive": 216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 8,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 17,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 17,
  "time_alive": 1263,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 7,
  "time_alive": 1428,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 6,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 25,
  "time_alive": 831,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 20,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 25,
  "time_alive": 916,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 18,
  "time_alive": 1261,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 3,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 19,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 17,
  "time_alive": 1254,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 6,
  "time_alive": 1442,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 20,
  "time_alive": 1246,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 32,
  "time_alive": 59,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 17,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "37037bd442cb48999f22d70f585a8428:59e9b7e9e1c349f49d3687ea135bb89d:8eda6ef13c084b7ab763adf7076fb019",
  "placement": 20,
  "time_alive": 1100,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "37037bd442cb48999f22d70f585a8428:59e9b7e9e1c349f49d3687ea135bb89d:8eda6ef13c084b7ab763adf7076fb019",
  "placement": 10,
  "time_alive": 1373,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "37037bd442cb48999f22d70f585a8428:59e9b7e9e1c349f49d3687ea135bb89d:8eda6ef13c084b7ab763adf7076fb019",
  "placement": 27,
  "time_alive": 381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "37037bd442cb48999f22d70f585a8428:59e9b7e9e1c349f49d3687ea135bb89d:8eda6ef13c084b7ab763adf7076fb019",
  "placement": 24,
  "time_alive": 1032,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "37037bd442cb48999f22d70f585a8428:59e9b7e9e1c349f49d3687ea135bb89d:8eda6ef13c084b7ab763adf7076fb019",
  "placement": 16,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "37037bd442cb48999f22d70f585a8428:59e9b7e9e1c349f49d3687ea135bb89d:8eda6ef13c084b7ab763adf7076fb019",
  "placement": 24,
  "time_alive": 935,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 10,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 20,
  "time_alive": 1134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 23,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 6,
  "time_alive": 1430,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 27,
  "time_alive": 761,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 21,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 24,
  "time_alive": 958,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 30,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 21,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 30,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 14,
  "time_alive": 1347,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 12,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 22,
  "time_alive": 1067,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 22,
  "time_alive": 1089,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 11,
  "time_alive": 1383,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 16,
  "time_alive": 1319,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 21,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 31,
  "time_alive": 84,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 5,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 19,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 18,
  "time_alive": 1290,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 31,
  "time_alive": 128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 29,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 30,
  "time_alive": 111,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "28240fe5a55842d4bfb2249881efb620:2a01c1d278984e77b66c030c93745b82:afb9d18131ee40fba7be07099ac8c5c4",
  "placement": 21,
  "time_alive": 1077,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "28240fe5a55842d4bfb2249881efb620:2a01c1d278984e77b66c030c93745b82:afb9d18131ee40fba7be07099ac8c5c4",
  "placement": 18,
  "time_alive": 1179,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "28240fe5a55842d4bfb2249881efb620:2a01c1d278984e77b66c030c93745b82:afb9d18131ee40fba7be07099ac8c5c4",
  "placement": 32,
  "time_alive": 117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "28240fe5a55842d4bfb2249881efb620:2a01c1d278984e77b66c030c93745b82:afb9d18131ee40fba7be07099ac8c5c4",
  "placement": 14,
  "time_alive": 1347,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "28240fe5a55842d4bfb2249881efb620:2a01c1d278984e77b66c030c93745b82:afb9d18131ee40fba7be07099ac8c5c4",
  "placement": 23,
  "time_alive": 1075,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "28240fe5a55842d4bfb2249881efb620:2a01c1d278984e77b66c030c93745b82:afb9d18131ee40fba7be07099ac8c5c4",
  "placement": 28,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 30,
  "time_alive": 697,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 5,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 30,
  "time_alive": 273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 27,
  "time_alive": 283,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 24,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 27,
  "time_alive": 278,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 27,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 11,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 22,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 28,
  "time_alive": 275,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 26,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 23,
  "time_alive": 974,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 33,
  "time_alive": 97,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 33,
  "time_alive": 86,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 28,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 33,
  "time_alive": 77,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 25,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 14,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "005e0047-4bc4-45d3-a7b4-f7510c18a765",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 25,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "00e16899-7ed8-44d9-80ad-223a07a57b9d",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 29,
  "time_alive": 288,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "007309bb-196a-43a2-8cc2-e76c03ed679e",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 31,
  "time_alive": 268,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01341264-5429-4963-8990-217c23c56be8",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 29,
  "time_alive": 226,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0496831a-4a9e-4fb1-b66f-ced982def7f4",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 31,
  "time_alive": 79,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "059c0b18-f049-49b0-b03d-be6066b70fa6",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 32,
  "time_alive": 83,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 16,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 1,
  "time_alive": 1359,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 2,
  "time_alive": 1491,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 3,
  "time_alive": 1474,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "2b3da27c62d14887bd6daa865df33487:8a9f8de89ec04ae09755781697a30577:9032a26b8a7845dd991841581182a1dd",
  "placement": 3,
  "time_alive": 1447,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 1,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 11,
  "time_alive": 1330,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 15,
  "time_alive": 1288,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 4,
  "time_alive": 1442,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 21,
  "time_alive": 1187,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "07d9ab69cfce4aeabe7fcdf99dba3e1e:7004cd495bd34662945c508d118f65a7:bd5c68b6315f4aa2936b10587060a944",
  "placement": 1,
  "time_alive": 1462,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 8,
  "time_alive": 1335,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 6,
  "time_alive": 1347,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 5,
  "time_alive": 1441,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 9,
  "time_alive": 1392,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 22,
  "time_alive": 1117,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 4,
  "time_alive": 1418,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 28,
  "time_alive": 642,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 5,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 1,
  "time_alive": 1491,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 16,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 1,
  "time_alive": 1497,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "1f95d39e197142d5930a56c2a9a4b1cb:922888934f6c48b6ad33258584c1f688:dd9a2b7225b54f9f990443d173807349",
  "placement": 9,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 7,
  "time_alive": 1349,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 29,
  "time_alive": 459,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 11,
  "time_alive": 1393,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 1,
  "time_alive": 1474,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 12,
  "time_alive": 1371,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "07169d79b42145de903f0d6a3b88d565:bf9a368f3ff64e16a045b46fca537627:d2010070f055409d970571f7e049df80",
  "placement": 23,
  "time_alive": 683,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 12,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 25,
  "time_alive": 858,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 29,
  "time_alive": 641,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 17,
  "time_alive": 1323,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 9,
  "time_alive": 1403,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "005c3e58ad1b466dbec7ceeaaac398f6:587e08bbdb5145739d1fd689370c04d9:f54583872aac451ab31ce647035fa030",
  "placement": 2,
  "time_alive": 1462,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 25,
  "time_alive": 1063,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 12,
  "time_alive": 1328,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 10,
  "time_alive": 1398,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 6,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 4,
  "time_alive": 1456,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "1510d83868684cc5bd6d1f6ba1c3b356:5c3983781ef74297927111bc4dd35e26:811d12fc3da2470db6dc2e97b95bef93",
  "placement": 15,
  "time_alive": 1319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 4,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 4,
  "time_alive": 1354,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 7,
  "time_alive": 1416,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 23,
  "time_alive": 1099,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 10,
  "time_alive": 1392,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "0865dd0ccabd4156aa6e7757f9b5b753:795463e9bc6f46f7acd00d674fc1e22c:9aa78280d3be4d6596a2d367283d8719",
  "placement": 21,
  "time_alive": 995,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 3,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 7,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 19,
  "time_alive": 1187,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 8,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 19,
  "time_alive": 1274,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "08d1990ffd784ce48ebb586afb2f3f51:0bd56698f13049b89e3ab24ddd0218c8:10bccc182cca49388ff1c72b475999bc",
  "placement": 20,
  "time_alive": 1087,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 21,
  "time_alive": 1176,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 2,
  "time_alive": 1359,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 25,
  "time_alive": 1076,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 13,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 8,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "4b3ba1a234f94378a43e2b3a4a684113:68c35d12fe89481c9bf7c0ea6af45b56:a7b7a0100388428aa307092879db3ac4",
  "placement": 24,
  "time_alive": 499,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 19,
  "time_alive": 1282,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 17,
  "time_alive": 1274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 21,
  "time_alive": 1125,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 29,
  "time_alive": 233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 2,
  "time_alive": 1497,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "1ec30c9532074b6583f075c27c7bef27:3dd157401bdc4ae39cf3a467f4535e14:e2011ff1bc324b22a850c0551ceb0267",
  "placement": 5,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 27,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 13,
  "time_alive": 1321,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 30,
  "time_alive": 601,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 12,
  "time_alive": 1369,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 11,
  "time_alive": 1389,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "71897c0449fe443588c0da390169854c:9f75d9bfc0d9480bbf5ceaecaf222fe5:f17b090b5de24e3f918afd61c34a6cbf",
  "placement": 12,
  "time_alive": 1340,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 2,
  "time_alive": 1439,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 23,
  "time_alive": 926,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 6,
  "time_alive": 1439,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 33,
  "time_alive": 176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "212208c844e145e0bb69874ec438f080:61adf5120f704284bc8929a6b1355020:cac98cff201c4719972c450901d178fa",
  "placement": 17,
  "time_alive": 1272,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 14,
  "time_alive": 1314,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 3,
  "time_alive": 1355,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 24,
  "time_alive": 1082,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 10,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 27,
  "time_alive": 425,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5:7272644e563943c8ad873451118ebb19:7ab80328f01c4fe5afd084aa7b4571d2",
  "placement": 13,
  "time_alive": 1338,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 33,
  "time_alive": 105,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 15,
  "time_alive": 1305,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 14,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 14,
  "time_alive": 1336,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 24,
  "time_alive": 965,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "2409cec1afea49758b05f9afc9cc69bb:c7da3360e445414b8f9bb7e5110356c2:f84249f3202947ddbce9b345783afbb8",
  "placement": 7,
  "time_alive": 1370,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 26,
  "time_alive": 954,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 32,
  "time_alive": 72,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 3,
  "time_alive": 1489,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 26,
  "time_alive": 423,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 17,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "13e2a96f7da64765badf8fe8f160a3c9:a9716111ba114088b2a04484e94c2b40:b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 6,
  "time_alive": 1397,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 9,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 27,
  "time_alive": 738,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 17,
  "time_alive": 1200,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 27,
  "time_alive": 321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 5,
  "time_alive": 1442,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "564f312441754e0a8cb8dd1001edcd22:61f6d9635473442693df146553b4b142:8fa70ee7d1ee4952b3d2201c36f170f2",
  "placement": 8,
  "time_alive": 1368,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 22,
  "time_alive": 1144,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 20,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 33,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 3,
  "time_alive": 1461,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 6,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "4bd84f96405b43caaed077fcbc0e0dd2:4d21ad5b186a43fd990b8215d1328d0f:adb3576be8674e2cb07ab40f07ba65fe",
  "placement": 26,
  "time_alive": 431,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "0a8e70b30c33493498ab39791775fd52:602837fa2bda461a9895ac0b73b70751:6a3211cd7d6341b28eff261cea42c4c3",
  "placement": 5,
  "time_alive": 1373,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "0a8e70b30c33493498ab39791775fd52:602837fa2bda461a9895ac0b73b70751:6a3211cd7d6341b28eff261cea42c4c3",
  "placement": 22,
  "time_alive": 964,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "0a8e70b30c33493498ab39791775fd52:602837fa2bda461a9895ac0b73b70751:6a3211cd7d6341b28eff261cea42c4c3",
  "placement": 9,
  "time_alive": 1399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "0a8e70b30c33493498ab39791775fd52:602837fa2bda461a9895ac0b73b70751:6a3211cd7d6341b28eff261cea42c4c3",
  "placement": 11,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "0a8e70b30c33493498ab39791775fd52:602837fa2bda461a9895ac0b73b70751:6a3211cd7d6341b28eff261cea42c4c3",
  "placement": 15,
  "time_alive": 1328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "0a8e70b30c33493498ab39791775fd52:602837fa2bda461a9895ac0b73b70751:6a3211cd7d6341b28eff261cea42c4c3",
  "placement": 14,
  "time_alive": 1328,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a:67c2821aeda440ee8c80123c5c0a4d8c:9ea8234b26984246a605371f224c0e9f",
  "placement": 32,
  "time_alive": 225,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a:67c2821aeda440ee8c80123c5c0a4d8c:9ea8234b26984246a605371f224c0e9f",
  "placement": 33,
  "time_alive": 68,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a:67c2821aeda440ee8c80123c5c0a4d8c:9ea8234b26984246a605371f224c0e9f",
  "placement": 4,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a:67c2821aeda440ee8c80123c5c0a4d8c:9ea8234b26984246a605371f224c0e9f",
  "placement": 15,
  "time_alive": 1335,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a:67c2821aeda440ee8c80123c5c0a4d8c:9ea8234b26984246a605371f224c0e9f",
  "placement": 31,
  "time_alive": 250,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "4cb0d06413f4428183dbf7be2f8f088a:67c2821aeda440ee8c80123c5c0a4d8c:9ea8234b26984246a605371f224c0e9f",
  "placement": 27,
  "time_alive": 406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 15,
  "time_alive": 1309,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 14,
  "time_alive": 1320,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 13,
  "time_alive": 1355,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 31,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 16,
  "time_alive": 1327,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20:a13712bea37e4562beae6a2b46266652:f7c74e5a90a34416bd2e5980b9af0724",
  "placement": 30,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483:58f0bbb9a2734776a1cdf7726aa35226:7e48eb0652f4460e902420675e6291b8",
  "placement": 24,
  "time_alive": 1076,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483:58f0bbb9a2734776a1cdf7726aa35226:7e48eb0652f4460e902420675e6291b8",
  "placement": 18,
  "time_alive": 1160,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483:58f0bbb9a2734776a1cdf7726aa35226:7e48eb0652f4460e902420675e6291b8",
  "placement": 22,
  "time_alive": 1103,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483:58f0bbb9a2734776a1cdf7726aa35226:7e48eb0652f4460e902420675e6291b8",
  "placement": 2,
  "time_alive": 1474,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483:58f0bbb9a2734776a1cdf7726aa35226:7e48eb0652f4460e902420675e6291b8",
  "placement": 32,
  "time_alive": 67,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "1b7bbe468ff7458a9e9b25a365983483:58f0bbb9a2734776a1cdf7726aa35226:7e48eb0652f4460e902420675e6291b8",
  "placement": 32,
  "time_alive": 65,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 13,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 19,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 8,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 19,
  "time_alive": 1274,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 30,
  "time_alive": 331,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "01dd92135b9a4ed696608da904b62de9:2c12ccd089c74c4d976cba4de37c4955:343eabe6526d4248a05dad8955b29add",
  "placement": 10,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "23df14f270bd492095edb24472a482f1:93afd209580643a6a4346c6acfaddf47:a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 31,
  "time_alive": 270,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "23df14f270bd492095edb24472a482f1:93afd209580643a6a4346c6acfaddf47:a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 8,
  "time_alive": 1341,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "23df14f270bd492095edb24472a482f1:93afd209580643a6a4346c6acfaddf47:a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 26,
  "time_alive": 907,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "23df14f270bd492095edb24472a482f1:93afd209580643a6a4346c6acfaddf47:a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 22,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "23df14f270bd492095edb24472a482f1:93afd209580643a6a4346c6acfaddf47:a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 7,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "23df14f270bd492095edb24472a482f1:93afd209580643a6a4346c6acfaddf47:a8e2baadf3414fccbfb099edcb9783a2",
  "placement": 18,
  "time_alive": 1142,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "036a737a688d436bbce811af92b11a4b:6cc2daeec2f64fbe84cfd29a65f4eb50:78f14ef256a64e1397e0f28c6d50210f",
  "placement": 30,
  "time_alive": 306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "036a737a688d436bbce811af92b11a4b:6cc2daeec2f64fbe84cfd29a65f4eb50:78f14ef256a64e1397e0f28c6d50210f",
  "placement": 16,
  "time_alive": 1278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "036a737a688d436bbce811af92b11a4b:6cc2daeec2f64fbe84cfd29a65f4eb50:78f14ef256a64e1397e0f28c6d50210f",
  "placement": 31,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "036a737a688d436bbce811af92b11a4b:6cc2daeec2f64fbe84cfd29a65f4eb50:78f14ef256a64e1397e0f28c6d50210f",
  "placement": 18,
  "time_alive": 1290,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "036a737a688d436bbce811af92b11a4b:6cc2daeec2f64fbe84cfd29a65f4eb50:78f14ef256a64e1397e0f28c6d50210f",
  "placement": 20,
  "time_alive": 1258,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "036a737a688d436bbce811af92b11a4b:6cc2daeec2f64fbe84cfd29a65f4eb50:78f14ef256a64e1397e0f28c6d50210f",
  "placement": 16,
  "time_alive": 1311,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:6157ffbf1ff74fccb4a35685c13b6062:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 17,
  "time_alive": 1292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:6157ffbf1ff74fccb4a35685c13b6062:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 9,
  "time_alive": 1340,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:6157ffbf1ff74fccb4a35685c13b6062:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 27,
  "time_alive": 809,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:6157ffbf1ff74fccb4a35685c13b6062:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 21,
  "time_alive": 1171,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:6157ffbf1ff74fccb4a35685c13b6062:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 29,
  "time_alive": 387,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "3b9b0bcebca84b7cabeb6f4ae3e61041:6157ffbf1ff74fccb4a35685c13b6062:93ae02ef313d4cd5b34181ba3f5b7a8b",
  "placement": 11,
  "time_alive": 1345,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 10,
  "time_alive": 1329,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 21,
  "time_alive": 989,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 18,
  "time_alive": 1198,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 32,
  "time_alive": 185,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 26,
  "time_alive": 624,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "60482087e02a4fdea8abb8887295d178:76b806e58b5441fa948ac945b7ca6c68:8f45ae0f89f14cb89544f5ca156b26ee",
  "placement": 31,
  "time_alive": 133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 18,
  "time_alive": 1290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 24,
  "time_alive": 917,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 28,
  "time_alive": 779,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 5,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 18,
  "time_alive": 1306,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "338a215711f3448dbd376128b0879456:c9d0e2975870420296ff49511b6441c5:ea53217b420f4df49f67b94f1cb3d9a7",
  "placement": 25,
  "time_alive": 443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 11,
  "time_alive": 1324,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 26,
  "time_alive": 830,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 12,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 24,
  "time_alive": 921,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 23,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "7399d949084a4cf392eae9a9dca947b0:86fb292b84e24cbc859b85a8151b8e48:b2439380b03e4a2daae498fb7dd6535a",
  "placement": 29,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "a5c5eaa997984daa8c2b4dde230e9462:bcb0ed9283694280986ac2c083854ef9:d75b250c11a343d1b10a058f05277c51",
  "placement": 23,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "a5c5eaa997984daa8c2b4dde230e9462:bcb0ed9283694280986ac2c083854ef9:d75b250c11a343d1b10a058f05277c51",
  "placement": 10,
  "time_alive": 1336,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "a5c5eaa997984daa8c2b4dde230e9462:bcb0ed9283694280986ac2c083854ef9:d75b250c11a343d1b10a058f05277c51",
  "placement": 16,
  "time_alive": 1264,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "a5c5eaa997984daa8c2b4dde230e9462:bcb0ed9283694280986ac2c083854ef9:d75b250c11a343d1b10a058f05277c51",
  "placement": 25,
  "time_alive": 771,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "a5c5eaa997984daa8c2b4dde230e9462:bcb0ed9283694280986ac2c083854ef9:d75b250c11a343d1b10a058f05277c51",
  "placement": 14,
  "time_alive": 1329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "a5c5eaa997984daa8c2b4dde230e9462:bcb0ed9283694280986ac2c083854ef9:d75b250c11a343d1b10a058f05277c51",
  "placement": 19,
  "time_alive": 1134,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "763a9e39c0044f00bf6bf26762494ac8:c71b1c16ae7e474b9d54ef256ed31792:cf136cea1e2a40a09c9c4e37ca585822",
  "placement": 6,
  "time_alive": 1367,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "763a9e39c0044f00bf6bf26762494ac8:c71b1c16ae7e474b9d54ef256ed31792:cf136cea1e2a40a09c9c4e37ca585822",
  "placement": 28,
  "time_alive": 471,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "763a9e39c0044f00bf6bf26762494ac8:c71b1c16ae7e474b9d54ef256ed31792:cf136cea1e2a40a09c9c4e37ca585822",
  "placement": 23,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "763a9e39c0044f00bf6bf26762494ac8:c71b1c16ae7e474b9d54ef256ed31792:cf136cea1e2a40a09c9c4e37ca585822",
  "placement": 28,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "763a9e39c0044f00bf6bf26762494ac8:c71b1c16ae7e474b9d54ef256ed31792:cf136cea1e2a40a09c9c4e37ca585822",
  "placement": 28,
  "time_alive": 402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "763a9e39c0044f00bf6bf26762494ac8:c71b1c16ae7e474b9d54ef256ed31792:cf136cea1e2a40a09c9c4e37ca585822",
  "placement": 28,
  "time_alive": 259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 29,
  "time_alive": 403,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 31,
  "time_alive": 199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 32,
  "time_alive": 188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 20,
  "time_alive": 1194,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 13,
  "time_alive": 1340,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c2596cce-b66c-400b-af58-02f7fc9a9a0c",
  "team_id": "737c0a8ae35a467b94edcc35ee743623:78cc66670fa943b183852713001b83ba:f23f681a344a4d1580fc28156cd08e98",
  "placement": 22,
  "time_alive": 968,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "cca61707-570b-41fb-a8ee-6c62113bd14c",
  "team_id": "6af53b8857034085baa07e46db2948b4:913bbd393717454eb4dd1cecf3fc6e02:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 20,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e28753b-1a1c-4e90-8082-486a372597b6",
  "team_id": "6af53b8857034085baa07e46db2948b4:913bbd393717454eb4dd1cecf3fc6e02:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 30,
  "time_alive": 305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "091e738f-3244-4451-bf7c-8cef6d4a782c",
  "team_id": "6af53b8857034085baa07e46db2948b4:913bbd393717454eb4dd1cecf3fc6e02:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 20,
  "time_alive": 1170,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "6ba2a8ba-6acc-4e14-af1d-6e8df08f6e30",
  "team_id": "6af53b8857034085baa07e46db2948b4:913bbd393717454eb4dd1cecf3fc6e02:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 30,
  "time_alive": 207,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "63a64585-531f-4939-9a50-f6cef2e49e74",
  "team_id": "6af53b8857034085baa07e46db2948b4:913bbd393717454eb4dd1cecf3fc6e02:ec892489b2bf4b3c8368620be7f6e049",
  "placement": 25,
  "time_alive": 672,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 3,
  "time_alive": 1431,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 2,
  "time_alive": 1476,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 27,
  "time_alive": 310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 19,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 28,
  "time_alive": 199,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "0143748734634079b060e5d871106f4a:48a10d6404c649198c8cf382f12253bc:e033f41ca03545579a78d8d21fbcb49b",
  "placement": 2,
  "time_alive": 1498,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 10,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 25,
  "time_alive": 997,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 2,
  "time_alive": 1496,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 9,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 7,
  "time_alive": 1366,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "7611d8e593e9453f85804b8bbbc6f9b0:9b9b2659b7854267bff1fad621c2fcf4:d133caa4b2f144fab6610d6ff0109bb3",
  "placement": 8,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 5,
  "time_alive": 1422,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 19,
  "time_alive": 1204,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 28,
  "time_alive": 292,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 1,
  "time_alive": 1461,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 16,
  "time_alive": 1290,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "86eb8233bef54fbe95e0ab8bb5808f4d:87c85794e4db4f83b44133174a58ec84:fe742f5ec10245f888803fd8b47b5724",
  "placement": 3,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 9,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 30,
  "time_alive": 476,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 5,
  "time_alive": 1402,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 2,
  "time_alive": 1461,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 11,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3:f5783ecc4b074396aad638fd7baa1c89:fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 1,
  "time_alive": 1498,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 2,
  "time_alive": 1455,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 6,
  "time_alive": 1457,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 3,
  "time_alive": 1431,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 17,
  "time_alive": 1278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 12,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "00f47fceecad4fc6b995e01a296069dc:d54c789f3a6e455182e2dbb3b404ef03:fbc52b1997cb40c7ade823360c605915",
  "placement": 26,
  "time_alive": 960,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 4,
  "time_alive": 1430,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 23,
  "time_alive": 1109,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 1,
  "time_alive": 1496,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 7,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 17,
  "time_alive": 1283,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "19086cb2e9d1471e86a4dce90aac5609:b2efa308e20b467c8b13c510677d77e7:db2d80e83ea140f1843915276db2c9dc",
  "placement": 17,
  "time_alive": 1272,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 22,
  "time_alive": 1036,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 1,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 14,
  "time_alive": 1289,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 26,
  "time_alive": 819,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 8,
  "time_alive": 1364,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "3371028fa5454fddaa972592dc8db8d1:bace3260dd5648f19e33d6eae8fc69dc:d3d0d93c44494122806a2c0e5d45621e",
  "placement": 11,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 26,
  "time_alive": 864,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 31,
  "time_alive": 313,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 8,
  "time_alive": 1372,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 3,
  "time_alive": 1446,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 14,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "4f3f5df211d44e77ae56f4ff8c6a3cf4:5a85b2f2ceca4e34a936d3114190556c:f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 9,
  "time_alive": 1381,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 8,
  "time_alive": 1395,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 3,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 10,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 3,
  "time_alive": 1428,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "454bd129a28a4b89ba569a45a1c15602:6a21dc791c364723a1bf809f9b2af4ba:6acb13f8377342cf8ced4e92b6ac83c9",
  "placement": 20,
  "time_alive": 1121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 20,
  "time_alive": 1116,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 7,
  "time_alive": 1439,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 24,
  "time_alive": 942,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 11,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 4,
  "time_alive": 1415,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "1d9b66233b95498788166964034501e4:1eeaa0d768894a5cbe9a6f98f83ccaff:e1983d4364b443febd24a698f021e8d9",
  "placement": 12,
  "time_alive": 1355,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 1,
  "time_alive": 1455,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 17,
  "time_alive": 1234,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 21,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "332e04c592104f07b72ffba4c515045f:9e49314a004148179f803c28098f168b:a2c54f4570d2482396c5510c2c2926ce",
  "placement": 4,
  "time_alive": 1426,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 24,
  "time_alive": 922,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 16,
  "time_alive": 1271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 4,
  "time_alive": 1403,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 4,
  "time_alive": 1423,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 18,
  "time_alive": 1278,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "0f3bbd6862d54c1a85f43dc82649b6e6:5159be897d8b419c97ea4b9a21d015fa:df6f4b54227545c6aa0e7d0238e28162",
  "placement": 14,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 18,
  "time_alive": 1144,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 14,
  "time_alive": 1338,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 20,
  "time_alive": 1171,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 21,
  "time_alive": 1119,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 1,
  "time_alive": 1431,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d:c07f32024afb49ed9ab87d8c72d32202:df110a82aab842b9881d15efce8a5f01",
  "placement": 18,
  "time_alive": 1240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 7,
  "time_alive": 1409,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 10,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 15,
  "time_alive": 1251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 22,
  "time_alive": 1116,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 2,
  "time_alive": 1431,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "0379be7e6f8a4404949cd136bbc8420c:30e07183763542f990c19f6c5eda3419:bfc4b85d5cd54a1db70e355319aae238",
  "placement": 22,
  "time_alive": 1118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 12,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 22,
  "time_alive": 1113,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 9,
  "time_alive": 1371,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 25,
  "time_alive": 957,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 27,
  "time_alive": 240,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a:47f70d3f350e4fdabc25803460bfee81:e9e67ae175c64eb696fd44090191cd1e",
  "placement": 7,
  "time_alive": 1396,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 23,
  "time_alive": 952,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 4,
  "time_alive": 1461,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 26,
  "time_alive": 355,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 28,
  "time_alive": 443,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 22,
  "time_alive": 1083,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "9e803fa9b145489c91c22dafd3c2f261:bf27322351234bc19f2c41833539bbbd:e8c74c7fc67e44518a263a64b2da2135",
  "placement": 5,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 16,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 27,
  "time_alive": 806,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 10,
  "time_alive": 1350,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 16,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 9,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "02fa2e14c0f1403cb6eacc9056b8afda:88776fcf62aa4ce78caf671291739cc3:9d5b2f0c94604d0d9f5df085daeacf70",
  "placement": 15,
  "time_alive": 1329,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "02d15625b4c34aedb459714dbe6e7989:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 27,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "02d15625b4c34aedb459714dbe6e7989:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 9,
  "time_alive": 1383,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "02d15625b4c34aedb459714dbe6e7989:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 16,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "02d15625b4c34aedb459714dbe6e7989:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 13,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "02d15625b4c34aedb459714dbe6e7989:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 23,
  "time_alive": 995,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "02d15625b4c34aedb459714dbe6e7989:58e879def6184b8ebd7b1f09be8b4ea0:b592b1291b804e4d8ab9fddfc9c79b70",
  "placement": 13,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:87eaf852ee8b447b841a6b002706a6e0:c6cab05d382c4befaf51fd583a64836a",
  "placement": 14,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:87eaf852ee8b447b841a6b002706a6e0:c6cab05d382c4befaf51fd583a64836a",
  "placement": 26,
  "time_alive": 914,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:87eaf852ee8b447b841a6b002706a6e0:c6cab05d382c4befaf51fd583a64836a",
  "placement": 12,
  "time_alive": 1329,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:87eaf852ee8b447b841a6b002706a6e0:c6cab05d382c4befaf51fd583a64836a",
  "placement": 14,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:87eaf852ee8b447b841a6b002706a6e0:c6cab05d382c4befaf51fd583a64836a",
  "placement": 6,
  "time_alive": 1376,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "387a65d5d5e9464e82705f7bb4a93601:87eaf852ee8b447b841a6b002706a6e0:c6cab05d382c4befaf51fd583a64836a",
  "placement": 32,
  "time_alive": 163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 11,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 5,
  "time_alive": 1458,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 23,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "3880e832a37e4fb38b9b507ee610f6b6:aa0b47a0d4f149408fbd04b0ec8bcf92:ade2bf24eb7f42188069ddaab62da007",
  "placement": 19,
  "time_alive": 1209,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 21,
  "time_alive": 1091,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 18,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 30,
  "time_alive": 258,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 5,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 5,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "273309d1c8a94d61913839e1d66eec5e:c7913b4b42654e2491b756025aa00c49:d4b767599c5c4a848b7e58dc0ba45356",
  "placement": 16,
  "time_alive": 1288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "3f521a17eab74e39967ca1f881801ee8:5af199b84ead4764ad13b606a833dc86:b26f75d17f58460a99be12d73ff5fe10",
  "placement": 17,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "3f521a17eab74e39967ca1f881801ee8:5af199b84ead4764ad13b606a833dc86:b26f75d17f58460a99be12d73ff5fe10",
  "placement": 8,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "3f521a17eab74e39967ca1f881801ee8:5af199b84ead4764ad13b606a833dc86:b26f75d17f58460a99be12d73ff5fe10",
  "placement": 18,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "3f521a17eab74e39967ca1f881801ee8:5af199b84ead4764ad13b606a833dc86:b26f75d17f58460a99be12d73ff5fe10",
  "placement": 20,
  "time_alive": 1124,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "3f521a17eab74e39967ca1f881801ee8:5af199b84ead4764ad13b606a833dc86:b26f75d17f58460a99be12d73ff5fe10",
  "placement": 6,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 25,
  "time_alive": 918,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 29,
  "time_alive": 760,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 31,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 6,
  "time_alive": 1413,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 20,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "79180036b0e2452eb701e368a75ad5e6:8482a81c4bfb4152a61afd055cde7ff8:9c1600da423d4fc18eadc8c7360a1c44",
  "placement": 28,
  "time_alive": 571,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 28,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 20,
  "time_alive": 1146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 7,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 12,
  "time_alive": 1361,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 15,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "31e4d46dcba14225a71c1156f16b19e3:925521bb87d543dd8872cb68034afce0:dceb4df9878547ecb8be93224cff30d0",
  "placement": 21,
  "time_alive": 1120,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069:eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 19,
  "time_alive": 1123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069:eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 11,
  "time_alive": 1362,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069:eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 13,
  "time_alive": 1311,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069:eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 8,
  "time_alive": 1382,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069:eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 19,
  "time_alive": 1259,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "947e170c34b54aa2833b067b982010e3:dd4fbfb4917b4ce4a269a5da1aafa069:eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 23,
  "time_alive": 1090,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "03efbe617be94971969ed876ccd2a48f:4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 13,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "03efbe617be94971969ed876ccd2a48f:4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 12,
  "time_alive": 1360,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "03efbe617be94971969ed876ccd2a48f:4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 19,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "03efbe617be94971969ed876ccd2a48f:4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 27,
  "time_alive": 772,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "03efbe617be94971969ed876ccd2a48f:4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 26,
  "time_alive": 572,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "03efbe617be94971969ed876ccd2a48f:4e4af55e6d1d4369a02c020ed6b2b602:781c9df9b5f1483a9d06de87be5467aa",
  "placement": 25,
  "time_alive": 1047,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:e20ed7495bd548a28ef499f3cb5bba49:faa39bcf561442d390c07669648c7c7b",
  "placement": 31,
  "time_alive": 207,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:e20ed7495bd548a28ef499f3cb5bba49:faa39bcf561442d390c07669648c7c7b",
  "placement": 15,
  "time_alive": 1331,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:e20ed7495bd548a28ef499f3cb5bba49:faa39bcf561442d390c07669648c7c7b",
  "placement": 6,
  "time_alive": 1399,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:e20ed7495bd548a28ef499f3cb5bba49:faa39bcf561442d390c07669648c7c7b",
  "placement": 31,
  "time_alive": 121,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:e20ed7495bd548a28ef499f3cb5bba49:faa39bcf561442d390c07669648c7c7b",
  "placement": 21,
  "time_alive": 1109,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351:e20ed7495bd548a28ef499f3cb5bba49:faa39bcf561442d390c07669648c7c7b",
  "placement": 29,
  "time_alive": 337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717:29acfd9b2dd54b6baaa851178dbb4fa9:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 32,
  "time_alive": 152,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717:29acfd9b2dd54b6baaa851178dbb4fa9:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 33,
  "time_alive": 86,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717:29acfd9b2dd54b6baaa851178dbb4fa9:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 11,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717:29acfd9b2dd54b6baaa851178dbb4fa9:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 18,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717:29acfd9b2dd54b6baaa851178dbb4fa9:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 13,
  "time_alive": 1313,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "23ee0ce785f74071bf76fcc11b6c2717:29acfd9b2dd54b6baaa851178dbb4fa9:c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 31,
  "time_alive": 239,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:c6fb6f4d065a4202a767308bae3298b4:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 6,
  "time_alive": 1419,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:c6fb6f4d065a4202a767308bae3298b4:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 24,
  "time_alive": 1048,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:c6fb6f4d065a4202a767308bae3298b4:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 22,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:c6fb6f4d065a4202a767308bae3298b4:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 23,
  "time_alive": 1088,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:c6fb6f4d065a4202a767308bae3298b4:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 25,
  "time_alive": 746,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "4279b8b4fe9448be86d51d43cdba8dc5:c6fb6f4d065a4202a767308bae3298b4:e2f5d564ccd54501bdd628ae1a87b899",
  "placement": 24,
  "time_alive": 1071,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "5f600927ef274dc382b10401ba9b346b:897945edbfb34a448539ace11d5e4154:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 15,
  "time_alive": 1324,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "5f600927ef274dc382b10401ba9b346b:897945edbfb34a448539ace11d5e4154:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 13,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "5f600927ef274dc382b10401ba9b346b:897945edbfb34a448539ace11d5e4154:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 17,
  "time_alive": 1202,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "5f600927ef274dc382b10401ba9b346b:897945edbfb34a448539ace11d5e4154:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 24,
  "time_alive": 1076,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "5f600927ef274dc382b10401ba9b346b:897945edbfb34a448539ace11d5e4154:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 29,
  "time_alive": 136,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "5f600927ef274dc382b10401ba9b346b:897945edbfb34a448539ace11d5e4154:bfdf09f8beaa46e2be44b096bf230bd3",
  "placement": 33,
  "time_alive": 138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "0433aa576bdf46f4b4d1620ad8abb204:baf9ef84165b40a481e03da6a482ad62:deba55791903440889f2eba6a32a3d80",
  "placement": 29,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "0433aa576bdf46f4b4d1620ad8abb204:baf9ef84165b40a481e03da6a482ad62:deba55791903440889f2eba6a32a3d80",
  "placement": 28,
  "time_alive": 803,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "0433aa576bdf46f4b4d1620ad8abb204:baf9ef84165b40a481e03da6a482ad62:deba55791903440889f2eba6a32a3d80",
  "placement": 29,
  "time_alive": 264,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "0433aa576bdf46f4b4d1620ad8abb204:baf9ef84165b40a481e03da6a482ad62:deba55791903440889f2eba6a32a3d80",
  "placement": 30,
  "time_alive": 297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "0433aa576bdf46f4b4d1620ad8abb204:baf9ef84165b40a481e03da6a482ad62:deba55791903440889f2eba6a32a3d80",
  "placement": 24,
  "time_alive": 852,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "0433aa576bdf46f4b4d1620ad8abb204:baf9ef84165b40a481e03da6a482ad62:deba55791903440889f2eba6a32a3d80",
  "placement": 10,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "2ff48b59e2ae4adcbb231af367083816:8902e5e7610b41ac8e513a899ae704b9:aaf02037afa443a6843c59616c59ed18",
  "placement": 30,
  "time_alive": 764,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "2ff48b59e2ae4adcbb231af367083816:8902e5e7610b41ac8e513a899ae704b9:aaf02037afa443a6843c59616c59ed18",
  "placement": 21,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "2ff48b59e2ae4adcbb231af367083816:8902e5e7610b41ac8e513a899ae704b9:aaf02037afa443a6843c59616c59ed18",
  "placement": 32,
  "time_alive": 201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "2ff48b59e2ae4adcbb231af367083816:8902e5e7610b41ac8e513a899ae704b9:aaf02037afa443a6843c59616c59ed18",
  "placement": 15,
  "time_alive": 1308,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7428ba7d-0524-4b0e-9f01-1c746c6728e1",
  "team_id": "2ff48b59e2ae4adcbb231af367083816:8902e5e7610b41ac8e513a899ae704b9:aaf02037afa443a6843c59616c59ed18",
  "placement": 10,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "2ff48b59e2ae4adcbb231af367083816:8902e5e7610b41ac8e513a899ae704b9:aaf02037afa443a6843c59616c59ed18",
  "placement": 27,
  "time_alive": 802,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b9327e2e-6a55-46eb-87bf-9a44685c38b6",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 33,
  "time_alive": 127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13779fb0-73ad-4619-9871-e03e33e5b838",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 32,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8691f99b-c81b-470c-9139-14c96c6bc320",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 25,
  "time_alive": 914,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c4ed9b93-3de8-406b-b564-1af26a0a9157",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 29,
  "time_alive": 327,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0ab62b4b-01fc-4622-9258-4aff3b11f3b1",
  "team_id": "14e7d69c4b094d4c8ed01508b8d95938:7332bfffc75d4285a7289793703bf001:ea5a064dc28b4258aaf8f5afefdbd8cc",
  "placement": 30,
  "time_alive": 322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 1,
  "time_alive": 1481,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 13,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 4,
  "time_alive": 1429,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 16,
  "time_alive": 1323,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 1,
  "time_alive": 1466,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "881f4d75aa3046c5b648a73aea641e69:e4a21f91b56b48b5b8e4c073f708857e:f5964aaf9ca64defb54d7fb0bba98003",
  "placement": 22,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 10,
  "time_alive": 1385,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 4,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 10,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 2,
  "time_alive": 1421,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 9,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "0a5c24defd1f4810be4592a179482d93:45131b61c97340049deeef91a1cc3ad2:609bd47a67884f8e988cef95c8facb06",
  "placement": 2,
  "time_alive": 1464,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 6,
  "time_alive": 1401,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 3,
  "time_alive": 1433,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 5,
  "time_alive": 1410,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 10,
  "time_alive": 1351,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 20,
  "time_alive": 1181,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "0fe71c4754a440959abaa8fdb2ca0630:25a6264790f742ecbf177e19db1f1f47:9cd77d61613244699e3dfb7815f59cf9",
  "placement": 1,
  "time_alive": 1464,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 12,
  "time_alive": 1360,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 2,
  "time_alive": 1443,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 24,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 6,
  "time_alive": 1364,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 4,
  "time_alive": 1451,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "81d933d1e99843d6bf68d97e0ce84d63:a7c903e72e0c44e4be2e9c99e66296cc:c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 7,
  "time_alive": 1400,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 13,
  "time_alive": 1358,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 7,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 3,
  "time_alive": 1435,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 23,
  "time_alive": 1078,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 12,
  "time_alive": 1350,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "4b6eaa5b26ea4852b463f1e6534847a1:c5a0ef01f92f4355ae9f93a118ccacc9:f99b2cc5676f4452b4f8c59094d65511",
  "placement": 3,
  "time_alive": 1463,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 5,
  "time_alive": 1408,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 1,
  "time_alive": 1443,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 14,
  "time_alive": 1319,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 4,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 23,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37:276f93e44a4542ed9636d845025a7bfb:d1b35adaa1f9426491da7923b436d58d",
  "placement": 9,
  "time_alive": 1375,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 4,
  "time_alive": 1445,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 6,
  "time_alive": 1400,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 7,
  "time_alive": 1359,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 24,
  "time_alive": 1004,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 6,
  "time_alive": 1410,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "6642bbc470d44a5ba4805f4278b39023:a46c3a48d0554aaf8fa2a068e0e711a0:b41a5f680ece48ab9bbcb5e31785d045",
  "placement": 15,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 11,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 22,
  "time_alive": 1098,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 6,
  "time_alive": 1394,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 7,
  "time_alive": 1357,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 5,
  "time_alive": 1428,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "1bf767ab7f9346fea75b13f7254ee36a:a7da37b86704471ba04177b6b918965a:f957f49cfac24a2ba5df5280f3984e14",
  "placement": 21,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 24,
  "time_alive": 1063,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 10,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 12,
  "time_alive": 1336,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 3,
  "time_alive": 1409,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 30,
  "time_alive": 372,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "4f5cd56759804785b2562d729cb4b645:5c5b3c51db0b4aa18d197add61e64fd5:f11366bc03f2496899f7511de25f4557",
  "placement": 28,
  "time_alive": 401,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 9,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 15,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 1,
  "time_alive": 1492,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 29,
  "time_alive": 151,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 22,
  "time_alive": 1135,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "1f23e64bea204b19a4b3a92a9c8de267:2e931c83e41a41bf91dd046a506c0bb4:6836c1ada1494eefa005aac3604892d3",
  "placement": 27,
  "time_alive": 462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 17,
  "time_alive": 1283,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 29,
  "time_alive": 701,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 32,
  "time_alive": 106,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 15,
  "time_alive": 1329,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 2,
  "time_alive": 1466,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "04e49db7ee8b482e88e9f0b139d77561:4d3397db96a741f2a1b37f189bfcbd6b:e82d0c1c4f3d43ce9a83d314d6d0a9d7",
  "placement": 8,
  "time_alive": 1395,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 25,
  "time_alive": 810,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 11,
  "time_alive": 1338,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 1,
  "time_alive": 1421,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 15,
  "time_alive": 1313,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "451eb3f920d34e7a8532d69d9bd2a1df:682c34482d0a495ca90eb47412acd1d5:83ae4804f3414bc2be024264bacdfbd7",
  "placement": 26,
  "time_alive": 576,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 16,
  "time_alive": 1292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 12,
  "time_alive": 1351,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 22,
  "time_alive": 1093,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 5,
  "time_alive": 1367,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 8,
  "time_alive": 1382,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "44d50ea3baf44b188b4c0f1ce08c4fb1:57e2f597d5994e059a94117f6cdcfd41:c8bfda1cf2c141cbbd8ef4985b1e2e0e",
  "placement": 12,
  "time_alive": 1322,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 2,
  "time_alive": 1481,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 20,
  "time_alive": 1118,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 23,
  "time_alive": 1073,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 33,
  "time_alive": 66,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 7,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "9fca471401a743cbbb71ea31dc252473:c1fb4441de8d42219f7cc2e2d024627e:ef0106457410430bbbd501bf4930a54e",
  "placement": 18,
  "time_alive": 1218,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 7,
  "time_alive": 1397,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 26,
  "time_alive": 798,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 16,
  "time_alive": 1300,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 20,
  "time_alive": 1106,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 17,
  "time_alive": 1298,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "34340539b26d4a039c1aae0c857e45c3:38c4a6e1e2ac45648311b029612e4f4e:b32b7fcd4d1945c5b409cc3d7262153c",
  "placement": 10,
  "time_alive": 1356,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 18,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 16,
  "time_alive": 1324,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 8,
  "time_alive": 1356,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 28,
  "time_alive": 281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 10,
  "time_alive": 1378,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "610e7bb5309f4ae3a2e850fce49d53a7:a66e87247c364dc7a928dbcf6f7ae711:d82bbe3019c04e789f949c081f2dea87",
  "placement": 24,
  "time_alive": 965,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 23,
  "time_alive": 1094,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 18,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 9,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 8,
  "time_alive": 1356,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 13,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "19489f2d33e74d9982f69155225743d1:8efc798684d642dc8ef04fd2c3cd3324:b366f4abfdd0400ea18374104d36b960",
  "placement": 20,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 26,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 9,
  "time_alive": 1390,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 19,
  "time_alive": 1209,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 25,
  "time_alive": 989,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 11,
  "time_alive": 1375,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "7d8318d69bf54244a83384048431e00b:c35e529106f4402daeb13ac2ce87418b:e2e9086972594800b5c025eed52294bb",
  "placement": 6,
  "time_alive": 1401,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 27,
  "time_alive": 795,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 24,
  "time_alive": 960,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 28,
  "time_alive": 784,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 13,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "980acb394091440799af3c2378590ba7:ac238793d30a4146ab4848a106aeaa4f:d8e25115489a4d1c9008c08b6cca8a5a",
  "placement": 4,
  "time_alive": 1444,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 31,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 14,
  "time_alive": 1340,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 2,
  "time_alive": 1492,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 31,
  "time_alive": 135,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "5f5eb409ed864fda859716259f18af71:8dfe8748d1b94f2fb7406fd548177305:f10303d7c655409c89ae51b7eaa80ce7",
  "placement": 14,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 3,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 11,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 27,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 12,
  "time_alive": 1336,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 28,
  "time_alive": 462,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "825b97681a6a4181b46bb79aa12af0a5:883abec4cded42f3bea87531ce0aa5c8:ded75fa3bfb64c35a960270863127015",
  "placement": 25,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d:a82fc8f3893045f5b8182bb6d78721ae:aeec60248b1544b29664bc930eae04fa",
  "placement": 22,
  "time_alive": 1109,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d:a82fc8f3893045f5b8182bb6d78721ae:aeec60248b1544b29664bc930eae04fa",
  "placement": 30,
  "time_alive": 372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d:a82fc8f3893045f5b8182bb6d78721ae:aeec60248b1544b29664bc930eae04fa",
  "placement": 29,
  "time_alive": 451,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d:a82fc8f3893045f5b8182bb6d78721ae:aeec60248b1544b29664bc930eae04fa",
  "placement": 32,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d:a82fc8f3893045f5b8182bb6d78721ae:aeec60248b1544b29664bc930eae04fa",
  "placement": 3,
  "time_alive": 1453,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "4974d2cfa57f4db0ba496bdc1e878a6d:a82fc8f3893045f5b8182bb6d78721ae:aeec60248b1544b29664bc930eae04fa",
  "placement": 11,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791:93ec163b7a994b75868508b62f1b910e:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 21,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791:93ec163b7a994b75868508b62f1b910e:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 8,
  "time_alive": 1390,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791:93ec163b7a994b75868508b62f1b910e:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 20,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791:93ec163b7a994b75868508b62f1b910e:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 11,
  "time_alive": 1344,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791:93ec163b7a994b75868508b62f1b910e:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 16,
  "time_alive": 1305,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791:93ec163b7a994b75868508b62f1b910e:ad9cb12e57a94cf695210e4928dccca7",
  "placement": 13,
  "time_alive": 1314,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 28,
  "time_alive": 772,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 5,
  "time_alive": 1406,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 18,
  "time_alive": 1276,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 14,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 24,
  "time_alive": 733,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "097615f47d924e4c9d7324fd8680a44d:6833f282e0d14b0987ad0df26378e6cb:d84b415adc684941b0edb6825bd607f1",
  "placement": 19,
  "time_alive": 1152,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "7e93a0a1cbf6422c97d09b5aef31f9fe:80e5ca9215944394ae187b1866623beb:aec9c75201ed42ed9c22804026d2c28d",
  "placement": 19,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "7e93a0a1cbf6422c97d09b5aef31f9fe:80e5ca9215944394ae187b1866623beb:aec9c75201ed42ed9c22804026d2c28d",
  "placement": 27,
  "time_alive": 747,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "7e93a0a1cbf6422c97d09b5aef31f9fe:80e5ca9215944394ae187b1866623beb:aec9c75201ed42ed9c22804026d2c28d",
  "placement": 13,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "7e93a0a1cbf6422c97d09b5aef31f9fe:80e5ca9215944394ae187b1866623beb:aec9c75201ed42ed9c22804026d2c28d",
  "placement": 9,
  "time_alive": 1354,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "7e93a0a1cbf6422c97d09b5aef31f9fe:80e5ca9215944394ae187b1866623beb:aec9c75201ed42ed9c22804026d2c28d",
  "placement": 19,
  "time_alive": 1184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "7e93a0a1cbf6422c97d09b5aef31f9fe:80e5ca9215944394ae187b1866623beb:aec9c75201ed42ed9c22804026d2c28d",
  "placement": 14,
  "time_alive": 1313,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "5cb96ec8ee91458a94a7e5f6a84bd862:60a08518f98d4d468ba8681a925dc04c:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 8,
  "time_alive": 1388,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "5cb96ec8ee91458a94a7e5f6a84bd862:60a08518f98d4d468ba8681a925dc04c:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 21,
  "time_alive": 1103,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "5cb96ec8ee91458a94a7e5f6a84bd862:60a08518f98d4d468ba8681a925dc04c:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 21,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "5cb96ec8ee91458a94a7e5f6a84bd862:60a08518f98d4d468ba8681a925dc04c:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 18,
  "time_alive": 1202,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "5cb96ec8ee91458a94a7e5f6a84bd862:60a08518f98d4d468ba8681a925dc04c:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 32,
  "time_alive": 123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "5cb96ec8ee91458a94a7e5f6a84bd862:60a08518f98d4d468ba8681a925dc04c:da8fa1c6061645e5900ad8cc64026fc2",
  "placement": 17,
  "time_alive": 1290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "5947cd090d594e7d8c52c956e9c25118:67f948e5f0bc4596877cec85780c3ca2:810f0c98be5049358c75d75ec627d748",
  "placement": 30,
  "time_alive": 188,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "5947cd090d594e7d8c52c956e9c25118:67f948e5f0bc4596877cec85780c3ca2:810f0c98be5049358c75d75ec627d748",
  "placement": 23,
  "time_alive": 1082,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "5947cd090d594e7d8c52c956e9c25118:67f948e5f0bc4596877cec85780c3ca2:810f0c98be5049358c75d75ec627d748",
  "placement": 31,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "5947cd090d594e7d8c52c956e9c25118:67f948e5f0bc4596877cec85780c3ca2:810f0c98be5049358c75d75ec627d748",
  "placement": 30,
  "time_alive": 140,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "5947cd090d594e7d8c52c956e9c25118:67f948e5f0bc4596877cec85780c3ca2:810f0c98be5049358c75d75ec627d748",
  "placement": 26,
  "time_alive": 581,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "5947cd090d594e7d8c52c956e9c25118:67f948e5f0bc4596877cec85780c3ca2:810f0c98be5049358c75d75ec627d748",
  "placement": 5,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 29,
  "time_alive": 322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 17,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 17,
  "time_alive": 1257,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 25,
  "time_alive": 624,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "261333f17ecf42cb98022c87baaef306:81fb65540c214c63a2b91905164182b1:8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 32,
  "time_alive": 89,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:b91a87b631d048e396f24d0d22cb268a:ba3172fcc3864e298b467e172327179f",
  "placement": 20,
  "time_alive": 1130,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:b91a87b631d048e396f24d0d22cb268a:ba3172fcc3864e298b467e172327179f",
  "placement": 17,
  "time_alive": 1314,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:b91a87b631d048e396f24d0d22cb268a:ba3172fcc3864e298b467e172327179f",
  "placement": 25,
  "time_alive": 940,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:b91a87b631d048e396f24d0d22cb268a:ba3172fcc3864e298b467e172327179f",
  "placement": 26,
  "time_alive": 928,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:b91a87b631d048e396f24d0d22cb268a:ba3172fcc3864e298b467e172327179f",
  "placement": 18,
  "time_alive": 1212,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "01f4b7175f7d4845a7c2632f48886175:b91a87b631d048e396f24d0d22cb268a:ba3172fcc3864e298b467e172327179f",
  "placement": 29,
  "time_alive": 361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 14,
  "time_alive": 1318,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 28,
  "time_alive": 708,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 26,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 21,
  "time_alive": 1097,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 27,
  "time_alive": 545,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "2a7de927ca9c474d96d87b419a09b7a3:600f620c04df4822b7e4d6f0d7d3b4ce:ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 16,
  "time_alive": 1301,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 25,
  "time_alive": 806,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 19,
  "time_alive": 1274,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 15,
  "time_alive": 1314,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 19,
  "time_alive": 1186,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 31,
  "time_alive": 173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "0d8a27a8eb2c4eb9a222dbf039d5279d:ba1f71ae2f3748be9035bf1fc4e5325a:cd6deffb0c334c40b40e33b36648e287",
  "placement": 30,
  "time_alive": 337,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "57b58140dda44797bd8e412a0e92cfdc:a2fd7f871b6145138bc8af91699a19a2:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 33,
  "time_alive": 58,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "57b58140dda44797bd8e412a0e92cfdc:a2fd7f871b6145138bc8af91699a19a2:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 27,
  "time_alive": 316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "57b58140dda44797bd8e412a0e92cfdc:a2fd7f871b6145138bc8af91699a19a2:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 33,
  "time_alive": 83,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "57b58140dda44797bd8e412a0e92cfdc:a2fd7f871b6145138bc8af91699a19a2:b9f809f0a8c646fb89d597f6f657f970",
  "placement": 23,
  "time_alive": 1047,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "521d92c1-9f38-45af-8030-fdda92c045a0",
  "team_id": "7282d290ffc445968cdd755d7082c190:774c237938e94d5ea17f27174add5585:e36bdd9698834236884298b64c004525",
  "placement": 15,
  "time_alive": 1297,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f9cf5905-a926-425a-ac31-8a48feeaaf03",
  "team_id": "7282d290ffc445968cdd755d7082c190:774c237938e94d5ea17f27174add5585:e36bdd9698834236884298b64c004525",
  "placement": 31,
  "time_alive": 248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "97271c2d-0aca-4c1c-b142-4a89bd0155db",
  "team_id": "7282d290ffc445968cdd755d7082c190:774c237938e94d5ea17f27174add5585:e36bdd9698834236884298b64c004525",
  "placement": 30,
  "time_alive": 422,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "095cf018-5d2d-47b9-ab16-522a81c48b74",
  "team_id": "7282d290ffc445968cdd755d7082c190:774c237938e94d5ea17f27174add5585:e36bdd9698834236884298b64c004525",
  "placement": 22,
  "time_alive": 1094,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "19709178-cda3-43ef-846e-4e83df877ad1",
  "team_id": "7282d290ffc445968cdd755d7082c190:774c237938e94d5ea17f27174add5585:e36bdd9698834236884298b64c004525",
  "placement": 29,
  "time_alive": 424,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7093813e-7784-4e80-a1eb-3d0e375d65bc",
  "team_id": "7282d290ffc445968cdd755d7082c190:774c237938e94d5ea17f27174add5585:e36bdd9698834236884298b64c004525",
  "placement": 31,
  "time_alive": 317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 4,
  "time_alive": 1429,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1358,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1441,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1401,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 2,
  "time_alive": 1495,
  "elims": 26,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 5,
  "time_alive": 1429,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 6,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 8,
  "time_alive": 1369,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 5,
  "time_alive": 1381,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 11,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 3,
  "time_alive": 1458,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9:b4695df986e4426a90b08279d169675f:d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 2,
  "time_alive": 1456,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 2,
  "time_alive": 1451,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 4,
  "time_alive": 1427,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 12,
  "time_alive": 1309,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 27,
  "time_alive": 872,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 12,
  "time_alive": 1345,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79:253993e3e0b54e839f99b2e95b55a9d8:95b8c65a16ec4322824da21fe511371a",
  "placement": 1,
  "time_alive": 1456,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 3,
  "time_alive": 1450,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 15,
  "time_alive": 1277,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 16,
  "time_alive": 1228,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 6,
  "time_alive": 1381,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 6,
  "time_alive": 1395,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "47ecd7b3aaac451cae8eac732283793b:6cf91453d6a2426a90a09ab5eb1cf3cb:803ae2cf372b422498943ea8a215d75e",
  "placement": 8,
  "time_alive": 1402,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 5,
  "time_alive": 1427,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 1,
  "time_alive": 1455,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 4,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 8,
  "time_alive": 1366,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 25,
  "time_alive": 897,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "2dfc71015e5349ee938b57a94d205587:7af11e7b44e44125b796c7c7da34363b:fb2e9b60dcb74a718590ec9859a78c87",
  "placement": 6,
  "time_alive": 1414,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 9,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 2,
  "time_alive": 1455,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 24,
  "time_alive": 963,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 2,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 14,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "15fca47fd802477a98b846918cd4bc3c:3e18c80cc52047499f7be511800dc472:5bec82879fbf436887597f49d9bcc7c3",
  "placement": 14,
  "time_alive": 1328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 7,
  "time_alive": 1411,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 28,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 2,
  "time_alive": 1441,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 13,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 4,
  "time_alive": 1442,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e:6f7115e8ca7b44dc9948c6d5ed71a248:cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 12,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 16,
  "time_alive": 1284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 30,
  "time_alive": 791,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 33,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 4,
  "time_alive": 1396,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 1,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "8c9b21782917440c9228a1b609fb15f6:d8f0af8cfed84359bdcbe8177d8692e3:e63506c5d5fa4ed5b752726578a3a3ab",
  "placement": 7,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 10,
  "time_alive": 1364,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 6,
  "time_alive": 1403,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 7,
  "time_alive": 1373,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 3,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 18,
  "time_alive": 1226,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "07ee1b2992ba42f1a21462c614f786b6:843d8aef62654618b4c745ddd4b6dc12:e86d6219838c48908746a904860b93c2",
  "placement": 18,
  "time_alive": 1292,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 1,
  "time_alive": 1451,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 26,
  "time_alive": 865,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 11,
  "time_alive": 1331,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 22,
  "time_alive": 1151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 11,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "2d39b1b6356d40019c5ae5dfd278c4f9:76eedc7bc7344f86a787fffbe7148d87:9daa4d76858c45a5a112ae00cbba5777",
  "placement": 29,
  "time_alive": 375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 23,
  "time_alive": 1122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 31,
  "time_alive": 789,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 6,
  "time_alive": 1376,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 31,
  "time_alive": 325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 5,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "8e2e4a8dcf614e20aa36fe11e14fc257:a811a94137d94a59bec4ea99b234706c:d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 4,
  "time_alive": 1432,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 24,
  "time_alive": 1098,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 24,
  "time_alive": 903,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 8,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 7,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "302646d123a0470fbd56fcc13900fafa:c58424ab87e448299dfe99fb169a18e7:d3a72b5dd46c4ce198e0b1a269e09d3e",
  "placement": 3,
  "time_alive": 1437,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 18,
  "time_alive": 1220,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 3,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 30,
  "time_alive": 770,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 23,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 7,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "5aff6b2d7827462993fdc563295956c2:6cd488031c9047c7a4e819ee2fae77b5:9787496d9fe64f46a5107753919068d4",
  "placement": 16,
  "time_alive": 1306,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 29,
  "time_alive": 802,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 11,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 9,
  "time_alive": 1357,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 12,
  "time_alive": 1343,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 17,
  "time_alive": 1238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "1ffb44bca6ea418ba6bfb42cb712535b:200a8b64b3e74dcab169d7c0da35788d:76cd448896b243e6a083f2d0bddde1da",
  "placement": 19,
  "time_alive": 1260,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 15,
  "time_alive": 1310,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 18,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 3,
  "time_alive": 1413,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 19,
  "time_alive": 1229,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 9,
  "time_alive": 1371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "04e02beccf484b80bd9449246382a9f9:6a8ce1845b5241dab471558635984f4c:f0448484d6ee486298207037819e5813",
  "placement": 22,
  "time_alive": 1171,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 14,
  "time_alive": 1316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 14,
  "time_alive": 1318,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 25,
  "time_alive": 932,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 17,
  "time_alive": 1309,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 16,
  "time_alive": 1280,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "587314e3583a47bca08876950ba704d9:6e0c7806573c4e3ea736f141fdeb7a45:a0bbb624bd5b46418d8da19441f0b183",
  "placement": 9,
  "time_alive": 1393,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 11,
  "time_alive": 1359,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 21,
  "time_alive": 1082,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 32,
  "time_alive": 316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 9,
  "time_alive": 1353,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 27,
  "time_alive": 842,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "bc7141afb13045ec911a0960d89463e5:eb86cf7f8ad64cc8a83d597f079784a8:f9f799677d8a47668f32ae99f38866e0",
  "placement": 31,
  "time_alive": 284,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "8d1f83e42f82466b81a8232df271651e:c163c59e6ed24df59f833294d2ad2c0e:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 22,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "8d1f83e42f82466b81a8232df271651e:c163c59e6ed24df59f833294d2ad2c0e:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 5,
  "time_alive": 1403,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "8d1f83e42f82466b81a8232df271651e:c163c59e6ed24df59f833294d2ad2c0e:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 15,
  "time_alive": 1228,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "8d1f83e42f82466b81a8232df271651e:c163c59e6ed24df59f833294d2ad2c0e:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 15,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "8d1f83e42f82466b81a8232df271651e:c163c59e6ed24df59f833294d2ad2c0e:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 15,
  "time_alive": 1302,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "8d1f83e42f82466b81a8232df271651e:c163c59e6ed24df59f833294d2ad2c0e:f2f3f087a2894d49b110f357d3b37ca0",
  "placement": 30,
  "time_alive": 343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 13,
  "time_alive": 1322,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 25,
  "time_alive": 874,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 17,
  "time_alive": 1221,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 18,
  "time_alive": 1290,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 22,
  "time_alive": 1050,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "84c4f315e8f2493592aef09365a7448e:cd17fefb9a2442eea13c20c06be2aa39:f4a1b3e0e3d041d29d6d1c3a6633b656",
  "placement": 26,
  "time_alive": 750,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 19,
  "time_alive": 1201,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 13,
  "time_alive": 1335,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 28,
  "time_alive": 808,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 5,
  "time_alive": 1392,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 20,
  "time_alive": 1138,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "06b47aebb8ad40b1b818e49fb50c871e:657905a7c4c14055b4a6804a5af0c99e:69dff74b667e436e9ed5c2a3f91aaf99",
  "placement": 23,
  "time_alive": 1145,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 12,
  "time_alive": 1339,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 7,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 23,
  "time_alive": 1059,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 28,
  "time_alive": 719,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 32,
  "time_alive": 392,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "ab28b53a4ab542519a421435e7275a82:ab5c9d9bccc943c5b69b9634d58aed92:d1bc2798146544289cb0a886f6fe2281",
  "placement": 17,
  "time_alive": 1296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 20,
  "time_alive": 1181,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 23,
  "time_alive": 962,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 13,
  "time_alive": 1309,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 29,
  "time_alive": 701,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 13,
  "time_alive": 1344,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "119f03eeee814c6d96847996c7d4e752:28a96f78db114592813e1a3015f14b87:d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 15,
  "time_alive": 1316,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 17,
  "time_alive": 1222,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 17,
  "time_alive": 1217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 31,
  "time_alive": 757,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 14,
  "time_alive": 1343,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 8,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "017e9dad135e4656ae62417f7f57a913:537b048bc7b248a6a8950c5327d6a3d6:ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 13,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "3bc5ef081e1c4c95bd74cc79351b6835:4faf439dc708439c9bc3381d90a7c875:6a038fe035b0481495799f829efda75f",
  "placement": 21,
  "time_alive": 1178,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "3bc5ef081e1c4c95bd74cc79351b6835:4faf439dc708439c9bc3381d90a7c875:6a038fe035b0481495799f829efda75f",
  "placement": 27,
  "time_alive": 842,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "3bc5ef081e1c4c95bd74cc79351b6835:4faf439dc708439c9bc3381d90a7c875:6a038fe035b0481495799f829efda75f",
  "placement": 14,
  "time_alive": 1293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "3bc5ef081e1c4c95bd74cc79351b6835:4faf439dc708439c9bc3381d90a7c875:6a038fe035b0481495799f829efda75f",
  "placement": 26,
  "time_alive": 966,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "3bc5ef081e1c4c95bd74cc79351b6835:4faf439dc708439c9bc3381d90a7c875:6a038fe035b0481495799f829efda75f",
  "placement": 19,
  "time_alive": 1142,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "3bc5ef081e1c4c95bd74cc79351b6835:4faf439dc708439c9bc3381d90a7c875:6a038fe035b0481495799f829efda75f",
  "placement": 10,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 25,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 16,
  "time_alive": 1239,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 10,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 20,
  "time_alive": 1220,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 30,
  "time_alive": 415,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "0307ba8cafd94432bb7098ab90e3d21b:81b5dff316fd4660809fc00c84ae0135:8904b895bf5446c7bdf51f987b60c935",
  "placement": 28,
  "time_alive": 619,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "3482505fc369463cbdb777ede7cf545a:ae227af9d7284badba2d066ed60dece8:e0e767b332fa47959d39368a71000ff4",
  "placement": 8,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "3482505fc369463cbdb777ede7cf545a:ae227af9d7284badba2d066ed60dece8:e0e767b332fa47959d39368a71000ff4",
  "placement": 22,
  "time_alive": 1058,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "3482505fc369463cbdb777ede7cf545a:ae227af9d7284badba2d066ed60dece8:e0e767b332fa47959d39368a71000ff4",
  "placement": 20,
  "time_alive": 1119,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "3482505fc369463cbdb777ede7cf545a:ae227af9d7284badba2d066ed60dece8:e0e767b332fa47959d39368a71000ff4",
  "placement": 33,
  "time_alive": 95,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "3482505fc369463cbdb777ede7cf545a:ae227af9d7284badba2d066ed60dece8:e0e767b332fa47959d39368a71000ff4",
  "placement": 31,
  "time_alive": 394,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "3482505fc369463cbdb777ede7cf545a:ae227af9d7284badba2d066ed60dece8:e0e767b332fa47959d39368a71000ff4",
  "placement": 33,
  "time_alive": 140,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "0c33130cffe848618cd0a897e117c31a:8dd8cdcef1f143c7b13ff112b11e72b7:d29210d654ae4d129fba093672d3cbe2",
  "placement": 32,
  "time_alive": 767,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "0c33130cffe848618cd0a897e117c31a:8dd8cdcef1f143c7b13ff112b11e72b7:d29210d654ae4d129fba093672d3cbe2",
  "placement": 9,
  "time_alive": 1361,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "0c33130cffe848618cd0a897e117c31a:8dd8cdcef1f143c7b13ff112b11e72b7:d29210d654ae4d129fba093672d3cbe2",
  "placement": 22,
  "time_alive": 1092,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "0c33130cffe848618cd0a897e117c31a:8dd8cdcef1f143c7b13ff112b11e72b7:d29210d654ae4d129fba093672d3cbe2",
  "placement": 30,
  "time_alive": 469,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "0c33130cffe848618cd0a897e117c31a:8dd8cdcef1f143c7b13ff112b11e72b7:d29210d654ae4d129fba093672d3cbe2",
  "placement": 28,
  "time_alive": 452,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "0c33130cffe848618cd0a897e117c31a:8dd8cdcef1f143c7b13ff112b11e72b7:d29210d654ae4d129fba093672d3cbe2",
  "placement": 24,
  "time_alive": 982,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "24946a38469342c5a11b40f6bc97edf7:bd6327b7119f4c64b4955c726f636d16:d24166035e7b4b8cae002b0b05b47c82",
  "placement": 28,
  "time_alive": 845,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "24946a38469342c5a11b40f6bc97edf7:bd6327b7119f4c64b4955c726f636d16:d24166035e7b4b8cae002b0b05b47c82",
  "placement": 19,
  "time_alive": 1178,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "24946a38469342c5a11b40f6bc97edf7:bd6327b7119f4c64b4955c726f636d16:d24166035e7b4b8cae002b0b05b47c82",
  "placement": 27,
  "time_alive": 811,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "24946a38469342c5a11b40f6bc97edf7:bd6327b7119f4c64b4955c726f636d16:d24166035e7b4b8cae002b0b05b47c82",
  "placement": 25,
  "time_alive": 1070,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "24946a38469342c5a11b40f6bc97edf7:bd6327b7119f4c64b4955c726f636d16:d24166035e7b4b8cae002b0b05b47c82",
  "placement": 10,
  "time_alive": 1361,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "24946a38469342c5a11b40f6bc97edf7:bd6327b7119f4c64b4955c726f636d16:d24166035e7b4b8cae002b0b05b47c82",
  "placement": 20,
  "time_alive": 1213,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "32cfbd171070458294976509b0adfe66:522c051cad4b46d4820751f17997a977:b31d28a082e0428fbfa0a335c651ac79",
  "placement": 30,
  "time_alive": 800,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "32cfbd171070458294976509b0adfe66:522c051cad4b46d4820751f17997a977:b31d28a082e0428fbfa0a335c651ac79",
  "placement": 20,
  "time_alive": 1104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "32cfbd171070458294976509b0adfe66:522c051cad4b46d4820751f17997a977:b31d28a082e0428fbfa0a335c651ac79",
  "placement": 19,
  "time_alive": 1130,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "32cfbd171070458294976509b0adfe66:522c051cad4b46d4820751f17997a977:b31d28a082e0428fbfa0a335c651ac79",
  "placement": 10,
  "time_alive": 1346,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "32cfbd171070458294976509b0adfe66:522c051cad4b46d4820751f17997a977:b31d28a082e0428fbfa0a335c651ac79",
  "placement": 21,
  "time_alive": 1122,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "32cfbd171070458294976509b0adfe66:522c051cad4b46d4820751f17997a977:b31d28a082e0428fbfa0a335c651ac79",
  "placement": 32,
  "time_alive": 256,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 31,
  "time_alive": 792,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 29,
  "time_alive": 805,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 21,
  "time_alive": 1094,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 16,
  "time_alive": 1314,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 29,
  "time_alive": 440,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "6498b6410349426ca111e7f1e739041b:a3050c4f81d741fba853825a85397019:aed5b8938b7049ec87dff0d189cc70df",
  "placement": 27,
  "time_alive": 651,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "3f066137d6df4a32b55bd150804fb7ba:982fe45e29cf48e094888dcd665a8656:aa95527551534d0dbf5ec11193af76ef",
  "placement": 27,
  "time_alive": 854,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "3f066137d6df4a32b55bd150804fb7ba:982fe45e29cf48e094888dcd665a8656:aa95527551534d0dbf5ec11193af76ef",
  "placement": 12,
  "time_alive": 1344,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "3f066137d6df4a32b55bd150804fb7ba:982fe45e29cf48e094888dcd665a8656:aa95527551534d0dbf5ec11193af76ef",
  "placement": 18,
  "time_alive": 1150,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "3f066137d6df4a32b55bd150804fb7ba:982fe45e29cf48e094888dcd665a8656:aa95527551534d0dbf5ec11193af76ef",
  "placement": 24,
  "time_alive": 1110,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "3f066137d6df4a32b55bd150804fb7ba:982fe45e29cf48e094888dcd665a8656:aa95527551534d0dbf5ec11193af76ef",
  "placement": 23,
  "time_alive": 949,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "3f066137d6df4a32b55bd150804fb7ba:982fe45e29cf48e094888dcd665a8656:aa95527551534d0dbf5ec11193af76ef",
  "placement": 21,
  "time_alive": 1191,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613:8dd485868e074b0599a5d04d4cc3ec7c:c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 26,
  "time_alive": 856,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613:8dd485868e074b0599a5d04d4cc3ec7c:c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 32,
  "time_alive": 374,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613:8dd485868e074b0599a5d04d4cc3ec7c:c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 26,
  "time_alive": 829,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613:8dd485868e074b0599a5d04d4cc3ec7c:c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 21,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613:8dd485868e074b0599a5d04d4cc3ec7c:c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 24,
  "time_alive": 905,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "4f90a3980b194d108b1b72d3d0f79613:8dd485868e074b0599a5d04d4cc3ec7c:c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 11,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9713fc66-d679-44a3-a035-17fad27d5429",
  "team_id": "08c2805cfb6643298354292fefcae7b0:5c4f9d933a4942afba8d0c4eee7e6638:df2ec8599ef54fb5b65a4b2abd55a22b",
  "placement": 33,
  "time_alive": 405,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "01e474f6-4560-4194-ba2e-11bc8ca5019a",
  "team_id": "08c2805cfb6643298354292fefcae7b0:5c4f9d933a4942afba8d0c4eee7e6638:df2ec8599ef54fb5b65a4b2abd55a22b",
  "placement": 33,
  "time_alive": 324,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "bf3478de-32a3-402a-9473-82bb21ce85a6",
  "team_id": "08c2805cfb6643298354292fefcae7b0:5c4f9d933a4942afba8d0c4eee7e6638:df2ec8599ef54fb5b65a4b2abd55a22b",
  "placement": 29,
  "time_alive": 777,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f33ce1e5-db88-4a54-94ed-76bb512b39cf",
  "team_id": "08c2805cfb6643298354292fefcae7b0:5c4f9d933a4942afba8d0c4eee7e6638:df2ec8599ef54fb5b65a4b2abd55a22b",
  "placement": 32,
  "time_alive": 235,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f24a5aaa-5953-439e-ab7e-bd8ffc9a5aa7",
  "team_id": "08c2805cfb6643298354292fefcae7b0:5c4f9d933a4942afba8d0c4eee7e6638:df2ec8599ef54fb5b65a4b2abd55a22b",
  "placement": 33,
  "time_alive": 359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7e6bf34a-49cd-4690-a664-730c6e69d195",
  "team_id": "08c2805cfb6643298354292fefcae7b0:5c4f9d933a4942afba8d0c4eee7e6638:df2ec8599ef54fb5b65a4b2abd55a22b",
  "placement": 25,
  "time_alive": 966,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 3,
  "time_alive": 1391,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 6,
  "time_alive": 1391,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 6,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 18,
  "time_alive": 1178,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1440,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 15,
  "time_alive": 1351,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 3,
  "time_alive": 1403,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9a95463c-45a1-463d-87fc-a3f2d1b85676",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "85304357-c9e1-4860-bdda-aad670819480",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 11,
  "time_alive": 1301,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a3043799-dd99-4ce1-8725-d9ea55c17055",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 17,
  "time_alive": 1196,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f170b7a0-208e-4560-8a21-e5dceb52c6f4",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 4,
  "time_alive": 1406,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0722de64-280c-43e3-b328-39ad72a9adbf",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e:862a829593db4771a9965076bf1621b7:d0b41961bcb6483e9af6f567931a135e",
  "placement": 1,
  "time_alive": 1460,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b3da443b-0f19-4857-85f1-7abf9c771515",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 7,
  "time_alive": 1346,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2ce1aa95-64ed-4283-8524-81071b9840e1",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 10,
  "time_alive": 1348,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "16aa2170-d86b-4f12-a89b-bea304ae9f4e",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 3,
  "time_alive": 1424,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "0110fb9a-9bff-431b-a2ee-53ede998d4e7",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 27,
  "time_alive": 812,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a15fde49-f8ea-44ac-89f4-39f05b771011",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 6,
  "time_alive": 1384,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "30573356-b0ab-4468-889f-925cf3b88e29",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 16,
  "time_alive": 1326,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "51a50f2c-9d7b-4642-af3d-00043aebcd39",
  "team_id": "30b5202b37e0499f89cb094fa7849afd:631ad4b8fb964604875f0df5c3c968f3:daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 6,
  "time_alive": 1361,
  "elims": 4,
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
    