const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 16,
  "time_alive": 1426,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 91,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 51,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 37,
  "time_alive": 1367,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 84,
  "time_alive": 386,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 22,
  "time_alive": 1392,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "d4949fddb6ab4367b65f2bc1c2b1e086",
  "placement": 72,
  "time_alive": 309,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 85,
  "time_alive": 540,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 86,
  "time_alive": 379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 92,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 19,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 36,
  "time_alive": 1322,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "0beddc4bc0b04b2daaac48117be23ee4",
  "placement": 68,
  "time_alive": 364,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "43ca1b1c0a2446e7ae4e8139ddd8b4f6",
  "placement": 87,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "43ca1b1c0a2446e7ae4e8139ddd8b4f6",
  "placement": 34,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "43ca1b1c0a2446e7ae4e8139ddd8b4f6",
  "placement": 50,
  "time_alive": 1232,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "43ca1b1c0a2446e7ae4e8139ddd8b4f6",
  "placement": 34,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "43ca1b1c0a2446e7ae4e8139ddd8b4f6",
  "placement": 66,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "43ca1b1c0a2446e7ae4e8139ddd8b4f6",
  "placement": 44,
  "time_alive": 1155,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 64,
  "time_alive": 1022,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 46,
  "time_alive": 1248,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 69,
  "time_alive": 789,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 33,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 46,
  "time_alive": 1251,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "a680870fa2fa424895f222271ef6caeb",
  "placement": 35,
  "time_alive": 1361,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "a680870fa2fa424895f222271ef6caeb",
  "placement": 87,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "a680870fa2fa424895f222271ef6caeb",
  "placement": 91,
  "time_alive": 255,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "a680870fa2fa424895f222271ef6caeb",
  "placement": 80,
  "time_alive": 554,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "a680870fa2fa424895f222271ef6caeb",
  "placement": 84,
  "time_alive": 273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "a680870fa2fa424895f222271ef6caeb",
  "placement": 53,
  "time_alive": 824,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 31,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 39,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 54,
  "time_alive": 1213,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 98,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 88,
  "time_alive": 198,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 79,
  "time_alive": 690,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 36,
  "time_alive": 1376,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 30,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 58,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 95,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "29b37225302643cf93550f76fcd385a7",
  "placement": 91,
  "time_alive": 90,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 96,
  "time_alive": 187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 35,
  "time_alive": 1377,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 74,
  "time_alive": 557,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 50,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 96,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "fc6ad219619346d1a43ac12fabc2c966",
  "placement": 42,
  "time_alive": 1204,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 73,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 73,
  "time_alive": 704,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 99,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 37,
  "time_alive": 1345,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 52,
  "time_alive": 1194,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "31dab5ceb6a64a45ac47c6c521c8f6a3",
  "placement": 88,
  "time_alive": 115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 39,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 55,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 73,
  "time_alive": 558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 86,
  "time_alive": 301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 87,
  "time_alive": 212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 39,
  "time_alive": 1253,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 65,
  "time_alive": 1008,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 50,
  "time_alive": 1201,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 64,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 67,
  "time_alive": 974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 61,
  "time_alive": 827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 89,
  "time_alive": 100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 34,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 44,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 89,
  "time_alive": 274,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 55,
  "time_alive": 1186,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 79,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 54,
  "time_alive": 811,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "39ea7221ed624b3ea179180129281f9a",
  "placement": 33,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "39ea7221ed624b3ea179180129281f9a",
  "placement": 76,
  "time_alive": 677,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "39ea7221ed624b3ea179180129281f9a",
  "placement": 76,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "39ea7221ed624b3ea179180129281f9a",
  "placement": 52,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "39ea7221ed624b3ea179180129281f9a",
  "placement": 55,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "39ea7221ed624b3ea179180129281f9a",
  "placement": 59,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "ce4020852bb44e09a776cdf57828c790",
  "placement": 90,
  "time_alive": 310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "ce4020852bb44e09a776cdf57828c790",
  "placement": 94,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "ce4020852bb44e09a776cdf57828c790",
  "placement": 82,
  "time_alive": 381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "ce4020852bb44e09a776cdf57828c790",
  "placement": 90,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "ce4020852bb44e09a776cdf57828c790",
  "placement": 80,
  "time_alive": 322,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "ce4020852bb44e09a776cdf57828c790",
  "placement": 60,
  "time_alive": 640,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 70,
  "time_alive": 872,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 48,
  "time_alive": 1222,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 87,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 94,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 81,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 73,
  "time_alive": 288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 67,
  "time_alive": 935,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 40,
  "time_alive": 1332,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 59,
  "time_alive": 1180,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 82,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 93,
  "time_alive": 140,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "cfe353b8318c49ba963cb1292e2efc32",
  "placement": 76,
  "time_alive": 234,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 57,
  "time_alive": 1090,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 72,
  "time_alive": 807,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 72,
  "time_alive": 625,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 78,
  "time_alive": 589,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5fbd25d4b11b456ebfeeda56d3d6ab17",
  "placement": 94,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 55,
  "time_alive": 1119,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 52,
  "time_alive": 1192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 63,
  "time_alive": 1139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 51,
  "time_alive": 1210,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 85,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "7e49f45e2b814fc69cf37455b059f262",
  "placement": 78,
  "time_alive": 225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 58,
  "time_alive": 1087,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 86,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 56,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 31,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 80,
  "time_alive": 216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 50,
  "time_alive": 1143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 63,
  "time_alive": 1070,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 85,
  "time_alive": 349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "897e866d97af44d78d333c7f9b4e9033",
  "placement": 96,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "4bb8d346d5574e75854b385a23dc59ed",
  "placement": 52,
  "time_alive": 1136,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "4bb8d346d5574e75854b385a23dc59ed",
  "placement": 78,
  "time_alive": 610,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "4bb8d346d5574e75854b385a23dc59ed",
  "placement": 81,
  "time_alive": 383,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "4bb8d346d5574e75854b385a23dc59ed",
  "placement": 88,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "4bb8d346d5574e75854b385a23dc59ed",
  "placement": 86,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "4bb8d346d5574e75854b385a23dc59ed",
  "placement": 70,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "b5f72c6d9dea4ee399fc52dc840967a1",
  "placement": 63,
  "time_alive": 1022,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "b5f72c6d9dea4ee399fc52dc840967a1",
  "placement": 88,
  "time_alive": 231,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "b5f72c6d9dea4ee399fc52dc840967a1",
  "placement": 61,
  "time_alive": 1163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "b5f72c6d9dea4ee399fc52dc840967a1",
  "placement": 92,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "b5f72c6d9dea4ee399fc52dc840967a1",
  "placement": 89,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "b5f72c6d9dea4ee399fc52dc840967a1",
  "placement": 81,
  "time_alive": 190,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "3f705fd6559a4dcea83bc522bbc7fc7f",
  "placement": 89,
  "time_alive": 326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "3f705fd6559a4dcea83bc522bbc7fc7f",
  "placement": 54,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "3f705fd6559a4dcea83bc522bbc7fc7f",
  "placement": 80,
  "time_alive": 394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "3f705fd6559a4dcea83bc522bbc7fc7f",
  "placement": 87,
  "time_alive": 298,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "3f705fd6559a4dcea83bc522bbc7fc7f",
  "placement": 83,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "3f705fd6559a4dcea83bc522bbc7fc7f",
  "placement": 58,
  "time_alive": 650,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 97,
  "time_alive": 157,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 77,
  "time_alive": 524,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 81,
  "time_alive": 481,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 91,
  "time_alive": 163,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "27601894-c47d-4c3b-81fb-e644c7cc82bb",
  "team_id": "313a41d2cc49429eaaeb56b6f274b988",
  "placement": 84,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "5242d902a81742268993ed4d5ac4bebe",
  "placement": 100,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "5242d902a81742268993ed4d5ac4bebe",
  "placement": 93,
  "time_alive": 167,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "5242d902a81742268993ed4d5ac4bebe",
  "placement": 97,
  "time_alive": 160,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0880bcc2-185a-4e6b-afbd-cd6cc5b868ad",
  "team_id": "5242d902a81742268993ed4d5ac4bebe",
  "placement": 97,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1f8a7ceb-6094-4e84-9138-68d2c308a1c6",
  "team_id": "5242d902a81742268993ed4d5ac4bebe",
  "placement": 58,
  "time_alive": 992,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "3bce82fb-ec0b-460b-a796-847fab6957cd",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 88,
  "time_alive": 395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14df20c7-30ba-473b-b99c-01ef9d152a71",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 83,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "14bbf875-9a48-4358-9622-9e6264a65639",
  "team_id": "f92f388865a24f8c8a7c7980258a353e",
  "placement": 98,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1531,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 3,
  "time_alive": 1533,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 2,
  "time_alive": 1544,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 87,
  "time_alive": 208,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 35,
  "time_alive": 1358,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1520,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 7,
  "time_alive": 1480,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 19,
  "time_alive": 1421,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 12,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 1,
  "time_alive": 1521,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 17,
  "time_alive": 1439,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 10,
  "time_alive": 1460,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 91,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 2,
  "time_alive": 1539,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 3,
  "time_alive": 1529,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 22,
  "time_alive": 1417,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 7,
  "time_alive": 1500,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d8ebd43a089541a2903a092147b0052e",
  "placement": 2,
  "time_alive": 1520,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 33,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 5,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 16,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 36,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 6,
  "time_alive": 1511,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 11,
  "time_alive": 1456,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 12,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 59,
  "time_alive": 1151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 20,
  "time_alive": 1449,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 12,
  "time_alive": 1458,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 4,
  "time_alive": 1528,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "563b643108fb47c4a42aacdb660c74ec",
  "placement": 8,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 60,
  "time_alive": 1137,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 4,
  "time_alive": 1531,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 6,
  "time_alive": 1513,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 52,
  "time_alive": 1185,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 10,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "ddd2368c43be41d5a84c03d2a90390d2",
  "placement": 7,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 18,
  "time_alive": 1425,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 10,
  "time_alive": 1500,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 10,
  "time_alive": 1490,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 97,
  "time_alive": 107,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 16,
  "time_alive": 1440,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "4b06f770475842899a84a33b6189dd11",
  "placement": 3,
  "time_alive": 1511,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 16,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 17,
  "time_alive": 1451,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 13,
  "time_alive": 1481,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 6,
  "time_alive": 1486,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 33,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 18,
  "time_alive": 1430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 8,
  "time_alive": 1470,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 37,
  "time_alive": 1353,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 58,
  "time_alive": 1016,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 14,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 20,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "6e63cf5db70045be877804832b6cf279",
  "placement": 24,
  "time_alive": 1416,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 4,
  "time_alive": 1499,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 57,
  "time_alive": 1172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 95,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 10,
  "time_alive": 1475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 9,
  "time_alive": 1479,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 30,
  "time_alive": 1399,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 21,
  "time_alive": 1418,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 14,
  "time_alive": 1468,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 61,
  "time_alive": 889,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 15,
  "time_alive": 1453,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 11,
  "time_alive": 1453,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 20,
  "time_alive": 1427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 75,
  "time_alive": 742,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 9,
  "time_alive": 1502,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 9,
  "time_alive": 1496,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 3,
  "time_alive": 1519,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 52,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "82914fc61c3a4a2188ad43ef128ec8da",
  "placement": 47,
  "time_alive": 1259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 63,
  "time_alive": 997,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 39,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 4,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 5,
  "time_alive": 1492,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 24,
  "time_alive": 1402,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d1d2ae861e7f431e902486a73c9265d5",
  "placement": 43,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 2,
  "time_alive": 1531,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 11,
  "time_alive": 1496,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 27,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 81,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 28,
  "time_alive": 1382,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "ae2d1ee68f4b4ac3999ce717be0377b4",
  "placement": 61,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 28,
  "time_alive": 1394,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 8,
  "time_alive": 1504,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 74,
  "time_alive": 587,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 21,
  "time_alive": 1418,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 23,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 19,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 10,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 65,
  "time_alive": 969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 21,
  "time_alive": 1438,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 51,
  "time_alive": 1191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 18,
  "time_alive": 1423,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "4ff014492756492e8cd0fce71c030a79",
  "placement": 15,
  "time_alive": 1438,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 13,
  "time_alive": 1447,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 33,
  "time_alive": 1366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 29,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 11,
  "time_alive": 1466,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 31,
  "time_alive": 1374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "fdb360d853d949f5a0579f51ec016aa3",
  "placement": 32,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 14,
  "time_alive": 1444,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 40,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 11,
  "time_alive": 1487,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 20,
  "time_alive": 1419,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 32,
  "time_alive": 1374,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "e5f2227aacbd4c35bb28bb4156906e35",
  "placement": 60,
  "time_alive": 771,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 11,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 13,
  "time_alive": 1470,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 49,
  "time_alive": 1203,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 28,
  "time_alive": 1395,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 15,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d68c85aa4d4744a2a4ba955355123b36",
  "placement": 53,
  "time_alive": 1206,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 45,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 27,
  "time_alive": 1385,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 28,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 78,
  "time_alive": 442,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 22,
  "time_alive": 1411,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "46fb9d209462445dbad93f48188f1fed",
  "placement": 28,
  "time_alive": 1407,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 70,
  "time_alive": 884,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 82,
  "time_alive": 462,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 45,
  "time_alive": 1228,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 50,
  "time_alive": 1250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 1,
  "time_alive": 1536,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 26,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 87,
  "time_alive": 238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 86,
  "time_alive": 297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 17,
  "time_alive": 1460,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 56,
  "time_alive": 1130,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 3,
  "time_alive": 1529,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 37,
  "time_alive": 1363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 25,
  "time_alive": 1408,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 46,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 63,
  "time_alive": 782,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 25,
  "time_alive": 1411,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 73,
  "time_alive": 464,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "f31f4702dc6548b7a5c9d381a8d81466",
  "placement": 4,
  "time_alive": 1496,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 26,
  "time_alive": 1405,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 15,
  "time_alive": 1461,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 62,
  "time_alive": 864,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 9,
  "time_alive": 1477,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 56,
  "time_alive": 922,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "a0c2c53e7fea4dcdaddc670967a09b65",
  "placement": 88,
  "time_alive": 126,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 89,
  "time_alive": 199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 95,
  "time_alive": 183,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 1,
  "time_alive": 1544,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 45,
  "time_alive": 1325,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 44,
  "time_alive": 1297,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "111e535f59cf453b9bc3aa47ef00f20b",
  "placement": 69,
  "time_alive": 484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 78,
  "time_alive": 583,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 1,
  "time_alive": 1539,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 50,
  "time_alive": 1165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 34,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 57,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "3856b7159cb24b068ae9334371883507",
  "placement": 50,
  "time_alive": 1234,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 72,
  "time_alive": 803,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 7,
  "time_alive": 1506,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 75,
  "time_alive": 586,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 18,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 74,
  "time_alive": 453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 27,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 95,
  "time_alive": 147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 29,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 8,
  "time_alive": 1506,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 16,
  "time_alive": 1447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 19,
  "time_alive": 1422,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 51,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 20,
  "time_alive": 1419,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 34,
  "time_alive": 1365,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 33,
  "time_alive": 1374,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 35,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "c90d79efcb4e4cceb626cc88ae40742e",
  "placement": 30,
  "time_alive": 1375,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 40,
  "time_alive": 1348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 45,
  "time_alive": 1322,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 56,
  "time_alive": 1056,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 8,
  "time_alive": 1483,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 29,
  "time_alive": 1376,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d865131855c741699ca16f4664327507",
  "placement": 25,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 38,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 24,
  "time_alive": 1406,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 85,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 7,
  "time_alive": 1483,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "4644adeab73246a0890eb5d7caf24b6e",
  "placement": 39,
  "time_alive": 1340,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 27,
  "time_alive": 1403,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 26,
  "time_alive": 1389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 25,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 30,
  "time_alive": 1389,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 90,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 31,
  "time_alive": 1390,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "8e3551ec51d342a1aca191673cd53490",
  "placement": 76,
  "time_alive": 736,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "8e3551ec51d342a1aca191673cd53490",
  "placement": 25,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "8e3551ec51d342a1aca191673cd53490",
  "placement": 44,
  "time_alive": 1252,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "8e3551ec51d342a1aca191673cd53490",
  "placement": 24,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "8e3551ec51d342a1aca191673cd53490",
  "placement": 36,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "8e3551ec51d342a1aca191673cd53490",
  "placement": 17,
  "time_alive": 1431,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 5,
  "time_alive": 1495,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 85,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 83,
  "time_alive": 328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 67,
  "time_alive": 832,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 26,
  "time_alive": 1394,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "2d6fd84077564124bcb325053eeb48cb",
  "placement": 14,
  "time_alive": 1442,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 24,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 22,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 69,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 71,
  "time_alive": 743,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 50,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "f8d85555af4d463f9e633107d56468af",
  "placement": 16,
  "time_alive": 1434,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 36,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 21,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 43,
  "time_alive": 1257,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 17,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 21,
  "time_alive": 1414,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "a75ed50c546a43a1be81edcdc7eafe07",
  "placement": 86,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 17,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 20,
  "time_alive": 1419,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 93,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 89,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 45,
  "time_alive": 1294,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "b150e70e72914a55b9adaab5df42dbcf",
  "placement": 44,
  "time_alive": 1326,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 52,
  "time_alive": 1223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 43,
  "time_alive": 1332,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 36,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 76,
  "time_alive": 606,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 27,
  "time_alive": 1393,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "1dd8bed6a0824581aa15f72cb1a0d6f2",
  "placement": 5,
  "time_alive": 1487,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 92,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 41,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 96,
  "time_alive": 127,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 58,
  "time_alive": 1102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 2,
  "time_alive": 1536,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "c95695e09728493e852418f211c78e28",
  "placement": 23,
  "time_alive": 1420,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 32,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 31,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 5,
  "time_alive": 1522,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 66,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 47,
  "time_alive": 1273,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "0e050186800a4ab9a51eb913b3f84e25",
  "placement": 33,
  "time_alive": 1373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 37,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 76,
  "time_alive": 707,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 42,
  "time_alive": 1264,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 19,
  "time_alive": 1429,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 54,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 22,
  "time_alive": 1421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 58,
  "time_alive": 1153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 74,
  "time_alive": 756,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 37,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 41,
  "time_alive": 1338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 38,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "e6d28f410cae4938b483614c50e47826",
  "placement": 13,
  "time_alive": 1451,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 81,
  "time_alive": 383,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 62,
  "time_alive": 1113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 7,
  "time_alive": 1512,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 74,
  "time_alive": 647,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 79,
  "time_alive": 401,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "c39bd6cf5f8a4cfebb4ff85e12dca213",
  "placement": 9,
  "time_alive": 1464,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 19,
  "time_alive": 1422,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 93,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 80,
  "time_alive": 388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 92,
  "time_alive": 135,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 14,
  "time_alive": 1445,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "48e06096147e4919b679dad024a02406",
  "placement": 90,
  "time_alive": 117,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "3f862a5163e74027beb36311c19047b8",
  "placement": 9,
  "time_alive": 1465,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "3f862a5163e74027beb36311c19047b8",
  "placement": 100,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "3f862a5163e74027beb36311c19047b8",
  "placement": 81,
  "time_alive": 386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "3f862a5163e74027beb36311c19047b8",
  "placement": 70,
  "time_alive": 771,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "3f862a5163e74027beb36311c19047b8",
  "placement": 40,
  "time_alive": 1331,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "3f862a5163e74027beb36311c19047b8",
  "placement": 45,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 53,
  "time_alive": 1211,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 38,
  "time_alive": 1349,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 54,
  "time_alive": 1073,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 40,
  "time_alive": 1343,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 70,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 42,
  "time_alive": 1336,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 34,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 87,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 89,
  "time_alive": 228,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 46,
  "time_alive": 1324,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 8,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "3051491640074e529154af24251526fb",
  "placement": 72,
  "time_alive": 459,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "f95497b26c2740b9b1e4ebc4ae3ca2b1",
  "placement": 3,
  "time_alive": 1510,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "f95497b26c2740b9b1e4ebc4ae3ca2b1",
  "placement": 35,
  "time_alive": 1360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "f95497b26c2740b9b1e4ebc4ae3ca2b1",
  "placement": 57,
  "time_alive": 1049,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "f95497b26c2740b9b1e4ebc4ae3ca2b1",
  "placement": 86,
  "time_alive": 242,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "f95497b26c2740b9b1e4ebc4ae3ca2b1",
  "placement": 87,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "f95497b26c2740b9b1e4ebc4ae3ca2b1",
  "placement": 81,
  "time_alive": 214,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d667be4d7a3f4dfc9c5a250a93bcf8e2",
  "placement": 43,
  "time_alive": 1341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d667be4d7a3f4dfc9c5a250a93bcf8e2",
  "placement": 80,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d667be4d7a3f4dfc9c5a250a93bcf8e2",
  "placement": 87,
  "time_alive": 288,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d667be4d7a3f4dfc9c5a250a93bcf8e2",
  "placement": 2,
  "time_alive": 1521,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d667be4d7a3f4dfc9c5a250a93bcf8e2",
  "placement": 63,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d667be4d7a3f4dfc9c5a250a93bcf8e2",
  "placement": 56,
  "time_alive": 1104,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 22,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 94,
  "time_alive": 188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 92,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 82,
  "time_alive": 373,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 5,
  "time_alive": 1517,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "37d1068fd9134f8ca161b027a6b021d6",
  "placement": 68,
  "time_alive": 513,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 67,
  "time_alive": 909,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 81,
  "time_alive": 484,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 35,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 64,
  "time_alive": 861,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 12,
  "time_alive": 1448,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 21,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 90,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 12,
  "time_alive": 1475,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 91,
  "time_alive": 215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 77,
  "time_alive": 563,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 83,
  "time_alive": 331,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "06b8361f18c14519945ddfa410e36110",
  "placement": 29,
  "time_alive": 1400,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "917bfba819c842fea0bac733e26bf1d6",
  "placement": 63,
  "time_alive": 1102,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "917bfba819c842fea0bac733e26bf1d6",
  "placement": 14,
  "time_alive": 1479,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "917bfba819c842fea0bac733e26bf1d6",
  "placement": 23,
  "time_alive": 1416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "917bfba819c842fea0bac733e26bf1d6",
  "placement": 34,
  "time_alive": 1368,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "917bfba819c842fea0bac733e26bf1d6",
  "placement": 58,
  "time_alive": 932,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 88,
  "time_alive": 211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 6,
  "time_alive": 1523,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 65,
  "time_alive": 712,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 79,
  "time_alive": 438,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 43,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "1978d7c87c4743709f0a391371e7b075",
  "placement": 64,
  "time_alive": 634,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 6,
  "time_alive": 1492,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 32,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 82,
  "time_alive": 347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 43,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 69,
  "time_alive": 520,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "a6f520b7c765457d99161be3df344f47",
  "placement": 76,
  "time_alive": 312,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 46,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 18,
  "time_alive": 1441,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 38,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 69,
  "time_alive": 783,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 49,
  "time_alive": 1258,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "11b86f4b5ab64efdaa9476791391723d",
  "placement": 70,
  "time_alive": 482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 56,
  "time_alive": 1187,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 36,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 24,
  "time_alive": 1415,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 68,
  "time_alive": 799,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 25,
  "time_alive": 1399,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "b27d369e71f04d2bb6433664a24c8718",
  "placement": 54,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d894b943e47e429880404f880eb3dac9",
  "placement": 85,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d894b943e47e429880404f880eb3dac9",
  "placement": 66,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d894b943e47e429880404f880eb3dac9",
  "placement": 19,
  "time_alive": 1455,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d894b943e47e429880404f880eb3dac9",
  "placement": 4,
  "time_alive": 1504,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d894b943e47e429880404f880eb3dac9",
  "placement": 76,
  "time_alive": 441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d894b943e47e429880404f880eb3dac9",
  "placement": 55,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 50,
  "time_alive": 1261,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 32,
  "time_alive": 1381,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 33,
  "time_alive": 1370,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 60,
  "time_alive": 840,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "dd1f2310a93b4b3693acdb437f60b289",
  "placement": 41,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 68,
  "time_alive": 901,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 23,
  "time_alive": 1411,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 53,
  "time_alive": 1080,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 57,
  "time_alive": 1118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 71,
  "time_alive": 508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "7626f7c885fc4eb9ac8ea2b2a33ba5ae",
  "placement": 65,
  "time_alive": 632,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 29,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 28,
  "time_alive": 1378,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 22,
  "time_alive": 1436,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 80,
  "time_alive": 405,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 41,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "2fb8992c662e411298ed0d0101e1da42",
  "placement": 85,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 49,
  "time_alive": 1273,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 56,
  "time_alive": 1184,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 97,
  "time_alive": 122,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 48,
  "time_alive": 1320,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 13,
  "time_alive": 1447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "54aaf20cfb0a4ba4ade959a258390b35",
  "placement": 38,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 65,
  "time_alive": 949,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 99,
  "time_alive": 125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 67,
  "time_alive": 681,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 44,
  "time_alive": 1327,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 59,
  "time_alive": 879,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "2fe98e6b52f14e7e904456092af67627",
  "placement": 67,
  "time_alive": 527,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 15,
  "time_alive": 1444,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 44,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 66,
  "time_alive": 700,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "ddf2ecd4c2d647e6a0189afe6d6131bb",
  "placement": 63,
  "time_alive": 863,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 97,
  "time_alive": 134,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 52,
  "time_alive": 1212,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 70,
  "time_alive": 615,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 39,
  "time_alive": 1343,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 75,
  "time_alive": 451,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d6a3e253723d482bb803bd96db4635fb",
  "placement": 12,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 69,
  "time_alive": 895,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 61,
  "time_alive": 1138,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 55,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 37,
  "time_alive": 1355,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 82,
  "time_alive": 352,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "8f4dd6cd70bf48c4b5fdbee1aee52c72",
  "placement": 6,
  "time_alive": 1483,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "4dfdd5db6c704f56aa53a5bca8bbb1f4",
  "placement": 42,
  "time_alive": 1342,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "4dfdd5db6c704f56aa53a5bca8bbb1f4",
  "placement": 54,
  "time_alive": 1201,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "4dfdd5db6c704f56aa53a5bca8bbb1f4",
  "placement": 73,
  "time_alive": 598,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "4dfdd5db6c704f56aa53a5bca8bbb1f4",
  "placement": 91,
  "time_alive": 143,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "4dfdd5db6c704f56aa53a5bca8bbb1f4",
  "placement": 72,
  "time_alive": 505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "4dfdd5db6c704f56aa53a5bca8bbb1f4",
  "placement": 89,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 62,
  "time_alive": 1068,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 67,
  "time_alive": 940,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 52,
  "time_alive": 1085,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 31,
  "time_alive": 1388,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 89,
  "time_alive": 178,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "bdfe79bcfca241fb98d42e9a4dd5ef8f",
  "placement": 74,
  "time_alive": 351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 35,
  "time_alive": 1377,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 73,
  "time_alive": 758,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 76,
  "time_alive": 475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 32,
  "time_alive": 1387,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 67,
  "time_alive": 567,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d33a3fd7c56d44d489c04ed6a60025e1",
  "placement": 66,
  "time_alive": 541,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 51,
  "time_alive": 1225,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 58,
  "time_alive": 1172,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 71,
  "time_alive": 614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 27,
  "time_alive": 1405,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 53,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "975c462cfd4f4f3e91939f1fe6bd4676",
  "placement": 36,
  "time_alive": 1367,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 80,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 51,
  "time_alive": 1239,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 26,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 47,
  "time_alive": 1324,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 64,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 34,
  "time_alive": 1371,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 64,
  "time_alive": 966,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 47,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 23,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 61,
  "time_alive": 1011,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 81,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 49,
  "time_alive": 1238,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 74,
  "time_alive": 767,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 89,
  "time_alive": 280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 15,
  "time_alive": 1475,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 59,
  "time_alive": 1078,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 48,
  "time_alive": 1264,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "dffa91a3f3c84e8eb653dbaf8469ac99",
  "placement": 83,
  "time_alive": 177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "b71b309750b14af6ba5adc4f2314117b",
  "placement": 48,
  "time_alive": 1285,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "b71b309750b14af6ba5adc4f2314117b",
  "placement": 64,
  "time_alive": 1076,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "b71b309750b14af6ba5adc4f2314117b",
  "placement": 88,
  "time_alive": 250,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "b71b309750b14af6ba5adc4f2314117b",
  "placement": 13,
  "time_alive": 1453,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "b71b309750b14af6ba5adc4f2314117b",
  "placement": 42,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "b71b309750b14af6ba5adc4f2314117b",
  "placement": 63,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 79,
  "time_alive": 429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 75,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 18,
  "time_alive": 1457,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 49,
  "time_alive": 1304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 65,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "7b348caae35e454599b90055f241f5d0",
  "placement": 48,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 54,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 42,
  "time_alive": 1336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 47,
  "time_alive": 1216,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 29,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 37,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "38044319899040eca9910bef4048b7d1",
  "placement": 59,
  "time_alive": 903,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 84,
  "time_alive": 294,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 77,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 90,
  "time_alive": 221,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 26,
  "time_alive": 1406,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 85,
  "time_alive": 289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 39,
  "time_alive": 1357,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 30,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 49,
  "time_alive": 1277,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 77,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 75,
  "time_alive": 617,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 68,
  "time_alive": 546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "4b2c69a69d064a0385be93b17765dd41",
  "placement": 71,
  "time_alive": 475,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "32ab90aa8d4f4a419e4065094295c843",
  "placement": 86,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "32ab90aa8d4f4a419e4065094295c843",
  "placement": 30,
  "time_alive": 1369,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "32ab90aa8d4f4a419e4065094295c843",
  "placement": 30,
  "time_alive": 1398,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "32ab90aa8d4f4a419e4065094295c843",
  "placement": 94,
  "time_alive": 128,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "32ab90aa8d4f4a419e4065094295c843",
  "placement": 88,
  "time_alive": 236,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "32ab90aa8d4f4a419e4065094295c843",
  "placement": 82,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "99bfef737fa24a35b3de866f40a9a99e",
  "placement": 44,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "99bfef737fa24a35b3de866f40a9a99e",
  "placement": 90,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "99bfef737fa24a35b3de866f40a9a99e",
  "placement": 46,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "99bfef737fa24a35b3de866f40a9a99e",
  "placement": 38,
  "time_alive": 1351,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "99bfef737fa24a35b3de866f40a9a99e",
  "placement": 55,
  "time_alive": 1059,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "99bfef737fa24a35b3de866f40a9a99e",
  "placement": 40,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 23,
  "time_alive": 1413,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 53,
  "time_alive": 1205,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 41,
  "time_alive": 1282,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "236c55adf54c4dda9b36457b1e09d9a1",
  "placement": 85,
  "time_alive": 256,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 31,
  "time_alive": 1381,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 88,
  "time_alive": 281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 48,
  "time_alive": 1205,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 83,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 78,
  "time_alive": 421,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 46,
  "time_alive": 1310,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "9942822dd25b409591a936ed3eb4c1ac",
  "placement": 41,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "9942822dd25b409591a936ed3eb4c1ac",
  "placement": 16,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "9942822dd25b409591a936ed3eb4c1ac",
  "placement": 94,
  "time_alive": 189,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "9942822dd25b409591a936ed3eb4c1ac",
  "placement": 90,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "9942822dd25b409591a936ed3eb4c1ac",
  "placement": 93,
  "time_alive": 130,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "9942822dd25b409591a936ed3eb4c1ac",
  "placement": 84,
  "time_alive": 176,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 71,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 71,
  "time_alive": 826,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 95,
  "time_alive": 120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 58,
  "time_alive": 908,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 77,
  "time_alive": 281,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 82,
  "time_alive": 348,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 96,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 54,
  "time_alive": 1182,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 46,
  "time_alive": 1281,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "a01613611d4b42bbb49900c321c5b21a",
  "placement": 35,
  "time_alive": 1367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 47,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 70,
  "time_alive": 850,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 86,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 65,
  "time_alive": 851,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 61,
  "time_alive": 812,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "5800b2c7cc6048a7b2276bd0682e1247",
  "placement": 73,
  "time_alive": 447,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 39,
  "time_alive": 1351,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 92,
  "time_alive": 227,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 79,
  "time_alive": 399,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 62,
  "time_alive": 923,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 77,
  "time_alive": 434,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "a9d697d0cc4c46c4a66f3adace9d993a",
  "placement": 91,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "85dead5e600741a3bce3b5177d64bbd6",
  "placement": 73,
  "time_alive": 769,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "85dead5e600741a3bce3b5177d64bbd6",
  "placement": 98,
  "time_alive": 153,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "85dead5e600741a3bce3b5177d64bbd6",
  "placement": 51,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "85dead5e600741a3bce3b5177d64bbd6",
  "placement": 42,
  "time_alive": 1337,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "85dead5e600741a3bce3b5177d64bbd6",
  "placement": 66,
  "time_alive": 585,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "85dead5e600741a3bce3b5177d64bbd6",
  "placement": 57,
  "time_alive": 1044,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "85cbb37bb8d1432b9c4f17644bf27e45",
  "placement": 50,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "85cbb37bb8d1432b9c4f17644bf27e45",
  "placement": 55,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "85cbb37bb8d1432b9c4f17644bf27e45",
  "placement": 40,
  "time_alive": 1312,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "85cbb37bb8d1432b9c4f17644bf27e45",
  "placement": 55,
  "time_alive": 1154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "85cbb37bb8d1432b9c4f17644bf27e45",
  "placement": 92,
  "time_alive": 150,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "85cbb37bb8d1432b9c4f17644bf27e45",
  "placement": 80,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 66,
  "time_alive": 915,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 68,
  "time_alive": 934,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 60,
  "time_alive": 920,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 84,
  "time_alive": 298,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 91,
  "time_alive": 153,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "e50dab5db03c4913b60768d9a3c61bf2",
  "placement": 87,
  "time_alive": 133,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "1e55928d29004ea2b0ef9210193d932f",
  "placement": 83,
  "time_alive": 296,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "1e55928d29004ea2b0ef9210193d932f",
  "placement": 97,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "1e55928d29004ea2b0ef9210193d932f",
  "placement": 39,
  "time_alive": 1316,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "1e55928d29004ea2b0ef9210193d932f",
  "placement": 73,
  "time_alive": 682,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "1e55928d29004ea2b0ef9210193d932f",
  "placement": 95,
  "time_alive": 101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "da6a014ffea84452bdc9473c5bd4507e",
  "placement": 94,
  "time_alive": 171,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "da6a014ffea84452bdc9473c5bd4507e",
  "placement": 60,
  "time_alive": 1144,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "da6a014ffea84452bdc9473c5bd4507e",
  "placement": 34,
  "time_alive": 1362,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "da6a014ffea84452bdc9473c5bd4507e",
  "placement": 98,
  "time_alive": 102,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "da6a014ffea84452bdc9473c5bd4507e",
  "placement": 62,
  "time_alive": 712,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "da6a014ffea84452bdc9473c5bd4507e",
  "placement": 75,
  "time_alive": 316,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "009083cdeca548f69c88bc85c0700e05",
  "placement": 61,
  "time_alive": 1078,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "009083cdeca548f69c88bc85c0700e05",
  "placement": 79,
  "time_alive": 629,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "009083cdeca548f69c88bc85c0700e05",
  "placement": 72,
  "time_alive": 602,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "009083cdeca548f69c88bc85c0700e05",
  "placement": 53,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "009083cdeca548f69c88bc85c0700e05",
  "placement": 80,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "009083cdeca548f69c88bc85c0700e05",
  "placement": 78,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "8f8c9775799944129f5e4a09f45e5dbe",
  "placement": 96,
  "time_alive": 136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "8f8c9775799944129f5e4a09f45e5dbe",
  "placement": 83,
  "time_alive": 456,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "8f8c9775799944129f5e4a09f45e5dbe",
  "placement": 31,
  "time_alive": 1390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "8f8c9775799944129f5e4a09f45e5dbe",
  "placement": 60,
  "time_alive": 1030,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "8f8c9775799944129f5e4a09f45e5dbe",
  "placement": 51,
  "time_alive": 1222,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "8f8c9775799944129f5e4a09f45e5dbe",
  "placement": 52,
  "time_alive": 1215,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 59,
  "time_alive": 1140,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 78,
  "time_alive": 649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 59,
  "time_alive": 940,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 96,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 94,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "5abf4b841c90412387344ce9ca8125b1",
  "placement": 62,
  "time_alive": 748,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 55,
  "time_alive": 1208,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 91,
  "time_alive": 254,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 64,
  "time_alive": 772,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 72,
  "time_alive": 729,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 86,
  "time_alive": 283,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0d647c94-b96e-4873-9b0c-2acaff5e7921",
  "team_id": "d19bfdbd7f014487b1fd7803828437b5",
  "placement": 79,
  "time_alive": 259,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "e802d3f914404c21afdc176269306cc8",
  "placement": 98,
  "time_alive": 114,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "e802d3f914404c21afdc176269306cc8",
  "placement": 72,
  "time_alive": 783,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "e802d3f914404c21afdc176269306cc8",
  "placement": 88,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "99161b526d594bb39d773154f9826534",
  "placement": 57,
  "time_alive": 1177,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "99161b526d594bb39d773154f9826534",
  "placement": 84,
  "time_alive": 437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "99161b526d594bb39d773154f9826534",
  "placement": 68,
  "time_alive": 635,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "f398241092054cef90d45ec228cb9c4f",
  "placement": 77,
  "time_alive": 607,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "f398241092054cef90d45ec228cb9c4f",
  "placement": 48,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "f398241092054cef90d45ec228cb9c4f",
  "placement": 78,
  "time_alive": 420,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1c7e9d3d-2f53-4cd0-a79e-6934851ef3a6",
  "team_id": "f398241092054cef90d45ec228cb9c4f",
  "placement": 93,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "021f666d-653d-4b80-ac63-2a7694ce8507",
  "team_id": "f398241092054cef90d45ec228cb9c4f",
  "placement": 84,
  "time_alive": 293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "161ccd12-0112-4ebb-817d-4b5dc892f91a",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 93,
  "time_alive": 174,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "1fbf214d-393e-4e5f-98cf-80367336fc65",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 69,
  "time_alive": 893,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0b324df6-1604-48a8-bd77-372d1c90d89a",
  "team_id": "3c36e0f699a945ebba6b72e9e99bf5df",
  "placement": 84,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 7,
  "time_alive": 1474,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 3,
  "time_alive": 1530,
  "elims": 7,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 5,
  "time_alive": 1482,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 7,
  "time_alive": 1521,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 14,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "2710f646cfbf41048672df6131ad7662",
  "placement": 14,
  "time_alive": 1439,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 10,
  "time_alive": 1471,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 2,
  "time_alive": 1540,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 22,
  "time_alive": 1397,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 3,
  "time_alive": 1537,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 58,
  "time_alive": 1081,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "5d5c5a92d64d4183af81877c7c2d7549",
  "placement": 15,
  "time_alive": 1437,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 3,
  "time_alive": 1529,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 13,
  "time_alive": 1482,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 8,
  "time_alive": 1458,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 15,
  "time_alive": 1473,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 31,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "5027366496ce4254931a2e2f02b1af32",
  "placement": 5,
  "time_alive": 1512,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 64,
  "time_alive": 949,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 14,
  "time_alive": 1478,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1520,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 95,
  "time_alive": 113,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 85,
  "time_alive": 209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "14496f8a53d5490b82a2356e03fcd8ba",
  "placement": 1,
  "time_alive": 1533,
  "elims": 9,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 21,
  "time_alive": 1428,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 5,
  "time_alive": 1526,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 9,
  "time_alive": 1457,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 21,
  "time_alive": 1446,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 2,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "7b2516c47db348cda12b482cef9e2841",
  "placement": 83,
  "time_alive": 124,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 1,
  "time_alive": 1542,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 40,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 49,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 31,
  "time_alive": 1398,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 7,
  "time_alive": 1477,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "11f41e1b75784130a7aef0dc37610d7f",
  "placement": 8,
  "time_alive": 1480,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 29,
  "time_alive": 1396,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 9,
  "time_alive": 1498,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 55,
  "time_alive": 1117,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 11,
  "time_alive": 1486,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 3,
  "time_alive": 1525,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "be3c36c5676f4d088bb326afb0ccfa1d",
  "placement": 4,
  "time_alive": 1517,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 33,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 10,
  "time_alive": 1491,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 14,
  "time_alive": 1421,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 19,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 13,
  "time_alive": 1441,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "4c5630fee6ce4242b7d86d498ae507df",
  "placement": 52,
  "time_alive": 1146,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 34,
  "time_alive": 1378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 1,
  "time_alive": 1540,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 86,
  "time_alive": 343,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 24,
  "time_alive": 1427,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 36,
  "time_alive": 1358,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "fb376e2a135d484c980637764020ec3a",
  "placement": 76,
  "time_alive": 218,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 51,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 30,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 2,
  "time_alive": 1520,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 89,
  "time_alive": 200,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 4,
  "time_alive": 1504,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "9bfff2827d024147b93c655a204981d1",
  "placement": 44,
  "time_alive": 1265,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 74,
  "time_alive": 563,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 39,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 92,
  "time_alive": 249,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 36,
  "time_alive": 1379,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 1,
  "time_alive": 1528,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "9c0aebee92fc4471ab8101bbe12a1b0d",
  "placement": 10,
  "time_alive": 1461,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 22,
  "time_alive": 1426,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 19,
  "time_alive": 1426,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 76,
  "time_alive": 589,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 9,
  "time_alive": 1512,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 63,
  "time_alive": 1044,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "8f008e74e8624a18ab99ef9757866d56",
  "placement": 37,
  "time_alive": 1350,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 82,
  "time_alive": 345,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 12,
  "time_alive": 1483,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 31,
  "time_alive": 1366,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 55,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 22,
  "time_alive": 1402,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "85692ee96a4249a3a516cc044111d00a",
  "placement": 26,
  "time_alive": 1391,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 41,
  "time_alive": 1350,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 29,
  "time_alive": 1368,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 11,
  "time_alive": 1452,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 23,
  "time_alive": 1433,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 51,
  "time_alive": 1155,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "b7816fc40edf4eb6bd0dd3fe1f726994",
  "placement": 6,
  "time_alive": 1498,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 35,
  "time_alive": 1369,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 18,
  "time_alive": 1437,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 74,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 74,
  "time_alive": 427,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 6,
  "time_alive": 1492,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "222923b8d36f49aa84803ba2d25822af",
  "placement": 9,
  "time_alive": 1478,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 52,
  "time_alive": 1224,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 6,
  "time_alive": 1519,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 16,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 30,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "b3555c6b364c4a52b307a1348dec797b",
  "placement": 22,
  "time_alive": 1405,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 71,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 17,
  "time_alive": 1446,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 36,
  "time_alive": 1347,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 10,
  "time_alive": 1489,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 23,
  "time_alive": 1402,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "d0cbce1f4a6f492aaaba261c58a91f7b",
  "placement": 17,
  "time_alive": 1432,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 27,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 58,
  "time_alive": 1129,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 24,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 18,
  "time_alive": 1456,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 35,
  "time_alive": 1363,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "fc6dc757683549a2bc0fb8f2eeb10c81",
  "placement": 20,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 26,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 15,
  "time_alive": 1464,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 83,
  "time_alive": 366,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 17,
  "time_alive": 1456,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 47,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "bb9a1aa597a2499182e19e5d892e14df",
  "placement": 23,
  "time_alive": 1403,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 95,
  "time_alive": 165,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 25,
  "time_alive": 1406,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 32,
  "time_alive": 1364,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 25,
  "time_alive": 1424,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 26,
  "time_alive": 1388,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "d0c8c025e19f42e09e188f3a26f01004",
  "placement": 7,
  "time_alive": 1481,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 5,
  "time_alive": 1505,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 35,
  "time_alive": 1337,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 40,
  "time_alive": 1315,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 52,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 9,
  "time_alive": 1465,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "78d1fba3e9f345709797e69e2c3e946b",
  "placement": 72,
  "time_alive": 338,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 70,
  "time_alive": 669,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 22,
  "time_alive": 1410,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 35,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 5,
  "time_alive": 1532,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 93,
  "time_alive": 105,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "f3792d155ca74fa3acbdfd9a1d77c764",
  "placement": 45,
  "time_alive": 1248,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 62,
  "time_alive": 1123,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 7,
  "time_alive": 1515,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 3,
  "time_alive": 1510,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 39,
  "time_alive": 1376,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 92,
  "time_alive": 112,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "28d7f88eb0f84fbd8d8f2d2a5a141a48",
  "placement": 77,
  "time_alive": 193,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 31,
  "time_alive": 1386,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 64,
  "time_alive": 980,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 34,
  "time_alive": 1362,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 65,
  "time_alive": 631,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 11,
  "time_alive": 1443,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "0986e46b1b66482c8d83d7629c6f3217",
  "placement": 30,
  "time_alive": 1372,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 46,
  "time_alive": 1326,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 37,
  "time_alive": 1328,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 45,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 6,
  "time_alive": 1524,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 29,
  "time_alive": 1380,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "72657a43cf974cf0a13f36d46331e88d",
  "placement": 33,
  "time_alive": 1358,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 6,
  "time_alive": 1490,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 50,
  "time_alive": 1204,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 89,
  "time_alive": 303,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 57,
  "time_alive": 1014,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 10,
  "time_alive": 1450,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "23bb5915c5c44551a0cc3132992d8623",
  "placement": 29,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 24,
  "time_alive": 1419,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 23,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 20,
  "time_alive": 1401,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 81,
  "time_alive": 291,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 16,
  "time_alive": 1438,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "d2f00d4d262a41ae91203cb896423a57",
  "placement": 35,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 13,
  "time_alive": 1457,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 32,
  "time_alive": 1357,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 17,
  "time_alive": 1414,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 51,
  "time_alive": 1235,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "18fdd46bf07549538dbbebc6a4165f44",
  "placement": 21,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 20,
  "time_alive": 1429,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 55,
  "time_alive": 1190,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 15,
  "time_alive": 1417,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 67,
  "time_alive": 547,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 37,
  "time_alive": 1348,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "253cd9f9928f4bfb9fd623a769ce2b71",
  "placement": 34,
  "time_alive": 1357,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 9,
  "time_alive": 1473,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 82,
  "time_alive": 389,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 43,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 20,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 43,
  "time_alive": 1318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "7e2bf67b311b4e9b85455bce4d88b2b1",
  "placement": 27,
  "time_alive": 1388,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 14,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 60,
  "time_alive": 1100,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 18,
  "time_alive": 1410,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 27,
  "time_alive": 1416,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 46,
  "time_alive": 1290,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "ad36f2ba80f54b50a793e185c18183d6",
  "placement": 28,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 8,
  "time_alive": 1473,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 79,
  "time_alive": 487,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 38,
  "time_alive": 1328,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 63,
  "time_alive": 656,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 28,
  "time_alive": 1381,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "41608dc495b7492698ec008bf9fe3cec",
  "placement": 25,
  "time_alive": 1391,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 39,
  "time_alive": 1354,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 84,
  "time_alive": 318,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 88,
  "time_alive": 336,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 2,
  "time_alive": 1542,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 24,
  "time_alive": 1400,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "ce33e5bf52974e7990f8ab8da37b62d0",
  "placement": 39,
  "time_alive": 1306,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 79,
  "time_alive": 417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 34,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 53,
  "time_alive": 1162,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 1,
  "time_alive": 1542,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 66,
  "time_alive": 770,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "1ffd3a6825bc4a64a9dfa47dc24a63d0",
  "placement": 61,
  "time_alive": 744,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 16,
  "time_alive": 1442,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 65,
  "time_alive": 970,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 95,
  "time_alive": 191,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 48,
  "time_alive": 1307,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 5,
  "time_alive": 1493,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "5c62918b3d0c41fca96ba84258286021",
  "placement": 63,
  "time_alive": 569,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 17,
  "time_alive": 1441,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 28,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 25,
  "time_alive": 1384,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 43,
  "time_alive": 1349,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 54,
  "time_alive": 1120,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "c5ce222826e140d2baf35b86610c3496",
  "placement": 19,
  "time_alive": 1417,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 11,
  "time_alive": 1465,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 45,
  "time_alive": 1245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 10,
  "time_alive": 1452,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 28,
  "time_alive": 1412,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 42,
  "time_alive": 1327,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "38e3ef2e33e34432a4619ec35500199f",
  "placement": 56,
  "time_alive": 880,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "bbb1a52637bd47b4b04c35a2c5324df7",
  "placement": 83,
  "time_alive": 311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "bbb1a52637bd47b4b04c35a2c5324df7",
  "placement": 46,
  "time_alive": 1227,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "bbb1a52637bd47b4b04c35a2c5324df7",
  "placement": 41,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "bbb1a52637bd47b4b04c35a2c5324df7",
  "placement": 8,
  "time_alive": 1520,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "bbb1a52637bd47b4b04c35a2c5324df7",
  "placement": 25,
  "time_alive": 1395,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "bbb1a52637bd47b4b04c35a2c5324df7",
  "placement": 73,
  "time_alive": 319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 80,
  "time_alive": 390,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 8,
  "time_alive": 1498,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 28,
  "time_alive": 1379,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 12,
  "time_alive": 1484,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 74,
  "time_alive": 483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "bf14960331834ee59f960bc698dca94f",
  "placement": 85,
  "time_alive": 118,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 4,
  "time_alive": 1512,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 63,
  "time_alive": 919,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 62,
  "time_alive": 723,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 59,
  "time_alive": 1081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "769a91f78c41409db17d45375792713b",
  "placement": 47,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 73,
  "time_alive": 591,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 74,
  "time_alive": 666,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 50,
  "time_alive": 1191,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 8,
  "time_alive": 1469,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "5a401c24cbed493bb82d34767be175c1",
  "placement": 21,
  "time_alive": 1412,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 32,
  "time_alive": 1379,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 4,
  "time_alive": 1528,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 57,
  "time_alive": 1089,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 58,
  "time_alive": 878,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 32,
  "time_alive": 1372,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "7731bc6b134745c58efeb10e37f81ef0",
  "placement": 51,
  "time_alive": 1158,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 19,
  "time_alive": 1432,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 26,
  "time_alive": 1389,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 37,
  "time_alive": 1344,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 61,
  "time_alive": 845,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 44,
  "time_alive": 1310,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "48125054fb4f4892b8b3d1dfa0691713",
  "placement": 49,
  "time_alive": 1229,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 65,
  "time_alive": 880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 66,
  "time_alive": 941,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 48,
  "time_alive": 1194,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 64,
  "time_alive": 643,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 69,
  "time_alive": 546,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "f8fecd8352104527b1978d32390633e2",
  "placement": 12,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 30,
  "time_alive": 1394,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 16,
  "time_alive": 1454,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 73,
  "time_alive": 661,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 33,
  "time_alive": 1392,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 79,
  "time_alive": 374,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "4e7f5242382c44298b4d2ee53f3a4214",
  "placement": 46,
  "time_alive": 1244,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 78,
  "time_alive": 481,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 90,
  "time_alive": 226,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 4,
  "time_alive": 1487,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "09ee78fb-b3d8-440a-9c4f-588cc5e10410",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 73,
  "time_alive": 445,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "10e604b9-c285-4197-9d9a-1382e4537511",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 38,
  "time_alive": 1346,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "0324ecef-9144-465e-9810-20920a4cd7ce",
  "team_id": "c6a2eb33a68a46bb86b0c0d2001fa452",
  "placement": 24,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01ba51c2-00d9-4e6f-ba66-e01c2c90eea1",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 50,
  "time_alive": 1305,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "01c55f02-857d-45e6-946d-ed9da531e079",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 70,
  "time_alive": 877,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "05b89ebc-406c-4396-80c3-0a5abd580a0c",
  "team_id": "de7480d7b7a64c1ead5f2e24c21d5bb9",
  "placement": 7,
  "time_alive": 1463,
  "elims": 1,
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
    