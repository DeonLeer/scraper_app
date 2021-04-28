const axios = require('axios')
    const gamesplayed = [
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 9,
  "time_alive": 1416,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 31,
  "time_alive": 619,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 26,
  "time_alive": 891,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 5,
  "time_alive": 1438,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 21,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 32,
  "time_alive": 225,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 32,
  "time_alive": 228,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 32,
  "time_alive": 184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 29,
  "time_alive": 221,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "3c4e8219851d4dc097fe17246799e745:a570df2f58964a0499b0ec44d36d8740:d1809556b0884c0793c5d59987606825",
  "placement": 32,
  "time_alive": 155,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 25,
  "time_alive": 861,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 33,
  "time_alive": 367,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 29,
  "time_alive": 851,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 21,
  "time_alive": 1148,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 23,
  "time_alive": 1018,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 27,
  "time_alive": 850,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 23,
  "time_alive": 1146,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 12,
  "time_alive": 1375,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 15,
  "time_alive": 1344,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 19,
  "time_alive": 1238,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 13,
  "time_alive": 1392,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "121db46c3e75478aa405131e5923eff1:1473aaaa8b4944e4bc7891972a0ce2ab:842fc135b4d64cada5c14f83aef3139e",
  "placement": 10,
  "time_alive": 1402,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 26,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 30,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 24,
  "time_alive": 1085,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 30,
  "time_alive": 743,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 22,
  "time_alive": 1109,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 29,
  "time_alive": 716,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 27,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 30,
  "time_alive": 360,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 3,
  "time_alive": 1471,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 24,
  "time_alive": 1128,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 30,
  "time_alive": 217,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "b85ce5205f364ef8adde7b6b8a5ed255:ca40a7ce3d774759b19b5d77cc635d28:d1e71a46c63c4613bea04fb799e6a14c",
  "placement": 25,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 17,
  "time_alive": 1329,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 25,
  "time_alive": 945,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 21,
  "time_alive": 1112,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 23,
  "time_alive": 1130,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 17,
  "time_alive": 1358,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 16,
  "time_alive": 1354,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 27,
  "time_alive": 549,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 11,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 25,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 28,
  "time_alive": 398,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "4692d0e61fa94561bf4401d6e66369ff:5baf908041114bccaff845a6194144ce:d460c1acb698427490fda7c1df156b52",
  "placement": 30,
  "time_alive": 371,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 15,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 29,
  "time_alive": 874,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 19,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 28,
  "time_alive": 824,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 32,
  "time_alive": 118,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 32,
  "time_alive": 358,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 28,
  "time_alive": 830,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 31,
  "time_alive": 355,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 20,
  "time_alive": 1289,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 13,
  "time_alive": 1377,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 9,
  "time_alive": 1410,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "5ca97121817d42d5a6cd4cebf8593168:8fe31c970fc04a06a0c9cc9731114593:c970f88c543f45889f90b2b19f71b5f0",
  "placement": 26,
  "time_alive": 545,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 20,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 23,
  "time_alive": 1034,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 28,
  "time_alive": 937,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 29,
  "time_alive": 753,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 24,
  "time_alive": 993,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 21,
  "time_alive": 1229,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 26,
  "time_alive": 873,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 14,
  "time_alive": 1366,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 23,
  "time_alive": 1128,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 17,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 25,
  "time_alive": 928,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "7ca389b0ab1540cabd358aac2683d61a:7cc3b1fdeb45459a9c2ca0b7e1b2094f:fb3b1a21d7aa4696be1a726a3db5b490",
  "placement": 29,
  "time_alive": 467,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 23,
  "time_alive": 1153,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 28,
  "time_alive": 890,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 26,
  "time_alive": 1003,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 16,
  "time_alive": 1349,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 11,
  "time_alive": 1395,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 18,
  "time_alive": 1309,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 17,
  "time_alive": 1339,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 30,
  "time_alive": 586,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 31,
  "time_alive": 251,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 24,
  "time_alive": 1102,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "230b233bb9964f7b82d11377d1131f10:3c6f86a9dbe346e5874cbec4e274a504:5d4d0b85997a4fc081aa14bdb3341811",
  "placement": 21,
  "time_alive": 1163,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "63f8d521-6f75-42b6-8693-f9f82835e990",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 28,
  "time_alive": 767,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 24,
  "time_alive": 997,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 33,
  "time_alive": 203,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 24,
  "time_alive": 1126,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 27,
  "time_alive": 877,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 28,
  "time_alive": 759,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1280570b-87b7-45ab-8e34-44e4af80a535",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 29,
  "time_alive": 817,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b23a7242-50cb-4d7c-a26e-58533aea2034",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 29,
  "time_alive": 431,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "539bbd95-118e-4bd7-b83a-22896fd20254",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 21,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7cc14977-ebf6-4d0d-9f79-5904055cfa3b",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 26,
  "time_alive": 836,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4ae74ffc-4f90-4e40-9400-81fc82455c74",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 21,
  "time_alive": 1211,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "072ce672-5166-4aa5-827a-9542fb40e8c6",
  "team_id": "03cd59eac4cc431fb813dd055bbfb3df:4e70d413f0914d57a6b07f9a7085849e:c091c592713045c28c720808fb09da51",
  "placement": 27,
  "time_alive": 522,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "2267a704-7e81-4548-b344-c033f41bc062",
  "team_id": "28d01ab288de4e358874079ef06cb238:a06489247a0d467cb61515693d092942:dc63b09dbf9c4f88a12846972fd6c94e",
  "placement": 32,
  "time_alive": 799,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "953821fc-d074-48d4-a30d-10e62a46da7f",
  "team_id": "28d01ab288de4e358874079ef06cb238:a06489247a0d467cb61515693d092942:dc63b09dbf9c4f88a12846972fd6c94e",
  "placement": 14,
  "time_alive": 1366,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "9678f8e0-3981-4e1a-9c91-bd791b8c1cf2",
  "team_id": "28d01ab288de4e358874079ef06cb238:a06489247a0d467cb61515693d092942:dc63b09dbf9c4f88a12846972fd6c94e",
  "placement": 26,
  "time_alive": 843,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "5d32fbaa-cda5-4a12-aab4-ee8250087d08",
  "team_id": "28d01ab288de4e358874079ef06cb238:a06489247a0d467cb61515693d092942:dc63b09dbf9c4f88a12846972fd6c94e",
  "placement": 19,
  "time_alive": 1198,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "537123f7-15a5-40da-8c1b-ea5f143442be",
  "team_id": "28d01ab288de4e358874079ef06cb238:a06489247a0d467cb61515693d092942:dc63b09dbf9c4f88a12846972fd6c94e",
  "placement": 22,
  "time_alive": 1180,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1526,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 6,
  "time_alive": 1493,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1482,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 4,
  "time_alive": 1492,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1505,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 3,
  "time_alive": 1454,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 4,
  "time_alive": 1469,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 5,
  "time_alive": 1484,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 8,
  "time_alive": 1485,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 17,
  "time_alive": 1302,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 29,
  "time_alive": 265,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "23c11c6a35dd4b36a7c71845098209f0:780c8202899642eeae42283b437f3d1a:c3b1898a728844808067252350e5288a",
  "placement": 4,
  "time_alive": 1485,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1564,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 7,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 8,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 3,
  "time_alive": 1522,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 21,
  "time_alive": 1169,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1341,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 31,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 1,
  "time_alive": 1530,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 15,
  "time_alive": 1287,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 11,
  "time_alive": 1370,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 2,
  "time_alive": 1495,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "14172e753af34ab4abe3c2de6348bc23:3bd7fe98024f4e819bc8fbfaecbe3102:bf042e83c8554e3a95d782bf28de7212",
  "placement": 12,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 16,
  "time_alive": 1406,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 17,
  "time_alive": 1361,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 5,
  "time_alive": 1455,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1550,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 11,
  "time_alive": 1446,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 6,
  "time_alive": 1399,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 33,
  "time_alive": 291,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 2,
  "time_alive": 1530,
  "elims": 14,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 21,
  "time_alive": 1178,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 4,
  "time_alive": 1432,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 8,
  "time_alive": 1420,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "09fda54b7d47471a95f3874f62989c3e:827abb1cd9fb4618991425c2d3ba9b76:d7338873ddcb48d5b4a23bd1def0ecb5",
  "placement": 6,
  "time_alive": 1451,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1521,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 25,
  "time_alive": 1008,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 4,
  "time_alive": 1464,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 22,
  "time_alive": 1064,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 16,
  "time_alive": 1418,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 18,
  "time_alive": 1308,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 6,
  "time_alive": 1450,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 13,
  "time_alive": 1401,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1556,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 3,
  "time_alive": 1435,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 4,
  "time_alive": 1482,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "1eb778fb83264db38d40f1fdc0a2cd60:44dbb37558e74f0abdbbc8a8b31a78de:b5eded1141724d66920d69e2e7127cbb",
  "placement": 1,
  "time_alive": 1500,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 7,
  "time_alive": 1496,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 18,
  "time_alive": 1345,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 9,
  "time_alive": 1388,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 1,
  "time_alive": 1550,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1484,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 10,
  "time_alive": 1366,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 26,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 3,
  "time_alive": 1503,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 6,
  "time_alive": 1502,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 12,
  "time_alive": 1352,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 10,
  "time_alive": 1399,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "1e023f12d8dc4b2eb75aab3fe3dd8514:2d91ad40c7384c8a9c12c4c295450d78:b0687775cb14439799d0120f53d67778",
  "placement": 8,
  "time_alive": 1439,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 1,
  "time_alive": 1564,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 9,
  "time_alive": 1457,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 2,
  "time_alive": 1507,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 15,
  "time_alive": 1391,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 12,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 24,
  "time_alive": 895,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 8,
  "time_alive": 1418,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 19,
  "time_alive": 1227,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 29,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 5,
  "time_alive": 1420,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 11,
  "time_alive": 1396,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "51da8a03128f464cb570a55e83c9708f:5f56664808d24570957871f23e6baa67:e09609bb50fb4ff6bbf106d7c49d267e",
  "placement": 13,
  "time_alive": 1389,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 26,
  "time_alive": 944,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 11,
  "time_alive": 1441,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 18,
  "time_alive": 1224,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 21,
  "time_alive": 1143,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 7,
  "time_alive": 1492,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1479,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 17,
  "time_alive": 1332,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 4,
  "time_alive": 1487,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 10,
  "time_alive": 1428,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 25,
  "time_alive": 840,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 1,
  "time_alive": 1495,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "3aba78cf9e644273807c36b6185fd400:57d89f18a34a4358b701e9f84dcbfcb2:8ea703588b014b8b86d9c5c32ae1a523",
  "placement": 18,
  "time_alive": 1334,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 8,
  "time_alive": 1479,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 1,
  "time_alive": 1545,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 1,
  "time_alive": 1507,
  "elims": 18,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 8,
  "time_alive": 1480,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 20,
  "time_alive": 1231,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 28,
  "time_alive": 522,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 19,
  "time_alive": 1254,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 9,
  "time_alive": 1446,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 20,
  "time_alive": 1227,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 15,
  "time_alive": 1308,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 12,
  "time_alive": 1393,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "1ea4f0a90a3b4ad6871164e32e592b68:5439066c9a744fa3a0dc406de48aebe9:5f8f382e4ff640089d9702e9b5bbc885",
  "placement": 28,
  "time_alive": 844,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 13,
  "time_alive": 1426,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 3,
  "time_alive": 1535,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 7,
  "time_alive": 1441,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 11,
  "time_alive": 1441,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 2,
  "time_alive": 1521,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 21,
  "time_alive": 1187,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 16,
  "time_alive": 1343,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 16,
  "time_alive": 1366,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 4,
  "time_alive": 1532,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 9,
  "time_alive": 1385,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 14,
  "time_alive": 1372,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "0dd1ecfa67db48c29d6ba65e1b795e30:24838f8bd1794d25a7d491c175cde134:8a45b95121bd40b9aa916a2349601c74",
  "placement": 27,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 9,
  "time_alive": 1470,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 24,
  "time_alive": 1015,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 21,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 6,
  "time_alive": 1483,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1521,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 25,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 1,
  "time_alive": 1513,
  "elims": 13,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 7,
  "time_alive": 1464,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 30,
  "time_alive": 693,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 16,
  "time_alive": 1308,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 15,
  "time_alive": 1359,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "02bbb6907acd449695c973ebf9b12b0e:0f390cff5a5241b8b8a6667f8bfe8d65:5a3728830d834bd78307cfe968ce374f",
  "placement": 24,
  "time_alive": 961,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 33,
  "time_alive": 99,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 16,
  "time_alive": 1387,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 13,
  "time_alive": 1345,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 27,
  "time_alive": 922,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 4,
  "time_alive": 1508,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 23,
  "time_alive": 980,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 3,
  "time_alive": 1492,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 21,
  "time_alive": 1182,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 24,
  "time_alive": 1073,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 1,
  "time_alive": 1472,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 6,
  "time_alive": 1446,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "616cb69e8c8b4f45a831ea392f97c8e3:7dfdfc8bd60246f6844ba076cdb22de7:fa81291771cf4b90ae1b444d727df46e",
  "placement": 21,
  "time_alive": 1196,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 21,
  "time_alive": 1191,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 20,
  "time_alive": 1174,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 6,
  "time_alive": 1450,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 9,
  "time_alive": 1469,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 15,
  "time_alive": 1419,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 7,
  "time_alive": 1386,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 14,
  "time_alive": 1369,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 26,
  "time_alive": 846,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 9,
  "time_alive": 1473,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 30,
  "time_alive": 176,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 3,
  "time_alive": 1483,
  "elims": 11,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "1f8478d659a24107b0c693d279d81b95:1fe3dc94d16b41f1a976ff51b41e0be9:4b919532dca140eda4d686d945872a03",
  "placement": 32,
  "time_alive": 105,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 23,
  "time_alive": 1040,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 31,
  "time_alive": 665,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 16,
  "time_alive": 1306,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 5,
  "time_alive": 1492,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 3,
  "time_alive": 1517,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 20,
  "time_alive": 1285,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 12,
  "time_alive": 1379,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 6,
  "time_alive": 1478,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 7,
  "time_alive": 1501,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 22,
  "time_alive": 1122,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 21,
  "time_alive": 1141,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "09ffbbbabddf44799ca25c1736d790cb:23b619c0f2f7462191b903bd29c34ac6:a1fd4005c38b4378ad41efe521ad3244",
  "placement": 3,
  "time_alive": 1497,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 15,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1425,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 23,
  "time_alive": 1064,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 24,
  "time_alive": 1054,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 23,
  "time_alive": 1126,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 8,
  "time_alive": 1382,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 2,
  "time_alive": 1513,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 15,
  "time_alive": 1383,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 9,
  "time_alive": 1400,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "3736de3c0eb043649fac15ec1025ff08:6f3ebc481092450aaf883aa49722914f:8f260e254f1243d384f8eb55003b3a43",
  "placement": 20,
  "time_alive": 1237,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 28,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 27,
  "time_alive": 887,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 10,
  "time_alive": 1370,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 30,
  "time_alive": 612,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 10,
  "time_alive": 1453,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 19,
  "time_alive": 1300,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 18,
  "time_alive": 1320,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 14,
  "time_alive": 1393,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 2,
  "time_alive": 1556,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 28,
  "time_alive": 401,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 22,
  "time_alive": 1134,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "009c49d180014ac6bab2c1f6800ea89d:8319abff1f80414c851ed5cc1408b82c:8e66bee5c50b44869a16e3d59c270894",
  "placement": 2,
  "time_alive": 1500,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 19,
  "time_alive": 1232,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 5,
  "time_alive": 1503,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 12,
  "time_alive": 1352,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 23,
  "time_alive": 1059,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 17,
  "time_alive": 1381,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 17,
  "time_alive": 1333,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 7,
  "time_alive": 1430,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 10,
  "time_alive": 1415,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 18,
  "time_alive": 1267,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 14,
  "time_alive": 1321,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 13,
  "time_alive": 1377,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "304249ea73af4b17b738e5e67fcbc0ed:769b86414a9c4eb894275fd958905deb:e474081cb012445cbfe8fec307d02853",
  "placement": 7,
  "time_alive": 1449,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 4,
  "time_alive": 1537,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 2,
  "time_alive": 1545,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 26,
  "time_alive": 931,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 25,
  "time_alive": 1019,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 14,
  "time_alive": 1424,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 29,
  "time_alive": 487,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 28,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 8,
  "time_alive": 1461,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 3,
  "time_alive": 1535,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 19,
  "time_alive": 1287,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 28,
  "time_alive": 739,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "12b1427326894d4ba7a66d0eb05ae2fb:91fc3dc6d497443996cf3d6c447db25f:95b05297f0dc41778a6e37f9c19a8fd9",
  "placement": 26,
  "time_alive": 853,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 10,
  "time_alive": 1458,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 4,
  "time_alive": 1511,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 11,
  "time_alive": 1352,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 14,
  "time_alive": 1410,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 24,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 30,
  "time_alive": 454,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 27,
  "time_alive": 881,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 11,
  "time_alive": 1412,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 14,
  "time_alive": 1379,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 23,
  "time_alive": 1115,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 5,
  "time_alive": 1447,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb:14caafa7dc964c28b80096bcd5b38e30:1e1a068ecb0449ae9c0dac4b9a0af813",
  "placement": 14,
  "time_alive": 1369,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 27,
  "time_alive": 908,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 8,
  "time_alive": 1475,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 14,
  "time_alive": 1327,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 7,
  "time_alive": 1480,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 9,
  "time_alive": 1459,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 16,
  "time_alive": 1335,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 9,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 31,
  "time_alive": 328,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 25,
  "time_alive": 892,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 29,
  "time_alive": 389,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 18,
  "time_alive": 1277,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "befb0c173cd242d982d355078cf82202:d3d25f74cbf846ec9359446bfa92f637:d53176f73a294fcd85f0ad5eb42dd780",
  "placement": 9,
  "time_alive": 1437,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 31,
  "time_alive": 874,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 33,
  "time_alive": 246,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 22,
  "time_alive": 1090,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 29,
  "time_alive": 734,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 32,
  "time_alive": 134,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 9,
  "time_alive": 1382,
  "elims": 12,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 22,
  "time_alive": 1131,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 22,
  "time_alive": 1147,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 5,
  "time_alive": 1515,
  "elims": 16,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 31,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 7,
  "time_alive": 1429,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "0cc57f46c65e41fba21fed5ddfa27590:7ac9362818984d8a86c863487f6cbf1b:e814bb4f3d76466f8d19db02db7d8743",
  "placement": 30,
  "time_alive": 224,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 3,
  "time_alive": 1539,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 14,
  "time_alive": 1399,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 29,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 17,
  "time_alive": 1350,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 27,
  "time_alive": 664,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 2,
  "time_alive": 1479,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 25,
  "time_alive": 1004,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 18,
  "time_alive": 1323,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 16,
  "time_alive": 1285,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 7,
  "time_alive": 1411,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 26,
  "time_alive": 969,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "47759f160f6644c2a735b626a6fab849:4d892d4c07944b60b01a6da65a22ed21:626ef1bd708b4a3abcafd4caa43b629a",
  "placement": 17,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 11,
  "time_alive": 1438,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 21,
  "time_alive": 1143,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 24,
  "time_alive": 1026,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 12,
  "time_alive": 1420,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 13,
  "time_alive": 1426,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 12,
  "time_alive": 1357,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 10,
  "time_alive": 1391,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 12,
  "time_alive": 1405,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 11,
  "time_alive": 1422,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 21,
  "time_alive": 1179,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 19,
  "time_alive": 1174,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "3ac14c44c55844f786d337418d30c6d5:88e9cba819cf4580b7d4d45f343dac31:ed1260a4238d4028bad11c5dc92efe18",
  "placement": 15,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 12,
  "time_alive": 1433,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 28,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 20,
  "time_alive": 1133,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 19,
  "time_alive": 1250,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 18,
  "time_alive": 1371,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 14,
  "time_alive": 1341,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 5,
  "time_alive": 1462,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 20,
  "time_alive": 1214,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 13,
  "time_alive": 1387,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 8,
  "time_alive": 1407,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 17,
  "time_alive": 1342,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "a3a4b1255bd3442889bdfaa99defcdc8:f69a9fe64d6f4e6fa9adfe2bb3a6524c:f75b5b38bd944c7cb2880116633ef447",
  "placement": 23,
  "time_alive": 1107,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 18,
  "time_alive": 1359,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 15,
  "time_alive": 1388,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 30,
  "time_alive": 867,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 10,
  "time_alive": 1446,
  "elims": 8,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 6,
  "time_alive": 1504,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 31,
  "time_alive": 293,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 15,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 32,
  "time_alive": 160,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 31,
  "time_alive": 235,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 13,
  "time_alive": 1329,
  "elims": 10,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 31,
  "time_alive": 165,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "a683b4c7d8c7448abd4c7479f35db5a6:ca12074e4e3b42f8974784d08daa5773:ecb3215f62f0432c801165b372008d9e",
  "placement": 22,
  "time_alive": 1128,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 20,
  "time_alive": 1192,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 23,
  "time_alive": 1090,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 31,
  "time_alive": 844,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 26,
  "time_alive": 936,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 25,
  "time_alive": 787,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 5,
  "time_alive": 1409,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 20,
  "time_alive": 1252,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 25,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 19,
  "time_alive": 1257,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 10,
  "time_alive": 1380,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 20,
  "time_alive": 1169,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "3e999b2dbb0b46a490289ba783142bff:c3fed2a8f12f4d39ada7a8aeb784285a:c4624cd17f5e41c684ed4d834025ea76",
  "placement": 5,
  "time_alive": 1452,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 17,
  "time_alive": 1387,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 32,
  "time_alive": 274,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 25,
  "time_alive": 1005,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 28,
  "time_alive": 839,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 33,
  "time_alive": 113,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 27,
  "time_alive": 585,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 23,
  "time_alive": 1021,
  "elims": 7,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 33,
  "time_alive": 154,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 32,
  "time_alive": 220,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 2,
  "time_alive": 1472,
  "elims": 9,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 24,
  "time_alive": 1129,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "00305d46885743f4b3bae606acb1af38:3fb44adba289439b84d40b5bc8964122:42e5c65826bd4e0c99f98431ab9baa1b",
  "placement": 25,
  "time_alive": 862,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 25,
  "time_alive": 994,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 10,
  "time_alive": 1449,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 17,
  "time_alive": 1249,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 31,
  "time_alive": 524,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 19,
  "time_alive": 1356,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 4,
  "time_alive": 1448,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 30,
  "time_alive": 864,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 23,
  "time_alive": 1036,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 28,
  "time_alive": 870,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 24,
  "time_alive": 848,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 23,
  "time_alive": 1130,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "12d40f1284c84b6bb5d1225365c586de:3747a0e217984e399aefc25c5cfb16dd:7837f574990c4f1e991e5783f02d83d3",
  "placement": 11,
  "time_alive": 1404,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 29,
  "time_alive": 893,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 13,
  "time_alive": 1414,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 19,
  "time_alive": 1218,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 33,
  "time_alive": 90,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 31,
  "time_alive": 282,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 11,
  "time_alive": 1364,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 21,
  "time_alive": 1176,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 17,
  "time_alive": 1364,
  "elims": 5,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 27,
  "time_alive": 878,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 20,
  "time_alive": 1238,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 30,
  "time_alive": 237,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "35a8327c7d584226befe0bf73d02085a:3f005870c1f84b93afa5cee13a5e0cbc:5db6a109e91f46ecb682cd696158d4de",
  "placement": 10,
  "time_alive": 1407,
  "elims": 4,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 30,
  "time_alive": 882,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 30,
  "time_alive": 754,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 32,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 13,
  "time_alive": 1412,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1158,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 22,
  "time_alive": 1143,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 11,
  "time_alive": 1388,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 28,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 26,
  "time_alive": 884,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 6,
  "time_alive": 1416,
  "elims": 6,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 32,
  "time_alive": 151,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "5b804cf9aec94180821570a64c165cf4:5c322612c2664c0cbadb6fdfc9dde04e:673b0fd295ff4476bb317b74fa8b3e7b",
  "placement": 31,
  "time_alive": 219,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 32,
  "time_alive": 490,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 22,
  "time_alive": 1092,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 27,
  "time_alive": 903,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 20,
  "time_alive": 1181,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 30,
  "time_alive": 428,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 13,
  "time_alive": 1350,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 13,
  "time_alive": 1376,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 24,
  "time_alive": 879,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 23,
  "time_alive": 1098,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 26,
  "time_alive": 773,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 27,
  "time_alive": 837,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "3aea55016b414fd29d7f879971f51e4c:5dd3674a930d4538bdf998759b95c0cc:96db3b5ecf164b03bb1ed353d22b896f",
  "placement": 29,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 24,
  "time_alive": 1040,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 19,
  "time_alive": 1182,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 28,
  "time_alive": 886,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 16,
  "time_alive": 1382,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 26,
  "time_alive": 713,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 26,
  "time_alive": 587,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 32,
  "time_alive": 834,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 29,
  "time_alive": 467,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 22,
  "time_alive": 1132,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 27,
  "time_alive": 452,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 16,
  "time_alive": 1351,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "675950bde95a49379dc37e298194cf1b:d3811903df1e4d78b3353fa08a9810c5:fc1134cb08b945e9a05708fc5414f63f",
  "placement": 16,
  "time_alive": 1351,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 22,
  "time_alive": 1184,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 26,
  "time_alive": 957,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 15,
  "time_alive": 1312,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 32,
  "time_alive": 110,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 29,
  "time_alive": 472,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 33,
  "time_alive": 190,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 29,
  "time_alive": 866,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 30,
  "time_alive": 449,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "1615c24a-b896-4ddc-a259-44dec05b4b67",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 17,
  "time_alive": 1278,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "82b1c5d0-b40b-4ba6-a730-f1cd22de77e9",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 18,
  "time_alive": 1298,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "56da2e96-8815-4798-a62c-d200a78af6fb",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 25,
  "time_alive": 998,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "7d0b5c5e-555b-4754-8d32-d30f9774e394",
  "team_id": "1f827dae0bcc4c8dac23e5b7e3d97c9d:735a3fb26e8847f0a1fcdeb0d9bd2d31:ba0da8c5a6514d85bfcf3303eb364daf",
  "placement": 19,
  "time_alive": 1247,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "b835af4f-53e2-4f69-89a2-4fc7a84eeeee",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 14,
  "time_alive": 1418,
  "elims": 3,
  "mode": 3
 },
 {
  "game_id": "10e6abd4-9782-4ce3-9c63-daeb56ed7ea1",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 29,
  "time_alive": 859,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "239f8060-c8e6-4ab4-998f-bb973bb20296",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 33,
  "time_alive": 631,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "608857f6-33a0-4c03-97d4-1126353d1bbb",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 18,
  "time_alive": 1253,
  "elims": 1,
  "mode": 3
 },
 {
  "game_id": "4184e467-ca6b-40b7-92bd-936955843da5",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 28,
  "time_alive": 633,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "f5036820-a3a3-43bb-8700-d9438b681941",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 32,
  "time_alive": 269,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "67748f68-7f01-4d6c-876a-7f371f314e5d",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 24,
  "time_alive": 1012,
  "elims": 2,
  "mode": 3
 },
 {
  "game_id": "624aa336-02bc-4703-b098-0e94a6960e25",
  "team_id": "068279b8a5c04a8b8102b908f64d8daf:9e24ee30d65d440f8d03a4946a9f1d43:d1cc556c6eac4ec883de52bebc0bd2e9",
  "placement": 27,
  "time_alive": 589,
  "elims": 0,
  "mode": 3
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 64,
  "time_alive": 1235,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 16,
  "time_alive": 1785,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 4,
  "time_alive": 1444,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 37,
  "time_alive": 1289,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 26,
  "time_alive": 1828,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "fedad43d2b0e430fb9bc8d528d27e5e7",
  "placement": 12,
  "time_alive": 2033,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 25,
  "time_alive": 1649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 5,
  "time_alive": 1934,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 8,
  "time_alive": 1407,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 26,
  "time_alive": 1313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 39,
  "time_alive": 1764,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "9fca471401a743cbbb71ea31dc252473",
  "placement": 4,
  "time_alive": 2141,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 12,
  "time_alive": 1725,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 41,
  "time_alive": 1531,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 11,
  "time_alive": 1396,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 10,
  "time_alive": 1375,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 10,
  "time_alive": 1904,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "c479584e9e694a4aa0eea0aec0dd09a7",
  "placement": 23,
  "time_alive": 1994,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "cac98cff201c4719972c450901d178fa",
  "placement": 2,
  "time_alive": 2000,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "cac98cff201c4719972c450901d178fa",
  "placement": 42,
  "time_alive": 1209,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "cac98cff201c4719972c450901d178fa",
  "placement": 17,
  "time_alive": 1337,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "cac98cff201c4719972c450901d178fa",
  "placement": 2,
  "time_alive": 2056,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "cac98cff201c4719972c450901d178fa",
  "placement": 14,
  "time_alive": 2030,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 1,
  "time_alive": 1924,
  "elims": 14,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 24,
  "time_alive": 1715,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 63,
  "time_alive": 989,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 19,
  "time_alive": 1334,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 72,
  "time_alive": 942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "0bd56698f13049b89e3ab24ddd0218c8",
  "placement": 31,
  "time_alive": 1969,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 29,
  "time_alive": 1626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 9,
  "time_alive": 1853,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 74,
  "time_alive": 740,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 9,
  "time_alive": 1381,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 13,
  "time_alive": 1882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "587314e3583a47bca08876950ba704d9",
  "placement": 19,
  "time_alive": 2005,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 10,
  "time_alive": 1726,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 31,
  "time_alive": 1699,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 39,
  "time_alive": 1277,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 14,
  "time_alive": 1347,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 47,
  "time_alive": 1649,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "6e1edaf701654a7bb31640aaae3be50e",
  "placement": 3,
  "time_alive": 2155,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 7,
  "time_alive": 1736,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 17,
  "time_alive": 1762,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 17,
  "time_alive": 1369,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 27,
  "time_alive": 1313,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 79,
  "time_alive": 470,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "ec3b2e63fda94157b159ebf243ede1c4",
  "placement": 9,
  "time_alive": 2082,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 4,
  "time_alive": 1861,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 49,
  "time_alive": 1483,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 55,
  "time_alive": 1071,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 13,
  "time_alive": 1358,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 17,
  "time_alive": 1857,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "47f70d3f350e4fdabc25803460bfee81",
  "placement": 11,
  "time_alive": 2034,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 44,
  "time_alive": 1542,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 14,
  "time_alive": 1825,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 16,
  "time_alive": 1370,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 47,
  "time_alive": 1184,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 1,
  "time_alive": 2056,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "d581fe5f6dcd4fadbd73c6295594ff1f",
  "placement": 61,
  "time_alive": 1241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "cbcfa42755ba4bbb8c73d47b42020efc",
  "placement": 24,
  "time_alive": 1654,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "cbcfa42755ba4bbb8c73d47b42020efc",
  "placement": 3,
  "time_alive": 1975,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "cbcfa42755ba4bbb8c73d47b42020efc",
  "placement": 78,
  "time_alive": 658,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "cbcfa42755ba4bbb8c73d47b42020efc",
  "placement": 5,
  "time_alive": 1410,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "cbcfa42755ba4bbb8c73d47b42020efc",
  "placement": 22,
  "time_alive": 1850,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "cbcfa42755ba4bbb8c73d47b42020efc",
  "placement": 42,
  "time_alive": 1890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 28,
  "time_alive": 1629,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 6,
  "time_alive": 1908,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 80,
  "time_alive": 622,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 51,
  "time_alive": 1148,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 9,
  "time_alive": 1921,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "097f2fda0f744277bafe11a52a9f6890",
  "placement": 17,
  "time_alive": 2012,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 25,
  "time_alive": 1713,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 18,
  "time_alive": 1367,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 46,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 5,
  "time_alive": 1988,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "2dfc71015e5349ee938b57a94d205587",
  "placement": 8,
  "time_alive": 2082,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 20,
  "time_alive": 1661,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 26,
  "time_alive": 1704,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 58,
  "time_alive": 1046,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 49,
  "time_alive": 1169,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 18,
  "time_alive": 1855,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "0d4bdb5b52144c58ae8197898c9cbc79",
  "placement": 27,
  "time_alive": 1978,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 3,
  "time_alive": 1913,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 47,
  "time_alive": 1504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 81,
  "time_alive": 582,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 29,
  "time_alive": 1311,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 6,
  "time_alive": 1950,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "124d9c3453a54be09ac92c6917fc9e1f",
  "placement": 26,
  "time_alive": 1984,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 23,
  "time_alive": 1717,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 85,
  "time_alive": 492,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 11,
  "time_alive": 1366,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 77,
  "time_alive": 537,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "3d2983f2c7a14ca78ae011d4ed561b5a",
  "placement": 22,
  "time_alive": 1994,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 78,
  "time_alive": 803,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 69,
  "time_alive": 1108,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 49,
  "time_alive": 1169,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 1,
  "time_alive": 1440,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 53,
  "time_alive": 1555,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "daff9a4a3b0142e5ae58077a3ee1b4cc",
  "placement": 5,
  "time_alive": 2125,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 9,
  "time_alive": 1727,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 80,
  "time_alive": 674,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 75,
  "time_alive": 682,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 60,
  "time_alive": 1057,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 7,
  "time_alive": 1934,
  "elims": 12,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "803ae2cf372b422498943ea8a215d75e",
  "placement": 49,
  "time_alive": 1754,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 55,
  "time_alive": 1411,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 48,
  "time_alive": 1504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 6,
  "time_alive": 1418,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 25,
  "time_alive": 1313,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 15,
  "time_alive": 1880,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "b8b8a03bab8e4bbcbbc7befeac1f0351",
  "placement": 18,
  "time_alive": 2006,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 6,
  "time_alive": 1774,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 70,
  "time_alive": 1094,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 12,
  "time_alive": 1392,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 6,
  "time_alive": 1404,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 84,
  "time_alive": 314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "05e17ab2d6aa4642813ddd4efa8adbbb",
  "placement": 39,
  "time_alive": 1907,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 18,
  "time_alive": 1691,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 18,
  "time_alive": 1752,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 38,
  "time_alive": 1285,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 43,
  "time_alive": 1255,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 59,
  "time_alive": 1532,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "209917540fbf4740a913898eec12b86b",
  "placement": 24,
  "time_alive": 1989,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "7b055f9946b0483d911c6dbafd8ab425",
  "placement": 17,
  "time_alive": 1695,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "7b055f9946b0483d911c6dbafd8ab425",
  "placement": 10,
  "time_alive": 1845,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "7b055f9946b0483d911c6dbafd8ab425",
  "placement": 94,
  "time_alive": 164,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "7b055f9946b0483d911c6dbafd8ab425",
  "placement": 95,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "7b055f9946b0483d911c6dbafd8ab425",
  "placement": 36,
  "time_alive": 1768,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "7b055f9946b0483d911c6dbafd8ab425",
  "placement": 34,
  "time_alive": 1967,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 87,
  "time_alive": 341,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 28,
  "time_alive": 1702,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 34,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 22,
  "time_alive": 1316,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 19,
  "time_alive": 1854,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "38c4a6e1e2ac45648311b029612e4f4e",
  "placement": 40,
  "time_alive": 1905,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 26,
  "time_alive": 1645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 46,
  "time_alive": 1504,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 9,
  "time_alive": 1404,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 33,
  "time_alive": 1301,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 20,
  "time_alive": 1854,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "b9a5ed3ddddd4b6f974546bc23690156",
  "placement": 35,
  "time_alive": 1942,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 51,
  "time_alive": 1449,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 64,
  "time_alive": 1263,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 72,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 4,
  "time_alive": 1420,
  "elims": 6,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 42,
  "time_alive": 1753,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "1482276f1ce94d19aae85ff90bd8639e",
  "placement": 6,
  "time_alive": 2118,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 11,
  "time_alive": 1726,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 36,
  "time_alive": 1666,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 59,
  "time_alive": 1037,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 86,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 3,
  "time_alive": 2020,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "19489f2d33e74d9982f69155225743d1",
  "placement": 68,
  "time_alive": 836,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 91,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 22,
  "time_alive": 1724,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 23,
  "time_alive": 1353,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 24,
  "time_alive": 1314,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 29,
  "time_alive": 1809,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "e8c74c7fc67e44518a263a64b2da2135",
  "placement": 38,
  "time_alive": 1914,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 75,
  "time_alive": 936,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 1,
  "time_alive": 2000,
  "elims": 8,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 54,
  "time_alive": 1075,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 85,
  "time_alive": 430,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 27,
  "time_alive": 1817,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "4d21ad5b186a43fd990b8215d1328d0f",
  "placement": 47,
  "time_alive": 1786,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 34,
  "time_alive": 1596,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 40,
  "time_alive": 1636,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 36,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 7,
  "time_alive": 1393,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 30,
  "time_alive": 1799,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "0dca6353f8fb4f77a6751e5baf82ef37",
  "placement": 52,
  "time_alive": 1725,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 68,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 34,
  "time_alive": 1681,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 24,
  "time_alive": 1352,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 23,
  "time_alive": 1314,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 33,
  "time_alive": 1783,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "200a8b64b3e74dcab169d7c0da35788d",
  "placement": 28,
  "time_alive": 1976,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 86,
  "time_alive": 378,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 92,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 67,
  "time_alive": 902,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 2,
  "time_alive": 1440,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 11,
  "time_alive": 1901,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "91aa308676d04069862bcefa7a16d7a6",
  "placement": 21,
  "time_alive": 2002,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "6d5f7466b22b4a55a75d52562bead029",
  "placement": 14,
  "time_alive": 1715,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "6d5f7466b22b4a55a75d52562bead029",
  "placement": 8,
  "time_alive": 1878,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "6d5f7466b22b4a55a75d52562bead029",
  "placement": 30,
  "time_alive": 1334,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "6d5f7466b22b4a55a75d52562bead029",
  "placement": 35,
  "time_alive": 1300,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "6d5f7466b22b4a55a75d52562bead029",
  "placement": 82,
  "time_alive": 360,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "6d5f7466b22b4a55a75d52562bead029",
  "placement": 76,
  "time_alive": 646,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791",
  "placement": 15,
  "time_alive": 1705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791",
  "placement": 57,
  "time_alive": 1335,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791",
  "placement": 25,
  "time_alive": 1349,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791",
  "placement": 21,
  "time_alive": 1320,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791",
  "placement": 60,
  "time_alive": 1511,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "07e9f9f4c8014a44944b6cbf47079791",
  "placement": 20,
  "time_alive": 2004,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 35,
  "time_alive": 1593,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 61,
  "time_alive": 1288,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 21,
  "time_alive": 1356,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 57,
  "time_alive": 1085,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 81,
  "time_alive": 365,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "243065cbdbcc4a9ebd34cc0de49c60b9",
  "placement": 1,
  "time_alive": 2208,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 2,
  "time_alive": 1924,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 51,
  "time_alive": 1475,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 73,
  "time_alive": 745,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 44,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 49,
  "time_alive": 1609,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "ade2bf24eb7f42188069ddaab62da007",
  "placement": 13,
  "time_alive": 2031,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 56,
  "time_alive": 1402,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 60,
  "time_alive": 1311,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 2,
  "time_alive": 1464,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 12,
  "time_alive": 1363,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 65,
  "time_alive": 1323,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "7dd7a9a7f9ba4c4d844cdfd3c1a346fa",
  "placement": 25,
  "time_alive": 1985,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "38ac25227ca4448993901a1fd2625e9b",
  "placement": 5,
  "time_alive": 1848,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "38ac25227ca4448993901a1fd2625e9b",
  "placement": 29,
  "time_alive": 1701,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "38ac25227ca4448993901a1fd2625e9b",
  "placement": 52,
  "time_alive": 1099,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "38ac25227ca4448993901a1fd2625e9b",
  "placement": 31,
  "time_alive": 1308,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "38ac25227ca4448993901a1fd2625e9b",
  "placement": 35,
  "time_alive": 1778,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "38ac25227ca4448993901a1fd2625e9b",
  "placement": 29,
  "time_alive": 1974,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 61,
  "time_alive": 1292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 13,
  "time_alive": 1827,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 45,
  "time_alive": 1198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 50,
  "time_alive": 1152,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 34,
  "time_alive": 1783,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "a2c54f4570d2482396c5510c2c2926ce",
  "placement": 7,
  "time_alive": 2116,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 27,
  "time_alive": 1631,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 53,
  "time_alive": 1362,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 29,
  "time_alive": 1334,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 96,
  "time_alive": 131,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 40,
  "time_alive": 1762,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "80b6dd1cb3374f2fbe5f0efbb524e77f",
  "placement": 16,
  "time_alive": 2013,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 16,
  "time_alive": 1696,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 79,
  "time_alive": 705,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 3,
  "time_alive": 1446,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 79,
  "time_alive": 617,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 45,
  "time_alive": 1718,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "eaf7ee6dc18741dc943b5b3cf6072613",
  "placement": 81,
  "time_alive": 466,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 21,
  "time_alive": 1660,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 39,
  "time_alive": 1649,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 95,
  "time_alive": 108,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 20,
  "time_alive": 1321,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 86,
  "time_alive": 290,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "c0386fc8d34b469a9dc61cbb264183a8",
  "placement": 30,
  "time_alive": 1972,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 59,
  "time_alive": 1354,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 7,
  "time_alive": 1892,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 14,
  "time_alive": 1380,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 42,
  "time_alive": 1270,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 83,
  "time_alive": 325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "d5c73f20d6304c6d97539dd5e29c3338",
  "placement": 78,
  "time_alive": 554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 23,
  "time_alive": 1659,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 20,
  "time_alive": 1747,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 82,
  "time_alive": 568,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 83,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 23,
  "time_alive": 1848,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "53b4b03239554665bd906363189d2d9c",
  "placement": 50,
  "time_alive": 1741,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 67,
  "time_alive": 1188,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 44,
  "time_alive": 1514,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 5,
  "time_alive": 1423,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 74,
  "time_alive": 793,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 28,
  "time_alive": 1810,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "3c34bd162b964456b4286e8f3a4b2bb3",
  "placement": 70,
  "time_alive": 805,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "2052728a300c4df78ea6557849164312",
  "placement": 89,
  "time_alive": 272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "2052728a300c4df78ea6557849164312",
  "placement": 55,
  "time_alive": 1350,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "2052728a300c4df78ea6557849164312",
  "placement": 13,
  "time_alive": 1383,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "2052728a300c4df78ea6557849164312",
  "placement": 84,
  "time_alive": 454,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "2052728a300c4df78ea6557849164312",
  "placement": 24,
  "time_alive": 1833,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "2052728a300c4df78ea6557849164312",
  "placement": 33,
  "time_alive": 1968,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 96,
  "time_alive": 154,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 97,
  "time_alive": 162,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 20,
  "time_alive": 1359,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 87,
  "time_alive": 367,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 52,
  "time_alive": 1559,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "df6f4b54227545c6aa0e7d0238e28162",
  "placement": 15,
  "time_alive": 2021,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "1dd038a262814a2da71f9f620f182848",
  "placement": 8,
  "time_alive": 1732,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "1dd038a262814a2da71f9f620f182848",
  "placement": 67,
  "time_alive": 1184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "1dd038a262814a2da71f9f620f182848",
  "placement": 60,
  "time_alive": 1034,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "1dd038a262814a2da71f9f620f182848",
  "placement": 73,
  "time_alive": 806,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "1dd038a262814a2da71f9f620f182848",
  "placement": 14,
  "time_alive": 1882,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "1dd038a262814a2da71f9f620f182848",
  "placement": 41,
  "time_alive": 1899,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 19,
  "time_alive": 1684,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 19,
  "time_alive": 1749,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 88,
  "time_alive": 398,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 59,
  "time_alive": 1082,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 58,
  "time_alive": 1538,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "d0b41961bcb6483e9af6f567931a135e",
  "placement": 69,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 66,
  "time_alive": 1211,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 15,
  "time_alive": 1787,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 48,
  "time_alive": 1169,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 16,
  "time_alive": 1341,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 56,
  "time_alive": 1553,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "212208c844e145e0bb69874ec438f080",
  "placement": 63,
  "time_alive": 1039,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 38,
  "time_alive": 1585,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 65,
  "time_alive": 1237,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 44,
  "time_alive": 1201,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 8,
  "time_alive": 1391,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 50,
  "time_alive": 1587,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "a7c903e72e0c44e4be2e9c99e66296cc",
  "placement": 44,
  "time_alive": 1795,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 60,
  "time_alive": 1328,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 58,
  "time_alive": 1325,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 1,
  "time_alive": 1464,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 52,
  "time_alive": 1136,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 91,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "ef0106457410430bbbd501bf4930a54e",
  "placement": 48,
  "time_alive": 1771,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 71,
  "time_alive": 1115,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 63,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 7,
  "time_alive": 1415,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 30,
  "time_alive": 1308,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 76,
  "time_alive": 657,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "6cd488031c9047c7a4e819ee2fae77b5",
  "placement": 43,
  "time_alive": 1888,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 93,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 43,
  "time_alive": 1514,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 41,
  "time_alive": 1228,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 18,
  "time_alive": 1337,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 89,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "f50574a1cfa2421eb49ef6873ddb4119",
  "placement": 87,
  "time_alive": 184,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "600f620c04df4822b7e4d6f0d7d3b4ce",
  "placement": 88,
  "time_alive": 313,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "600f620c04df4822b7e4d6f0d7d3b4ce",
  "placement": 94,
  "time_alive": 175,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "600f620c04df4822b7e4d6f0d7d3b4ce",
  "placement": 83,
  "time_alive": 556,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "600f620c04df4822b7e4d6f0d7d3b4ce",
  "placement": 38,
  "time_alive": 1286,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "600f620c04df4822b7e4d6f0d7d3b4ce",
  "placement": 4,
  "time_alive": 1995,
  "elims": 5,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "600f620c04df4822b7e4d6f0d7d3b4ce",
  "placement": 64,
  "time_alive": 1002,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 95,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 77,
  "time_alive": 824,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 89,
  "time_alive": 307,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 45,
  "time_alive": 1199,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 21,
  "time_alive": 1852,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "76cd448896b243e6a083f2d0bddde1da",
  "placement": 10,
  "time_alive": 2081,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 48,
  "time_alive": 1455,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 66,
  "time_alive": 1196,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 15,
  "time_alive": 1371,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 69,
  "time_alive": 855,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 44,
  "time_alive": 1720,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "ec60ed6b5a4948a8b9196f551c707be3",
  "placement": 60,
  "time_alive": 1393,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 49,
  "time_alive": 1452,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 27,
  "time_alive": 1702,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 22,
  "time_alive": 1355,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d2010070f055409d970571f7e049df80",
  "placement": 77,
  "time_alive": 727,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 70,
  "time_alive": 1123,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 76,
  "time_alive": 835,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 35,
  "time_alive": 1299,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 68,
  "time_alive": 868,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 25,
  "time_alive": 1832,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "07169d79b42145de903f0d6a3b88d565",
  "placement": 57,
  "time_alive": 1514,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 30,
  "time_alive": 1620,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 71,
  "time_alive": 1039,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 65,
  "time_alive": 958,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 15,
  "time_alive": 1344,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 92,
  "time_alive": 139,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "c55df86e222a49099d51c89c9c8c5f54",
  "placement": 84,
  "time_alive": 246,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 90,
  "time_alive": 243,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 56,
  "time_alive": 1063,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 61,
  "time_alive": 1008,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 48,
  "time_alive": 1611,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "6e8aa261ca904c5689c4363cc7573d2e",
  "placement": 2,
  "time_alive": 2208,
  "elims": 3,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "77a9eb84d3e846da9aacee025e48911a",
  "placement": 45,
  "time_alive": 1522,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "77a9eb84d3e846da9aacee025e48911a",
  "placement": 59,
  "time_alive": 1321,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "77a9eb84d3e846da9aacee025e48911a",
  "placement": 31,
  "time_alive": 1319,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "77a9eb84d3e846da9aacee025e48911a",
  "placement": 3,
  "time_alive": 1435,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "77a9eb84d3e846da9aacee025e48911a",
  "placement": 87,
  "time_alive": 260,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "77a9eb84d3e846da9aacee025e48911a",
  "placement": 82,
  "time_alive": 292,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 13,
  "time_alive": 1724,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 81,
  "time_alive": 667,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 69,
  "time_alive": 864,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 70,
  "time_alive": 819,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 31,
  "time_alive": 1793,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "8c7890be7842455d9ce7b8dbcecd0baf",
  "placement": 72,
  "time_alive": 724,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 69,
  "time_alive": 1156,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 12,
  "time_alive": 1827,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 90,
  "time_alive": 248,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 48,
  "time_alive": 1177,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 43,
  "time_alive": 1736,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "00f47fceecad4fc6b995e01a296069dc",
  "placement": 45,
  "time_alive": 1795,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 33,
  "time_alive": 1596,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 42,
  "time_alive": 1526,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 46,
  "time_alive": 1194,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 28,
  "time_alive": 1311,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 54,
  "time_alive": 1554,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "cafffd8a0bb440649ee3b8f57f26de68",
  "placement": 66,
  "time_alive": 951,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438",
  "placement": 80,
  "time_alive": 701,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438",
  "placement": 4,
  "time_alive": 1937,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438",
  "placement": 61,
  "time_alive": 1028,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438",
  "placement": 94,
  "time_alive": 161,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438",
  "placement": 67,
  "time_alive": 1293,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "24588d8e3abc4b49a1185f4a57bb8438",
  "placement": 79,
  "time_alive": 503,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 46,
  "time_alive": 1471,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 93,
  "time_alive": 245,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 37,
  "time_alive": 1297,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 54,
  "time_alive": 1101,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 16,
  "time_alive": 1865,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "db2d80e83ea140f1843915276db2c9dc",
  "placement": 59,
  "time_alive": 1415,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 22,
  "time_alive": 1659,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 21,
  "time_alive": 1727,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 77,
  "time_alive": 660,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 82,
  "time_alive": 458,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 63,
  "time_alive": 1463,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "d82bbe3019c04e789f949c081f2dea87",
  "placement": 62,
  "time_alive": 1147,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 57,
  "time_alive": 1373,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 89,
  "time_alive": 407,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 19,
  "time_alive": 1362,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 39,
  "time_alive": 1280,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 46,
  "time_alive": 1685,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "b80ca8ce98c94dad9e831e27cf6f87b3",
  "placement": 71,
  "time_alive": 765,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 36,
  "time_alive": 1593,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 96,
  "time_alive": 172,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 92,
  "time_alive": 241,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 36,
  "time_alive": 1293,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 73,
  "time_alive": 917,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "d2a9ca3d84a249adaf2a6b5278228e38",
  "placement": 77,
  "time_alive": 590,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 37,
  "time_alive": 1590,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 95,
  "time_alive": 173,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 10,
  "time_alive": 1401,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 53,
  "time_alive": 1125,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 90,
  "time_alive": 168,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "631ad4b8fb964604875f0df5c3c968f3",
  "placement": 89,
  "time_alive": 151,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 43,
  "time_alive": 1545,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 35,
  "time_alive": 1673,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 65,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 32,
  "time_alive": 1790,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "c60e7fbe4ab6484ca63240d13f37c3c8",
  "placement": 80,
  "time_alive": 495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 63,
  "time_alive": 1245,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 68,
  "time_alive": 1126,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 84,
  "time_alive": 542,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 55,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 8,
  "time_alive": 1922,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "7272644e563943c8ad873451118ebb19",
  "placement": 85,
  "time_alive": 230,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "ec903561aeb343728b76cd798d20911e",
  "placement": 47,
  "time_alive": 1468,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "ec903561aeb343728b76cd798d20911e",
  "placement": 37,
  "time_alive": 1665,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "ec903561aeb343728b76cd798d20911e",
  "placement": 57,
  "time_alive": 1047,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "ec903561aeb343728b76cd798d20911e",
  "placement": 58,
  "time_alive": 1084,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "ec903561aeb343728b76cd798d20911e",
  "placement": 38,
  "time_alive": 1767,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "ec903561aeb343728b76cd798d20911e",
  "placement": 46,
  "time_alive": 1794,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 92,
  "time_alive": 196,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 83,
  "time_alive": 630,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 68,
  "time_alive": 890,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 93,
  "time_alive": 198,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 37,
  "time_alive": 1768,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "446905c9e7eb4815a741b3a8e5ad4c20",
  "placement": 54,
  "time_alive": 1624,
  "elims": 4,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 72,
  "time_alive": 1071,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 32,
  "time_alive": 1698,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 27,
  "time_alive": 1339,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "a13712bea37e4562beae6a2b46266652",
  "placement": 92,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 39,
  "time_alive": 1576,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 33,
  "time_alive": 1689,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 71,
  "time_alive": 813,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 40,
  "time_alive": 1272,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "6a6419213a5e4a93b5302b7050f86604",
  "placement": 69,
  "time_alive": 1238,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "cca85c0be20d4ef49e02061dc8d800da",
  "placement": 42,
  "time_alive": 1558,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "cca85c0be20d4ef49e02061dc8d800da",
  "placement": 11,
  "time_alive": 1829,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "cca85c0be20d4ef49e02061dc8d800da",
  "placement": 93,
  "time_alive": 192,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "cca85c0be20d4ef49e02061dc8d800da",
  "placement": 91,
  "time_alive": 223,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 40,
  "time_alive": 1572,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 74,
  "time_alive": 912,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 62,
  "time_alive": 994,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 64,
  "time_alive": 961,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 64,
  "time_alive": 1366,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "2b3da27c62d14887bd6daa865df33487",
  "placement": 37,
  "time_alive": 1918,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "6ee26bce15a3444eb8042073aa3e6dde",
  "placement": 79,
  "time_alive": 785,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "6ee26bce15a3444eb8042073aa3e6dde",
  "placement": 86,
  "time_alive": 596,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "6ee26bce15a3444eb8042073aa3e6dde",
  "placement": 26,
  "time_alive": 1344,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "6ee26bce15a3444eb8042073aa3e6dde",
  "placement": 71,
  "time_alive": 818,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "6ee26bce15a3444eb8042073aa3e6dde",
  "placement": 57,
  "time_alive": 1546,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "6ee26bce15a3444eb8042073aa3e6dde",
  "placement": 36,
  "time_alive": 1930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "baaee7e271af4c53b23080ee54c47ba1",
  "placement": 94,
  "time_alive": 170,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "baaee7e271af4c53b23080ee54c47ba1",
  "placement": 72,
  "time_alive": 1035,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "baaee7e271af4c53b23080ee54c47ba1",
  "placement": 70,
  "time_alive": 815,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "baaee7e271af4c53b23080ee54c47ba1",
  "placement": 72,
  "time_alive": 817,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "baaee7e271af4c53b23080ee54c47ba1",
  "placement": 12,
  "time_alive": 1889,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "baaee7e271af4c53b23080ee54c47ba1",
  "placement": 75,
  "time_alive": 693,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 32,
  "time_alive": 1599,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 82,
  "time_alive": 645,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 43,
  "time_alive": 1202,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 56,
  "time_alive": 1096,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 75,
  "time_alive": 837,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "ebc97d851d12432399218ed5576af75c",
  "placement": 73,
  "time_alive": 711,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 77,
  "time_alive": 828,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 38,
  "time_alive": 1663,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 66,
  "time_alive": 930,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 78,
  "time_alive": 692,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 66,
  "time_alive": 1298,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "71728635b8fc4ddc898bc68929bc49a5",
  "placement": 32,
  "time_alive": 1968,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "fb3a8dd8fc2e4e91838349822db2316b",
  "placement": 53,
  "time_alive": 1429,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "fb3a8dd8fc2e4e91838349822db2316b",
  "placement": 45,
  "time_alive": 1508,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "fb3a8dd8fc2e4e91838349822db2316b",
  "placement": 28,
  "time_alive": 1335,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "fb3a8dd8fc2e4e91838349822db2316b",
  "placement": 63,
  "time_alive": 972,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "fb3a8dd8fc2e4e91838349822db2316b",
  "placement": 51,
  "time_alive": 1564,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "fb3a8dd8fc2e4e91838349822db2316b",
  "placement": 53,
  "time_alive": 1652,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 41,
  "time_alive": 1570,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 91,
  "time_alive": 363,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 40,
  "time_alive": 1237,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 62,
  "time_alive": 1007,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 80,
  "time_alive": 408,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "9d2fb127cc4348b8bd675f6fd57278f7",
  "placement": 51,
  "time_alive": 1731,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 82,
  "time_alive": 581,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 78,
  "time_alive": 737,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 32,
  "time_alive": 1319,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 90,
  "time_alive": 295,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 41,
  "time_alive": 1757,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "eb86cf7f8ad64cc8a83d597f079784a8",
  "placement": 90,
  "time_alive": 142,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 52,
  "time_alive": 1440,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 84,
  "time_alive": 626,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 33,
  "time_alive": 1310,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 89,
  "time_alive": 304,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "657905a7c4c14055b4a6804a5af0c99e",
  "placement": 88,
  "time_alive": 239,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 54,
  "time_alive": 1426,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "2e8c7ba062d44ae7bd5a2111db33997d",
  "placement": 30,
  "time_alive": 1700,
  "elims": 2,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "469f8c3346c04952b8be7be3664ea32a",
  "placement": 31,
  "time_alive": 1614,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "30c07066-a4df-4361-a06b-5230bd99c5b3",
  "team_id": "469f8c3346c04952b8be7be3664ea32a",
  "placement": 87,
  "time_alive": 416,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "8c991412-e520-4b28-988f-ee43307084f6",
  "team_id": "469f8c3346c04952b8be7be3664ea32a",
  "placement": 51,
  "time_alive": 1143,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "622951aa-7719-4752-bfcc-8b1695c1ac5c",
  "team_id": "469f8c3346c04952b8be7be3664ea32a",
  "placement": 66,
  "time_alive": 926,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "038e60df-e644-4db7-bbfe-33c708410b4f",
  "team_id": "469f8c3346c04952b8be7be3664ea32a",
  "placement": 62,
  "time_alive": 1495,
  "elims": 0,
  "mode": 1
 },
 {
  "game_id": "ba42b56b-e27a-4195-bedc-e2ba043cbb05",
  "team_id": "469f8c3346c04952b8be7be3664ea32a",
  "placement": 56,
  "time_alive": 1521,
  "elims": 1,
  "mode": 1
 },
 {
  "game_id": "8fe917ca-6015-494a-9600-2035af456db6",
  "team_id": "e355e494ec3044e8913b669424036faf",
  "placement": 50,
  "time_alive": 1451,
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
    