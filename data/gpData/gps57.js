const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 19,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 13,
  "time_alive": 1371,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 12,
  "time_alive": 1384,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 24,
  "time_alive": 1131,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 19,
  "time_alive": 1333,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 18,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 25,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 20,
  "time_alive": 1184,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 12,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 22,
  "time_alive": 681,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "3eb9ebd626e1493c88580b3c82e1b50f:9efb543a6b534da99d88364f8cdd17d9:c001619940624853b84c8f81be75ea45",
  "placement": 15,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 23,
  "time_alive": 1210,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 14,
  "time_alive": 1354,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 32,
  "time_alive": 308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 33,
  "time_alive": 232,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 28,
  "time_alive": 636,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 23,
  "time_alive": 985,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 32,
  "time_alive": 131,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 30,
  "time_alive": 273,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 11,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 16,
  "time_alive": 868,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "12ddd13ca19049b4beb6aee020a3f5bf:652a21a8b0134ce2b578449652fd7ea1:9868429b133a42b8a43f737887da4673",
  "placement": 24,
  "time_alive": 540,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 23,
  "time_alive": 899,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 15,
  "time_alive": 1348,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 15,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 16,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 25,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 30,
  "time_alive": 451,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 33,
  "time_alive": 290,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 19,
  "time_alive": 1335,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 29,
  "time_alive": 289,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 31,
  "time_alive": 105,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 30,
  "time_alive": 316,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "69e3ed4958264bf3a9f75f91609ff366:6bad2aa8c8214543b151f0c23ba1cedf:fa2483b6eb194b5487c259682d53986d",
  "placement": 25,
  "time_alive": 526,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 24,
  "time_alive": 807,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 24,
  "time_alive": 1191,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 32,
  "time_alive": 217,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 31,
  "time_alive": 319,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 16,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 23,
  "time_alive": 1202,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 19,
  "time_alive": 1302,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 24,
  "time_alive": 907,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 18,
  "time_alive": 1200,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 24,
  "time_alive": 800,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "2bf405ca93fa4483af98a45a9a787059:7f00d80625a24d31bd5872019acbb88c:ca25b45a69a44ffb85609013da246505",
  "placement": 29,
  "time_alive": 328,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 25,
  "time_alive": 463,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 16,
  "time_alive": 1337,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 20,
  "time_alive": 1202,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 20,
  "time_alive": 1219,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 22,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 25,
  "time_alive": 962,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 28,
  "time_alive": 813,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 22,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 15,
  "time_alive": 1352,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 29,
  "time_alive": 223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "120cd97fd807476a85cd0ef30da49275:53246cf2251e4329922d6f5efb721b9b:7bb841c222df4a78a7b3e2db33f9ab8a",
  "placement": 21,
  "time_alive": 711,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4c3d5471-6e9d-4cab-a192-d3fa90f9b947",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 31,
  "time_alive": 208,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20c349b7-75aa-4ff3-a1d5-476d4b2e9fdf",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 31,
  "time_alive": 267,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "d7cc3473-6cd0-400e-8799-053e009c6828",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 22,
  "time_alive": 1099,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c8f8e244-dc83-492b-9802-0a5be550cee0",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 26,
  "time_alive": 896,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "30d45a10-cfd0-4cf4-8fd3-6c348b2d63b0",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 29,
  "time_alive": 422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1f33c346-fa2a-4d1f-a933-d7c6a8da4a0d",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 32,
  "time_alive": 266,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9111990b-b148-4b06-85fe-4553edd0a48c",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 30,
  "time_alive": 673,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "757a2642-3135-437c-8ac7-7c17c4280311",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 28,
  "time_alive": 286,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "86e0c55f-d0ff-48f4-9cdb-d389829c87b5",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 31,
  "time_alive": 269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1f26d28f-d97d-44b0-b74a-8150abdec4c0",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 28,
  "time_alive": 283,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "42d0c444-232b-4b61-bad0-c3c6a7ece49f",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 27,
  "time_alive": 357,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0e093e4e-32d8-4e9f-969a-34c1d192c496",
  "team_id": "3b3cd73147fb4aea80c8a7fa12f54d86:afddd2289f584e20bb681927bab4f07c:f3c0ab31ac3a4ffcb1f436ac2c7fb2d4",
  "placement": 29,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 12,
  "time_alive": 1353,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1529,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 16,
  "time_alive": 1380,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 4,
  "time_alive": 1461,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 26,
  "time_alive": 928,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1515,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 3,
  "time_alive": 1511,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 25,
  "time_alive": 1006,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 14,
  "time_alive": 1365,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1452,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 2,
  "time_alive": 1447,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "a2e1d4f0b63f4fd1911b8b8a583b18e9:ea1eead380a14859885c25cafb387413:f6d565f6647242ac8735227af015e4d8",
  "placement": 10,
  "time_alive": 1296,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1461,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1529,
  "elims": 24,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 32,
  "time_alive": 356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 30,
  "time_alive": 513,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 25,
  "time_alive": 953,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 26,
  "time_alive": 760,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1512,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 14,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 25,
  "time_alive": 959,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1413,
  "elims": 21,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 20,
  "time_alive": 856,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 26,
  "time_alive": 604,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 8,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 14,
  "time_alive": 1349,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 24,
  "time_alive": 1050,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 2,
  "time_alive": 1478,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 8,
  "time_alive": 1446,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 24,
  "time_alive": 1078,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1526,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1452,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 9,
  "time_alive": 1350,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 7,
  "time_alive": 1360,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 14,
  "time_alive": 1311,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 12,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 1,
  "time_alive": 1521,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 3,
  "time_alive": 1464,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 4,
  "time_alive": 1494,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 8,
  "time_alive": 1461,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 5,
  "time_alive": 1486,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 26,
  "time_alive": 859,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 9,
  "time_alive": 1434,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 21,
  "time_alive": 708,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 7,
  "time_alive": 1364,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 24,
  "time_alive": 672,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 22,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 16,
  "time_alive": 1341,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 14,
  "time_alive": 1383,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 6,
  "time_alive": 1453,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 5,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 3,
  "time_alive": 1501,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 11,
  "time_alive": 1391,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 2,
  "time_alive": 1500,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 2,
  "time_alive": 1526,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 10,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 4,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "4b69672d8ff94632a01aef2a24acba8e:834622247ba3448aa35773d82b92c957:93c8e7a893f748d19f32ebebedca7fb3",
  "placement": 1,
  "time_alive": 1427,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 4,
  "time_alive": 1413,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 5,
  "time_alive": 1448,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 10,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 7,
  "time_alive": 1423,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 1,
  "time_alive": 1513,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 10,
  "time_alive": 1426,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 10,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 12,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 19,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 8,
  "time_alive": 1384,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 11,
  "time_alive": 1337,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 17,
  "time_alive": 988,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 32,
  "time_alive": 763,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 7,
  "time_alive": 1406,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 25,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 15,
  "time_alive": 1334,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 2,
  "time_alive": 1513,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 5,
  "time_alive": 1481,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 20,
  "time_alive": 1325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 5,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 15,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 6,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 1,
  "time_alive": 1447,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "183c19942c5042d4b884373d80f62e8d:9a41d01f2442468387feb000951157be:df70fadb103b414897f620a64b516383",
  "placement": 4,
  "time_alive": 1414,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 2,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 18,
  "time_alive": 1258,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 6,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 24,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 6,
  "time_alive": 1470,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 9,
  "time_alive": 1434,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 9,
  "time_alive": 1396,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 6,
  "time_alive": 1467,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 8,
  "time_alive": 1456,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 16,
  "time_alive": 1246,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 3,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 13,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 3,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 3,
  "time_alive": 1526,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 17,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 13,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 7,
  "time_alive": 1450,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 20,
  "time_alive": 1189,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 15,
  "time_alive": 1378,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 8,
  "time_alive": 1450,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 7,
  "time_alive": 1467,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 5,
  "time_alive": 1404,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 10,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "247a94da748a4530b9d587565c9587d5:c04ab9c55b2e482fb5c303ec0aca0102:ca65bb40e39f4eb4930175cdedf0a907",
  "placement": 3,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 10,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 20,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 23,
  "time_alive": 1094,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 19,
  "time_alive": 1247,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 3,
  "time_alive": 1496,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 14,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 4,
  "time_alive": 1494,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 4,
  "time_alive": 1475,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 20,
  "time_alive": 1166,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 26,
  "time_alive": 466,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 6,
  "time_alive": 1375,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "3e53b59217904799b9f3646d2a869971:7cb66a13ee844997827fdf5112b91974:f9a6da5269f74baf998c669d4fa394b9",
  "placement": 23,
  "time_alive": 673,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 13,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 10,
  "time_alive": 1385,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 31,
  "time_alive": 379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 8,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 19,
  "time_alive": 1254,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 1,
  "time_alive": 1515,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 8,
  "time_alive": 1413,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 29,
  "time_alive": 426,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 18,
  "time_alive": 1335,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 12,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 5,
  "time_alive": 1397,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "1e55a259df8c437aa663147f182a44ba:a0b4479395364e0a9979014867c6835d:e20705595354455a81ec522ce19d90f8",
  "placement": 20,
  "time_alive": 961,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 30,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 6,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 4,
  "time_alive": 1491,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 5,
  "time_alive": 1457,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 21,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 6,
  "time_alive": 1475,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 14,
  "time_alive": 1379,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 19,
  "time_alive": 1314,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 28,
  "time_alive": 715,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 13,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 16,
  "time_alive": 1198,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "1902bb80ad554bb4ac417688326287ff:22c0624de5cc45a58cd6fcd75e4a5e29:a2b58a0af64e4c0cb3eb46904bbdf443",
  "placement": 11,
  "time_alive": 1296,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 16,
  "time_alive": 1268,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 4,
  "time_alive": 1480,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 28,
  "time_alive": 615,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 20,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 15,
  "time_alive": 1347,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 25,
  "time_alive": 927,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 6,
  "time_alive": 1468,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 1,
  "time_alive": 1500,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 18,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 23,
  "time_alive": 598,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "04741dba3ae94eb4a5387267b4e7e2cd:6fbe6a71b2b74e6e99bdba9affaacaf6:789efa3cd5b74e5ba8db6f4a9c50074b",
  "placement": 6,
  "time_alive": 1387,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 15,
  "time_alive": 1269,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 8,
  "time_alive": 1398,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 11,
  "time_alive": 1434,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 9,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 13,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 15,
  "time_alive": 1340,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 18,
  "time_alive": 1350,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 23,
  "time_alive": 1163,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 3,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 20,
  "time_alive": 847,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 19,
  "time_alive": 868,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "3c9d073958704a22b249026be0ed17d5:613b54f0b4c5429290b0d4fb36f1c427:f301f6da9f93441b8551420349d172d8",
  "placement": 12,
  "time_alive": 1279,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 31,
  "time_alive": 849,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 29,
  "time_alive": 669,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 3,
  "time_alive": 1494,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 28,
  "time_alive": 694,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 24,
  "time_alive": 984,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 7,
  "time_alive": 1471,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 22,
  "time_alive": 1182,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 17,
  "time_alive": 1343,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 24,
  "time_alive": 1090,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 4,
  "time_alive": 1406,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 27,
  "time_alive": 473,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "7467b1efa7b04c19bd2d4ef4e20e7fc9:a26ca8e8d21149478647b93d5e497bca:ea3e548d9d054cc5a5235fee95dbbfdc",
  "placement": 19,
  "time_alive": 969,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 20,
  "time_alive": 1153,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 30,
  "time_alive": 526,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 19,
  "time_alive": 1214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 26,
  "time_alive": 1014,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 10,
  "time_alive": 1403,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 29,
  "time_alive": 403,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 2,
  "time_alive": 1512,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 22,
  "time_alive": 1183,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 27,
  "time_alive": 778,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 7,
  "time_alive": 1390,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 29,
  "time_alive": 216,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "0153a2d7a6e84f9dbc77c0eb80674a05:383971801ac3443e852318f65d65da9d:8f1ac1a21d2c4740ab547c4d1b8c2545",
  "placement": 2,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 5,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 13,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 13,
  "time_alive": 1387,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 1,
  "time_alive": 1478,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 20,
  "time_alive": 1243,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 22,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 32,
  "time_alive": 159,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 16,
  "time_alive": 1353,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 22,
  "time_alive": 675,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 17,
  "time_alive": 1101,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "1607e01e35ee47c8a45f0b7e54535e27:61005bfec16043fa90f9b2420eadd98b:ac59df406dea46b184672193102f4c6e",
  "placement": 27,
  "time_alive": 560,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 26,
  "time_alive": 995,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 25,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 26,
  "time_alive": 768,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 32,
  "time_alive": 318,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 31,
  "time_alive": 355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 4,
  "time_alive": 1487,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 28,
  "time_alive": 430,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 11,
  "time_alive": 1401,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 13,
  "time_alive": 1374,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 19,
  "time_alive": 1058,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 13,
  "time_alive": 1274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "0bb9dafbf6524071a632e70267dfb49e:4c2f494c85b54d379f19b5dc4f12e2d2:8bc163ed27df4e9796eabae41d478eee",
  "placement": 5,
  "time_alive": 1395,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 21,
  "time_alive": 1128,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 17,
  "time_alive": 1281,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 2,
  "time_alive": 1521,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 10,
  "time_alive": 1400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 12,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 21,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 19,
  "time_alive": 1347,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 13,
  "time_alive": 1395,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 12,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 23,
  "time_alive": 649,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 30,
  "time_alive": 216,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "8ecbfac9c6d9497889a3e9431818cba3:be78ce2606074a3198503194649f8d94:eeecc28550234f38b8c89d29ae756173",
  "placement": 14,
  "time_alive": 1196,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 28,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 31,
  "time_alive": 482,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 7,
  "time_alive": 1473,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 27,
  "time_alive": 910,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 17,
  "time_alive": 1321,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 11,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 7,
  "time_alive": 1465,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 29,
  "time_alive": 560,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 27,
  "time_alive": 450,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 25,
  "time_alive": 501,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "047560d6b4104c03812b683d05630829:14a3dde6f5034df49c1000e9773018db:edbcc10d4b6841ffb40949b80be60f2b",
  "placement": 9,
  "time_alive": 1314,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 18,
  "time_alive": 1198,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 19,
  "time_alive": 1233,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 9,
  "time_alive": 1465,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 16,
  "time_alive": 1317,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 9,
  "time_alive": 1412,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 16,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 17,
  "time_alive": 1362,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 28,
  "time_alive": 554,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 10,
  "time_alive": 1425,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 17,
  "time_alive": 1117,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 12,
  "time_alive": 1326,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "5e1f88c05b0e49658bb9649dcf5b86e8:6691d1a10740466eb3e159a8eebe2bc8:c52a536ff34b45aaa2880cb74bacd06f",
  "placement": 16,
  "time_alive": 1178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 7,
  "time_alive": 1389,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 11,
  "time_alive": 1378,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 18,
  "time_alive": 1363,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 21,
  "time_alive": 1179,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 32,
  "time_alive": 304,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 18,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 16,
  "time_alive": 1377,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 17,
  "time_alive": 1348,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 30,
  "time_alive": 186,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 24,
  "time_alive": 561,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "4fb14e6c5d3240c69017a5b72a651e42:cbaaeb41797f4674aca611414773b087:d66f8688037b4b3688c50536236f7fd9",
  "placement": 8,
  "time_alive": 1342,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 19,
  "time_alive": 1169,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 9,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 15,
  "time_alive": 1381,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 31,
  "time_alive": 355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 28,
  "time_alive": 686,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 23,
  "time_alive": 1110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 12,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 30,
  "time_alive": 325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 4,
  "time_alive": 1498,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 28,
  "time_alive": 400,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 21,
  "time_alive": 610,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "421098e7db04474c9b2cd3e48aa91582:8cff001494214d57a787c74b642536d9:b5c73b438f884c4abb545834c07359df",
  "placement": 15,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 27,
  "time_alive": 894,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 27,
  "time_alive": 869,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 8,
  "time_alive": 1469,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 17,
  "time_alive": 1312,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 27,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 27,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 16,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 3,
  "time_alive": 1498,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 32,
  "time_alive": 177,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 29,
  "time_alive": 228,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 22,
  "time_alive": 608,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "5bfb8628b2e0412b977801cd953c1a2d:b1f965ee44ce403aae5aaa7e2ab20875:fc91b7b8c5b544b8a4156362b6dd2ad2",
  "placement": 18,
  "time_alive": 974,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 9,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 15,
  "time_alive": 1344,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 22,
  "time_alive": 1127,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 29,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 11,
  "time_alive": 1402,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 12,
  "time_alive": 1400,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 7,
  "time_alive": 1452,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 24,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 26,
  "time_alive": 875,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "711c4407c1dc490e8ca8e1f4874a3469:c59478fa3ce944228fe9ad288f102d00:e1dca98d9b074564a3bc51207fed9893",
  "placement": 14,
  "time_alive": 1224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 29,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 24,
  "time_alive": 1010,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 27,
  "time_alive": 658,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 12,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 16,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 17,
  "time_alive": 1271,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 21,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 21,
  "time_alive": 1210,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 6,
  "time_alive": 1473,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 25,
  "time_alive": 470,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 8,
  "time_alive": 1362,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "01c10b3ae5754671ae0a252fe58ff014:6d6092f5504b4617a7534c20ad468e5c:86695f65a40445ec864437ee02e1f608",
  "placement": 28,
  "time_alive": 479,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 24,
  "time_alive": 1075,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 22,
  "time_alive": 1129,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 5,
  "time_alive": 1481,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 22,
  "time_alive": 1175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 14,
  "time_alive": 1349,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 23,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 20,
  "time_alive": 1307,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 11,
  "time_alive": 1383,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 14,
  "time_alive": 1322,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "69819895d4084b3bbfa346b5f9f22f33:b33bb016040447a1a95b8d939cc06348:b7dc059bea8a4ab8ad9923a5b277e6c6",
  "placement": 18,
  "time_alive": 974,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 11,
  "time_alive": 1366,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 21,
  "time_alive": 1213,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 21,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 14,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 22,
  "time_alive": 1113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 13,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 24,
  "time_alive": 1016,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 18,
  "time_alive": 1332,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 31,
  "time_alive": 505,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 28,
  "time_alive": 339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "0239d1e6c6f440348cb1c6c5254d3d73:77606584180f4eae896548cb7b539a7d:ef0c7af3d7ec4bb4a8ffd648a37825f6",
  "placement": 22,
  "time_alive": 841,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 25,
  "time_alive": 1011,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 23,
  "time_alive": 1071,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 29,
  "time_alive": 434,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 25,
  "time_alive": 1078,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 23,
  "time_alive": 1021,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 30,
  "time_alive": 373,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 31,
  "time_alive": 230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 5,
  "time_alive": 1488,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 9,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 26,
  "time_alive": 482,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "64e4f706f5b848c2b622a24467b2e80b:a8c1697410534dd89c7f3b1f287d98ab:f8939fd8db5c409cb75baa88e178dedb",
  "placement": 25,
  "time_alive": 630,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 6,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 26,
  "time_alive": 880,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 12,
  "time_alive": 1432,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 23,
  "time_alive": 1169,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 18,
  "time_alive": 1305,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 19,
  "time_alive": 1220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 25,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 27,
  "time_alive": 653,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 21,
  "time_alive": 1138,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "5e2ca07fa0b8498c8385016a6499dfa2:83e5bb6e476e40f897934e066e938413:9252349b219b463d9eb26d8946f357bf",
  "placement": 24,
  "time_alive": 629,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 33,
  "time_alive": 335,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 32,
  "time_alive": 155,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 20,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 33,
  "time_alive": 98,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 33,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 31,
  "time_alive": 96,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 26,
  "time_alive": 754,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 10,
  "time_alive": 1406,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 22,
  "time_alive": 1136,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 11,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 15,
  "time_alive": 1223,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "0573f35b72564628a287033e1acecbf8:b5025b2648274c8c851ff098a758bc50:c3be9b547ca448caa0961fbddc290bae",
  "placement": 29,
  "time_alive": 411,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 23,
  "time_alive": 1114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "69872163-c22c-4206-ae23-7f4e9b9ce8f7",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 28,
  "time_alive": 789,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 30,
  "time_alive": 413,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 18,
  "time_alive": 1252,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 29,
  "time_alive": 519,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 13,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 15,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "3ff797e0e6da429fb03237b4e6f36b6e:760396500fc44e36b1bbbf7fa1b42dc8:9a9e596d8788489f8d9e3d12f46137d0",
  "placement": 30,
  "time_alive": 530,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5a06554e-329e-46a9-aad1-c8229ec136ee",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 17,
  "time_alive": 1213,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "02f5081a-65b2-4482-bd82-f212846dbe81",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 33,
  "time_alive": 206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "132b3546-06f3-4259-94b8-5c35ae97148d",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 11,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "13a3acf8-c740-4d52-9f78-bcff0dc9032f",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 30,
  "time_alive": 459,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "3c7e3b6d-f1ac-4256-b997-1bfd613c8e4b",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 28,
  "time_alive": 539,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9934d9c3-1bb5-4ae8-90cb-257f643b7107",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 27,
  "time_alive": 439,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "20b58abd-d300-48b8-82ec-0b639fedf4ce",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 33,
  "time_alive": 158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4862a5e3-4de2-4116-9f66-200507ce049c",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 23,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "189541ea-fa28-4f21-bd34-cca4618e0ed5",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 15,
  "time_alive": 1271,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "a69bea61-0c0e-4095-84e5-9b9320d4817b",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 31,
  "time_alive": 114,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1c0d68e8-ae50-4e50-b24d-0a4e58e93e08",
  "team_id": "105797eec03f44148748f1d00c24d2be:a5aa0a399ed942f09b8aa96727d45231:c5c0af89bf794ddd8204f08a8158df7c",
  "placement": 21,
  "time_alive": 889,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1495,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 18,
  "time_alive": 1327,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 9,
  "time_alive": 1410,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1491,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 3,
  "time_alive": 1522,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1520,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1500,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 25,
  "time_alive": 1009,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 7,
  "time_alive": 1427,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 4,
  "time_alive": 1469,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 9,
  "time_alive": 1418,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 2,
  "time_alive": 1458,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 27,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 16,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 21,
  "time_alive": 1256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 3,
  "time_alive": 1485,
  "elims": 15,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 4,
  "time_alive": 1519,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 17,
  "time_alive": 1316,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 2,
  "time_alive": 1500,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 7,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 2,
  "time_alive": 1490,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 1,
  "time_alive": 1484,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 1,
  "time_alive": 1479,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "86eadbb8b3b249b38ba4ca9f97fcb700:a64bb19d285349e8ba6cb6c1dbad008b:c23d7a1588794be9889fdeb2ac2cea3b",
  "placement": 8,
  "time_alive": 1398,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 17,
  "time_alive": 1357,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 10,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 6,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 10,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 2,
  "time_alive": 1533,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 1,
  "time_alive": 1520,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 6,
  "time_alive": 1449,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 8,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 3,
  "time_alive": 1470,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 3,
  "time_alive": 1472,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 6,
  "time_alive": 1423,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "3849b5b067d04edb8bc6764614c4d870:8425aa001a81455b837aeef950c7b280:a39887890b4b4041b35f47b2cb60b248",
  "placement": 3,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 5,
  "time_alive": 1424,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 8,
  "time_alive": 1438,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 10,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 24,
  "time_alive": 1127,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 1,
  "time_alive": 1533,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 16,
  "time_alive": 1324,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 8,
  "time_alive": 1435,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 3,
  "time_alive": 1485,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 6,
  "time_alive": 1448,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 8,
  "time_alive": 1411,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 12,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "b9e47ac1958a41d1be10a29a70a98d47:f17160d3fe75414c9cd6742cfbb8ce5d:f29a43d32f04412f810b393c3f7b58fa",
  "placement": 19,
  "time_alive": 1114,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 9,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 5,
  "time_alive": 1463,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 2,
  "time_alive": 1475,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 17,
  "time_alive": 1289,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 7,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 28,
  "time_alive": 880,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 20,
  "time_alive": 1248,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 9,
  "time_alive": 1436,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 5,
  "time_alive": 1453,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 6,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 14,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "0a86fd91f4914caa8a5cabed39d9197e:6159264362c246dda49a18bccf99fc78:6c9e9d1bdab04f1d9c6d02571f783506",
  "placement": 4,
  "time_alive": 1427,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 6,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 13,
  "time_alive": 1363,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 30,
  "time_alive": 288,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 15,
  "time_alive": 1359,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 9,
  "time_alive": 1430,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 11,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 12,
  "time_alive": 1396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 1,
  "time_alive": 1501,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 1,
  "time_alive": 1490,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 13,
  "time_alive": 1376,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 15,
  "time_alive": 1347,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "401da08468794b50b0d956eaea8116fd:a6238546b07046a4ab7c525a532b3a4a:fb46493d75c8465b88c60e35d879e142",
  "placement": 7,
  "time_alive": 1407,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 10,
  "time_alive": 1397,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 4,
  "time_alive": 1487,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 27,
  "time_alive": 825,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 12,
  "time_alive": 1367,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 24,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 3,
  "time_alive": 1506,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 22,
  "time_alive": 1172,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 4,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 21,
  "time_alive": 1137,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 2,
  "time_alive": 1484,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 7,
  "time_alive": 1423,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "0e69335177cf44c2bba8fad583e3e540:90b96c6294c64770b606615186e016db:be6e61e3fff044e9bec694f56fea5ccf",
  "placement": 6,
  "time_alive": 1408,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 2,
  "time_alive": 1495,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 21,
  "time_alive": 1201,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 12,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 2,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 14,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 13,
  "time_alive": 1367,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 16,
  "time_alive": 1368,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 6,
  "time_alive": 1459,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 15,
  "time_alive": 1361,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 9,
  "time_alive": 1407,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 4,
  "time_alive": 1455,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "256d6d5722e74ad08526a7af57e6c649:3e2a14d6ed0d404da24bfafc7b77d51a:e7ebd19bcfb34e8c813cb1d948ead663",
  "placement": 5,
  "time_alive": 1416,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 19,
  "time_alive": 1240,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 6,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 7,
  "time_alive": 1439,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 22,
  "time_alive": 1161,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 13,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 6,
  "time_alive": 1472,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 11,
  "time_alive": 1398,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 12,
  "time_alive": 1394,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 4,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 10,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 11,
  "time_alive": 1379,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "52da52e134ea4128bbe0d219a13d7227:66204d471b684dee9c20521f85c18cf3:a8a50ea8ce654b24befddcde28e98cbf",
  "placement": 15,
  "time_alive": 1314,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 28,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 9,
  "time_alive": 1414,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 1,
  "time_alive": 1475,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 13,
  "time_alive": 1364,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 12,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 27,
  "time_alive": 890,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 13,
  "time_alive": 1392,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 16,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 19,
  "time_alive": 1145,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 12,
  "time_alive": 1382,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 2,
  "time_alive": 1479,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "2511603ed9a5419f933870f91b984a21:9b4bfb61a275459193fa1b636656bec4:affbce8c9e0c48688a346d6d64886c9c",
  "placement": 10,
  "time_alive": 1377,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 12,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 28,
  "time_alive": 396,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 3,
  "time_alive": 1456,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 23,
  "time_alive": 1147,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 5,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 8,
  "time_alive": 1444,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 5,
  "time_alive": 1454,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 5,
  "time_alive": 1461,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 29,
  "time_alive": 143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 19,
  "time_alive": 1178,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 26,
  "time_alive": 279,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "09e5e12c509c440aa876553a5fd480f4:519812919e134875939e7e7fee7e851e:9b68ebab530a4d2cbf6db56b14e4c20a",
  "placement": 29,
  "time_alive": 270,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 8,
  "time_alive": 1405,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 12,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 26,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 14,
  "time_alive": 1364,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 21,
  "time_alive": 1177,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 14,
  "time_alive": 1339,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 28,
  "time_alive": 647,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 13,
  "time_alive": 1374,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 9,
  "time_alive": 1387,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 7,
  "time_alive": 1451,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 3,
  "time_alive": 1458,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "51d062e0df3940b886c55e3b9240f7d4:a660d8b7a0cf44308db05ec4a392fbb8:f0541261c64c443882ab8109dd8b55de",
  "placement": 13,
  "time_alive": 1353,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 3,
  "time_alive": 1470,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 23,
  "time_alive": 1125,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 16,
  "time_alive": 1369,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 7,
  "time_alive": 1435,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 20,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 18,
  "time_alive": 1299,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 10,
  "time_alive": 1405,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "3275d124096b4de0b12dd78d524111d3:5e9fc0646e5b445b9e3bbec65e305809:f598da59d08d44aeb98d8359bba57190",
  "placement": 1,
  "time_alive": 1458,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 7,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 1,
  "time_alive": 1509,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 15,
  "time_alive": 1370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 19,
  "time_alive": 1173,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 25,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 30,
  "time_alive": 325,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 24,
  "time_alive": 1129,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 2,
  "time_alive": 1501,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 18,
  "time_alive": 1330,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 20,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 20,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "1f3dc691316e4aa0a0ca8ffa080fab47:38b655cb10504224b60b1c2bb3f55330:72fe952ac6a6443b89b5aa920e93b923",
  "placement": 22,
  "time_alive": 960,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 31,
  "time_alive": 200,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 25,
  "time_alive": 965,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 5,
  "time_alive": 1449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 8,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 11,
  "time_alive": 1414,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 20,
  "time_alive": 1237,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 7,
  "time_alive": 1435,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 26,
  "time_alive": 835,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 23,
  "time_alive": 1080,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 5,
  "time_alive": 1457,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 22,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "1df12d0728aa4412980cd5028865f432:39b1a4e26b364feb9a10aab75b3afc50:66010e38a2894b648fe66772aaf502b4",
  "placement": 24,
  "time_alive": 591,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 4,
  "time_alive": 1441,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 3,
  "time_alive": 1504,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 29,
  "time_alive": 399,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 11,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 19,
  "time_alive": 1301,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 31,
  "time_alive": 159,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 30,
  "time_alive": 445,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 17,
  "time_alive": 1348,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 26,
  "time_alive": 453,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 26,
  "time_alive": 779,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 28,
  "time_alive": 208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "984b99ec0b86442daba1bfe1f3b0dbb6:bda9f649fffd48fdbcdc4a9ae0f10f64:d7b13e0a1e2e4a83b2da38511840c533",
  "placement": 23,
  "time_alive": 643,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 23,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 30,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 22,
  "time_alive": 1230,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 21,
  "time_alive": 1167,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 27,
  "time_alive": 553,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 4,
  "time_alive": 1500,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 17,
  "time_alive": 1361,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 10,
  "time_alive": 1429,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 8,
  "time_alive": 1394,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 11,
  "time_alive": 1395,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 18,
  "time_alive": 1217,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "0b8660f6ec304470815cda0eeb5f6c46:4872060f1fda4f44b6eb5784bcd793ba:a28cb3dd666745db9eb3f1e93f98f5e4",
  "placement": 28,
  "time_alive": 276,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 20,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 19,
  "time_alive": 1304,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 19,
  "time_alive": 1322,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 25,
  "time_alive": 1040,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 6,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 12,
  "time_alive": 1401,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 14,
  "time_alive": 1385,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 11,
  "time_alive": 1409,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 14,
  "time_alive": 1362,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 17,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 16,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "6705252cb24b4ef08a1a464363e4abde:81c2b84ed094487a98e57e1264cfbdb7:cb1f5e576d3949a49cd124dcccc1e3c6",
  "placement": 11,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 15,
  "time_alive": 1363,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 20,
  "time_alive": 1208,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 30,
  "time_alive": 291,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 30,
  "time_alive": 250,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 15,
  "time_alive": 1330,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 29,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 11,
  "time_alive": 1373,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 18,
  "time_alive": 1243,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 5,
  "time_alive": 1448,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "4b5bb03fa6c4475a908c04e46d0a67da:57c43a4d1152427a867b89a7bb0138e5:63fe1eb108774e33b6bb78729042e3a5",
  "placement": 27,
  "time_alive": 317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 25,
  "time_alive": 995,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 15,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 13,
  "time_alive": 1383,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 5,
  "time_alive": 1450,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 10,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 24,
  "time_alive": 1050,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 29,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 21,
  "time_alive": 1190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 13,
  "time_alive": 1362,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 23,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 23,
  "time_alive": 536,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "49cef34fc89d4fb399b8b5d40d0a27c1:6062013490b24991a861fec1a63efb49:9a9517742738457e9afc21a70172023d",
  "placement": 9,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 16,
  "time_alive": 1359,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 14,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 25,
  "time_alive": 1055,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 4,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 31,
  "time_alive": 189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 25,
  "time_alive": 1046,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 9,
  "time_alive": 1433,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 22,
  "time_alive": 1185,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 22,
  "time_alive": 1134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 29,
  "time_alive": 192,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 8,
  "time_alive": 1421,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "7743eeec5709406dadfb626ada668ec2:7827295eb364450ba618fa4048162779:ffbf237a506a41cf88c4eaca34bae236",
  "placement": 21,
  "time_alive": 986,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 22,
  "time_alive": 1147,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 22,
  "time_alive": 1160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 4,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 18,
  "time_alive": 1206,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 18,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 5,
  "time_alive": 1476,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 23,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 19,
  "time_alive": 1322,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 25,
  "time_alive": 670,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 14,
  "time_alive": 1367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 13,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "4dae134b257e4968a63cecbadbc79cda:a057dd6749934c46ab5eb2333c497c63:b49bf866e21b497995977d1f87dd511b",
  "placement": 12,
  "time_alive": 1370,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 26,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 27,
  "time_alive": 815,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 14,
  "time_alive": 1372,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 9,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 23,
  "time_alive": 1148,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 7,
  "time_alive": 1459,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 18,
  "time_alive": 1326,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 14,
  "time_alive": 1356,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 10,
  "time_alive": 1376,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 22,
  "time_alive": 1021,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "7e9dad67bb6f4239aaf3ceecdcf373ea:95f2894b1ab74af4b17003f7c8183789:b853ed5258254091bb6aa77aeb63cbaa",
  "placement": 29,
  "time_alive": 203,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 24,
  "time_alive": 1000,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 2,
  "time_alive": 1509,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 8,
  "time_alive": 1436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 27,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 17,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 21,
  "time_alive": 1236,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 21,
  "time_alive": 1238,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 20,
  "time_alive": 1253,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 17,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 25,
  "time_alive": 826,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 25,
  "time_alive": 489,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "67a20dab018d422f978f6bc785542264:69f3f0fdea1f4c7bab273be66a76284d:83b1d498a91c4b309dbab535ac8712ca",
  "placement": 14,
  "time_alive": 1319,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 13,
  "time_alive": 1373,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 11,
  "time_alive": 1389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 23,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 6,
  "time_alive": 1449,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 15,
  "time_alive": 1375,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 19,
  "time_alive": 1290,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 19,
  "time_alive": 1256,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 18,
  "time_alive": 1339,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 24,
  "time_alive": 743,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 16,
  "time_alive": 1355,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 24,
  "time_alive": 492,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "095eebeca7e3460081a1739b4208ff2b:76b8a93bf51345ada2ad020fab6b7930:776df237ccdb40e99f9e0c5c5d7db820",
  "placement": 16,
  "time_alive": 1314,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 21,
  "time_alive": 1175,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 17,
  "time_alive": 1333,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 17,
  "time_alive": 1349,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 16,
  "time_alive": 1313,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 28,
  "time_alive": 475,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 29,
  "time_alive": 496,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 4,
  "time_alive": 1473,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 15,
  "time_alive": 1353,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 16,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 28,
  "time_alive": 397,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 27,
  "time_alive": 213,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "2c59844362c94f0e86116f6afd663cc7:be4a8f1181d142fea9438e33cb941817:f204cecef43f48a9a234d5ba39613c3d",
  "placement": 25,
  "time_alive": 555,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 29,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 31,
  "time_alive": 168,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 31,
  "time_alive": 286,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 31,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 16,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 23,
  "time_alive": 1192,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 3,
  "time_alive": 1491,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 23,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 12,
  "time_alive": 1365,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 21,
  "time_alive": 1070,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 21,
  "time_alive": 888,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "641afb57536c4acfaf9fa75e8b830605:914bb6611f7b43ef9e9e545aaa3fb607:95a25734e57447f4b92fcdefdc9b1b0a",
  "placement": 26,
  "time_alive": 415,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 14,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 7,
  "time_alive": 1443,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 24,
  "time_alive": 1143,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 28,
  "time_alive": 705,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 22,
  "time_alive": 1166,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 10,
  "time_alive": 1431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 15,
  "time_alive": 1369,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "1341c75fc767429f90c50f1b56f21718:3d3940bc4b50453983ea24de3c4d50ee:516323d244394670836c3fbb76cf5148",
  "placement": 24,
  "time_alive": 1157,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 11,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 26,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 20,
  "time_alive": 1310,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 20,
  "time_alive": 1173,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 8,
  "time_alive": 1468,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 9,
  "time_alive": 1441,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 27,
  "time_alive": 838,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 28,
  "time_alive": 421,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 28,
  "time_alive": 212,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 27,
  "time_alive": 663,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 19,
  "time_alive": 1209,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "447a148bb36d446faad8d2b0d632dc6a:53aad01d3e8045d59f0666be36e71866:c19cc91eaaf4401cb4374e314f8887ae",
  "placement": 18,
  "time_alive": 1261,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 18,
  "time_alive": 1326,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 24,
  "time_alive": 1065,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 18,
  "time_alive": 1348,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 26,
  "time_alive": 930,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 26,
  "time_alive": 590,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 26,
  "time_alive": 901,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 25,
  "time_alive": 997,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 30,
  "time_alive": 104,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 27,
  "time_alive": 436,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 24,
  "time_alive": 840,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 10,
  "time_alive": 1411,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "85a5032476cb49419f5806eba2e2012c:d0faa60984a34c4b80651039b28dbcd9:ed48b87d28274052bb2746f4e7d4b0d0",
  "placement": 17,
  "time_alive": 1268,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "ca27e35c-7984-48a2-8417-4896ea24e4ca",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 30,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c6e8d6cc-fe98-4a4d-89bd-4d0c33dbea4d",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 29,
  "time_alive": 329,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "478b92a0-71f1-4da1-93ca-2af16162d053",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 28,
  "time_alive": 614,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2824188e-e995-45f2-a291-13af55302d80",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 29,
  "time_alive": 313,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "549f9fe6-c533-4701-ac28-f37c97195a4f",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 29,
  "time_alive": 262,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "87194a51-737f-401f-a755-15c34d62a849",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 22,
  "time_alive": 1225,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 26,
  "time_alive": 907,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "57f694ed-98b9-45b4-b99a-f03cc0a478c7",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 27,
  "time_alive": 678,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5b3f723b-0345-418d-b5f3-a597890bb02c",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 20,
  "time_alive": 1137,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4f7c9bb4-dbd8-402d-b51b-c336539c6066",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 15,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2d59b328-8c7a-4422-9a46-a812e2d692dd",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 17,
  "time_alive": 1343,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5efd6f68-3f76-4b87-aab8-8e50d645319e",
  "team_id": "3a0e14a7907349469bda9ffffb5af248:73dde803eea041549fc816beb07b4886:9c78c1d27dab4a67a0b5fdead138454a",
  "placement": 20,
  "time_alive": 1054,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "9f93d23f-e922-4918-bf7f-c9db89224ed1",
  "team_id": "543b321a3de8437cbfec1cd92c5da689:d35bb2f456654fffbb1cfd469cf81ee0:f2f23e2ebb6849a6ac6f027d4072f72a",
  "placement": 31,
  "time_alive": 233,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1482,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 3,
  "time_alive": 1552,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1530,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1508,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 6,
  "time_alive": 1397,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 24,
  "time_alive": 1014,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1463,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 4,
  "time_alive": 1407,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 1,
  "time_alive": 1511,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1507,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1448,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "0fd6efb6cfb147f48328105f5d71a8b8:2dd649dff7294ff1b5b50a94d5aec230:501b47666d0b42609ba72a04c2cdc300",
  "placement": 2,
  "time_alive": 1578,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 6,
  "time_alive": 1440,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 8,
  "time_alive": 1473,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 4,
  "time_alive": 1503,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 7,
  "time_alive": 1423,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 2,
  "time_alive": 1466,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 16,
  "time_alive": 1347,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 6,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 1,
  "time_alive": 1418,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 15,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 27,
  "time_alive": 783,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 7,
  "time_alive": 1385,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "6b3ac06cfa354f3ca62f611e434faee9:845c762391ab4b029767c50f13f92a07:ddcad38f85c245b785c8812e7592a6a7",
  "placement": 19,
  "time_alive": 1382,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 10,
  "time_alive": 1402,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 7,
  "time_alive": 1474,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 11,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 25,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 3,
  "time_alive": 1423,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 20,
  "time_alive": 1146,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 11,
  "time_alive": 1391,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 10,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 3,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 9,
  "time_alive": 1404,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 10,
  "time_alive": 1375,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "65418cb0d21a4efe91f632de5ab137e8:b3956d8d751347f280d599eb69a1f292:c3abda5df33146afa899e622772a8004",
  "placement": 8,
  "time_alive": 1511,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 13,
  "time_alive": 1386,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1557,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 6,
  "time_alive": 1486,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 5,
  "time_alive": 1441,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 31,
  "time_alive": 231,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 1,
  "time_alive": 1501,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 119,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 17,
  "time_alive": 1313,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 8,
  "time_alive": 1444,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 33,
  "time_alive": 94,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 32,
  "time_alive": 141,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "3d5563c9c0b74cbeadb186b3e0ff8b70:60f9ba46b57c4d979c0caa5fbde7e072:a048d652928747a5ae9661c8e6a935c5",
  "placement": 5,
  "time_alive": 1530,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 104,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 111,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 112,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 32,
  "time_alive": 175,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1466,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 18,
  "time_alive": 1336,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 16,
  "time_alive": 1343,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 11,
  "time_alive": 1415,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 1,
  "time_alive": 1507,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 33,
  "time_alive": 134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "44a112b04dc240cbba85518f99b7ff35:4ae8cf3d65f740d49680e768a8d72391:efd4b17204c346aaa1672add49529a6c",
  "placement": 3,
  "time_alive": 1578,
  "elims": 17,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 15,
  "time_alive": 1358,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 13,
  "time_alive": 1414,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 2,
  "time_alive": 1530,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 1,
  "time_alive": 1508,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 9,
  "time_alive": 1363,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 7,
  "time_alive": 1461,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 10,
  "time_alive": 1396,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 14,
  "time_alive": 1336,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 2,
  "time_alive": 1511,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 14,
  "time_alive": 1374,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 16,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "447fb739f8484d5c923c21614ed63d86:4baf838180fa44faa2c8f9746e3abf89:72ea58d5d80f493c91949cff6bc332a3",
  "placement": 26,
  "time_alive": 902,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 31,
  "time_alive": 520,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 5,
  "time_alive": 1510,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 30,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 20,
  "time_alive": 1219,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 22,
  "time_alive": 978,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 6,
  "time_alive": 1464,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 1,
  "time_alive": 1463,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 9,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 5,
  "time_alive": 1456,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 5,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 19,
  "time_alive": 1310,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "22958035fa5b4c09a1a0b476128481be:7fba179e9e5b4c5bb268731818f14568:e8f513fe51834ca48fd76b36a67d91d2",
  "placement": 28,
  "time_alive": 698,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 7,
  "time_alive": 1424,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 6,
  "time_alive": 1483,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 3,
  "time_alive": 1518,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 19,
  "time_alive": 1268,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 7,
  "time_alive": 1392,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 10,
  "time_alive": 1436,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 15,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 29,
  "time_alive": 296,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 19,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 3,
  "time_alive": 1482,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 23,
  "time_alive": 1125,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "205afc681a324533907d65f72933f116:2b987b57eff147dd934b0e33e62035f8:9dc0178c0a9741228092c2a4bac2a1a9",
  "placement": 16,
  "time_alive": 1402,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 1,
  "time_alive": 1496,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 27,
  "time_alive": 934,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 15,
  "time_alive": 1384,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 6,
  "time_alive": 1431,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 5,
  "time_alive": 1409,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 15,
  "time_alive": 1365,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 5,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 21,
  "time_alive": 1089,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 25,
  "time_alive": 1037,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 20,
  "time_alive": 1042,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 21,
  "time_alive": 1166,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "829b509f26964205acf10f463a743a14:a7a0d378c5af429c8c56d11ba16c1bb5:d62ca9b7e560445f977f0bfaf5a7ef51",
  "placement": 22,
  "time_alive": 1151,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 8,
  "time_alive": 1421,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 15,
  "time_alive": 1389,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 12,
  "time_alive": 1433,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 9,
  "time_alive": 1414,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 12,
  "time_alive": 1345,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 27,
  "time_alive": 852,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 3,
  "time_alive": 1459,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 27,
  "time_alive": 483,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 16,
  "time_alive": 1368,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 13,
  "time_alive": 1376,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 4,
  "time_alive": 1434,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "336ab331628044619724361709cd23bf:898aa1d15d3644c0b4b93db4d58b5866:91371b0ef65a4a6bb14a195de9ebb9d0",
  "placement": 15,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 4,
  "time_alive": 1447,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 26,
  "time_alive": 939,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 25,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 14,
  "time_alive": 1373,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 15,
  "time_alive": 1315,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 3,
  "time_alive": 1490,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 28,
  "time_alive": 695,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 15,
  "time_alive": 1334,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 32,
  "time_alive": 323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 30,
  "time_alive": 412,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 1,
  "time_alive": 1448,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "0c37a64d86734032be2b1fb78a61574a:2408817916da4300af180e2917578d46:7595259de5c74114b72280bd7f56d29a",
  "placement": 6,
  "time_alive": 1526,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 11,
  "time_alive": 1400,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 18,
  "time_alive": 1354,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 14,
  "time_alive": 1421,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 3,
  "time_alive": 1463,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 20,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 19,
  "time_alive": 1180,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 7,
  "time_alive": 1419,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 8,
  "time_alive": 1376,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 7,
  "time_alive": 1448,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 25,
  "time_alive": 894,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 12,
  "time_alive": 1369,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "677a2e43b57f43cdbb2affd0d8798bf0:b344ec81f391431ab0eb4cdc740d0ce2:b80dff9d35104ce393c388c3be299964",
  "placement": 10,
  "time_alive": 1478,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 24,
  "time_alive": 1133,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 2,
  "time_alive": 1557,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 9,
  "time_alive": 1463,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1449,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 11,
  "time_alive": 1360,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 13,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 24,
  "time_alive": 898,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 28,
  "time_alive": 370,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 24,
  "time_alive": 1042,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 4,
  "time_alive": 1468,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 30,
  "time_alive": 372,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "9f6f91b9fdd548a7a7447dc0d851a5ae:ea3fac816e08412698982711b838f27a:fc2f088f882f43138b36b136e6a3dfbb",
  "placement": 23,
  "time_alive": 1099,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 27,
  "time_alive": 947,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 10,
  "time_alive": 1428,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 13,
  "time_alive": 1425,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 21,
  "time_alive": 1189,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 33,
  "time_alive": 123,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 28,
  "time_alive": 646,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 25,
  "time_alive": 896,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 22,
  "time_alive": 996,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 4,
  "time_alive": 1464,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 12,
  "time_alive": 1378,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 8,
  "time_alive": 1381,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "a5976cd43f5b467cb23b170a2b443d28:bae21bcc52734522bd773f5d9b712734:c0b74ba27a36427f88ee7063a43c203b",
  "placement": 7,
  "time_alive": 1519,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 20,
  "time_alive": 1176,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 19,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 5,
  "time_alive": 1488,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 18,
  "time_alive": 1317,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 13,
  "time_alive": 1327,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 4,
  "time_alive": 1488,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 4,
  "time_alive": 1444,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 19,
  "time_alive": 1169,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 29,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 24,
  "time_alive": 931,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 22,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "225c0d4b5e714cfeb18e6bf34fcbeb07:31f7d3ac2d2a425dbe834d9c67681dc1:a78a081362d04fa6a1fd8a6ee5e0f9a9",
  "placement": 4,
  "time_alive": 1543,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "2361adbf-6acc-470b-af14-d980abf9ffd6",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 9,
  "time_alive": 1420,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "75e91277-a8ab-4807-b701-7b6b7d1710c1",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 14,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1a127a34-bd12-41e2-be73-d1d5e719fe84",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 28,
  "time_alive": 906,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "0aafbe5e-49dc-40f8-986d-44dabadb1028",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 22,
  "time_alive": 1171,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2b8f747f-353f-4efd-8a2f-ca8c216c3775",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 4,
  "time_alive": 1410,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "50e2c439-8e6a-49c2-90d4-3209dfdc1e58",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 14,
  "time_alive": 1372,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "c1aa2094-066f-47da-a07d-ededf6afa045",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 8,
  "time_alive": 1412,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "8b7705b7-e17d-4546-ba13-6d711f1b9f68",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 3,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5992714d-9c61-4947-9a1e-906ac139f3af",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 14,
  "time_alive": 1389,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "93a228fe-3393-4c99-9a46-a7e530568e6b",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 11,
  "time_alive": 1380,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "5e26ac0b-49b3-4054-9b4a-39e8fe57cc7f",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 27,
  "time_alive": 742,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1a62700b-2193-4568-9cb8-7854b6652daf",
  "team_id": "0601d03341f44403995a457466cf3bdf:11c132e112134a75b72b27e32d48aa10:e82015b2753a4b288d13562eecf882be",
  "placement": 30,
  "time_alive": 399,
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
    